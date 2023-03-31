"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);
/* harmony import */ var _form_form_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form/form.module */ 9659);









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule,
            _form_form_module__WEBPACK_IMPORTED_MODULE_3__.FormPageModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ 4961);
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user */ 2902);








let Tab1Page = class Tab1Page {
    constructor(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        // use capacitor storage
        // // check token
        // const token = localStorage.getItem('token');
        // console.log(token, 'token ? ');
        // // this.usersService.refreshCollection(token);
        // console.log(token, 'toekn depuis tab1');
        // if (token) {
        //   try {
        //     this.usersService.collection(token).subscribe(
        //       (data) => {
        //         console.log(data, 'data');
        //         console.log(this.user, 'user');
        //         if (data) {
        //           this.user = data.user;
        //         } else {
        //           console.log('pas de data');
        //           this.router.navigate(['/']);
        //         }
        //       },
        //       (e) => {
        //         console.log(e.error, 'erreur');
        //       }
        //     );
        //   } catch (error) {
        //     console.log(error, 'error');
        //   }
        // } else {
        //   this.router.navigate(['/']);
        // }
    }
    ngOnInit() {
        // check token
        const token = localStorage.getItem('token');
        console.log(token, 'token ? ');
        // this.usersService.refreshCollection(token);
        console.log(token, 'toekn depuis tab1');
        if (token) {
            try {
                this.usersService.collection(token).subscribe((data) => {
                    console.log(data, 'data');
                    console.log(this.user, 'user');
                    if (data) {
                        this.user = data.user;
                    }
                }, (e) => {
                    console.log(e.error, 'erreur');
                });
            }
            catch (error) {
                console.log(error, 'error');
            }
        }
        else {
            this.router.navigate(['/']);
        }
    }
    onLogout() {
        //console.log(this.token);
        localStorage.removeItem('token');
        this.router.navigate(['/signup']);
    }
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }
    confirm() {
        // reset erreurCopy
        this.erreurCopy = '';
        // this.modal.dismiss(this.name, 'confirm');
        // vérifier this.name === EFFACER
        if (this.confirmMessage === 'EFFACER') {
            console.log('effacé');
            // appel au service
            this.usersService.deleteUser(this.user).subscribe((data) => {
                const token = localStorage.getItem('token');
                if (token) {
                    // refermer la modal
                    this.modal.dismiss('confirm');
                    // remove le token
                    localStorage.removeItem('token');
                    this.router.navigate(['/signup']);
                }
            });
        }
        else {
            // console.log('not the string');
            this.erreurCopy = 'Erreur dans le mot recopié';
        }
    }
    ngOnDestroy() {
        this.user = new _user_user__WEBPACK_IMPORTED_MODULE_3__.User();
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
Tab1Page.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonModal,] }]
};
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".error {\n  border: 1px solid red;\n  padding: 15px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4iXX0= */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-menu contentId=\"main-content\" side='end'>\n<ion-header>\n  <ion-toolbar>\n    <ion-title>Mon Profil</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-button color=\"warning\" expand=\"block\" (click)=' onLogout() '>Me déconnecter</ion-button>\n\n  <!-- modal -->\n  <ion-button color=\"danger\" id=\"open-modal\" expand=\"block\">Supprimer mon compte</ion-button>\n  <!-- <p>test{{ message }}</p> -->\n  <ion-modal trigger=\"open-modal\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <ion-button (click)=\"cancel()\">Annuler</ion-button>\n          </ion-buttons>\n          <ion-title>Supprimer</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"confirm()\" [strong]=\"true\">Confirmer</ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content class=\"ion-padding\">\n        <ion-item>\n          <ion-label position=\"stacked\">écrivez EFFACER</ion-label>\n          <ion-input type=\"text\" placeholder=\"EFFACER\" [(ngModel)]=\"confirmMessage\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf='erreurCopy'>\n          <ion-label class='error'>{{erreurCopy}}</ion-label>\n        </ion-item>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n\n\n\n</ion-content>\n</ion-menu>\n\n\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar color=\"tertiary\">\n      <ion-buttons slot=\"end\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Mes infos\n      </ion-title>\n\n\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content [fullscreen]=\"true\" *ngIf='user'>\n  <!-- <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Mes infos</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <!-- Vérifier le token -->\n\n    <app-form [user]='user' *ngIf='user'></app-form>\n\n\n</ion-content>\n</div>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map