import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import projects from '../../assets/data/projects.json';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  getProProjects(): Project[] {
    return projects.filter((project: Project) => project.pro);
  }

  getPersonalProjects(): Project[] {
    return projects.filter((project: Project) => !project.pro);
  }
}
