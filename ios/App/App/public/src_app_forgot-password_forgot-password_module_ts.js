"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_forgot-password_forgot-password_module_ts"],{

/***/ 3673:
/*!*******************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageRoutingModule": () => (/* binding */ ForgotPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page */ 2327);




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ 7157:
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageModule": () => (/* binding */ ForgotPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-routing.module */ 3673);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page */ 2327);







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage],
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ 2327:
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPage": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page.html?ngResource */ 6997);
/* harmony import */ var _forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.scss?ngResource */ 4341);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ 4961);






let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(usersService, fb) {
        this.usersService = usersService;
        this.fb = fb;
    }
    ngOnInit() {
        this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email],
        });
    }
    onSubmit() {
        this.errorMessage = '';
        this.resetSuccess = '';
        console.log(this.form.value);
        const value = this.form.value;
        console.log(value.email);
        const valueEmail = value.email;
        console.log(valueEmail);
        //console.log(typeof this.email);
        // appeler le service
        this.usersService.forgotPassword(valueEmail).subscribe((data) => {
            console.log(data);
            this.resetSuccess =
                'Un e-mail de réinitialisation a été envoyé à cette adresse';
        }, (error) => {
            console.log(error);
            this.errorMessage = 'Pas de compte associé à cet e-mail';
        });
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
ForgotPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-forgot-password',
        template: _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotPasswordPage);



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

  deleteUser(user) {
    const {
      _id
    } = user;
    console.log(_id);
    return this.http.delete(`${this.urlApi}/api/v1/letters/${_id}`);
  }

};

UsersService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}];

UsersService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], UsersService);


/***/ }),

/***/ 4341:
/*!**********************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".error {\n  border: 1px solid red;\n  padding: 15px;\n  margin: 10px;\n}\n\n.success {\n  border: 1px solid green;\n  padding: 15px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uc3VjY2VzcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4iXX0= */";

/***/ }),

/***/ 6997:
/*!**********************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>Mot de passe oublié</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]='form' (ngSubmit)=\"onSubmit()\">\n  <ion-item>\n    <ion-label position=\"floating\">E-mail</ion-label>\n    <ion-input\n    formControlName='email'\n    name=\"email\"\n    type='email'>\n  </ion-input>\n    <div class=\"error\" *ngIf=\"form.controls['email'].invalid && form.controls['email'].touched\">E-mail invalide</div>\n  </ion-item>\n  <div class='error' *ngIf='errorMessage'>{{errorMessage}}</div>\n  <div class='success' *ngIf='resetSuccess'>{{resetSuccess}}</div>\n\n    <ion-button expand='full' color='warning' type='submit'>Recevoir un e-mail pour réinitialiser le mot de passe</ion-button>\n  </form>\n\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Retour à l'accueil</ion-card-title>\n            <ion-card-subtitle>Identifiez-vous</ion-card-subtitle>\n            <ion-button color='tertiary' [routerLink]=\"['/login']\">Je m'identifie</ion-button>\n          </ion-card-header>\n\n\n        </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9mb3Jnb3QtcGFzc3dvcmRfZm9yZ290LXBhc3N3b3JkX21vZHVsZV90cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDYztBQUVLO0FBRTVELE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUscUVBQWtCO0tBQzlCO0NBQ0YsQ0FBQztJQU1XLCtCQUErQixTQUEvQiwrQkFBK0I7Q0FBRztBQUFsQywrQkFBK0I7SUFKM0MsdURBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLGtFQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sRUFBRSxDQUFDLHlEQUFZLENBQUM7S0FDeEIsQ0FBQztHQUNXLCtCQUErQixDQUFHO0FBQUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJIO0FBQ007QUFDbUI7QUFFckI7QUFFc0M7QUFFdkI7SUFZL0Msd0JBQXdCLFNBQXhCLHdCQUF3QjtDQUVwQztBQUZZLHdCQUF3QjtJQVZwQyx1REFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AseURBQVk7WUFDWix1REFBVztZQUNYLHVEQUFXO1lBQ1gsNEZBQStCO1lBQy9CLCtEQUFtQjtTQUNwQjtRQUNELFlBQVksRUFBRSxDQUFDLHFFQUFrQixDQUFDO0tBQ25DLENBQUM7R0FDVyx3QkFBd0IsQ0FFcEM7QUFGb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCYTtBQUNrQjtBQUNYO0lBTzVDLGtCQUFrQixTQUFsQixrQkFBa0I7SUFJN0IsWUFBb0IsWUFBMEIsRUFBVSxFQUFlO1FBQW5ELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtJQUFHLENBQUM7SUFFM0UsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDeEIsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLDREQUFn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QjVCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZMkIsR0FBWjtJQUVBLE9BQU8sS0FBS2hDLElBQUwsQ0FBVU0sSUFBVixDQUNMLEdBQUcsS0FBS0wsTUFBTSxtQ0FEVCxFQUVMK0IsR0FGSyxDQUFQO0VBSUQ7O0VBRURFLFVBQVUsQ0FBQy9CLElBQUQsRUFBVztJQUNuQixNQUFNO01BQUVnQztJQUFGLElBQVVoQyxJQUFoQjtJQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWThCLEdBQVo7SUFFQSxPQUFPLEtBQUtuQyxJQUFMLENBQVVvQyxNQUFWLENBQXVCLEdBQUcsS0FBS25DLE1BQU0sbUJBQW1Ca0MsR0FBRyxFQUEzRCxDQUFQO0VBQ0Q7O0FBN0tzQjs7O1FBVmhCM0MsNERBQVVBOzs7QUFVTk0sWUFBWSxzREFIeEJKLHlEQUFVLENBQUM7RUFDVjJDLFVBQVUsRUFBRTtBQURGLENBQUQsQ0FHYyxHQUFadkMsWUFBWSxDQUFaIiwic291cmNlcyI6WyIuL3NyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC1yb3V0aW5nLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2UudHMiLCIuL3NyYy9hcHAvc2VydmljZXMvdXNlcnMuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBGb3Jnb3RQYXNzd29yZFBhZ2UgfSBmcm9tICcuL2ZvcmdvdC1wYXNzd29yZC5wYWdlJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IEZvcmdvdFBhc3N3b3JkUGFnZVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRQYWdlUm91dGluZ01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7IEZvcmdvdFBhc3N3b3JkUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2ZvcmdvdC1wYXNzd29yZC1yb3V0aW5nLm1vZHVsZSc7XG5cbmltcG9ydCB7IEZvcmdvdFBhc3N3b3JkUGFnZSB9IGZyb20gJy4vZm9yZ290LXBhc3N3b3JkLnBhZ2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIEZvcmdvdFBhc3N3b3JkUGFnZVJvdXRpbmdNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGb3Jnb3RQYXNzd29yZFBhZ2VdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZFBhZ2VNb2R1bGUge1xuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFVzZXJzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZm9yZ290LXBhc3N3b3JkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZvcmdvdC1wYXNzd29yZC5wYWdlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGVycm9yTWVzc2FnZSE6IHN0cmluZztcbiAgcmVzZXRTdWNjZXNzITogc3RyaW5nO1xuICBmb3JtITogRm9ybUdyb3VwO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuZW1haWxdLFxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICB0aGlzLnJlc2V0U3VjY2VzcyA9ICcnO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmZvcm0udmFsdWU7XG4gICAgY29uc29sZS5sb2codmFsdWUuZW1haWwpO1xuICAgIGNvbnN0IHZhbHVlRW1haWwgPSB2YWx1ZS5lbWFpbDtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZUVtYWlsKTtcbiAgICAvL2NvbnNvbGUubG9nKHR5cGVvZiB0aGlzLmVtYWlsKTtcbiAgICAvLyBhcHBlbGVyIGxlIHNlcnZpY2VcbiAgICB0aGlzLnVzZXJzU2VydmljZS5mb3Jnb3RQYXNzd29yZCh2YWx1ZUVtYWlsKS5zdWJzY3JpYmUoXG4gICAgICAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgdGhpcy5yZXNldFN1Y2Nlc3MgPVxuICAgICAgICAgICdVbiBlLW1haWwgZGUgcsOpaW5pdGlhbGlzYXRpb24gYSDDqXTDqSBlbnZvecOpIMOgIGNldHRlIGFkcmVzc2UnO1xuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ1BhcyBkZSBjb21wdGUgYXNzb2Npw6kgw6AgY2V0IGUtbWFpbCc7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vdXNlci91c2VyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJzU2VydmljZSB7XG4gIHByaXZhdGUgdXJsQXBpID0gZW52aXJvbm1lbnQudXJsQXBpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgLy90b2tlbiE6IG51bWJlcjtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgcHJpdmF0ZSByZWZyZXNoQ29sbGVjdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KFxuICAgICcnXG4gICk7XG5cbiAgLy8gYXR0ZW50aW9uIHNhbnMgbGUgdHlwYWdlLCBvbiBuZSByw6ljdXDDqHJlIHBhcyBsYSB2YWxldXIgZGFucyBsZSBzdWJzY3JpYmUgISEhIVxuICBvblNpZ25VcCh1c2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZyh1c2VyLCAndXNlcicpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPihgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnNgLCB1c2VyKTtcbiAgfVxuXG4gIG9uTG9naW4odXNlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy8gY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAvLyBsZXQgaGVhZGVyc19vYmplY3QgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoXG4gICAgLy8gICAnQXV0aG9yaXphdGlvbicsXG4gICAgLy8gICAnQmVhcmVyICcgKyB0b2tlblxuICAgIC8vICk7XG4gICAgY29uc29sZS5sb2codXNlciwgJ3VzZXInKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4oYCR7dGhpcy51cmxBcGl9L2FwaS92MS9sZXR0ZXJzL2xvZ2luYCwgdXNlcik7XG4gICAgLy8gKS5waXBlKFxuICAgIC8vICAgY2F0Y2hFcnJvcihhc3luYyAoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgIC8vICk7XG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KFxuXG4gICAgLy8gKVxuICB9XG5cbiAgLy8gamUgY29tbWVudGUgY2V0dGUgZm9uY3Rpb24gcG91ciBkZXMgdGVzdHNcbiAgLy8gZ2V0VXNlcih0b2tlbik6IE9ic2VydmFibGU8YW55PiB7XG4gIC8vICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gIC8vICAgICAuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXG4gIC8vICAgICAuc2V0KCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpXG4gIC8vICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuXG4gIC8vICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdjEvbGV0dGVycy91c2VyJywge1xuICAvLyAgICAgaGVhZGVycyxcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIGdldFVzZXIodG9rZW4pIHtcbiAgLy8gICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgLy8gICAgIC5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgLy8gICAgIC5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgLy8gICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0b2tlbik7XG4gIC8vICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAvLyAgIHRoaXMucmVmcmVzaENvbGxlY3Rpb24odG9rZW4sIGhlYWRlcnMpO1xuICAvLyAgIHJldHVybiB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uJDtcbiAgLy8gfVxuXG4gIHJlZnJlc2hDb2xsZWN0aW9uKHRva2VuKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnZGVwdWlzIHJlZnJlc2hjb2xsZWN0aW9uJyk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgICAuc2V0KCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpXG4gICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuXG4gICAgdGhpcy5odHRwXG4gICAgICAuZ2V0KGAke3RoaXMudXJsQXBpfS9hcGkvdjEvbGV0dGVycy91c2VyYCwge1xuICAgICAgICBoZWFkZXJzLFxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoQ29sbGVjdGlvbiQubmV4dChkYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSwgJ2RlcHVpcyByZWZyZXNoY29sbGVjdGlvbicpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgY29sbGVjdGlvbih0b2tlbikge1xuICAgIGNvbnNvbGUubG9nKHRva2VuLCAndG9la24gZGVwdWlzIGNvbGxlY3Rpb24nKTtcbiAgICB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uKHRva2VuKTtcbiAgICByZXR1cm4gdGhpcy5yZWZyZXNoQ29sbGVjdGlvbiQ7XG4gIH1cblxuICAvLyBqZSBjb21tZW50IGNldHRlIGZvbmN0aW9uIHBvdXIgdGVzdGVyIGF2ZWMgbGUgYmVoYXZpb3IgY2hhdWRcbiAgdXBkYXRlVXNlcih1c2VyLCB0b2tlbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvdXNlcmAsIHVzZXIpLnBpcGUoXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uKHRva2VuKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vIHJlZnJlc2hDb2xsZWN0aW9uKGRhdGEpOiB2b2lkIHtcbiAgLy8gICBjb25zb2xlLmxvZygnZGVwdWlzIHJlZnJlc2hjb2xsZWN0aW9uJywgZGF0YSk7XG4gIC8vICAgcmV0dXJuIHRoaXMucmVmcmVzaENvbGxlY3Rpb24kLm5leHQoZGF0YSk7XG4gIC8vIH1cblxuICAvLyB0ZW50YXRpdmUgYXZlYyByZWZyZXNoIGNvbGxlY3Rpb25cbiAgLy8gdXBkYXRlVXNlcih1c2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgLy8gICByZXR1cm4gdGhpcy5odHRwXG4gIC8vICAgICAucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdjEvbGV0dGVycy91c2VyJywgdXNlcilcbiAgLy8gICAgIC5waXBlKFxuICAvLyAgICAgICB0YXAoKCkgPT4ge1xuICAvLyAgICAgICAgIHRoaXMucmVmcmVzaENvbGxlY3Rpb24odGhpcy50b2tlbik7XG4gIC8vICAgICAgIH0pXG4gIC8vICAgICApO1xuICAvLyB9XG5cbiAgLy8gc2F2ZUluZm9zKGluZm9zKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAvLyAgIGNvbnNvbGUubG9nKGluZm9zLCAnZGVwdWlzJylcbiAgLy8gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS92MS9sZXR0ZXJzL2NyZWF0ZS1hcHBsaWNhdGlvbicsIGluZm9zKTtcbiAgLy8gfVxuICBjcmVhdGVBcHBsaWNhdGlvbih1c2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZyh1c2VyLCAnZGVwdWlzJyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChcbiAgICAgIGAke3RoaXMudXJsQXBpfS9hcGkvdjEvbGV0dGVycy9jcmVhdGUtYXBwbGljYXRpb25gLFxuICAgICAgdXNlclxuICAgICk7XG4gIH1cblxuICBzYXZlZEFwcGxpY2F0aW9uKHVzZXIsIG5ld1ZhbHVlLCB0b2tlbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy9jb25zb2xlLmxvZygnZGF0YSBkZXB1aXMgc2F2ZWQgYXBwbGljYXRpb24nKTtcblxuICAgIGNvbnN0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9KTtcbiAgICBkYXRhLnVzZXIgPSB1c2VyO1xuICAgIGRhdGEubmV3VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wYXRjaChgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvc2F2ZWQtYXBwbGljYXRpb25gLCBkYXRhKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoQ29sbGVjdGlvbih0b2tlbik7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgZGVsZXRlQXBwbGljYXRpb24odXNlciwgbGV0dGVyLCB0b2tlbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30pO1xuICAgIGRhdGEudXNlciA9IHVzZXI7XG4gICAgZGF0YS50b1JlbW92ZSA9IGxldHRlcjtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucGF0Y2goYCR7dGhpcy51cmxBcGl9L2FwaS92MS9sZXR0ZXJzL2RlbGV0ZS1hcHBsaWNhdGlvbmAsIGRhdGEpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hDb2xsZWN0aW9uKHRva2VuKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBmb3Jnb3RQYXNzd29yZChlbWFpbCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5sb2coZW1haWwsICdkZXB1aXMgc2VydmljZScpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvZm9yZ290LXBhc3N3b3JkYCwge1xuICAgICAgZW1haWwsXG4gICAgfSk7XG4gIH1cblxuICByZXNldFBhc3N3b3JkKG9iaik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5sb2coJ2RlcHVpcyBzZXJ2aWNlJywgb2JqKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvcmVzZXQtcGFzc3dvcmQvYCwgb2JqKTtcbiAgfVxuXG4gIHNhdmVOZXdQYXNzd29yZChvYmopOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnNvbGUubG9nKG9iaik7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICBgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvc2F2ZS1uZXctcGFzc3dvcmRgLFxuICAgICAgb2JqXG4gICAgKTtcbiAgfVxuXG4gIGRlbGV0ZVVzZXIodXNlcjogVXNlcik6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIGNvbnN0IHsgX2lkIH0gPSB1c2VyO1xuICAgIGNvbnNvbGUubG9nKF9pZCk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxVc2VyPihgJHt0aGlzLnVybEFwaX0vYXBpL3YxL2xldHRlcnMvJHtfaWR9YCk7XG4gIH1cbiAgLy8gZGVsZXRlVXNlcih1c2VyOiBVc2VyKSB7XG4gIC8vICAgY29uc29sZS5sb2codXNlcik7XG4gIC8vIH1cbn1cbiJdLCJuYW1lcyI6WyJIdHRwQ2xpZW50IiwiSHR0cEhlYWRlcnMiLCJJbmplY3RhYmxlIiwiQmVoYXZpb3JTdWJqZWN0IiwidGFwIiwiZW52aXJvbm1lbnQiLCJVc2Vyc1NlcnZpY2UiLCJjb25zdHJ1Y3RvciIsImh0dHAiLCJ1cmxBcGkiLCJvblNpZ25VcCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsIm9uTG9naW4iLCJyZWZyZXNoQ29sbGVjdGlvbiIsInRva2VuIiwiaGVhZGVycyIsInNldCIsImdldCIsInN1YnNjcmliZSIsImRhdGEiLCJyZWZyZXNoQ29sbGVjdGlvbiQiLCJuZXh0IiwiY29sbGVjdGlvbiIsInVwZGF0ZVVzZXIiLCJwYXRjaCIsInBpcGUiLCJjcmVhdGVBcHBsaWNhdGlvbiIsInNhdmVkQXBwbGljYXRpb24iLCJuZXdWYWx1ZSIsIk9iamVjdCIsImFzc2lnbiIsImRlbGV0ZUFwcGxpY2F0aW9uIiwibGV0dGVyIiwidG9SZW1vdmUiLCJmb3Jnb3RQYXNzd29yZCIsImVtYWlsIiwicmVzZXRQYXNzd29yZCIsIm9iaiIsInNhdmVOZXdQYXNzd29yZCIsImRlbGV0ZVVzZXIiLCJfaWQiLCJkZWxldGUiLCJwcm92aWRlZEluIl0sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrOi8vLyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOltdfQ==