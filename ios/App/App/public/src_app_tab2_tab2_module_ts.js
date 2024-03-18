"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);
/* harmony import */ var _components_add_sub_block_add_sub_block_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/add-sub-block/add-sub-block.module */ 421);









let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _components_add_sub_block_add_sub_block_module__WEBPACK_IMPORTED_MODULE_3__.AddSubBlockPageModule,
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 1597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _components_cover_letter_c_cover_letter_c_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cover-letter-c/cover-letter-c.page */ 6851);
/* harmony import */ var _components_cover_letter_premium1_cover_letter_premium1_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/cover-letter-premium1/cover-letter-premium1.page */ 6783);
/* harmony import */ var _components_cover_letter_simple_cover_letter_simple_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/cover-letter-simple/cover-letter-simple.page */ 6705);
/* harmony import */ var _components_cover_letter_cover_letter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/cover-letter/cover-letter.component */ 3030);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/users.service */ 4961);
/* harmony import */ var _components_cover_letter_premium2_cover_letter_premium2_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/cover-letter-premium2/cover-letter-premium2.page */ 6102);
/* harmony import */ var _components_cover_letter_premium3_cover_letter_premium3_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/cover-letter-premium3/cover-letter-premium3.page */ 9645);
/* harmony import */ var _components_cover_letter_premium4_cover_letter_premium4_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/cover-letter-premium4/cover-letter-premium4.page */ 5339);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _services_purchase_purchase_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/purchase/purchase.service */ 874);


















let Tab2Page = class Tab2Page {
  constructor(usersService, fb, modalCtrl, router, purchaseService) {
    this.usersService = usersService;
    this.fb = fb;
    this.modalCtrl = modalCtrl;
    this.router = router;
    this.purchaseService = purchaseService;
    this.isAccordionExpanded = true;
    this.colorBtn = 'success';
    this.textBtn = 'Enregistrer';
    this.addPicActive = false;
    this.picSizeExceedeed = false;
    this.purchaseState = this.purchaseService.purchaseState; // est-ce que la photo de profil existe ?

    this.selectedPic = localStorage.getItem('pic');

    if (this.selectedPic) {
      console.log(this.selectedPic, 'yes');
      this.imageConverted = this.selectedPic;
    } else {
      this.imageConverted = null;
    }
  }

  xalertMissingInfo(user) {
    console.log(user);

    if (user.adjs.length === 0) {
      console.log('pas de adjs');
    } else {
      console.log('adjs ok');
    }
  } // ngOnInit() {
  //   // check token
  //   this.token = localStorage.getItem('token');
  //   //console.log(token, 'token');
  //   // 1 - je vérifie l'identite du user
  //   if (this.token) {
  //     try {
  //       //console.log('test');
  //       // ici je commente this.usersService.getUser(token).subscribe((data) => { et je remplace avec refreshCollecton
  //       this.usersService.collection(this.token).subscribe((data) => {
  //         //console.log(data.user, 'data');
  //         const { user } = data;
  //         console.log(user, 'user');
  //         if (user) {
  //           this.alertMissingInfo(user);
  //         }
  //         this.user = user;
  //         this.router.navigate(['tabs', 'tab2']);
  //         //console.log(this.user, 'depuis tab2');
  //         this.form = this.fb.group({
  //           intitule: [
  //             this.user?.letters[0]?.intitule || '',
  //             Validators.required,
  //           ],
  //           experience: [
  //             this.user?.letters[0]?.experience || '',
  //             Validators.required,
  //           ],
  //           societe: [
  //             this.user?.letters[0]?.societe || '',
  //             Validators.required,
  //           ],
  //           contact: [this.user?.letters[0]?.contact || 'Madame'],
  //           adresseSociete: [
  //             this.user?.letters[0]?.adresseSociete || '',
  //             Validators.required,
  //           ],
  //           cpVille: [
  //             this.user?.letters[0]?.cpVille || '',
  //             Validators.required,
  //           ],
  //         });
  //       });
  //     } catch (error) {}
  //   } else {
  //     this.router.navigate(['/']);
  //   }
  // }


  ionViewDidEnter() {
    console.log('test enter');
    this.selectedPic = localStorage.getItem('pic');

    if (this.selectedPic) {
      console.log(this.selectedPic, 'yes');
      this.imageConverted = this.selectedPic;
    } else {
      this.imageConverted = null;
    }
  } //tettfdsf  //test


  ngOnInit() {
    this.usersService.userData$.subscribe(data => {
      if (data) {
        console.log(data, 'data depuis tab2'); // Accéder aux données stockées dans le BehaviorSubject
        //const { user } = data;

        this.user = data;
        console.log(this.user, 'userrrr');
        this.form = this.fb.group({
          intitule: [this.user?.letters[0]?.intitule || '', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
          experience: [this.user?.letters[0]?.experience || '', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
          societe: [this.user?.letters[0]?.societe || '', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
          contact: [this.user?.letters[0]?.contact || 'Madame'],
          adresseSociete: [this.user?.letters[0]?.adresseSociete || '', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
          cpVille: [this.user?.letters[0]?.cpVille || '', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]
        });
      }
    });
  }

  ngOnChanges() {}

  onSelectPic() {
    var _this = this;

    return (0,_Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.picSizeExceedeed = false;
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_11__.Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_11__.CameraResultType.Base64,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_11__.CameraSource.Photos
      }); // console.log(image, '[IMAGE ONSELECTPIC]');

      if (image.base64String) {
        console.log(image.base64String, '[IMAGE.BASE64STRING'); // check image size

        const sizeInBytes = image.base64String.length * 0.75;
        const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB

        if (sizeInBytes <= maxSizeInBytes) {
          // pour affichage dans template HTML
          // eslint-disable-next-line prefer-const
          _this.imageConverted = 'data:image/jpeg;base64, ' + image.base64String; //const buffer = this.base64ToBuffer(image.base64String);
          //this.user.pic = this.imageConverted;
          // on store l'image dans le localStorage

          localStorage.setItem('pic', _this.imageConverted); // disabled the add button

          _this.addPicActive = true;
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
  } // étape 1 pour enregistrer les infos


  saveInfos() {
    console.log(this.user); // const updatedUser = { ...this.form.value, ...this.user };
    //console.log(this.user);

    this.user.letters[0] = this.form.value;
    console.log(this.user, 'final user'); // call service

    this.usersService.createApplication(this.user).subscribe(data => {
      this.colorBtn = 'warning';
      this.textBtn = 'Enregistrement en cours';
      setTimeout(() => {
        this.colorBtn = 'success';
        this.textBtn = 'Enregistrer';
      }, 1000);
    });
  } // étape pour stocker la candidature


  onSaved() {
    console.log(this.form.value); // call service

    this.usersService.savedApplication(this.user, this.form.value, this.token).subscribe(data => {
      console.log(data);
      this.colorBtn = 'warning';
      this.textBtn = 'Enregistrement en cours';
      setTimeout(() => {
        this.colorBtn = 'success';
        this.textBtn = 'Enregistrer';
      }, 1000);
    });
  }

  openModal(letterName) {
    var _this2 = this;

    return (0,_Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let componentType;
      console.log(_this2.user);
      const user = _this2.user;
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
          componentType = _components_cover_letter_premium2_cover_letter_premium2_page__WEBPACK_IMPORTED_MODULE_8__.CoverLetterPremium2Page;
          break;

        case 'coverLetterPremiumWaves2':
          componentType = _components_cover_letter_premium3_cover_letter_premium3_page__WEBPACK_IMPORTED_MODULE_9__.CoverLetterPremium3Page;
          break;

        case 'coverLetterPremiumPicGrey':
          componentType = _components_cover_letter_premium4_cover_letter_premium4_page__WEBPACK_IMPORTED_MODULE_10__.CoverLetterPremium4Page;
          break;
        // Add more cases for other component types as needed

        default:
          console.error('Unknown component type:', letterName);
          return;
      } // attention l'objet envoyé (ici user) doit correspondre à l'objet dans @Input()


      const coverLetter = yield _this2.createModal(componentType, {
        user,
        pic: _this2.imageConverted
      });
      yield coverLetter.present(); // Store the modal instance

      _this2.modalInstance = coverLetter;
    })();
  }

  createModal(component, componentProps, cssClass) {
    var _this3 = this;

    return (0,_Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalCtrl.create({
        component,
        cssClass,
        componentProps,
        backdropDismiss: true
      });
      console.log(componentProps); // exists

      yield modal.present();
      return modal;
    })();
  }

  closeModal() {
    var _this4 = this;

    return (0,_Users_macbookpro_Documents_agence_projetsApp_motivpro_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.modalInstance) {
        yield _this4.modalInstance.dismiss();
        _this4.modalInstance = null; // Reset modal instance after dismissal
      }
    })();
  }

};

Tab2Page.ctorParameters = () => [{
  type: _services_users_service__WEBPACK_IMPORTED_MODULE_7__.UsersService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
}, {
  type: _services_purchase_purchase_service__WEBPACK_IMPORTED_MODULE_12__.PurchaseService
}];

Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'app-tab2',
  template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab2Page);
 // refactoriser le html pour itérer
// ajouter l'import d'image avec '@capacitor/camera'
// ajouter generation d'un nouveau texte
// ajouter un model pour le form
// ajouter présentation/onboarding avec swipper.js
// ajouter createdAt

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

/***/ 1597:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\nion-label.sc-ion-label-md-h.sc-ion-label-md-s.md.in-item-color.hydrated {\n  padding: 2rem 0rem;\n}\nion-label {\n  overflow: hidden !important;\n  white-space: normal !important;\n  text-overflow: ellipsis !important;\n  line-height: 3rem;\n}\n.ion-color-light {\n  --ion-color-base: #ababab !important;\n}\nion-select {\n  white-space: break-spaces;\n}\n.inactive-part {\n  opacity: 0.5;\n  /* Réduit l'opacité pour rendre l'élément gris et atténuer son apparence */\n  pointer-events: none;\n  /* Désactive les interactions de pointer (clics, survols, etc.) avec l'élément */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGtCQUFBO0FBRUY7QUFDQTtFQUNFLDJCQUFBO0VBQ0UsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FBRUo7QUFBQTtFQUNFLG9DQUFBO0FBR0Y7QUFEQTtFQUNFLHlCQUFBO0FBSUY7QUFEQTtFQUNFLFlBQUE7RUFDQSwwRUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0ZBQUE7QUFJRiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbC5zYy1pb24tbGFiZWwtbWQtaC5zYy1pb24tbGFiZWwtbWQtcy5tZC5pbi1pdGVtLWNvbG9yLmh5ZHJhdGVkIHtcbiAgcGFkZGluZzogMnJlbSAwcmVtO1xuXG59XG5pb24tbGFiZWx7XG4gIG92ZXJmbG93OiBoaWRkZW4haW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwhaW1wb3J0YW50O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbn1cbi5pb24tY29sb3ItbGlnaHR7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICNhYmFiYWIgIWltcG9ydGFudDtcbn1cbmlvbi1zZWxlY3R7XG4gIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XG59XG5cbi5pbmFjdGl2ZS1wYXJ0IHtcbiAgb3BhY2l0eTogMC41O1xuICAvKiBSw6lkdWl0IGwnb3BhY2l0w6kgcG91ciByZW5kcmUgbCfDqWzDqW1lbnQgZ3JpcyBldCBhdHTDqW51ZXIgc29uIGFwcGFyZW5jZSAqL1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLyogRMOpc2FjdGl2ZSBsZXMgaW50ZXJhY3Rpb25zIGRlIHBvaW50ZXIgKGNsaWNzLCBzdXJ2b2xzLCBldGMuKSBhdmVjIGwnw6lsw6ltZW50ICovXG59XG4iXX0= */";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <!-- <ion-buttons slot=\"start\">\n            <ion-button slot=\"icon\">\n                <ion-icon name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons> -->\n    <ion-title> Créer une candidature </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <app-add-sub-block></app-add-sub-block> -->\n\n\n  <!-- <ion-card color=\"danger\" *ngIf=\"!(user?.adjs && user?.adjs.length > 0)\">\n    <ion-card-header>\n      <ion-card-title>Besoin de compléter vos qualités</ion-card-title>\n      <ion-card-subtitle>N'oubliez pas de choisir trois qualités. Le champ à compléter se trouve en-dessous du champ\n        e-mail. </ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-card-content>\n      <a routerLink='../tab1' style='color:white'>Retournez dans l'onglet Mes Infos</a>\n\n    </ion-card-content>\n  </ion-card> -->\n\n  <ion-accordion-group [value]=\"['first']\" (ionChange)=\"saveInfos()\">\n    <ion-accordion value=\"first\" id='first'>\n      <ion-item slot=\"header\" color=\"light\">\n        <ion-label>Etape 1 - Remplir les informations de la société</ion-label>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">\n        <form [formGroup]=\"form\" *ngIf=\"user\" (ngSubmit)=\"saveInfos()\">\n          <!-- prenom -->\n          <ion-item>\n            <ion-label position=\"floating\">Intitulé du poste (requis)</ion-label>\n            <ion-input formControlName=\"intitule\"></ion-input>\n          </ion-item>\n          <ion-list>\n            <ion-item>\n              <ion-label>Votre expérience</ion-label>\n              <ion-select formControlName=\"experience\" placeholder=\"Niveau d'expérience pour ce poste\">\n                <ion-select-option value=\"debutant\">Débutant</ion-select-option>\n                <ion-select-option value=\"expert\">Déjà exercé un poste similaire</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n          <ion-item>\n            <ion-label position=\"floating\">Société (requis)</ion-label>\n            <ion-input formControlName=\"societe\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Nom du contact avec civilité</ion-label>\n            <ion-label style=\"font-style: italic\" position=\"floating\">Laisser vide si pas de nom disponible</ion-label>\n\n            <ion-input formControlName=\"contact\" placeholder=\"Madame Durand\"></ion-input>\n          </ion-item>\n\n\n\n\n          <ion-item>\n            <ion-label position=\"floating\">Adresse (requis)</ion-label>\n            <ion-input formControlName=\"adresseSociete\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Code Postal et Ville (requis)</ion-label>\n            <ion-input formControlName=\"cpVille\"></ion-input>\n          </ion-item>\n\n          <ion-button [color]=\"colorBtn\" expand=\"block\" type=\"submit\" [disabled]=\"form.invalid\">{{textBtn}}\n          </ion-button>\n        </form>\n      </div>\n    </ion-accordion>\n    <ion-accordion value=\"second\" id='second'>\n      <ion-item slot=\"header\" color=\"light\">\n        <ion-label>Etape 2 - Choisir le modèle</ion-label>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">\n        <!-- lettre 1 -->\n        <ion-card class=\"ion-no-padding\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"8\" class=\"ion-padding\">\n              <ion-row>\n                <ion-col class=\"bold\">\n                  <h5 class=\"ion-no-margin\">Modèle 1</h5>\n\n                  <img src=\"../../assets/lettres-apercus/cover-letter-1.png\" />\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-button color=\"success\" (click)=\"openModal('coverLetterComponent')\">\n                Choisir\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n        <!-- lettre 2 -->\n        <ion-card class=\"ion-no-padding\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"8\" class=\"ion-padding\">\n              <ion-row>\n                <ion-col class=\"bold\">\n                  <h5 class=\"ion-no-margin\">Modèle 2</h5>\n                  <img src=\"../../assets/lettres-apercus/cover-letter.png\" />\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-button color=\"success\" (click)=\"openModal('coverLetterSimplePage')\">\n                Choisir\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n        <!-- lettre 3 -->\n        <ion-card class=\"ion-no-padding\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"8\" class=\"ion-padding\">\n              <ion-row>\n                <ion-col class=\"bold\">\n                  <h5 class=\"ion-no-margin\">Modèle 3</h5>\n                  <img src=\"../../assets/lettres-apercus/cover-letter-2.png\" />\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-button color=\"success\" (click)=\"openModal('coverLetterCPage')\">\n                Choisir\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n\n\n        <!-- ici code quand monétisation en cours -->\n        <!-- <h2 *ngIf='!(purchaseState| async)?.pro'>Accédez à plus de modèles en devenant Premium</h2>\n        <div [ngClass]=\"{'inactive-part': !(purchaseState| async)?.pro}\"> -->\n\n        <div>\n          <ion-card>\n            <ion-item color='success'>\n              <ion-icon name=\"diamond-outline\" style='padding: 10px;'></ion-icon>\n              <h1>Modèles Lettres Premium</h1>\n            </ion-item>\n\n          </ion-card>\n          <!-- lettre 4 premium bubble purple-->\n          <ion-card class=\"ion-no-padding\">\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col size=\"6\" class=\"ion-padding\">\n                <ion-row>\n                  <ion-col class=\"bold\">\n                    <h5 class=\"ion-no-margin\">Modèle Premium Bubble</h5>\n                    <img src=\"../../assets/lettres-apercus/cover-letter-premium-bubble.png\" />\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-button color=\"success\" (click)=\"openModal('coverLetterPremiumBubble')\">\n                  Prévisualiser\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n\n          <!-- lettre 5 premium waves orange -->\n          <ion-card class=\"ion-no-padding\">\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col size=\"6\" class=\"ion-padding\">\n                <ion-row>\n                  <ion-col class=\"bold\">\n                    <h5 class=\"ion-no-margin\">Modèle Premium Waves</h5>\n                    <img src=\"../../assets/lettres-apercus/cover-letter-premium-waves-1.png\" />\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-button color=\"success\" (click)=\"openModal('coverLetterPremiumWaves1')\">\n                  Prévisualiser\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n\n          <!-- lettre 6 premium waves yellow -->\n          <ion-card class=\"ion-no-padding\">\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col size=\"6\" class=\"ion-padding\">\n                <ion-row>\n                  <ion-col class=\"bold\">\n                    <h5 class=\"ion-no-margin\">Modèle Premium Waves Yellish</h5>\n                    <img src=\"../../assets/lettres-apercus/cover-letter-premium-waves-yellish.png\" />\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-button color=\"success\" (click)=\"openModal('coverLetterPremiumWaves2')\">\n                  Prévisualiser\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n\n          <!-- lettre 6 premium blue mountains -->\n          <ion-card class=\"ion-no-padding\">\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col size=\"6\" class=\"ion-padding\">\n                <ion-row>\n                  <ion-col class=\"bold\">\n                    <h5 class=\"ion-no-margin\">Modèle Premium Pic Grey</h5>\n                    <img src=\"../../assets/lettres-apercus/cover-letter-premium-pic-grey.jpg\" />\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-button color=\"success\" (click)=\"openModal('coverLetterPremiumPicGrey')\">\n                  Prévisualiser\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </div>\n\n\n      </div>\n    </ion-accordion>\n\n    <ion-accordion value=\"third\">\n      <ion-item slot=\"header\" color=\"light\">\n        <ion-label>Etape 3 - Sauvegarder votre candidature</ion-label>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">\n        <ion-text color=\"primary\">\n          <p>\n            Pour une meilleur gestion de votre recherche d'emploi, n'oubliez pas\n            d'enregistrer cette candidature dans votre historique.\n          </p>\n        </ion-text>\n        <ion-button expand=\"block\" [color]=\"colorBtn\" (click)=\"onSaved()\">{{this.textBtn}}</ion-button>\n      </div>\n    </ion-accordion>\n  </ion-accordion-group>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <!-- <ion-button expand=\"block\" (click)='onSaved()'>AJOUTER A L'HISTORIQUE</ion-button> -->\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map