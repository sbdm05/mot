import { ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  userDataSubscription: Subscription;
  constructor(
    private usersService: UsersService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    // check token
    this.token = localStorage.getItem('token');
    // if (this.token) {
    //   try {
    //     this.usersService.collection(this.token).subscribe((data) => {
    //       //console.log(data.user, 'data');
    //       if (data) {
    //         this.user = data.user;
    //         this.router.navigate(['tabs', 'tab3']);
    //         console.log(this.user, 'user');
    //         const { savedLetters } = data.user;
    //         if (savedLetters) {
    //           this.savedLetters = savedLetters;
    //           console.log(this.savedLetters);
    //         }
    //       }
    //     });
    //     console.log('test');
    //   } catch (error) {}
    // } else {
    //   this.router.navigate(['/']);
    // }
  }

  ionViewDidEnter() {
    console.log('yes');
    this.userDataSubscription = this.usersService.userData$.subscribe({
      next: (data) => {
        this.user = data;
        console.log(data, 'user depuis tab1'); // Accéder aux données stockées dans le BehaviorSubject
        //this.cdr.detectChanges();
        if (data.savedLetters) {
          this.savedLetters = data.savedLetters;
          console.log(this.savedLetters);
          //this.cdr.detectChanges();
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit2() {
    if (this.token) {
      console.log('yes token');

      try {
        this.usersService.userData$.subscribe((data) => {
          //console.log(data.user, 'data');
          if (data) {
            this.user = data;
            console.log(this.user);

            if (data.savedLetters) {
              this.savedLetters = data.savedLetters;
              console.log(this.savedLetters);
              //this.cdr.detectChanges();
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
    console.log(user, letter);
    // call service
    this.usersService
      .deleteApplication(user, letter, this.token)
      .subscribe((data) => {
        if (data.status === 'success') {
          this.router.navigate(['tabs', 'tab3']);
        }
      });
  }

  onLogout() {
    console.log(this.token);
    localStorage.removeItem('token');
    this.router.navigate(['/signup']);
  }

  // onDestroy() {
  //   //this.user = new User();
  //   this.userDataSubscription.unsubscribe();
  // }
}
