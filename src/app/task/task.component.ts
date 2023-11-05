import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task';
import { remove } from 'firebase/database';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();
}
