import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
  { path: '', redirectTo: 'title', pathMatch: 'full' },
  { path: ':sectionId', component: BaseComponent},
  { path: '**', component: BaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
