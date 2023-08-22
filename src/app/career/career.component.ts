import { Component, OnInit } from '@angular/core';
import { CareerService } from '../services/career.service';
import { Career } from '../interfaces/career';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  public experiences: Array<Career> = [];
  public educations: Array<Career> = [];

  constructor(
    private _careerService: CareerService
  ) { }

  ngOnInit(): void {
    this.experiences = this._careerService.getExperiences();
    this.educations = this._careerService.getEducations();
  }
}
