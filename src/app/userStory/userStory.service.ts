import { Injectable, inject } from '@angular/core';
import { UserStory } from "./userStory";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserStoryService {
  private userStories = new BehaviorSubject<UserStory[]>([]);
  public userStories$: Observable<UserStory[]> = this.userStories.asObservable();

  private http = inject(HttpClient);

  refreshUserstories() {
    this.http.get<UserStory[]>("http://localhost:8082/userstories/")
      .subscribe(userStories => {
        this.userStories.next(userStories);
      })
  }

  getUserStory(id: number): UserStory {
    if (id === 1) {
      return {
        id: 1,
        title: "Projecten maken",
        description: "De user probeert een project te maken en heeft hierbij..."
      }
    } else if (id === 2) {
      return {
        id: 2,
        title: "Project afronden",
        description: "De user probeert een project af te maken en daarbij..."
      }
    }

    return {
      id: -1,
      title: "Onbekende Userstory",
      description: "...",
    };
  }
}
