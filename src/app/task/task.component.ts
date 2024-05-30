import { Component } from '@angular/core';
import { Task } from './task'
import { TaskService } from './task.service';

@Component({
  selector: 'task-selector',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TaskService]
})
export class TaskComponent {
  taaknaam = 'taaknaam1';
  getal = 5;
  taak1:Task  = new Task;
  constructor(private taskService: TaskService){

  }
  ophogen(){
    this.getal++;
    this.taak1 = this.taskService.krijgTaak(1)
  }

}
