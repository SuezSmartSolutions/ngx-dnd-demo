import {Component} from '@angular/core';

@Component({
    selector: 'simple-sortable-copy',
    template: `
<h4>Simple sortable With Drop into something, without delete it</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="card border-warning mb-3"
             dnd-sortable-container
             [sortableData]="sourceList"
             [dropZones]="['source-dropZone']">
            <div class="card-header">Source List</div>
            <div class="card-body">
                <ul class="list-group">
                    <li *ngFor="let source of sourceList; let x = index"
                        class="list-group-item"
                        dnd-sortable
                        [sortableIndex]="x"
                        [dragEnabled]="true"
                        [dragData]="source">{{source.name}}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="card border-info mb-3">
            <div class="card-header">Target List</div>
            <div class="card-body"
                 dnd-droppable
                 (onDropSuccess)="addTo($event)"
                 [dropZones]="['source-dropZone']">
                <ul class="list-group">
                    <li *ngFor="let target of targetList"
                        class="list-group-item">
                        {{target.name}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>`
})
export class SimpleSortableCopyComponent {

    sourceList: Widget[] = [
        new Widget('1'), new Widget('2'),
        new Widget('3'), new Widget('4'),
        new Widget('5'), new Widget('6')
    ];

    targetList: Widget[] = [];
    addTo($event: any) {
        this.targetList.push($event.dragData);
    }
}

class Widget {
  constructor(public name: string) {}
}