import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../user/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  form!: FormGroup;

  user: User = new User();

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
          console.log(this.user, 'user');
          this.router.navigate(['tabs', 'tab1']);
        });
      } catch (error) {}
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: [this.user.email],
      pwd: [this.user.pwd],
      pwdConfirm: [''],
    });
  }

  onSubmit() {
    // on donne des nouvelles valeurs à this.user
    const { pwd, pwdConfirm } = this.form.value;
    // capter l'erreur

    if (pwd !== pwdConfirm) {
      return console.log('pas le meme pwd');
    }

    this.user = Object.assign(this.user, this.form.value);
    console.log(this.user, 'user');

    this.usersService.onSignUp(this.user).subscribe(
      (data) => {
        console.log(data.token, 'return');

        // store jwt token in local storage
        // console.log(token, 'token');
        localStorage.setItem('token', data.token);
        this.router.navigate(['tabs/tab1']);
      },
      (e) => {
        console.log(e.error, 'erreur');
        // afficher cette erreur dans le front
      }
    );
  }
}
