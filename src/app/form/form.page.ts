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

  constructor(private fb: FormBuilder, private usersService: UsersService) {
    this.token = localStorage.getItem('token');
    console.log(this.user);
  }

  ngOnInit() {
    console.log(this.user);
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
  }

  ngOnChanges() {
    // console.log('test', this.user);
    console.log(this.user, 'depuis ngOnChanges');
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
  }

  selectGender(i) {
    //console.log(i.target.value, 'gender');
    this.user.gender = i.target.value;
  }

  selectAdj(i) {
    //console.log(i.target.value, 'adjs');
    this.adjs = i.target.value;
  }
  onSubmit() {
    //console.log(this.form.status);

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
    this.form.reset();
  }
}
