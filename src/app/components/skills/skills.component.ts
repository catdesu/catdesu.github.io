import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: any[] = [];
  languages: any[] = [];
  tools: any[] = [];

  constructor(private _skillService: SkillsService) {}

  ngOnInit(): void {
    this.skills = this._skillService.getSkills();
    this.languages = this._skillService.getLanguages();
    this.tools = this._skillService.getTools();
  }
}
