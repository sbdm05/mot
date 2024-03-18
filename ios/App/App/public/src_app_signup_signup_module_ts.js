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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 2321);
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

/***/ 6661:
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 1998);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 2444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/password.service */ 4688);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ 4961);
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user */ 2902);










let SignupPage = class SignupPage {
    constructor(fb, router, usersService, passwordService, cdr) {
        this.fb = fb;
        this.router = router;
        this.usersService = usersService;
        this.passwordService = passwordService;
        this.cdr = cdr;
        this.user = new _user_user__WEBPACK_IMPORTED_MODULE_4__.User();
        console.log('test depuis le constructor');
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {
            try {
                this.usersService.collection(token).subscribe((data) => {
                    // console.log(data.user, 'data');
                    // this.user = data.user;
                    console.log(data, 'user');
                    if (data) {
                        this.user = data.user;
                        this.usersService.setUserData(this.user);
                        this.cdr.detectChanges();
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
        if (this.user) {
            this.router.navigate(['tabs', 'tab1']);
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
    { type: _services_password_service__WEBPACK_IMPORTED_MODULE_2__.PasswordService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-signup',
        template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 2902:
/*!******************************!*\
  !*** ./src/app/user/user.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor(obj) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
}


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

module.exports = "<ion-header>\n  <ion-toolbar color='tertiary'>\n    <ion-title>Création de compte</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-content>\n\n    <form [formGroup]=\"form\">\n\n      <!-- email -->\n      <ion-item>\n        <ion-label position=\"floating\">E-mail</ion-label>\n        <ion-input type='email' formControlName='email'></ion-input>\n        <div class=\"error\" *ngIf=\"form.controls['email'].invalid && form.controls['email'].touched\">E-mail invalide</div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Mot de passe</ion-label>\n        <ion-input required type='password' formControlName='pwd'></ion-input>\n        <div class=\"error\" *ngIf=\"form.controls['pwd'].invalid && form.controls['pwd'].touched\">Le mot de passe doit contenir au moins 7 caractères </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Confirmation mot de passe</ion-label>\n        <ion-input required type='password' formControlName='pwdConfirm'></ion-input>\n        <div class=\"error\" *ngIf=\"form.controls['pwdConfirm'].invalid && form.controls['pwdConfirm'].touched\">Le mot de passe doit contenir au moins 7 caractères </div>\n      </ion-item>\n        <!--Ajouter message d'erreur-->\n        <div class=\"error\" *ngIf=\"form.errors?.verifyPassword\">\n          Les mots de passe doivent être identiques\n        </div>\n                <div class='error' *ngIf=\"form.errors?.improperLength\">\n                  Tous les champs doivent être renseignés.\n                </div>\n      <div *ngIf='errorPwd' class='error'>{{errorPwd}}</div>\n\n\n      <ion-button [disabled]='form.invalid' expand=\"full\" color='success' (click)=\"onSubmit()\">Créer un compte\n      </ion-button>\n\n    </form>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Déjà un compte ?</ion-card-title>\n        <ion-card-subtitle>identifiez-vous</ion-card-subtitle>\n        <ion-button color='tertiary' [routerLink]=\"['/login']\">Je m'identifie</ion-button>\n      </ion-card-header>\n\n\n    </ion-card>\n\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Mot de passe oublié ?</ion-card-title>\n            <ion-card-subtitle>identifiez-vous</ion-card-subtitle>\n            <ion-button color='tertiary' [routerLink]=\"['/forgot-password']\">Je réinitialise</ion-button>\n          </ion-card-header>\n\n\n        </ion-card>\n\n  </ion-content>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts.js.map