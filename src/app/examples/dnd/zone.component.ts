import { Component } from '@angular/core';

@Component({
    selector: 'zone',
    template: `
<h4>Restricted Drag-and-Drop with zones</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="card border-primary mb-3">
            <div class="card-header">Available to drag</div>
            <div class="card-body">
                <div class="card border-ligth mb-3"
                     dnd-draggable
                     [dragEnabled]="true"
                     [dropZones]="['zone1']">
                    <div class="card-body">
                        <div>Drag Me</div>
                        <div>Zone 1 only</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card border-success mb-3">
            <div class="card-header">Available to drag</div>
            <div class="card-body">
                <div class="card border-ligth mb-3"
                     dnd-draggable
                     [dragEnabled]="true"
                     [dropZones]="['zone1', 'zone2']">
                    <div class="card-body">
                        <div>Drag Me</div>
                        <div>Zone 1 & 2</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div dnd-droppable
             class="card border-info mb-3"
             [dropZones]="['zone1']"
             (onDropSuccess)="zoneDrop1=zoneDrop1+1">
            <div class="card-header">Zone 1</div>
            <div class="card-body">
                <p class="card-text"
                   *ngIf="zoneDrop1">Dropped {{zoneDrop1}} times</p>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div dnd-droppable
             class="card border-warning mb-3"
             [dropZones]="['zone2']"
             (onDropSuccess)="zoneDrop2=zoneDrop2+1">
            <div class="card-header">Zone 2</div>
            <div class="card-body">
                <p class="card-text"
                   *ngIf="zoneDrop2">Dropped {{zoneDrop2}} times</p>
            </div>
        </div>
    </div>
</div>`
})
export class ZoneComponent {
    zoneDrop1: number = 0;
    zoneDrop2: number = 0;
}