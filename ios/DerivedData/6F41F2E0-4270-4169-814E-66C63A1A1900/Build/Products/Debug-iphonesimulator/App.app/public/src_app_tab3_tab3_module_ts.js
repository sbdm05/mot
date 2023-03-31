"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

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

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ 4961);






let Tab3Page = class Tab3Page {
    constructor(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        // check token
        this.token = localStorage.getItem('token');
        if (this.token) {
            try {
                this.usersService.collection(this.token).subscribe((data) => {
                    //console.log(data.user, 'data');
                    if (data) {
                        this.user = data.user;
                        console.log(this.user, 'user');
                        const { savedLetters } = data.user;
                        if (savedLetters) {
                            this.savedLetters = savedLetters;
                            console.log(this.savedLetters);
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
        // console.log(user, letter, index);
        // call service
        this.usersService
            .deleteApplication(user, letter, this.token)
            .subscribe((data) => console.log(data));
    }
    onLogout() {
        console.log(this.token);
        localStorage.removeItem('token');
        this.router.navigate(['/signup']);
    }
};
Tab3Page.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"tertiary\">\n    <ion-title >\n      Gérer mes candidatures\n    </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <!-- <ion-header collapse=\"condense\">\n        <ion-toolbar>\n            <ion-title size=\"large\">Historique</ion-title>\n        </ion-toolbar>\n    </ion-header> -->\n\n\n    <ng-container *ngIf=\"savedLetters?.length> 0; then content else noContent\"></ng-container>\n    <ng-template #content>\n      <ion-list *ngIf='user'>\n          <ion-item-sliding *ngFor=\"let letter of user.savedLetters, index as index\">\n              <ion-item>\n                  <ion-label>{{letter.newValue.societe}}</ion-label>\n                  <ion-label>{{letter.newValue.intitule}}</ion-label>\n\n\n                  <p>{{letter.date}}</p>\n              </ion-item>\n\n              <ion-item-options>\n                  <ion-item-option color=\"danger\" (click)='onDelete(user, letter)'>Supprimer</ion-item-option>\n              </ion-item-options>\n          </ion-item-sliding>\n      </ion-list>\n    </ng-template>\n\n    <ng-template #noContent>\n\n      <ion-card>\n        <ion-card-title>Aucun historique</ion-card-title>\n        <ion-card-content>Pour créer une lettre, rendez-vous dans l'onglet Créer une lettre.</ion-card-content>\n\n      </ion-card>\n    </ng-template>\n\n\n\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n\n        <ion-button expand=\"block\" (click)=' onLogout() '>Me déconnecter</ion-button>\n    </ion-toolbar>\n\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTTtRQUNuQixvQ0FBb0M7UUFDcEMsZUFBZTtRQUNmLElBQUksQ0FBQyxZQUFZO2FBQ2QsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQzNDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNGOztZQWpEUSxpRUFBWTtZQURaLG1EQUFNOztBQVNGLFFBQVE7SUFMcEIsd0RBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGlFQUE2Qjs7S0FFOUIsQ0FBQztHQUNXLFFBQVEsQ0F5Q3BCO0FBekNvQiIsInNvdXJjZXMiOlsiLi9zcmMvYXBwL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2UudHMiLCIuL3NyYy9hcHAvdGFiMy90YWIzLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3RhYjMvdGFiMy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvdGFiMy90YWIzLnBhZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vdXNlci91c2VyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJzU2VydmljZSB7XG4gIHByaXZhdGUgdXJsQXBpID0gZW52aXJvbm1lbnQudXJsQXBpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgLy90b2tlbiE6IG51bWJlcjtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgcHJpdmF0ZSByZWZyZXNoQ29sbGVjdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KFxuICAgICcnXG4gICk7XG5cbiAgLy8gYXR0ZW50aW9uIHNhbnMgbGUgdHlwYWdlLCBvbiBuZSByw6ljdXDDqHJlIHBhcyBsYSB2YWxldXIgZGFucyBsZSBzdWJzY3JpYmUgISEhIVxuICBvblNpZ25VcCh1c2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZyh1c2VyLCAndXNlcicpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPihgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnNgLCB1c2VyKTtcbiAgfVxuXG4gIG9uTG9naW4odXNlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy8gY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAvLyBsZXQgaGVhZGVyc19vYmplY3QgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoXG4gICAgLy8gICAnQXV0aG9yaXphdGlvbicsXG4gICAgLy8gICAnQmVhcmVyICcgKyB0b2tlblxuICAgIC8vICk7XG4gICAgY29uc29sZS5sb2codXNlciwgJ3VzZXInKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4oYCR7dGhpcy51cmxBcGl9L2FwaS92MS9sZXR0ZXJzL2xvZ2luYCwgdXNlcik7XG4gICAgLy8gKS5waXBlKFxuICAgIC8vICAgY2F0Y2hFcnJvcihhc3luYyAoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgIC8vICk7XG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KFxuXG4gICAgLy8gKVxuICB9XG5cbiAgLy8gamUgY29tbWVudGUgY2V0dGUgZm9uY3Rpb24gcG91ciBkZXMgdGVzdHNcbiAgLy8gZ2V0VXNlcih0b2tlbik6IE9ic2VydmFibGU8YW55PiB7XG4gIC8vICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gIC8vICAgICAuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXG4gIC8vICAgICAuc2V0KCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpXG4gIC8vICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuXG4gIC8vICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdjEvbGV0dGVycy91c2VyJywge1xuICAvLyAgICAgaGVhZGVycyxcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIGdldFVzZXIodG9rZW4pIHtcbiAgLy8gICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgLy8gICAgIC5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgLy8gICAgIC5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgLy8gICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0b2tlbik7XG4gIC8vICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAvLyAgIHRoaXMucmVmcmVzaENvbGxlY3Rpb24odG9rZW4sIGhlYWRlcnMpO1xuICAvLyAgIHJldHVybiB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uJDtcbiAgLy8gfVxuXG4gIHJlZnJlc2hDb2xsZWN0aW9uKHRva2VuKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnZGVwdWlzIHJlZnJlc2hjb2xsZWN0aW9uJyk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgICAuc2V0KCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpXG4gICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuXG4gICAgdGhpcy5odHRwXG4gICAgICAuZ2V0KGAke3RoaXMudXJsQXBpfS9hcGkvdjEvbGV0dGVycy91c2VyYCwge1xuICAgICAgICBoZWFkZXJzLFxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoQ29sbGVjdGlvbiQubmV4dChkYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSwgJ2RlcHVpcyByZWZyZXNoY29sbGVjdGlvbicpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgY29sbGVjdGlvbih0b2tlbikge1xuICAgIGNvbnNvbGUubG9nKHRva2VuLCAndG9la24gZGVwdWlzIGNvbGxlY3Rpb24nKTtcbiAgICB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uKHRva2VuKTtcbiAgICByZXR1cm4gdGhpcy5yZWZyZXNoQ29sbGVjdGlvbiQ7XG4gIH1cblxuICAvLyBqZSBjb21tZW50IGNldHRlIGZvbmN0aW9uIHBvdXIgdGVzdGVyIGF2ZWMgbGUgYmVoYXZpb3IgY2hhdWRcbiAgdXBkYXRlVXNlcih1c2VyLCB0b2tlbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvdXNlcmAsIHVzZXIpLnBpcGUoXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uKHRva2VuKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vIHJlZnJlc2hDb2xsZWN0aW9uKGRhdGEpOiB2b2lkIHtcbiAgLy8gICBjb25zb2xlLmxvZygnZGVwdWlzIHJlZnJlc2hjb2xsZWN0aW9uJywgZGF0YSk7XG4gIC8vICAgcmV0dXJuIHRoaXMucmVmcmVzaENvbGxlY3Rpb24kLm5leHQoZGF0YSk7XG4gIC8vIH1cblxuICAvLyB0ZW50YXRpdmUgYXZlYyByZWZyZXNoIGNvbGxlY3Rpb25cbiAgLy8gdXBkYXRlVXNlcih1c2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgLy8gICByZXR1cm4gdGhpcy5odHRwXG4gIC8vICAgICAucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdjEvbGV0dGVycy91c2VyJywgdXNlcilcbiAgLy8gICAgIC5waXBlKFxuICAvLyAgICAgICB0YXAoKCkgPT4ge1xuICAvLyAgICAgICAgIHRoaXMucmVmcmVzaENvbGxlY3Rpb24odGhpcy50b2tlbik7XG4gIC8vICAgICAgIH0pXG4gIC8vICAgICApO1xuICAvLyB9XG5cbiAgLy8gc2F2ZUluZm9zKGluZm9zKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAvLyAgIGNvbnNvbGUubG9nKGluZm9zLCAnZGVwdWlzJylcbiAgLy8gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS92MS9sZXR0ZXJzL2NyZWF0ZS1hcHBsaWNhdGlvbicsIGluZm9zKTtcbiAgLy8gfVxuICBjcmVhdGVBcHBsaWNhdGlvbih1c2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZyh1c2VyLCAnZGVwdWlzJyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChcbiAgICAgIGAke3RoaXMudXJsQXBpfS9hcGkvdjEvbGV0dGVycy9jcmVhdGUtYXBwbGljYXRpb25gLFxuICAgICAgdXNlclxuICAgICk7XG4gIH1cblxuICBzYXZlZEFwcGxpY2F0aW9uKHVzZXIsIG5ld1ZhbHVlLCB0b2tlbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy9jb25zb2xlLmxvZygnZGF0YSBkZXB1aXMgc2F2ZWQgYXBwbGljYXRpb24nKTtcblxuICAgIGNvbnN0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9KTtcbiAgICBkYXRhLnVzZXIgPSB1c2VyO1xuICAgIGRhdGEubmV3VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wYXRjaChgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvc2F2ZWQtYXBwbGljYXRpb25gLCBkYXRhKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoQ29sbGVjdGlvbih0b2tlbik7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgZGVsZXRlQXBwbGljYXRpb24odXNlciwgbGV0dGVyLCB0b2tlbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30pO1xuICAgIGRhdGEudXNlciA9IHVzZXI7XG4gICAgZGF0YS50b1JlbW92ZSA9IGxldHRlcjtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucGF0Y2goYCR7dGhpcy51cmxBcGl9L2FwaS92MS9sZXR0ZXJzL2RlbGV0ZS1hcHBsaWNhdGlvbmAsIGRhdGEpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uKHRva2VuKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBmb3Jnb3RQYXNzd29yZChlbWFpbCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5sb2coZW1haWwsICdkZXB1aXMgc2VydmljZScpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvZm9yZ290LXBhc3N3b3JkYCwge1xuICAgICAgZW1haWwsXG4gICAgfSk7XG4gIH1cblxuICByZXNldFBhc3N3b3JkKG9iaik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5sb2coJ2RlcHVpcyBzZXJ2aWNlJywgb2JqKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvcmVzZXQtcGFzc3dvcmQvYCwgb2JqKTtcbiAgfVxuXG4gIHNhdmVOZXdQYXNzd29yZChvYmopOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnNvbGUubG9nKG9iaik7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICBgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvc2F2ZS1uZXctcGFzc3dvcmRgLFxuICAgICAgb2JqXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRhYjNQYWdlIH0gZnJvbSAnLi90YWIzLnBhZ2UnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogVGFiM1BhZ2UsXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFRhYjNQYWdlUm91dGluZ01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRhYjNQYWdlIH0gZnJvbSAnLi90YWIzLnBhZ2UnO1xuaW1wb3J0IHsgRXhwbG9yZUNvbnRhaW5lckNvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4uL2V4cGxvcmUtY29udGFpbmVyL2V4cGxvcmUtY29udGFpbmVyLm1vZHVsZSc7XG5cbmltcG9ydCB7IFRhYjNQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vdGFiMy1yb3V0aW5nLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBJb25pY01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgRXhwbG9yZUNvbnRhaW5lckNvbXBvbmVudE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW3sgcGF0aDogJycsIGNvbXBvbmVudDogVGFiM1BhZ2UgfV0pLFxuICAgIFRhYjNQYWdlUm91dGluZ01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVGFiM1BhZ2VdXG59KVxuZXhwb3J0IGNsYXNzIFRhYjNQYWdlTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uQ2hhbmdlcywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXNlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vdXNlci91c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXRhYjMnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYjMucGFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYjMucGFnZS5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRhYjNQYWdlIHtcbiAgcHVibGljIHVzZXIhOiBVc2VyO1xuICBwdWJsaWMgc2F2ZWRMZXR0ZXJzITogW107XG4gIHRva2VuITogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgLy8gY2hlY2sgdG9rZW5cbiAgICB0aGlzLnRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgaWYgKHRoaXMudG9rZW4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMudXNlcnNTZXJ2aWNlLmNvbGxlY3Rpb24odGhpcy50b2tlbikuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLnVzZXIsICdkYXRhJyk7XG4gICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMudXNlciA9IGRhdGEudXNlcjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlciwgJ3VzZXInKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2F2ZWRMZXR0ZXJzIH0gPSBkYXRhLnVzZXI7XG4gICAgICAgICAgICBpZiAoc2F2ZWRMZXR0ZXJzKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2F2ZWRMZXR0ZXJzID0gc2F2ZWRMZXR0ZXJzO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNhdmVkTGV0dGVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgfVxuICB9XG5cbiAgb25EZWxldGUodXNlciwgbGV0dGVyKSB7XG4gICAgLy8gY29uc29sZS5sb2codXNlciwgbGV0dGVyLCBpbmRleCk7XG4gICAgLy8gY2FsbCBzZXJ2aWNlXG4gICAgdGhpcy51c2Vyc1NlcnZpY2VcbiAgICAgIC5kZWxldGVBcHBsaWNhdGlvbih1c2VyLCBsZXR0ZXIsIHRoaXMudG9rZW4pXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7XG4gIH1cblxuICBvbkxvZ291dCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRva2VuKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zaWdudXAnXSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJIdHRwQ2xpZW50IiwiSHR0cEhlYWRlcnMiLCJJbmplY3RhYmxlIiwiQmVoYXZpb3JTdWJqZWN0IiwidGFwIiwiZW52aXJvbm1lbnQiLCJVc2Vyc1NlcnZpY2UiLCJjb25zdHJ1Y3RvciIsImh0dHAiLCJ1cmxBcGkiLCJvblNpZ25VcCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsIm9uTG9naW4iLCJyZWZyZXNoQ29sbGVjdGlvbiIsInRva2VuIiwiaGVhZGVycyIsInNldCIsImdldCIsInN1YnNjcmliZSIsImRhdGEiLCJyZWZyZXNoQ29sbGVjdGlvbiQiLCJuZXh0IiwiY29sbGVjdGlvbiIsInVwZGF0ZVVzZXIiLCJwYXRjaCIsInBpcGUiLCJjcmVhdGVBcHBsaWNhdGlvbiIsInNhdmVkQXBwbGljYXRpb24iLCJuZXdWYWx1ZSIsIk9iamVjdCIsImFzc2lnbiIsImRlbGV0ZUFwcGxpY2F0aW9uIiwibGV0dGVyIiwidG9SZW1vdmUiLCJmb3Jnb3RQYXNzd29yZCIsImVtYWlsIiwicmVzZXRQYXNzd29yZCIsIm9iaiIsInNhdmVOZXdQYXNzd29yZCIsInByb3ZpZGVkSW4iXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6W119