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
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form!: FormGroup;
  user!: User;

  public errorMessage!: string;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private usersService: UsersService,
    private cdr: ChangeDetectorRef
  ) {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      try {
        this.usersService.collection(token).subscribe((data) => {
          // console.log(data.user, 'data');
          this.user = data.user;
          this.usersService.setUserData(this.user);
          // console.log(this.user, 'user');
          this.cdr.detectChanges();
          this.router.navigate(['tabs', 'tab1']);
        });
      } catch (error) {
        console.log('error depuis login', error);
      }
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.email],
      pwd: [''],
    });
  }

  onSubmit() {
    const user = this.form.value;
    this.errorMessage = '';
    console.log('ok', user);
    this.usersService.onLogin(user).subscribe(
      (data) => {
        console.log(data);
        this.usersService.setUserData(user);
        localStorage.setItem('token', data.token);
        this.router.navigate(['tabs', 'tab1']);
        this.form.reset();
      },
      (err) => {
        console.log(err.error.msg, 'err');
        this.errorMessage = err.error.msg;
      },
      () => console.log('done')
    );
  }
}
