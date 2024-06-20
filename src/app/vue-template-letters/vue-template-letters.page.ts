import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UsersService } from '../services/users.service';
import { User } from '../user/user';
import { CoverLetterPremium2Page } from '../components/cover-letter-premium2/cover-letter-premium2.page';
import { CoverLetterPremium3Page } from '../components/cover-letter-premium3/cover-letter-premium3.page';
import { CoverLetterPremium4Page } from '../components/cover-letter-premium4/cover-letter-premium4.page';
import { CoverLetterPremium1Page } from '../components/cover-letter-premium1/cover-letter-premium1.page';
import { CoverLetterSimplePage } from '../components/cover-letter-simple/cover-letter-simple.page';
import { CoverLetterComponent } from '../components/cover-letter/cover-letter.component';
import { CoverLetterCPage } from '../components/cover-letter-c/cover-letter-c.page';

@Component({
  selector: 'app-vue-template-letters',
  templateUrl: './vue-template-letters.page.html',
  styleUrls: ['./vue-template-letters.page.scss'],
})
export class VueTemplateLettersPage implements OnInit {
  token!: any;
  public user!: User;
  modalInstance;

  public addPicActive = false;

  public selectedPic!: any;
  public imageConverted;
  public picSizeExceedeed = false;
  constructor(
    private modalCtrl: ModalController,
    private usersService: UsersService,
    private router: Router
  ) {
    this.selectedPic = sessionStorage.getItem('pic');
    if (this.selectedPic) {
      console.log(this.selectedPic, 'yes');

      this.imageConverted = this.selectedPic;
    } else {
      console.log(this.selectedPic, 'nopic');

      this.imageConverted = null;
    }
  }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    if (this.token) {
      try {
        this.usersService.userData$.subscribe((data) => {
          //console.log(data.user, 'data');
          if (data) {
            this.user = data;
            console.log(this.user);
            // if (data.savedLetters) {
            //   this.savedLetters = data.savedLetters;
            //   console.log(this.savedLetters);
            //   //this.cdr.detectChanges();
            // }
          }
        });
        console.log('test');
      } catch (error) {}
    } else {
      this.router.navigate(['/']);
    }
  }

  ionViewDidEnter() {
    console.log('test enter');
    this.selectedPic = sessionStorage.getItem('pic');
    if (this.selectedPic) {
      console.log(this.selectedPic, 'yes');

      this.imageConverted = this.selectedPic;
    } else {
      this.imageConverted = null;
    }
  }

  async openModal(letterName: any) {
    let componentType: any;
    console.log(this.user);
    const user = this.user;
    console.log(user, 'infos');
    switch (letterName) {
      case 'coverLetterComponent':
        componentType = CoverLetterComponent;
        break;
      case 'coverLetterSimplePage':
        componentType = CoverLetterSimplePage;
        break;
      case 'coverLetterCPage':
        componentType = CoverLetterCPage;
        break;
      case 'coverLetterPremiumBubble':
        componentType = CoverLetterPremium1Page;
        break;

      case 'coverLetterPremiumWaves1':
        componentType = CoverLetterPremium2Page;
        break;
      case 'coverLetterPremiumWaves2':
        componentType = CoverLetterPremium3Page;
        break;

      case 'coverLetterPremiumPicGrey':
        componentType = CoverLetterPremium4Page;
        break;
      // Add more cases for other component types as needed
      default:
        console.error('Unknown component type:', letterName);
        return;
    }

    // attention l'objet envoyé (ici user) doit correspondre à l'objet dans @Input()
    const coverLetter = await this.createModal(componentType, {
      user,
      pic: this.imageConverted,
    });
    await coverLetter.present();
    // Store the modal instance
    this.modalInstance = coverLetter;
  }

  async createModal(
    component,
    componentProps?,
    cssClass?
  ): Promise<HTMLIonModalElement> {
    const modal = await this.modalCtrl.create({
      component,
      cssClass,
      componentProps,
      backdropDismiss: true,
    });
    console.log(componentProps); // exists

    await modal.present();

    return modal;
  }

  async closeModal() {
    if (this.modalInstance) {
      await this.modalInstance.dismiss();
      this.modalInstance = null; // Reset modal instance after dismissal
    }
  }
}
