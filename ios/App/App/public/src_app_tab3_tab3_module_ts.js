"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 8614);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ 4961);






let Tab3Page = class Tab3Page {
    constructor(usersService, router, cdr) {
        this.usersService = usersService;
        this.router = router;
        this.cdr = cdr;
        // check token
        this.token = localStorage.getItem('token');
        // if (this.token) {
        //   try {
        //     this.usersService.collection(this.token).subscribe((data) => {
        //       //console.log(data.user, 'data');
        //       if (data) {
        //         this.user = data.user;
        //         this.router.navigate(['tabs', 'tab3']);
        //         console.log(this.user, 'user');
        //         const { savedLetters } = data.user;
        //         if (savedLetters) {
        //           this.savedLetters = savedLetters;
        //           console.log(this.savedLetters);
        //         }
        //       }
        //     });
        //     console.log('test');
        //   } catch (error) {}
        // } else {
        //   this.router.navigate(['/']);
        // }
    }
    ionViewDidEnter() {
        console.log('yes');
        this.userDataSubscription = this.usersService.userData$.subscribe({
            next: (data) => {
                this.user = data;
                console.log(data, 'user depuis tab1'); // Accéder aux données stockées dans le BehaviorSubject
                //this.cdr.detectChanges();
                if (data.savedLetters) {
                    this.savedLetters = data.savedLetters;
                    console.log(this.savedLetters);
                    //this.cdr.detectChanges();
                }
            },
            error: (err) => {
                console.log(err);
            },
        });
    }
    ngOnInit2() {
        if (this.token) {
            console.log('yes token');
            try {
                this.usersService.userData$.subscribe((data) => {
                    //console.log(data.user, 'data');
                    if (data) {
                        this.user = data;
                        console.log(this.user);
                        if (data.savedLetters) {
                            this.savedLetters = data.savedLetters;
                            console.log(this.savedLetters);
                            //this.cdr.detectChanges();
                        }
                    }
                });
                console.log('test');
            }
            catch (error) { }
        }
        else {
            this.router.navigate(['/']);
        }
    }
    onDelete(user, letter) {
        console.log(user, letter);
        // call service
        this.usersService
            .deleteApplication(user, letter, this.token)
            .subscribe((data) => {
            if (data.status === 'success') {
                this.router.navigate(['tabs', 'tab3']);
            }
        });
    }
    onLogout() {
        console.log(this.token);
        localStorage.removeItem('token');
        this.router.navigate(['/signup']);
    }
};
Tab3Page.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab3',
        template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 7087:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".card-historique {\n  width: 100%;\n  padding: 1rem;\n}\n\nspan {\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsV0FBQTtFQUNBLGFBQUE7QUFBRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoidGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oaXN0b3JpcXVlXG57XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuc3BhbntcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 8614:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Historique\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ng-container *ngIf=\"savedLetters?.length> 0; then content else noContent\"></ng-container>\n  <ng-template #content>\n    <ion-list *ngIf='user'>\n      <ion-item-sliding *ngFor=\"let letter of user.savedLetters, index as index\">\n        <ion-item>\n          <ion-card class='card-historique'>\n            <p>Vous avez créé une nouvelle candidature le {{letter.date}}</p>\n            <ion-label><span>Entreprise :</span> {{letter.newValue.societe}}</ion-label>\n            <ion-label><span>Lieu :</span> {{letter.newValue.adresseSociete}} - {{letter.newValue.cpVille}}</ion-label>\n            <ion-label><span>Contact :</span> {{letter.newValue.contact}}</ion-label>\n\n\n            <ion-label><span>Poste :</span> {{letter.newValue.intitule}}</ion-label>\n\n          </ion-card>\n\n        </ion-item>\n\n        <ion-item-options>\n          <ion-item-option color=\"danger\" (click)='onDelete(user, letter)'>Supprimer</ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ng-template>\n\n  <ng-template #noContent>\n\n    <ion-card>\n      <ion-card-title>Aucun historique</ion-card-title>\n      <ion-card-content>Pour créer une lettre, rendez-vous dans l'onglet Créer une lettre.</ion-card-content>\n\n    </ion-card>\n  </ng-template>\n\n\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map