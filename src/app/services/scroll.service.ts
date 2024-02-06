import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  currentSection: string = 'title';

  constructor() { }

  scrollTo(section: string): void {
    document.getElementById(section)!.scrollIntoView();
  }

  isActive(base: string): boolean {
    return this.currentSection === base;
  }
}
