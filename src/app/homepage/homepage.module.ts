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
import { RouterModule } from '@angular/router';
import { RequesterService } from '../shared/services/requester.service';
import { AuthService } from '../auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthGuard } from '../shared/guard/auth.guard';


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
    CdkDrag,
    RouterModule,
  ],
  providers: [
    RequesterService, AuthService, MatSnackBar, AuthGuard
  ]
})
export class HomepageModule { }
