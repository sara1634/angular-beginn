import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, FormsModule],
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent],
  exports: [LoginComponent, RegisterComponent, ResetPasswordComponent],
})
export class AuthModule {}
