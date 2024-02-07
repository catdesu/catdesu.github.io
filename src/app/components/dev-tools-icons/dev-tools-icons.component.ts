import { Component, Input, OnInit } from '@angular/core';
import { Language } from 'src/app/interfaces/language';

@Component({
  selector: 'app-dev-tools-icons',
  templateUrl: './dev-tools-icons.component.html',
  styleUrls: ['./dev-tools-icons.component.scss']
})
export class DevToolsIconsComponent implements OnInit {
  @Input() devTools: Language[];

  constructor() { }

  ngOnInit(): void {
  }

}
