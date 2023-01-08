// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DndModule } from '@suez/ngx-dnd';
import { DemoDndRoutingModule } from './demo-dnd-routing.module';
import { CustomDataComponent } from './dnd/custom-data.component';
import { CustomFunctionComponent } from './dnd/custom-function.component';
import { ShoppingBasketComponent } from './dnd/shopping-basket.component';
import { WorkBenchComponent } from './workbench.component';
import { ZoneComponent } from './dnd/zone.component';
import { EmbeddedComponent } from './sortable/embedded.component';
import { MultiComponent } from './sortable/multi.component';
import { RecycleMultiComponent } from './sortable/recycle-multi.component';
import { SimpleSortableCopyComponent } from './sortable/simple-copy.component';
import { SimpleSortableComponent } from './sortable/simple.component';
import { DndSimpleComponent } from './dnd/simple.component';
import { FormsModule } from '@angular/forms';
import { PrismComponent } from './prism.component';

export const dndComponents = [PrismComponent, DndSimpleComponent, WorkBenchComponent, SimpleSortableComponent, ZoneComponent, CustomDataComponent, CustomFunctionComponent, ShoppingBasketComponent];
export const sortableComponents = [SimpleSortableComponent, MultiComponent, RecycleMultiComponent, EmbeddedComponent, SimpleSortableCopyComponent];

@NgModule({
    imports: [CommonModule, FormsModule, HttpClientModule, DndModule, DemoDndRoutingModule],
    declarations: [...dndComponents, ...sortableComponents]
})
export class DemoDndModule { }