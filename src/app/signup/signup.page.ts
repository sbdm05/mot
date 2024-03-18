import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordService } from '../services/password.service';
import { UsersService } from '../services/users.service';
import { User } from '../user/user';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  form!: FormGroup;

  user: User = new User();

  errorPwd!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService,
    private passwordService: PasswordService,
    private cdr: ChangeDetectorRef
  ) {
    console.log('test depuis le constructor');
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      try {
        this.usersService.collection(token).subscribe(
          (data) => {
            // console.log(data.user, 'data');
            // this.user = data.user;
            console.log(data, 'user');
            if (data) {
              this.user = data.user;
              this.usersService.setUserData(this.user);
              this.cdr.detectChanges();
              this.router.navigate(['tabs', 'tab1']);
            } else {
              console.log('pas de data');
              this.router.navigate(['/']);
            }
          },

          (e) => {
            console.log(e, 'error');
          }
        );
      } catch (error) {
        console.log(error, 'error');
      }
    }
    if (this.user) {
      this.router.navigate(['tabs', 'tab1']);
    }
  }

  ngOnInit() {
    this.form = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        pwd: ['', [Validators.required, Validators.minLength(7)]],
        pwdConfirm: ['', [Validators.required, Validators.minLength(7)]],
      },
      {
        validators: [this.passwordService.verify()],
      }
    );
  }

  onSubmit() {
    this.errorPwd = '';
    // on donne des nouvelles valeurs à this.user
    const { pwd, pwdConfirm } = this.form.value;

    // capter l'erreur

    // if (!pwd || !pwdConfirm) {
    //   console.log('pas de valeur');
    //   this.errorPwd = 'Les champs ne peuvent pas être vides';
    //   return console.log('champs vides');
    // }

    // if (pwd !== pwdConfirm) {
    //   this.errorPwd = 'Les mots de passe ne sont pas identiques';
    //   return console.log('pas le meme pwd');
    // }

    this.user = Object.assign(this.user, this.form.value);
    console.log(this.user, 'user');

    this.usersService.onSignUp(this.user).subscribe(
      (data) => {
        console.log(data.token, 'return');

        // store jwt token in local storage
        // console.log(token, 'token');
        localStorage.setItem('token', data.token);
        this.router.navigate(['tabs/tab1']);
        this.form.reset();
      },
      (e) => {
        console.log(e, 'erreur');
        // afficher cette erreur dans le front
        this.errorPwd = e.error.msg;
        this.form.reset();
      }
    );
  }
}
