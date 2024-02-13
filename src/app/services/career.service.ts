import { Injectable } from '@angular/core';
import { Career } from '../interfaces/career';
import experiences from '../../assets/data/experiences.json';
import educations from '../../assets/data/educations.json';

@Injectable({
  providedIn: 'root',
})
export class CareerService {
  constructor() {}

  public getExperiences(): Career[] {
    return experiences;
  }

  public getEducations(): Career[] {
    return educations;
  }
}
