import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoaderComponent } from './loader/loader.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    NavbarComponent,
    ToolbarComponent,
    LoaderComponent,
    GenericTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TableModule,
  ],
  exports: [
    NavbarComponent,
    LoaderComponent,
    GenericTableComponent
  ],
  providers: [

  ]
})
export class SharedModule { }
