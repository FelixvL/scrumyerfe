import { Component } from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
    selector: 'project-tile',
    template: `
    <div class="project-tile">
        <h1>Project</h1>
        <div>
            <h2>All projects</h2>
            <div class="projects" *ngFor="let project of allProjects">
                <p>Project naam: {{project.name}}</p>
                <p>Project beschrijving: {{project.description}}</p>
            </div>
            <p *ngIf="allProjects.length === 0">No projects found</p>
        </div>
        <button (click)="getProjects()">Haal alle projects</button>
        <div>
            <h2>Add project</h2>
            <div class="form-group">
                <label for="projectName">Project name:</label>
                <input type="text" placeholder="Enter project name" [(ngModel)]="projectName" />
            </div>
            <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" placeholder="Enter project description" [(ngModel)]="description" />
            </div>
            <button (click)="addProject()">Add project</button>
        </div>
    </div>
    `,
    styleUrls: ['./project.component.css'],
    providers: [ProjectService]
})
export class ProjectComponent {
    allProjects: Project[] = [];
    projectName = '';
    description = '';

    constructor(private projectService: ProjectService) {
        this.getProjects();
    }

    getProjects() {
        this.projectService.getAllProjects().pipe().subscribe(resp => this.allProjects = resp);
    }

    addProject() {
        if (!this.projectName || !this.description) {
            alert('Please enter project name and description');
            return;
        }
        let project: Project = new Project();
        project.name = this.projectName;
        project.description = this.description;
        this.projectService.addProject(project).pipe().subscribe(resp => this.getProjects());
        this.projectName = '';
        this.description = '';
    }
}
