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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SjthQUFNO1lBQ0wsaUNBQWlDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsNEJBQTRCLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSw0Q0FBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUNGOztZQWhIUSxpRUFBWTtZQUZaLG1EQUFNOzs7b0JBV1osb0RBQVMsU0FBQyxvREFBUTs7QUFEUixRQUFRO0lBTHBCLHdEQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixpRUFBNkI7O0tBRTlCLENBQUM7R0FDVyxRQUFRLENBd0dwQjtBQXhHb0IiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC90YWIxL3RhYjEtcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvdGFiMS90YWIxLm1vZHVsZS50cyIsIi4vc3JjL2FwcC90YWIxL3RhYjEucGFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGFiMVBhZ2UgfSBmcm9tICcuL3RhYjEucGFnZSc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBUYWIxUGFnZSxcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgVGFiMVBhZ2VSb3V0aW5nTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUYWIxUGFnZSB9IGZyb20gJy4vdGFiMS5wYWdlJztcbmltcG9ydCB7IEV4cGxvcmVDb250YWluZXJDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5tb2R1bGUnO1xuXG5pbXBvcnQgeyBUYWIxUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3RhYjEtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybVBhZ2VNb2R1bGUgfSBmcm9tICcuLi9mb3JtL2Zvcm0ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIElvbmljTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBFeHBsb3JlQ29udGFpbmVyQ29tcG9uZW50TW9kdWxlLFxuICAgIFRhYjFQYWdlUm91dGluZ01vZHVsZSxcbiAgICBGb3JtUGFnZU1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUYWIxUGFnZV1cbn0pXG5leHBvcnQgY2xhc3MgVGFiMVBhZ2VNb2R1bGUge31cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRG9DaGVjayxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJb25Nb2RhbCB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IFVzZXJzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3VzZXIvdXNlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10YWIxJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWIxLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWIxLnBhZ2Uuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWIxUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZChJb25Nb2RhbCkgbW9kYWw6IElvbk1vZGFsO1xuICBwdWJsaWMgY29uZmlybU1lc3NhZ2UhOiBzdHJpbmc7XG4gIHB1YmxpYyB1c2VyITogVXNlcjtcbiAgcHVibGljIGVycmV1ckNvcHkhOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIC8vIHVzZSBjYXBhY2l0b3Igc3RvcmFnZVxuICAgIC8vIC8vIGNoZWNrIHRva2VuXG4gICAgLy8gY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0b2tlbiwgJ3Rva2VuID8gJyk7XG4gICAgLy8gLy8gdGhpcy51c2Vyc1NlcnZpY2UucmVmcmVzaENvbGxlY3Rpb24odG9rZW4pO1xuICAgIC8vIGNvbnNvbGUubG9nKHRva2VuLCAndG9la24gZGVwdWlzIHRhYjEnKTtcbiAgICAvLyBpZiAodG9rZW4pIHtcbiAgICAvLyAgIHRyeSB7XG4gICAgLy8gICAgIHRoaXMudXNlcnNTZXJ2aWNlLmNvbGxlY3Rpb24odG9rZW4pLnN1YnNjcmliZShcbiAgICAvLyAgICAgICAoZGF0YSkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZGF0YSwgJ2RhdGEnKTtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlciwgJ3VzZXInKTtcbiAgICAvLyAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgLy8gICAgICAgICAgIHRoaXMudXNlciA9IGRhdGEudXNlcjtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXMgZGUgZGF0YScpO1xuICAgIC8vICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICAoZSkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZS5lcnJvciwgJ2VycmV1cicpO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgKTtcbiAgICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yLCAnZXJyb3InKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgIC8vIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNoZWNrIHRva2VuXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICBjb25zb2xlLmxvZyh0b2tlbiwgJ3Rva2VuID8gJyk7XG4gICAgLy8gdGhpcy51c2Vyc1NlcnZpY2UucmVmcmVzaENvbGxlY3Rpb24odG9rZW4pO1xuICAgIGNvbnNvbGUubG9nKHRva2VuLCAndG9la24gZGVwdWlzIHRhYjEnKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMudXNlcnNTZXJ2aWNlLmNvbGxlY3Rpb24odG9rZW4pLnN1YnNjcmliZShcbiAgICAgICAgICAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSwgJ2RhdGEnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlciwgJ3VzZXInKTtcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgIHRoaXMudXNlciA9IGRhdGEudXNlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLmVycm9yLCAnZXJyZXVyJyk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IsICdlcnJvcicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgfVxuICB9XG5cbiAgb25Mb2dvdXQoKSB7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnRva2VuKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zaWdudXAnXSk7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5tb2RhbC5kaXNtaXNzKG51bGwsICdjYW5jZWwnKTtcbiAgfVxuXG4gIGNvbmZpcm0oKSB7XG4gICAgLy8gcmVzZXQgZXJyZXVyQ29weVxuICAgIHRoaXMuZXJyZXVyQ29weSA9ICcnO1xuICAgIC8vIHRoaXMubW9kYWwuZGlzbWlzcyh0aGlzLm5hbWUsICdjb25maXJtJyk7XG4gICAgLy8gdsOpcmlmaWVyIHRoaXMubmFtZSA9PT0gRUZGQUNFUlxuICAgIGlmICh0aGlzLmNvbmZpcm1NZXNzYWdlID09PSAnRUZGQUNFUicpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlZmZhY8OpJyk7XG4gICAgICAvLyBhcHBlbCBhdSBzZXJ2aWNlXG4gICAgICB0aGlzLnVzZXJzU2VydmljZS5kZWxldGVVc2VyKHRoaXMudXNlcikuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgLy8gcmVmZXJtZXIgbGEgbW9kYWxcbiAgICAgICAgICB0aGlzLm1vZGFsLmRpc21pc3MoJ2NvbmZpcm0nKTtcbiAgICAgICAgICAvLyByZW1vdmUgbGUgdG9rZW5cbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zaWdudXAnXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnbm90IHRoZSBzdHJpbmcnKTtcbiAgICAgIHRoaXMuZXJyZXVyQ29weSA9ICdFcnJldXIgZGFucyBsZSBtb3QgcmVjb3Bpw6knO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrOi8vLyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOltdfQ==