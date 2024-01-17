import { Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NavigationService } from './core/layout/sidenav/navigation.service';
import { PermissionService } from './shared/services/permission.service';
import { ToolbarService } from './shared/services/toolbar.service';
import { filter, map, switchMap, take } from 'rxjs/operators';



@Component({
  selector: 'edu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
constructor(
  private navigationSvc: NavigationService,
  private titleService: Title,
  private router: Router,
  private route: ActivatedRoute,
  private toolbarService: ToolbarService,
  // private permissionSvc: PermissionService,
  // private authService: AuthService,
){
  this.navigationSvc.loadItems(
    [
      {
        type: 'link',
        isVisible: true,
        label: 'Homepage',
        route: '/dashboard',
        icon: "grid_view"
      },
      {
        type: 'link',
        isVisible: true,
        label: 'Tutorial',
        route: '/tutorial',
        icon: "summarize"
      },
      // {
      //   type: 'link',
      //   label: 'Virtual Machine',
      //   route: '/virtual-machine',
      //   icon: "view_in_ar",
      //   isVisible: true,
      // },
      // {
      //   type: 'link',
      //   label: 'Users',
      //   route: '/users',
      //   icon: "group_add",
      //   isVisible: true,
      // },
      // {
      //   type: 'link',
      //   label: 'Settings',
      //   route: '/settings',
      //   icon: "settings",
      //   isVisible: true,
      //   // children: [
      //   //   {
      //   //     type: 'link',
      //   //     label: 'General',
      //   //     route: 'settings/general',
      //   //     isVisible: true,
      //   //   }
      //   // ]
      // }
    ]
  )
}

ngOnInit(): void {  
  this.router
  .events.pipe(
    filter(event => event instanceof NavigationEnd),
    map((_) => {
      let _route = this.route.firstChild
      while (_route?.firstChild) {
        _route = _route.firstChild
      }
      return _route
    }),
    switchMap((_route: any) => _route.data),
  ).subscribe((data: any) => {
    this.titleService.setTitle(data?.title ? `${data?.title} | Kabir Hasan` : "Kabir Hasan");
    this.toolbarService.changeToolBarData({ toolbarTitle: data?.toolbarTitle || '' })
  });
}

}
