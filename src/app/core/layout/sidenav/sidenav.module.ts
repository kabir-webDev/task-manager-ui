import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SidenavItemModule } from './sidenav-item/sidenav-item.module';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    SidenavItemModule,
    MatDividerModule
  ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
