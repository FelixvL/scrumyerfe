import { Injectable } from '@angular/core';
import { Task } from './task'
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TaskService {

    constructor(private http: HttpClient){}

    toTheBackend():Observable<Task[]>{
         return this.http.get<Task[]>("http://localhost:8082/alleschepen");
    }

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