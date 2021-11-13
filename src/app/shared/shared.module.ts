import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ToolbarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    NavbarComponent,
    LoaderComponent
  ],
  providers: [

  ]
})
export class SharedModule { }
