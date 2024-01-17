import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './home-alert/homepage.component';
import { MatIconModule } from '@angular/material/icon';
import { TaskListComponent } from './task-list/task-list.component';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    HomepageComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MatIconModule,
    CdkDropList, 
    CdkDrag
  ]
})
export class HomepageModule { }
