import {Component} from '@angular/core';

@Component({
    selector: 'embedded',
    template: `
<h4>Move items between multi list sortable containers</h4>
<div class="row">
    <div class="col-sm-3">
        Drag Containers <input type="checkbox"
               [(ngModel)]="dragOperation" />
        <div dnd-sortable-container
             [sortableData]="containers"
             [dropZones]="['container-dropZone']">
            <div class="col-sm3"
                 *ngFor="let container of containers; let i = index"
                 dnd-sortable
                 [sortableIndex]="i"
                 [dragEnabled]="dragOperation">
                <div class="card border-warning mb-3"
                     dnd-sortable-container
                     [sortableData]="container.widgets"
                     [dropZones]="['widget-dropZone']">
                    <div class="card-header">
                        {{container.id}} - {{container.name}}
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li *ngFor="let widget of container.widgets; let x = index"
                                class="list-group-item"
                                dnd-sortable
                                [sortableIndex]="x"
                                [dragEnabled]="!dragOperation"
                                [dragData]="widget">{{widget.name}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="card border-info mb-3">
            <div class="card-header">Widgets</div>
            <div class="card-body"
                 dnd-droppable
                 (onDropSuccess)="addTo($event)"
                 [dropZones]="['widget-dropZone']">
                <div *ngFor="let widget of widgets"
                     class="card border-ligth mb-3">
                    <div class="card-body">
                        {{widget.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
})
export class EmbeddedComponent {
    dragOperation: boolean = false;

    containers: Array<Container> = [
        new Container(1, 'Container 1', [new Widget('1'), new Widget('2')]),
        new Container(2, 'Container 2', [new Widget('3'), new Widget('4')]),
        new Container(3, 'Container 3', [new Widget('5'), new Widget('6')])
    ];

    widgets: Array<Widget> = [];
    addTo($event: any) {
        if ($event) {
            this.widgets.push($event.dragData);
        }
    }
}

class Container {
  constructor(public id: number, public name: string, public widgets: Array<Widget>) {}
}

class Widget {
  constructor(public name: string) {}
}