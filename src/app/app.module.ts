import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';
import { FormbuildersComponent } from './components/formbuilders/formbuilders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReactiveFormsComponent,
    TemplateFormsComponent,
    AppComponent,
    FormbuildersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
