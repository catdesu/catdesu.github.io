import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor(
    public base: BaseComponent,
    public scrollService: ScrollService,
  ) { }

  ngOnInit(): void {
  }

}
