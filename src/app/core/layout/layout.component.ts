import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from "@angular/cdk/layout";
import { MatSidenav } from '@angular/material/sidenav';
// import { takeWhile } from 'rxjs';

@Component({
  selector: 'kc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild("sidenav") private sidenav!: MatSidenav;
  isAlive: boolean = true;
  isOpen = true;
  isLargeDevice!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidenav(): void {
    // this.isOpen = !this.isOpen;
  }

}
