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
import { ChangeDetectorRef } from '@angular/core';
import { PurchaseService } from '../services/purchase/purchase.service';
import { GlassfySku } from 'capacitor-plugin-glassfy';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, OnChanges {
  @ViewChild(IonModal) modal: IonModal;
  public confirmMessage!: string;
  public user!: User;
  public offerings = this.purchaseService.getOfferings();
  public purchaseState = this.purchaseService.purchaseState;
  public erreurCopy!: string;
  userDataSubscription: Subscription;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private purchaseService: PurchaseService,
    private cdr: ChangeDetectorRef
  ) {
    // use capacitor storage
    // // check token
    // const token = localStorage.getItem('token');
    // console.log(token, 'token ? ');
    // // this.usersService.refreshCollection(token);
    // console.log(token, 'toekn depuis tab1');
    // // peut etre que je devrais enlever ce bloc car redondant ? et peut causer l'erreur
    // if (token) {
    //   try {
    //     this.usersService.collection(token).subscribe(
    //       (data) => {
    //         console.log(data, 'data');
    //         console.log(this.user, 'user');
    //         if (data) {
    //           this.user = data.user;
    //           //this.router.navigate(['tabs', 'tab1']);
    //           this.cdr.detectChanges();
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
    console.log('depuis constructor tab1');
  }

  // test pour voirggjhgjh

  // ngOnInit() {
  //   // check token
  //   const token = localStorage.getItem('token');
  //   console.log(token, 'token ? ');
  //   // this.usersService.refreshCollection(token);
  //   console.log(token, 'toekn depuis tab1');
  //   if (token) {
  //     try {
  //       this.usersService.collection(token).subscribe(
  //         (data) => {
  //           console.log(data, 'data');
  //           console.log(this.user, 'user');
  //           if (data) {
  //             this.user = data.user;
  //           }
  //         },
  //         (e) => {
  //           console.log(e.error, 'erreur');
  //           this.router.navigate(['/']);
  //         }
  //       );
  //     } catch (error) {
  //       console.log(error, 'error');
  //       this.router.navigate(['/']);
  //     }
  //   } else {
  //     this.router.navigate(['/signup']);
  //   }
  // }

  ngOnInit() {
    console.log('yes');
    this.userDataSubscription = this.usersService.userData$.subscribe({
      next: (data) => {
        this.user = data;
        console.log(data, 'user depuis tab1'); // Accéder aux données stockées dans le BehaviorSubject
        //this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnChanges(): void {}

  onLogout() {
    console.log('logout');
    localStorage.removeItem('token');
    this.router.navigate(['/signup']);
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    console.log('delete');

    // this.modal.dismiss(this.name, 'confirm');
    // vérifier this.name === EFFACER
    if (this.confirmMessage === 'EFFACER') {
      console.log('effacé');
      this.erreurCopy = null;
      // appel au service
      this.usersService.deleteUser(this.user).subscribe((data) => {
        console.log(data);
      });
    } else {
      console.log('not the string');
      this.erreurCopy = 'erreur dans le mot recopié';
    }
  }

  // ngOnDestroy() {
  //   this.user = new User();
  //   this.userDataSubscription.unsubscribe();
  // }
  // test

  async onPurchase(sku: GlassfySku) {
    console.log(sku);
    await this.purchaseService.purchase(sku);
  }

  async onRestore() {
    await this.purchaseService.restore();
  }
}

//test
