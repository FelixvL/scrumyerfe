import { Component, inject } from '@angular/core';
import { UserStory } from './userStory'
import { UserStoryService } from "./userStory.service";
import { BehaviorSubject, Observable, map } from 'rxjs';

@Component({
  selector: 'userStory-selector',
  templateUrl: './userStory.component.html',
  styleUrls: ['./userStory.component.css'],
  providers: [UserStoryService]
})
export class UserStoryComponent {
  private userStoryService = inject(UserStoryService);

  public userStories$: Observable<UserStory[]> = this.userStoryService.userStories$;

  public userStory1: UserStory;
  public userStory2: UserStory;
  public userStory1Copy: UserStory;

  constructor() {
    this.userStory1 = this.userStoryService.getUserStory(1);
    this.userStory2 = this.userStoryService.getUserStory(2);
    this.userStory1Copy = this.userStoryService.getUserStory(1);

    this.userStoryService.refreshUserstories();
  }
}

