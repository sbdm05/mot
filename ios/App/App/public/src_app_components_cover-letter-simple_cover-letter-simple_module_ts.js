"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_components_cover-letter-simple_cover-letter-simple_module_ts"],{

/***/ 1602:
/*!**************************************************************************************!*\
  !*** ./src/app/components/cover-letter-simple/cover-letter-simple-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoverLetterSimplePageRoutingModule": () => (/* binding */ CoverLetterSimplePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _cover_letter_simple_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cover-letter-simple.page */ 6705);




const routes = [
    {
        path: '',
        component: _cover_letter_simple_page__WEBPACK_IMPORTED_MODULE_0__.CoverLetterSimplePage
    }
];
let CoverLetterSimplePageRoutingModule = class CoverLetterSimplePageRoutingModule {
};
CoverLetterSimplePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CoverLetterSimplePageRoutingModule);



/***/ }),

/***/ 5425:
/*!******************************************************************************!*\
  !*** ./src/app/components/cover-letter-simple/cover-letter-simple.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoverLetterSimplePageModule": () => (/* binding */ CoverLetterSimplePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cover_letter_simple_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cover-letter-simple-routing.module */ 1602);
/* harmony import */ var _cover_letter_simple_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cover-letter-simple.page */ 6705);







let CoverLetterSimplePageModule = class CoverLetterSimplePageModule {
};
CoverLetterSimplePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cover_letter_simple_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoverLetterSimplePageRoutingModule
        ],
        declarations: [_cover_letter_simple_page__WEBPACK_IMPORTED_MODULE_1__.CoverLetterSimplePage]
    })
], CoverLetterSimplePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_components_cover-letter-simple_cover-letter-simple_module_ts.js.map