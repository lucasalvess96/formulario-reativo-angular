import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './forms/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/homeComponent', pathMatch: "full"},
  { path: '**',  component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
