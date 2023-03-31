"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_form_form_module_ts"],{

/***/ 2438:
/*!*********************************************!*\
  !*** ./src/app/form/form-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPageRoutingModule": () => (/* binding */ FormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.page */ 208);




const routes = [
    {
        path: '',
        component: _form_page__WEBPACK_IMPORTED_MODULE_0__.FormPage
    }
];
let FormPageRoutingModule = class FormPageRoutingModule {
};
FormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormPageRoutingModule);



/***/ }),

/***/ 9659:
/*!*************************************!*\
  !*** ./src/app/form/form.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPageModule": () => (/* binding */ FormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-routing.module */ 2438);
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.page */ 208);







let FormPageModule = class FormPageModule {
};
FormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _form_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_form_page__WEBPACK_IMPORTED_MODULE_1__.FormPage],
        exports: [_form_page__WEBPACK_IMPORTED_MODULE_1__.FormPage]
    })
], FormPageModule);



/***/ }),

/***/ 208:
/*!***********************************!*\
  !*** ./src/app/form/form.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPage": () => (/* binding */ FormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _form_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.page.html?ngResource */ 1562);
/* harmony import */ var _form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.page.scss?ngResource */ 2838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ 4961);






let FormPage = class FormPage {
    constructor(fb, usersService) {
        this.fb = fb;
        this.usersService = usersService;
        this.adjs = [];
        this.isModified = false;
        this.qualitesFemme = [
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
        this.qualitesHomme = [
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(10),
                ]),
            ],
            email: [this.user?.email],
            adjs: [
                this.user?.adjs,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(3)]),
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(10),
                ]),
            ],
            email: [this.user?.email],
            adjs: [
                this.user?.adjs,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(3)]),
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
            //console.log(this.token, 'token');
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
        }
        else {
            console.log('erreur');
            //this.error='Veuillez compléter le formulaire'
        }
    }
    ngOnDestroy() {
        this.form.reset();
    }
};
FormPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService }
];
FormPage.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
FormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-form',
        template: _form_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FormPage);



/***/ }),

/***/ 4961:
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);






let UsersService = class UsersService {
  constructor(http) {
    this.http = http;
    this.urlApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlApi; // eslint-disable-next-line @typescript-eslint/member-ordering
    //token!: number;
    // eslint-disable-next-line @typescript-eslint/member-ordering

    this.refreshCollection$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
  } // attention sans le typage, on ne récupère pas la valeur dans le subscribe !!!!


  onSignUp(user) {
    console.log(user, 'user');
    return this.http.post(`${this.urlApi}/api/v1/letters`, user);
  }

  onLogin(user) {
    // const token = localStorage.getItem('token');
    // let headers_object = new HttpHeaders().set(
    //   'Authorization',
    //   'Bearer ' + token
    // );
    console.log(user, 'user');
    return this.http.post(`${this.urlApi}/api/v1/letters/login`, user); // ).pipe(
    //   catchError(async (err) => console.log(err))
    // );
    // return this.http.post<User>(
    // )
  } // je commente cette fonction pour des tests
  // getUser(token): Observable<any> {
  //   const headers = new HttpHeaders()
  //     .set('content-type', 'application/json')
  //     .set('Access-Control-Allow-Origin', '*')
  //     .set('Authorization', 'Bearer ' + token);
  //   return this.http.get('http://localhost:4000/api/v1/letters/user', {
  //     headers,
  //   });
  // }
  // getUser(token) {
  //   const headers = new HttpHeaders()
  //     .set('content-type', 'application/json')
  //     .set('Access-Control-Allow-Origin', '*')
  //     .set('Authorization', 'Bearer ' + token);
  //   this.token = token;
  //   this.refreshCollection(token, headers);
  //   return this.refreshCollection$;
  // }


  refreshCollection(token) {
    // console.log('depuis refreshcollection');
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', 'Bearer ' + token);
    this.http.get(`${this.urlApi}/api/v1/letters/user`, {
      headers
    }).subscribe(data => {
      this.refreshCollection$.next(data);
      console.log(data, 'depuis refreshcollection');
    });
    return;
  } // eslint-disable-next-line @typescript-eslint/member-ordering


  collection(token) {
    console.log(token, 'toekn depuis collection');
    this.refreshCollection(token);
    return this.refreshCollection$;
  } // je comment cette fonction pour tester avec le behavior chaud


  updateUser(user, token) {
    return this.http.patch(`${this.urlApi}/api/v1/letters/user`, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      this.refreshCollection(token);
    }));
  } // refreshCollection(data): void {
  //   console.log('depuis refreshcollection', data);
  //   return this.refreshCollection$.next(data);
  // }
  // tentative avec refresh collection
  // updateUser(user): Observable<any> {
  //   return this.http
  //     .patch('http://localhost:4000/api/v1/letters/user', user)
  //     .pipe(
  //       tap(() => {
  //         this.refreshCollection(this.token);
  //       })
  //     );
  // }
  // saveInfos(infos): Observable<any>{
  //   console.log(infos, 'depuis')
  //    return this.http.patch('http://localhost:4000/api/v1/letters/create-application', infos);
  // }


  createApplication(user) {
    console.log(user, 'depuis');
    return this.http.patch(`${this.urlApi}/api/v1/letters/create-application`, user);
  }

  savedApplication(user, newValue, token) {
    //console.log('data depuis saved application');
    const data = Object.assign({});
    data.user = user;
    data.newValue = newValue; //console.log(data);

    return this.http.patch(`${this.urlApi}/api/v1/letters/saved-application`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      this.refreshCollection(token);
    }));
  }

  deleteApplication(user, letter, token) {
    const data = Object.assign({});
    data.user = user;
    data.toRemove = letter;
    return this.http.patch(`${this.urlApi}/api/v1/letters/delete-application`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      this.refreshCollection(token);
    }));
  }

  forgotPassword(email) {
    console.log(email, 'depuis service');
    return this.http.post(`${this.urlApi}/api/v1/letters/forgot-password`, {
      email
    });
  }

  resetPassword(obj) {
    console.log('depuis service', obj);
    return this.http.post(`${this.urlApi}/api/v1/letters/reset-password/`, obj);
  }

  saveNewPassword(obj) {
    console.log(obj);
    return this.http.post(`${this.urlApi}/api/v1/letters/save-new-password`, obj);
  }

  deleteUser(user) {
    const {
      _id
    } = user;
    console.log(_id);
    return this.http.delete(`${this.urlApi}/api/v1/letters/${_id}`);
  }

};

UsersService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}];

UsersService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], UsersService);


/***/ }),

/***/ 2838:
/*!************************************************!*\
  !*** ./src/app/form/form.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 1562:
/*!************************************************!*\
  !*** ./src/app/form/form.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n\n    <form [formGroup]=\"form\" *ngIf='user'>\n\n        <!-- select gender -->\n        <ion-list>\n            <ion-item>\n                <ion-select placeholder=\"Je suis\" formControlName='gender' (ionChange)=\"selectGender($event)\" required>\n                    <ion-select-option value=\"homme\">Homme</ion-select-option>\n                    <ion-select-option value=\"femme\">Femme</ion-select-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n\n        <!-- prenom -->\n        <ion-item>\n            <ion-label position=\"floating\">Prénom</ion-label>\n            <ion-input required formControlName='prenom'></ion-input>\n        </ion-item>\n\n        <!-- nom -->\n        <ion-item>\n            <ion-label position=\"floating\">Nom</ion-label>\n            <ion-input required formControlName='nom'></ion-input>\n        </ion-item>\n\n        <!-- tel -->\n        <ion-item>\n            <ion-label position=\"floating\">Téléphone</ion-label>\n            <ion-input required formControlName='tel'></ion-input>\n        </ion-item>\n\n        <!-- adresse -->\n        <ion-item>\n            <ion-label position=\"floating\">Adresse complète</ion-label>\n            <ion-input required formControlName='adresse'></ion-input>\n        </ion-item>\n\n        <!-- email -->\n        <ion-item>\n            <ion-label position=\"floating\">E-mail</ion-label>\n            <ion-input required formControlName='email'></ion-input>\n        </ion-item>\n\n        <!-- pick adjectives -->\n        <ion-list *ngIf=\"user.gender === 'femme'\">\n            <ion-item>\n                <ion-select formControlName='adjs' placeholder=\"Choisir 3 qualités\" [multiple]=\"true\" required (ionChange)=\"selectAdj($event)\">\n                    <ion-select-option *ngFor='let i of qualitesFemme' value=\"{{i}}\">{{i}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n        <ion-list *ngIf=\"user.gender === 'homme'\">\n            <ion-item>\n                <ion-select placeholder=\"Choisir 3 qualités\" [multiple]=\"true\" (ionChange)=\"selectAdj($event)\" formControlName='adjs' required>\n                    <ion-select-option *ngFor='let i of qualitesHomme' value=\"{{i}}\">{{i}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n\n        <ion-button *ngIf='!isModified' expand=\"block\" (click)='onSubmit()' [disabled]='form.invalid' color='success'>Enregistrer</ion-button>\n        <ion-button *ngIf='isModified' [disabled]='form.invalid' color='danger' expand=\"block\" (click)='onSubmit()'>Mettre à jour</ion-button>\n\n    </form>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_form_form_module_ts.js.map