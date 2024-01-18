import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';
import { RequesterService } from 'src/app/shared/services/requester.service';

@Component({
  selector: 'edu-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  isAlertOpen: boolean = true;
  private sound: Howl;
  constructor(
    private request: RequesterService
  ) {

    this.sound = new Howl({
      // src: ['../../assets/audio/tap.mp3',]
      src: ['../../assets/audio/maar.mp3',]
    });
  }

  ngOnInit(): void {
  }
  closeFunction(){
    this.isAlertOpen = false;
  }

  playNotification() {
    this.sound.play();
  }
  logOut(): void {
    this.request.logout();
  }
}
