import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NgXtruncatePipe } from './pipes/ngxtruncate';


@NgModule({
  declarations: [
    NgXtruncatePipe
  ],
  exports: [
    NgXtruncatePipe
  ],
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class NgXtruncateModule {}
