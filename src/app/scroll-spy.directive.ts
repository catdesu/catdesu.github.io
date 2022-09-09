import { Directive, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective {

  @Input() public spiedTags: string[] = [];
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection: string;

  constructor(
    private _el: ElementRef
    ) {}

  @HostListener('window:scroll', ['$event']) 
  onScroll(event: any) {
    let currentSection;
    const children = this._el.nativeElement.children;
    const scrollTop = window.scrollY;
    const parentOffset = event.target.offsetTop === undefined ? 0 : event.target.offsetTop;
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      if (this.spiedTags.some((spiedTag) => spiedTag === element.tagName)) {
        if ((element.offsetTop - parentOffset) <= scrollTop) {
          currentSection = element.id;
        }
      }
    }
    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }
  
}
