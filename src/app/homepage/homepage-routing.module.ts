import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home-alert/homepage.component';
import { AuthGuard } from '../shared/guard/auth.guard';

const routes: Routes = [
  {
    path:'',
    canActivate: [AuthGuard],
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
