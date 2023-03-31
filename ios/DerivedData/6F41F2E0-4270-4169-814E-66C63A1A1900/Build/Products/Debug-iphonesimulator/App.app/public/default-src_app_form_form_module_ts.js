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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1zcmNfYXBwX2Zvcm1fZm9ybV9tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2M7QUFFaEI7QUFFdkMsTUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxnREFBUTtLQUNwQjtDQUNGLENBQUM7SUFNVyxxQkFBcUIsU0FBckIscUJBQXFCO0NBQUc7QUFBeEIscUJBQXFCO0lBSmpDLHVEQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxrRUFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxPQUFPLEVBQUUsQ0FBQyx5REFBWSxDQUFDO0tBQ3hCLENBQUM7R0FDVyxxQkFBcUIsQ0FBRztBQUFIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCTztBQUNNO0FBQ21CO0FBRXJCO0FBRWlCO0FBRXZCO0lBYTFCLGNBQWMsU0FBZCxjQUFjO0NBQUc7QUFBakIsY0FBYztJQVgxQix1REFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AseURBQVk7WUFDWix1REFBVztZQUNYLHVEQUFXO1lBQ1gsdUVBQXFCO1lBQ3JCLCtEQUFtQjtTQUNwQjtRQUNELFlBQVksRUFBRSxDQUFDLGdEQUFRLENBQUM7UUFDeEIsT0FBTyxFQUFDLENBQUMsZ0RBQVEsQ0FBQztLQUNuQixDQUFDO0dBQ1csY0FBYyxDQUFHO0FBQUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RKO0FBQzZDO0FBRVg7SUFRNUMsUUFBUSxTQUFSLFFBQVE7SUEyQ25CLFlBQW9CLEVBQWUsRUFBVSxZQUEwQjtRQUFuRCxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUF2Q3ZFLFNBQUksR0FBTyxFQUFFLENBQUM7UUFJZCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLGtCQUFhLEdBQUc7WUFDZCxVQUFVO1lBQ1YsV0FBVztZQUNYLGdCQUFnQjtZQUNoQixVQUFV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LE9BQU8sS0FBS2hDLElBQUwsQ0FBVU0sSUFBVixDQUNMLEdBQUcsS0FBS0wsTUFBTSxtQ0FEVCxFQUVMK0IsR0FGSyxDQUFQO0VBSUQ7O0FBdEtzQjs7O1FBVmhCeEMsNERBQVVBOzs7QUFVTk0sWUFBWSxzREFIeEJKLHlEQUFVLENBQUM7RUFDVndDLFVBQVUsRUFBRTtBQURGLENBQUQsQ0FHYyxHQUFacEMsWUFBWSxDQUFaIiwic291cmNlcyI6WyIuL3NyYy9hcHAvZm9ybS9mb3JtLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL2Zvcm0vZm9ybS5tb2R1bGUudHMiLCIuL3NyYy9hcHAvZm9ybS9mb3JtLnBhZ2UudHMiLCIuL3NyYy9hcHAvc2VydmljZXMvdXNlcnMuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBGb3JtUGFnZSB9IGZyb20gJy4vZm9ybS5wYWdlJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IEZvcm1QYWdlXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtUGFnZVJvdXRpbmdNb2R1bGUge31cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBGb3JtUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2Zvcm0tcm91dGluZy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBGb3JtUGFnZSB9IGZyb20gJy4vZm9ybS5wYWdlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgICBGb3JtUGFnZVJvdXRpbmdNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGb3JtUGFnZV0sXG4gIGV4cG9ydHM6W0Zvcm1QYWdlXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtUGFnZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEb0NoZWNrLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXNlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vdXNlci91c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS5wYWdlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb3JtLnBhZ2Uuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB1c2VyITogVXNlcjtcbiAgZm9ybSE6IEZvcm1Hcm91cDtcblxuICBhZGpzOiBbXSA9IFtdO1xuXG4gIG9iaiE6IFVzZXI7XG5cbiAgaXNNb2RpZmllZCA9IGZhbHNlO1xuXG4gIHF1YWxpdGVzRmVtbWUgPSBbXG4gICAgJ2F1dG9ub21lJyxcbiAgICAnZHluYW1pcXVlJyxcbiAgICAnb3DDqXJhdGlvbm5lbGxlJyxcbiAgICAncsOpYWN0aXZlJyxcbiAgICAnZmlhYmxlJyxcbiAgICAncG9uY3R1ZWxsZScsXG4gICAgJ2NvbnNjaWVuY2lldXNlJyxcbiAgICAnZGlzY3LDqHRlJyxcbiAgICAnZW50aG91c2lhc3RlJyxcbiAgICAnaW1hZ2luYXRpdmUnLFxuICAgICdjcsOpYXRpdmUnLFxuICAgICdtw6l0aG9kaXF1ZScsXG4gICAgJ3BhdGllbnRlJyxcbiAgXTtcbiAgcXVhbGl0ZXNIb21tZSA9IFtcbiAgICAnYXV0b25vbWUnLFxuICAgICdkeW5hbWlxdWUnLFxuICAgICdvcMOpcmF0aW9ubmVsJyxcbiAgICAncsOpYWN0aWYnLFxuICAgICdmaWFibGUnLFxuICAgICdwb25jdHVlbCcsXG4gICAgJ2NvbnNjaWVuY2lldXgnLFxuICAgICdkaXNjcmV0JyxcbiAgICAnZW50aG91c2lhc3RlJyxcbiAgICAnaW1hZ2luYXRpZicsXG4gICAgJ2Nyw6lhdGlmJyxcbiAgICAnbcOpdGhvZGlxdWUnLFxuICAgICdwYXRpZW50JyxcbiAgXTtcblxuICB0b2tlbiE6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSB1c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSkge1xuICAgIHRoaXMudG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy51c2VyKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm0udmFsdWUpO1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgZ2VuZGVyOiBbdGhpcy51c2VyPy5nZW5kZXJdLFxuICAgICAgcHJlbm9tOiBbdGhpcy51c2VyPy5wcmVub21dLFxuICAgICAgbm9tOiBbdGhpcy51c2VyPy5ub21dLFxuICAgICAgYWRyZXNzZTogW3RoaXMudXNlcj8uYWRyZXNzZV0sXG4gICAgICB0ZWw6IFtcbiAgICAgICAgdGhpcy51c2VyPy50ZWwsXG4gICAgICAgIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoMTApLFxuICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwKSxcbiAgICAgICAgXSksXG4gICAgICBdLFxuICAgICAgZW1haWw6IFt0aGlzLnVzZXI/LmVtYWlsXSxcbiAgICAgIGFkanM6IFtcbiAgICAgICAgdGhpcy51c2VyPy5hZGpzLFxuICAgICAgICBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgzKV0pLFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd0ZXN0JywgdGhpcy51c2VyKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIsICdkZXB1aXMgbmdPbkNoYW5nZXMnKTtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGdlbmRlcjogW3RoaXMudXNlcj8uZ2VuZGVyXSxcbiAgICAgIHByZW5vbTogW3RoaXMudXNlcj8ucHJlbm9tXSxcbiAgICAgIG5vbTogW3RoaXMudXNlcj8ubm9tXSxcbiAgICAgIGFkcmVzc2U6IFt0aGlzLnVzZXI/LmFkcmVzc2VdLFxuICAgICAgdGVsOiBbXG4gICAgICAgIHRoaXMudXNlcj8udGVsLFxuICAgICAgICBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDEwKSxcbiAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgxMCksXG4gICAgICAgIF0pLFxuICAgICAgXSxcbiAgICAgIGVtYWlsOiBbdGhpcy51c2VyPy5lbWFpbF0sXG4gICAgICBhZGpzOiBbXG4gICAgICAgIHRoaXMudXNlcj8uYWRqcyxcbiAgICAgICAgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMyldKSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RHZW5kZXIoaSkge1xuICAgIC8vY29uc29sZS5sb2coaS50YXJnZXQudmFsdWUsICdnZW5kZXInKTtcbiAgICB0aGlzLnVzZXIuZ2VuZGVyID0gaS50YXJnZXQudmFsdWU7XG4gIH1cblxuICBzZWxlY3RBZGooaSkge1xuICAgIC8vY29uc29sZS5sb2coaS50YXJnZXQudmFsdWUsICdhZGpzJyk7XG4gICAgdGhpcy5hZGpzID0gaS50YXJnZXQudmFsdWU7XG4gIH1cbiAgb25TdWJtaXQoKSB7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmZvcm0uc3RhdHVzKTtcblxuICAgIGlmICh0aGlzLmZvcm0uc3RhdHVzID09PSAnVkFMSUQnKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMudG9rZW4sICd0b2tlbicpO1xuICAgICAgdGhpcy51c2Vyc1NlcnZpY2VcbiAgICAgICAgLnVwZGF0ZVVzZXIodGhpcy5mb3JtLnZhbHVlLCB0aGlzLnRva2VuKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnYWZ0ZXIgdXBkYXRlJywgZGF0YSk7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnc3VibWl0IG9rJyk7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmZvcm0udmFsdWUpO1xuICAgICAgICAgIC8vdGhpcy51c2Vyc1NlcnZpY2UucmVmcmVzaENvbGxlY3Rpb24oZGF0YSk7XG4gICAgICAgICAgdGhpcy5pc01vZGlmaWVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAvL2xvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbmZvcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuZm9ybS52YWx1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyZXVyJyk7XG4gICAgICAvL3RoaXMuZXJyb3I9J1ZldWlsbGV6IGNvbXBsw6l0ZXIgbGUgZm9ybXVsYWlyZSdcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vdXNlci91c2VyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJzU2VydmljZSB7XG4gIHByaXZhdGUgdXJsQXBpID0gZW52aXJvbm1lbnQudXJsQXBpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgLy90b2tlbiE6IG51bWJlcjtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgcHJpdmF0ZSByZWZyZXNoQ29sbGVjdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KFxuICAgICcnXG4gICk7XG5cbiAgLy8gYXR0ZW50aW9uIHNhbnMgbGUgdHlwYWdlLCBvbiBuZSByw6ljdXDDqHJlIHBhcyBsYSB2YWxldXIgZGFucyBsZSBzdWJzY3JpYmUgISEhIVxuICBvblNpZ25VcCh1c2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZyh1c2VyLCAndXNlcicpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPihgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnNgLCB1c2VyKTtcbiAgfVxuXG4gIG9uTG9naW4odXNlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy8gY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAvLyBsZXQgaGVhZGVyc19vYmplY3QgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoXG4gICAgLy8gICAnQXV0aG9yaXphdGlvbicsXG4gICAgLy8gICAnQmVhcmVyICcgKyB0b2tlblxuICAgIC8vICk7XG4gICAgY29uc29sZS5sb2codXNlciwgJ3VzZXInKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4oYCR7dGhpcy51cmxBcGl9L2FwaS92MS9sZXR0ZXJzL2xvZ2luYCwgdXNlcik7XG4gICAgLy8gKS5waXBlKFxuICAgIC8vICAgY2F0Y2hFcnJvcihhc3luYyAoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgIC8vICk7XG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KFxuXG4gICAgLy8gKVxuICB9XG5cbiAgLy8gamUgY29tbWVudGUgY2V0dGUgZm9uY3Rpb24gcG91ciBkZXMgdGVzdHNcbiAgLy8gZ2V0VXNlcih0b2tlbik6IE9ic2VydmFibGU8YW55PiB7XG4gIC8vICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gIC8vICAgICAuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXG4gIC8vICAgICAuc2V0KCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpXG4gIC8vICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuXG4gIC8vICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdjEvbGV0dGVycy91c2VyJywge1xuICAvLyAgICAgaGVhZGVycyxcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIGdldFVzZXIodG9rZW4pIHtcbiAgLy8gICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgLy8gICAgIC5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgLy8gICAgIC5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgLy8gICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0b2tlbik7XG4gIC8vICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAvLyAgIHRoaXMucmVmcmVzaENvbGxlY3Rpb24odG9rZW4sIGhlYWRlcnMpO1xuICAvLyAgIHJldHVybiB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uJDtcbiAgLy8gfVxuXG4gIHJlZnJlc2hDb2xsZWN0aW9uKHRva2VuKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnZGVwdWlzIHJlZnJlc2hjb2xsZWN0aW9uJyk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgICAuc2V0KCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpXG4gICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuXG4gICAgdGhpcy5odHRwXG4gICAgICAuZ2V0KGAke3RoaXMudXJsQXBpfS9hcGkvdjEvbGV0dGVycy91c2VyYCwge1xuICAgICAgICBoZWFkZXJzLFxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoQ29sbGVjdGlvbiQubmV4dChkYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSwgJ2RlcHVpcyByZWZyZXNoY29sbGVjdGlvbicpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgY29sbGVjdGlvbih0b2tlbikge1xuICAgIGNvbnNvbGUubG9nKHRva2VuLCAndG9la24gZGVwdWlzIGNvbGxlY3Rpb24nKTtcbiAgICB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uKHRva2VuKTtcbiAgICByZXR1cm4gdGhpcy5yZWZyZXNoQ29sbGVjdGlvbiQ7XG4gIH1cblxuICAvLyBqZSBjb21tZW50IGNldHRlIGZvbmN0aW9uIHBvdXIgdGVzdGVyIGF2ZWMgbGUgYmVoYXZpb3IgY2hhdWRcbiAgdXBkYXRlVXNlcih1c2VyLCB0b2tlbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvdXNlcmAsIHVzZXIpLnBpcGUoXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uKHRva2VuKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vIHJlZnJlc2hDb2xsZWN0aW9uKGRhdGEpOiB2b2lkIHtcbiAgLy8gICBjb25zb2xlLmxvZygnZGVwdWlzIHJlZnJlc2hjb2xsZWN0aW9uJywgZGF0YSk7XG4gIC8vICAgcmV0dXJuIHRoaXMucmVmcmVzaENvbGxlY3Rpb24kLm5leHQoZGF0YSk7XG4gIC8vIH1cblxuICAvLyB0ZW50YXRpdmUgYXZlYyByZWZyZXNoIGNvbGxlY3Rpb25cbiAgLy8gdXBkYXRlVXNlcih1c2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgLy8gICByZXR1cm4gdGhpcy5odHRwXG4gIC8vICAgICAucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdjEvbGV0dGVycy91c2VyJywgdXNlcilcbiAgLy8gICAgIC5waXBlKFxuICAvLyAgICAgICB0YXAoKCkgPT4ge1xuICAvLyAgICAgICAgIHRoaXMucmVmcmVzaENvbGxlY3Rpb24odGhpcy50b2tlbik7XG4gIC8vICAgICAgIH0pXG4gIC8vICAgICApO1xuICAvLyB9XG5cbiAgLy8gc2F2ZUluZm9zKGluZm9zKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAvLyAgIGNvbnNvbGUubG9nKGluZm9zLCAnZGVwdWlzJylcbiAgLy8gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS92MS9sZXR0ZXJzL2NyZWF0ZS1hcHBsaWNhdGlvbicsIGluZm9zKTtcbiAgLy8gfVxuICBjcmVhdGVBcHBsaWNhdGlvbih1c2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZyh1c2VyLCAnZGVwdWlzJyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChcbiAgICAgIGAke3RoaXMudXJsQXBpfS9hcGkvdjEvbGV0dGVycy9jcmVhdGUtYXBwbGljYXRpb25gLFxuICAgICAgdXNlclxuICAgICk7XG4gIH1cblxuICBzYXZlZEFwcGxpY2F0aW9uKHVzZXIsIG5ld1ZhbHVlLCB0b2tlbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy9jb25zb2xlLmxvZygnZGF0YSBkZXB1aXMgc2F2ZWQgYXBwbGljYXRpb24nKTtcblxuICAgIGNvbnN0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9KTtcbiAgICBkYXRhLnVzZXIgPSB1c2VyO1xuICAgIGRhdGEubmV3VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wYXRjaChgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvc2F2ZWQtYXBwbGljYXRpb25gLCBkYXRhKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoQ29sbGVjdGlvbih0b2tlbik7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgZGVsZXRlQXBwbGljYXRpb24odXNlciwgbGV0dGVyLCB0b2tlbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30pO1xuICAgIGRhdGEudXNlciA9IHVzZXI7XG4gICAgZGF0YS50b1JlbW92ZSA9IGxldHRlcjtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucGF0Y2goYCR7dGhpcy51cmxBcGl9L2FwaS92MS9sZXR0ZXJzL2RlbGV0ZS1hcHBsaWNhdGlvbmAsIGRhdGEpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uKHRva2VuKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBmb3Jnb3RQYXNzd29yZChlbWFpbCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5sb2coZW1haWwsICdkZXB1aXMgc2VydmljZScpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvZm9yZ290LXBhc3N3b3JkYCwge1xuICAgICAgZW1haWwsXG4gICAgfSk7XG4gIH1cblxuICByZXNldFBhc3N3b3JkKG9iaik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5sb2coJ2RlcHVpcyBzZXJ2aWNlJywgb2JqKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvcmVzZXQtcGFzc3dvcmQvYCwgb2JqKTtcbiAgfVxuXG4gIHNhdmVOZXdQYXNzd29yZChvYmopOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnNvbGUubG9nKG9iaik7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICBgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvc2F2ZS1uZXctcGFzc3dvcmRgLFxuICAgICAgb2JqXG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkh0dHBDbGllbnQiLCJIdHRwSGVhZGVycyIsIkluamVjdGFibGUiLCJCZWhhdmlvclN1YmplY3QiLCJ0YXAiLCJlbnZpcm9ubWVudCIsIlVzZXJzU2VydmljZSIsImNvbnN0cnVjdG9yIiwiaHR0cCIsInVybEFwaSIsIm9uU2lnblVwIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJwb3N0Iiwib25Mb2dpbiIsInJlZnJlc2hDb2xsZWN0aW9uIiwidG9rZW4iLCJoZWFkZXJzIiwic2V0IiwiZ2V0Iiwic3Vic2NyaWJlIiwiZGF0YSIsInJlZnJlc2hDb2xsZWN0aW9uJCIsIm5leHQiLCJjb2xsZWN0aW9uIiwidXBkYXRlVXNlciIsInBhdGNoIiwicGlwZSIsImNyZWF0ZUFwcGxpY2F0aW9uIiwic2F2ZWRBcHBsaWNhdGlvbiIsIm5ld1ZhbHVlIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVsZXRlQXBwbGljYXRpb24iLCJsZXR0ZXIiLCJ0b1JlbW92ZSIsImZvcmdvdFBhc3N3b3JkIiwiZW1haWwiLCJyZXNldFBhc3N3b3JkIiwib2JqIiwic2F2ZU5ld1Bhc3N3b3JkIiwicHJvdmlkZWRJbiJdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbXX0=