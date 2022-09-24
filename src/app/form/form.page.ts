import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { UsersService } from '../services/users.service';
import { User } from '../user/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit, OnChanges {
  @Input() user!: User;
  form!: FormGroup;

  adjs: [] = [];

  obj!: User;

  isModified = false;

  // créer un observable
  // updatedProfil$: Subject<any> = new Subject();

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
    console.log(this.token, 'token depuis form');
  }

  ngOnInit() {
    console.log(this.user, 'depuis ngOninit');

    this.form.valueChanges.subscribe((value) => {
      this.isModified = true;
      console.log('value has changed:', value);
      console.log(this.form.status);
      console.log(this.form.value);
    });
  }

  ngOnChanges(): void {
    console.log(this.user, 'depuis ngOnChanges');
    this.form = this.fb.group({
      gender: [this.user?.gender],
      prenom: [this.user?.prenom],
      nom: [this.user?.nom],
      adresse: [this.user?.adresse],
      tel: [this.user?.tel],
      email: [this.user?.email],
      adjs: [
        this.user?.adjs,
        Validators.compose([Validators.minLength(3), Validators.maxLength(3)]),
      ],
    });
  }

  selectGender(i) {
    console.log(i.target.value, 'gender');
    this.user.gender = i.target.value;
  }

  selectAdj(i) {
    console.log(i.target.value, 'adjs');
    this.adjs = i.target.value;
  }
  onSubmit() {
    console.log(this.form.status);

    if (this.form.status === 'VALID') {
      console.log(this.token, 'token');
      this.usersService
        .updateUser(this.form.value, this.token)
        .subscribe((data) => {
          //console.log('after update', data);
          //console.log('submit ok');
          //console.log(this.form.value);
          //this.usersService.refreshCollection(data);
          this.isModified = false;
        });

      //localStorage.setItem('infos', JSON.stringify(this.form.value));
    } else {
      console.log('erreur');
    }
  }
}
