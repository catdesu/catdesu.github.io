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

  constructor() { }

  ngOnInit(): void {
    
  }

  onSectionChange(sectionId: any) {
    this.currentSection = sectionId;
  }

  scrollTo(section: string): void {
    document.getElementById(section)!.scrollIntoView();
  }

  isActive(base: string): boolean {
    return this.currentSection === base;
  }
}
