"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 6851:
/*!******************************************************************!*\
  !*** ./src/app/components/cover-letter-c/cover-letter-c.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoverLetterCPage": () => (/* binding */ CoverLetterCPage)
/* harmony export */ });
/* harmony import */ var _Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _cover_letter_c_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cover-letter-c.page.html?ngResource */ 5445);
/* harmony import */ var _cover_letter_c_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cover-letter-c.page.scss?ngResource */ 3909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 7330);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _template_screenshot_template_screenshot_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../template-screenshot/template-screenshot.page */ 8225);








let CoverLetterCPage = class CoverLetterCPage {
  constructor(modalController, pdfGenerator) {
    this.modalController = modalController;
    this.pdfGenerator = pdfGenerator;
    this.today = Date.now();
  }

  ngAfterViewInit() {
    this.onGeneratePreview();
  }

  onGeneratePreview() {
    // 1 - on créé un PDF
    this.content = document.getElementById('main').innerHTML;
    console.log(this.content); // ok j'ai le contenu html
    // ici on vérifie encore le base64

    if (this.content && this.user) {
      const options = {
        documentSize: 'A4',
        type: 'base64' // landscape: 'portrait',
        // fileName: 'cover-letter.pdf',

      };
      this.pdfGenerator.fromData(this.content, options).then(base64 => {
        console.log('base64 present ou pas', base64); // ici renvoie une chaine de caractères
        //console.log(this.content); // ici content visible

        this.openPdfPreview(base64);
      }).catch(error => {
        console.log('error', error);
      });
    }
  }

  openPdfPreview(base64) {
    var _this = this;

    return (0,_Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(base64, 'depuis openPdfPreview'); // string
      // documentation
      // ici on passe à la modal le document au format base64 et le contenu HTML
      // pour générer le pdf

      const coverLetter = yield _this.createModal(_template_screenshot_template_screenshot_page__WEBPACK_IMPORTED_MODULE_4__.TemplateScreenshotPage, {
        base64,
        htmlBase: _this.content
      });
      yield coverLetter.present();
    })();
  }

  createModal(component, componentProps, cssClass) {
    var _this2 = this;

    return (0,_Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _template_screenshot_template_screenshot_page__WEBPACK_IMPORTED_MODULE_4__.TemplateScreenshotPage,
        cssClass,
        componentProps,
        backdropDismiss: true
      });
      return modal;
    })();
  }

  closeModal() {
    this.modalController.dismiss();
  }

};

CoverLetterCPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_3__.PDFGenerator
}];

CoverLetterCPage.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }]
};
CoverLetterCPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-cover-letter-c',
  template: _cover_letter_c_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_cover_letter_c_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CoverLetterCPage);


/***/ }),

/***/ 6705:
/*!****************************************************************************!*\
  !*** ./src/app/components/cover-letter-simple/cover-letter-simple.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoverLetterSimplePage": () => (/* binding */ CoverLetterSimplePage)
/* harmony export */ });
/* harmony import */ var _Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _cover_letter_simple_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cover-letter-simple.page.html?ngResource */ 8515);
/* harmony import */ var _cover_letter_simple_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cover-letter-simple.page.scss?ngResource */ 508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 7330);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _template_screenshot_template_screenshot_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../template-screenshot/template-screenshot.page */ 8225);








let CoverLetterSimplePage = class CoverLetterSimplePage {
  constructor(modalController, pdfGenerator) {
    this.modalController = modalController;
    this.pdfGenerator = pdfGenerator;
    this.today = Date.now();
  }

  ngAfterViewInit() {
    this.onGeneratePreview();
  }

  onGeneratePreview() {
    // 1 - on créé un PDF
    this.content = document.getElementById('main').innerHTML;
    console.log(this.content); // ok j'ai le contenu html
    // ici on vérifie encore le base64

    if (this.content && this.user) {
      const options = {
        documentSize: 'A4',
        type: 'base64' // landscape: 'portrait',
        // fileName: 'cover-letter.pdf',

      };
      this.pdfGenerator.fromData(this.content, options).then(base64 => {
        console.log('base64 present ou pas', base64); // ici renvoie une chaine de caractères
        //console.log(this.content); // ici content visible

        this.openPdfPreview(base64);
      }).catch(error => {
        console.log('error', error);
      });
    }
  }

  openPdfPreview(base64) {
    var _this = this;

    return (0,_Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(base64, 'depuis openPdfPreview'); // string
      // documentation
      // ici on passe à la modal le document au format base64 et le contenu HTML
      // pour générer le pdf

      const coverLetter = yield _this.createModal(_template_screenshot_template_screenshot_page__WEBPACK_IMPORTED_MODULE_4__.TemplateScreenshotPage, {
        base64,
        htmlBase: _this.content
      });
      yield coverLetter.present();
    })();
  }

  createModal(component, componentProps, cssClass) {
    var _this2 = this;

    return (0,_Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _template_screenshot_template_screenshot_page__WEBPACK_IMPORTED_MODULE_4__.TemplateScreenshotPage,
        cssClass,
        componentProps,
        backdropDismiss: true
      });
      return modal;
    })();
  }

  closeModal() {
    this.modalController.dismiss();
  }

};

CoverLetterSimplePage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_3__.PDFGenerator
}];

CoverLetterSimplePage.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }]
};
CoverLetterSimplePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-cover-letter-simple',
  template: _cover_letter_simple_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_cover_letter_simple_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CoverLetterSimplePage);


/***/ }),

/***/ 4762:
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponent": () => (/* binding */ ExploreContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _explore_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component.html?ngResource */ 959);
/* harmony import */ var _explore_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-container.component.scss?ngResource */ 1509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ExploreContainerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-explore-container',
        template: _explore_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_explore_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExploreContainerComponent);



/***/ }),

/***/ 581:
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponentModule": () => (/* binding */ ExploreContainerComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component */ 4762);






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent]
    })
], ExploreContainerComponentModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);






let UsersService = class UsersService {
  constructor(http) {
    this.http = http;
    this.urlApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlApi;
    this.userDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null); // eslint-disable-next-line @typescript-eslint/member-ordering

    this.userData$ = this.userDataSubject.asObservable();
    this.refreshCollection$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
  } // eslint-disable-next-line @typescript-eslint/member-ordering
  //token!: number;
  // eslint-disable-next-line @typescript-eslint/member-ordering


  setUserData(data) {
    this.userDataSubject.next(data);
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
    console.log(token, 'token depuis refreshcollection');
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', 'Bearer ' + token);
    this.http.get(`${this.urlApi}/api/v1/letters/user`, {
      headers
    }).subscribe(data => {
      this.refreshCollection$.next(data.user);
      const {
        user
      } = data;
      console.log(user, 'depuis refreshcollection');
      this.setUserData(user);
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
    localStorage.removeItem('token');
    this.setUserData(null);
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

/***/ 5539:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a4d897e8.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-8e692445.js */ 1559);
/* harmony import */ var _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-029a46f6.js */ 2815);
/* harmony import */ var _index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-422b6e83.js */ 6366);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;

  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }

    const target = document.elementFromPoint(x, y);

    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }

    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };

  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;

    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }

    const buttonToModify = currentTouchedButton;
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };

  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }

    const buttonToModify = currentTouchedButton;
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */

    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }

    currentTouchedButton = undefined;
  };

  return (0,_index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};



/***/ }),

/***/ 7481:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-e8b767a8.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isRTL)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = hostEl => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }

  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};



/***/ }),

/***/ 9118:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-bd02518b.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];

const startFocusVisible = rootEl => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = rootEl ? rootEl.shadowRoot : document;
  const root = rootEl ? rootEl : document.body;

  const setFocus = elements => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };

  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };

  const onKeydown = ev => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);

    if (!keyboardMode) {
      setFocus([]);
    }
  };

  const onFocusin = ev => {
    if (keyboardMode && ev.composedPath !== undefined) {
      const toFocus = ev.composedPath().filter(el => {
        // TODO(FW-2832): type
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }

        return false;
      });
      setFocus(toFocus);
    }
  };

  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };

  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);

  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };

  return {
    destroy,
    setFocus
  };
};



/***/ }),

/***/ 539:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c3305a28.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CoreDelegate),
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 9234);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
 // TODO(FW-2832): types

const attachComponent = /*#__PURE__*/function () {
  var _ref = (0,_Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (delegate, container, component, cssClasses, componentProps, inline) {
    var _a;

    if (delegate) {
      return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }

    if (!inline && typeof component !== 'string' && !(component instanceof HTMLElement)) {
      throw new Error('framework delegate is missing');
    }

    const el = typeof component === 'string' ? (_a = container.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(component) : component;

    if (cssClasses) {
      cssClasses.forEach(c => el.classList.add(c));
    }

    if (componentProps) {
      Object.assign(el, componentProps);
    }

    container.appendChild(el);
    yield new Promise(resolve => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
    return el;
  });

  return function attachComponent(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }

    element.remove();
  }

  return Promise.resolve();
};

const CoreDelegate = () => {
  let BaseComponent;
  let Reference;

  const attachViewToDom = /*#__PURE__*/function () {
    var _ref2 = (0,_Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parentElement, userComponent, userComponentProps = {}, cssClasses = []) {
      var _a, _b;

      BaseComponent = parentElement;
      /**
       * If passing in a component via the `component` props
       * we need to append it inside of our overlay component.
       */

      if (userComponent) {
        /**
         * If passing in the tag name, create
         * the element otherwise just get a reference
         * to the component.
         */
        const el = typeof userComponent === 'string' ? (_a = BaseComponent.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(userComponent) : userComponent;
        /**
         * Add any css classes passed in
         * via the cssClasses prop on the overlay.
         */

        cssClasses.forEach(c => el.classList.add(c));
        /**
         * Add any props passed in
         * via the componentProps prop on the overlay.
         */

        Object.assign(el, userComponentProps);
        /**
         * Finally, append the component
         * inside of the overlay component.
         */

        BaseComponent.appendChild(el);
        yield new Promise(resolve => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      } else if (BaseComponent.children.length > 0) {
        const root = BaseComponent.children[0];

        if (!root.classList.contains('ion-delegate-host')) {
          /**
           * If the root element is not a delegate host, it means
           * that the overlay has not been presented yet and we need
           * to create the containing element with the specified classes.
           */
          const el = (_b = BaseComponent.ownerDocument) === null || _b === void 0 ? void 0 : _b.createElement('div'); // Add a class to track if the root element was created by the delegate.

          el.classList.add('ion-delegate-host');
          cssClasses.forEach(c => el.classList.add(c)); // Move each child from the original template to the new parent element.

          el.append(...BaseComponent.children); // Append the new parent element to the original parent element.

          BaseComponent.appendChild(el);
        }
      }
      /**
       * Get the root of the app and
       * add the overlay there.
       */


      const app = document.querySelector('ion-app') || document.body;
      /**
       * Create a placeholder comment so that
       * we can return this component to where
       * it was previously.
       */

      Reference = document.createComment('ionic teleport');
      BaseComponent.parentNode.insertBefore(Reference, BaseComponent);
      app.appendChild(BaseComponent);
      return BaseComponent;
    });

    return function attachViewToDom(_x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }();

  const removeViewFromDom = () => {
    /**
     * Return component to where it was previously in the DOM.
     */
    if (BaseComponent && Reference) {
      Reference.parentNode.insertBefore(BaseComponent, Reference);
      Reference.remove();
    }

    return Promise.resolve();
  };

  return {
    attachViewToDom,
    removeViewFromDom
  };
};



/***/ }),

/***/ 2815:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-029a46f6.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const HapticEngine = {
  getEngine() {
    var _a;

    const win = window;
    return win.TapticEngine || ((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.isPluginAvailable('Haptics')) && win.Capacitor.Plugins.Haptics;
  },

  available() {
    var _a;

    const win = window;
    const engine = this.getEngine();

    if (!engine) {
      return false;
    }
    /**
     * Developers can manually import the
     * Haptics plugin in their app which will cause
     * getEngine to return the Haptics engine. However,
     * the Haptics engine will throw an error if
     * used in a web browser that does not support
     * the Vibrate API. This check avoids that error
     * if the browser does not support the Vibrate API.
     */


    if (((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.getPlatform()) === 'web') {
      return typeof navigator !== 'undefined' && navigator.vibrate !== undefined;
    }

    return true;
  },

  isCordova() {
    return !!window.TapticEngine;
  },

  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },

  impact(options) {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({
      style
    });
  },

  notification(options) {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({
      style
    });
  },

  selection() {
    this.impact({
      style: 'light'
    });
  },

  selectionStart() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },

  selectionChanged() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },

  selectionEnd() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }

};
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */

const hapticAvailable = () => {
  return HapticEngine.available();
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */


const hapticSelection = () => {
  hapticAvailable() && HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */


const hapticSelectionStart = () => {
  hapticAvailable() && HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */


const hapticSelectionChanged = () => {
  hapticAvailable() && HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */


const hapticSelectionEnd = () => {
  hapticAvailable() && HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */


const hapticImpact = options => {
  hapticAvailable() && HapticEngine.impact(options);
};



/***/ }),

/***/ 7309:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-2bcb741c.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ arrowBackSharp),
/* harmony export */   "b": () => (/* binding */ closeCircle),
/* harmony export */   "c": () => (/* binding */ chevronBack),
/* harmony export */   "d": () => (/* binding */ closeSharp),
/* harmony export */   "e": () => (/* binding */ searchSharp),
/* harmony export */   "f": () => (/* binding */ checkmarkOutline),
/* harmony export */   "g": () => (/* binding */ ellipseOutline),
/* harmony export */   "h": () => (/* binding */ caretBackSharp),
/* harmony export */   "i": () => (/* binding */ arrowDown),
/* harmony export */   "j": () => (/* binding */ reorderThreeOutline),
/* harmony export */   "k": () => (/* binding */ reorderTwoSharp),
/* harmony export */   "l": () => (/* binding */ chevronDown),
/* harmony export */   "m": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "n": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "o": () => (/* binding */ chevronForward),
/* harmony export */   "p": () => (/* binding */ caretUpSharp),
/* harmony export */   "q": () => (/* binding */ caretDownSharp),
/* harmony export */   "r": () => (/* binding */ removeOutline),
/* harmony export */   "s": () => (/* binding */ searchOutline),
/* harmony export */   "t": () => (/* binding */ close),
/* harmony export */   "u": () => (/* binding */ menuOutline),
/* harmony export */   "v": () => (/* binding */ menuSharp)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/* Ionicons v6.1.3, ES Modules */
const arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>";
const checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const close = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>";
const closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>";
const closeSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>";
const ellipseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
const menuOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const menuSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>";
const removeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderThreeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderTwoSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>";
const searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const searchSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";


/***/ }),

/***/ 4311:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-e6d1a8be.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ ION_CONTENT_ELEMENT_SELECTOR),
/* harmony export */   "a": () => (/* binding */ findIonContent),
/* harmony export */   "b": () => (/* binding */ ION_CONTENT_CLASS_SELECTOR),
/* harmony export */   "c": () => (/* binding */ scrollByPoint),
/* harmony export */   "d": () => (/* binding */ disableContentScrollY),
/* harmony export */   "f": () => (/* binding */ findClosestIonContent),
/* harmony export */   "g": () => (/* binding */ getScrollElement),
/* harmony export */   "i": () => (/* binding */ isIonContent),
/* harmony export */   "p": () => (/* binding */ printIonContentErrorMsg),
/* harmony export */   "r": () => (/* binding */ resetContentScrollY),
/* harmony export */   "s": () => (/* binding */ scrollToTop)
/* harmony export */ });
/* harmony import */ var _Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 9234);
/* harmony import */ var _index_c4b11676_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-c4b11676.js */ 9273);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const ION_CONTENT_TAG_NAME = 'ION-CONTENT';
const ION_CONTENT_ELEMENT_SELECTOR = 'ion-content';
const ION_CONTENT_CLASS_SELECTOR = '.ion-content-scroll-host';
/**
 * Selector used for implementations reliant on `<ion-content>` for scroll event changes.
 *
 * Developers should use the `.ion-content-scroll-host` selector to target the element emitting
 * scroll events. With virtual scroll implementations this will be the host element for
 * the scroll viewport.
 */

const ION_CONTENT_SELECTOR = `${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`;

const isIonContent = el => el.tagName === ION_CONTENT_TAG_NAME;
/**
 * Waits for the element host fully initialize before
 * returning the inner scroll element.
 *
 * For `ion-content` the scroll target will be the result
 * of the `getScrollElement` function.
 *
 * For custom implementations it will be the element host
 * or a selector within the host, if supplied through `scrollTarget`.
 */


const getScrollElement = /*#__PURE__*/function () {
  var _ref = (0,_Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
    if (isIonContent(el)) {
      yield new Promise(resolve => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      return el.getScrollElement();
    }

    return el;
  });

  return function getScrollElement(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Queries the element matching the selector for IonContent.
 * See ION_CONTENT_SELECTOR for the selector used.
 */


const findIonContent = el => {
  /**
   * First we try to query the custom scroll host selector in cases where
   * the implementation is using an outer `ion-content` with an inner custom
   * scroll container.
   */
  const customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);

  if (customContentHost) {
    return customContentHost;
  }

  return el.querySelector(ION_CONTENT_SELECTOR);
};
/**
 * Queries the closest element matching the selector for IonContent.
 */


const findClosestIonContent = el => {
  return el.closest(ION_CONTENT_SELECTOR);
};
/**
 * Scrolls to the top of the element. If an `ion-content` is found, it will scroll
 * using the public API `scrollToTop` with a duration.
 */
// TODO(FW-2832): type


const scrollToTop = (el, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollToTop(durationMs);
  }

  return Promise.resolve(el.scrollTo({
    top: 0,
    left: 0,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Scrolls by a specified X/Y distance in the component. If an `ion-content` is found, it will scroll
 * using the public API `scrollByPoint` with a duration.
 */


const scrollByPoint = (el, x, y, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollByPoint(x, y, durationMs);
  }

  return Promise.resolve(el.scrollBy({
    top: y,
    left: x,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within either the `ion-content` selector or the `.ion-content-scroll-host` class.
 */


const printIonContentErrorMsg = el => {
  return (0,_index_c4b11676_js__WEBPACK_IMPORTED_MODULE_2__.a)(el, ION_CONTENT_ELEMENT_SELECTOR);
};
/**
 * Several components in Ionic need to prevent scrolling
 * during a gesture (card modal, range, item sliding, etc).
 * Use this utility to account for ion-content and custom content hosts.
 */


const disableContentScrollY = contentEl => {
  if (isIonContent(contentEl)) {
    const ionContent = contentEl;
    const initialScrollY = ionContent.scrollY;
    ionContent.scrollY = false;
    /**
     * This should be passed into resetContentScrollY
     * so that we can revert ion-content's scrollY to the
     * correct state. For example, if scrollY = false
     * initially, we do not want to enable scrolling
     * when we call resetContentScrollY.
     */

    return initialScrollY;
  } else {
    contentEl.style.setProperty('overflow', 'hidden');
    return true;
  }
};

const resetContentScrollY = (contentEl, initialScrollY) => {
  if (isIonContent(contentEl)) {
    contentEl.scrollY = initialScrollY;
  } else {
    contentEl.style.removeProperty('overflow');
  }
};



/***/ }),

/***/ 512:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-282b81b8.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEYBOARD_DID_CLOSE": () => (/* binding */ KEYBOARD_DID_CLOSE),
/* harmony export */   "KEYBOARD_DID_OPEN": () => (/* binding */ KEYBOARD_DID_OPEN),
/* harmony export */   "copyVisualViewport": () => (/* binding */ copyVisualViewport),
/* harmony export */   "keyboardDidClose": () => (/* binding */ keyboardDidClose),
/* harmony export */   "keyboardDidOpen": () => (/* binding */ keyboardDidOpen),
/* harmony export */   "keyboardDidResize": () => (/* binding */ keyboardDidResize),
/* harmony export */   "resetKeyboardAssist": () => (/* binding */ resetKeyboardAssist),
/* harmony export */   "setKeyboardClose": () => (/* binding */ setKeyboardClose),
/* harmony export */   "setKeyboardOpen": () => (/* binding */ setKeyboardOpen),
/* harmony export */   "startKeyboardAssist": () => (/* binding */ startKeyboardAssist),
/* harmony export */   "trackViewportChanges": () => (/* binding */ trackViewportChanges)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const KEYBOARD_DID_OPEN = 'ionKeyboardDidShow';
const KEYBOARD_DID_CLOSE = 'ionKeyboardDidHide';
const KEYBOARD_THRESHOLD = 150; // TODO(FW-2832): types

let previousVisualViewport = {};
let currentVisualViewport = {};
let keyboardOpen = false;
/**
 * This is only used for tests
 */

const resetKeyboardAssist = () => {
  previousVisualViewport = {};
  currentVisualViewport = {};
  keyboardOpen = false;
};

const startKeyboardAssist = win => {
  startNativeListeners(win);

  if (!win.visualViewport) {
    return;
  }

  currentVisualViewport = copyVisualViewport(win.visualViewport);

  win.visualViewport.onresize = () => {
    trackViewportChanges(win);

    if (keyboardDidOpen() || keyboardDidResize(win)) {
      setKeyboardOpen(win);
    } else if (keyboardDidClose(win)) {
      setKeyboardClose(win);
    }
  };
};
/**
 * Listen for events fired by native keyboard plugin
 * in Capacitor/Cordova so devs only need to listen
 * in one place.
 */


const startNativeListeners = win => {
  win.addEventListener('keyboardDidShow', ev => setKeyboardOpen(win, ev));
  win.addEventListener('keyboardDidHide', () => setKeyboardClose(win));
};

const setKeyboardOpen = (win, ev) => {
  fireKeyboardOpenEvent(win, ev);
  keyboardOpen = true;
};

const setKeyboardClose = win => {
  fireKeyboardCloseEvent(win);
  keyboardOpen = false;
};
/**
 * Returns `true` if the `keyboardOpen` flag is not
 * set, the previous visual viewport width equal the current
 * visual viewport width, and if the scaled difference
 * of the previous visual viewport height minus the current
 * visual viewport height is greater than KEYBOARD_THRESHOLD
 *
 * We need to be able to accommodate users who have zooming
 * enabled in their browser (or have zoomed in manually) which
 * is why we take into account the current visual viewport's
 * scale value.
 */


const keyboardDidOpen = () => {
  const scaledHeightDifference = (previousVisualViewport.height - currentVisualViewport.height) * currentVisualViewport.scale;
  return !keyboardOpen && previousVisualViewport.width === currentVisualViewport.width && scaledHeightDifference > KEYBOARD_THRESHOLD;
};
/**
 * Returns `true` if the keyboard is open,
 * but the keyboard did not close
 */


const keyboardDidResize = win => {
  return keyboardOpen && !keyboardDidClose(win);
};
/**
 * Determine if the keyboard was closed
 * Returns `true` if the `keyboardOpen` flag is set and
 * the current visual viewport height equals the
 * layout viewport height.
 */


const keyboardDidClose = win => {
  return keyboardOpen && currentVisualViewport.height === win.innerHeight;
};
/**
 * Dispatch a keyboard open event
 */


const fireKeyboardOpenEvent = (win, nativeEv) => {
  const keyboardHeight = nativeEv ? nativeEv.keyboardHeight : win.innerHeight - currentVisualViewport.height;
  const ev = new CustomEvent(KEYBOARD_DID_OPEN, {
    detail: {
      keyboardHeight
    }
  });
  win.dispatchEvent(ev);
};
/**
 * Dispatch a keyboard close event
 */


const fireKeyboardCloseEvent = win => {
  const ev = new CustomEvent(KEYBOARD_DID_CLOSE);
  win.dispatchEvent(ev);
};
/**
 * Given a window object, create a copy of
 * the current visual and layout viewport states
 * while also preserving the previous visual and
 * layout viewport states
 */


const trackViewportChanges = win => {
  previousVisualViewport = Object.assign({}, currentVisualViewport);
  currentVisualViewport = copyVisualViewport(win.visualViewport);
};
/**
 * Creates a deep copy of the visual viewport
 * at a given state
 */


const copyVisualViewport = visualViewport => {
  return {
    width: Math.round(visualViewport.width),
    height: Math.round(visualViewport.height),
    offsetTop: visualViewport.offsetTop,
    offsetLeft: visualViewport.offsetLeft,
    pageTop: visualViewport.pageTop,
    pageLeft: visualViewport.pageLeft,
    scale: visualViewport.scale
  };
};



/***/ }),

/***/ 3963:
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-controller-73af62b2.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createKeyboardController)
/* harmony export */ });
/* harmony import */ var _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-33ffec25.js */ 2286);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * Creates a controller that tracks and reacts to opening or closing the keyboard.
 *
 * @internal
 * @param keyboardChangeCallback A function to call when the keyboard opens or closes.
 */

const createKeyboardController = keyboardChangeCallback => {
  let keyboardWillShowHandler;
  let keyboardWillHideHandler;
  let keyboardVisible;

  const init = () => {
    keyboardWillShowHandler = () => {
      keyboardVisible = true;
      if (keyboardChangeCallback) keyboardChangeCallback(true);
    };

    keyboardWillHideHandler = () => {
      keyboardVisible = false;
      if (keyboardChangeCallback) keyboardChangeCallback(false);
    };

    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillHide', keyboardWillHideHandler);
  };

  const destroy = () => {
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillHide', keyboardWillHideHandler);
    keyboardWillShowHandler = keyboardWillHideHandler = undefined;
  };

  const isKeyboardVisible = () => keyboardVisible;

  init();
  return {
    init,
    destroy,
    isKeyboardVisible
  };
};



/***/ }),

/***/ 3844:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-5d6b6fe7.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const spinners = {
  bubbles: {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${dur * index / total - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(angle)}px`,
          left: `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circles: {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${dur * step - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(angle)}px`,
          left: `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circular: {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  crescent: {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  dots: {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          left: `${9 - 9 * index}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  lines: {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 14,
        y2: 26,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  }
};
const SPINNERS = spinners;


/***/ }),

/***/ 5861:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/swipe-back-e35bd7d6.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSwipeBackGesture": () => (/* binding */ createSwipeBackGesture)
/* harmony export */ });
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 9234);
/* harmony import */ var _dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dir-e8b767a8.js */ 7481);
/* harmony import */ var _index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-422b6e83.js */ 6366);
/* harmony import */ var _gesture_controller_17060b7c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gesture-controller-17060b7c.js */ 6379);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
  const win = el.ownerDocument.defaultView;
  let rtl = (0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
  /**
   * Determine if a gesture is near the edge
   * of the screen. If true, then the swipe
   * to go back gesture should proceed.
   */

  const isAtEdge = detail => {
    const threshold = 50;
    const {
      startX
    } = detail;

    if (rtl) {
      return startX >= win.innerWidth - threshold;
    }

    return startX <= threshold;
  };

  const getDeltaX = detail => {
    return rtl ? -detail.deltaX : detail.deltaX;
  };

  const getVelocityX = detail => {
    return rtl ? -detail.velocityX : detail.velocityX;
  };

  const canStart = detail => {
    /**
     * The user's locale can change mid-session,
     * so we need to check text direction at
     * the beginning of every gesture.
     */
    rtl = (0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
    return isAtEdge(detail) && canStartHandler();
  };

  const onMove = detail => {
    // set the transition animation's progress
    const delta = getDeltaX(detail);
    const stepValue = delta / win.innerWidth;
    onMoveHandler(stepValue);
  };

  const onEnd = detail => {
    // the swipe back gesture has ended
    const delta = getDeltaX(detail);
    const width = win.innerWidth;
    const stepValue = delta / width;
    const velocity = getVelocityX(detail);
    const z = width / 2.0;
    const shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
    const missing = shouldComplete ? 1 - stepValue : stepValue;
    const missingDistance = missing * width;
    let realDur = 0;

    if (missingDistance > 5) {
      const dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 540);
    }

    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_0__.l)(0, stepValue, 0.9999), realDur);
  };

  return (0,_index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'goback-swipe',
    gesturePriority: 40,
    threshold: 10,
    canStart,
    onStart: onStartHandler,
    onMove,
    onEnd
  });
};



/***/ }),

/***/ 3909:
/*!*******************************************************************************!*\
  !*** ./src/app/components/cover-letter-c/cover-letter-c.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Zlci1sZXR0ZXItYy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 508:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/cover-letter-simple/cover-letter-simple.page.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Zlci1sZXR0ZXItc2ltcGxlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 1509:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

/***/ }),

/***/ 5445:
/*!*******************************************************************************!*\
  !*** ./src/app/components/cover-letter-c/cover-letter-c.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"shade\">\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\n      <ion-button slot=\"icon\">\n        <ion-icon class=\"icon\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios ion-text-capitalize\">Modèle Yellish</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-button (click)=\"closeModal()\">\n    <ion-icon class=\"icon\" name=\"arrow-back-outline\"></ion-icon>Revenir à l'écran d'accueil\n  </ion-button>\n  <div id='main'\n    style='border:none; font-size:16px; padding:10px 35px; margin: 0 auto;font-family: arial;visibility: hidden;'>\n    <div id=\"container\" style='padding: 2rem 5rem;'>\n      <header style='display: flex; align-items: center; border-top: 3px solid black;border-bottom: 3px solid black;'>\n        <div\n          style='flex:1;margin: 24px; border-right: 3px solid black; padding: 16px; background-color:white;text-align: right;'>\n          <!-- ici icône -->\n          <p>\n            <ion-icon name=\"pin\"></ion-icon> {{user.adresse}}\n          </p>\n          <p>\n            <ion-icon name=\"phone-portrait\"></ion-icon> {{user.tel}}\n          </p>\n          <p>\n            <ion-icon name=\"send\"></ion-icon> {{user.email}}\n          </p>\n        </div>\n        <div style='flex:2; font-size:16px; font-weight: 600'>\n\n          <p style='font-size:24px'>{{user.prenom}} {{user.nom}}</p>\n          <p style='padding: 6px; color: white; background-color: rgb(255, 175, 3)'>{{user?.letters[0].intitule}}</p>\n\n        </div>\n\n      </header>\n\n      <section id='contactInfos' style='text-align: right;'>\n        <p>{{user.letters[0].societe}}</p>\n        <p>{{user.letters[0].contact}}</p>\n        <p>{{user.letters[0].adresseSociete}}</p>\n        <p>{{user.letters[0].cpVille}}</p>\n      </section>\n\n      <!-- partie expert -->\n      <section id='content' *ngIf=\"user.letters[0].experience ===  'expert' \" style='text-align: justify;'>\n        <p style='padding:10px 0px; text-align: right;'>Le {{today | date:'dd/MM/yyyy'}}</p>\n        <p style='padding-bottom:10px'>Objet : candidature pour le poste de {{user.letters[0].intitule}}</p>\n        <p *ngIf='user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          {{user.letters[0].contact}},\n        </p>\n        <p *ngIf='!user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          Madame, Monsieur,\n        </p>\n        <!-- premier paragraphe -->\n        <p>\n          Je suis actuellement à la recherche d'un emploi dans votre secteur d'activité, c'est pourquoi, je me permets\n          de\n          vous écrire pour postuler au poste de {{user.letters[0].intitule}}.</p>\n        <!-- second paragraphe -->\n        <p>\n          En effet, j'ai déjà pu exercer à ce poste lors d'une précédente mission. Cette expérience a été très\n          enrichissante et\n          formatrice. Je souhaiterais vivement mettre ces compétences à profit dans votre structure. Dès le début de\n          notre collaboration, vous pourrez constater que je suis {{user.adjs[0]}}, {{user.adjs[1]}} et\n          {{user.adjs[2]}} des qualités essentielles dans ce métier. </p>\n\n        <!-- conclusion -->\n        <p>Je suis disponible pour m'entretenir avec vous, par téléphone ou en personne afin de déterminer comment je\n          pourrais contribuer au mieux au développement de votre entreprise. </p>\n        <p>Je vous remercie de l'attention que vous pourrez accorder à ma candidature,</p>\n        <p>Sincères salutations,</p>\n\n        <p style='margin:24px 0rem; font-weight:600'>{{user.prenom}} {{user.nom}}</p>\n        <div style='border-bottom: 3px solid black;'></div>\n      </section>\n\n      <!-- partie débutant -->\n      <section id='content' style='text-align: justify;' *ngIf=\"user.letters[0].experience ===  'debutant' \">\n        <p style='padding:10px 0px; text-align: right;'>Le {{today | date:'dd/MM/yyyy'}}</p>\n        <p style='padding-bottom:10px'>Objet : candidature pour le poste de {{user.letters[0].intitule}}</p>\n        <p *ngIf='user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          {{user.letters[0].contact}},\n        </p>\n        <p *ngIf='!user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          Madame, Monsieur,\n        </p>\n        <!-- premier paragraphe -->\n        <p>\n          Je suis actuellement à la recherche d'un emploi dans votre secteur d'activité, c'est pourquoi, je me permets\n          de\n          vous écrire pour postuler au poste de {{user.letters[0].intitule}}.\n        </p>\n        <p>\n          <!-- si pas expérience -->\n          <span *ngIf=\"user.gender ==='femme'\">\n            Je débute mon activité professionnelle avec beaucoup d'enthousiasme à l'idée de m'intégrer à une nouvelle\n            équipe et\n            d'acquérir de nouvelles compétences. Ma capacité d'adaptation et mon envie de bien faire les tâches\n            demandées me\n            permettront d'être opérationnelle rapidement. Je souhaiterais vivement mettre ces compétences à profit dans\n            votre\n            structure.\n          </span>\n          <span *ngIf=\"user.gender ==='homme'\">\n            Je débute mon activité professionnelle avec beaucoup d'enthousiasme à l'idée de m'intégrer à une nouvelle\n            équipe et\n            d'acquérir de nouvelles compétences. Ma capacité d'adaptation et mon envie de bien faire les tâches\n            demandées me\n            permettront d'être opérationnel rapidement. Je souhaiterais vivement mettre ces compétences à profit dans\n            votre\n            structure.\n          </span>\n        </p>\n\n        <!-- second paragraphe -->\n\n        <p>Dès le début de notre collaboration, vous pourrez constater que je suis {{user.adjs[0]}}, {{user.adjs[1]}} et\n          {{user.adjs[2]}}, des qualités essentielles dans ce métier. </p>\n        <!-- conclusion -->\n        <p>Je suis disponible pour m'entretenir avec vous, par téléphone ou en personne afin de déterminer comment je\n          pourrais contribuer au mieux au développement de votre entreprise. </p>\n        <p>Je vous remercie de l'attention que vous pourrez accorder à ma candidature,</p>\n        <p>Sincères salutations,</p>\n\n        <p style='margin:24px 0px; font-weight:600'>{{user.prenom}} {{user.nom}}</p>\n        <div style='border-bottom: 3px solid black;'></div>\n      </section>\n\n    </div>\n\n\n\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 8515:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/cover-letter-simple/cover-letter-simple.page.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"shade\">\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\n      <ion-button slot=\"icon\">\n        <ion-icon class=\"icon\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios ion-text-capitalize\">Modèle 2</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-button (click)=\"closeModal()\">\n    <ion-icon class=\"icon\" name=\"arrow-back-outline\"></ion-icon>Revenir à l'écran d'accueil\n  </ion-button>\n\n\n  <div id='main' style='font-family: arial; font-size:16px; padding:10px 35px; visibility: hidden'>\n    <div id=\"container\" style='padding: 3rem 5rem;'>\n      <header style='display: flex; text-align: left;'>\n        <div style='flex:1; background-color:white;font-size:16px;'>\n          <!-- ici icône -->\n          <p>{{user.prenom}} {{user.nom}}</p>\n          <p>\n            <ion-icon name=\"pin\"></ion-icon> {{user.adresse}}\n          </p>\n          <p>\n            <ion-icon name=\"phone-portrait\"></ion-icon> {{user.tel}}\n          </p>\n          <p>\n            <ion-icon name=\"send\"></ion-icon> {{user.email}}\n          </p>\n\n\n        </div>\n      </header>\n\n      <section id='contactInfos' style='text-align: right;'>\n        <p>{{user.letters[0].societe}}</p>\n        <p>{{user.letters[0].contact}}</p>\n        <p>{{user.letters[0].adresseSociete}}</p>\n        <p>{{user.letters[0].cpVille}}</p>\n      </section>\n\n      <!-- partie expert -->\n      <section id='content' style='text-align: justify;' *ngIf=\"user.letters[0].experience ===  'expert' \">\n        <p style='padding-bottom:35px; text-align: right;'>Le {{today | date:'dd/MM/yyyy'}}</p>\n        <p style='padding-bottom:10px'>Objet : candidature pour le poste de {{user.letters[0].intitule}}</p>\n        <p *ngIf='user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          {{user.letters[0].contact}},\n        </p>\n        <p *ngIf='!user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          Madame, Monsieur,\n        </p>\n        <!-- premier paragraphe -->\n\n        <p>\n          Je suis actuellement à la recherche d'un emploi dans votre secteur d'activité, c'est pourquoi, je me permets\n          de vous\n          écrire pour postuler au poste de {{user.letters[0].intitule}}.\n        </p>\n        <p>\n          <!-- si expérience -->\n          En effet, j'ai déjà pu exercer à ce poste lors d'une précédente mission. Cette expérience a été très\n          enrichissante\n          et\n          formatrice. Je souhaiterais vivement mettre ces compétences à profit dans votre structure.\n        </p>\n\n\n        <!-- second paragraphe -->\n        <p>Dès le début de notre collaboration, vous pourrez constater que je suis {{user.adjs[0]}}, {{user.adjs[1]}} et\n          {{user.adjs[2]}} des qualités essentielles dans ce métier. </p>\n        <!-- conclusion -->\n        <p>Je suis disponible pour m'entretenir avec vous, par téléphone ou en personne afin de déterminer comment je\n          pourrais contribuer au mieux au développement de votre entreprise. </p>\n        <p>Je vous remercie de l'attention que vous pourrez accorder à ma candidature,</p>\n        <p>Sincères salutations,</p>\n\n        <p>{{user.prenom}} {{user.nom}}</p>\n\n      </section>\n\n      <!-- partie débutant -->\n      <section id='content' style='text-align: justify;' *ngIf=\"user.letters[0].experience ===  'debutant' \">\n        <p style='padding-bottom:35px; text-align: right;'>Le {{today | date:'dd/MM/yyyy'}}</p>\n        <p style='padding-bottom:10px'>Objet : candidature pour le poste de {{user.letters[0].intitule}}</p>\n        <p *ngIf='user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          {{user.letters[0].contact}},\n        </p>\n        <p *ngIf='!user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          Madame, Monsieur,\n        </p>\n\n        <!-- premier paragraphe -->\n        <p>\n          Je suis actuellement à la recherche d'un emploi dans votre secteur d'activité, c'est pourquoi, je me permets\n          de\n          vous\n          écrire pour postuler au poste de {{user.letters[0].intitule}}.\n        </p>\n        <!-- si expérience -->\n        <p>\n          <!-- si pas expérience -->\n          <span *ngIf=\"user.gender ==='femme'\">\n            Je débute mon activité professionnelle avec beaucoup d'enthousiasme à l'idée de m'intégrer à une nouvelle\n            équipe\n            et\n            d'acquérir de nouvelles compétences. Ma capacité d'adaptation et mon envie de bien faire les tâches\n            demandées me\n            permettront d'être opérationnelle rapidement. Je souhaiterais vivement mettre ces compétences à profit dans\n            votre\n            structure.\n          </span>\n          <span *ngIf=\"user.gender ==='homme'\">\n            Je débute mon activité professionnelle avec beaucoup d'enthousiasme à l'idée de m'intégrer à une nouvelle\n            équipe\n            et\n            d'acquérir de nouvelles compétences. Ma capacité d'adaptation et mon envie de bien faire les tâches\n            demandées me\n            permettront d'être opérationnel rapidement. Je souhaiterais vivement mettre ces compétences à profit dans\n            votre\n            structure.\n          </span>\n        </p>\n\n        <!-- second paragraphe -->\n\n        <p>Dès le début de notre collaboration, vous pourrez constater que je suis {{user.adjs[0]}}, {{user.adjs[1]}} et\n          {{user.adjs[2]}}, des qualités essentielles dans ce métier. </p>\n        <!-- conclusion -->\n        <p>Je suis disponible pour m'entretenir avec vous, par téléphone ou en personne afin de déterminer comment je\n          pourrais\n          contribuer au mieux au développement de votre entreprise. </p>\n        <p>Je vous remercie de l'attention que vous pourrez accorder à ma candidature,</p>\n        <p>Sincères salutations,</p>\n\n        <p>{{user.prenom}} {{user.nom}}</p>\n\n      </section>\n    </div>\n\n\n\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 959:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>";

/***/ })

}]);
//# sourceMappingURL=common.js.map