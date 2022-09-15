import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsReactComponent } from './forms-react/forms-react.component';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [FormsReactComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
    FormsRoutingModule,
    
    MatCardModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
  ]
})
export class FormsreactiiveModule { }
