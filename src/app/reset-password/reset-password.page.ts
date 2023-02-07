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
  errorForm = false;

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

  // rôle
  verifyToken() {
    // appel au service reset-password
    const obj = { id: this.id, token: this.token };
    this.usersService.resetPassword({ obj }).subscribe((data) => {
      this.user = data.user;
      console.log(this.user);
    });
  }

  onSubmit() {
    this.errorForm = false;
    const temp = this.newPwd.trim();
    console.log(temp.length);

    // vérification
    if (temp.length <= 6) {
      this.errorForm = true;
      return;
      // Erreur UI
      // afficher message d'erreur
    } else if (!this.user) {
      console.log('pas de user');
    } else {
      this.errorForm = false;
      // création d'un nouvel objet
      const obj = {
        user: this.user,
        newPwd: temp,
      };
      console.log(obj, 'infos à envoyer à saveNewPassword');
      // appel au service update-user
      this.usersService.saveNewPassword(obj).subscribe((data) => {
        console.log(data);
      });
    }
  }
}


/*
   `${this.urlApi}/api/v1/letters/save-new-password`,
      obj

*/
