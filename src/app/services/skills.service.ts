import { Injectable } from '@angular/core';
import { Skills } from '../interfaces/skills';
import * as json from '../../assets/data/skills.json';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  public skills = (json as any).default;

  constructor() { }

  public getSkills() : Array<Skills> {
    let skills = [];

    for (let skill of this.skills) {
      if (!skill.languages && !skill.tools) {
        skills.push(skill);
      }
    }

    return skills;
  }

  public getLanguages() : Array<Skills> {
    let skills = [];

    for (let skill of this.skills) {
      if (skill.languages && !skill.tools) {
        skills.push(skill);
      }
    }

    return skills;
  }

  public getTools() : Array<Skills> {
    let skills = [];

    for (let skill of this.skills) {
      if (!skill.languages && skill.tools) {
        skills.push(skill);
      }
    }

    return skills;
  }
}
