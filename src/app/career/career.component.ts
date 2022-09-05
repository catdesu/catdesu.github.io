import { Component, OnInit } from '@angular/core';
import { CareerService } from '../career.service';
import { Career } from '../career';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
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
