import {
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { UsersService } from '../services/users.service';
import { User } from '../user/user';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, OnDestroy {
  @ViewChild(IonModal) modal: IonModal;
  public confirmMessage!: string;
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

  onLogout() {
    //console.log(this.token);
    localStorage.removeItem('token');
    this.router.navigate(['/signup']);
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    // this.modal.dismiss(this.name, 'confirm');
    // vérifier this.name === EFFACER
    if (this.confirmMessage === 'EFFACER') {
      console.log('effacé');
      // appel au service
      this.usersService.deleteUser(this.user).subscribe((data) => {
        console.log(data);
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {
          // refermer la modal
          this.modal.dismiss('confirm');
          // remove le token
          localStorage.removeItem('token');
          this.router.navigate(['/signup']);
        }
      });
    } else {
      console.log('not the string');
    }
  }

  ngOnDestroy() {
    this.user = new User();
  }
}
