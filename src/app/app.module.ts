import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './pages/home/home.component.spec';
import { ValueComponent } from './value/value.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
    AppRoutingModule,
    RouterModule,
  ],
  declarations: [
    AppComponent,
    ValueComponent,
    HelloComponent,
    HomeComponent,
    HeaderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
