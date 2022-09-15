import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './forms/home/home.component';
import { FormsreactiiveModule } from './forms/formsreactiive.module';

import {MatCardModule} from '@angular/material/card';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsreactiiveModule,
    AppRoutingModule,

    MatCardModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
