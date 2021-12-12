import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PrimeModule } from './../prime/prime.module';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ToolbarComponent,
    LoaderComponent,
    GenericTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    PrimeModule
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
