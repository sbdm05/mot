"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reset-password_reset-password_module_ts"],{

/***/ 4746:
/*!*****************************************************************!*\
  !*** ./src/app/reset-password/reset-password-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPageRoutingModule": () => (/* binding */ ResetPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.page */ 8946);




const routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPage
    }
];
let ResetPasswordPageRoutingModule = class ResetPasswordPageRoutingModule {
};
ResetPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResetPasswordPageRoutingModule);



/***/ }),

/***/ 4371:
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPageModule": () => (/* binding */ ResetPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password-routing.module */ 4746);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page */ 8946);







let ResetPasswordPageModule = class ResetPasswordPageModule {
};
ResetPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        ],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordPage],
    })
], ResetPasswordPageModule);



/***/ }),

/***/ 8946:
/*!*******************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPage": () => (/* binding */ ResetPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reset_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.page.html?ngResource */ 7324);
/* harmony import */ var _reset_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page.scss?ngResource */ 8979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ 4961);






let ResetPasswordPage = class ResetPasswordPage {
    constructor(
    //déclencher l'api reset-password
    usersService, route) {
        this.usersService = usersService;
        this.route = route;
        this.errorForm = false;
        // extraire les params
        this.route.params.subscribe((params) => {
            this.id = params.id;
            this.token = params.token;
            this.verifyToken();
        });
    }
    ngOnInit() { }
    // rôle
    verifyToken() {
        // appel au service reset-password
        const obj = { id: this.id, token: this.token };
        this.usersService.resetPassword({ obj }).subscribe((data) => {
            this.user = data.user;
            console.log(this.user);
        });
    }
    onSubmit() {
        this.errorForm = false;
        const temp = this.newPwd.trim();
        console.log(temp.length);
        // vérification
        if (temp.length <= 6) {
            this.errorForm = true;
            return;
            // Erreur UI
            // afficher message d'erreur
        }
        else if (!this.user) {
            console.log('pas de user');
        }
        else {
            this.errorForm = false;
            // création d'un nouvel objet
            const obj = {
                user: this.user,
                newPwd: temp,
            };
            console.log(obj, 'infos à envoyer à saveNewPassword');
            // appel au service update-user
            this.usersService.saveNewPassword(obj).subscribe((data) => {
                console.log(data);
            });
        }
    }
};
ResetPasswordPage.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ResetPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-reset-password',
        template: _reset_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reset_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResetPasswordPage);

/*
   `${this.urlApi}/api/v1/letters/save-new-password`,
      obj

*/


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

/***/ 8979:
/*!********************************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".error {\n  border: 1px solid red;\n  padding: 15px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 7324:
/*!********************************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n        <ion-img slot=\"start\" src='../../assets/logos/logo.png'></ion-img>\n        <ion-title slot=\"end\">\n          Créer nouveau mot de passe\n        </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)='onSubmit()'>\n    <label>Choisissez un nouveau mot de passe</label>\n    <input [(ngModel)]='newPwd' type='password' name='password'>\n    <button type='submit'>Valider</button>\n    <div *ngIf='errorForm' class='error'>Le mot de passe doit contenir au moins 7 caractères</div>\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9yZXNldC1wYXNzd29yZF9yZXNldC1wYXNzd29yZF9tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2M7QUFFRztBQUUxRCxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLG1FQUFpQjtLQUM3QjtDQUNGLENBQUM7SUFNVyw4QkFBOEIsU0FBOUIsOEJBQThCO0NBQUc7QUFBakMsOEJBQThCO0lBSjFDLHVEQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxrRUFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxPQUFPLEVBQUUsQ0FBQyx5REFBWSxDQUFDO0tBQ3hCLENBQUM7R0FDVyw4QkFBOEIsQ0FBRztBQUFIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRjtBQUNNO0FBQ0Y7QUFFQTtBQUVvQztBQUV2QjtJQVk3Qyx1QkFBdUIsU0FBdkIsdUJBQXVCO0NBQUc7QUFBMUIsdUJBQXVCO0lBVm5DLHVEQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx5REFBWTtZQUNaLHVEQUFXO1lBQ1gsdURBQVc7WUFDWCwwRkFBOEI7WUFDOUIsdURBQVc7U0FDWjtRQUNELFlBQVksRUFBRSxDQUFDLG1FQUFpQixDQUFDO0tBQ2xDLENBQUM7R0FDVyx1QkFBdUIsQ0FBRztBQUFIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQmM7QUFDRDtBQUNRO0lBUTVDLGlCQUFpQixTQUFqQixpQkFBaUI7SUFPNUI7SUFDRSxpQ0FBaUM7SUFDekIsWUFBMEIsRUFDMUIsS0FBcUI7UUFEckIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFML0IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQU9oQixzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7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QUksQ0FBQ2MsUUFBTCxHQUFnQkQsTUFBaEI7SUFDQSxPQUFPLEtBQUszQixJQUFMLENBQ0ptQixLQURJLENBQ0UsR0FBRyxLQUFLbEIsTUFBTSxvQ0FEaEIsRUFDc0RhLElBRHRELEVBRUpNLElBRkksQ0FHSHhCLG1EQUFHLENBQUMsTUFBSztNQUNQLEtBQUtZLGlCQUFMLENBQXVCQyxLQUF2QjtJQUNELENBRkUsQ0FIQSxDQUFQO0VBT0Q7O0VBRURvQixjQUFjLENBQUNDLEtBQUQsRUFBTTtJQUNsQjFCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZeUIsS0FBWixFQUFtQixnQkFBbkI7SUFDQSxPQUFPLEtBQUs5QixJQUFMLENBQVVNLElBQVYsQ0FBZSxHQUFHLEtBQUtMLE1BQU0saUNBQTdCLEVBQWdFO01BQ3JFNkI7SUFEcUUsQ0FBaEUsQ0FBUDtFQUdEOztFQUVEQyxhQUFhLENBQUNDLEdBQUQsRUFBSTtJQUNmNUIsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEIyQixHQUE5QjtJQUVBLE9BQU8sS0FBS2hDLElBQUwsQ0FBVU0sSUFBVixDQUFlLEdBQUcsS0FBS0wsTUFBTSxpQ0FBN0IsRUFBZ0UrQixHQUFoRSxDQUFQO0VBQ0Q7O0VBRURDLGVBQWUsQ0FBQ0QsR0FBRCxFQUFJO0lBQ2pCNUIsT0FBTyxDQUFDQyxHQUFSLENBQVkyQixHQUFaO0lBRUEsT0FBTyxLQUFLaEMsSUFBTCxDQUFVTSxJQUFWLENBQ0wsR0FBRyxLQUFLTCxNQUFNLG1DQURULEVBRUwrQixHQUZLLENBQVA7RUFJRDs7QUF0S3NCOzs7UUFWaEJ4Qyw0REFBVUE7OztBQVVOTSxZQUFZLHNEQUh4QkoseURBQVUsQ0FBQztFQUNWd0MsVUFBVSxFQUFFO0FBREYsQ0FBRCxDQUdjLEdBQVpwQyxZQUFZLENBQVoiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC1yb3V0aW5nLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQucGFnZS50cyIsIi4vc3JjL2FwcC9zZXJ2aWNlcy91c2Vycy5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRQYWdlIH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC5wYWdlJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IFJlc2V0UGFzc3dvcmRQYWdlXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkUGFnZVJvdXRpbmdNb2R1bGUge31cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3Jlc2V0LXBhc3N3b3JkLXJvdXRpbmcubW9kdWxlJztcblxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZFBhZ2UgfSBmcm9tICcuL3Jlc2V0LXBhc3N3b3JkLnBhZ2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIFJlc2V0UGFzc3dvcmRQYWdlUm91dGluZ01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUmVzZXRQYXNzd29yZFBhZ2VdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkUGFnZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVzZXJzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3VzZXIvdXNlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yZXNldC1wYXNzd29yZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXNldC1wYXNzd29yZC5wYWdlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXNldC1wYXNzd29yZC5wYWdlLnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZFBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBpZCE6IG51bWJlcjtcbiAgdG9rZW4hOiBudW1iZXI7XG4gIG5ld1B3ZCE6IHN0cmluZztcbiAgdXNlciE6IFVzZXI7XG4gIGVycm9yRm9ybSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vZMOpY2xlbmNoZXIgbCdhcGkgcmVzZXQtcGFzc3dvcmRcbiAgICBwcml2YXRlIHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkge1xuICAgIC8vIGV4dHJhaXJlIGxlcyBwYXJhbXNcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5pZCA9IHBhcmFtcy5pZDtcbiAgICAgIHRoaXMudG9rZW4gPSBwYXJhbXMudG9rZW47XG5cbiAgICAgIHRoaXMudmVyaWZ5VG9rZW4oKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge31cblxuICAvLyByw7RsZVxuICB2ZXJpZnlUb2tlbigpIHtcbiAgICAvLyBhcHBlbCBhdSBzZXJ2aWNlIHJlc2V0LXBhc3N3b3JkXG4gICAgY29uc3Qgb2JqID0geyBpZDogdGhpcy5pZCwgdG9rZW46IHRoaXMudG9rZW4gfTtcbiAgICB0aGlzLnVzZXJzU2VydmljZS5yZXNldFBhc3N3b3JkKHsgb2JqIH0pLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgdGhpcy51c2VyID0gZGF0YS51c2VyO1xuICAgICAgY29uc29sZS5sb2codGhpcy51c2VyKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIHRoaXMuZXJyb3JGb3JtID0gZmFsc2U7XG4gICAgY29uc3QgdGVtcCA9IHRoaXMubmV3UHdkLnRyaW0oKTtcbiAgICBjb25zb2xlLmxvZyh0ZW1wLmxlbmd0aCk7XG5cbiAgICAvLyB2w6lyaWZpY2F0aW9uXG4gICAgaWYgKHRlbXAubGVuZ3RoIDw9IDYpIHtcbiAgICAgIHRoaXMuZXJyb3JGb3JtID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICAgIC8vIEVycmV1ciBVSVxuICAgICAgLy8gYWZmaWNoZXIgbWVzc2FnZSBkJ2VycmV1clxuICAgIH0gZWxzZSBpZiAoIXRoaXMudXNlcikge1xuICAgICAgY29uc29sZS5sb2coJ3BhcyBkZSB1c2VyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJyb3JGb3JtID0gZmFsc2U7XG4gICAgICAvLyBjcsOpYXRpb24gZCd1biBub3V2ZWwgb2JqZXRcbiAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgdXNlcjogdGhpcy51c2VyLFxuICAgICAgICBuZXdQd2Q6IHRlbXAsXG4gICAgICB9O1xuICAgICAgY29uc29sZS5sb2cob2JqLCAnaW5mb3Mgw6AgZW52b3llciDDoCBzYXZlTmV3UGFzc3dvcmQnKTtcbiAgICAgIC8vIGFwcGVsIGF1IHNlcnZpY2UgdXBkYXRlLXVzZXJcbiAgICAgIHRoaXMudXNlcnNTZXJ2aWNlLnNhdmVOZXdQYXNzd29yZChvYmopLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5cbi8qXG4gICBgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvc2F2ZS1uZXctcGFzc3dvcmRgLFxuICAgICAgb2JqXG5cbiovXG4iLCJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi91c2VyL3VzZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlcnNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSB1cmxBcGkgPSBlbnZpcm9ubWVudC51cmxBcGk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xuICAvL3Rva2VuITogbnVtYmVyO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xuICBwcml2YXRlIHJlZnJlc2hDb2xsZWN0aW9uJDogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oXG4gICAgJydcbiAgKTtcblxuICAvLyBhdHRlbnRpb24gc2FucyBsZSB0eXBhZ2UsIG9uIG5lIHLDqWN1cMOocmUgcGFzIGxhIHZhbGV1ciBkYW5zIGxlIHN1YnNjcmliZSAhISEhXG4gIG9uU2lnblVwKHVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnNvbGUubG9nKHVzZXIsICd1c2VyJyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KGAke3RoaXMudXJsQXBpfS9hcGkvdjEvbGV0dGVyc2AsIHVzZXIpO1xuICB9XG5cbiAgb25Mb2dpbih1c2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgIC8vIGxldCBoZWFkZXJzX29iamVjdCA9IG5ldyBIdHRwSGVhZGVycygpLnNldChcbiAgICAvLyAgICdBdXRob3JpemF0aW9uJyxcbiAgICAvLyAgICdCZWFyZXIgJyArIHRva2VuXG4gICAgLy8gKTtcbiAgICBjb25zb2xlLmxvZyh1c2VyLCAndXNlcicpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPihgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvbG9naW5gLCB1c2VyKTtcbiAgICAvLyApLnBpcGUoXG4gICAgLy8gICBjYXRjaEVycm9yKGFzeW5jIChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgLy8gKTtcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4oXG5cbiAgICAvLyApXG4gIH1cblxuICAvLyBqZSBjb21tZW50ZSBjZXR0ZSBmb25jdGlvbiBwb3VyIGRlcyB0ZXN0c1xuICAvLyBnZXRVc2VyKHRva2VuKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgLy8gICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgLy8gICAgIC5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgLy8gICAgIC5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgLy8gICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0b2tlbik7XG5cbiAgLy8gICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS92MS9sZXR0ZXJzL3VzZXInLCB7XG4gIC8vICAgICBoZWFkZXJzLFxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgLy8gZ2V0VXNlcih0b2tlbikge1xuICAvLyAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAvLyAgICAgLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAvLyAgICAgLnNldCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKVxuICAvLyAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRva2VuKTtcbiAgLy8gICB0aGlzLnRva2VuID0gdG9rZW47XG4gIC8vICAgdGhpcy5yZWZyZXNoQ29sbGVjdGlvbih0b2tlbiwgaGVhZGVycyk7XG4gIC8vICAgcmV0dXJuIHRoaXMucmVmcmVzaENvbGxlY3Rpb24kO1xuICAvLyB9XG5cbiAgcmVmcmVzaENvbGxlY3Rpb24odG9rZW4pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdkZXB1aXMgcmVmcmVzaGNvbGxlY3Rpb24nKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgICAgIC5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0b2tlbik7XG5cbiAgICB0aGlzLmh0dHBcbiAgICAgIC5nZXQoYCR7dGhpcy51cmxBcGl9L2FwaS92MS9sZXR0ZXJzL3VzZXJgLCB7XG4gICAgICAgIGhlYWRlcnMsXG4gICAgICB9KVxuICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uJC5uZXh0KGRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLCAnZGVwdWlzIHJlZnJlc2hjb2xsZWN0aW9uJyk7XG4gICAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xuICBjb2xsZWN0aW9uKHRva2VuKSB7XG4gICAgY29uc29sZS5sb2codG9rZW4sICd0b2VrbiBkZXB1aXMgY29sbGVjdGlvbicpO1xuICAgIHRoaXMucmVmcmVzaENvbGxlY3Rpb24odG9rZW4pO1xuICAgIHJldHVybiB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uJDtcbiAgfVxuXG4gIC8vIGplIGNvbW1lbnQgY2V0dGUgZm9uY3Rpb24gcG91ciB0ZXN0ZXIgYXZlYyBsZSBiZWhhdmlvciBjaGF1ZFxuICB1cGRhdGVVc2VyKHVzZXIsIHRva2VuKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKGAke3RoaXMudXJsQXBpfS9hcGkvdjEvbGV0dGVycy91c2VyYCwgdXNlcikucGlwZShcbiAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVmcmVzaENvbGxlY3Rpb24odG9rZW4pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gcmVmcmVzaENvbGxlY3Rpb24oZGF0YSk6IHZvaWQge1xuICAvLyAgIGNvbnNvbGUubG9nKCdkZXB1aXMgcmVmcmVzaGNvbGxlY3Rpb24nLCBkYXRhKTtcbiAgLy8gICByZXR1cm4gdGhpcy5yZWZyZXNoQ29sbGVjdGlvbiQubmV4dChkYXRhKTtcbiAgLy8gfVxuXG4gIC8vIHRlbnRhdGl2ZSBhdmVjIHJlZnJlc2ggY29sbGVjdGlvblxuICAvLyB1cGRhdGVVc2VyKHVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAvLyAgIHJldHVybiB0aGlzLmh0dHBcbiAgLy8gICAgIC5wYXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS92MS9sZXR0ZXJzL3VzZXInLCB1c2VyKVxuICAvLyAgICAgLnBpcGUoXG4gIC8vICAgICAgIHRhcCgoKSA9PiB7XG4gIC8vICAgICAgICAgdGhpcy5yZWZyZXNoQ29sbGVjdGlvbih0aGlzLnRva2VuKTtcbiAgLy8gICAgICAgfSlcbiAgLy8gICAgICk7XG4gIC8vIH1cblxuICAvLyBzYXZlSW5mb3MoaW5mb3MpOiBPYnNlcnZhYmxlPGFueT57XG4gIC8vICAgY29uc29sZS5sb2coaW5mb3MsICdkZXB1aXMnKVxuICAvLyAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3YxL2xldHRlcnMvY3JlYXRlLWFwcGxpY2F0aW9uJywgaW5mb3MpO1xuICAvLyB9XG4gIGNyZWF0ZUFwcGxpY2F0aW9uKHVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnNvbGUubG9nKHVzZXIsICdkZXB1aXMnKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKFxuICAgICAgYCR7dGhpcy51cmxBcGl9L2FwaS92MS9sZXR0ZXJzL2NyZWF0ZS1hcHBsaWNhdGlvbmAsXG4gICAgICB1c2VyXG4gICAgKTtcbiAgfVxuXG4gIHNhdmVkQXBwbGljYXRpb24odXNlciwgbmV3VmFsdWUsIHRva2VuKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvL2NvbnNvbGUubG9nKCdkYXRhIGRlcHVpcyBzYXZlZCBhcHBsaWNhdGlvbicpO1xuXG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30pO1xuICAgIGRhdGEudXNlciA9IHVzZXI7XG4gICAgZGF0YS5uZXdWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBhdGNoKGAke3RoaXMudXJsQXBpfS9hcGkvdjEvbGV0dGVycy9zYXZlZC1hcHBsaWNhdGlvbmAsIGRhdGEpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uKHRva2VuKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBkZWxldGVBcHBsaWNhdGlvbih1c2VyLCBsZXR0ZXIsIHRva2VuKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSk7XG4gICAgZGF0YS51c2VyID0gdXNlcjtcbiAgICBkYXRhLnRvUmVtb3ZlID0gbGV0dGVyO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wYXRjaChgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvZGVsZXRlLWFwcGxpY2F0aW9uYCwgZGF0YSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVmcmVzaENvbGxlY3Rpb24odG9rZW4pO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIGZvcmdvdFBhc3N3b3JkKGVtYWlsKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZyhlbWFpbCwgJ2RlcHVpcyBzZXJ2aWNlJyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJsQXBpfS9hcGkvdjEvbGV0dGVycy9mb3Jnb3QtcGFzc3dvcmRgLCB7XG4gICAgICBlbWFpbCxcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0UGFzc3dvcmQob2JqKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZygnZGVwdWlzIHNlcnZpY2UnLCBvYmopO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJsQXBpfS9hcGkvdjEvbGV0dGVycy9yZXNldC1wYXNzd29yZC9gLCBvYmopO1xuICB9XG5cbiAgc2F2ZU5ld1Bhc3N3b3JkKG9iaik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5sb2cob2JqKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgIGAke3RoaXMudXJsQXBpfS9hcGkvdjEvbGV0dGVycy9zYXZlLW5ldy1wYXNzd29yZGAsXG4gICAgICBvYmpcbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSHR0cENsaWVudCIsIkh0dHBIZWFkZXJzIiwiSW5qZWN0YWJsZSIsIkJlaGF2aW9yU3ViamVjdCIsInRhcCIsImVudmlyb25tZW50IiwiVXNlcnNTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJodHRwIiwidXJsQXBpIiwib25TaWduVXAiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJvbkxvZ2luIiwicmVmcmVzaENvbGxlY3Rpb24iLCJ0b2tlbiIsImhlYWRlcnMiLCJzZXQiLCJnZXQiLCJzdWJzY3JpYmUiLCJkYXRhIiwicmVmcmVzaENvbGxlY3Rpb24kIiwibmV4dCIsImNvbGxlY3Rpb24iLCJ1cGRhdGVVc2VyIiwicGF0Y2giLCJwaXBlIiwiY3JlYXRlQXBwbGljYXRpb24iLCJzYXZlZEFwcGxpY2F0aW9uIiwibmV3VmFsdWUiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWxldGVBcHBsaWNhdGlvbiIsImxldHRlciIsInRvUmVtb3ZlIiwiZm9yZ290UGFzc3dvcmQiLCJlbWFpbCIsInJlc2V0UGFzc3dvcmQiLCJvYmoiLCJzYXZlTmV3UGFzc3dvcmQiLCJwcm92aWRlZEluIl0sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrOi8vLyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOltdfQ==