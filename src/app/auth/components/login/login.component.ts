import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  ngOnInit() {}

  constructor(private authService: AuthService) {}

  onSubmit(f: NgForm) {
    const loginObserver = {
      next: (x) => console.log('User logged in'),
      error: (err) => console.log(err),
    };

    this.authService.login(f.value).subscribe(loginObserver);
  }
}
