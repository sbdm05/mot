import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../user/user';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  id!: number;
  token!: number;
  newPwd!: string;
  user!: User;

  constructor(
    //déclencher l'api reset-password
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {
    // extraire les params
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.token = params.token;

      this.verifyToken();
    });
  }

  ngOnInit() {}

  verifyToken() {
    // appel au service reset-password
    const obj = { id: this.id, token: this.token };
    this.usersService.resetPassword({ obj }).subscribe((data) => {
      this.user = data.user;
      console.log(this.user);
    });
  }

  onSubmit() {
    const obj = {
      user: this.user,
      newPwd: this.newPwd,
    };
    console.log(obj, 'infos à envoyer à saveNewPassword');
    // appel au service update-user
    this.usersService.saveNewPassword(obj).subscribe((data) => {
      console.log(data);
    });
  }
}
