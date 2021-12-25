import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PrimeModule } from './../prime/prime.module';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
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
    ToolbarComponent,
    LoaderComponent,
    GenericTableComponent
  ],
  providers: [

  ]
})
export class SharedModule { }
