"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_signup_signup_module_ts"],{

/***/ 4688:
/*!**********************************************!*\
  !*** ./src/app/services/password.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordService": () => (/* binding */ PasswordService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let PasswordService = class PasswordService {
    constructor() { }
    // ici fonction pour vérifier que pwd et confirmpwd sont identiques
    verify() {
        return (formGroup) => {
            // on cherche pasword et confirmpassword
            const pwd = formGroup.get('pwd').value;
            const pwdConfirm = formGroup.get('pwdConfirm').value;
            try {
                // console.log(typeof(pwd.length), 'pwd');
                if (!pwd || !pwdConfirm) {
                    console.log('inside improper');
                    return { improperLength: true };
                }
                //console.log(pwd.value);
                if (pwd !== pwdConfirm) {
                    // retourner une erreur
                    return { verifyPassword: true };
                }
                // pwdConfirm = pwdConfirm?.value.trim();
                // pwd = pwd.value?.trim();
                return null;
            }
            catch (error) {
                console.log(error);
                return { improperLength: true };
            }
        };
    }
};
PasswordService.ctorParameters = () => [];
PasswordService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], PasswordService);



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

/***/ 6661:
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 771);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 7648:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 6661);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 771);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 771:
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 1998);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 2444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/password.service */ 4688);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ 4961);
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user */ 2902);









let SignupPage = class SignupPage {
    constructor(fb, router, usersService, passwordService) {
        this.fb = fb;
        this.router = router;
        this.usersService = usersService;
        this.passwordService = passwordService;
        this.user = new _user_user__WEBPACK_IMPORTED_MODULE_4__.User();
        console.log('test depuis le constructor');
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {
            try {
                this.usersService.collection(token).subscribe((data) => {
                    // console.log(data.user, 'data');
                    //this.user = data.user;
                    console.log(data, 'user');
                    if (data) {
                        this.user = data.user;
                        this.router.navigate(['tabs', 'tab1']);
                    }
                    else {
                        console.log('pas de data');
                        this.router.navigate(['/']);
                    }
                }, (e) => {
                    console.log(e, 'error');
                });
            }
            catch (error) {
                console.log(error, 'error');
            }
        }
    }
    ngOnInit() {
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
            pwd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(7)]],
            pwdConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(7)]],
        }, {
            validators: [this.passwordService.verify()],
        });
    }
    onSubmit() {
        this.errorPwd = '';
        // on donne des nouvelles valeurs à this.user
        const { pwd, pwdConfirm } = this.form.value;
        // capter l'erreur
        // if (!pwd || !pwdConfirm) {
        //   console.log('pas de valeur');
        //   this.errorPwd = 'Les champs ne peuvent pas être vides';
        //   return console.log('champs vides');
        // }
        // if (pwd !== pwdConfirm) {
        //   this.errorPwd = 'Les mots de passe ne sont pas identiques';
        //   return console.log('pas le meme pwd');
        // }
        this.user = Object.assign(this.user, this.form.value);
        console.log(this.user, 'user');
        this.usersService.onSignUp(this.user).subscribe((data) => {
            console.log(data.token, 'return');
            // store jwt token in local storage
            // console.log(token, 'token');
            localStorage.setItem('token', data.token);
            this.router.navigate(['tabs/tab1']);
            this.form.reset();
        }, (e) => {
            console.log(e, 'erreur');
            // afficher cette erreur dans le front
            this.errorPwd = e.error.msg;
            this.form.reset();
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService },
    { type: _services_password_service__WEBPACK_IMPORTED_MODULE_2__.PasswordService }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-signup',
        template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 2444:
/*!****************************************************!*\
  !*** ./src/app/signup/signup.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".error {\n  border: 1px solid red;\n  padding: 15px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvcntcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4iXX0= */";

/***/ }),

/***/ 1998:
/*!****************************************************!*\
  !*** ./src/app/signup/signup.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color='tertiary'>\n        <ion-img slot=\"start\" src='../../assets/logos/logo.png'></ion-img>\n\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content>\n\n\n    <form [formGroup]=\"form\">\n\n      <!-- email -->\n      <ion-item>\n        <ion-label position=\"floating\">E-mail</ion-label>\n        <ion-input type='email' formControlName='email'></ion-input>\n        <div class=\"error\" *ngIf=\"form.controls['email'].invalid && form.controls['email'].touched\">E-mail invalide</div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Mot de passe</ion-label>\n        <ion-input required type='password' formControlName='pwd'></ion-input>\n        <div class=\"error\" *ngIf=\"form.controls['pwd'].invalid && form.controls['pwd'].touched\">Le mot de passe doit contenir au moins 7 caractères </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Confirmation mot de passe</ion-label>\n        <ion-input required type='password' formControlName='pwdConfirm'></ion-input>\n        <div class=\"error\" *ngIf=\"form.controls['pwdConfirm'].invalid && form.controls['pwdConfirm'].touched\">Le mot de passe doit contenir au moins 7 caractères </div>\n      </ion-item>\n        <!--Ajouter message d'erreur-->\n        <div class=\"error\" *ngIf=\"form.errors?.verifyPassword\">\n          Les mots de passe doivent être identiques\n        </div>\n                <div class='error' *ngIf=\"form.errors?.improperLength\">\n                  Tous les champs doivent être renseignés.\n                </div>\n      <div *ngIf='errorPwd' class='error'>{{errorPwd}}</div>\n\n\n      <ion-button [disabled]='form.invalid' expand=\"full\" color='success' (click)=\"onSubmit()\">Créer un compte\n      </ion-button>\n\n    </form>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Déjà un compte ?</ion-card-title>\n        <ion-card-subtitle>identifiez-vous</ion-card-subtitle>\n        <ion-button color='tertiary' [routerLink]=\"['/login']\">Je m'identifie</ion-button>\n      </ion-card-header>\n\n\n    </ion-card>\n\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Mot de passe oublié ?</ion-card-title>\n            <ion-card-subtitle>identifiez-vous</ion-card-subtitle>\n            <ion-button color='tertiary' [routerLink]=\"['/forgot-password']\">Je réinitialise</ion-button>\n          </ion-card-header>\n\n\n        </ion-card>\n\n  </ion-content>\n\n\n\n";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDN0MsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztZQUVsQyxtQ0FBbUM7WUFDbkMsK0JBQStCO1lBQy9CLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQ0QsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3pCLHNDQUFzQztZQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0NBQ0Y7O1lBekdRLHVEQUFXO1lBQ1gsbURBQU07WUFFTixpRUFBWTtZQURaLHVFQUFlOztBQVNYLFVBQVU7SUFMdEIsd0RBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLG1FQUFpQzs7S0FFbEMsQ0FBQztHQUNXLFVBQVUsQ0E4RnRCO0FBOUZzQiIsInNvdXJjZXMiOlsiLi9zcmMvYXBwL3NlcnZpY2VzL3Bhc3N3b3JkLnNlcnZpY2UudHMiLCIuL3NyYy9hcHAvc2VydmljZXMvdXNlcnMuc2VydmljZS50cyIsIi4vc3JjL2FwcC9zaWdudXAvc2lnbnVwLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3NpZ251cC9zaWdudXAubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIC8vIGljaSBmb25jdGlvbiBwb3VyIHbDqXJpZmllciBxdWUgcHdkIGV0IGNvbmZpcm1wd2Qgc29udCBpZGVudGlxdWVzXG4gIHB1YmxpYyB2ZXJpZnkoKTogVmFsaWRhdG9yRm4ge1xuICAgIHJldHVybiAoZm9ybUdyb3VwOiBGb3JtR3JvdXApID0+IHtcbiAgICAgIC8vIG9uIGNoZXJjaGUgcGFzd29yZCBldCBjb25maXJtcGFzc3dvcmRcbiAgICAgIGNvbnN0IHB3ZCA9IGZvcm1Hcm91cC5nZXQoJ3B3ZCcpLnZhbHVlO1xuICAgICAgY29uc3QgcHdkQ29uZmlybSA9IGZvcm1Hcm91cC5nZXQoJ3B3ZENvbmZpcm0nKS52YWx1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZihwd2QubGVuZ3RoKSwgJ3B3ZCcpO1xuICAgICAgICBpZiAoIXB3ZCB8fCAhcHdkQ29uZmlybSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgaW1wcm9wZXInKTtcbiAgICAgICAgICByZXR1cm4geyBpbXByb3Blckxlbmd0aDogdHJ1ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhwd2QudmFsdWUpO1xuXG4gICAgICAgIGlmIChwd2QgIT09IHB3ZENvbmZpcm0pIHtcbiAgICAgICAgICAvLyByZXRvdXJuZXIgdW5lIGVycmV1clxuICAgICAgICAgIHJldHVybiB7IHZlcmlmeVBhc3N3b3JkOiB0cnVlIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwd2RDb25maXJtID0gcHdkQ29uZmlybT8udmFsdWUudHJpbSgpO1xuICAgICAgICAvLyBwd2QgPSBwd2QudmFsdWU/LnRyaW0oKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybiB7IGltcHJvcGVyTGVuZ3RoOiB0cnVlIH07XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vdXNlci91c2VyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJzU2VydmljZSB7XG4gIHByaXZhdGUgdXJsQXBpID0gZW52aXJvbm1lbnQudXJsQXBpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgLy90b2tlbiE6IG51bWJlcjtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgcHJpdmF0ZSByZWZyZXNoQ29sbGVjdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KFxuICAgICcnXG4gICk7XG5cbiAgLy8gYXR0ZW50aW9uIHNhbnMgbGUgdHlwYWdlLCBvbiBuZSByw6ljdXDDqHJlIHBhcyBsYSB2YWxldXIgZGFucyBsZSBzdWJzY3JpYmUgISEhIVxuICBvblNpZ25VcCh1c2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZyh1c2VyLCAndXNlcicpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPihgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnNgLCB1c2VyKTtcbiAgfVxuXG4gIG9uTG9naW4odXNlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy8gY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAvLyBsZXQgaGVhZGVyc19vYmplY3QgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoXG4gICAgLy8gICAnQXV0aG9yaXphdGlvbicsXG4gICAgLy8gICAnQmVhcmVyICcgKyB0b2tlblxuICAgIC8vICk7XG4gICAgY29uc29sZS5sb2codXNlciwgJ3VzZXInKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4oYCR7dGhpcy51cmxBcGl9L2FwaS92MS9sZXR0ZXJzL2xvZ2luYCwgdXNlcik7XG4gICAgLy8gKS5waXBlKFxuICAgIC8vICAgY2F0Y2hFcnJvcihhc3luYyAoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgIC8vICk7XG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KFxuXG4gICAgLy8gKVxuICB9XG5cbiAgLy8gamUgY29tbWVudGUgY2V0dGUgZm9uY3Rpb24gcG91ciBkZXMgdGVzdHNcbiAgLy8gZ2V0VXNlcih0b2tlbik6IE9ic2VydmFibGU8YW55PiB7XG4gIC8vICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gIC8vICAgICAuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXG4gIC8vICAgICAuc2V0KCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpXG4gIC8vICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuXG4gIC8vICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdjEvbGV0dGVycy91c2VyJywge1xuICAvLyAgICAgaGVhZGVycyxcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIGdldFVzZXIodG9rZW4pIHtcbiAgLy8gICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgLy8gICAgIC5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgLy8gICAgIC5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgLy8gICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0b2tlbik7XG4gIC8vICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAvLyAgIHRoaXMucmVmcmVzaENvbGxlY3Rpb24odG9rZW4sIGhlYWRlcnMpO1xuICAvLyAgIHJldHVybiB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uJDtcbiAgLy8gfVxuXG4gIHJlZnJlc2hDb2xsZWN0aW9uKHRva2VuKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnZGVwdWlzIHJlZnJlc2hjb2xsZWN0aW9uJyk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgICAuc2V0KCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpXG4gICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuXG4gICAgdGhpcy5odHRwXG4gICAgICAuZ2V0KGAke3RoaXMudXJsQXBpfS9hcGkvdjEvbGV0dGVycy91c2VyYCwge1xuICAgICAgICBoZWFkZXJzLFxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoQ29sbGVjdGlvbiQubmV4dChkYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSwgJ2RlcHVpcyByZWZyZXNoY29sbGVjdGlvbicpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgY29sbGVjdGlvbih0b2tlbikge1xuICAgIGNvbnNvbGUubG9nKHRva2VuLCAndG9la24gZGVwdWlzIGNvbGxlY3Rpb24nKTtcbiAgICB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uKHRva2VuKTtcbiAgICByZXR1cm4gdGhpcy5yZWZyZXNoQ29sbGVjdGlvbiQ7XG4gIH1cblxuICAvLyBqZSBjb21tZW50IGNldHRlIGZvbmN0aW9uIHBvdXIgdGVzdGVyIGF2ZWMgbGUgYmVoYXZpb3IgY2hhdWRcbiAgdXBkYXRlVXNlcih1c2VyLCB0b2tlbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvdXNlcmAsIHVzZXIpLnBpcGUoXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uKHRva2VuKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vIHJlZnJlc2hDb2xsZWN0aW9uKGRhdGEpOiB2b2lkIHtcbiAgLy8gICBjb25zb2xlLmxvZygnZGVwdWlzIHJlZnJlc2hjb2xsZWN0aW9uJywgZGF0YSk7XG4gIC8vICAgcmV0dXJuIHRoaXMucmVmcmVzaENvbGxlY3Rpb24kLm5leHQoZGF0YSk7XG4gIC8vIH1cblxuICAvLyB0ZW50YXRpdmUgYXZlYyByZWZyZXNoIGNvbGxlY3Rpb25cbiAgLy8gdXBkYXRlVXNlcih1c2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgLy8gICByZXR1cm4gdGhpcy5odHRwXG4gIC8vICAgICAucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdjEvbGV0dGVycy91c2VyJywgdXNlcilcbiAgLy8gICAgIC5waXBlKFxuICAvLyAgICAgICB0YXAoKCkgPT4ge1xuICAvLyAgICAgICAgIHRoaXMucmVmcmVzaENvbGxlY3Rpb24odGhpcy50b2tlbik7XG4gIC8vICAgICAgIH0pXG4gIC8vICAgICApO1xuICAvLyB9XG5cbiAgLy8gc2F2ZUluZm9zKGluZm9zKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAvLyAgIGNvbnNvbGUubG9nKGluZm9zLCAnZGVwdWlzJylcbiAgLy8gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS92MS9sZXR0ZXJzL2NyZWF0ZS1hcHBsaWNhdGlvbicsIGluZm9zKTtcbiAgLy8gfVxuICBjcmVhdGVBcHBsaWNhdGlvbih1c2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZyh1c2VyLCAnZGVwdWlzJyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChcbiAgICAgIGAke3RoaXMudXJsQXBpfS9hcGkvdjEvbGV0dGVycy9jcmVhdGUtYXBwbGljYXRpb25gLFxuICAgICAgdXNlclxuICAgICk7XG4gIH1cblxuICBzYXZlZEFwcGxpY2F0aW9uKHVzZXIsIG5ld1ZhbHVlLCB0b2tlbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy9jb25zb2xlLmxvZygnZGF0YSBkZXB1aXMgc2F2ZWQgYXBwbGljYXRpb24nKTtcblxuICAgIGNvbnN0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9KTtcbiAgICBkYXRhLnVzZXIgPSB1c2VyO1xuICAgIGRhdGEubmV3VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wYXRjaChgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvc2F2ZWQtYXBwbGljYXRpb25gLCBkYXRhKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoQ29sbGVjdGlvbih0b2tlbik7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgZGVsZXRlQXBwbGljYXRpb24odXNlciwgbGV0dGVyLCB0b2tlbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30pO1xuICAgIGRhdGEudXNlciA9IHVzZXI7XG4gICAgZGF0YS50b1JlbW92ZSA9IGxldHRlcjtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucGF0Y2goYCR7dGhpcy51cmxBcGl9L2FwaS92MS9sZXR0ZXJzL2RlbGV0ZS1hcHBsaWNhdGlvbmAsIGRhdGEpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uKHRva2VuKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBmb3Jnb3RQYXNzd29yZChlbWFpbCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5sb2coZW1haWwsICdkZXB1aXMgc2VydmljZScpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvZm9yZ290LXBhc3N3b3JkYCwge1xuICAgICAgZW1haWwsXG4gICAgfSk7XG4gIH1cblxuICByZXNldFBhc3N3b3JkKG9iaik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5sb2coJ2RlcHVpcyBzZXJ2aWNlJywgb2JqKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvcmVzZXQtcGFzc3dvcmQvYCwgb2JqKTtcbiAgfVxuXG4gIHNhdmVOZXdQYXNzd29yZChvYmopOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnNvbGUubG9nKG9iaik7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICBgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvc2F2ZS1uZXctcGFzc3dvcmRgLFxuICAgICAgb2JqXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU2lnbnVwUGFnZSB9IGZyb20gJy4vc2lnbnVwLnBhZ2UnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogU2lnbnVwUGFnZVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwUGFnZVJvdXRpbmdNb2R1bGUge31cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBTaWdudXBQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vc2lnbnVwLXJvdXRpbmcubW9kdWxlJztcblxuaW1wb3J0IHsgU2lnbnVwUGFnZSB9IGZyb20gJy4vc2lnbnVwLnBhZ2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIFNpZ251cFBhZ2VSb3V0aW5nTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2lnbnVwUGFnZV1cbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwUGFnZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFzc3dvcmRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcGFzc3dvcmQuc2VydmljZSc7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2Vycy5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi91c2VyL3VzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lnbnVwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ251cC5wYWdlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWdudXAucGFnZS5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cFBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtITogRm9ybUdyb3VwO1xuXG4gIHVzZXI6IFVzZXIgPSBuZXcgVXNlcigpO1xuXG4gIGVycm9yUHdkITogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSB1c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSxcbiAgICBwcml2YXRlIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlXG4gICkge1xuICAgIGNvbnNvbGUubG9nKCd0ZXN0IGRlcHVpcyBsZSBjb25zdHJ1Y3RvcicpO1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy51c2Vyc1NlcnZpY2UuY29sbGVjdGlvbih0b2tlbikuc3Vic2NyaWJlKFxuICAgICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnVzZXIsICdkYXRhJyk7XG4gICAgICAgICAgICAvL3RoaXMudXNlciA9IGRhdGEudXNlcjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEsICd1c2VyJyk7XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBkYXRhLnVzZXI7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsndGFicycsICd0YWIxJ10pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BhcyBkZSBkYXRhJyk7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUsICdlcnJvcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCAnZXJyb3InKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKFxuICAgICAge1xuICAgICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1dLFxuICAgICAgICBwd2Q6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDcpXV0sXG4gICAgICAgIHB3ZENvbmZpcm06IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDcpXV0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWxpZGF0b3JzOiBbdGhpcy5wYXNzd29yZFNlcnZpY2UudmVyaWZ5KCldLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLmVycm9yUHdkID0gJyc7XG4gICAgLy8gb24gZG9ubmUgZGVzIG5vdXZlbGxlcyB2YWxldXJzIMOgIHRoaXMudXNlclxuICAgIGNvbnN0IHsgcHdkLCBwd2RDb25maXJtIH0gPSB0aGlzLmZvcm0udmFsdWU7XG5cbiAgICAvLyBjYXB0ZXIgbCdlcnJldXJcblxuICAgIC8vIGlmICghcHdkIHx8ICFwd2RDb25maXJtKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygncGFzIGRlIHZhbGV1cicpO1xuICAgIC8vICAgdGhpcy5lcnJvclB3ZCA9ICdMZXMgY2hhbXBzIG5lIHBldXZlbnQgcGFzIMOqdHJlIHZpZGVzJztcbiAgICAvLyAgIHJldHVybiBjb25zb2xlLmxvZygnY2hhbXBzIHZpZGVzJyk7XG4gICAgLy8gfVxuXG4gICAgLy8gaWYgKHB3ZCAhPT0gcHdkQ29uZmlybSkge1xuICAgIC8vICAgdGhpcy5lcnJvclB3ZCA9ICdMZXMgbW90cyBkZSBwYXNzZSBuZSBzb250IHBhcyBpZGVudGlxdWVzJztcbiAgICAvLyAgIHJldHVybiBjb25zb2xlLmxvZygncGFzIGxlIG1lbWUgcHdkJyk7XG4gICAgLy8gfVxuXG4gICAgdGhpcy51c2VyID0gT2JqZWN0LmFzc2lnbih0aGlzLnVzZXIsIHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgY29uc29sZS5sb2codGhpcy51c2VyLCAndXNlcicpO1xuXG4gICAgdGhpcy51c2Vyc1NlcnZpY2Uub25TaWduVXAodGhpcy51c2VyKS5zdWJzY3JpYmUoXG4gICAgICAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnRva2VuLCAncmV0dXJuJyk7XG5cbiAgICAgICAgLy8gc3RvcmUgand0IHRva2VuIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgLy8gY29uc29sZS5sb2codG9rZW4sICd0b2tlbicpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd0YWJzL3RhYjEnXSk7XG4gICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgfSxcbiAgICAgIChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUsICdlcnJldXInKTtcbiAgICAgICAgLy8gYWZmaWNoZXIgY2V0dGUgZXJyZXVyIGRhbnMgbGUgZnJvbnRcbiAgICAgICAgdGhpcy5lcnJvclB3ZCA9IGUuZXJyb3IubXNnO1xuICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSHR0cENsaWVudCIsIkh0dHBIZWFkZXJzIiwiSW5qZWN0YWJsZSIsIkJlaGF2aW9yU3ViamVjdCIsInRhcCIsImVudmlyb25tZW50IiwiVXNlcnNTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJodHRwIiwidXJsQXBpIiwib25TaWduVXAiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJvbkxvZ2luIiwicmVmcmVzaENvbGxlY3Rpb24iLCJ0b2tlbiIsImhlYWRlcnMiLCJzZXQiLCJnZXQiLCJzdWJzY3JpYmUiLCJkYXRhIiwicmVmcmVzaENvbGxlY3Rpb24kIiwibmV4dCIsImNvbGxlY3Rpb24iLCJ1cGRhdGVVc2VyIiwicGF0Y2giLCJwaXBlIiwiY3JlYXRlQXBwbGljYXRpb24iLCJzYXZlZEFwcGxpY2F0aW9uIiwibmV3VmFsdWUiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWxldGVBcHBsaWNhdGlvbiIsImxldHRlciIsInRvUmVtb3ZlIiwiZm9yZ290UGFzc3dvcmQiLCJlbWFpbCIsInJlc2V0UGFzc3dvcmQiLCJvYmoiLCJzYXZlTmV3UGFzc3dvcmQiLCJwcm92aWRlZEluIl0sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrOi8vLyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOltdfQ==