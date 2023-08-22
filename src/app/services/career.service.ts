import { Injectable } from '@angular/core';
import { Career } from '../interfaces/career';
import * as exp from '../../assets/data/experiences.json';
import * as edu from '../../assets/data/educations.json';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor() { }

  private experiences = (exp as any).default;
  private educations = (edu as any).default;

  public getExperiences() : Array<Career> {
    let experiences = [];

    for (let car of this.experiences) {
      experiences.push({
        "title": car.title, 
        "duration": car.duration, 
        "job": car.job, 
        "orientation": car.orientation, 
        "description": car.description, 
        "languages": car.languages, 
        "location": car.location
      });
    }

    return experiences;
  }

  public getEducations() : Array<Career> {
    let educations = [];

    for (let car of this.educations) {
      educations.push({
        "title": car.title, 
        "duration": car.duration, 
        "job": car.job, 
        "orientation": car.orientation, 
        "description": car.description,
        "languages": car.languages, 
        "location": car.location
      });
    }

    return educations;
  }
}
