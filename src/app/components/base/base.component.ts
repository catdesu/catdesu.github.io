import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {}

  onSectionChange(sectionId: any) {
    this.scrollService.currentSection = sectionId;
  }
}
