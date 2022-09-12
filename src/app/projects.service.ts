import { Injectable } from '@angular/core';
import { Project } from './project';
import * as json from '../assets/data/projects.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects = (json as any).default;

  constructor() { }

  public getPro() : Array<Project> {
    let projects = [];

    for (let project of this.projects) {
      if (project.pro) {
        projects.push(project);
      }
    }

    return projects;
  }
}
