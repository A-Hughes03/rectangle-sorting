import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { GenerateButtonComponent } from './generate-button/generate-button.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RectangleComponent } from './rectangle/rectangle.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenerateButtonComponent,
    NavBarComponent,
    RectangleComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
