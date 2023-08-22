import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  ageNumber: number

  constructor() { }

  ngOnInit(): void {
    this.ageNumber = this.getAge(new Date("1996-12-01"));
  }

  getAge(birthdate: Date) {
    let timeDiff = Math.abs(Date.now() - birthdate.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    return age;
  }
}
