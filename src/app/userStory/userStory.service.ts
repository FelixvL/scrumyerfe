import { Injectable } from '@angular/core';
import { UserStory} from "./userStory";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserStoryService {

  constructor(private http: HttpClient) {
  }

  toTheBackEnd():Observable<UserStory[]>{
    return this.http.get<UserStory[]>("http://localhost:8082/getUserStory")
  }

  getUserStory(id: number): UserStory {
    let userStory: UserStory = new UserStory;
      if (id === 1) {
        userStory.title = "Projecten maken";
        userStory.description = "De user probeert een project te maken en heeft hierbij...";
      } else if (id === 2) {
        userStory.title = "Project afronden";
        userStory.description = "De user probeert een project af te maken en daarbij...";
      }
      return userStory;
  }
}
