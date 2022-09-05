import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Array<Project> = [];

  constructor(
    private _projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.projects = this._projectService.getPro();
  }

}
