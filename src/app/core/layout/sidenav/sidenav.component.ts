import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NavigationLink } from './navigation-item.interface';
import { NavigationService } from './navigation.service';
// import { takeWhile } from "rxjs";
import { trackByRoute } from '../../utils/track-by';

@Component({
  selector: 'kc-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  isAlive: boolean = true
  @Output() toggleSidenav = new EventEmitter();
  @Input() collapse!: boolean;

  sidenavItems: NavigationLink[] = [];

  trackByRoute = trackByRoute;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    // this.navigationService.Items$.pipe(takeWhile(() => this.isAlive))
    //   .subscribe(items => {
    //     this.sidenavItems = items.filter(item => item.isVisible === true)
    //   })
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

}
