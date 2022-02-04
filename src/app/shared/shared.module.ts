import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgProgressModule } from '@ngx-progressbar/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-alerts';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [],
  exports: [],
})
export class SharedModule {}
