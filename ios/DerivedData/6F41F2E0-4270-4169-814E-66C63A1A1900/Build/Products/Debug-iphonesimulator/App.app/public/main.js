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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cover_letter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cover-letter.component.html?ngResource */ 3802);
/* harmony import */ var _cover_letter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cover-letter.component.scss?ngResource */ 6109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 7330);






let CoverLetterComponent = class CoverLetterComponent {
    constructor(modalController, pdfGenerator) {
        this.modalController = modalController;
        this.pdfGenerator = pdfGenerator;
        this.today = Date.now();
    }
    closeModal() {
        this.modalController.dismiss();
    }
    downloadLetter() {
        console.log('bouton cliqué');
        this.content = document.getElementById('main').innerHTML;
        const options = {
            documentSize: 'A4',
            type: 'share',
            // landscape: 'portrait',
            fileName: 'cover-letter.pdf',
        };
        this.pdfGenerator
            .fromData(this.content, options)
            .then((base64) => {
            console.log('OK', base64);
        })
            .catch((error) => {
            console.log('error', error);
        });
    }
    ngOnInit() {
        console.log(this.user, 'Invoice Page ngOnInit');
    }
    ngOnChanges() {
        console.log(this.user, 'Invoice Pagechanges');
    }
};
CoverLetterComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__.PDFGenerator }
];
CoverLetterComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
CoverLetterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-cover-letter',
        template: _cover_letter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cover_letter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoverLetterComponent);



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
		2666,
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
module.exports = "\n<ion-header>\n  <ion-toolbar color=\"shade\">\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\n      <ion-button slot=\"icon\">\n        <ion-icon class=\"icon\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios ion-text-capitalize\">Modèle 1 Bleu</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n<div id='main' style='font-family: arial;font-size:16px; margin:50px;'>\n  <header style='display: flex; text-align: left; '>\n    <div style='flex:1;  padding: 15px; background-color: #2f74b7; color: white; font-size:18px; font-weight: 600' >\n\n      <p>{{user.prenom}} {{user.nom}}</p>\n      <p>{{user?.letters[0].intitule}}</p>\n\n    </div>\n    <div style='flex:1;  padding: 15px; background-color:white;' >\n      <!-- ici icône -->\n      <p><ion-icon name=\"pin\"></ion-icon> {{user.adresse}}</p>\n      <p>\n        <ion-icon name=\"phone-portrait\"></ion-icon> {{user.tel}}\n      </p>\n      <p>\n      <ion-icon name=\"send\"></ion-icon> {{user.email}}\n      </p>\n\n\n    </div>\n  </header>\n\n  <section id='contactInfos' style='text-align: right; line-height: 12px;'>\n    <p>{{user.letters[0].societe}}</p>\n    <p>{{user.letters[0].contact}}</p>\n    <p>{{user.letters[0].adresseSociete}}</p>\n    <p>{{user.letters[0].cpVille}}</p>\n  </section>\n\n  <!-- partie expert -->\n  <section id='content' style='text-align: justify;' *ngIf=\"user.letters[0].experience ===  'expert' \">\n    <p  style='padding-bottom:35px; text-align: right;'>Le {{today | date:'dd/MM/yyyy'}}</p>\n    <p style='padding-bottom:10px'>Objet : candidature pour le poste de {{user.letters[0].intitule}}</p>\n    <p *ngIf='user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n      {{user.letters[0].contact}},\n    </p>\n    <p *ngIf='!user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n       Madame, Monsieur,\n    </p>\n    <!-- premier paragraphe -->\n    <p>\n      Je suis actuellement à la recherche d'un emploi dans votre secteur d'activité, c'est pourquoi, je me permets de vous écrire pour postuler au poste de {{user.letters[0].intitule}}.\n    </p>\n    <p>\n    En effet, j'ai déjà pu exercer à ce poste lors d'une précédente mission. Cette expérience a été très enrichissante et\n    formatrice. Je souhaiterais vivement mettre ces compétences à profit dans votre structure. Dès le début de notre collaboration, vous pourrez constater que je suis {{user.adjs[0]}}, {{user.adjs[1]}} et {{user.adjs[2]}}, des qualités essentielles dans ce métier. </p>\n    <!-- conclusion -->\n    <p>Je suis disponible pour m'entretenir avec vous, par téléphone ou en personne afin de déterminer comment je pourrais contribuer au mieux au développement de votre entreprise. </p>\n    <p>Je vous remercie de l'attention que vous pourrez accorder à ma candidature,</p>\n    <p>Sincères salutations,</p>\n\n\n    <p>{{user.prenom}} {{user.nom}}</p>\n  </section>\n\n\n  <!-- partie débutant -->\n  <section id='content' style='text-align: justify;' *ngIf=\"user.letters[0].experience ===  'debutant' \">\n      <p style='padding-bottom:35px; text-align: right;'>Le {{today | date:'dd/MM/yyyy'}}</p>\n      <p style='padding-bottom:10px'>Objet : candidature pour le poste de {{user.letters[0].intitule}}</p>\n      <p *ngIf='user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n        {{user.letters[0].contact}},\n      </p>\n      <p *ngIf='!user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n        Madame, Monsieur,\n      </p>\n      <!-- premier paragraphe -->\n      <p>\n        Je suis actuellement à la recherche d'un emploi dans votre secteur d'activité, c'est pourquoi, je me permets de vous\n        écrire pour postuler au poste de {{user.letters[0].intitule}}.</p>\n        <p>\n        <!-- si pas expérience -->\n        <span *ngIf=\"user.gender ==='femme'\">\n         Je débute mon activité professionnelle avec beaucoup d'enthousiasme à l'idée de m'intégrer à une nouvelle équipe et d'acquérir de nouvelles compétences. Ma capacité d'adaptation et mon envie de bien faire les tâches demandées me permettront d'être opérationnelle rapidement. Je souhaiterais vivement mettre ces compétences à profit dans votre structure.\n        </span>\n                <span *ngIf=\"user.gender ==='homme'\">\n                  Je débute mon activité professionnelle avec beaucoup d'enthousiasme à l'idée de m'intégrer à une nouvelle équipe et\n                  d'acquérir de nouvelles compétences. Ma capacité d'adaptation et mon envie de bien faire les tâches demandées me\n                  permettront d'être opérationnel rapidement. Je souhaiterais vivement mettre ces compétences à profit dans votre\n                  structure.\n                </span>\n      </p>\n\n      <!-- second paragraphe -->\n\n      <p >Dès le début de notre collaboration, vous pourrez constater que je suis {{user.adjs[0]}}, {{user.adjs[1]}} et\n        {{user.adjs[2]}}, des qualités essentielles dans ce métier. </p>\n      <!-- conclusion -->\n      <p>Je suis disponible pour m'entretenir avec vous, par téléphone ou en personne afin de déterminer comment je pourrais\n        contribuer au mieux au développement de votre entreprise. </p>\n        <p >Je vous remercie de l'attention que vous pourrez accorder à ma candidature,</p>\n        <p style='padding: 20px 0px'>Sincères salutations,</p>\n\n      <p>{{user.prenom}} {{user.nom}}</p>\n  </section>\n\n\n</div>\n\n\n\n<ion-footer (click)=\"downloadLetter()\">\n  <ion-toolbar color=\"success\" class=\"ion-padding-horizontal\">\n    <div class=\"ion-text-center\">\n      <h4 class=\"ion-no-margin\">Télécharger la lettre</h4>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIuL3NyYy9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCIuL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9jb21wb25lbnRzL2NvdmVyLWxldHRlci9jb3Zlci1sZXR0ZXIuY29tcG9uZW50LnRzIiwiLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwiLi9zcmMvbWFpbi50cyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLyBsYXp5IF5cXC5cXC8uKlxcLmVudHJ5XFwuanMkIGluY2x1ZGU6IFxcLmVudHJ5XFwuanMkIGV4Y2x1ZGU6IFxcLnN5c3RlbVxcLmVudHJ5XFwuanMkIG5hbWVzcGFjZSBvYmplY3QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByZWxvYWRBbGxNb2R1bGVzLCBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PlxuICAgICAgaW1wb3J0KCcuL3RhYnMvdGFicy5tb2R1bGUnKS50aGVuKChtKSA9PiBtLlRhYnNQYWdlTW9kdWxlKSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdmb3JtJyxcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+XG4gICAgICBpbXBvcnQoJy4vZm9ybS9mb3JtLm1vZHVsZScpLnRoZW4oKG0pID0+IG0uRm9ybVBhZ2VNb2R1bGUpLFxuICB9LFxuICB7XG4gICAgcGF0aDogJ2xvZ2luJyxcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+XG4gICAgICBpbXBvcnQoJy4vbG9naW4vbG9naW4ubW9kdWxlJykudGhlbigobSkgPT4gbS5Mb2dpblBhZ2VNb2R1bGUpLFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3NpZ251cCcsXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PlxuICAgICAgaW1wb3J0KCcuL3NpZ251cC9zaWdudXAubW9kdWxlJykudGhlbigobSkgPT4gbS5TaWdudXBQYWdlTW9kdWxlKSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdyZXNldC1wYXNzd29yZC86aWQvOnRva2VuJyxcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+XG4gICAgICBpbXBvcnQoJy4vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQubW9kdWxlJykudGhlbihcbiAgICAgICAgKG0pID0+IG0uUmVzZXRQYXNzd29yZFBhZ2VNb2R1bGVcbiAgICAgICksXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnZm9yZ290LXBhc3N3b3JkJyxcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+XG4gICAgICBpbXBvcnQoJy4vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5tb2R1bGUnKS50aGVuKFxuICAgICAgICAobSkgPT4gbS5Gb3Jnb3RQYXNzd29yZFBhZ2VNb2R1bGVcbiAgICAgICksXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnY292ZXItbGV0dGVyLXNpbXBsZScsXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9jb3Zlci1sZXR0ZXItc2ltcGxlL2NvdmVyLWxldHRlci1zaW1wbGUubW9kdWxlJykudGhlbiggbSA9PiBtLkNvdmVyTGV0dGVyU2ltcGxlUGFnZU1vZHVsZSlcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdjb3Zlci1sZXR0ZXItYycsXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9jb3Zlci1sZXR0ZXItYy9jb3Zlci1sZXR0ZXItYy5tb2R1bGUnKS50aGVuKCBtID0+IG0uQ292ZXJMZXR0ZXJDUGFnZU1vZHVsZSlcbiAgfSxcbl07XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzLCB7IHByZWxvYWRpbmdTdHJhdGVneTogUHJlbG9hZEFsbE1vZHVsZXMgfSksXG4gIF0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhcHAuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZVJldXNlU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUERGR2VuZXJhdG9yIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9wZGYtZ2VuZXJhdG9yL25neCc7XG5cbmltcG9ydCB7IElvbmljTW9kdWxlLCBJb25pY1JvdXRlU3RyYXRlZ3kgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ292ZXJMZXR0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY292ZXItbGV0dGVyL2NvdmVyLWxldHRlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsIENvdmVyTGV0dGVyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIElvbmljTW9kdWxlLmZvclJvb3QoKSwgQXBwUm91dGluZ01vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1BERkdlbmVyYXRvcix7IHByb3ZpZGU6IFJvdXRlUmV1c2VTdHJhdGVneSwgdXNlQ2xhc3M6IElvbmljUm91dGVTdHJhdGVneSB9XSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgUERGR2VuZXJhdG9yIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9wZGYtZ2VuZXJhdG9yL25neCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnc3JjL2FwcC91c2VyL3VzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY292ZXItbGV0dGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvdmVyLWxldHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvdmVyLWxldHRlci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZlckxldHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdXNlcjogVXNlcjtcbiAgY29udGVudDogc3RyaW5nO1xuICB0b2RheTogbnVtYmVyID0gRGF0ZS5ub3coKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1vZGFsQ29udHJvbGxlcjogTW9kYWxDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcGRmR2VuZXJhdG9yOiBQREZHZW5lcmF0b3JcbiAgKSB7fVxuICBjbG9zZU1vZGFsKCkge1xuICAgIHRoaXMubW9kYWxDb250cm9sbGVyLmRpc21pc3MoKTtcbiAgfVxuXG4gIGRvd25sb2FkTGV0dGVyKCkge1xuICAgIGNvbnNvbGUubG9nKCdib3V0b24gY2xpcXXDqScpO1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuaW5uZXJIVE1MO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBkb2N1bWVudFNpemU6ICdBNCcsXG4gICAgICB0eXBlOiAnc2hhcmUnLFxuICAgICAgLy8gbGFuZHNjYXBlOiAncG9ydHJhaXQnLFxuICAgICAgZmlsZU5hbWU6ICdjb3Zlci1sZXR0ZXIucGRmJyxcbiAgICB9O1xuICAgIHRoaXMucGRmR2VuZXJhdG9yXG4gICAgICAuZnJvbURhdGEodGhpcy5jb250ZW50LCBvcHRpb25zKVxuICAgICAgLnRoZW4oKGJhc2U2NCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnT0snLCBiYXNlNjQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy51c2VyLCAnSW52b2ljZSBQYWdlIG5nT25Jbml0Jyk7XG4gIH1cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy51c2VyLCAnSW52b2ljZSBQYWdlY2hhbmdlcycpO1xuICB9XG59XG4iLCIvLyBUaGlzIGZpbGUgY2FuIGJlIHJlcGxhY2VkIGR1cmluZyBidWlsZCBieSB1c2luZyB0aGUgYGZpbGVSZXBsYWNlbWVudHNgIGFycmF5LlxuLy8gYG5nIGJ1aWxkIC0tcHJvZGAgcmVwbGFjZXMgYGVudmlyb25tZW50LnRzYCB3aXRoIGBlbnZpcm9ubWVudC5wcm9kLnRzYC5cbi8vIFRoZSBsaXN0IG9mIGZpbGUgcmVwbGFjZW1lbnRzIGNhbiBiZSBmb3VuZCBpbiBgYW5ndWxhci5qc29uYC5cblxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xuICBwcm9kdWN0aW9uOiBmYWxzZSxcbiAgdXJsQXBpOiAnaHR0cHM6Ly9tZXMtbGV0dHJlcy52ZXJjZWwuYXBwJyxcbn07XG5cbi8qXG4gKiBGb3IgZWFzaWVyIGRlYnVnZ2luZyBpbiBkZXZlbG9wbWVudCBtb2RlLCB5b3UgY2FuIGltcG9ydCB0aGUgZm9sbG93aW5nIGZpbGVcbiAqIHRvIGlnbm9yZSB6b25lIHJlbGF0ZWQgZXJyb3Igc3RhY2sgZnJhbWVzIHN1Y2ggYXMgYHpvbmUucnVuYCwgYHpvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrYC5cbiAqXG4gKiBUaGlzIGltcG9ydCBzaG91bGQgYmUgY29tbWVudGVkIG91dCBpbiBwcm9kdWN0aW9uIG1vZGUgYmVjYXVzZSBpdCB3aWxsIGhhdmUgYSBuZWdhdGl2ZSBpbXBhY3RcbiAqIG9uIHBlcmZvcm1hbmNlIGlmIGFuIGVycm9yIGlzIHRocm93bi5cbiAqL1xuLy8gaW1wb3J0ICd6b25lLmpzL2Rpc3Qvem9uZS1lcnJvcic7ICAvLyBJbmNsdWRlZCB3aXRoIEFuZ3VsYXIgQ0xJLlxuIiwiaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuXG5pZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xuICBlbmFibGVQcm9kTW9kZSgpO1xufVxuXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSlcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9pb24tYWNjb3JkaW9uXzIuZW50cnkuanNcIjogW1xuXHRcdDc5LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYWNjb3JkaW9uXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWFjdGlvbi1zaGVldC5lbnRyeS5qc1wiOiBbXG5cdFx0NTU5Myxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWFjdGlvbi1zaGVldF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYWxlcnQuZW50cnkuanNcIjogW1xuXHRcdDMyMjUsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1hbGVydF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYXBwXzguZW50cnkuanNcIjogW1xuXHRcdDQ4MTIsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1hcHBfOF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYXZhdGFyXzMuZW50cnkuanNcIjogW1xuXHRcdDY2NTUsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYXZhdGFyXzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWJhY2stYnV0dG9uLmVudHJ5LmpzXCI6IFtcblx0XHQ0ODU2LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYmFjay1idXR0b25fZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWJhY2tkcm9wLmVudHJ5LmpzXCI6IFtcblx0XHQzMDU5LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWJhY2tkcm9wX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1icmVhZGNydW1iXzIuZW50cnkuanNcIjogW1xuXHRcdDg2NDgsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1icmVhZGNydW1iXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWJ1dHRvbl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ4MzA4LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWJ1dHRvbl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1jYXJkXzUuZW50cnkuanNcIjogW1xuXHRcdDQ2OTAsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tY2FyZF81X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1jaGVja2JveC5lbnRyeS5qc1wiOiBbXG5cdFx0NDA5MCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jaGVja2JveF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tY2hpcC5lbnRyeS5qc1wiOiBbXG5cdFx0NjIxNCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jaGlwX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1jb2xfMy5lbnRyeS5qc1wiOiBbXG5cdFx0OTQ0Nyxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jb2xfM19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tZGF0ZXRpbWUtYnV0dG9uLmVudHJ5LmpzXCI6IFtcblx0XHQ3OTUwLFxuXHRcdFwiZGVmYXVsdC1ub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9wYXJzZS0xN2Q5ZDM2N19qcy1ub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV90LWE0ODBhYVwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWRhdGV0aW1lLWJ1dHRvbl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tZGF0ZXRpbWVfMy5lbnRyeS5qc1wiOiBbXG5cdFx0OTY4OSxcblx0XHRcImRlZmF1bHQtbm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21fcGFyc2UtMTdkOWQzNjdfanMtbm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21fdC1hNDgwYWFcIixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWRhdGV0aW1lXzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWZhYl8zLmVudHJ5LmpzXCI6IFtcblx0XHQ4ODQwLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tZmFiXzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWltZy5lbnRyeS5qc1wiOiBbXG5cdFx0NzQ5LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWltZ19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24taW5maW5pdGUtc2Nyb2xsXzIuZW50cnkuanNcIjogW1xuXHRcdDk2NjcsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1pbmZpbml0ZS1zY3JvbGxfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24taW5wdXQuZW50cnkuanNcIjogW1xuXHRcdDMyODgsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24taW5wdXRfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWl0ZW0tb3B0aW9uXzMuZW50cnkuanNcIjogW1xuXHRcdDU0NzMsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1pdGVtLW9wdGlvbl8zX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1pdGVtXzguZW50cnkuanNcIjogW1xuXHRcdDM2MzQsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1pdGVtXzhfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWxvYWRpbmcuZW50cnkuanNcIjogW1xuXHRcdDI4NTUsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tbG9hZGluZ19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tbWVudV8zLmVudHJ5LmpzXCI6IFtcblx0XHQ0OTUsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1tZW51XzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLW1vZGFsLmVudHJ5LmpzXCI6IFtcblx0XHQ4NzM3LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tbW9kYWxfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLW5hdl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ5NjMyLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tbmF2XzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXBpY2tlci1jb2x1bW4taW50ZXJuYWwuZW50cnkuanNcIjogW1xuXHRcdDQ0NDYsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1waWNrZXItY29sdW1uLWludGVybmFsX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1waWNrZXItaW50ZXJuYWwuZW50cnkuanNcIjogW1xuXHRcdDIyNzUsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcGlja2VyLWludGVybmFsX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1wb3BvdmVyLmVudHJ5LmpzXCI6IFtcblx0XHQ4MDUwLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcG9wb3Zlcl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcHJvZ3Jlc3MtYmFyLmVudHJ5LmpzXCI6IFtcblx0XHQ4OTk0LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXByb2dyZXNzLWJhcl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcmFkaW9fMi5lbnRyeS5qc1wiOiBbXG5cdFx0MzU5Mixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1yYWRpb18yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yYW5nZS5lbnRyeS5qc1wiOiBbXG5cdFx0NTQ1NCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJhbmdlX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yZWZyZXNoZXJfMi5lbnRyeS5qc1wiOiBbXG5cdFx0MjkwLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcmVmcmVzaGVyXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXJlb3JkZXJfMi5lbnRyeS5qc1wiOiBbXG5cdFx0MjY2Nixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJlb3JkZXJfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcmlwcGxlLWVmZmVjdC5lbnRyeS5qc1wiOiBbXG5cdFx0NDgxNixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1yaXBwbGUtZWZmZWN0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yb3V0ZV80LmVudHJ5LmpzXCI6IFtcblx0XHQ1NTM0LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJvdXRlXzRfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNlYXJjaGJhci5lbnRyeS5qc1wiOiBbXG5cdFx0NDkwMixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNlYXJjaGJhcl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc2VnbWVudF8yLmVudHJ5LmpzXCI6IFtcblx0XHQxOTM4LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tc2VnbWVudF8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1zZWxlY3RfMy5lbnRyeS5qc1wiOiBbXG5cdFx0ODE3OSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1zZWxlY3RfM19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc2xpZGVfMi5lbnRyeS5qc1wiOiBbXG5cdFx0NjY4LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNsaWRlXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNwaW5uZXIuZW50cnkuanNcIjogW1xuXHRcdDE2MjQsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1zcGlubmVyX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1zcGxpdC1wYW5lLmVudHJ5LmpzXCI6IFtcblx0XHQ5OTg5LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNwbGl0LXBhbmVfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXRhYi1iYXJfMi5lbnRyeS5qc1wiOiBbXG5cdFx0ODkwMixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRhYi1iYXJfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdGFiXzIuZW50cnkuanNcIjogW1xuXHRcdDE5OSxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRhYl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10ZXh0LmVudHJ5LmpzXCI6IFtcblx0XHQ4Mzk1LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRleHRfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXRleHRhcmVhLmVudHJ5LmpzXCI6IFtcblx0XHQ2MzU3LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRleHRhcmVhX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10b2FzdC5lbnRyeS5qc1wiOiBbXG5cdFx0ODI2OCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi10b2FzdF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdG9nZ2xlLmVudHJ5LmpzXCI6IFtcblx0XHQ1MjY5LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tdG9nZ2xlX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi12aXJ0dWFsLXNjcm9sbC5lbnRyeS5qc1wiOiBbXG5cdFx0Mjg3NSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi12aXJ0dWFsLXNjcm9sbF9lbnRyeV9qc1wiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoaWRzLnNsaWNlKDEpLm1hcChfX3dlYnBhY2tfcmVxdWlyZV9fLmUpKS50aGVuKCgpID0+IHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKE9iamVjdC5rZXlzKG1hcCkpO1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IDg2Mztcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbNl19