"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

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

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var _Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 1597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _components_cover_letter_c_cover_letter_c_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cover-letter-c/cover-letter-c.page */ 6851);
/* harmony import */ var _components_cover_letter_premium1_cover_letter_premium1_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/cover-letter-premium1/cover-letter-premium1.page */ 6783);
/* harmony import */ var _components_cover_letter_simple_cover_letter_simple_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/cover-letter-simple/cover-letter-simple.page */ 6705);
/* harmony import */ var _components_cover_letter_cover_letter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/cover-letter/cover-letter.component */ 3030);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/users.service */ 4961);
/* harmony import */ var _services_modal_state_modal_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/modal-state/modal-state.service */ 4397);
/* harmony import */ var _components_cover_letter_premium2_cover_letter_premium2_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/cover-letter-premium2/cover-letter-premium2.page */ 6102);
/* harmony import */ var _components_cover_letter_premium3_cover_letter_premium3_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/cover-letter-premium3/cover-letter-premium3.page */ 9645);
/* harmony import */ var _components_cover_letter_premium4_cover_letter_premium4_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/cover-letter-premium4/cover-letter-premium4.page */ 5339);

















let Tab2Page = class Tab2Page {
  constructor(usersService, fb, modalCtrl, router, modalStateService, renderer, elementRef) {
    this.usersService = usersService;
    this.fb = fb;
    this.modalCtrl = modalCtrl;
    this.router = router;
    this.modalStateService = modalStateService;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.isAccordionExpanded = true;
    this.colorBtn = 'success';
    this.textBtn = 'Enregistrer'; // souscrire à l'observable()

    this.modalStateService.modalstate$.subscribe({
      next: data => {
        console.log(data);
        this.closeModal(); //this.router.navigate(['/tabs/tab2']);
      }
    }); // check token

    this.token = localStorage.getItem('token'); //console.log(token, 'token');
    // 1 - je vérifie l'identite du user

    if (this.token) {
      try {
        //console.log('test');
        // ici je commente this.usersService.getUser(token).subscribe((data) => { et je remplace avec refreshCollecton
        this.usersService.collection(this.token).subscribe(data => {
          //console.log(data.user, 'data');
          const {
            user
          } = data;
          this.user = user; //console.log(this.user, 'depuis tab2');

          this.form = this.fb.group({
            intitule: [this.user?.letters[0]?.intitule || '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            experience: [this.user?.letters[0]?.experience || '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            societe: [this.user?.letters[0]?.societe || '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            contact: [this.user?.letters[0]?.contact || 'Madame'],
            adresseSociete: [this.user?.letters[0]?.adresseSociete || '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            cpVille: [this.user?.letters[0]?.cpVille || '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]
          });
        });
      } catch (error) {}
    } else {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {}

  ngOnChanges() {}

  changeAccordionClasses() {
    const firstAccordion = this.elementRef.nativeElement.querySelector('#first');
    const secondAccordion = this.elementRef.nativeElement.querySelector('#second'); // Supprimer la classe accordion-expanded et ajouter accordion-collapsed au premier accordéon

    this.renderer.removeClass(firstAccordion, 'accordion-expanded');
    this.renderer.addClass(firstAccordion, 'accordion-collapsing');
    this.renderer.addClass(firstAccordion, 'accordion-collapsed');
    this.renderer.addClass(firstAccordion, 'accordion-previous'); // Supprimer la classe accordion-collapsed et ajouter accordion-expanded au deuxième accordéon

    this.renderer.removeClass(secondAccordion, 'accordion-collapsed');
    this.renderer.addClass(secondAccordion, 'accordion-expanded');
  }

  saveInfos() {
    console.log(this.form.value); // const updatedUser = { ...this.form.value, ...this.user };
    //console.log(this.user);

    this.user.letters[0] = this.form.value;
    console.log(this.user, 'final user'); // call service

    this.usersService.createApplication(this.user).subscribe(data => {
      this.colorBtn = 'warning';
      setTimeout(() => {
        this.colorBtn = 'success'; // ici je veux remove la classe accordion-expanded à l'element avec id first
        // ici je veux ajouter la classe accordion-expanded à l'element avec id second
      }, 1000);
    });
  }

  onSaved() {
    // console.log(this.user);
    // call service
    this.usersService.savedApplication(this.user, this.form.value, this.token).subscribe(data => {
      console.log(data);
      this.colorBtn = 'warning';
      this.textBtn = 'Enregistrement en cours';
      setTimeout(() => {
        this.colorBtn = 'success';
        this.textBtn = 'Enregistrer';
        this.changeAccordionClasses();
      }, 1000);
    });
  }

  openModal(letterName) {
    var _this = this;

    return (0,_Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let componentType;
      console.log(_this.user);
      const user = _this.user;
      console.log(user, 'infos');

      switch (letterName) {
        case 'coverLetterComponent':
          componentType = _components_cover_letter_cover_letter_component__WEBPACK_IMPORTED_MODULE_6__.CoverLetterComponent;
          break;

        case 'coverLetterSimplePage':
          componentType = _components_cover_letter_simple_cover_letter_simple_page__WEBPACK_IMPORTED_MODULE_5__.CoverLetterSimplePage;
          break;

        case 'coverLetterCPage':
          componentType = _components_cover_letter_c_cover_letter_c_page__WEBPACK_IMPORTED_MODULE_3__.CoverLetterCPage;
          break;

        case 'coverLetterPremiumBubble':
          componentType = _components_cover_letter_premium1_cover_letter_premium1_page__WEBPACK_IMPORTED_MODULE_4__.CoverLetterPremium1Page;
          break;

        case 'coverLetterPremiumWaves1':
          componentType = _components_cover_letter_premium2_cover_letter_premium2_page__WEBPACK_IMPORTED_MODULE_9__.CoverLetterPremium2Page;
          break;

        case 'coverLetterPremiumWaves2':
          componentType = _components_cover_letter_premium3_cover_letter_premium3_page__WEBPACK_IMPORTED_MODULE_10__.CoverLetterPremium3Page;
          break;

        case 'coverLetterPremiumPicGrey':
          componentType = _components_cover_letter_premium4_cover_letter_premium4_page__WEBPACK_IMPORTED_MODULE_11__.CoverLetterPremium4Page;
          break;
        // Add more cases for other component types as needed

        default:
          console.error('Unknown component type:', letterName);
          return;
      } // attention l'objet envoyé (ici user) doit correspondre à l'objet dans @Input()


      const coverLetter = yield _this.createModal(componentType, {
        user
      });
      yield coverLetter.present(); // Store the modal instance

      _this.modalInstance = coverLetter;
    })();
  } // async createModal(
  //   component,
  //   componentProps?,
  //   cssClass?
  // ): Promise<HTMLIonModalElement> {
  //   const modal = await this.modalCtrl.create({
  //     component,
  //     cssClass,
  //     componentProps,
  //     backdropDismiss: true,
  //   });
  //   return modal;
  // }


  createModal(component, componentProps, cssClass) {
    var _this2 = this;

    return (0,_Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component,
        cssClass,
        componentProps,
        backdropDismiss: true
      });
      console.log(componentProps); // exists

      yield modal.present(); // Wait for the modal to be displayed before taking a screenshot
      //await new Promise((resolve) => setTimeout(resolve, 500)); // Adjust the delay as needed
      // Get the modal content by its class or ID
      //const modalContent = document.querySelector('#main') as HTMLElement; // Adjust the selector as needed
      // Take a screenshot of the modal content using html2canvas
      // const canvas = await html2canvas(modalContent);
      // console.log(canvas);
      // const imageDataUrl = canvas.toDataURL('image/jpeg');
      // console.log(imageDataUrl);
      // const imageModal = await this.modalCtrl.create({
      //   component: TemplateScreenshotPage, // Replace YourImageComponent with the component that will display the image
      //   componentProps: {
      //     imageDataUrl,
      //   },
      // });
      //await modal.dismiss();
      //await imageModal.present();
      //return imageModal;

      return modal;
    })();
  }

  closeModal() {
    var _this3 = this;

    return (0,_Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.modalInstance) {
        yield _this3.modalInstance.dismiss();
        _this3.modalInstance = null; // Reset modal instance after dismissal
      }
    })();
  }

};

Tab2Page.ctorParameters = () => [{
  type: _services_users_service__WEBPACK_IMPORTED_MODULE_7__.UsersService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
}, {
  type: _services_modal_state_modal_state_service__WEBPACK_IMPORTED_MODULE_8__.ModalStateService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Renderer2
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ElementRef
}];

Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: 'app-tab2',
  template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab2Page);


/***/ }),

/***/ 1597:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-label.sc-ion-label-md-h.sc-ion-label-md-s.md.in-item-color.hydrated {\n  padding: 2rem 0rem;\n}\n\nion-label {\n  overflow: hidden !important;\n  white-space: normal !important;\n  text-overflow: ellipsis !important;\n  line-height: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0UsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoidGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWwuc2MtaW9uLWxhYmVsLW1kLWguc2MtaW9uLWxhYmVsLW1kLXMubWQuaW4taXRlbS1jb2xvci5oeWRyYXRlZCB7XG4gIHBhZGRpbmc6IDJyZW0gMHJlbTtcblxufVxuaW9uLWxhYmVse1xuICBvdmVyZmxvdzogaGlkZGVuIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsIWltcG9ydGFudDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG59XG4iXX0= */";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <!-- <ion-buttons slot=\"start\">\n            <ion-button slot=\"icon\">\n                <ion-icon name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons> -->\n    <ion-title> Créer une candidature </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-accordion-group [value]=\"['first']\" (ionChange)=\"saveInfos()\">\n    <ion-accordion value=\"first\" id='first'>\n      <ion-item slot=\"header\" color=\"light\">\n        <ion-label>Etape 1 - Remplir les informations de la société</ion-label>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">\n        <form [formGroup]=\"form\" *ngIf=\"user\" (ngSubmit)=\"saveInfos()\">\n          <!-- prenom -->\n          <ion-item>\n            <ion-label position=\"floating\">Intitulé du poste (requis)</ion-label>\n            <ion-input formControlName=\"intitule\"></ion-input>\n          </ion-item>\n          <ion-list>\n            <ion-item>\n              <ion-label>Votre expérience</ion-label>\n              <ion-select formControlName=\"experience\" placeholder=\"Niveau d'expérience pour ce poste\">\n                <ion-select-option value=\"debutant\">Débutant</ion-select-option>\n                <ion-select-option value=\"expert\">Déjà exercé un poste similaire</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n          <ion-item>\n            <ion-label position=\"floating\">Société (requis)</ion-label>\n            <ion-input formControlName=\"societe\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Nom du contact avec civilité</ion-label>\n            <ion-label style=\"font-style: italic\" position=\"floating\">Laisser vide si pas de nom disponible</ion-label>\n\n            <ion-input formControlName=\"contact\" placeholder=\"Madame Durand\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Adresse (requis)</ion-label>\n            <ion-input formControlName=\"adresseSociete\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Code Postal et Ville (requis)</ion-label>\n            <ion-input formControlName=\"cpVille\"></ion-input>\n          </ion-item>\n\n          <ion-button [color]=\"colorBtn\" expand=\"block\" type=\"submit\" [disabled]=\"form.invalid\">Etape 1 - Enregistrer\n          </ion-button>\n        </form>\n      </div>\n    </ion-accordion>\n    <ion-accordion value=\"second\" id='second'>\n      <ion-item slot=\"header\" color=\"light\">\n        <ion-label>Etape 2 - Choisir le modèle</ion-label>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">\n        <!-- lettre 1 -->\n        <ion-card class=\"ion-no-padding\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"8\" class=\"ion-padding\">\n              <ion-row>\n                <ion-col class=\"bold\">\n                  <h5 class=\"ion-no-margin\">Modèle 1</h5>\n\n                  <img src=\"../../assets/lettres-apercus/cover-letter-1.png\" />\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-button color=\"success\" (click)=\"openModal('coverLetterComponent')\">\n                Choisir\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n        <!-- lettre 2 -->\n        <ion-card class=\"ion-no-padding\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"8\" class=\"ion-padding\">\n              <ion-row>\n                <ion-col class=\"bold\">\n                  <h5 class=\"ion-no-margin\">Modèle 2</h5>\n                  <img src=\"../../assets/lettres-apercus/cover-letter.png\" />\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-button color=\"success\" (click)=\"openModal('coverLetterSimplePage')\">\n                Choisir\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n        <!-- lettre 3 -->\n        <ion-card class=\"ion-no-padding\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"8\" class=\"ion-padding\">\n              <ion-row>\n                <ion-col class=\"bold\">\n                  <h5 class=\"ion-no-margin\">Modèle 3</h5>\n                  <img src=\"../../assets/lettres-apercus/cover-letter-2.png\" />\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-button color=\"success\" (click)=\"openModal('coverLetterCPage')\">\n                Choisir\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n        <!-- lettre 4 premium bubble purple-->\n        <ion-card class=\"ion-no-padding\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\" class=\"ion-padding\">\n              <ion-row>\n                <ion-col class=\"bold\">\n                  <h5 class=\"ion-no-margin\">Modèle Premium Bubble</h5>\n                  <img src=\"../../assets/lettres-apercus/cover-letter-premium-bubble.png\" />\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button color=\"success\" (click)=\"openModal('coverLetterPremiumBubble')\">\n                Prévisualiser\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n        <!-- lettre 5 premium waves orange -->\n        <ion-card class=\"ion-no-padding\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\" class=\"ion-padding\">\n              <ion-row>\n                <ion-col class=\"bold\">\n                  <h5 class=\"ion-no-margin\">Modèle Premium Waves</h5>\n                  <img src=\"../../assets/lettres-apercus/cover-letter-premium-waves-1.png\" />\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button color=\"success\" (click)=\"openModal('coverLetterPremiumWaves1')\">\n                Prévisualiser\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n        <!-- lettre 6 premium waves yellow -->\n        <ion-card class=\"ion-no-padding\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\" class=\"ion-padding\">\n              <ion-row>\n                <ion-col class=\"bold\">\n                  <h5 class=\"ion-no-margin\">Modèle Premium Waves Yellish</h5>\n                  <img src=\"../../assets/lettres-apercus/cover-letter-premium-waves-yellish.png\" />\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button color=\"success\" (click)=\"openModal('coverLetterPremiumWaves2')\">\n                Prévisualiser\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n        <!-- lettre 6 premium blue mountains -->\n        <ion-card class=\"ion-no-padding\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\" class=\"ion-padding\">\n              <ion-row>\n                <ion-col class=\"bold\">\n                  <h5 class=\"ion-no-margin\">Modèle Premium Pic Grey</h5>\n                  <img src=\"../../assets/lettres-apercus/cover-letter-premium-pic-grey.jpg\" />\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button color=\"success\" (click)=\"openModal('coverLetterPremiumPicGrey')\">\n                Prévisualiser\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </div>\n    </ion-accordion>\n    <!-- <ion-accordion value=\"third\">\n            <ion-item slot=\"header\" color=\"light\">\n                <ion-label>Etape 3 - Choisir le contenu</ion-label>\n            </ion-item>\n            <div class=\"ion-padding\" slot=\"content\">\n                Choisir le contenu\n            </div>\n        </ion-accordion> -->\n    <ion-accordion value=\"third\">\n      <ion-item slot=\"header\" color=\"light\">\n        <ion-label>Etape 3 - Sauvegarder votre candidature</ion-label>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">\n        <ion-text color=\"primary\">\n          <p>\n            Pour une meilleur gestion de votre recherche d'emploi, n'oubliez pas\n            d'enregistrer cette candidature dans votre historique.\n          </p>\n        </ion-text>\n        <ion-button expand=\"block\" [color]=\"colorBtn\" (click)=\"onSaved()\">{{this.textBtn}}</ion-button>\n      </div>\n    </ion-accordion>\n  </ion-accordion-group>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <!-- <ion-button expand=\"block\" (click)='onSaved()'>AJOUTER A L'HISTORIQUE</ion-button> -->\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map