import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { User } from '../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form!: FormGroup;
  user!: User;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        this.usersService.collection(token).subscribe((data) => {
          // console.log(data.user, 'data');
          this.user = data.user;
          // console.log(this.user, 'user');
          this.router.navigate(['tabs', 'tab1']);
        });
      } catch (error) {}
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: [''],
      pwd: [''],
    });
  }

  onSubmit() {
    const user = this.form.value;
    console.log('ok', user);
    this.usersService.onLogin(user).subscribe((data) => {
      console.log(data, 'return');
      localStorage.setItem('token', data.token);
      this.router.navigate(['tabs/tab1']);
    });
  }
}
