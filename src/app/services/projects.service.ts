import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import projects from '../../assets/data/projects.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor() { }

  getProProjects(): Project[] {
    return projects.filter(project => project.pro === true);
  }
  
  getPersonalProjects(): Project[] {
    return projects.filter(project => project.pro !== true);
  }
}
