import { Injectable } from '@angular/core';
import { Skill } from '../interfaces/skill';
import skills from '../../assets/data/skills.json';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor() {}

  public getSkills(): Skill[] {
    return skills.filter((skill: Skill) => !skill.isSpokenLanguage && !skill.isTool);
  }

  public getLanguages(): Skill[] {
    return skills.filter((skill: Skill) => skill.isSpokenLanguage && !skill.isTool);
  }

  public getTools(): Skill[] {
    return skills.filter((skill: Skill) => !skill.isSpokenLanguage && skill.isTool);
  }
}
