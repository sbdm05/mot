import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../user/user';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public user!: User;
  constructor(private usersService: UsersService, private router: Router) {
    // check token
    const token = localStorage.getItem('token');
    console.log(token, 'toekn depuis tab1');
    if (token) {
      try {
        this.usersService.collection(token).subscribe((data) => {
          console.log(data, 'data');

          this.user = data.user;
          // console.log(this.user, 'user');
        });
      } catch (error) {}
    } else {
      this.router.navigate(['/']);
    }
  }
}
