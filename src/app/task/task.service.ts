import { Injectable } from '@angular/core';
import { Task } from './task'
@Injectable()
export class TaskService {



    krijgTaak(id: number): Task {
        let taak1: Task = new Task;
        if (id === 1) {
            taak1.taaktitel = "Jyn";
            taak1.omschrijving = "Erso";
        } else if (id === 2) {
            taak1.taaktitel = "Frodo";
            taak1.omschrijving = "Baggins";
        } 
        return taak1;
   }
}