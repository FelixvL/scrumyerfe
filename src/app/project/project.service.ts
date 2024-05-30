import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Project } from './project';

@Injectable()
export class ProjectService {

    private baseUrl: string = 'http://localhost:8082/projects/'; // Base URL for API

    constructor(private http: HttpClient) { }

    getAllProjects(): Observable<Project[]> {
        // API call to get all projects
        return this.http.get<Project[]>(this.baseUrl);
    }

    getProject(title: string, description: string): Project {
        let project: Project = new Project();
        project.name = title;
        project.description = description;
        return project;
    }

    addProject(project: Project): Observable<Project> {
        return this.http.post<Project>(this.baseUrl, project);
    }
}