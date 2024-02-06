import { Component, Input, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {
  constructor(public scrollService: ScrollService) { }

  ngOnInit(): void {}
}
