import {Component} from '@angular/core';

@Component({
    selector: 'dnd-simple',
    template: `
<h4>Simple Drag-and-Drop</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="card border-ligth mb-3">
            <div class="card-header">Available to drag</div>
            <div class="card-body text-dark">

                <div class="card text-white bg-primary mb-3"
                     style="max-width: 20rem;"
                     dnd-draggable
                     [dragEnabled]="true">
                    <div class="card-body">
                        <p class="card-text">Drag Me</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div class="card border-info mb-3"
             style="max-width: 20rem;">
            <div class="card-header">Place to drop</div>
            <div class="card-body text-info"
                 dnd-droppable
                 (onDropSuccess)="simpleDrop=simpleDrop + 1">
                <p class="card-text"
                   *ngIf="simpleDrop">Dropped {{simpleDrop}} times</p>
            </div>
        </div>
    </div>
</div>`
})
export class DndSimpleComponent {
    simpleDrop: number = 0;
}