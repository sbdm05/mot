import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../user/user';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  public user!: User;
  public savedLetters!: [];
  token!: any;
  constructor(private usersService: UsersService, private router: Router) {
    // check token
    this.token = localStorage.getItem('token');
    if (this.token) {
      try {
        this.usersService.collection(this.token).subscribe((data) => {
          //console.log(data.user, 'data');
          if (data) {
            this.user = data.user;
            console.log(this.user, 'user');
            const { savedLetters } = data.user;
            if (savedLetters) {
              this.savedLetters = savedLetters;
              console.log(this.savedLetters);
            }
          }
        });
        console.log('test');
      } catch (error) {}
    } else {
      this.router.navigate(['/']);
    }
  }

  onDelete(user, letter) {
    // console.log(user, letter, index);
    // call service
    this.usersService
      .deleteApplication(user, letter, this.token)
      .subscribe((data) => console.log(data));
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
