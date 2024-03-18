"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_form_form_module_ts"],{

/***/ 2438:
/*!*********************************************!*\
  !*** ./src/app/form/form-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPageRoutingModule": () => (/* binding */ FormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.page */ 208);




const routes = [
    {
        path: '',
        component: _form_page__WEBPACK_IMPORTED_MODULE_0__.FormPage
    }
];
let FormPageRoutingModule = class FormPageRoutingModule {
};
FormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormPageRoutingModule);



/***/ }),

/***/ 9659:
/*!*************************************!*\
  !*** ./src/app/form/form.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPageModule": () => (/* binding */ FormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-routing.module */ 2438);
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.page */ 208);







let FormPageModule = class FormPageModule {
};
FormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _form_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_form_page__WEBPACK_IMPORTED_MODULE_1__.FormPage],
        exports: [_form_page__WEBPACK_IMPORTED_MODULE_1__.FormPage]
    })
], FormPageModule);



/***/ }),

/***/ 208:
/*!***********************************!*\
  !*** ./src/app/form/form.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPage": () => (/* binding */ FormPage)
/* harmony export */ });
/* harmony import */ var _Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _form_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.page.html?ngResource */ 1562);
/* harmony import */ var _form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.page.scss?ngResource */ 2838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ 4961);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/camera */ 4241);









let FormPage = class FormPage {
  constructor(fb, usersService, cdr) {
    this.fb = fb;
    this.usersService = usersService;
    this.cdr = cdr;
    this.colorBtn = 'success';
    this.adjs = [];
    this.isModified = false; // props pour gérer la photo

    this.addPicActive = false;
    this.picSizeExceedeed = false;
    this.qualitesFemme = ['autonome', 'dynamique', 'opérationnelle', 'réactive', 'fiable', 'ponctuelle', 'consciencieuse', 'discrète', 'enthousiaste', 'imaginative', 'créative', 'méthodique', 'patiente'];
    this.qualitesHomme = ['autonome', 'dynamique', 'opérationnel', 'réactif', 'fiable', 'ponctuel', 'consciencieux', 'discret', 'enthousiaste', 'imaginatif', 'créatif', 'méthodique', 'patient']; //this.token = localStorage.getItem('token');

    console.log(this.user); // est-ce que la photo de profil existe ?

    this.selectedPic = localStorage.getItem('pic');

    if (this.selectedPic) {
      this.imageConverted = this.selectedPic;
    }
  }

  ngOnInit() {
    console.log(this.user, 'user depuis form'); // console.log(this.form.value);

    this.form = this.fb.group({
      gender: [this.user?.gender],
      prenom: [this.user?.prenom],
      nom: [this.user?.nom],
      adresse: [this.user?.adresse],
      tel: [this.user?.tel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(10)])],
      email: [this.user?.email],
      adjs: [this.user?.adjs, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(3)])]
    });
    console.log(this.form.value);
  }

  ngOnChanges() {
    console.log('ngonchanges', this.user);
    console.log(this.user, 'depuis ngOnChanges'); //this.cdr.detectChanges();

    this.form = this.fb.group({
      gender: [this.user?.gender],
      prenom: [this.user?.prenom],
      nom: [this.user?.nom],
      adresse: [this.user?.adresse],
      tel: [this.user?.tel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(10)])],
      email: [this.user?.email],
      adjs: [this.user?.adjs, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(3)])]
    });
    this.cdr.detectChanges();
  }

  selectGender(i) {
    console.log(i.target.value, 'gender');
    this.user.gender = i.target.value;
    console.log(this.user);
  }

  selectAdj(i) {
    //console.log(i.target.value, 'adjs');
    this.adjs = i.target.value;
  }

  onSelectPic() {
    var _this = this;

    return (0,_Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('onselectpic');
      _this.picSizeExceedeed = false;
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.Base64,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Photos
      }); // console.log(image, '[IMAGE ONSELECTPIC]');

      if (image.base64String) {
        console.log(image.base64String, '[IMAGE.BASE64STRING'); // check image size

        const sizeInBytes = image.base64String.length * 0.75;
        const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB

        if (sizeInBytes <= maxSizeInBytes) {
          // pour affichage dans template HTML
          // eslint-disable-next-line prefer-const
          _this.imageConverted = 'data:image/jpeg;base64, ' + image.base64String;
          console.log(_this.imageConverted); // this.imageConverted =
          //   'https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg';
          //this.user.pic = this.imageConverted;

          _this.addPicActive = true; //this.cdr.detectChanges();
          // on store l'image dans le localStorage

          localStorage.setItem('pic', _this.imageConverted); // disabled the add button
        } else {
          console.log('erreur dans la taille');
          _this.picSizeExceedeed = true;
        }
      }
    })();
  }

  onDeletePic() {
    localStorage.removeItem('pic');
    console.log('deleted');
    this.imageConverted = null;
    this.addPicActive = false;
    this.cdr.detectChanges();
  }

  onSubmit() {
    console.log('onsubmit');

    if (this.form.status === 'VALID') {
      console.log(this.token, 'token');
      this.usersService.updateUser(this.form.value, this.token).subscribe(data => {
        //console.log('after update', data);
        //console.log('submit ok');
        //console.log(this.form.value);
        //this.usersService.refreshCollection(data);
        this.colorBtn = 'warning';
        setTimeout(() => {
          this.colorBtn = 'success';
        }, 1000);
        this.isModified = false;
      }); //localStorage.setItem('infos', JSON.stringify(this.form.value));
    } else {
      console.log('erreur'); //this.error='Veuillez compléter le formulaire'
    }
  }

  ngOnDestroy() {//this.form.reset();
  }

};

FormPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
}];

FormPage.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }]
};
FormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-form',
  template: _form_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], FormPage);
 // test
// restets

/***/ }),

/***/ 4830:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType),
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;

(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */

  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */

  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));

var CameraDirection;

(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));

var CameraResultType;

(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

/***/ }),

/***/ 4241:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4830);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 1327)).then(m => new m.CameraWeb())
});



/***/ }),

/***/ 2838:
/*!************************************************!*\
  !*** ./src/app/form/form.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 1562:
/*!************************************************!*\
  !*** ./src/app/form/form.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n\n\n  <form [formGroup]=\"form\" *ngIf='user'>\n\n    <!-- select gender -->\n    <ion-list>\n      <ion-item>\n        <ion-select placeholder=\"Je suis\" formControlName='gender' (ionChange)=\"selectGender($event)\" required>\n          <ion-select-option value=\"homme\">Homme</ion-select-option>\n          <ion-select-option value=\"femme\">Femme</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <!-- prenom -->\n    <ion-item>\n      <ion-label position=\"floating\">Prénom</ion-label>\n      <ion-input required formControlName='prenom'></ion-input>\n    </ion-item>\n\n    <!-- nom -->\n    <ion-item>\n      <ion-label position=\"floating\">Nom</ion-label>\n      <ion-input required formControlName='nom'></ion-input>\n    </ion-item>\n\n    <!-- tel -->\n    <ion-item>\n      <ion-label position=\"floating\">Téléphone</ion-label>\n      <ion-input required formControlName='tel'></ion-input>\n    </ion-item>\n\n    <!-- adresse -->\n    <ion-item>\n      <ion-label position=\"floating\">Adresse complète</ion-label>\n      <ion-input required formControlName='adresse'></ion-input>\n    </ion-item>\n\n    <!-- email -->\n    <ion-item>\n      <ion-label position=\"floating\">E-mail</ion-label>\n      <ion-input required formControlName='email'></ion-input>\n    </ion-item>\n\n    <!-- pick adjectives -->\n    <ion-list *ngIf=\"user.gender === 'femme'\">\n      <ion-item>\n        <ion-select formControlName='adjs' placeholder=\"Choisir 3 qualités\" [multiple]=\"true\" required\n          (ionChange)=\"selectAdj($event)\">\n          <ion-select-option *ngFor='let i of qualitesFemme' value=\"{{i}}\">{{i}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf=\"user.gender === 'homme'\">\n      <ion-item>\n        <ion-select placeholder=\"Choisir 3 qualités\" [multiple]=\"true\" (ionChange)=\"selectAdj($event)\"\n          formControlName='adjs' required>\n          <ion-select-option *ngFor='let i of qualitesHomme' value=\"{{i}}\">{{i}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-button expand=\"block\" (click)='onSubmit()' [disabled]='form.invalid' [color]='colorBtn'>\n      Enregistrer</ion-button>\n    <!-- <ion-button *ngIf='isModified' [disabled]='form.invalid' color='danger' expand=\"block\" (click)='onSubmit()'>Mettre à\n      jour</ion-button> -->\n\n  </form>\n\n\n\n\n\n\n  <ion-item>\n    <div style='display: flex; flex-direction: column'>\n      <ion-button (click)='onSelectPic()' [disabled]='addPicActive'>Sélectionner une photo de profil\n      </ion-button>\n      <div *ngIf=\"picSizeExceedeed\">\n        <div class='error'>\n          <p>\n            Désolé, l'image est trop lourde.\n          </p>\n          <p>Veuillez choisir une autre image.</p>\n        </div>\n\n      </div>\n    </div>\n  </ion-item>\n\n\n  <ion-grid *ngIf='imageConverted'>\n    <ion-row>\n      <ion-col size=\"6\">\n        <img [src]=\"imageConverted\">\n        <ion-button (click)='onDeletePic()' color=\"danger\">Supprimer</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_form_form_module_ts.js.map