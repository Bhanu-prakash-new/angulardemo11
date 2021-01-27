import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { TableFreshComponent } from './table-fresh/table-fresh.component';
import { NewtableComponent } from './newtable/newtable.component'; 
 

@NgModule({
  declarations: [
    AppComponent,
    TableFreshComponent,
    NewtableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
 
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  
  bootstrap: [AppComponent]
  })
export class AppModule { }
