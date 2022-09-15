import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsReactComponent } from './forms-react/forms-react.component';

const routes: Routes = [
  { path: 'forms', component: FormsReactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
