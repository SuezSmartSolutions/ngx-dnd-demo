import { Routes, RouterModule } from '@angular/router';

import { WorkBenchComponent } from './workbench.component';
import { ZoneComponent } from './dnd/zone.component';
import { CustomDataComponent } from './dnd/custom-data.component';
import { CustomFunctionComponent } from './dnd/custom-function.component';
import { ShoppingBasketComponent } from './dnd/shopping-basket.component';

import { SimpleSortableComponent } from './sortable/simple.component';
import { MultiComponent } from './sortable/multi.component';
import { RecycleMultiComponent } from './sortable/recycle-multi.component';
import { EmbeddedComponent } from './sortable/embedded.component';
import { SimpleSortableCopyComponent } from './sortable/simple-copy.component';
import { NgModule } from '@angular/core';
import { DndSimpleComponent } from './dnd/simple.component';

export const routes: Routes = [
    {
        path: '',
        component: WorkBenchComponent,
        children: [
            { path: 'dnd-simple', component: DndSimpleComponent },
            { path: 'dnd-zone', component: ZoneComponent },
            { path: 'dnd-custom-data', component: CustomDataComponent },
            { path: 'dnd-custom-function', component: CustomFunctionComponent },
            { path: 'dnd-shopping-basket', component: ShoppingBasketComponent },
            { path: 'sortable-simple', component: SimpleSortableComponent },
            { path: 'sortable-recycle-multi', component: RecycleMultiComponent },
            { path: 'sortable-simple-copy', component: SimpleSortableCopyComponent },
            { path: 'sortable-multi', component: MultiComponent },
            { path: 'sortable-embedded', component: EmbeddedComponent },
            { path: '', pathMatch: 'full', redirectTo: 'dnd-simple' },
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'dnd-simple' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoDndRoutingModule { }