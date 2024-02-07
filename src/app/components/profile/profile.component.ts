import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/interfaces/social';
import { SocialsService } from 'src/app/services/socials.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  ageNumber: number;
  socials: Social[];

  constructor(private socialsService: SocialsService) { }

  ngOnInit(): void {
    this.ageNumber = this.getAge(new Date("1996-12-01"));
    this.socials = this.socialsService.getAll();
  }

  getAge(birthdate: Date): number {
    let timeDiff = Math.abs(Date.now() - birthdate.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    return age;
  }
}
