import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  subjectListArray:Array<any>=[
    {
      subName: 'Physics',
      subIcon: 'physics.png',
    },
    {
      subName: 'Chemistry',
      subIcon: 'chemistry.png',
    },
    {
      subName: 'Math',
      subIcon: 'math.png',
    },
    {
      subName: 'Biology',
      subIcon: 'biology.png',
    },
    {
      subName: 'English',
      subIcon: 'chemistry.png',
    },
  ];

}
