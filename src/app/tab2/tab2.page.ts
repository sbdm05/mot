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

  // ici ajouter vérification de l'utilisateur

  public user!: User;
  token!: any;
  modalInstance;

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private router: Router,
    private modalStateService: ModalStateService,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    // souscrire à l'observable()
    this.modalStateService.modalstate$.subscribe({
      next: (data) => {
        console.log(data);

        this.closeModal();
        //this.router.navigate(['/tabs/tab2']);
      },
    });
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
  }

  ngOnInit() {}

  ngOnChanges() {}

  changeAccordionClasses() {
    const firstAccordion =
      this.elementRef.nativeElement.querySelector('#first');
    const secondAccordion =
      this.elementRef.nativeElement.querySelector('#second');

    // Supprimer la classe accordion-expanded et ajouter accordion-collapsed au premier accordéon
    this.renderer.removeClass(firstAccordion, 'accordion-expanded');
    this.renderer.addClass(firstAccordion, 'accordion-collapsing');

    this.renderer.addClass(firstAccordion, 'accordion-collapsed');
    this.renderer.addClass(firstAccordion, 'accordion-previous');


    // Supprimer la classe accordion-collapsed et ajouter accordion-expanded au deuxième accordéon
    this.renderer.removeClass(secondAccordion, 'accordion-collapsed');
    this.renderer.addClass(secondAccordion, 'accordion-expanded');
  }

  saveInfos() {
    console.log(this.form.value);

    // const updatedUser = { ...this.form.value, ...this.user };
    //console.log(this.user);
    this.user.letters[0] = this.form.value;

    console.log(this.user, 'final user');
    // call service
    this.usersService.createApplication(this.user).subscribe((data) => {
      this.colorBtn = 'warning';

      setTimeout(() => {
        this.colorBtn = 'success';
        // ici je veux remove la classe accordion-expanded à l'element avec id first

        // ici je veux ajouter la classe accordion-expanded à l'element avec id second
      }, 1000);
    });
  }

  onSaved() {
    // console.log(this.user);

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
          this.changeAccordionClasses();
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
      // Add more cases for other component types as needed
      default:
        console.error('Unknown component type:', letterName);
        return;
    }

    // attention l'objet envoyé (ici user) doit correspondre à l'objet dans @Input()
    const coverLetter = await this.createModal(componentType, {
      user,
    });
    await coverLetter.present();
    // Store the modal instance
    this.modalInstance = coverLetter;
  }

  // async createModal(
  //   component,
  //   componentProps?,
  //   cssClass?
  // ): Promise<HTMLIonModalElement> {
  //   const modal = await this.modalCtrl.create({
  //     component,
  //     cssClass,
  //     componentProps,
  //     backdropDismiss: true,
  //   });
  //   return modal;
  // }

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

    // Wait for the modal to be displayed before taking a screenshot
    //await new Promise((resolve) => setTimeout(resolve, 500)); // Adjust the delay as needed

    // Get the modal content by its class or ID
    //const modalContent = document.querySelector('#main') as HTMLElement; // Adjust the selector as needed

    // Take a screenshot of the modal content using html2canvas
    // const canvas = await html2canvas(modalContent);
    // console.log(canvas);
    // const imageDataUrl = canvas.toDataURL('image/jpeg');
    // console.log(imageDataUrl);

    // const imageModal = await this.modalCtrl.create({
    //   component: TemplateScreenshotPage, // Replace YourImageComponent with the component that will display the image
    //   componentProps: {
    //     imageDataUrl,
    //   },
    // });

    //await modal.dismiss();
    //await imageModal.present();

    //return imageModal;

    return modal;
  }

  async closeModal() {
    if (this.modalInstance) {
      await this.modalInstance.dismiss();
      this.modalInstance = null; // Reset modal instance after dismissal
    }
  }
}
