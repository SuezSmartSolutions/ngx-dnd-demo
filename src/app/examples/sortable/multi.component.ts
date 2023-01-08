import { Component } from '@angular/core';

@Component({
    selector: 'multi',
    template: `
<h4>Multi list sortable</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="card border-warning mb-3">
            <div class="card-header">
                Available boxers
            </div>
            <div class="card-body"
                 dnd-sortable-container
                 [dropZones]="['boxers-zone']"
                 [sortableData]="listBoxers">
                <ul class="list-group">
                    <li *ngFor="let item of listBoxers; let i = index"
                        class="list-group-item"
                        dnd-sortable
                        [sortableIndex]="i">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div class="card border-success mb-3">
            <div class="card-header">
                First Team
            </div>
            <div class="card-body"
                 dnd-sortable-container
                 [dropZones]="['boxers-zone']"
                 [sortableData]="listTeamOne">
                <ul class="list-group">
                    <li *ngFor="let item of listTeamOne; let i = index"
                        class="list-group-item"
                        dnd-sortable
                        [sortableIndex]="i">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div class="card border-info mb-3">
            <div class="card-header">
                Second Team
            </div>
            <div class="card-body"
                 dnd-sortable-container
                 [dropZones]="['boxers-zone']"
                 [sortableData]="listTeamTwo">
                <ul class="list-group">
                    <li *ngFor="let item of listTeamTwo; let i = index"
                        class="list-group-item"
                        dnd-sortable
                        [sortableIndex]="i">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
</div>`
})
export class MultiComponent {
    listBoxers: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
    listTeamOne: Array<string> = [];
    listTeamTwo: Array<string> = [];
}