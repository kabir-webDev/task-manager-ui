import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  private sound: Howl;
  constructor() {

    this.sound = new Howl({
      src: ['../../assets/audio/tap.mp3',]
      // src: ['../../assets/audio/maar.mp3',]
    });
  }

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  inProgress = ['Get Dressed up', 'Trim Beard', 'Take a shower'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    this.sound.stop();
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
    this.sound.play();
  }
  openTask(param:any) {
    this.sound.stop();
    this.sound.play();
  }
}