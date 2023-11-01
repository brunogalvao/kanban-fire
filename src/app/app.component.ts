import { Component } from '@angular/core';
import { Task } from './task/task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kanban-fire';

  todo: Task[] = [
    {
      title: 'Buy milk',
      description: 'Go to the store and buy milk',
    },
    {
      title: 'Create an app',
      description: 'Create an app using Angular',
    },
  ];
}
