import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { ProjectComponent } from './project/project.component';
import { UserStoryComponent } from './userStory/userStory.component';

const routes: Routes = [
  {path: "task", component: TaskComponent},
  {path: "project", component: ProjectComponent},
  {path: "userstory", component: UserStoryComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
