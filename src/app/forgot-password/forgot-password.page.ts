import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  email!: string;
  constructor(private usersService: UsersService) {}

  ngOnInit() {}

  onSubmit() {
    console.log(typeof(this.email));
    // appeler le service
    this.usersService.forgotPassword(this.email).subscribe((data) => {
      console.log(data);
    });
  }
}
