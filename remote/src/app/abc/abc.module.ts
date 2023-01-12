import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbcRoutingModule } from './abc-routing.module';
import { AbcComponent } from './abc.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AbcComponent],
  imports: [CommonModule,BrowserModule, AbcRoutingModule],
})
export class AbcModule {}
