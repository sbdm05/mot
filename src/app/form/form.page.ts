import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { UsersService } from '../services/users.service';
import { User } from '../user/user';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit, OnChanges, OnDestroy {
  @Input() user!: User;
  form!: FormGroup;

  colorBtn = 'success';

  adjs: [] = [];

  obj!: User;

  isModified = false;

  // props pour gérer la photo
  public addPicActive = false;

  public selectedPic!: any;
  public imageConverted;
  public picSizeExceedeed = false;

  qualitesFemme = [
    'autonome',
    'dynamique',
    'opérationnelle',
    'réactive',
    'fiable',
    'ponctuelle',
    'consciencieuse',
    'discrète',
    'enthousiaste',
    'imaginative',
    'créative',
    'méthodique',
    'patiente',
  ];
  qualitesHomme = [
    'autonome',
    'dynamique',
    'opérationnel',
    'réactif',
    'fiable',
    'ponctuel',
    'consciencieux',
    'discret',
    'enthousiaste',
    'imaginatif',
    'créatif',
    'méthodique',
    'patient',
  ];

  token!: string;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private cdr: ChangeDetectorRef
  ) {
    //this.token = localStorage.getItem('token');
    console.log(this.user);

    // est-ce que la photo de profil existe ?
    this.selectedPic = localStorage.getItem('pic');
    if (this.selectedPic) {
      this.imageConverted = this.selectedPic;
    }
  }

  ngOnInit() {
    console.log(this.user, 'user depuis form');
    // console.log(this.form.value);
    this.form = this.fb.group({
      gender: [this.user?.gender],
      prenom: [this.user?.prenom],
      nom: [this.user?.nom],
      adresse: [this.user?.adresse],
      tel: [
        this.user?.tel,
        Validators.compose([
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
      ],

      email: [this.user?.email],
      adjs: [
        this.user?.adjs,
        Validators.compose([Validators.minLength(3), Validators.maxLength(3)]),
      ],
    });
    console.log(this.form.value);
  }

  ngOnChanges() {
    console.log('ngonchanges', this.user);
    console.log(this.user, 'depuis ngOnChanges');
    //this.cdr.detectChanges();
    this.form = this.fb.group({
      gender: [this.user?.gender],
      prenom: [this.user?.prenom],
      nom: [this.user?.nom],
      adresse: [this.user?.adresse],
      tel: [
        this.user?.tel,
        Validators.compose([
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
      ],
      email: [this.user?.email],
      adjs: [
        this.user?.adjs,
        Validators.compose([Validators.minLength(3), Validators.maxLength(3)]),
      ],
    });
    this.cdr.detectChanges();
  }

  selectGender(i) {
    console.log(i.target.value, 'gender');
    this.user.gender = i.target.value;
    console.log(this.user);
  }

  selectAdj(i) {
    //console.log(i.target.value, 'adjs');
    this.adjs = i.target.value;
  }

  async onSelectPic() {
    console.log('onselectpic');

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
        console.log(this.imageConverted);
        // this.imageConverted =
        //   'https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg';

        //this.user.pic = this.imageConverted;
        this.addPicActive = true;
        //this.cdr.detectChanges();

        // on store l'image dans le sessionStorage
        sessionStorage.setItem('pic', this.imageConverted);

        // disabled the add button
      } else {
        console.log('erreur dans la taille');
        this.picSizeExceedeed = true;
      }
    }
  }

  onDeletePic() {
    sessionStorage.removeItem('pic');
    console.log('deleted');

    this.imageConverted = null;
    this.addPicActive = false;
    this.cdr.detectChanges();
  }

  onSubmit() {
    console.log('onsubmit');

    if (this.form.status === 'VALID') {
      console.log(this.token, 'token');
      this.usersService
        .updateUser(this.form.value, this.token)
        .subscribe((data) => {
          //console.log('after update', data);
          //console.log('submit ok');
          //console.log(this.form.value);
          //this.usersService.refreshCollection(data);
          this.colorBtn = 'warning';
          setTimeout(() => {
            this.colorBtn = 'success';
          }, 1000);
          this.isModified = false;
        });

      //localStorage.setItem('infos', JSON.stringify(this.form.value));
    } else {
      console.log('erreur');
      //this.error='Veuillez compléter le formulaire'
    }
  }

  ngOnDestroy() {
    //this.form.reset();
  }
}
// test
// restets
