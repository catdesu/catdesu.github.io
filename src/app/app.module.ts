import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/base.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CareerComponent } from './components/career/career.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/title/title.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { DevToolsIconsComponent } from './components/dev-tools-icons/dev-tools-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    ProfileComponent,
    CareerComponent,
    FooterComponent,
    TitleComponent,
    ProjectsComponent,
    ScrollSpyDirective,
    NavigationMenuComponent,
    DevToolsIconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
