import {Component} from '@angular/core';

@Component({
    selector: 'simple',
    template: `
<h4>Simple sortable</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="card border-success mb-3">
            <div class="card-header">
                Favorite drinks
            </div>
            <div class="card-body">
                <ul class="list-group"
                    dnd-sortable-container
                    [sortableData]="listOne">
                    <li *ngFor="let item of listOne; let i = index"
                        class="list-group-item"
                        dnd-sortable
                        [sortableIndex]="i">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="card border-ligth mb-3">
            <div class="card-body">
                My prefences:<br />
                <span *ngFor="let item of listOne; let i = index">{{i + 1}}) {{item}}<br /></span>
            </div>
        </div>
    </div>
</div>`
})
export class SimpleSortableComponent {
    listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
}