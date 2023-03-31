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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
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
    ngOnDestroy() {
        this.user = new _user_user__WEBPACK_IMPORTED_MODULE_3__.User();
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\" style='display:flex'>\n    <ion-img  style='flex:1' slot=\"start\" src='../../assets/logos/logo.png'></ion-img>\n    <ion-title style='flex:1' slot=\"end\">\n      Mes infos\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" *ngIf='user'>\n  <!-- <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Mes infos</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <!-- Vérifier le token -->\n\n    <app-form [user]='user' *ngIf='user'></app-form>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDN0I7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksNENBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjs7WUF6RVEsaUVBQVk7WUFEWixtREFBTTs7QUFTRixRQUFRO0lBTHBCLHdEQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixpRUFBNkI7O0tBRTlCLENBQUM7R0FDVyxRQUFRLENBaUVwQjtBQWpFb0IiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC90YWIxL3RhYjEtcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvdGFiMS90YWIxLm1vZHVsZS50cyIsIi4vc3JjL2FwcC90YWIxL3RhYjEucGFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGFiMVBhZ2UgfSBmcm9tICcuL3RhYjEucGFnZSc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBUYWIxUGFnZSxcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgVGFiMVBhZ2VSb3V0aW5nTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUYWIxUGFnZSB9IGZyb20gJy4vdGFiMS5wYWdlJztcbmltcG9ydCB7IEV4cGxvcmVDb250YWluZXJDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5tb2R1bGUnO1xuXG5pbXBvcnQgeyBUYWIxUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3RhYjEtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybVBhZ2VNb2R1bGUgfSBmcm9tICcuLi9mb3JtL2Zvcm0ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIElvbmljTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBFeHBsb3JlQ29udGFpbmVyQ29tcG9uZW50TW9kdWxlLFxuICAgIFRhYjFQYWdlUm91dGluZ01vZHVsZSxcbiAgICBGb3JtUGFnZU1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUYWIxUGFnZV1cbn0pXG5leHBvcnQgY2xhc3MgVGFiMVBhZ2VNb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRG9DaGVjaywgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVzZXJzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3VzZXIvdXNlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10YWIxJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWIxLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWIxLnBhZ2Uuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWIxUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHVzZXIhOiBVc2VyO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgLy8gdXNlIGNhcGFjaXRvciBzdG9yYWdlXG4gICAgLy8gLy8gY2hlY2sgdG9rZW5cbiAgICAvLyBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRva2VuLCAndG9rZW4gPyAnKTtcbiAgICAvLyAvLyB0aGlzLnVzZXJzU2VydmljZS5yZWZyZXNoQ29sbGVjdGlvbih0b2tlbik7XG4gICAgLy8gY29uc29sZS5sb2codG9rZW4sICd0b2VrbiBkZXB1aXMgdGFiMScpO1xuICAgIC8vIGlmICh0b2tlbikge1xuICAgIC8vICAgdHJ5IHtcbiAgICAvLyAgICAgdGhpcy51c2Vyc1NlcnZpY2UuY29sbGVjdGlvbih0b2tlbikuc3Vic2NyaWJlKFxuICAgIC8vICAgICAgIChkYXRhKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhLCAnZGF0YScpO1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyLCAndXNlcicpO1xuICAgIC8vICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAvLyAgICAgICAgICAgdGhpcy51c2VyID0gZGF0YS51c2VyO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgY29uc29sZS5sb2coJ3BhcyBkZSBkYXRhJyk7XG4gICAgLy8gICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIChlKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlLmVycm9yLCAnZXJyZXVyJyk7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICApO1xuICAgIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IsICdlcnJvcicpO1xuICAgIC8vICAgfVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgLy8gfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY2hlY2sgdG9rZW5cbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgIGNvbnNvbGUubG9nKHRva2VuLCAndG9rZW4gPyAnKTtcbiAgICAvLyB0aGlzLnVzZXJzU2VydmljZS5yZWZyZXNoQ29sbGVjdGlvbih0b2tlbik7XG4gICAgY29uc29sZS5sb2codG9rZW4sICd0b2VrbiBkZXB1aXMgdGFiMScpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy51c2Vyc1NlcnZpY2UuY29sbGVjdGlvbih0b2tlbikuc3Vic2NyaWJlKFxuICAgICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLCAnZGF0YScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyLCAndXNlcicpO1xuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgdGhpcy51c2VyID0gZGF0YS51c2VyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuZXJyb3IsICdlcnJldXInKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgJ2Vycm9yJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbXX0=