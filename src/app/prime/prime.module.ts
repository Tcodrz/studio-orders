import { NgModule } from '@angular/core';
import { ChipModule } from 'primeng/chip';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { FieldsetModule } from 'primeng/fieldset';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [],
  imports: [
    ChipModule,
    ToastModule,
    InputTextModule,
    ButtonModule,
    InputNumberModule,
    CalendarModule,
    FieldsetModule,
    ProgressSpinnerModule,
    MenubarModule,
  ],
  exports: [
    ChipModule,
    ToastModule,
    InputTextModule,
    ButtonModule,
    InputNumberModule,
    CalendarModule,
    FieldsetModule,
    ProgressSpinnerModule,
    MenubarModule
  ]
})
export class PrimeModule { }
