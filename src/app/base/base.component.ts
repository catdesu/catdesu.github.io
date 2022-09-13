import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  
  currentSection: string = 'title';

  constructor(
    private _router: Router,
    private _route: ActivatedRoute, 
    private _location: Location
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.currentSection = params['sectionId'];
      this.scrollTo(this.currentSection);
    });
  }

  onSectionChange(sectionId: any) {
    this._location.go(sectionId);
    this.currentSection = sectionId;
  }

  scrollTo(section: string): void {
    document.getElementById(section)!.scrollIntoView();
  }

  isActive(base: string): boolean {
    return this.currentSection === base;
  }
}
