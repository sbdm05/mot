"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

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

};

UsersService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}];

UsersService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], UsersService);


/***/ }),

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var _Users_macbookpro_Documents_agence_projetsApp_app_front_back_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 1597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _components_cover_letter_c_cover_letter_c_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cover-letter-c/cover-letter-c.page */ 6851);
/* harmony import */ var _components_cover_letter_simple_cover_letter_simple_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/cover-letter-simple/cover-letter-simple.page */ 6705);
/* harmony import */ var _components_cover_letter_cover_letter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/cover-letter/cover-letter.component */ 3030);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/users.service */ 4961);












let Tab2Page = class Tab2Page {
  constructor(usersService, fb, modalCtrl, router) {
    this.usersService = usersService;
    this.fb = fb;
    this.modalCtrl = modalCtrl;
    this.router = router; // souscrire à l'observable()
    // this.usersService.refreshCollection$.subscribe((data) => {
    //   console.log(data, 'data');
    // });
    // check token

    this.token = localStorage.getItem('token'); //console.log(token, 'token');
    // 1 - je vérifie l'identite du user

    if (this.token) {
      try {
        //console.log('test');
        // ici je commente this.usersService.getUser(token).subscribe((data) => { et je remplace avec refreshCollecton
        this.usersService.collection(this.token).subscribe(data => {
          //console.log(data.user, 'data');
          const {
            user
          } = data;
          this.user = user; //console.log(this.user, 'depuis tab2');

          this.form = this.fb.group({
            intitule: [this.user?.letters[0]?.intitule || '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            experience: [this.user?.letters[0]?.experience || '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            societe: [this.user?.letters[0]?.societe || '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            contact: [this.user?.letters[0]?.contact || 'Madame'],
            adresseSociete: [this.user?.letters[0]?.adresseSociete || '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            cpVille: [this.user?.letters[0]?.cpVille || '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
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
    console.log(this.form.value); // const updatedUser = { ...this.form.value, ...this.user };
    //console.log(this.user);

    this.user.letters[0] = this.form.value;
    console.log(this.user, 'final user'); // call service

    this.usersService.createApplication(this.user).subscribe(data => console.log(data));
  }

  onSaved() {
    // console.log(this.user);
    // call service
    this.usersService.savedApplication(this.user, this.form.value, this.token).subscribe(data => {// console.log(data);
    });
  }

  openModal() {
    var _this = this;

    return (0,_Users_macbookpro_Documents_agence_projetsApp_app_front_back_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this.user);
      const user = _this.user;
      console.log(user, 'infos'); // attention l'objet envoyé (ici user) doit correspondre à l'objet dans @Input()

      const coverLetter = yield _this.createModal(_components_cover_letter_cover_letter_component__WEBPACK_IMPORTED_MODULE_5__.CoverLetterComponent, {
        user
      });
      yield coverLetter.present();
    })();
  }

  openModalSimple() {
    var _this2 = this;

    return (0,_Users_macbookpro_Documents_agence_projetsApp_app_front_back_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this2.user);
      const user = _this2.user;
      console.log(user, 'infos'); // attention l'objet envoyé (ici user) doit correspondre à l'objet dans @Input()

      const coverLetter = yield _this2.createModal(_components_cover_letter_simple_cover_letter_simple_page__WEBPACK_IMPORTED_MODULE_4__.CoverLetterSimplePage, {
        user
      });
      yield coverLetter.present();
    })();
  }

  openModalLetterC() {
    var _this3 = this;

    return (0,_Users_macbookpro_Documents_agence_projetsApp_app_front_back_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this3.user);
      const user = _this3.user;
      console.log(user, 'infos'); // attention l'objet envoyé (ici user) doit correspondre à l'objet dans @Input()

      const coverLetter = yield _this3.createModal(_components_cover_letter_c_cover_letter_c_page__WEBPACK_IMPORTED_MODULE_3__.CoverLetterCPage, {
        user
      });
      yield coverLetter.present();
    })();
  }

  createModal(component, componentProps, cssClass) {
    var _this4 = this;

    return (0,_Users_macbookpro_Documents_agence_projetsApp_app_front_back_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalCtrl.create({
        component,
        cssClass,
        componentProps,
        backdropDismiss: true
      });
      return modal;
    })();
  }

};

Tab2Page.ctorParameters = () => [{
  type: _services_users_service__WEBPACK_IMPORTED_MODULE_6__.UsersService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}];

Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-tab2',
  template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab2Page);


/***/ }),

/***/ 1597:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-label.sc-ion-label-md-h.sc-ion-label-md-s.md.in-item-color.hydrated {\n  padding: 2rem 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbC5zYy1pb24tbGFiZWwtbWQtaC5zYy1pb24tbGFiZWwtbWQtcy5tZC5pbi1pdGVtLWNvbG9yLmh5ZHJhdGVkIHtcbiAgcGFkZGluZzogMnJlbSAwcmVtO1xufVxuIl19 */";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"tertiary\" style='display:flex'>\n        <!-- <ion-buttons slot=\"start\">\n            <ion-button slot=\"icon\">\n                <ion-icon name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons> -->\n\n            <ion-title slot=\"end\">\n              Créer une candidature\n            </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n\n    <ion-accordion-group>\n        <ion-accordion value=\"first\">\n            <ion-item slot=\"header\" color=\"light\">\n                <ion-label>Etape 1 - Remplir les informations de la société</ion-label>\n            </ion-item>\n            <div class=\"ion-padding\" slot=\"content\">\n                <form [formGroup]='form' *ngIf='user' (ngSubmit)='saveInfos()'>\n                    <!-- prenom -->\n                    <ion-item>\n                        <ion-label position=\"floating\">Intitulé du poste (requis)</ion-label>\n                        <ion-input formControlName='intitule'></ion-input>\n                    </ion-item>\n                    <ion-list>\n\n\n                      <ion-item>\n                          <ion-label>Votre expérience</ion-label>\n                            <ion-select formControlName='experience' placeholder=\"Niveau d'expérience pour ce poste\">\n\n                                <ion-select-option value=\"debutant\">Débutant</ion-select-option>\n                                <ion-select-option value=\"expert\">Déjà exercé un poste similaire</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                    </ion-list>\n                    <ion-item>\n                        <ion-label position=\"floating\">Société (requis)</ion-label>\n                        <ion-input formControlName='societe'></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\">Nom du contact avec civilité</ion-label>\n                        <ion-label style='font-style: italic;'position=\"floating\">Laisser vide si pas de nom disponible</ion-label>\n\n                        <ion-input formControlName='contact' placeholder='Madame Durand'></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\">Adresse (requis)</ion-label>\n                        <ion-input formControlName='adresseSociete'></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\">Code Postal et Ville (requis)</ion-label>\n                        <ion-input formControlName='cpVille'></ion-input>\n                    </ion-item>\n\n                    <ion-button expand=\"block\" type=\"submit\" [disabled]='form.invalid'>Etape 1 - Enregistrer</ion-button>\n\n                </form>\n            </div>\n        </ion-accordion>\n        <ion-accordion value=\"second\">\n            <ion-item slot=\"header\" color=\"light\">\n                <ion-label>Etape 2 - Choisir le modèle</ion-label>\n            </ion-item>\n            <div class=\"ion-padding\" slot=\"content\">\n                <!-- lettre 1 -->\n                <ion-card class=\"ion-no-padding\">\n                    <ion-row class=\"ion-align-items-center\">\n                        <ion-col size=\"8\" class=\"ion-padding\">\n                            <ion-row>\n                                <ion-col class=\"bold\">\n                                    <h5 class=\"ion-no-margin\">Modèle 1</h5>\n                                </ion-col>\n                            </ion-row>\n\n                        </ion-col>\n                        <ion-col size=\"4\">\n                            <ion-button (click)=\"openModal()\">\n                                Choisir\n                            </ion-button>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n                <!-- lettre 2 -->\n                <ion-card class=\"ion-no-padding\">\n\n                    <ion-row class=\"ion-align-items-center\">\n                        <ion-col size=\"8\" class=\"ion-padding\">\n                            <ion-row>\n                                <ion-col class=\"bold\">\n                                    <h5 class=\"ion-no-margin\">Modèle 2</h5>\n                                </ion-col>\n                            </ion-row>\n                        </ion-col>\n                        <ion-col size=\"4\">\n                            <ion-button (click)=\"openModalSimple()\">\n                                Choisir\n                            </ion-button>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n                <!-- lettre 3 -->\n                <ion-card class=\"ion-no-padding\">\n\n                    <ion-row class=\"ion-align-items-center\">\n                        <ion-col size=\"8\" class=\"ion-padding\">\n                            <ion-row>\n                                <ion-col class=\"bold\">\n                                    <h5 class=\"ion-no-margin\">Modèle 3</h5>\n                                </ion-col>\n                            </ion-row>\n                        </ion-col>\n                        <ion-col size=\"4\">\n                            <ion-button (click)=\"openModalLetterC()\">\n                                Choisir\n                            </ion-button>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n            </div>\n        </ion-accordion>\n        <!-- <ion-accordion value=\"third\">\n            <ion-item slot=\"header\" color=\"light\">\n                <ion-label>Etape 3 - Choisir le contenu</ion-label>\n            </ion-item>\n            <div class=\"ion-padding\" slot=\"content\">\n                Choisir le contenu\n            </div>\n        </ion-accordion> -->\n        <ion-accordion value=\"third\">\n          <ion-item slot=\"header\" color=\"light\">\n            <ion-label>Etape 3 - Paramètres supplémentaires</ion-label>\n          </ion-item>\n          <div class=\"ion-padding\" slot=\"content\">\n            <ion-text color=\"primary\">\n              <p>Voulez-vous conservé ce contact dans votre historique ? </p>\n            </ion-text>\n          <ion-button expand=\"block\" (click)='onSaved()'>AJOUTER A L'HISTORIQUE</ion-button>\n          </div>\n        </ion-accordion>\n    </ion-accordion-group>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n\n        <!-- <ion-button expand=\"block\" (click)='onSaved()'>AJOUTER A L'HISTORIQUE</ion-button> -->\n    </ion-toolbar>\n\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBUm9CO0VBU3JCOztFQUVLRCxXQUFXLENBQ2ZJLFNBRGUsRUFFZkMsY0FGZSxFQUdmQyxRQUhlLEVBR047SUFBQTs7SUFBQTtNQUVULE1BQU1DLEtBQUssU0FBUyxNQUFJLENBQUM5QixTQUFMLENBQWUrQixNQUFmLENBQXNCO1FBQ3hDSixTQUR3QztRQUV4Q0UsUUFGd0M7UUFHeENELGNBSHdDO1FBSXhDSSxlQUFlLEVBQUU7TUFKdUIsQ0FBdEIsQ0FBcEI7TUFNQSxPQUFPRixLQUFQO0lBUlM7RUFTVjs7QUEzSWtCOzs7UUFSWjlFLGlFQUFZQTs7UUFOWnNDLHVEQUFXQTs7UUFFWEcsMkRBQWVBOztRQURmRCxtREFBTUE7OztBQWFGSyxRQUFRLHVEQUxwQlIseURBQVMsQ0FBQztFQUNUNEMsUUFBUSxFQUFFLFVBREQ7RUFFVEMsVUFBQUEsdURBRlM7O0FBQUEsQ0FBRCxDQUtXLEdBQVJyQyxRQUFRLENBQVIiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC9zZXJ2aWNlcy91c2Vycy5zZXJ2aWNlLnRzIiwiLi9zcmMvYXBwL3RhYjIvdGFiMi1yb3V0aW5nLm1vZHVsZS50cyIsIi4vc3JjL2FwcC90YWIyL3RhYjIubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3VzZXIvdXNlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2Vyc1NlcnZpY2Uge1xuICBwcml2YXRlIHVybEFwaSA9IGVudmlyb25tZW50LnVybEFwaTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nXG4gIC8vdG9rZW4hOiBudW1iZXI7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nXG4gIHByaXZhdGUgcmVmcmVzaENvbGxlY3Rpb24kOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihcbiAgICAnJ1xuICApO1xuXG4gIC8vIGF0dGVudGlvbiBzYW5zIGxlIHR5cGFnZSwgb24gbmUgcsOpY3Vww6hyZSBwYXMgbGEgdmFsZXVyIGRhbnMgbGUgc3Vic2NyaWJlICEhISFcbiAgb25TaWduVXAodXNlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5sb2codXNlciwgJ3VzZXInKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4oYCR7dGhpcy51cmxBcGl9L2FwaS92MS9sZXR0ZXJzYCwgdXNlcik7XG4gIH1cblxuICBvbkxvZ2luKHVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8vIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgLy8gbGV0IGhlYWRlcnNfb2JqZWN0ID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KFxuICAgIC8vICAgJ0F1dGhvcml6YXRpb24nLFxuICAgIC8vICAgJ0JlYXJlciAnICsgdG9rZW5cbiAgICAvLyApO1xuICAgIGNvbnNvbGUubG9nKHVzZXIsICd1c2VyJyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KGAke3RoaXMudXJsQXBpfS9hcGkvdjEvbGV0dGVycy9sb2dpbmAsIHVzZXIpO1xuICAgIC8vICkucGlwZShcbiAgICAvLyAgIGNhdGNoRXJyb3IoYXN5bmMgKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICAvLyApO1xuICAgIC8vIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPihcblxuICAgIC8vIClcbiAgfVxuXG4gIC8vIGplIGNvbW1lbnRlIGNldHRlIGZvbmN0aW9uIHBvdXIgZGVzIHRlc3RzXG4gIC8vIGdldFVzZXIodG9rZW4pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAvLyAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAvLyAgICAgLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAvLyAgICAgLnNldCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKVxuICAvLyAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRva2VuKTtcblxuICAvLyAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3YxL2xldHRlcnMvdXNlcicsIHtcbiAgLy8gICAgIGhlYWRlcnMsXG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvLyBnZXRVc2VyKHRva2VuKSB7XG4gIC8vICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gIC8vICAgICAuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXG4gIC8vICAgICAuc2V0KCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpXG4gIC8vICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuICAvLyAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgLy8gICB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uKHRva2VuLCBoZWFkZXJzKTtcbiAgLy8gICByZXR1cm4gdGhpcy5yZWZyZXNoQ29sbGVjdGlvbiQ7XG4gIC8vIH1cblxuICByZWZyZXNoQ29sbGVjdGlvbih0b2tlbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ2RlcHVpcyByZWZyZXNoY29sbGVjdGlvbicpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAgICAgLnNldCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKVxuICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRva2VuKTtcblxuICAgIHRoaXMuaHR0cFxuICAgICAgLmdldChgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvdXNlcmAsIHtcbiAgICAgICAgaGVhZGVycyxcbiAgICAgIH0pXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMucmVmcmVzaENvbGxlY3Rpb24kLm5leHQoZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEsICdkZXB1aXMgcmVmcmVzaGNvbGxlY3Rpb24nKTtcbiAgICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nXG4gIGNvbGxlY3Rpb24odG9rZW4pIHtcbiAgICBjb25zb2xlLmxvZyh0b2tlbiwgJ3RvZWtuIGRlcHVpcyBjb2xsZWN0aW9uJyk7XG4gICAgdGhpcy5yZWZyZXNoQ29sbGVjdGlvbih0b2tlbik7XG4gICAgcmV0dXJuIHRoaXMucmVmcmVzaENvbGxlY3Rpb24kO1xuICB9XG5cbiAgLy8gamUgY29tbWVudCBjZXR0ZSBmb25jdGlvbiBwb3VyIHRlc3RlciBhdmVjIGxlIGJlaGF2aW9yIGNoYXVkXG4gIHVwZGF0ZVVzZXIodXNlciwgdG9rZW4pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goYCR7dGhpcy51cmxBcGl9L2FwaS92MS9sZXR0ZXJzL3VzZXJgLCB1c2VyKS5waXBlKFxuICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoQ29sbGVjdGlvbih0b2tlbik7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyByZWZyZXNoQ29sbGVjdGlvbihkYXRhKTogdm9pZCB7XG4gIC8vICAgY29uc29sZS5sb2coJ2RlcHVpcyByZWZyZXNoY29sbGVjdGlvbicsIGRhdGEpO1xuICAvLyAgIHJldHVybiB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uJC5uZXh0KGRhdGEpO1xuICAvLyB9XG5cbiAgLy8gdGVudGF0aXZlIGF2ZWMgcmVmcmVzaCBjb2xsZWN0aW9uXG4gIC8vIHVwZGF0ZVVzZXIodXNlcik6IE9ic2VydmFibGU8YW55PiB7XG4gIC8vICAgcmV0dXJuIHRoaXMuaHR0cFxuICAvLyAgICAgLnBhdGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3YxL2xldHRlcnMvdXNlcicsIHVzZXIpXG4gIC8vICAgICAucGlwZShcbiAgLy8gICAgICAgdGFwKCgpID0+IHtcbiAgLy8gICAgICAgICB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uKHRoaXMudG9rZW4pO1xuICAvLyAgICAgICB9KVxuICAvLyAgICAgKTtcbiAgLy8gfVxuXG4gIC8vIHNhdmVJbmZvcyhpbmZvcyk6IE9ic2VydmFibGU8YW55PntcbiAgLy8gICBjb25zb2xlLmxvZyhpbmZvcywgJ2RlcHVpcycpXG4gIC8vICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdjEvbGV0dGVycy9jcmVhdGUtYXBwbGljYXRpb24nLCBpbmZvcyk7XG4gIC8vIH1cbiAgY3JlYXRlQXBwbGljYXRpb24odXNlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5sb2codXNlciwgJ2RlcHVpcycpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goXG4gICAgICBgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvY3JlYXRlLWFwcGxpY2F0aW9uYCxcbiAgICAgIHVzZXJcbiAgICApO1xuICB9XG5cbiAgc2F2ZWRBcHBsaWNhdGlvbih1c2VyLCBuZXdWYWx1ZSwgdG9rZW4pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8vY29uc29sZS5sb2coJ2RhdGEgZGVwdWlzIHNhdmVkIGFwcGxpY2F0aW9uJyk7XG5cbiAgICBjb25zdCBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSk7XG4gICAgZGF0YS51c2VyID0gdXNlcjtcbiAgICBkYXRhLm5ld1ZhbHVlID0gbmV3VmFsdWU7XG4gICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucGF0Y2goYCR7dGhpcy51cmxBcGl9L2FwaS92MS9sZXR0ZXJzL3NhdmVkLWFwcGxpY2F0aW9uYCwgZGF0YSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVmcmVzaENvbGxlY3Rpb24odG9rZW4pO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIGRlbGV0ZUFwcGxpY2F0aW9uKHVzZXIsIGxldHRlciwgdG9rZW4pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9KTtcbiAgICBkYXRhLnVzZXIgPSB1c2VyO1xuICAgIGRhdGEudG9SZW1vdmUgPSBsZXR0ZXI7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBhdGNoKGAke3RoaXMudXJsQXBpfS9hcGkvdjEvbGV0dGVycy9kZWxldGUtYXBwbGljYXRpb25gLCBkYXRhKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoQ29sbGVjdGlvbih0b2tlbik7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgZm9yZ290UGFzc3dvcmQoZW1haWwpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnNvbGUubG9nKGVtYWlsLCAnZGVwdWlzIHNlcnZpY2UnKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cmxBcGl9L2FwaS92MS9sZXR0ZXJzL2ZvcmdvdC1wYXNzd29yZGAsIHtcbiAgICAgIGVtYWlsLFxuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRQYXNzd29yZChvYmopOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnNvbGUubG9nKCdkZXB1aXMgc2VydmljZScsIG9iaik7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cmxBcGl9L2FwaS92MS9sZXR0ZXJzL3Jlc2V0LXBhc3N3b3JkL2AsIG9iaik7XG4gIH1cblxuICBzYXZlTmV3UGFzc3dvcmQob2JqKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZyhvYmopO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgYCR7dGhpcy51cmxBcGl9L2FwaS92MS9sZXR0ZXJzL3NhdmUtbmV3LXBhc3N3b3JkYCxcbiAgICAgIG9ialxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUYWIyUGFnZSB9IGZyb20gJy4vdGFiMi5wYWdlJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IFRhYjJQYWdlLFxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBUYWIyUGFnZVJvdXRpbmdNb2R1bGUge31cbiIsImltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUYWIyUGFnZSB9IGZyb20gJy4vdGFiMi5wYWdlJztcbmltcG9ydCB7IEV4cGxvcmVDb250YWluZXJDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5tb2R1bGUnO1xuXG5pbXBvcnQgeyBUYWIyUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3RhYjItcm91dGluZy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEV4cGxvcmVDb250YWluZXJDb21wb25lbnRNb2R1bGUsXG4gICAgVGFiMlBhZ2VSb3V0aW5nTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVGFiMlBhZ2VdXG59KVxuZXhwb3J0IGNsYXNzIFRhYjJQYWdlTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uQ2hhbmdlcywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1vZGFsQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IENvdmVyTGV0dGVyQ1BhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvdmVyLWxldHRlci1jL2NvdmVyLWxldHRlci1jLnBhZ2UnO1xuaW1wb3J0IHsgQ292ZXJMZXR0ZXJTaW1wbGVQYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb3Zlci1sZXR0ZXItc2ltcGxlL2NvdmVyLWxldHRlci1zaW1wbGUucGFnZSc7XG5pbXBvcnQgeyBDb3ZlckxldHRlckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY292ZXItbGV0dGVyL2NvdmVyLWxldHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXNlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vdXNlci91c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXRhYjInLFxuICB0ZW1wbGF0ZVVybDogJ3RhYjIucGFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYjIucGFnZS5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRhYjJQYWdlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwdWJsaWMgZm9ybSE6IEZvcm1Hcm91cDtcblxuICAvLyBpY2kgYWpvdXRlciB2w6lyaWZpY2F0aW9uIGRlIGwndXRpbGlzYXRldXJcblxuICBwdWJsaWMgdXNlciE6IFVzZXI7XG4gIHRva2VuICE6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHtcbiAgICAvLyBzb3VzY3JpcmUgw6AgbCdvYnNlcnZhYmxlKClcbiAgICAvLyB0aGlzLnVzZXJzU2VydmljZS5yZWZyZXNoQ29sbGVjdGlvbiQuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhkYXRhLCAnZGF0YScpO1xuICAgIC8vIH0pO1xuICAgIC8vIGNoZWNrIHRva2VuXG4gICAgdGhpcy50b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgIC8vY29uc29sZS5sb2codG9rZW4sICd0b2tlbicpO1xuICAgIC8vIDEgLSBqZSB2w6lyaWZpZSBsJ2lkZW50aXRlIGR1IHVzZXJcbiAgICBpZiAodGhpcy50b2tlbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygndGVzdCcpO1xuXG4gICAgICAgIC8vIGljaSBqZSBjb21tZW50ZSB0aGlzLnVzZXJzU2VydmljZS5nZXRVc2VyKHRva2VuKS5zdWJzY3JpYmUoKGRhdGEpID0+IHsgZXQgamUgcmVtcGxhY2UgYXZlYyByZWZyZXNoQ29sbGVjdG9uXG4gICAgICAgIHRoaXMudXNlcnNTZXJ2aWNlLmNvbGxlY3Rpb24odGhpcy50b2tlbikuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLnVzZXIsICdkYXRhJyk7XG4gICAgICAgICAgY29uc3QgeyB1c2VyIH0gPSBkYXRhO1xuXG4gICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMudXNlciwgJ2RlcHVpcyB0YWIyJyk7XG5cbiAgICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgICAgIGludGl0dWxlOiBbXG4gICAgICAgICAgICAgIHRoaXMudXNlcj8ubGV0dGVyc1swXT8uaW50aXR1bGUgfHwgJycsXG4gICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZXhwZXJpZW5jZTogW1xuICAgICAgICAgICAgICB0aGlzLnVzZXI/LmxldHRlcnNbMF0/LmV4cGVyaWVuY2UgfHwgJycsXG4gICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc29jaWV0ZTogW1xuICAgICAgICAgICAgICB0aGlzLnVzZXI/LmxldHRlcnNbMF0/LnNvY2lldGUgfHwgJycsXG4gICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29udGFjdDogW1xuICAgICAgICAgICAgICB0aGlzLnVzZXI/LmxldHRlcnNbMF0/LmNvbnRhY3QgfHwgJ01hZGFtZSdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhZHJlc3NlU29jaWV0ZTogW1xuICAgICAgICAgICAgICB0aGlzLnVzZXI/LmxldHRlcnNbMF0/LmFkcmVzc2VTb2NpZXRlIHx8ICcnLFxuICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGNwVmlsbGU6IFtcbiAgICAgICAgICAgICAgdGhpcy51c2VyPy5sZXR0ZXJzWzBdPy5jcFZpbGxlIHx8ICcnLFxuICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge31cblxuICBuZ09uQ2hhbmdlcygpIHt9XG5cbiAgc2F2ZUluZm9zKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgLy8gY29uc3QgdXBkYXRlZFVzZXIgPSB7IC4uLnRoaXMuZm9ybS52YWx1ZSwgLi4udGhpcy51c2VyIH07XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnVzZXIpO1xuICAgIHRoaXMudXNlci5sZXR0ZXJzWzBdID0gdGhpcy5mb3JtLnZhbHVlO1xuXG4gICAgY29uc29sZS5sb2codGhpcy51c2VyLCAnZmluYWwgdXNlcicpO1xuICAgIC8vIGNhbGwgc2VydmljZVxuICAgIHRoaXMudXNlcnNTZXJ2aWNlXG4gICAgICAuY3JlYXRlQXBwbGljYXRpb24odGhpcy51c2VyKVxuICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSkpO1xuICB9XG5cbiAgb25TYXZlZCgpIHtcbiAgIC8vIGNvbnNvbGUubG9nKHRoaXMudXNlcik7XG5cbiAgICAvLyBjYWxsIHNlcnZpY2VcbiAgICB0aGlzLnVzZXJzU2VydmljZVxuICAgICAgLnNhdmVkQXBwbGljYXRpb24odGhpcy51c2VyLCB0aGlzLmZvcm0udmFsdWUsIHRoaXMudG9rZW4pXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIG9wZW5Nb2RhbCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIpO1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnVzZXI7XG4gICAgY29uc29sZS5sb2codXNlciwgJ2luZm9zJyk7XG4gICAgLy8gYXR0ZW50aW9uIGwnb2JqZXQgZW52b3nDqSAoaWNpIHVzZXIpIGRvaXQgY29ycmVzcG9uZHJlIMOgIGwnb2JqZXQgZGFucyBASW5wdXQoKVxuICAgIGNvbnN0IGNvdmVyTGV0dGVyID0gYXdhaXQgdGhpcy5jcmVhdGVNb2RhbChDb3ZlckxldHRlckNvbXBvbmVudCwge1xuICAgICAgdXNlcixcbiAgICB9KTtcbiAgICBhd2FpdCBjb3ZlckxldHRlci5wcmVzZW50KCk7XG4gIH1cblxuICBhc3luYyBvcGVuTW9kYWxTaW1wbGUoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy51c2VyKTtcbiAgICBjb25zdCB1c2VyID0gdGhpcy51c2VyO1xuICAgIGNvbnNvbGUubG9nKHVzZXIsICdpbmZvcycpO1xuICAgIC8vIGF0dGVudGlvbiBsJ29iamV0IGVudm95w6kgKGljaSB1c2VyKSBkb2l0IGNvcnJlc3BvbmRyZSDDoCBsJ29iamV0IGRhbnMgQElucHV0KClcbiAgICBjb25zdCBjb3ZlckxldHRlciA9IGF3YWl0IHRoaXMuY3JlYXRlTW9kYWwoQ292ZXJMZXR0ZXJTaW1wbGVQYWdlLCB7XG4gICAgICB1c2VyLFxuICAgIH0pO1xuICAgIGF3YWl0IGNvdmVyTGV0dGVyLnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIG9wZW5Nb2RhbExldHRlckMoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy51c2VyKTtcbiAgICBjb25zdCB1c2VyID0gdGhpcy51c2VyO1xuICAgIGNvbnNvbGUubG9nKHVzZXIsICdpbmZvcycpO1xuICAgIC8vIGF0dGVudGlvbiBsJ29iamV0IGVudm95w6kgKGljaSB1c2VyKSBkb2l0IGNvcnJlc3BvbmRyZSDDoCBsJ29iamV0IGRhbnMgQElucHV0KClcbiAgICBjb25zdCBjb3ZlckxldHRlciA9IGF3YWl0IHRoaXMuY3JlYXRlTW9kYWwoQ292ZXJMZXR0ZXJDUGFnZSwge1xuICAgICAgdXNlcixcbiAgICB9KTtcbiAgICBhd2FpdCBjb3ZlckxldHRlci5wcmVzZW50KCk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVNb2RhbChcbiAgICBjb21wb25lbnQsXG4gICAgY29tcG9uZW50UHJvcHM/LFxuICAgIGNzc0NsYXNzP1xuICApOiBQcm9taXNlPEhUTUxJb25Nb2RhbEVsZW1lbnQ+IHtcbiAgICBjb25zdCBtb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDdHJsLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQsXG4gICAgICBjc3NDbGFzcyxcbiAgICAgIGNvbXBvbmVudFByb3BzLFxuICAgICAgYmFja2Ryb3BEaXNtaXNzOiB0cnVlLFxuICAgIH0pO1xuICAgIHJldHVybiBtb2RhbDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkh0dHBDbGllbnQiLCJIdHRwSGVhZGVycyIsIkluamVjdGFibGUiLCJCZWhhdmlvclN1YmplY3QiLCJ0YXAiLCJlbnZpcm9ubWVudCIsIlVzZXJzU2VydmljZSIsImNvbnN0cnVjdG9yIiwiaHR0cCIsInVybEFwaSIsIm9uU2lnblVwIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJwb3N0Iiwib25Mb2dpbiIsInJlZnJlc2hDb2xsZWN0aW9uIiwidG9rZW4iLCJoZWFkZXJzIiwic2V0IiwiZ2V0Iiwic3Vic2NyaWJlIiwiZGF0YSIsInJlZnJlc2hDb2xsZWN0aW9uJCIsIm5leHQiLCJjb2xsZWN0aW9uIiwidXBkYXRlVXNlciIsInBhdGNoIiwicGlwZSIsImNyZWF0ZUFwcGxpY2F0aW9uIiwic2F2ZWRBcHBsaWNhdGlvbiIsIm5ld1ZhbHVlIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVsZXRlQXBwbGljYXRpb24iLCJsZXR0ZXIiLCJ0b1JlbW92ZSIsImZvcmdvdFBhc3N3b3JkIiwiZW1haWwiLCJyZXNldFBhc3N3b3JkIiwib2JqIiwic2F2ZU5ld1Bhc3N3b3JkIiwicHJvdmlkZWRJbiIsIkNvbXBvbmVudCIsIkZvcm1CdWlsZGVyIiwiVmFsaWRhdG9ycyIsIlJvdXRlciIsIk1vZGFsQ29udHJvbGxlciIsIkNvdmVyTGV0dGVyQ1BhZ2UiLCJDb3ZlckxldHRlclNpbXBsZVBhZ2UiLCJDb3ZlckxldHRlckNvbXBvbmVudCIsIlRhYjJQYWdlIiwidXNlcnNTZXJ2aWNlIiwiZmIiLCJtb2RhbEN0cmwiLCJyb3V0ZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZm9ybSIsImdyb3VwIiwiaW50aXR1bGUiLCJsZXR0ZXJzIiwicmVxdWlyZWQiLCJleHBlcmllbmNlIiwic29jaWV0ZSIsImNvbnRhY3QiLCJhZHJlc3NlU29jaWV0ZSIsImNwVmlsbGUiLCJlcnJvciIsIm5hdmlnYXRlIiwibmdPbkluaXQiLCJuZ09uQ2hhbmdlcyIsInNhdmVJbmZvcyIsInZhbHVlIiwib25TYXZlZCIsIm9wZW5Nb2RhbCIsImNvdmVyTGV0dGVyIiwiY3JlYXRlTW9kYWwiLCJwcmVzZW50Iiwib3Blbk1vZGFsU2ltcGxlIiwib3Blbk1vZGFsTGV0dGVyQyIsImNvbXBvbmVudCIsImNvbXBvbmVudFByb3BzIiwiY3NzQ2xhc3MiLCJtb2RhbCIsImNyZWF0ZSIsImJhY2tkcm9wRGlzbWlzcyIsInNlbGVjdG9yIiwidGVtcGxhdGUiXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6W119