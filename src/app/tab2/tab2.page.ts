import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonAccordionGroup, IonItem, ModalController } from '@ionic/angular';
import { CoverLetterCPage } from '../components/cover-letter-c/cover-letter-c.page';
import { CoverLetterPremium1PageRoutingModule } from '../components/cover-letter-premium1/cover-letter-premium1-routing.module';
import { CoverLetterPremium1Page } from '../components/cover-letter-premium1/cover-letter-premium1.page';
import { CoverLetterSimplePage } from '../components/cover-letter-simple/cover-letter-simple.page';
import { CoverLetterComponent } from '../components/cover-letter/cover-letter.component';
import { UsersService } from '../services/users.service';
import { User } from '../user/user';
import html2canvas from 'html2canvas'; // Import html2canvas library
import { TemplateScreenshotPage } from '../components/template-screenshot/template-screenshot.page';
import { Canvg } from 'canvg';
import { ModalStateService } from '../services/modal-state/modal-state.service';
import { CoverLetterPremium2Page } from '../components/cover-letter-premium2/cover-letter-premium2.page';
import { CoverLetterPremium3Page } from '../components/cover-letter-premium3/cover-letter-premium3.page';
import { CoverLetterPremium4Page } from '../components/cover-letter-premium4/cover-letter-premium4.page';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit, OnChanges {
  isAccordionExpanded = true;
  public form!: FormGroup;

  colorBtn = 'success';
  textBtn = 'Enregistrer';

  public addPicActive = false;

  public selectedPic!: any;
  public imageConverted;
  public picSizeExceedeed = false;

  // ici ajouter vérification de l'utilisateur

  public user!: User;
  token!: any;
  modalInstance;

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private router: Router
  ) {
    // souscrire à l'observable()
    // this.modalStateService.modalstate$.subscribe({
    //   next: (data) => {
    //     console.log(data);

    //     this.closeModal();
    //     //this.router.navigate(['/tabs/tab2']);
    //   },
    // });
    // check token
    this.token = localStorage.getItem('token');
    //console.log(token, 'token');
    // 1 - je vérifie l'identite du user
    if (this.token) {
      try {
        //console.log('test');

        // ici je commente this.usersService.getUser(token).subscribe((data) => { et je remplace avec refreshCollecton
        this.usersService.collection(this.token).subscribe((data) => {
          //console.log(data.user, 'data');
          const { user } = data;

          this.user = user;
          this.router.navigate(['tabs', 'tab2']);
          //console.log(this.user, 'depuis tab2');

          this.form = this.fb.group({
            intitule: [
              this.user?.letters[0]?.intitule || '',
              Validators.required,
            ],
            experience: [
              this.user?.letters[0]?.experience || '',
              Validators.required,
            ],
            societe: [
              this.user?.letters[0]?.societe || '',
              Validators.required,
            ],
            contact: [this.user?.letters[0]?.contact || 'Madame'],
            adresseSociete: [
              this.user?.letters[0]?.adresseSociete || '',
              Validators.required,
            ],
            cpVille: [
              this.user?.letters[0]?.cpVille || '',
              Validators.required,
            ],
          });
        });
      } catch (error) {}
    } else {
      this.router.navigate(['/']);
    }

    // est-ce que la photo de profil existe ?
    this.selectedPic = localStorage.getItem('pic');
    if (this.selectedPic) {
      this.imageConverted = this.selectedPic;
    }
  }

  ngOnInit() {}

  ngOnChanges() {}

  async onSelectPic() {
    this.picSizeExceedeed = false;

    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos,
    });

    // console.log(image, '[IMAGE ONSELECTPIC]');

    if (image.base64String) {
      console.log(image.base64String, '[IMAGE.BASE64STRING');

      // check image size
      const sizeInBytes = image.base64String.length * 0.75;
      const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB
      if (sizeInBytes <= maxSizeInBytes) {
        // pour affichage dans template HTML

        // eslint-disable-next-line prefer-const
        this.imageConverted = 'data:image/jpeg;base64, ' + image.base64String;
        

        //const buffer = this.base64ToBuffer(image.base64String);

        //this.user.pic = this.imageConverted;

        // on store l'image dans le localStorage
        localStorage.setItem('pic', this.imageConverted);

        // disabled the add button
        this.addPicActive = true;
      } else {
        console.log('erreur dans la taille');
        this.picSizeExceedeed = true;
      }
    }
  }

  onDeletePic() {
    localStorage.removeItem('pic');
    console.log('deleted');

    this.imageConverted = null;
    this.addPicActive = false;
  }
  // étape 1 pour enregistrer les infos
  saveInfos() {
    console.log(this.user);

    // const updatedUser = { ...this.form.value, ...this.user };
    //console.log(this.user);
    this.user.letters[0] = this.form.value;

    console.log(this.user, 'final user');
    // call service
    this.usersService.createApplication(this.user).subscribe((data) => {
      this.colorBtn = 'warning';
      this.textBtn = 'Enregistrement en cours';

      setTimeout(() => {
        this.colorBtn = 'success';
        this.textBtn = 'Enregistrer';
      }, 1000);
    });
  }

  // étape pour stocker la candidature
  onSaved() {
    console.log(this.form.value);

    // call service
    this.usersService
      .savedApplication(this.user, this.form.value, this.token)
      .subscribe((data) => {
        console.log(data);

        this.colorBtn = 'warning';
        this.textBtn = 'Enregistrement en cours';
        setTimeout(() => {
          this.colorBtn = 'success';
          this.textBtn = 'Enregistrer';
        }, 1000);
      });
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

// refactoriser le html pour itérer
// ajouter l'import d'image avec '@capacitor/camera'
// ajouter generation d'un nouveau texte
// ajouter un model pour le form
// ajouter présentation/onboarding avec swipper.js
// ajouter createdAt
