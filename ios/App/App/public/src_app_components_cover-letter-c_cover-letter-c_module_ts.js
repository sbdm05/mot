"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_components_cover-letter-c_cover-letter-c_module_ts"],{

/***/ 5934:
/*!****************************************************************************!*\
  !*** ./src/app/components/cover-letter-c/cover-letter-c-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoverLetterCPageRoutingModule": () => (/* binding */ CoverLetterCPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _cover_letter_c_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cover-letter-c.page */ 6851);




const routes = [
    {
        path: '',
        component: _cover_letter_c_page__WEBPACK_IMPORTED_MODULE_0__.CoverLetterCPage
    }
];
let CoverLetterCPageRoutingModule = class CoverLetterCPageRoutingModule {
};
CoverLetterCPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CoverLetterCPageRoutingModule);



/***/ }),

/***/ 123:
/*!********************************************************************!*\
  !*** ./src/app/components/cover-letter-c/cover-letter-c.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoverLetterCPageModule": () => (/* binding */ CoverLetterCPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cover_letter_c_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cover-letter-c-routing.module */ 5934);
/* harmony import */ var _cover_letter_c_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cover-letter-c.page */ 6851);







let CoverLetterCPageModule = class CoverLetterCPageModule {
};
CoverLetterCPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cover_letter_c_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoverLetterCPageRoutingModule
        ],
        declarations: [_cover_letter_c_page__WEBPACK_IMPORTED_MODULE_1__.CoverLetterCPage]
    })
], CoverLetterCPageModule);



/***/ }),

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

/***/ 3909:
/*!*******************************************************************************!*\
  !*** ./src/app/components/cover-letter-c/cover-letter-c.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Zlci1sZXR0ZXItYy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5445:
/*!*******************************************************************************!*\
  !*** ./src/app/components/cover-letter-c/cover-letter-c.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"shade\">\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\n      <ion-button slot=\"icon\">\n        <ion-icon class=\"icon\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios ion-text-capitalize\">Modèle Yellish</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-button (click)=\"closeModal()\">\n    <ion-icon class=\"icon\" name=\"arrow-back-outline\"></ion-icon>Revenir à l'écran d'accueil\n  </ion-button>\n  <div id='main'\n    style='border:none; font-size:16px; padding:10px 35px; margin: 0 auto;font-family: arial;visibility: hidden;'>\n    <div id=\"container\" style='padding: 2rem 5rem;'>\n      <header style='display: flex; align-items: center; border-top: 3px solid black;border-bottom: 3px solid black;'>\n        <div\n          style='flex:1;margin: 24px; border-right: 3px solid black; padding: 16px; background-color:white;text-align: right;'>\n          <!-- ici icône -->\n          <p>\n            <ion-icon name=\"pin\"></ion-icon> {{user.adresse}}\n          </p>\n          <p>\n            <ion-icon name=\"phone-portrait\"></ion-icon> {{user.tel}}\n          </p>\n          <p>\n            <ion-icon name=\"send\"></ion-icon> {{user.email}}\n          </p>\n        </div>\n        <div style='flex:2; font-size:16px; font-weight: 600'>\n\n          <p style='font-size:24px'>{{user.prenom}} {{user.nom}}</p>\n          <p style='padding: 6px; color: white; background-color: rgb(255, 175, 3)'>{{user?.letters[0].intitule}}</p>\n\n        </div>\n\n      </header>\n\n      <section id='contactInfos' style='text-align: right;'>\n        <p>{{user.letters[0].societe}}</p>\n        <p>{{user.letters[0].contact}}</p>\n        <p>{{user.letters[0].adresseSociete}}</p>\n        <p>{{user.letters[0].cpVille}}</p>\n      </section>\n\n      <!-- partie expert -->\n      <section id='content' *ngIf=\"user.letters[0].experience ===  'expert' \" style='text-align: justify;'>\n        <p style='padding:10px 0px; text-align: right;'>Le {{today | date:'dd/MM/yyyy'}}</p>\n        <p style='padding-bottom:10px'>Objet : candidature pour le poste de {{user.letters[0].intitule}}</p>\n        <p *ngIf='user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          {{user.letters[0].contact}},\n        </p>\n        <p *ngIf='!user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          Madame, Monsieur,\n        </p>\n        <!-- premier paragraphe -->\n        <p>\n          Je suis actuellement à la recherche d'un emploi dans votre secteur d'activité, c'est pourquoi, je me permets\n          de\n          vous écrire pour postuler au poste de {{user.letters[0].intitule}}.</p>\n        <!-- second paragraphe -->\n        <p>\n          En effet, j'ai déjà pu exercer à ce poste lors d'une précédente mission. Cette expérience a été très\n          enrichissante et\n          formatrice. Je souhaiterais vivement mettre ces compétences à profit dans votre structure. Dès le début de\n          notre collaboration, vous pourrez constater que je suis {{user.adjs[0]}}, {{user.adjs[1]}} et\n          {{user.adjs[2]}} des qualités essentielles dans ce métier. </p>\n\n        <!-- conclusion -->\n        <p>Je suis disponible pour m'entretenir avec vous, par téléphone ou en personne afin de déterminer comment je\n          pourrais contribuer au mieux au développement de votre entreprise. </p>\n        <p>Je vous remercie de l'attention que vous pourrez accorder à ma candidature,</p>\n        <p>Sincères salutations,</p>\n\n        <p style='margin:24px 0rem; font-weight:600'>{{user.prenom}} {{user.nom}}</p>\n        <div style='border-bottom: 3px solid black;'></div>\n      </section>\n\n      <!-- partie débutant -->\n      <section id='content' style='text-align: justify;' *ngIf=\"user.letters[0].experience ===  'debutant' \">\n        <p style='padding:10px 0px; text-align: right;'>Le {{today | date:'dd/MM/yyyy'}}</p>\n        <p style='padding-bottom:10px'>Objet : candidature pour le poste de {{user.letters[0].intitule}}</p>\n        <p *ngIf='user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          {{user.letters[0].contact}},\n        </p>\n        <p *ngIf='!user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          Madame, Monsieur,\n        </p>\n        <!-- premier paragraphe -->\n        <p>\n          Je suis actuellement à la recherche d'un emploi dans votre secteur d'activité, c'est pourquoi, je me permets\n          de\n          vous écrire pour postuler au poste de {{user.letters[0].intitule}}.\n        </p>\n        <p>\n          <!-- si pas expérience -->\n          <span *ngIf=\"user.gender ==='femme'\">\n            Je débute mon activité professionnelle avec beaucoup d'enthousiasme à l'idée de m'intégrer à une nouvelle\n            équipe et\n            d'acquérir de nouvelles compétences. Ma capacité d'adaptation et mon envie de bien faire les tâches\n            demandées me\n            permettront d'être opérationnelle rapidement. Je souhaiterais vivement mettre ces compétences à profit dans\n            votre\n            structure.\n          </span>\n          <span *ngIf=\"user.gender ==='homme'\">\n            Je débute mon activité professionnelle avec beaucoup d'enthousiasme à l'idée de m'intégrer à une nouvelle\n            équipe et\n            d'acquérir de nouvelles compétences. Ma capacité d'adaptation et mon envie de bien faire les tâches\n            demandées me\n            permettront d'être opérationnel rapidement. Je souhaiterais vivement mettre ces compétences à profit dans\n            votre\n            structure.\n          </span>\n        </p>\n\n        <!-- second paragraphe -->\n\n        <p>Dès le début de notre collaboration, vous pourrez constater que je suis {{user.adjs[0]}}, {{user.adjs[1]}} et\n          {{user.adjs[2]}}, des qualités essentielles dans ce métier. </p>\n        <!-- conclusion -->\n        <p>Je suis disponible pour m'entretenir avec vous, par téléphone ou en personne afin de déterminer comment je\n          pourrais contribuer au mieux au développement de votre entreprise. </p>\n        <p>Je vous remercie de l'attention que vous pourrez accorder à ma candidature,</p>\n        <p>Sincères salutations,</p>\n\n        <p style='margin:24px 0px; font-weight:600'>{{user.prenom}} {{user.nom}}</p>\n        <div style='border-bottom: 3px solid black;'></div>\n      </section>\n\n    </div>\n\n\n\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_components_cover-letter-c_cover-letter-c_module_ts.js.map