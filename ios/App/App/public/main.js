(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then((m) => m.TabsPageModule),
    },
    {
        path: 'form',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_form_form_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./form/form.module */ 9659)).then((m) => m.FormPageModule),
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then((m) => m.LoginPageModule),
    },
    {
        path: 'signup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 7648)).then((m) => m.SignupPageModule),
    },
    {
        path: 'reset-password/:id/:token',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_reset-password_reset-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reset-password/reset-password.module */ 4371)).then((m) => m.ResetPasswordPageModule),
    },
    {
        path: 'forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_forgot-password_forgot-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forgot-password/forgot-password.module */ 7157)).then((m) => m.ForgotPasswordPageModule),
    },
    {
        path: 'cover-letter-simple',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_components_cover-letter-simple_cover-letter-simple_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/cover-letter-simple/cover-letter-simple.module */ 5425)).then(m => m.CoverLetterSimplePageModule)
    },
    {
        path: 'cover-letter-c',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_components_cover-letter-c_cover-letter-c_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/cover-letter-c/cover-letter-c.module */ 123)).then(m => m.CoverLetterCPageModule)
    },
    {
        path: 'cover-letter-premium1',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_cover-letter-premium1_cover-letter-premium1_page_ts"), __webpack_require__.e("src_app_components_cover-letter-premium1_cover-letter-premium1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/cover-letter-premium1/cover-letter-premium1.module */ 8849)).then(m => m.CoverLetterPremium1PageModule)
    },
    {
        path: 'template-screenshot',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_template-screenshot_template-screenshot_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/template-screenshot/template-screenshot.module */ 1888)).then(m => m.TemplateScreenshotPageModule)
    },
    {
        path: 'cover-letter-premium2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_cover-letter-premium2_cover-letter-premium2_page_ts"), __webpack_require__.e("src_app_components_cover-letter-premium2_cover-letter-premium2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/cover-letter-premium2/cover-letter-premium2.module */ 9204)).then(m => m.CoverLetterPremium2PageModule)
    },
    {
        path: 'cover-letter-premium3',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_cover-letter-premium3_cover-letter-premium3_page_ts"), __webpack_require__.e("src_app_components_cover-letter-premium3_cover-letter-premium3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/cover-letter-premium3/cover-letter-premium3.module */ 2631)).then(m => m.CoverLetterPremium3PageModule)
    },
    {
        path: 'cover-letter-premium4',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_cover-letter-premium4_cover-letter-premium4_page_ts"), __webpack_require__.e("src_app_components_cover-letter-premium4_cover-letter-premium4_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/cover-letter-premium4/cover-letter-premium4.module */ 8053)).then(m => m.CoverLetterPremium4PageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 7330);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_cover_letter_cover_letter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cover-letter/cover-letter.component */ 3030);










let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _components_cover_letter_cover_letter_component__WEBPACK_IMPORTED_MODULE_3__.CoverLetterComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule],
        providers: [_ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_0__.PDFGenerator, { provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 3030:
/*!*******************************************************************!*\
  !*** ./src/app/components/cover-letter/cover-letter.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoverLetterComponent": () => (/* binding */ CoverLetterComponent)
/* harmony export */ });
/* harmony import */ var _Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cover_letter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cover-letter.component.html?ngResource */ 3802);
/* harmony import */ var _cover_letter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cover-letter.component.scss?ngResource */ 6109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 7330);
/* harmony import */ var _template_screenshot_template_screenshot_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../template-screenshot/template-screenshot.page */ 8225);








let CoverLetterComponent = class CoverLetterComponent {
  //private modalState$!: Observable<any>;
  // on vérifie !
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
    console.log('depuis closemodal');
    this.modalController.dismiss();
  }

  ngOnInit() {//console.log(this.user, 'Invoice Page ngOnInit');
  }

};

CoverLetterComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_3__.PDFGenerator
}];

CoverLetterComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }]
};
CoverLetterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-cover-letter',
  template: _cover_letter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_cover_letter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CoverLetterComponent);


/***/ }),

/***/ 8225:
/*!****************************************************************************!*\
  !*** ./src/app/components/template-screenshot/template-screenshot.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateScreenshotPage": () => (/* binding */ TemplateScreenshotPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _template_screenshot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template-screenshot.page.html?ngResource */ 5999);
/* harmony import */ var _template_screenshot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-screenshot.page.scss?ngResource */ 7798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 7330);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_modal_state_modal_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/modal-state/modal-state.service */ 4397);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ 4177);









let TemplateScreenshotPage = class TemplateScreenshotPage {
    constructor(modalController, router, modalStateService, pdfGenerator) {
        this.modalController = modalController;
        this.router = router;
        this.modalStateService = modalStateService;
        this.pdfGenerator = pdfGenerator;
    }
    ngOnInit() {
        console.log(this.htmlBase, 'htmlBase'); // renvoie string
    }
    closeModal() {
        this.modalStateService.modalstate$.next('close');
        this.modalController.dismiss();
    }
    downloadLetter() {
        const content = document.getElementById('content').innerHTML;
        // Extract the base64-encoded string from the src attribute
        //const base64String = imgElement.src.split(',')[1];
        //console.log(base64String);
        const options = {
            documentSize: 'A4',
            type: 'share',
            // landscape: 'portrait',
            fileName: 'motiv-pro.pdf',
        };
        this.pdfGenerator
            .fromData(this.htmlBase, options)
            .then((base64) => {
            console.log('OK', this.base64);
        })
            .catch((error) => {
            console.log('error', error);
        });
    }
    downloadLetterJs() {
        console.log('cliqué');
        // Default export is a4 paper, portrait, using millimeters for units
        const doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__.jsPDF();
        // Add HTML content to the PDF
        // Add a circle to the PDF
        doc.circle(100, 100, 50, 'S');
        doc.save('example.pdf');
        const blobPDF = doc.output('bloburl');
    }
};
TemplateScreenshotPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_modal_state_modal_state_service__WEBPACK_IMPORTED_MODULE_3__.ModalStateService },
    { type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__.PDFGenerator }
];
TemplateScreenshotPage.propDecorators = {
    base64: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    htmlBase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
TemplateScreenshotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-template-screenshot',
        template: _template_screenshot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_template_screenshot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TemplateScreenshotPage);



/***/ }),

/***/ 4397:
/*!*************************************************************!*\
  !*** ./src/app/services/modal-state/modal-state.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalStateService": () => (/* binding */ ModalStateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);



let ModalStateService = class ModalStateService {
    constructor() {
        this.modalstate$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
};
ModalStateService.ctorParameters = () => [];
ModalStateService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], ModalStateService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    urlApi: 'https://mes-lettres.vercel.app',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-17d9d367_js-node_modules_ionic_core_dist_esm_t-a480aa",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-17d9d367_js-node_modules_ionic_core_dist_esm_t-a480aa",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3980,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 6109:
/*!********************************************************************************!*\
  !*** ./src/app/components/cover-letter/cover-letter.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Zlci1sZXR0ZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 7798:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/template-screenshot/template-screenshot.page.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".pdfEmbed {\n  /* A4 height in pixels */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLXNjcmVlbnNob3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsd0JBQUE7QUFBRiIsImZpbGUiOiJ0ZW1wbGF0ZS1zY3JlZW5zaG90LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZGZFbWJlZCB7XG4vLyB3aWR0aDogOTAlO1xuICAvKiBBNCBoZWlnaHQgaW4gcGl4ZWxzICovXG59XG4iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 3802:
/*!********************************************************************************!*\
  !*** ./src/app/components/cover-letter/cover-letter.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"shade\">\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\n      <ion-button slot=\"icon\">\n        <ion-icon class=\"icon\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios ion-text-capitalize\">Modèle 1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div id='main' style='font-family: arial;font-size:16px; margin:50px'>\n\n    <div id=\"container\" style='padding: 3rem 5rem;'>\n      <header style='display: flex; text-align: left; '>\n        <div style='flex:1;  padding: 15px; background-color: #2f74b7; color: white; font-size:18px; font-weight: 600'>\n\n          <p>{{user.prenom}} {{user.nom}}</p>\n          <p>{{user?.letters[0].intitule}}</p>\n\n        </div>\n        <div style='flex:1;  padding: 15px; background-color:white;'>\n          <!-- ici icône -->\n          <p>\n            <ion-icon name=\"navigate-circle-outline\"></ion-icon> {{user.adresse}}\n          </p>\n          <p>\n            <ion-icon name=\"phone-portrait\"></ion-icon> {{user.tel}}\n          </p>\n          <p>\n            <ion-icon name=\"send\"></ion-icon> {{user.email}}\n          </p>\n\n\n        </div>\n      </header>\n\n      <section id='contactInfos' style='text-align: right; line-height: 12px;'>\n        <p>{{user.letters[0].societe}}</p>\n        <p>{{user.letters[0].contact}}</p>\n        <p>{{user.letters[0].adresseSociete}}</p>\n        <p>{{user.letters[0].cpVille}}</p>\n      </section>\n\n      <!-- partie expert -->\n      <section id='content' style='text-align: justify;' *ngIf=\"user.letters[0].experience ===  'expert' \">\n        <p style='padding-bottom:35px; text-align: right;'>Le {{today | date:'dd/MM/yyyy'}}</p>\n        <p style='padding-bottom:10px'>Objet : candidature pour le poste de {{user.letters[0].intitule}}</p>\n        <p *ngIf='user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          {{user.letters[0].contact}},\n        </p>\n        <p *ngIf='!user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          Madame, Monsieur,\n        </p>\n        <!-- premier paragraphe -->\n        <p>\n          Je suis actuellement à la recherche d'un emploi dans votre secteur d'activité, c'est pourquoi, je me permets\n          de vous\n          écrire pour postuler au poste de {{user.letters[0].intitule}}.\n        </p>\n        <p>\n          En effet, j'ai déjà pu exercer à ce poste lors d'une précédente mission. Cette expérience a été très\n          enrichissante\n          et\n          formatrice. Je souhaiterais vivement mettre ces compétences à profit dans votre structure. Dès le début de\n          notre\n          collaboration, vous pourrez constater que je suis {{user.adjs[0]}}, {{user.adjs[1]}} et {{user.adjs[2]}}, des\n          qualités essentielles dans ce métier. </p>\n        <!-- conclusion -->\n        <p>Je suis disponible pour m'entretenir avec vous, par téléphone ou en personne afin de déterminer comment je\n          pourrais\n          contribuer au mieux au développement de votre entreprise. </p>\n        <p>Je vous remercie de l'attention que vous pourrez accorder à ma candidature,</p>\n        <p>Sincères salutations,</p>\n\n\n        <p>{{user.prenom}} {{user.nom}}</p>\n      </section>\n\n\n      <!-- partie débutant -->\n      <section id='content' style='text-align: justify;' *ngIf=\"user.letters[0].experience ===  'debutant' \">\n        <p style='padding-bottom:35px; text-align: right;'>Le {{today | date:'dd/MM/yyyy'}}</p>\n        <p style='padding-bottom:10px'>Objet : candidature pour le poste de {{user.letters[0].intitule}}</p>\n        <p *ngIf='user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          {{user.letters[0].contact}},\n        </p>\n        <p *ngIf='!user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          Madame, Monsieur,\n        </p>\n        <!-- premier paragraphe -->\n        <p>\n          Je suis actuellement à la recherche d'un emploi dans votre secteur d'activité, c'est pourquoi, je me permets\n          de vous\n          écrire pour postuler au poste de {{user.letters[0].intitule}}.</p>\n        <p>\n          <!-- si pas expérience -->\n          <span *ngIf=\"user.gender ==='femme'\">\n            Je débute mon activité professionnelle avec beaucoup d'enthousiasme à l'idée de m'intégrer à une nouvelle\n            équipe\n            et d'acquérir de nouvelles compétences. Ma capacité d'adaptation et mon envie de bien faire les tâches\n            demandées\n            me permettront d'être opérationnelle rapidement. Je souhaiterais vivement mettre ces compétences à profit\n            dans\n            votre structure.\n          </span>\n          <span *ngIf=\"user.gender ==='homme'\">\n            Je débute mon activité professionnelle avec beaucoup d'enthousiasme à l'idée de m'intégrer à une nouvelle\n            équipe\n            et\n            d'acquérir de nouvelles compétences. Ma capacité d'adaptation et mon envie de bien faire les tâches\n            demandées me\n            permettront d'être opérationnel rapidement. Je souhaiterais vivement mettre ces compétences à profit dans\n            votre\n            structure.\n          </span>\n        </p>\n\n        <!-- second paragraphe -->\n\n        <p>Dès le début de notre collaboration, vous pourrez constater que je suis {{user.adjs[0]}}, {{user.adjs[1]}} et\n          {{user.adjs[2]}}, des qualités essentielles dans ce métier. </p>\n        <!-- conclusion -->\n        <p>Je suis disponible pour m'entretenir avec vous, par téléphone ou en personne afin de déterminer comment je\n          pourrais\n          contribuer au mieux au développement de votre entreprise. </p>\n        <p>Je vous remercie de l'attention que vous pourrez accorder à ma candidature,</p>\n        <p style='padding: 20px 0px'>Sincères salutations,</p>\n\n        <p>{{user.prenom}} {{user.nom}}</p>\n      </section>\n    </div>\n\n\n\n  </div>\n\n\n";

/***/ }),

/***/ 5999:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/template-screenshot/template-screenshot.page.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"shade\">\n    <ion-buttons slot=\"start\">\n      <ion-buttons (click)=\"closeModal()\" slot=\"start\">\n        <ion-icon class=\"icon\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-buttons>\n    </ion-buttons>\n    <ion-title class=\"title-ios ion-text-capitalize\">Prévisualiser</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n\n  <div style='background-color: rgb(129, 129, 138); height: 100%;text-align: center;'>\n\n    <div id='content'>\n      <img src=\"data:application/pdf;base64,{{base64}}\">\n    </div>\n\n\n  </div>\n</ion-content>\n\n<ion-footer (click)=\"downloadLetter()\">\n  <ion-toolbar color=\"success\" class=\"ion-padding-horizontal\">\n    <div class=\"ion-text-center\">\n      <h4 class=\"ion-no-margin\">Télécharger la lettre</h4>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n\n\n<!-- modifier pdfEmbed pour visualiser en plus petit -->\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map