import {Component} from '@angular/core';

@Component({
    selector: 'custom-data',
    template: `
<h4>Transfer custom data in Drag-and-Drop</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="card border-success mb-3">
            <div class="card-header">Available to drag</div>
            <div class="card-body">
                <div class="card border-ligth mb-3"
                     dnd-draggable
                     [dragEnabled]="true"
                     [dragData]="transferData">
                    <div class="card-body">
                        <div>Drag Me</div>
                        <div>{{transferData | json}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div dnd-droppable
             class="card border-info mb-3"
             (onDropSuccess)="transferDataSuccess($event)">
            <div class="card-header">Place to drop (Items:{{receivedData.length}})</div>
            <div class="card-body">
                <div [hidden]="receivedData.length === 0"
                     *ngFor="let data of receivedData">{{data | json}}</div>
            </div>
        </div>
    </div>
</div>`
})
export class CustomDataComponent {
    transferData: Object = {id: 1, msg: 'Hello'};
    receivedData: Array<any> = [];

    transferDataSuccess($event: any) {
        this.receivedData.push($event);
    }
}