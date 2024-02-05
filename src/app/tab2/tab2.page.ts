import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CoverLetterCPage } from '../components/cover-letter-c/cover-letter-c.page';
import { CoverLetterSimplePage } from '../components/cover-letter-simple/cover-letter-simple.page';
import { CoverLetterComponent } from '../components/cover-letter/cover-letter.component';
import { UsersService } from '../services/users.service';
import { User } from '../user/user';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit, OnChanges {
  public form!: FormGroup;

  colorBtn = 'success';

  // ici ajouter vérification de l'utilisateur

  public user!: User;
  token!: any;

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private router: Router
  ) {
    // souscrire à l'observable()
    // this.usersService.refreshCollection$.subscribe((data) => {
    //   console.log(data, 'data');
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
         setTimeout(() => {
           this.colorBtn = 'success';
         }, 1000);
      });
  }

  async openModal() {
    console.log(this.user);
    const user = this.user;
    console.log(user, 'infos');
    // attention l'objet envoyé (ici user) doit correspondre à l'objet dans @Input()
    const coverLetter = await this.createModal(CoverLetterComponent, {
      user,
    });
    await coverLetter.present();
  }

  async openModalSimple() {
    console.log(this.user);
    const user = this.user;
    console.log(user, 'infos');
    // attention l'objet envoyé (ici user) doit correspondre à l'objet dans @Input()
    const coverLetter = await this.createModal(CoverLetterSimplePage, {
      user,
    });
    await coverLetter.present();
  }

  async openModalLetterC() {
    console.log(this.user);
    const user = this.user;
    console.log(user, 'infos');
    // attention l'objet envoyé (ici user) doit correspondre à l'objet dans @Input()
    const coverLetter = await this.createModal(CoverLetterCPage, {
      user,
    });
    await coverLetter.present();
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
    return modal;
  }
}
