import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects: Map<string, Project[]> = new Map<string, Project[]>();

  constructor(
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.projects.set('Professionnel', this.projectService.getProProjects());
    this.projects.set('Personnel', this.projectService.getPersonalProjects());
  }
}
