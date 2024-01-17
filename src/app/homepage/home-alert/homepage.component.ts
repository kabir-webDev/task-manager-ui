import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edu-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  isAlertOpen: boolean = true;
  constructor() {}

  ngOnInit(): void {
  }
  closeFunction(){
    this.isAlertOpen = false;
  }
  subjectArrayScience: Array<any> = [
    {
      icon:'phy.png',
      name:'Physics',
      totalVideo:999,
      videoUrl:'www.google.com'
    },
    {
      icon:'chem.png',
      name:'Chemistry',
      totalVideo:999,
      videoUrl:'www.google.com'
    },
    {
      icon:'bio.png',
      name:'Biology',
      totalVideo:999,
      videoUrl:'www.google.com'
    },
    {
      icon:'mat.png',
      name:'Mathemetics',
      totalVideo:999,
      videoUrl:'www.google.com'
    },
    {
      icon:'phy.png',
      name:'Bangla',
      totalVideo:999,
      videoUrl:'www.google.com'
    },
    {
      icon:'mat.png',
      name:'English',
      totalVideo:999,
      videoUrl:'www.google.com'
    },
    {
      icon:'mat.png',
      name:'Higher Mathemetics',
      totalVideo:999,
      videoUrl:'www.google.com'
    },
    {
      icon:'bio.png',
      name:'StoryBook',
      totalVideo:999,
      videoUrl:'www.google.com'
    },
    {
      icon:'bio.png',
      name:'Bangla',
      totalVideo:999,
      videoUrl:'www.google.com'
    },
    {
      icon:'chem.png',
      name:'English',
      totalVideo:999,
      videoUrl:'www.google.com'
    },
    {
      icon:'phy.png',
      name:'Higher Mathemetics',
      totalVideo:999,
      videoUrl:'www.google.com'
    },
    {
      icon:'phy.png',
      name:'Bangla',
      totalVideo:999,
      videoUrl:'www.google.com'
    },
  ]
  tabFunction(section:string){
    
  }
}
