import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../user/user';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, OnDestroy {
  public user!: User;
  constructor(private usersService: UsersService, private router: Router) {
    // use capacitor storage
    // // check token
    // const token = localStorage.getItem('token');
    // console.log(token, 'token ? ');
    // // this.usersService.refreshCollection(token);
    // console.log(token, 'toekn depuis tab1');
    // if (token) {
    //   try {
    //     this.usersService.collection(token).subscribe(
    //       (data) => {
    //         console.log(data, 'data');
    //         console.log(this.user, 'user');
    //         if (data) {
    //           this.user = data.user;
    //         } else {
    //           console.log('pas de data');
    //           this.router.navigate(['/']);
    //         }
    //       },
    //       (e) => {
    //         console.log(e.error, 'erreur');
    //       }
    //     );
    //   } catch (error) {
    //     console.log(error, 'error');
    //   }
    // } else {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    // check token
    const token = localStorage.getItem('token');
    console.log(token, 'token ? ');
    // this.usersService.refreshCollection(token);
    console.log(token, 'toekn depuis tab1');
    if (token) {
      try {
        this.usersService.collection(token).subscribe(
          (data) => {
            console.log(data, 'data');
            console.log(this.user, 'user');
            if (data) {
              this.user = data.user;
            }
          },
          (e) => {
            console.log(e.error, 'erreur');
          }
        );
      } catch (error) {
        console.log(error, 'error');
      }
    } else {
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy() {
    this.user = new User();
  }
}
