import { Component } from '@angular/core';
import { UserStory} from './userStory'
import {UserStoryService} from "./userStory.service";

@Component({
  selector: 'userStory-selector',
  templateUrl: './userStory.component.html',
  styleUrls: ['./userStory.component.css'],
  providers: [UserStoryService]
})
export class UserStoryComponent {
  lijst: UserStory[] = [];
  userStory1:UserStory = new UserStory;
  userStory2:UserStory = new UserStory;
  userStory1Copy:UserStory = new UserStory;
  constructor(private userStoryService: UserStoryService) {
    this.userStory1 = this.userStoryService.getUserStory(1);
    this.userStory2 = this.userStoryService.getUserStory(2);
    this.userStory1Copy = this.userStoryService.getUserStory(1);
  }
  abc(){
    console.log("abc");
  }
  executeRest() {
    console.log("hoi");
    this.userStoryService.toTheBackEnd().subscribe(
      resp => {
        console.log(resp);
        this.lijst = resp;
      }
    )
  }

  switchUser() {
    console.log("abs");
    this.userStory1 = this.userStory2;
    this.userStory2 = this.userStory1Copy;
    this.userStory1Copy = this.userStory1;
  }
}

