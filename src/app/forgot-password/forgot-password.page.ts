import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  errorMessage!: string;
  resetSuccess!: string;
  form!: FormGroup;
  constructor(private usersService: UsersService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.email],
    });
  }

  onSubmit() {
    this.errorMessage = '';
    this.resetSuccess = '';
    console.log(this.form.value);
    const value = this.form.value;
    console.log(value.email);
    const valueEmail = value.email;
    console.log(valueEmail);
    //console.log(typeof this.email);
    // appeler le service
    this.usersService.forgotPassword(valueEmail).subscribe(
      (data) => {
        console.log(data);
        this.resetSuccess =
          'Un e-mail de réinitialisation a été envoyé à cette adresse';
      },
      (error) => {
        console.log(error);
        this.errorMessage = 'Pas de compte associé à cet e-mail';
      }
    );
  }
}
