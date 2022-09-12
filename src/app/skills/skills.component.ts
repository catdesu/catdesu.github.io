import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Array<any> = [];
  languages: Array<any> = [];
  tools: Array<any> = [];

  constructor(
    private _skillService: SkillsService
  ) { }

  ngOnInit(): void {
    this.skills = this._skillService.getSkills();
    this.languages = this._skillService.getLanguages();
    this.tools = this._skillService.getTools();
  }

}
