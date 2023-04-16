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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cover_letter_c_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cover-letter-c.page.html?ngResource */ 5445);
/* harmony import */ var _cover_letter_c_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cover-letter-c.page.scss?ngResource */ 3909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 7330);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let CoverLetterCPage = class CoverLetterCPage {
    constructor(modalController, pdfGenerator) {
        this.modalController = modalController;
        this.pdfGenerator = pdfGenerator;
        this.today = Date.now();
    }
    closeModal() {
        this.modalController.dismiss();
    }
    downloadLetter() {
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
CoverLetterCPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__.PDFGenerator }
];
CoverLetterCPage.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
CoverLetterCPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-cover-letter-c',
        template: _cover_letter_c_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cover_letter_c_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoverLetterCPage);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cover_letter_simple_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cover-letter-simple.page.html?ngResource */ 8515);
/* harmony import */ var _cover_letter_simple_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cover-letter-simple.page.scss?ngResource */ 508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 7330);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let CoverLetterSimplePage = class CoverLetterSimplePage {
    constructor(modalController, pdfGenerator) {
        this.modalController = modalController;
        this.pdfGenerator = pdfGenerator;
        this.today = Date.now();
    }
    closeModal() {
        this.modalController.dismiss();
    }
    downloadLetter() {
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
};
CoverLetterSimplePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__.PDFGenerator }
];
CoverLetterSimplePage.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
CoverLetterSimplePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-cover-letter-simple',
        template: _cover_letter_simple_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cover_letter_simple_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoverLetterSimplePage);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
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

/***/ 2902:
/*!******************************!*\
  !*** ./src/app/user/user.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor(obj) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
}
// adjs: [
//     {
//       adj1: string;
//       adj2: string;
//       adj3: string;
//     }
//   ];


/***/ }),

/***/ 2483:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4975dbd0.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_1a99aeb7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-1a99aeb7.js */ 4895);
/* harmony import */ var _haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-683b3b3c.js */ 634);
/* harmony import */ var _index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-3f1a7d95.js */ 2172);
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
    (0,_index_1a99aeb7_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };

  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }

    const buttonToModify = currentTouchedButton;
    (0,_index_1a99aeb7_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
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

  return (0,_index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__.h)();
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

/***/ 9013:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-5ad6825d.js ***!
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
    if (keyboardMode && ev.composedPath) {
      const toFocus = ev.composedPath().filter(el => {
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

/***/ 2668:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-ce4f806c.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CoreDelegate),
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _Users_macbookpro_Documents_agence_projetsApp_app_front_back_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-4d272360.js */ 9158);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const attachComponent = /*#__PURE__*/function () {
  var _ref = (0,_Users_macbookpro_Documents_agence_projetsApp_app_front_back_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (delegate, container, component, cssClasses, componentProps, inline) {
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
    yield new Promise(resolve => (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
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
    var _ref2 = (0,_Users_macbookpro_Documents_agence_projetsApp_app_front_back_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parentElement, userComponent, userComponentProps = {}, cssClasses = []) {
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
        yield new Promise(resolve => (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      } else if (BaseComponent.children.length > 0) {
        // If there is no component, then we need to create a new parent
        // element to apply the css classes to.
        const el = (_b = BaseComponent.ownerDocument) === null || _b === void 0 ? void 0 : _b.createElement('div');
        cssClasses.forEach(c => el.classList.add(c)); // Move each child from the original template to the new parent element.

        el.append(...BaseComponent.children); // Append the new parent element to the original parent element.

        BaseComponent.appendChild(el);
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

/***/ 634:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-683b3b3c.js ***!
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
    return !!this.getEngine();
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
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */

const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */


const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */


const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */


const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */


const hapticImpact = options => {
  HapticEngine.impact(options);
};



/***/ }),

/***/ 2286:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-33ffec25.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ win)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * When accessing the window, it is important
 * to account for SSR applications where the
 * window is not available. Code that accesses
 * window when it is not available will crash.
 * Even checking if `window === undefined` will cause
 * apps to crash in SSR.
 *
 * Use win below to access an SSR-safe version
 * of the window.
 *
 * Example 1:
 * Before:
 * if (window.innerWidth > 768) { ... }
 *
 * After:
 * import { win } from 'path/to/this/file';
 * if (win?.innerWidth > 768) { ... }
 *
 * Note: Code inside of this if-block will
 * not run in an SSR environment.
 */
const win = typeof window !== 'undefined' ? window : undefined;


/***/ }),

/***/ 7288:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3413f7be.js ***!
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
/* harmony import */ var _Users_macbookpro_Documents_agence_projetsApp_app_front_back_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-4d272360.js */ 9158);
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

const isIonContent = el => el && el.tagName === ION_CONTENT_TAG_NAME;
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
  var _ref = (0,_Users_macbookpro_Documents_agence_projetsApp_app_front_back_motivation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
    if (isIonContent(el)) {
      yield new Promise(resolve => (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
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

/***/ 2002:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-40bb69ee.js ***!
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

/* Ionicons v6.0.3, ES Modules */
const arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
const checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const close = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>";
const closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>";
const closeSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>";
const ellipseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
const menuOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const menuSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>";
const removeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderThreeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderTwoSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>";
const searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const searchSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";


/***/ }),

/***/ 6524:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-4d5544a0.js ***!
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
const KEYBOARD_THRESHOLD = 150;
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

/***/ 1812:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/swipe-back-fa30a130.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSwipeBackGesture": () => (/* binding */ createSwipeBackGesture)
/* harmony export */ });
/* harmony import */ var _helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-4d272360.js */ 9158);
/* harmony import */ var _dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dir-e8b767a8.js */ 7481);
/* harmony import */ var _index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-3f1a7d95.js */ 2172);
/* harmony import */ var _gesture_controller_17e82006_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gesture-controller-17e82006.js */ 607);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
  const win = el.ownerDocument.defaultView;
  const rtl = (0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
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
    /**
     * TODO: stepValue can sometimes return negative values
     * or values greater than 1 which should not be possible.
     * Need to investigate more to find where the issue is.
     */


    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_0__.l)(0, stepValue, 0.9999), realDur);
  };

  return (0,_index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
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

module.exports = "<ion-header>\n  <ion-toolbar color=\"shade\">\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\n      <ion-button slot=\"icon\">\n        <ion-icon class=\"icon\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios ion-text-capitalize\">Modèle 3</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <div id='main' style='font-size:16px; padding:10px 35px; margin: 0 auto;font-family: arial;'>\n\n      <header style='display: flex; align-items: center; border-top: 3px solid black;border-bottom: 3px solid black;'>\n        <div\n          style='flex:1;margin: 24px; border-right: 3px solid black; padding: 16px; background-color:white;text-align: right;'>\n          <!-- ici icône -->\n          <p>\n            <ion-icon name=\"pin\"></ion-icon> {{user.adresse}}\n          </p>\n          <p>\n            <ion-icon name=\"phone-portrait\"></ion-icon> {{user.tel}}\n          </p>\n          <p>\n            <ion-icon name=\"send\"></ion-icon> {{user.email}}\n          </p>\n        </div>\n        <div style='flex:2; font-size:16px; font-weight: 600'>\n\n          <p style='font-size:24px'>{{user.prenom}} {{user.nom}}</p>\n          <p style='padding: 6px; color: white; background-color: rgb(255, 175, 3)'>{{user?.letters[0].intitule}}</p>\n\n        </div>\n\n      </header>\n\n      <section id='contactInfos' style='text-align: right;'>\n        <p>{{user.letters[0].societe}}</p>\n        <p>{{user.letters[0].contact}}</p>\n        <p>{{user.letters[0].adresseSociete}}</p>\n        <p>{{user.letters[0].cpVille}}</p>\n      </section>\n\n      <!-- partie expert -->\n      <section id='content' *ngIf=\"user.letters[0].experience ===  'expert' \" style='text-align: justify;'>\n        <p style='padding:10px 0px; text-align: right;'>Le {{today | date:'dd/MM/yyyy'}}</p>\n        <p style='padding-bottom:10px'>Objet : candidature pour le poste de {{user.letters[0].intitule}}</p>\n        <p *ngIf='user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          {{user.letters[0].contact}},\n        </p>\n        <p *ngIf='!user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          Madame, Monsieur,\n        </p>\n        <!-- premier paragraphe -->\n        <p>\n          Je suis actuellement à la recherche d'un emploi dans votre secteur d'activité, c'est pourquoi, je me permets de\n          vous écrire pour postuler au poste de {{user.letters[0].intitule}}.</p>\n          <!-- second paragraphe -->\n        <p>\n          En effet, j'ai déjà pu exercer à ce poste lors d'une précédente mission. Cette expérience a été très enrichissante et\n          formatrice. Je souhaiterais vivement mettre ces compétences à profit dans votre structure. Dès le début de notre collaboration, vous pourrez constater que je suis {{user.adjs[0]}}, {{user.adjs[1]}} et\n          {{user.adjs[2]}} des qualités essentielles dans ce métier. </p>\n\n        <!-- conclusion -->\n        <p>Je suis disponible pour m'entretenir avec vous, par téléphone ou en personne afin de déterminer comment je\n          pourrais contribuer au mieux au développement de votre entreprise. </p>\n          <p>Je vous remercie de l'attention que vous pourrez accorder à ma candidature,</p>\n          <p>Sincères salutations,</p>\n\n        <p style='margin:24px 0rem; font-weight:600'>{{user.prenom}} {{user.nom}}</p>\n        <div style='border-bottom: 3px solid black;'></div>\n      </section>\n\n      <!-- partie débutant -->\n      <section id='content' style='text-align: justify;' *ngIf=\"user.letters[0].experience ===  'debutant' \">\n        <p style='padding:10px 0px; text-align: right;'>Le {{today | date:'dd/MM/yyyy'}}</p>\n        <p style='padding-bottom:10px'>Objet : candidature pour le poste de {{user.letters[0].intitule}}</p>\n        <p *ngIf='user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          {{user.letters[0].contact}},\n        </p>\n        <p *ngIf='!user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n        Madame, Monsieur,\n        </p>\n        <!-- premier paragraphe -->\n        <p>\n          Je suis actuellement à la recherche d'un emploi dans votre secteur d'activité, c'est pourquoi, je me permets de\n          vous écrire pour postuler au poste de {{user.letters[0].intitule}}.\n        </p>\n        <p>\n          <!-- si pas expérience -->\n          <span *ngIf=\"user.gender ==='femme'\">\n            Je débute mon activité professionnelle avec beaucoup d'enthousiasme à l'idée de m'intégrer à une nouvelle équipe et\n            d'acquérir de nouvelles compétences. Ma capacité d'adaptation et mon envie de bien faire les tâches demandées me\n            permettront d'être opérationnelle rapidement. Je souhaiterais vivement mettre ces compétences à profit dans votre\n            structure.\n          </span>\n          <span *ngIf=\"user.gender ==='homme'\">\n            Je débute mon activité professionnelle avec beaucoup d'enthousiasme à l'idée de m'intégrer à une nouvelle équipe et\n            d'acquérir de nouvelles compétences. Ma capacité d'adaptation et mon envie de bien faire les tâches demandées me\n            permettront d'être opérationnel rapidement. Je souhaiterais vivement mettre ces compétences à profit dans votre\n            structure.\n          </span>\n        </p>\n\n        <!-- second paragraphe -->\n\n        <p>Dès le début de notre collaboration, vous pourrez constater que je suis {{user.adjs[0]}}, {{user.adjs[1]}} et\n          {{user.adjs[2]}}, des qualités essentielles dans ce métier. </p>\n        <!-- conclusion -->\n        <p>Je suis disponible pour m'entretenir avec vous, par téléphone ou en personne afin de déterminer comment je\n          pourrais contribuer au mieux au développement de votre entreprise. </p>\n          <p>Je vous remercie de l'attention que vous pourrez accorder à ma candidature,</p>\n          <p>Sincères salutations,</p>\n\n        <p style='margin:24px 0px; font-weight:600'>{{user.prenom}} {{user.nom}}</p>\n        <div style='border-bottom: 3px solid black;'></div>\n      </section>\n\n\n    </div>\n</ion-content>\n\n\n<ion-footer (click)=\"downloadLetter()\">\n  <ion-toolbar color=\"success\" class=\"ion-padding-horizontal\">\n    <div class=\"ion-text-center\">\n      <h4 class=\"ion-no-margin\">Télécharger la lettre</h4>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ }),

/***/ 8515:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/cover-letter-simple/cover-letter-simple.page.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"shade\">\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\n      <ion-button slot=\"icon\">\n        <ion-icon class=\"icon\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios ion-text-capitalize\">Modèle 2</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n\n  <div id='main' style='font-family: arial; font-size:16px; padding:10px 35px'>\n    <header style='display: flex; text-align: left;'>\n      <div style='flex:1; background-color:white;font-size:16px;'>\n        <!-- ici icône -->\n        <p>{{user.prenom}} {{user.nom}}</p>\n        <p>\n          <ion-icon name=\"pin\"></ion-icon> {{user.adresse}}\n        </p>\n        <p>\n          <ion-icon name=\"phone-portrait\"></ion-icon> {{user.tel}}\n        </p>\n        <p>\n          <ion-icon name=\"send\"></ion-icon> {{user.email}}\n        </p>\n\n\n      </div>\n    </header>\n\n    <section id='contactInfos' style='text-align: right;'>\n      <p>{{user.letters[0].societe}}</p>\n      <p>{{user.letters[0].contact}}</p>\n      <p>{{user.letters[0].adresseSociete}}</p>\n      <p>{{user.letters[0].cpVille}}</p>\n    </section>\n\n    <!-- partie expert -->\n    <section id='content' style='text-align: justify;' *ngIf=\"user.letters[0].experience ===  'expert' \">\n      <p style='padding-bottom:35px; text-align: right;'>Le {{today | date:'dd/MM/yyyy'}}</p>\n      <p style='padding-bottom:10px'>Objet : candidature pour le poste de {{user.letters[0].intitule}}</p>\n      <p *ngIf='user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n        {{user.letters[0].contact}},\n      </p>\n      <p *ngIf='!user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n        Madame, Monsieur,\n      </p>\n      <!-- premier paragraphe -->\n\n    <p>\n      Je suis actuellement à la recherche d'un emploi dans votre secteur d'activité, c'est pourquoi, je me permets de vous\n      écrire pour postuler au poste de {{user.letters[0].intitule}}.\n    </p>\n    <p>\n      <!-- si expérience -->\n      En effet, j'ai déjà pu exercer à ce poste lors d'une précédente mission. Cette expérience a été très enrichissante et\n      formatrice. Je souhaiterais vivement mettre ces compétences à profit dans votre structure.\n    </p>\n\n\n      <!-- second paragraphe -->\n      <p>Dès le début de notre collaboration, vous pourrez constater que je suis {{user.adjs[0]}}, {{user.adjs[1]}} et\n        {{user.adjs[2]}} des qualités essentielles dans ce métier. </p>\n      <!-- conclusion -->\n      <p>Je suis disponible pour m'entretenir avec vous, par téléphone ou en personne afin de déterminer comment je\n        pourrais contribuer au mieux au développement de votre entreprise. </p>\n        <p>Je vous remercie de l'attention que vous pourrez accorder à ma candidature,</p>\n        <p>Sincères salutations,</p>\n\n      <p>{{user.prenom}} {{user.nom}}</p>\n\n    </section>\n\n    <!-- partie débutant -->\n    <section id='content' style='text-align: justify;' *ngIf=\"user.letters[0].experience ===  'debutant' \">\n      <p style='padding-bottom:35px; text-align: right;'>Le {{today | date:'dd/MM/yyyy'}}</p>\n      <p style='padding-bottom:10px'>Objet : candidature pour le poste de {{user.letters[0].intitule}}</p>\n      <p *ngIf='user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n        {{user.letters[0].contact}},\n      </p>\n      <p *ngIf='!user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n        Madame, Monsieur,\n      </p>\n\n      <!-- premier paragraphe -->\n      <p>\n        Je suis actuellement à la recherche d'un emploi dans votre secteur d'activité, c'est pourquoi, je me permets de\n        vous\n        écrire pour postuler au poste de {{user.letters[0].intitule}}.\n      </p>\n        <!-- si expérience -->\n        <p>\n          <!-- si pas expérience -->\n          <span *ngIf=\"user.gender ==='femme'\">\n            Je débute mon activité professionnelle avec beaucoup d'enthousiasme à l'idée de m'intégrer à une nouvelle équipe et\n            d'acquérir de nouvelles compétences. Ma capacité d'adaptation et mon envie de bien faire les tâches demandées me\n            permettront d'être opérationnelle rapidement. Je souhaiterais vivement mettre ces compétences à profit dans votre\n            structure.\n          </span>\n          <span *ngIf=\"user.gender ==='homme'\">\n            Je débute mon activité professionnelle avec beaucoup d'enthousiasme à l'idée de m'intégrer à une nouvelle équipe et\n            d'acquérir de nouvelles compétences. Ma capacité d'adaptation et mon envie de bien faire les tâches demandées me\n            permettront d'être opérationnel rapidement. Je souhaiterais vivement mettre ces compétences à profit dans votre\n            structure.\n          </span>\n        </p>\n\n      <!-- second paragraphe -->\n\n      <p>Dès le début de notre collaboration, vous pourrez constater que je suis {{user.adjs[0]}}, {{user.adjs[1]}} et\n        {{user.adjs[2]}}, des qualités essentielles dans ce métier. </p>\n      <!-- conclusion -->\n      <p>Je suis disponible pour m'entretenir avec vous, par téléphone ou en personne afin de déterminer comment je\n        pourrais\n        contribuer au mieux au développement de votre entreprise. </p>\n        <p>Je vous remercie de l'attention que vous pourrez accorder à ma candidature,</p>\n        <p>Sincères salutations,</p>\n\n      <p>{{user.prenom}} {{user.nom}}</p>\n\n    </section>\n\n\n  </div>\n\n\n\n  <ion-footer (click)=\"downloadLetter()\">\n    <ion-toolbar color=\"success\" class=\"ion-padding-horizontal\">\n      <div class=\"ion-text-center\">\n        <h4 class=\"ion-no-margin\">Télécharger la lettre</h4>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n";

/***/ }),

/***/ 959:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHckUsS0FBbEM7SUFDQSxJQUFJdUUsT0FBTyxHQUFHLENBQWQ7O0lBQ0EsSUFBSUQsZUFBZSxHQUFHLENBQXRCLEVBQXlCO01BQ3ZCLE1BQU1oRCxHQUFHLEdBQUdnRCxlQUFlLEdBQUcvRCxJQUFJLENBQUNpRSxHQUFMLENBQVNOLFFBQVQsQ0FBOUI7TUFDQUssT0FBTyxHQUFHaEUsSUFBSSxDQUFDa0UsR0FBTCxDQUFTbkQsR0FBVCxFQUFjLEdBQWQsQ0FBVjtJQUNEO0lBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7O0lBQ0krQixZQUFZLENBQUNlLGNBQUQsRUFBaUJILFNBQVMsSUFBSSxDQUFiLEdBQWlCLElBQWpCLEdBQXdCakIsdURBQUssQ0FBQyxDQUFELEVBQUlpQixTQUFKLEVBQWUsTUFBZixDQUE5QyxFQUFzRU0sT0FBdEUsQ0FBWjtFQUNELENBckJEOztFQXNCQSxPQUFPdFMsaUVBQWEsQ0FBQztJQUNuQkUsRUFEbUI7SUFFbkJxQixXQUFXLEVBQUUsY0FGTTtJQUduQmtSLGVBQWUsRUFBRSxFQUhFO0lBSW5CalIsU0FBUyxFQUFFLEVBSlE7SUFLbkJzUSxRQUxtQjtJQU1uQnJRLE9BQU8sRUFBRXlQLGNBTlU7SUFPbkJyUCxNQVBtQjtJQVFuQkM7RUFSbUIsQ0FBRCxDQUFwQjtBQVVELENBL0REIiwic291cmNlcyI6WyIuL3NyYy9hcHAvY29tcG9uZW50cy9jb3Zlci1sZXR0ZXItYy9jb3Zlci1sZXR0ZXItYy5wYWdlLnRzIiwiLi9zcmMvYXBwL2NvbXBvbmVudHMvY292ZXItbGV0dGVyLXNpbXBsZS9jb3Zlci1sZXR0ZXItc2ltcGxlLnBhZ2UudHMiLCIuL3NyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi9zcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL2V4cGxvcmUtY29udGFpbmVyLm1vZHVsZS50cyIsIi4vc3JjL2FwcC91c2VyL3VzZXIudHMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9idXR0b24tYWN0aXZlLTQ5NzVkYmQwLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vZGlyLWU4Yjc2N2E4LmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vZm9jdXMtdmlzaWJsZS01YWQ2ODI1ZC5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2ZyYW1ld29yay1kZWxlZ2F0ZS1jZTRmODA2Yy5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2hhcHRpYy02ODNiM2IzYy5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTMzZmZlYzI1LmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW5kZXgtMzQxM2Y3YmUuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pbmRleC00MGJiNjllZS5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2tleWJvYXJkLTRkNTU0NGEwLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20va2V5Ym9hcmQtY29udHJvbGxlci03M2FmNjJiMi5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3NwaW5uZXItY29uZmlncy01ZDZiNmZlNy5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3N3aXBlLWJhY2stZmEzMGExMzAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBERkdlbmVyYXRvciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvcGRmLWdlbmVyYXRvci9uZ3gnO1xuaW1wb3J0IHsgTW9kYWxDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ3NyYy9hcHAvdXNlci91c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNvdmVyLWxldHRlci1jJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvdmVyLWxldHRlci1jLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvdmVyLWxldHRlci1jLnBhZ2Uuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZlckxldHRlckNQYWdlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB1c2VyOiBVc2VyO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHRvZGF5OiBudW1iZXIgPSBEYXRlLm5vdygpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbW9kYWxDb250cm9sbGVyOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBwZGZHZW5lcmF0b3I6IFBERkdlbmVyYXRvclxuICApIHt9XG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5tb2RhbENvbnRyb2xsZXIuZGlzbWlzcygpO1xuICB9XG5cbiAgZG93bmxvYWRMZXR0ZXIoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5pbm5lckhUTUw7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGRvY3VtZW50U2l6ZTogJ0E0JyxcbiAgICAgIHR5cGU6ICdzaGFyZScsXG4gICAgICAvLyBsYW5kc2NhcGU6ICdwb3J0cmFpdCcsXG4gICAgICBmaWxlTmFtZTogJ2NvdmVyLWxldHRlci5wZGYnLFxuICAgIH07XG4gICAgdGhpcy5wZGZHZW5lcmF0b3JcbiAgICAgIC5mcm9tRGF0YSh0aGlzLmNvbnRlbnQsIG9wdGlvbnMpXG4gICAgICAudGhlbigoYmFzZTY0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPSycsIGJhc2U2NCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIsICdJbnZvaWNlIFBhZ2UgbmdPbkluaXQnKTtcbiAgfVxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIsICdJbnZvaWNlIFBhZ2VjaGFuZ2VzJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUERGR2VuZXJhdG9yIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9wZGYtZ2VuZXJhdG9yL25neCc7XG5pbXBvcnQgeyBNb2RhbENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnc3JjL2FwcC91c2VyL3VzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY292ZXItbGV0dGVyLXNpbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb3Zlci1sZXR0ZXItc2ltcGxlLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvdmVyLWxldHRlci1zaW1wbGUucGFnZS5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENvdmVyTGV0dGVyU2ltcGxlUGFnZSAge1xuICBASW5wdXQoKSB1c2VyOiBVc2VyO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHRvZGF5OiBudW1iZXIgPSBEYXRlLm5vdygpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbW9kYWxDb250cm9sbGVyOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBwZGZHZW5lcmF0b3I6IFBERkdlbmVyYXRvclxuICApIHt9XG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5tb2RhbENvbnRyb2xsZXIuZGlzbWlzcygpO1xuICB9XG5cbiAgZG93bmxvYWRMZXR0ZXIoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5pbm5lckhUTUw7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGRvY3VtZW50U2l6ZTogJ0E0JyxcbiAgICAgIHR5cGU6ICdzaGFyZScsXG4gICAgICAvLyBsYW5kc2NhcGU6ICdwb3J0cmFpdCcsXG4gICAgICBmaWxlTmFtZTogJ2NvdmVyLWxldHRlci5wZGYnLFxuICAgIH07XG4gICAgdGhpcy5wZGZHZW5lcmF0b3JcbiAgICAgIC5mcm9tRGF0YSh0aGlzLmNvbnRlbnQsIG9wdGlvbnMpXG4gICAgICAudGhlbigoYmFzZTY0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPSycsIGJhc2U2NCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1leHBsb3JlLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2V4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEV4cGxvcmVDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBFeHBsb3JlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIElvbmljTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbRXhwbG9yZUNvbnRhaW5lckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtFeHBsb3JlQ29udGFpbmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBFeHBsb3JlQ29udGFpbmVyQ29tcG9uZW50TW9kdWxlIHt9XG4iLCJleHBvcnQgY2xhc3MgVXNlciB7XG4gIF9pZDogc3RyaW5nO1xuICBnZW5kZXI6IHN0cmluZztcbiAgcHJlbm9tOiBzdHJpbmc7XG4gIG5vbTogc3RyaW5nO1xuICB0ZWw6IG51bWJlcjtcbiAgYWRyZXNzZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwd2Q6IHN0cmluZztcbiAgYWRqczogW3N0cmluZywgc3RyaW5nLCBzdHJpbmddO1xuICBsZXR0ZXJzOiBbXG4gICAge1xuICAgICAgaW50aXR1bGU6IHN0cmluZztcbiAgICAgIHNvY2lldGU6IHN0cmluZztcbiAgICAgIGNvbnRhY3Q6IHN0cmluZztcbiAgICAgIGFkcmVzc2VTb2NpZXRlOiBzdHJpbmc7XG4gICAgICBjcFZpbGxlOiBzdHJpbmc7XG4gICAgICBleHBlcmllbmNlOiBzdHJpbmc7XG4gICAgfVxuICBdO1xuICBzYXZlZExldHRlcnM6IFtcbiAgICB7XG4gICAgICBuZXdWYWx1ZToge1xuICAgICAgICBpbnRpdHVsZTogc3RyaW5nO1xuICAgICAgICBzb2NpZXRlOiBzdHJpbmc7XG4gICAgICAgIGNvbnRhY3Q6IHN0cmluZztcbiAgICAgICAgYWRyZXNzZVNvY2lldGU6IHN0cmluZztcbiAgICAgICAgY3BWaWxsZTogc3RyaW5nO1xuICAgICAgICBleHBlcmllbmNlOiBzdHJpbmc7XG4gICAgICB9O1xuICAgICAgZGF0ZTogc3RyaW5nO1xuICAgICAgX2lkOiBudW1iZXI7XG4gICAgfVxuICBdO1xuICBjb25zdHJ1Y3RvcihvYmo/OiBQYXJ0aWFsPFVzZXI+KSB7XG4gICAgaWYgKG9iaikge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmopO1xuICAgIH1cbiAgfVxufVxuXG4vLyBhZGpzOiBbXG4vLyAgICAge1xuLy8gICAgICAgYWRqMTogc3RyaW5nO1xuLy8gICAgICAgYWRqMjogc3RyaW5nO1xuLy8gICAgICAgYWRqMzogc3RyaW5nO1xuLy8gICAgIH1cbi8vICAgXTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBjIGFzIHdyaXRlVGFzayB9IGZyb20gJy4vaW5kZXgtMWE5OWFlYjcuanMnO1xuaW1wb3J0IHsgaCBhcyBoYXB0aWNTZWxlY3Rpb25FbmQsIGEgYXMgaGFwdGljU2VsZWN0aW9uU3RhcnQsIGIgYXMgaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCB9IGZyb20gJy4vaGFwdGljLTY4M2IzYjNjLmpzJztcbmltcG9ydCB7IGNyZWF0ZUdlc3R1cmUgfSBmcm9tICcuL2luZGV4LTNmMWE3ZDk1LmpzJztcblxuY29uc3QgY3JlYXRlQnV0dG9uQWN0aXZlR2VzdHVyZSA9IChlbCwgaXNCdXR0b24pID0+IHtcbiAgbGV0IGN1cnJlbnRUb3VjaGVkQnV0dG9uO1xuICBsZXQgaW5pdGlhbFRvdWNoZWRCdXR0b247XG4gIGNvbnN0IGFjdGl2YXRlQnV0dG9uQXRQb2ludCA9ICh4LCB5LCBoYXB0aWNGZWVkYmFja0ZuKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcbiAgICBpZiAoIXRhcmdldCB8fCAhaXNCdXR0b24odGFyZ2V0KSkge1xuICAgICAgY2xlYXJBY3RpdmVCdXR0b24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRhcmdldCAhPT0gY3VycmVudFRvdWNoZWRCdXR0b24pIHtcbiAgICAgIGNsZWFyQWN0aXZlQnV0dG9uKCk7XG4gICAgICBzZXRBY3RpdmVCdXR0b24odGFyZ2V0LCBoYXB0aWNGZWVkYmFja0ZuKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNldEFjdGl2ZUJ1dHRvbiA9IChidXR0b24sIGhhcHRpY0ZlZWRiYWNrRm4pID0+IHtcbiAgICBjdXJyZW50VG91Y2hlZEJ1dHRvbiA9IGJ1dHRvbjtcbiAgICBpZiAoIWluaXRpYWxUb3VjaGVkQnV0dG9uKSB7XG4gICAgICBpbml0aWFsVG91Y2hlZEJ1dHRvbiA9IGN1cnJlbnRUb3VjaGVkQnV0dG9uO1xuICAgIH1cbiAgICBjb25zdCBidXR0b25Ub01vZGlmeSA9IGN1cnJlbnRUb3VjaGVkQnV0dG9uO1xuICAgIHdyaXRlVGFzaygoKSA9PiBidXR0b25Ub01vZGlmeS5jbGFzc0xpc3QuYWRkKCdpb24tYWN0aXZhdGVkJykpO1xuICAgIGhhcHRpY0ZlZWRiYWNrRm4oKTtcbiAgfTtcbiAgY29uc3QgY2xlYXJBY3RpdmVCdXR0b24gPSAoZGlzcGF0Y2hDbGljayA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50VG91Y2hlZEJ1dHRvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBidXR0b25Ub01vZGlmeSA9IGN1cnJlbnRUb3VjaGVkQnV0dG9uO1xuICAgIHdyaXRlVGFzaygoKSA9PiBidXR0b25Ub01vZGlmeS5jbGFzc0xpc3QucmVtb3ZlKCdpb24tYWN0aXZhdGVkJykpO1xuICAgIC8qKlxuICAgICAqIENsaWNraW5nIG9uIG9uZSBidXR0b24sIGJ1dCByZWxlYXNpbmcgb24gYW5vdGhlciBidXR0b25cbiAgICAgKiBkb2VzIG5vdCBkaXNwYXRjaCBhIGNsaWNrIGV2ZW50IGluIGJyb3dzZXJzLCBzbyB3ZVxuICAgICAqIG5lZWQgdG8gZG8gaXQgbWFudWFsbHkgaGVyZS4gU29tZSBicm93c2VycyB3aWxsXG4gICAgICogZGlzcGF0Y2ggYSBjbGljayBpZiBjbGlja2luZyBvbiBvbmUgYnV0dG9uLCBkcmFnZ2luZyBvdmVyXG4gICAgICogYW5vdGhlciBidXR0b24sIGFuZCByZWxlYXNpbmcgb24gdGhlIG9yaWdpbmFsIGJ1dHRvbi4gSW4gdGhhdFxuICAgICAqIGNhc2UsIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHdlIGRvIG5vdCBjYXVzZSBhIGRvdWJsZSBjbGljayB0aGVyZS5cbiAgICAgKi9cbiAgICBpZiAoZGlzcGF0Y2hDbGljayAmJiBpbml0aWFsVG91Y2hlZEJ1dHRvbiAhPT0gY3VycmVudFRvdWNoZWRCdXR0b24pIHtcbiAgICAgIGN1cnJlbnRUb3VjaGVkQnV0dG9uLmNsaWNrKCk7XG4gICAgfVxuICAgIGN1cnJlbnRUb3VjaGVkQnV0dG9uID0gdW5kZWZpbmVkO1xuICB9O1xuICByZXR1cm4gY3JlYXRlR2VzdHVyZSh7XG4gICAgZWwsXG4gICAgZ2VzdHVyZU5hbWU6ICdidXR0b25BY3RpdmVEcmFnJyxcbiAgICB0aHJlc2hvbGQ6IDAsXG4gICAgb25TdGFydDogKGV2KSA9PiBhY3RpdmF0ZUJ1dHRvbkF0UG9pbnQoZXYuY3VycmVudFgsIGV2LmN1cnJlbnRZLCBoYXB0aWNTZWxlY3Rpb25TdGFydCksXG4gICAgb25Nb3ZlOiAoZXYpID0+IGFjdGl2YXRlQnV0dG9uQXRQb2ludChldi5jdXJyZW50WCwgZXYuY3VycmVudFksIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQpLFxuICAgIG9uRW5kOiAoKSA9PiB7XG4gICAgICBjbGVhckFjdGl2ZUJ1dHRvbih0cnVlKTtcbiAgICAgIGhhcHRpY1NlbGVjdGlvbkVuZCgpO1xuICAgICAgaW5pdGlhbFRvdWNoZWRCdXR0b24gPSB1bmRlZmluZWQ7XG4gICAgfSxcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVCdXR0b25BY3RpdmVHZXN0dXJlIGFzIGMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBkb2N1bWVudCBvciBob3N0IGVsZW1lbnRcbiAqIGhhcyBhIGBkaXJgIHNldCB0byBgcnRsYC4gVGhlIGhvc3QgdmFsdWUgd2lsbCBhbHdheXNcbiAqIHRha2UgcHJpb3JpdHkgb3ZlciB0aGUgcm9vdCBkb2N1bWVudCB2YWx1ZS5cbiAqL1xuY29uc3QgaXNSVEwgPSAoaG9zdEVsKSA9PiB7XG4gIGlmIChob3N0RWwpIHtcbiAgICBpZiAoaG9zdEVsLmRpciAhPT0gJycpIHtcbiAgICAgIHJldHVybiBob3N0RWwuZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKGRvY3VtZW50ID09PSBudWxsIHx8IGRvY3VtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkb2N1bWVudC5kaXIudG9Mb3dlckNhc2UoKSkgPT09ICdydGwnO1xufTtcblxuZXhwb3J0IHsgaXNSVEwgYXMgaSB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmNvbnN0IElPTl9GT0NVU0VEID0gJ2lvbi1mb2N1c2VkJztcbmNvbnN0IElPTl9GT0NVU0FCTEUgPSAnaW9uLWZvY3VzYWJsZSc7XG5jb25zdCBGT0NVU19LRVlTID0gW1xuICAnVGFiJyxcbiAgJ0Fycm93RG93bicsXG4gICdTcGFjZScsXG4gICdFc2NhcGUnLFxuICAnICcsXG4gICdTaGlmdCcsXG4gICdFbnRlcicsXG4gICdBcnJvd0xlZnQnLFxuICAnQXJyb3dSaWdodCcsXG4gICdBcnJvd1VwJyxcbiAgJ0hvbWUnLFxuICAnRW5kJyxcbl07XG5jb25zdCBzdGFydEZvY3VzVmlzaWJsZSA9IChyb290RWwpID0+IHtcbiAgbGV0IGN1cnJlbnRGb2N1cyA9IFtdO1xuICBsZXQga2V5Ym9hcmRNb2RlID0gdHJ1ZTtcbiAgY29uc3QgcmVmID0gcm9vdEVsID8gcm9vdEVsLnNoYWRvd1Jvb3QgOiBkb2N1bWVudDtcbiAgY29uc3Qgcm9vdCA9IHJvb3RFbCA/IHJvb3RFbCA6IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IHNldEZvY3VzID0gKGVsZW1lbnRzKSA9PiB7XG4gICAgY3VycmVudEZvY3VzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKElPTl9GT0NVU0VEKSk7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoSU9OX0ZPQ1VTRUQpKTtcbiAgICBjdXJyZW50Rm9jdXMgPSBlbGVtZW50cztcbiAgfTtcbiAgY29uc3QgcG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAga2V5Ym9hcmRNb2RlID0gZmFsc2U7XG4gICAgc2V0Rm9jdXMoW10pO1xuICB9O1xuICBjb25zdCBvbktleWRvd24gPSAoZXYpID0+IHtcbiAgICBrZXlib2FyZE1vZGUgPSBGT0NVU19LRVlTLmluY2x1ZGVzKGV2LmtleSk7XG4gICAgaWYgKCFrZXlib2FyZE1vZGUpIHtcbiAgICAgIHNldEZvY3VzKFtdKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uRm9jdXNpbiA9IChldikgPT4ge1xuICAgIGlmIChrZXlib2FyZE1vZGUgJiYgZXYuY29tcG9zZWRQYXRoKSB7XG4gICAgICBjb25zdCB0b0ZvY3VzID0gZXYuY29tcG9zZWRQYXRoKCkuZmlsdGVyKChlbCkgPT4ge1xuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhJT05fRk9DVVNBQkxFKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHNldEZvY3VzKHRvRm9jdXMpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgb25Gb2N1c291dCA9ICgpID0+IHtcbiAgICBpZiAocmVmLmFjdGl2ZUVsZW1lbnQgPT09IHJvb3QpIHtcbiAgICAgIHNldEZvY3VzKFtdKTtcbiAgICB9XG4gIH07XG4gIHJlZi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlkb3duKTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvbkZvY3VzaW4pO1xuICByZWYuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkZvY3Vzb3V0KTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBwb2ludGVyRG93bik7XG4gIHJlZi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBwb2ludGVyRG93bik7XG4gIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xuICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgb25Gb2N1c2luKTtcbiAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkZvY3Vzb3V0KTtcbiAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHBvaW50ZXJEb3duKTtcbiAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgcG9pbnRlckRvd24pO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGRlc3Ryb3ksXG4gICAgc2V0Rm9jdXMsXG4gIH07XG59O1xuXG5leHBvcnQgeyBzdGFydEZvY3VzVmlzaWJsZSB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IGMgYXMgY29tcG9uZW50T25SZWFkeSB9IGZyb20gJy4vaGVscGVycy00ZDI3MjM2MC5qcyc7XG5cbmNvbnN0IGF0dGFjaENvbXBvbmVudCA9IGFzeW5jIChkZWxlZ2F0ZSwgY29udGFpbmVyLCBjb21wb25lbnQsIGNzc0NsYXNzZXMsIGNvbXBvbmVudFByb3BzLCBpbmxpbmUpID0+IHtcbiAgdmFyIF9hO1xuICBpZiAoZGVsZWdhdGUpIHtcbiAgICByZXR1cm4gZGVsZWdhdGUuYXR0YWNoVmlld1RvRG9tKGNvbnRhaW5lciwgY29tcG9uZW50LCBjb21wb25lbnRQcm9wcywgY3NzQ2xhc3Nlcyk7XG4gIH1cbiAgaWYgKCFpbmxpbmUgJiYgdHlwZW9mIGNvbXBvbmVudCAhPT0gJ3N0cmluZycgJiYgIShjb21wb25lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZyYW1ld29yayBkZWxlZ2F0ZSBpcyBtaXNzaW5nJyk7XG4gIH1cbiAgY29uc3QgZWwgPSB0eXBlb2YgY29tcG9uZW50ID09PSAnc3RyaW5nJyA/IChfYSA9IGNvbnRhaW5lci5vd25lckRvY3VtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY3JlYXRlRWxlbWVudChjb21wb25lbnQpIDogY29tcG9uZW50O1xuICBpZiAoY3NzQ2xhc3Nlcykge1xuICAgIGNzc0NsYXNzZXMuZm9yRWFjaCgoYykgPT4gZWwuY2xhc3NMaXN0LmFkZChjKSk7XG4gIH1cbiAgaWYgKGNvbXBvbmVudFByb3BzKSB7XG4gICAgT2JqZWN0LmFzc2lnbihlbCwgY29tcG9uZW50UHJvcHMpO1xuICB9XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbCk7XG4gIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBjb21wb25lbnRPblJlYWR5KGVsLCByZXNvbHZlKSk7XG4gIHJldHVybiBlbDtcbn07XG5jb25zdCBkZXRhY2hDb21wb25lbnQgPSAoZGVsZWdhdGUsIGVsZW1lbnQpID0+IHtcbiAgaWYgKGVsZW1lbnQpIHtcbiAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIHJldHVybiBkZWxlZ2F0ZS5yZW1vdmVWaWV3RnJvbURvbShjb250YWluZXIsIGVsZW1lbnQpO1xuICAgIH1cbiAgICBlbGVtZW50LnJlbW92ZSgpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbn07XG5jb25zdCBDb3JlRGVsZWdhdGUgPSAoKSA9PiB7XG4gIGxldCBCYXNlQ29tcG9uZW50O1xuICBsZXQgUmVmZXJlbmNlO1xuICBjb25zdCBhdHRhY2hWaWV3VG9Eb20gPSBhc3luYyAocGFyZW50RWxlbWVudCwgdXNlckNvbXBvbmVudCwgdXNlckNvbXBvbmVudFByb3BzID0ge30sIGNzc0NsYXNzZXMgPSBbXSkgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgQmFzZUNvbXBvbmVudCA9IHBhcmVudEVsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogSWYgcGFzc2luZyBpbiBhIGNvbXBvbmVudCB2aWEgdGhlIGBjb21wb25lbnRgIHByb3BzXG4gICAgICogd2UgbmVlZCB0byBhcHBlbmQgaXQgaW5zaWRlIG9mIG91ciBvdmVybGF5IGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBpZiAodXNlckNvbXBvbmVudCkge1xuICAgICAgLyoqXG4gICAgICAgKiBJZiBwYXNzaW5nIGluIHRoZSB0YWcgbmFtZSwgY3JlYXRlXG4gICAgICAgKiB0aGUgZWxlbWVudCBvdGhlcndpc2UganVzdCBnZXQgYSByZWZlcmVuY2VcbiAgICAgICAqIHRvIHRoZSBjb21wb25lbnQuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGVsID0gdHlwZW9mIHVzZXJDb21wb25lbnQgPT09ICdzdHJpbmcnID8gKF9hID0gQmFzZUNvbXBvbmVudC5vd25lckRvY3VtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY3JlYXRlRWxlbWVudCh1c2VyQ29tcG9uZW50KSA6IHVzZXJDb21wb25lbnQ7XG4gICAgICAvKipcbiAgICAgICAqIEFkZCBhbnkgY3NzIGNsYXNzZXMgcGFzc2VkIGluXG4gICAgICAgKiB2aWEgdGhlIGNzc0NsYXNzZXMgcHJvcCBvbiB0aGUgb3ZlcmxheS5cbiAgICAgICAqL1xuICAgICAgY3NzQ2xhc3Nlcy5mb3JFYWNoKChjKSA9PiBlbC5jbGFzc0xpc3QuYWRkKGMpKTtcbiAgICAgIC8qKlxuICAgICAgICogQWRkIGFueSBwcm9wcyBwYXNzZWQgaW5cbiAgICAgICAqIHZpYSB0aGUgY29tcG9uZW50UHJvcHMgcHJvcCBvbiB0aGUgb3ZlcmxheS5cbiAgICAgICAqL1xuICAgICAgT2JqZWN0LmFzc2lnbihlbCwgdXNlckNvbXBvbmVudFByb3BzKTtcbiAgICAgIC8qKlxuICAgICAgICogRmluYWxseSwgYXBwZW5kIHRoZSBjb21wb25lbnRcbiAgICAgICAqIGluc2lkZSBvZiB0aGUgb3ZlcmxheSBjb21wb25lbnQuXG4gICAgICAgKi9cbiAgICAgIEJhc2VDb21wb25lbnQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IGNvbXBvbmVudE9uUmVhZHkoZWwsIHJlc29sdmUpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoQmFzZUNvbXBvbmVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBJZiB0aGVyZSBpcyBubyBjb21wb25lbnQsIHRoZW4gd2UgbmVlZCB0byBjcmVhdGUgYSBuZXcgcGFyZW50XG4gICAgICAvLyBlbGVtZW50IHRvIGFwcGx5IHRoZSBjc3MgY2xhc3NlcyB0by5cbiAgICAgIGNvbnN0IGVsID0gKF9iID0gQmFzZUNvbXBvbmVudC5vd25lckRvY3VtZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjc3NDbGFzc2VzLmZvckVhY2goKGMpID0+IGVsLmNsYXNzTGlzdC5hZGQoYykpO1xuICAgICAgLy8gTW92ZSBlYWNoIGNoaWxkIGZyb20gdGhlIG9yaWdpbmFsIHRlbXBsYXRlIHRvIHRoZSBuZXcgcGFyZW50IGVsZW1lbnQuXG4gICAgICBlbC5hcHBlbmQoLi4uQmFzZUNvbXBvbmVudC5jaGlsZHJlbik7XG4gICAgICAvLyBBcHBlbmQgdGhlIG5ldyBwYXJlbnQgZWxlbWVudCB0byB0aGUgb3JpZ2luYWwgcGFyZW50IGVsZW1lbnQuXG4gICAgICBCYXNlQ29tcG9uZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSByb290IG9mIHRoZSBhcHAgYW5kXG4gICAgICogYWRkIHRoZSBvdmVybGF5IHRoZXJlLlxuICAgICAqL1xuICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1hcHAnKSB8fCBkb2N1bWVudC5ib2R5O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHBsYWNlaG9sZGVyIGNvbW1lbnQgc28gdGhhdFxuICAgICAqIHdlIGNhbiByZXR1cm4gdGhpcyBjb21wb25lbnQgdG8gd2hlcmVcbiAgICAgKiBpdCB3YXMgcHJldmlvdXNseS5cbiAgICAgKi9cbiAgICBSZWZlcmVuY2UgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdpb25pYyB0ZWxlcG9ydCcpO1xuICAgIEJhc2VDb21wb25lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoUmVmZXJlbmNlLCBCYXNlQ29tcG9uZW50KTtcbiAgICBhcHAuYXBwZW5kQ2hpbGQoQmFzZUNvbXBvbmVudCk7XG4gICAgcmV0dXJuIEJhc2VDb21wb25lbnQ7XG4gIH07XG4gIGNvbnN0IHJlbW92ZVZpZXdGcm9tRG9tID0gKCkgPT4ge1xuICAgIC8qKlxuICAgICAqIFJldHVybiBjb21wb25lbnQgdG8gd2hlcmUgaXQgd2FzIHByZXZpb3VzbHkgaW4gdGhlIERPTS5cbiAgICAgKi9cbiAgICBpZiAoQmFzZUNvbXBvbmVudCAmJiBSZWZlcmVuY2UpIHtcbiAgICAgIFJlZmVyZW5jZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShCYXNlQ29tcG9uZW50LCBSZWZlcmVuY2UpO1xuICAgICAgUmVmZXJlbmNlLnJlbW92ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH07XG4gIHJldHVybiB7IGF0dGFjaFZpZXdUb0RvbSwgcmVtb3ZlVmlld0Zyb21Eb20gfTtcbn07XG5cbmV4cG9ydCB7IENvcmVEZWxlZ2F0ZSBhcyBDLCBhdHRhY2hDb21wb25lbnQgYXMgYSwgZGV0YWNoQ29tcG9uZW50IGFzIGQgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5jb25zdCBIYXB0aWNFbmdpbmUgPSB7XG4gIGdldEVuZ2luZSgpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3Qgd2luID0gd2luZG93O1xuICAgIHJldHVybiB3aW4uVGFwdGljRW5naW5lIHx8ICgoKF9hID0gd2luLkNhcGFjaXRvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlzUGx1Z2luQXZhaWxhYmxlKCdIYXB0aWNzJykpICYmIHdpbi5DYXBhY2l0b3IuUGx1Z2lucy5IYXB0aWNzKTtcbiAgfSxcbiAgYXZhaWxhYmxlKCkge1xuICAgIHJldHVybiAhIXRoaXMuZ2V0RW5naW5lKCk7XG4gIH0sXG4gIGlzQ29yZG92YSgpIHtcbiAgICByZXR1cm4gISF3aW5kb3cuVGFwdGljRW5naW5lO1xuICB9LFxuICBpc0NhcGFjaXRvcigpIHtcbiAgICBjb25zdCB3aW4gPSB3aW5kb3c7XG4gICAgcmV0dXJuICEhd2luLkNhcGFjaXRvcjtcbiAgfSxcbiAgaW1wYWN0KG9wdGlvbnMpIHtcbiAgICBjb25zdCBlbmdpbmUgPSB0aGlzLmdldEVuZ2luZSgpO1xuICAgIGlmICghZW5naW5lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5pc0NhcGFjaXRvcigpID8gb3B0aW9ucy5zdHlsZS50b1VwcGVyQ2FzZSgpIDogb3B0aW9ucy5zdHlsZTtcbiAgICBlbmdpbmUuaW1wYWN0KHsgc3R5bGUgfSk7XG4gIH0sXG4gIG5vdGlmaWNhdGlvbihvcHRpb25zKSB7XG4gICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZSA9IHRoaXMuaXNDYXBhY2l0b3IoKSA/IG9wdGlvbnMuc3R5bGUudG9VcHBlckNhc2UoKSA6IG9wdGlvbnMuc3R5bGU7XG4gICAgZW5naW5lLm5vdGlmaWNhdGlvbih7IHN0eWxlIH0pO1xuICB9LFxuICBzZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5pbXBhY3QoeyBzdHlsZTogJ2xpZ2h0JyB9KTtcbiAgfSxcbiAgc2VsZWN0aW9uU3RhcnQoKSB7XG4gICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0NhcGFjaXRvcigpKSB7XG4gICAgICBlbmdpbmUuc2VsZWN0aW9uU3RhcnQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvblN0YXJ0KCk7XG4gICAgfVxuICB9LFxuICBzZWxlY3Rpb25DaGFuZ2VkKCkge1xuICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuZ2V0RW5naW5lKCk7XG4gICAgaWYgKCFlbmdpbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNDYXBhY2l0b3IoKSkge1xuICAgICAgZW5naW5lLnNlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICB9XG4gIH0sXG4gIHNlbGVjdGlvbkVuZCgpIHtcbiAgICBjb25zdCBlbmdpbmUgPSB0aGlzLmdldEVuZ2luZSgpO1xuICAgIGlmICghZW5naW5lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmlzQ2FwYWNpdG9yKCkpIHtcbiAgICAgIGVuZ2luZS5zZWxlY3Rpb25FbmQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvbkVuZCgpO1xuICAgIH1cbiAgfSxcbn07XG4vKipcbiAqIFRyaWdnZXIgYSBzZWxlY3Rpb24gY2hhbmdlZCBoYXB0aWMgZXZlbnQuIEdvb2QgZm9yIG9uZS10aW1lIGV2ZW50c1xuICogKG5vdCBmb3IgZ2VzdHVyZXMpXG4gKi9cbmNvbnN0IGhhcHRpY1NlbGVjdGlvbiA9ICgpID0+IHtcbiAgSGFwdGljRW5naW5lLnNlbGVjdGlvbigpO1xufTtcbi8qKlxuICogVGVsbCB0aGUgaGFwdGljIGVuZ2luZSB0aGF0IGEgZ2VzdHVyZSBmb3IgYSBzZWxlY3Rpb24gY2hhbmdlIGlzIHN0YXJ0aW5nLlxuICovXG5jb25zdCBoYXB0aWNTZWxlY3Rpb25TdGFydCA9ICgpID0+IHtcbiAgSGFwdGljRW5naW5lLnNlbGVjdGlvblN0YXJ0KCk7XG59O1xuLyoqXG4gKiBUZWxsIHRoZSBoYXB0aWMgZW5naW5lIHRoYXQgYSBzZWxlY3Rpb24gY2hhbmdlZCBkdXJpbmcgYSBnZXN0dXJlLlxuICovXG5jb25zdCBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkID0gKCkgPT4ge1xuICBIYXB0aWNFbmdpbmUuc2VsZWN0aW9uQ2hhbmdlZCgpO1xufTtcbi8qKlxuICogVGVsbCB0aGUgaGFwdGljIGVuZ2luZSB3ZSBhcmUgZG9uZSB3aXRoIGEgZ2VzdHVyZS4gVGhpcyBuZWVkcyB0byBiZVxuICogY2FsbGVkIGxlc3QgcmVzb3VyY2VzIGFyZSBub3QgcHJvcGVybHkgcmVjeWNsZWQuXG4gKi9cbmNvbnN0IGhhcHRpY1NlbGVjdGlvbkVuZCA9ICgpID0+IHtcbiAgSGFwdGljRW5naW5lLnNlbGVjdGlvbkVuZCgpO1xufTtcbi8qKlxuICogVXNlIHRoaXMgdG8gaW5kaWNhdGUgc3VjY2Vzcy9mYWlsdXJlL3dhcm5pbmcgdG8gdGhlIHVzZXIuXG4gKiBvcHRpb25zIHNob3VsZCBiZSBvZiB0aGUgdHlwZSBgeyBzdHlsZTogJ2xpZ2h0JyB9YCAob3IgYG1lZGl1bWAvYGhlYXZ5YClcbiAqL1xuY29uc3QgaGFwdGljSW1wYWN0ID0gKG9wdGlvbnMpID0+IHtcbiAgSGFwdGljRW5naW5lLmltcGFjdChvcHRpb25zKTtcbn07XG5cbmV4cG9ydCB7IGhhcHRpY1NlbGVjdGlvblN0YXJ0IGFzIGEsIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgYXMgYiwgaGFwdGljU2VsZWN0aW9uIGFzIGMsIGhhcHRpY0ltcGFjdCBhcyBkLCBoYXB0aWNTZWxlY3Rpb25FbmQgYXMgaCB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbi8qKlxuICogV2hlbiBhY2Nlc3NpbmcgdGhlIHdpbmRvdywgaXQgaXMgaW1wb3J0YW50XG4gKiB0byBhY2NvdW50IGZvciBTU1IgYXBwbGljYXRpb25zIHdoZXJlIHRoZVxuICogd2luZG93IGlzIG5vdCBhdmFpbGFibGUuIENvZGUgdGhhdCBhY2Nlc3Nlc1xuICogd2luZG93IHdoZW4gaXQgaXMgbm90IGF2YWlsYWJsZSB3aWxsIGNyYXNoLlxuICogRXZlbiBjaGVja2luZyBpZiBgd2luZG93ID09PSB1bmRlZmluZWRgIHdpbGwgY2F1c2VcbiAqIGFwcHMgdG8gY3Jhc2ggaW4gU1NSLlxuICpcbiAqIFVzZSB3aW4gYmVsb3cgdG8gYWNjZXNzIGFuIFNTUi1zYWZlIHZlcnNpb25cbiAqIG9mIHRoZSB3aW5kb3cuXG4gKlxuICogRXhhbXBsZSAxOlxuICogQmVmb3JlOlxuICogaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4KSB7IC4uLiB9XG4gKlxuICogQWZ0ZXI6XG4gKiBpbXBvcnQgeyB3aW4gfSBmcm9tICdwYXRoL3RvL3RoaXMvZmlsZSc7XG4gKiBpZiAod2luPy5pbm5lcldpZHRoID4gNzY4KSB7IC4uLiB9XG4gKlxuICogTm90ZTogQ29kZSBpbnNpZGUgb2YgdGhpcyBpZi1ibG9jayB3aWxsXG4gKiBub3QgcnVuIGluIGFuIFNTUiBlbnZpcm9ubWVudC5cbiAqL1xuY29uc3Qgd2luID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG5cbmV4cG9ydCB7IHdpbiBhcyB3IH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgYyBhcyBjb21wb25lbnRPblJlYWR5IH0gZnJvbSAnLi9oZWxwZXJzLTRkMjcyMzYwLmpzJztcbmltcG9ydCB7IGEgYXMgcHJpbnRSZXF1aXJlZEVsZW1lbnRFcnJvciB9IGZyb20gJy4vaW5kZXgtYzRiMTE2NzYuanMnO1xuXG5jb25zdCBJT05fQ09OVEVOVF9UQUdfTkFNRSA9ICdJT04tQ09OVEVOVCc7XG5jb25zdCBJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SID0gJ2lvbi1jb250ZW50JztcbmNvbnN0IElPTl9DT05URU5UX0NMQVNTX1NFTEVDVE9SID0gJy5pb24tY29udGVudC1zY3JvbGwtaG9zdCc7XG4vKipcbiAqIFNlbGVjdG9yIHVzZWQgZm9yIGltcGxlbWVudGF0aW9ucyByZWxpYW50IG9uIGA8aW9uLWNvbnRlbnQ+YCBmb3Igc2Nyb2xsIGV2ZW50IGNoYW5nZXMuXG4gKlxuICogRGV2ZWxvcGVycyBzaG91bGQgdXNlIHRoZSBgLmlvbi1jb250ZW50LXNjcm9sbC1ob3N0YCBzZWxlY3RvciB0byB0YXJnZXQgdGhlIGVsZW1lbnQgZW1pdHRpbmdcbiAqIHNjcm9sbCBldmVudHMuIFdpdGggdmlydHVhbCBzY3JvbGwgaW1wbGVtZW50YXRpb25zIHRoaXMgd2lsbCBiZSB0aGUgaG9zdCBlbGVtZW50IGZvclxuICogdGhlIHNjcm9sbCB2aWV3cG9ydC5cbiAqL1xuY29uc3QgSU9OX0NPTlRFTlRfU0VMRUNUT1IgPSBgJHtJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SfSwgJHtJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUn1gO1xuY29uc3QgaXNJb25Db250ZW50ID0gKGVsKSA9PiBlbCAmJiBlbC50YWdOYW1lID09PSBJT05fQ09OVEVOVF9UQUdfTkFNRTtcbi8qKlxuICogV2FpdHMgZm9yIHRoZSBlbGVtZW50IGhvc3QgZnVsbHkgaW5pdGlhbGl6ZSBiZWZvcmVcbiAqIHJldHVybmluZyB0aGUgaW5uZXIgc2Nyb2xsIGVsZW1lbnQuXG4gKlxuICogRm9yIGBpb24tY29udGVudGAgdGhlIHNjcm9sbCB0YXJnZXQgd2lsbCBiZSB0aGUgcmVzdWx0XG4gKiBvZiB0aGUgYGdldFNjcm9sbEVsZW1lbnRgIGZ1bmN0aW9uLlxuICpcbiAqIEZvciBjdXN0b20gaW1wbGVtZW50YXRpb25zIGl0IHdpbGwgYmUgdGhlIGVsZW1lbnQgaG9zdFxuICogb3IgYSBzZWxlY3RvciB3aXRoaW4gdGhlIGhvc3QsIGlmIHN1cHBsaWVkIHRocm91Z2ggYHNjcm9sbFRhcmdldGAuXG4gKi9cbmNvbnN0IGdldFNjcm9sbEVsZW1lbnQgPSBhc3luYyAoZWwpID0+IHtcbiAgaWYgKGlzSW9uQ29udGVudChlbCkpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gY29tcG9uZW50T25SZWFkeShlbCwgcmVzb2x2ZSkpO1xuICAgIHJldHVybiBlbC5nZXRTY3JvbGxFbGVtZW50KCk7XG4gIH1cbiAgcmV0dXJuIGVsO1xufTtcbi8qKlxuICogUXVlcmllcyB0aGUgZWxlbWVudCBtYXRjaGluZyB0aGUgc2VsZWN0b3IgZm9yIElvbkNvbnRlbnQuXG4gKiBTZWUgSU9OX0NPTlRFTlRfU0VMRUNUT1IgZm9yIHRoZSBzZWxlY3RvciB1c2VkLlxuICovXG5jb25zdCBmaW5kSW9uQ29udGVudCA9IChlbCkgPT4ge1xuICAvKipcbiAgICogRmlyc3Qgd2UgdHJ5IHRvIHF1ZXJ5IHRoZSBjdXN0b20gc2Nyb2xsIGhvc3Qgc2VsZWN0b3IgaW4gY2FzZXMgd2hlcmVcbiAgICogdGhlIGltcGxlbWVudGF0aW9uIGlzIHVzaW5nIGFuIG91dGVyIGBpb24tY29udGVudGAgd2l0aCBhbiBpbm5lciBjdXN0b21cbiAgICogc2Nyb2xsIGNvbnRhaW5lci5cbiAgICovXG4gIGNvbnN0IGN1c3RvbUNvbnRlbnRIb3N0ID0gZWwucXVlcnlTZWxlY3RvcihJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUik7XG4gIGlmIChjdXN0b21Db250ZW50SG9zdCkge1xuICAgIHJldHVybiBjdXN0b21Db250ZW50SG9zdDtcbiAgfVxuICByZXR1cm4gZWwucXVlcnlTZWxlY3RvcihJT05fQ09OVEVOVF9TRUxFQ1RPUik7XG59O1xuLyoqXG4gKiBRdWVyaWVzIHRoZSBjbG9zZXN0IGVsZW1lbnQgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yIGZvciBJb25Db250ZW50LlxuICovXG5jb25zdCBmaW5kQ2xvc2VzdElvbkNvbnRlbnQgPSAoZWwpID0+IHtcbiAgcmV0dXJuIGVsLmNsb3Nlc3QoSU9OX0NPTlRFTlRfU0VMRUNUT1IpO1xufTtcbi8qKlxuICogU2Nyb2xscyB0byB0aGUgdG9wIG9mIHRoZSBlbGVtZW50LiBJZiBhbiBgaW9uLWNvbnRlbnRgIGlzIGZvdW5kLCBpdCB3aWxsIHNjcm9sbFxuICogdXNpbmcgdGhlIHB1YmxpYyBBUEkgYHNjcm9sbFRvVG9wYCB3aXRoIGEgZHVyYXRpb24uXG4gKi9cbmNvbnN0IHNjcm9sbFRvVG9wID0gKGVsLCBkdXJhdGlvbk1zKSA9PiB7XG4gIGlmIChpc0lvbkNvbnRlbnQoZWwpKSB7XG4gICAgY29uc3QgY29udGVudCA9IGVsO1xuICAgIHJldHVybiBjb250ZW50LnNjcm9sbFRvVG9wKGR1cmF0aW9uTXMpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWwuc2Nyb2xsVG8oe1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJlaGF2aW9yOiBkdXJhdGlvbk1zID4gMCA/ICdzbW9vdGgnIDogJ2F1dG8nLFxuICB9KSk7XG59O1xuLyoqXG4gKiBTY3JvbGxzIGJ5IGEgc3BlY2lmaWVkIFgvWSBkaXN0YW5jZSBpbiB0aGUgY29tcG9uZW50LiBJZiBhbiBgaW9uLWNvbnRlbnRgIGlzIGZvdW5kLCBpdCB3aWxsIHNjcm9sbFxuICogdXNpbmcgdGhlIHB1YmxpYyBBUEkgYHNjcm9sbEJ5UG9pbnRgIHdpdGggYSBkdXJhdGlvbi5cbiAqL1xuY29uc3Qgc2Nyb2xsQnlQb2ludCA9IChlbCwgeCwgeSwgZHVyYXRpb25NcykgPT4ge1xuICBpZiAoaXNJb25Db250ZW50KGVsKSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlbDtcbiAgICByZXR1cm4gY29udGVudC5zY3JvbGxCeVBvaW50KHgsIHksIGR1cmF0aW9uTXMpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWwuc2Nyb2xsQnkoe1xuICAgIHRvcDogeSxcbiAgICBsZWZ0OiB4LFxuICAgIGJlaGF2aW9yOiBkdXJhdGlvbk1zID4gMCA/ICdzbW9vdGgnIDogJ2F1dG8nLFxuICB9KSk7XG59O1xuLyoqXG4gKiBQcmludHMgYW4gZXJyb3IgaW5mb3JtaW5nIGRldmVsb3BlcnMgdGhhdCBhbiBpbXBsZW1lbnRhdGlvbiByZXF1aXJlcyBhbiBlbGVtZW50IHRvIGJlIHVzZWRcbiAqIHdpdGhpbiBlaXRoZXIgdGhlIGBpb24tY29udGVudGAgc2VsZWN0b3Igb3IgdGhlIGAuaW9uLWNvbnRlbnQtc2Nyb2xsLWhvc3RgIGNsYXNzLlxuICovXG5jb25zdCBwcmludElvbkNvbnRlbnRFcnJvck1zZyA9IChlbCkgPT4ge1xuICByZXR1cm4gcHJpbnRSZXF1aXJlZEVsZW1lbnRFcnJvcihlbCwgSU9OX0NPTlRFTlRfRUxFTUVOVF9TRUxFQ1RPUik7XG59O1xuLyoqXG4gKiBTZXZlcmFsIGNvbXBvbmVudHMgaW4gSW9uaWMgbmVlZCB0byBwcmV2ZW50IHNjcm9sbGluZ1xuICogZHVyaW5nIGEgZ2VzdHVyZSAoY2FyZCBtb2RhbCwgcmFuZ2UsIGl0ZW0gc2xpZGluZywgZXRjKS5cbiAqIFVzZSB0aGlzIHV0aWxpdHkgdG8gYWNjb3VudCBmb3IgaW9uLWNvbnRlbnQgYW5kIGN1c3RvbSBjb250ZW50IGhvc3RzLlxuICovXG5jb25zdCBkaXNhYmxlQ29udGVudFNjcm9sbFkgPSAoY29udGVudEVsKSA9PiB7XG4gIGlmIChpc0lvbkNvbnRlbnQoY29udGVudEVsKSkge1xuICAgIGNvbnN0IGlvbkNvbnRlbnQgPSBjb250ZW50RWw7XG4gICAgY29uc3QgaW5pdGlhbFNjcm9sbFkgPSBpb25Db250ZW50LnNjcm9sbFk7XG4gICAgaW9uQ29udGVudC5zY3JvbGxZID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogVGhpcyBzaG91bGQgYmUgcGFzc2VkIGludG8gcmVzZXRDb250ZW50U2Nyb2xsWVxuICAgICAqIHNvIHRoYXQgd2UgY2FuIHJldmVydCBpb24tY29udGVudCdzIHNjcm9sbFkgdG8gdGhlXG4gICAgICogY29ycmVjdCBzdGF0ZS4gRm9yIGV4YW1wbGUsIGlmIHNjcm9sbFkgPSBmYWxzZVxuICAgICAqIGluaXRpYWxseSwgd2UgZG8gbm90IHdhbnQgdG8gZW5hYmxlIHNjcm9sbGluZ1xuICAgICAqIHdoZW4gd2UgY2FsbCByZXNldENvbnRlbnRTY3JvbGxZLlxuICAgICAqL1xuICAgIHJldHVybiBpbml0aWFsU2Nyb2xsWTtcbiAgfVxuICBlbHNlIHtcbiAgICBjb250ZW50RWwuc3R5bGUuc2V0UHJvcGVydHkoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuY29uc3QgcmVzZXRDb250ZW50U2Nyb2xsWSA9IChjb250ZW50RWwsIGluaXRpYWxTY3JvbGxZKSA9PiB7XG4gIGlmIChpc0lvbkNvbnRlbnQoY29udGVudEVsKSkge1xuICAgIGNvbnRlbnRFbC5zY3JvbGxZID0gaW5pdGlhbFNjcm9sbFk7XG4gIH1cbiAgZWxzZSB7XG4gICAgY29udGVudEVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xuICB9XG59O1xuXG5leHBvcnQgeyBJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SIGFzIEksIGZpbmRJb25Db250ZW50IGFzIGEsIElPTl9DT05URU5UX0NMQVNTX1NFTEVDVE9SIGFzIGIsIHNjcm9sbEJ5UG9pbnQgYXMgYywgZGlzYWJsZUNvbnRlbnRTY3JvbGxZIGFzIGQsIGZpbmRDbG9zZXN0SW9uQ29udGVudCBhcyBmLCBnZXRTY3JvbGxFbGVtZW50IGFzIGcsIGlzSW9uQ29udGVudCBhcyBpLCBwcmludElvbkNvbnRlbnRFcnJvck1zZyBhcyBwLCByZXNldENvbnRlbnRTY3JvbGxZIGFzIHIsIHNjcm9sbFRvVG9wIGFzIHMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG4vKiBJb25pY29ucyB2Ni4wLjMsIEVTIE1vZHVsZXMgKi9cbmNvbnN0IGFycm93QmFja1NoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+QXJyb3cgQmFjazwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3NxdWFyZScgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMjQ0IDQwMEwxMDAgMjU2bDE0NC0xNDRNMTIwIDI1NmgyOTInIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgYXJyb3dEb3duID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+QXJyb3cgRG93bjwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMTEyIDI2OGwxNDQgMTQ0IDE0NC0xNDRNMjU2IDM5MlYxMDAnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgY2FyZXRCYWNrU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5DYXJldCBCYWNrPC90aXRsZT48cGF0aCBkPSdNMzY4IDY0TDE0NCAyNTZsMjI0IDE5MlY2NHonLz48L3N2Zz5cIjtcbmNvbnN0IGNhcmV0RG93blNoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+Q2FyZXQgRG93bjwvdGl0bGU+PHBhdGggZD0nTTY0IDE0NGwxOTIgMjI0IDE5Mi0yMjRINjR6Jy8+PC9zdmc+XCI7XG5jb25zdCBjYXJldFVwU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5DYXJldCBVcDwvdGl0bGU+PHBhdGggZD0nTTQ0OCAzNjhMMjU2IDE0NCA2NCAzNjhoMzg0eicvPjwvc3ZnPlwiO1xuY29uc3QgY2hlY2ttYXJrT3V0bGluZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkNoZWNrbWFyazwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNDE2IDEyOEwxOTIgMzg0bC05Ni05NicgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PC9zdmc+XCI7XG5jb25zdCBjaGV2cm9uQmFjayA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkNoZXZyb24gQmFjazwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMzI4IDExMkwxODQgMjU2bDE0NCAxNDQnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgY2hldnJvbkRvd24gPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5DaGV2cm9uIERvd248L3RpdGxlPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSc0OCcgZD0nTTExMiAxODRsMTQ0IDE0NCAxNDQtMTQ0JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IGNoZXZyb25Gb3J3YXJkID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+Q2hldnJvbiBGb3J3YXJkPC90aXRsZT48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nNDgnIGQ9J00xODQgMTEybDE0NCAxNDQtMTQ0IDE0NCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBjaGV2cm9uRm9yd2FyZE91dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5DaGV2cm9uIEZvcndhcmQ8L3RpdGxlPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSc0OCcgZD0nTTE4NCAxMTJsMTQ0IDE0NC0xNDQgMTQ0JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IGNsb3NlID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+Q2xvc2U8L3RpdGxlPjxwYXRoIGQ9J00yODkuOTQgMjU2bDk1LTk1QTI0IDI0IDAgMDAzNTEgMTI3bC05NSA5NS05NS05NWEyNCAyNCAwIDAwLTM0IDM0bDk1IDk1LTk1IDk1YTI0IDI0IDAgMTAzNCAzNGw5NS05NSA5NSA5NWEyNCAyNCAwIDAwMzQtMzR6Jy8+PC9zdmc+XCI7XG5jb25zdCBjbG9zZUNpcmNsZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkNsb3NlIENpcmNsZTwvdGl0bGU+PHBhdGggZD0nTTI1NiA0OEMxNDEuMzEgNDggNDggMTQxLjMxIDQ4IDI1NnM5My4zMSAyMDggMjA4IDIwOCAyMDgtOTMuMzEgMjA4LTIwOFMzNzAuNjkgNDggMjU2IDQ4em03NS4zMSAyNjAuNjlhMTYgMTYgMCAxMS0yMi42MiAyMi42MkwyNTYgMjc4LjYzbC01Mi42OSA1Mi42OGExNiAxNiAwIDAxLTIyLjYyLTIyLjYyTDIzMy4zNyAyNTZsLTUyLjY4LTUyLjY5YTE2IDE2IDAgMDEyMi42Mi0yMi42MkwyNTYgMjMzLjM3bDUyLjY5LTUyLjY4YTE2IDE2IDAgMDEyMi42MiAyMi42MkwyNzguNjMgMjU2eicvPjwvc3ZnPlwiO1xuY29uc3QgY2xvc2VTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkNsb3NlPC90aXRsZT48cGF0aCBkPSdNNDAwIDE0NS40OUwzNjYuNTEgMTEyIDI1NiAyMjIuNTEgMTQ1LjQ5IDExMiAxMTIgMTQ1LjQ5IDIyMi41MSAyNTYgMTEyIDM2Ni41MSAxNDUuNDkgNDAwIDI1NiAyODkuNDkgMzY2LjUxIDQwMCA0MDAgMzY2LjUxIDI4OS40OSAyNTYgNDAwIDE0NS40OXonLz48L3N2Zz5cIjtcbmNvbnN0IGVsbGlwc2VPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+RWxsaXBzZTwvdGl0bGU+PGNpcmNsZSBjeD0nMjU2JyBjeT0nMjU2JyByPScxOTInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PC9zdmc+XCI7XG5jb25zdCBlbGxpcHNpc0hvcml6b250YWwgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5FbGxpcHNpcyBIb3Jpem9udGFsPC90aXRsZT48Y2lyY2xlIGN4PScyNTYnIGN5PScyNTYnIHI9JzQ4Jy8+PGNpcmNsZSBjeD0nNDE2JyBjeT0nMjU2JyByPSc0OCcvPjxjaXJjbGUgY3g9Jzk2JyBjeT0nMjU2JyByPSc0OCcvPjwvc3ZnPlwiO1xuY29uc3QgbWVudU91dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5NZW51PC90aXRsZT48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTgwIDE2MGgzNTJNODAgMjU2aDM1Mk04MCAzNTJoMzUyJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48L3N2Zz5cIjtcbmNvbnN0IG1lbnVTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPk1lbnU8L3RpdGxlPjxwYXRoIGQ9J002NCAzODRoMzg0di00Mi42N0g2NHptMC0xMDYuNjdoMzg0di00Mi42Nkg2NHpNNjQgMTI4djQyLjY3aDM4NFYxMjh6Jy8+PC9zdmc+XCI7XG5jb25zdCByZW1vdmVPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+UmVtb3ZlPC90aXRsZT48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J000MDAgMjU2SDExMicgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PC9zdmc+XCI7XG5jb25zdCByZW9yZGVyVGhyZWVPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+UmVvcmRlciBUaHJlZTwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNOTYgMjU2aDMyME05NiAxNzZoMzIwTTk2IDMzNmgzMjAnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZSBpb25pY29uLXN0cm9rZS13aWR0aCcvPjwvc3ZnPlwiO1xuY29uc3QgcmVvcmRlclR3b1NoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+UmVvcmRlciBUd288L3RpdGxlPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdzcXVhcmUnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nNDQnIGQ9J00xMTggMzA0aDI3Nk0xMTggMjA4aDI3NicgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBzZWFyY2hPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+U2VhcmNoPC90aXRsZT48cGF0aCBkPSdNMjIxLjA5IDY0YTE1Ny4wOSAxNTcuMDkgMCAxMDE1Ny4wOSAxNTcuMDlBMTU3LjEgMTU3LjEgMCAwMDIyMS4wOSA2NHonIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J00zMzguMjkgMzM4LjI5TDQ0OCA0NDgnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZSBpb25pY29uLXN0cm9rZS13aWR0aCcvPjwvc3ZnPlwiO1xuY29uc3Qgc2VhcmNoU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5TZWFyY2g8L3RpdGxlPjxwYXRoIGQ9J000NjQgNDI4TDMzOS45MiAzMDMuOWExNjAuNDggMTYwLjQ4IDAgMDAzMC43Mi05NC41OEMzNzAuNjQgMTIwLjM3IDI5OC4yNyA0OCAyMDkuMzIgNDhTNDggMTIwLjM3IDQ4IDIwOS4zMnM3Mi4zNyAxNjEuMzIgMTYxLjMyIDE2MS4zMmExNjAuNDggMTYwLjQ4IDAgMDA5NC41OC0zMC43Mkw0MjggNDY0ek0yMDkuMzIgMzE5LjY5YTExMC4zOCAxMTAuMzggMCAxMTExMC4zNy0xMTAuMzcgMTEwLjUgMTEwLjUgMCAwMS0xMTAuMzcgMTEwLjM3eicvPjwvc3ZnPlwiO1xuXG5leHBvcnQgeyBhcnJvd0JhY2tTaGFycCBhcyBhLCBjbG9zZUNpcmNsZSBhcyBiLCBjaGV2cm9uQmFjayBhcyBjLCBjbG9zZVNoYXJwIGFzIGQsIHNlYXJjaFNoYXJwIGFzIGUsIGNoZWNrbWFya091dGxpbmUgYXMgZiwgZWxsaXBzZU91dGxpbmUgYXMgZywgY2FyZXRCYWNrU2hhcnAgYXMgaCwgYXJyb3dEb3duIGFzIGksIHJlb3JkZXJUaHJlZU91dGxpbmUgYXMgaiwgcmVvcmRlclR3b1NoYXJwIGFzIGssIGNoZXZyb25Eb3duIGFzIGwsIGNoZXZyb25Gb3J3YXJkT3V0bGluZSBhcyBtLCBlbGxpcHNpc0hvcml6b250YWwgYXMgbiwgY2hldnJvbkZvcndhcmQgYXMgbywgY2FyZXRVcFNoYXJwIGFzIHAsIGNhcmV0RG93blNoYXJwIGFzIHEsIHJlbW92ZU91dGxpbmUgYXMgciwgc2VhcmNoT3V0bGluZSBhcyBzLCBjbG9zZSBhcyB0LCBtZW51T3V0bGluZSBhcyB1LCBtZW51U2hhcnAgYXMgdiB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmNvbnN0IEtFWUJPQVJEX0RJRF9PUEVOID0gJ2lvbktleWJvYXJkRGlkU2hvdyc7XG5jb25zdCBLRVlCT0FSRF9ESURfQ0xPU0UgPSAnaW9uS2V5Ym9hcmREaWRIaWRlJztcbmNvbnN0IEtFWUJPQVJEX1RIUkVTSE9MRCA9IDE1MDtcbmxldCBwcmV2aW91c1Zpc3VhbFZpZXdwb3J0ID0ge307XG5sZXQgY3VycmVudFZpc3VhbFZpZXdwb3J0ID0ge307XG5sZXQga2V5Ym9hcmRPcGVuID0gZmFsc2U7XG4vKipcbiAqIFRoaXMgaXMgb25seSB1c2VkIGZvciB0ZXN0c1xuICovXG5jb25zdCByZXNldEtleWJvYXJkQXNzaXN0ID0gKCkgPT4ge1xuICBwcmV2aW91c1Zpc3VhbFZpZXdwb3J0ID0ge307XG4gIGN1cnJlbnRWaXN1YWxWaWV3cG9ydCA9IHt9O1xuICBrZXlib2FyZE9wZW4gPSBmYWxzZTtcbn07XG5jb25zdCBzdGFydEtleWJvYXJkQXNzaXN0ID0gKHdpbikgPT4ge1xuICBzdGFydE5hdGl2ZUxpc3RlbmVycyh3aW4pO1xuICBpZiAoIXdpbi52aXN1YWxWaWV3cG9ydCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjdXJyZW50VmlzdWFsVmlld3BvcnQgPSBjb3B5VmlzdWFsVmlld3BvcnQod2luLnZpc3VhbFZpZXdwb3J0KTtcbiAgd2luLnZpc3VhbFZpZXdwb3J0Lm9ucmVzaXplID0gKCkgPT4ge1xuICAgIHRyYWNrVmlld3BvcnRDaGFuZ2VzKHdpbik7XG4gICAgaWYgKGtleWJvYXJkRGlkT3BlbigpIHx8IGtleWJvYXJkRGlkUmVzaXplKHdpbikpIHtcbiAgICAgIHNldEtleWJvYXJkT3Blbih3aW4pO1xuICAgIH1cbiAgICBlbHNlIGlmIChrZXlib2FyZERpZENsb3NlKHdpbikpIHtcbiAgICAgIHNldEtleWJvYXJkQ2xvc2Uod2luKTtcbiAgICB9XG4gIH07XG59O1xuLyoqXG4gKiBMaXN0ZW4gZm9yIGV2ZW50cyBmaXJlZCBieSBuYXRpdmUga2V5Ym9hcmQgcGx1Z2luXG4gKiBpbiBDYXBhY2l0b3IvQ29yZG92YSBzbyBkZXZzIG9ubHkgbmVlZCB0byBsaXN0ZW5cbiAqIGluIG9uZSBwbGFjZS5cbiAqL1xuY29uc3Qgc3RhcnROYXRpdmVMaXN0ZW5lcnMgPSAod2luKSA9PiB7XG4gIHdpbi5hZGRFdmVudExpc3RlbmVyKCdrZXlib2FyZERpZFNob3cnLCAoZXYpID0+IHNldEtleWJvYXJkT3Blbih3aW4sIGV2KSk7XG4gIHdpbi5hZGRFdmVudExpc3RlbmVyKCdrZXlib2FyZERpZEhpZGUnLCAoKSA9PiBzZXRLZXlib2FyZENsb3NlKHdpbikpO1xufTtcbmNvbnN0IHNldEtleWJvYXJkT3BlbiA9ICh3aW4sIGV2KSA9PiB7XG4gIGZpcmVLZXlib2FyZE9wZW5FdmVudCh3aW4sIGV2KTtcbiAga2V5Ym9hcmRPcGVuID0gdHJ1ZTtcbn07XG5jb25zdCBzZXRLZXlib2FyZENsb3NlID0gKHdpbikgPT4ge1xuICBmaXJlS2V5Ym9hcmRDbG9zZUV2ZW50KHdpbik7XG4gIGtleWJvYXJkT3BlbiA9IGZhbHNlO1xufTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGBrZXlib2FyZE9wZW5gIGZsYWcgaXMgbm90XG4gKiBzZXQsIHRoZSBwcmV2aW91cyB2aXN1YWwgdmlld3BvcnQgd2lkdGggZXF1YWwgdGhlIGN1cnJlbnRcbiAqIHZpc3VhbCB2aWV3cG9ydCB3aWR0aCwgYW5kIGlmIHRoZSBzY2FsZWQgZGlmZmVyZW5jZVxuICogb2YgdGhlIHByZXZpb3VzIHZpc3VhbCB2aWV3cG9ydCBoZWlnaHQgbWludXMgdGhlIGN1cnJlbnRcbiAqIHZpc3VhbCB2aWV3cG9ydCBoZWlnaHQgaXMgZ3JlYXRlciB0aGFuIEtFWUJPQVJEX1RIUkVTSE9MRFxuICpcbiAqIFdlIG5lZWQgdG8gYmUgYWJsZSB0byBhY2NvbW1vZGF0ZSB1c2VycyB3aG8gaGF2ZSB6b29taW5nXG4gKiBlbmFibGVkIGluIHRoZWlyIGJyb3dzZXIgKG9yIGhhdmUgem9vbWVkIGluIG1hbnVhbGx5KSB3aGljaFxuICogaXMgd2h5IHdlIHRha2UgaW50byBhY2NvdW50IHRoZSBjdXJyZW50IHZpc3VhbCB2aWV3cG9ydCdzXG4gKiBzY2FsZSB2YWx1ZS5cbiAqL1xuY29uc3Qga2V5Ym9hcmREaWRPcGVuID0gKCkgPT4ge1xuICBjb25zdCBzY2FsZWRIZWlnaHREaWZmZXJlbmNlID0gKHByZXZpb3VzVmlzdWFsVmlld3BvcnQuaGVpZ2h0IC0gY3VycmVudFZpc3VhbFZpZXdwb3J0LmhlaWdodCkgKiBjdXJyZW50VmlzdWFsVmlld3BvcnQuc2NhbGU7XG4gIHJldHVybiAoIWtleWJvYXJkT3BlbiAmJlxuICAgIHByZXZpb3VzVmlzdWFsVmlld3BvcnQud2lkdGggPT09IGN1cnJlbnRWaXN1YWxWaWV3cG9ydC53aWR0aCAmJlxuICAgIHNjYWxlZEhlaWdodERpZmZlcmVuY2UgPiBLRVlCT0FSRF9USFJFU0hPTEQpO1xufTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGtleWJvYXJkIGlzIG9wZW4sXG4gKiBidXQgdGhlIGtleWJvYXJkIGRpZCBub3QgY2xvc2VcbiAqL1xuY29uc3Qga2V5Ym9hcmREaWRSZXNpemUgPSAod2luKSA9PiB7XG4gIHJldHVybiBrZXlib2FyZE9wZW4gJiYgIWtleWJvYXJkRGlkQ2xvc2Uod2luKTtcbn07XG4vKipcbiAqIERldGVybWluZSBpZiB0aGUga2V5Ym9hcmQgd2FzIGNsb3NlZFxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGBrZXlib2FyZE9wZW5gIGZsYWcgaXMgc2V0IGFuZFxuICogdGhlIGN1cnJlbnQgdmlzdWFsIHZpZXdwb3J0IGhlaWdodCBlcXVhbHMgdGhlXG4gKiBsYXlvdXQgdmlld3BvcnQgaGVpZ2h0LlxuICovXG5jb25zdCBrZXlib2FyZERpZENsb3NlID0gKHdpbikgPT4ge1xuICByZXR1cm4ga2V5Ym9hcmRPcGVuICYmIGN1cnJlbnRWaXN1YWxWaWV3cG9ydC5oZWlnaHQgPT09IHdpbi5pbm5lckhlaWdodDtcbn07XG4vKipcbiAqIERpc3BhdGNoIGEga2V5Ym9hcmQgb3BlbiBldmVudFxuICovXG5jb25zdCBmaXJlS2V5Ym9hcmRPcGVuRXZlbnQgPSAod2luLCBuYXRpdmVFdikgPT4ge1xuICBjb25zdCBrZXlib2FyZEhlaWdodCA9IG5hdGl2ZUV2ID8gbmF0aXZlRXYua2V5Ym9hcmRIZWlnaHQgOiB3aW4uaW5uZXJIZWlnaHQgLSBjdXJyZW50VmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICBjb25zdCBldiA9IG5ldyBDdXN0b21FdmVudChLRVlCT0FSRF9ESURfT1BFTiwge1xuICAgIGRldGFpbDogeyBrZXlib2FyZEhlaWdodCB9LFxuICB9KTtcbiAgd2luLmRpc3BhdGNoRXZlbnQoZXYpO1xufTtcbi8qKlxuICogRGlzcGF0Y2ggYSBrZXlib2FyZCBjbG9zZSBldmVudFxuICovXG5jb25zdCBmaXJlS2V5Ym9hcmRDbG9zZUV2ZW50ID0gKHdpbikgPT4ge1xuICBjb25zdCBldiA9IG5ldyBDdXN0b21FdmVudChLRVlCT0FSRF9ESURfQ0xPU0UpO1xuICB3aW4uZGlzcGF0Y2hFdmVudChldik7XG59O1xuLyoqXG4gKiBHaXZlbiBhIHdpbmRvdyBvYmplY3QsIGNyZWF0ZSBhIGNvcHkgb2ZcbiAqIHRoZSBjdXJyZW50IHZpc3VhbCBhbmQgbGF5b3V0IHZpZXdwb3J0IHN0YXRlc1xuICogd2hpbGUgYWxzbyBwcmVzZXJ2aW5nIHRoZSBwcmV2aW91cyB2aXN1YWwgYW5kXG4gKiBsYXlvdXQgdmlld3BvcnQgc3RhdGVzXG4gKi9cbmNvbnN0IHRyYWNrVmlld3BvcnRDaGFuZ2VzID0gKHdpbikgPT4ge1xuICBwcmV2aW91c1Zpc3VhbFZpZXdwb3J0ID0gT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudFZpc3VhbFZpZXdwb3J0KTtcbiAgY3VycmVudFZpc3VhbFZpZXdwb3J0ID0gY29weVZpc3VhbFZpZXdwb3J0KHdpbi52aXN1YWxWaWV3cG9ydCk7XG59O1xuLyoqXG4gKiBDcmVhdGVzIGEgZGVlcCBjb3B5IG9mIHRoZSB2aXN1YWwgdmlld3BvcnRcbiAqIGF0IGEgZ2l2ZW4gc3RhdGVcbiAqL1xuY29uc3QgY29weVZpc3VhbFZpZXdwb3J0ID0gKHZpc3VhbFZpZXdwb3J0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IE1hdGgucm91bmQodmlzdWFsVmlld3BvcnQud2lkdGgpLFxuICAgIGhlaWdodDogTWF0aC5yb3VuZCh2aXN1YWxWaWV3cG9ydC5oZWlnaHQpLFxuICAgIG9mZnNldFRvcDogdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wLFxuICAgIG9mZnNldExlZnQ6IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQsXG4gICAgcGFnZVRvcDogdmlzdWFsVmlld3BvcnQucGFnZVRvcCxcbiAgICBwYWdlTGVmdDogdmlzdWFsVmlld3BvcnQucGFnZUxlZnQsXG4gICAgc2NhbGU6IHZpc3VhbFZpZXdwb3J0LnNjYWxlLFxuICB9O1xufTtcblxuZXhwb3J0IHsgS0VZQk9BUkRfRElEX0NMT1NFLCBLRVlCT0FSRF9ESURfT1BFTiwgY29weVZpc3VhbFZpZXdwb3J0LCBrZXlib2FyZERpZENsb3NlLCBrZXlib2FyZERpZE9wZW4sIGtleWJvYXJkRGlkUmVzaXplLCByZXNldEtleWJvYXJkQXNzaXN0LCBzZXRLZXlib2FyZENsb3NlLCBzZXRLZXlib2FyZE9wZW4sIHN0YXJ0S2V5Ym9hcmRBc3Npc3QsIHRyYWNrVmlld3BvcnRDaGFuZ2VzIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgdyBhcyB3aW4gfSBmcm9tICcuL2luZGV4LTMzZmZlYzI1LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY29udHJvbGxlciB0aGF0IHRyYWNrcyBhbmQgcmVhY3RzIHRvIG9wZW5pbmcgb3IgY2xvc2luZyB0aGUga2V5Ym9hcmQuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ga2V5Ym9hcmRDaGFuZ2VDYWxsYmFjayBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUga2V5Ym9hcmQgb3BlbnMgb3IgY2xvc2VzLlxuICovXG5jb25zdCBjcmVhdGVLZXlib2FyZENvbnRyb2xsZXIgPSAoa2V5Ym9hcmRDaGFuZ2VDYWxsYmFjaykgPT4ge1xuICBsZXQga2V5Ym9hcmRXaWxsU2hvd0hhbmRsZXI7XG4gIGxldCBrZXlib2FyZFdpbGxIaWRlSGFuZGxlcjtcbiAgbGV0IGtleWJvYXJkVmlzaWJsZTtcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBrZXlib2FyZFdpbGxTaG93SGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGtleWJvYXJkVmlzaWJsZSA9IHRydWU7XG4gICAgICBpZiAoa2V5Ym9hcmRDaGFuZ2VDYWxsYmFjaylcbiAgICAgICAga2V5Ym9hcmRDaGFuZ2VDYWxsYmFjayh0cnVlKTtcbiAgICB9O1xuICAgIGtleWJvYXJkV2lsbEhpZGVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAga2V5Ym9hcmRWaXNpYmxlID0gZmFsc2U7XG4gICAgICBpZiAoa2V5Ym9hcmRDaGFuZ2VDYWxsYmFjaylcbiAgICAgICAga2V5Ym9hcmRDaGFuZ2VDYWxsYmFjayhmYWxzZSk7XG4gICAgfTtcbiAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4uYWRkRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmRXaWxsU2hvdycsIGtleWJvYXJkV2lsbFNob3dIYW5kbGVyKTtcbiAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4uYWRkRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmRXaWxsSGlkZScsIGtleWJvYXJkV2lsbEhpZGVIYW5kbGVyKTtcbiAgfTtcbiAgY29uc3QgZGVzdHJveSA9ICgpID0+IHtcbiAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmRXaWxsU2hvdycsIGtleWJvYXJkV2lsbFNob3dIYW5kbGVyKTtcbiAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmRXaWxsSGlkZScsIGtleWJvYXJkV2lsbEhpZGVIYW5kbGVyKTtcbiAgICBrZXlib2FyZFdpbGxTaG93SGFuZGxlciA9IGtleWJvYXJkV2lsbEhpZGVIYW5kbGVyID0gdW5kZWZpbmVkO1xuICB9O1xuICBjb25zdCBpc0tleWJvYXJkVmlzaWJsZSA9ICgpID0+IGtleWJvYXJkVmlzaWJsZTtcbiAgaW5pdCgpO1xuICByZXR1cm4geyBpbml0LCBkZXN0cm95LCBpc0tleWJvYXJkVmlzaWJsZSB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlS2V5Ym9hcmRDb250cm9sbGVyIGFzIGMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5jb25zdCBzcGlubmVycyA9IHtcbiAgYnViYmxlczoge1xuICAgIGR1cjogMTAwMCxcbiAgICBjaXJjbGVzOiA5LFxuICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7KGR1ciAqIGluZGV4KSAvIHRvdGFsIC0gZHVyfW1zYDtcbiAgICAgIGNvbnN0IGFuZ2xlID0gKDIgKiBNYXRoLlBJICogaW5kZXgpIC8gdG90YWw7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiA1LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHRvcDogYCR7OSAqIE1hdGguc2luKGFuZ2xlKX1weGAsXG4gICAgICAgICAgbGVmdDogYCR7OSAqIE1hdGguY29zKGFuZ2xlKX1weGAsXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICBjaXJjbGVzOiB7XG4gICAgZHVyOiAxMDAwLFxuICAgIGNpcmNsZXM6IDgsXG4gICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgY29uc3Qgc3RlcCA9IGluZGV4IC8gdG90YWw7XG4gICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGAke2R1ciAqIHN0ZXAgLSBkdXJ9bXNgO1xuICAgICAgY29uc3QgYW5nbGUgPSAyICogTWF0aC5QSSAqIHN0ZXA7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiA1LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHRvcDogYCR7OSAqIE1hdGguc2luKGFuZ2xlKX1weGAsXG4gICAgICAgICAgbGVmdDogYCR7OSAqIE1hdGguY29zKGFuZ2xlKX1weGAsXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICBjaXJjdWxhcjoge1xuICAgIGR1cjogMTQwMCxcbiAgICBlbG1EdXJhdGlvbjogdHJ1ZSxcbiAgICBjaXJjbGVzOiAxLFxuICAgIGZuOiAoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiAyMCxcbiAgICAgICAgY3g6IDQ4LFxuICAgICAgICBjeTogNDgsXG4gICAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgICAgdmlld0JveDogJzI0IDI0IDQ4IDQ4JyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsMCknLFxuICAgICAgICBzdHlsZToge30sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIGNyZXNjZW50OiB7XG4gICAgZHVyOiA3NTAsXG4gICAgY2lyY2xlczogMSxcbiAgICBmbjogKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcjogMjYsXG4gICAgICAgIHN0eWxlOiB7fSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgZG90czoge1xuICAgIGR1cjogNzUwLFxuICAgIGNpcmNsZXM6IDMsXG4gICAgZm46IChfLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSAtKDExMCAqIGluZGV4KSArICdtcyc7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiA2LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGxlZnQ6IGAkezkgLSA5ICogaW5kZXh9cHhgLFxuICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgbGluZXM6IHtcbiAgICBkdXI6IDEwMDAsXG4gICAgbGluZXM6IDgsXG4gICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZSgkeygzNjAgLyB0b3RhbCkgKiBpbmRleCArIChpbmRleCA8IHRvdGFsIC8gMiA/IDE4MCA6IC0xODApfWRlZylgO1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBgJHsoZHVyICogaW5kZXgpIC8gdG90YWwgLSBkdXJ9bXNgO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeTE6IDE0LFxuICAgICAgICB5MjogMjYsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICAnbGluZXMtc21hbGwnOiB7XG4gICAgZHVyOiAxMDAwLFxuICAgIGxpbmVzOiA4LFxuICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGByb3RhdGUoJHsoMzYwIC8gdG90YWwpICogaW5kZXggKyAoaW5kZXggPCB0b3RhbCAvIDIgPyAxODAgOiAtMTgwKX1kZWcpYDtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7KGR1ciAqIGluZGV4KSAvIHRvdGFsIC0gZHVyfW1zYDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHkxOiAxMixcbiAgICAgICAgeTI6IDIwLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgJ2xpbmVzLXNoYXJwJzoge1xuICAgIGR1cjogMTAwMCxcbiAgICBsaW5lczogMTIsXG4gICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZSgkezMwICogaW5kZXggKyAoaW5kZXggPCA2ID8gMTgwIDogLTE4MCl9ZGVnKWA7XG4gICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGAkeyhkdXIgKiBpbmRleCkgLyB0b3RhbCAtIGR1cn1tc2A7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB5MTogMTcsXG4gICAgICAgIHkyOiAyOSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gICdsaW5lcy1zaGFycC1zbWFsbCc6IHtcbiAgICBkdXI6IDEwMDAsXG4gICAgbGluZXM6IDEyLFxuICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGByb3RhdGUoJHszMCAqIGluZGV4ICsgKGluZGV4IDwgNiA/IDE4MCA6IC0xODApfWRlZylgO1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBgJHsoZHVyICogaW5kZXgpIC8gdG90YWwgLSBkdXJ9bXNgO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeTE6IDEyLFxuICAgICAgICB5MjogMjAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxufTtcbmNvbnN0IFNQSU5ORVJTID0gc3Bpbm5lcnM7XG5cbmV4cG9ydCB7IFNQSU5ORVJTIGFzIFMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBsIGFzIGNsYW1wIH0gZnJvbSAnLi9oZWxwZXJzLTRkMjcyMzYwLmpzJztcbmltcG9ydCB7IGkgYXMgaXNSVEwgfSBmcm9tICcuL2Rpci1lOGI3NjdhOC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVHZXN0dXJlIH0gZnJvbSAnLi9pbmRleC0zZjFhN2Q5NS5qcyc7XG5pbXBvcnQgJy4vZ2VzdHVyZS1jb250cm9sbGVyLTE3ZTgyMDA2LmpzJztcblxuY29uc3QgY3JlYXRlU3dpcGVCYWNrR2VzdHVyZSA9IChlbCwgY2FuU3RhcnRIYW5kbGVyLCBvblN0YXJ0SGFuZGxlciwgb25Nb3ZlSGFuZGxlciwgb25FbmRIYW5kbGVyKSA9PiB7XG4gIGNvbnN0IHdpbiA9IGVsLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gIGNvbnN0IHJ0bCA9IGlzUlRMKGVsKTtcbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhIGdlc3R1cmUgaXMgbmVhciB0aGUgZWRnZVxuICAgKiBvZiB0aGUgc2NyZWVuLiBJZiB0cnVlLCB0aGVuIHRoZSBzd2lwZVxuICAgKiB0byBnbyBiYWNrIGdlc3R1cmUgc2hvdWxkIHByb2NlZWQuXG4gICAqL1xuICBjb25zdCBpc0F0RWRnZSA9IChkZXRhaWwpID0+IHtcbiAgICBjb25zdCB0aHJlc2hvbGQgPSA1MDtcbiAgICBjb25zdCB7IHN0YXJ0WCB9ID0gZGV0YWlsO1xuICAgIGlmIChydGwpIHtcbiAgICAgIHJldHVybiBzdGFydFggPj0gd2luLmlubmVyV2lkdGggLSB0aHJlc2hvbGQ7XG4gICAgfVxuICAgIHJldHVybiBzdGFydFggPD0gdGhyZXNob2xkO1xuICB9O1xuICBjb25zdCBnZXREZWx0YVggPSAoZGV0YWlsKSA9PiB7XG4gICAgcmV0dXJuIHJ0bCA/IC1kZXRhaWwuZGVsdGFYIDogZGV0YWlsLmRlbHRhWDtcbiAgfTtcbiAgY29uc3QgZ2V0VmVsb2NpdHlYID0gKGRldGFpbCkgPT4ge1xuICAgIHJldHVybiBydGwgPyAtZGV0YWlsLnZlbG9jaXR5WCA6IGRldGFpbC52ZWxvY2l0eVg7XG4gIH07XG4gIGNvbnN0IGNhblN0YXJ0ID0gKGRldGFpbCkgPT4ge1xuICAgIHJldHVybiBpc0F0RWRnZShkZXRhaWwpICYmIGNhblN0YXJ0SGFuZGxlcigpO1xuICB9O1xuICBjb25zdCBvbk1vdmUgPSAoZGV0YWlsKSA9PiB7XG4gICAgLy8gc2V0IHRoZSB0cmFuc2l0aW9uIGFuaW1hdGlvbidzIHByb2dyZXNzXG4gICAgY29uc3QgZGVsdGEgPSBnZXREZWx0YVgoZGV0YWlsKTtcbiAgICBjb25zdCBzdGVwVmFsdWUgPSBkZWx0YSAvIHdpbi5pbm5lcldpZHRoO1xuICAgIG9uTW92ZUhhbmRsZXIoc3RlcFZhbHVlKTtcbiAgfTtcbiAgY29uc3Qgb25FbmQgPSAoZGV0YWlsKSA9PiB7XG4gICAgLy8gdGhlIHN3aXBlIGJhY2sgZ2VzdHVyZSBoYXMgZW5kZWRcbiAgICBjb25zdCBkZWx0YSA9IGdldERlbHRhWChkZXRhaWwpO1xuICAgIGNvbnN0IHdpZHRoID0gd2luLmlubmVyV2lkdGg7XG4gICAgY29uc3Qgc3RlcFZhbHVlID0gZGVsdGEgLyB3aWR0aDtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IGdldFZlbG9jaXR5WChkZXRhaWwpO1xuICAgIGNvbnN0IHogPSB3aWR0aCAvIDIuMDtcbiAgICBjb25zdCBzaG91bGRDb21wbGV0ZSA9IHZlbG9jaXR5ID49IDAgJiYgKHZlbG9jaXR5ID4gMC4yIHx8IGRlbHRhID4geik7XG4gICAgY29uc3QgbWlzc2luZyA9IHNob3VsZENvbXBsZXRlID8gMSAtIHN0ZXBWYWx1ZSA6IHN0ZXBWYWx1ZTtcbiAgICBjb25zdCBtaXNzaW5nRGlzdGFuY2UgPSBtaXNzaW5nICogd2lkdGg7XG4gICAgbGV0IHJlYWxEdXIgPSAwO1xuICAgIGlmIChtaXNzaW5nRGlzdGFuY2UgPiA1KSB7XG4gICAgICBjb25zdCBkdXIgPSBtaXNzaW5nRGlzdGFuY2UgLyBNYXRoLmFicyh2ZWxvY2l0eSk7XG4gICAgICByZWFsRHVyID0gTWF0aC5taW4oZHVyLCA1NDApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUT0RPOiBzdGVwVmFsdWUgY2FuIHNvbWV0aW1lcyByZXR1cm4gbmVnYXRpdmUgdmFsdWVzXG4gICAgICogb3IgdmFsdWVzIGdyZWF0ZXIgdGhhbiAxIHdoaWNoIHNob3VsZCBub3QgYmUgcG9zc2libGUuXG4gICAgICogTmVlZCB0byBpbnZlc3RpZ2F0ZSBtb3JlIHRvIGZpbmQgd2hlcmUgdGhlIGlzc3VlIGlzLlxuICAgICAqL1xuICAgIG9uRW5kSGFuZGxlcihzaG91bGRDb21wbGV0ZSwgc3RlcFZhbHVlIDw9IDAgPyAwLjAxIDogY2xhbXAoMCwgc3RlcFZhbHVlLCAwLjk5OTkpLCByZWFsRHVyKTtcbiAgfTtcbiAgcmV0dXJuIGNyZWF0ZUdlc3R1cmUoe1xuICAgIGVsLFxuICAgIGdlc3R1cmVOYW1lOiAnZ29iYWNrLXN3aXBlJyxcbiAgICBnZXN0dXJlUHJpb3JpdHk6IDQwLFxuICAgIHRocmVzaG9sZDogMTAsXG4gICAgY2FuU3RhcnQsXG4gICAgb25TdGFydDogb25TdGFydEhhbmRsZXIsXG4gICAgb25Nb3ZlLFxuICAgIG9uRW5kLFxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVN3aXBlQmFja0dlc3R1cmUgfTtcbiJdLCJuYW1lcyI6WyJjIiwid3JpdGVUYXNrIiwiaCIsImhhcHRpY1NlbGVjdGlvbkVuZCIsImEiLCJoYXB0aWNTZWxlY3Rpb25TdGFydCIsImIiLCJoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkIiwiY3JlYXRlR2VzdHVyZSIsImNyZWF0ZUJ1dHRvbkFjdGl2ZUdlc3R1cmUiLCJlbCIsImlzQnV0dG9uIiwiY3VycmVudFRvdWNoZWRCdXR0b24iLCJpbml0aWFsVG91Y2hlZEJ1dHRvbiIsImFjdGl2YXRlQnV0dG9uQXRQb2ludCIsIngiLCJ5IiwiaGFwdGljRmVlZGJhY2tGbiIsImRvY3VtZW50IiwidGFyZ2V0IiwiZWxlbWVudEZyb21Qb2ludCIsImNsZWFyQWN0aXZlQnV0dG9uIiwic2V0QWN0aXZlQnV0dG9uIiwiYnV0dG9uIiwiYnV0dG9uVG9Nb2RpZnkiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNwYXRjaENsaWNrIiwicmVtb3ZlIiwiY2xpY2siLCJ1bmRlZmluZWQiLCJnZXN0dXJlTmFtZSIsInRocmVzaG9sZCIsIm9uU3RhcnQiLCJldiIsImN1cnJlbnRYIiwiY3VycmVudFkiLCJvbk1vdmUiLCJvbkVuZCIsImlzUlRMIiwiaG9zdEVsIiwiZGlyIiwidG9Mb3dlckNhc2UiLCJpIiwiSU9OX0ZPQ1VTRUQiLCJJT05fRk9DVVNBQkxFIiwiRk9DVVNfS0VZUyIsInN0YXJ0Rm9jdXNWaXNpYmxlIiwicm9vdEVsIiwiY3VycmVudEZvY3VzIiwia2V5Ym9hcmRNb2RlIiwicmVmIiwic2hhZG93Um9vdCIsInJvb3QiLCJib2R5Iiwic2V0Rm9jdXMiLCJlbGVtZW50cyIsImZvckVhY2giLCJwb2ludGVyRG93biIsIm9uS2V5ZG93biIsImluY2x1ZGVzIiwia2V5Iiwib25Gb2N1c2luIiwiY29tcG9zZWRQYXRoIiwidG9Gb2N1cyIsImZpbHRlciIsImNvbnRhaW5zIiwib25Gb2N1c291dCIsImFjdGl2ZUVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnRPblJlYWR5IiwiYXR0YWNoQ29tcG9uZW50IiwiZGVsZWdhdGUiLCJjb250YWluZXIiLCJjb21wb25lbnQiLCJjc3NDbGFzc2VzIiwiY29tcG9uZW50UHJvcHMiLCJpbmxpbmUiLCJfYSIsImF0dGFjaFZpZXdUb0RvbSIsIkhUTUxFbGVtZW50IiwiRXJyb3IiLCJvd25lckRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsImFwcGVuZENoaWxkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJkZXRhY2hDb21wb25lbnQiLCJlbGVtZW50IiwicGFyZW50RWxlbWVudCIsInJlbW92ZVZpZXdGcm9tRG9tIiwiQ29yZURlbGVnYXRlIiwiQmFzZUNvbXBvbmVudCIsIlJlZmVyZW5jZSIsInVzZXJDb21wb25lbnQiLCJ1c2VyQ29tcG9uZW50UHJvcHMiLCJfYiIsImNoaWxkcmVuIiwibGVuZ3RoIiwiYXBwZW5kIiwiYXBwIiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUNvbW1lbnQiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiQyIsImQiLCJIYXB0aWNFbmdpbmUiLCJnZXRFbmdpbmUiLCJ3aW4iLCJ3aW5kb3ciLCJUYXB0aWNFbmdpbmUiLCJDYXBhY2l0b3IiLCJpc1BsdWdpbkF2YWlsYWJsZSIsIlBsdWdpbnMiLCJIYXB0aWNzIiwiYXZhaWxhYmxlIiwiaXNDb3Jkb3ZhIiwiaXNDYXBhY2l0b3IiLCJpbXBhY3QiLCJvcHRpb25zIiwiZW5naW5lIiwic3R5bGUiLCJ0b1VwcGVyQ2FzZSIsIm5vdGlmaWNhdGlvbiIsInNlbGVjdGlvbiIsInNlbGVjdGlvblN0YXJ0IiwiZ2VzdHVyZVNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uQ2hhbmdlZCIsImdlc3R1cmVTZWxlY3Rpb25DaGFuZ2VkIiwic2VsZWN0aW9uRW5kIiwiZ2VzdHVyZVNlbGVjdGlvbkVuZCIsImhhcHRpY1NlbGVjdGlvbiIsImhhcHRpY0ltcGFjdCIsInciLCJwcmludFJlcXVpcmVkRWxlbWVudEVycm9yIiwiSU9OX0NPTlRFTlRfVEFHX05BTUUiLCJJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SIiwiSU9OX0NPTlRFTlRfQ0xBU1NfU0VMRUNUT1IiLCJJT05fQ09OVEVOVF9TRUxFQ1RPUiIsImlzSW9uQ29udGVudCIsInRhZ05hbWUiLCJnZXRTY3JvbGxFbGVtZW50IiwiZmluZElvbkNvbnRlbnQiLCJjdXN0b21Db250ZW50SG9zdCIsImZpbmRDbG9zZXN0SW9uQ29udGVudCIsImNsb3Nlc3QiLCJzY3JvbGxUb1RvcCIsImR1cmF0aW9uTXMiLCJjb250ZW50Iiwic2Nyb2xsVG8iLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJzY3JvbGxCeVBvaW50Iiwic2Nyb2xsQnkiLCJwcmludElvbkNvbnRlbnRFcnJvck1zZyIsImRpc2FibGVDb250ZW50U2Nyb2xsWSIsImNvbnRlbnRFbCIsImlvbkNvbnRlbnQiLCJpbml0aWFsU2Nyb2xsWSIsInNjcm9sbFkiLCJzZXRQcm9wZXJ0eSIsInJlc2V0Q29udGVudFNjcm9sbFkiLCJyZW1vdmVQcm9wZXJ0eSIsIkkiLCJmIiwiZyIsInAiLCJyIiwicyIsImFycm93QmFja1NoYXJwIiwiYXJyb3dEb3duIiwiY2FyZXRCYWNrU2hhcnAiLCJjYXJldERvd25TaGFycCIsImNhcmV0VXBTaGFycCIsImNoZWNrbWFya091dGxpbmUiLCJjaGV2cm9uQmFjayIsImNoZXZyb25Eb3duIiwiY2hldnJvbkZvcndhcmQiLCJjaGV2cm9uRm9yd2FyZE91dGxpbmUiLCJjbG9zZSIsImNsb3NlQ2lyY2xlIiwiY2xvc2VTaGFycCIsImVsbGlwc2VPdXRsaW5lIiwiZWxsaXBzaXNIb3Jpem9udGFsIiwibWVudU91dGxpbmUiLCJtZW51U2hhcnAiLCJyZW1vdmVPdXRsaW5lIiwicmVvcmRlclRocmVlT3V0bGluZSIsInJlb3JkZXJUd29TaGFycCIsInNlYXJjaE91dGxpbmUiLCJzZWFyY2hTaGFycCIsImUiLCJqIiwiayIsImwiLCJtIiwibiIsIm8iLCJxIiwidCIsInUiLCJ2IiwiS0VZQk9BUkRfRElEX09QRU4iLCJLRVlCT0FSRF9ESURfQ0xPU0UiLCJLRVlCT0FSRF9USFJFU0hPTEQiLCJwcmV2aW91c1Zpc3VhbFZpZXdwb3J0IiwiY3VycmVudFZpc3VhbFZpZXdwb3J0Iiwia2V5Ym9hcmRPcGVuIiwicmVzZXRLZXlib2FyZEFzc2lzdCIsInN0YXJ0S2V5Ym9hcmRBc3Npc3QiLCJzdGFydE5hdGl2ZUxpc3RlbmVycyIsInZpc3VhbFZpZXdwb3J0IiwiY29weVZpc3VhbFZpZXdwb3J0Iiwib25yZXNpemUiLCJ0cmFja1ZpZXdwb3J0Q2hhbmdlcyIsImtleWJvYXJkRGlkT3BlbiIsImtleWJvYXJkRGlkUmVzaXplIiwic2V0S2V5Ym9hcmRPcGVuIiwia2V5Ym9hcmREaWRDbG9zZSIsInNldEtleWJvYXJkQ2xvc2UiLCJmaXJlS2V5Ym9hcmRPcGVuRXZlbnQiLCJmaXJlS2V5Ym9hcmRDbG9zZUV2ZW50Iiwic2NhbGVkSGVpZ2h0RGlmZmVyZW5jZSIsImhlaWdodCIsInNjYWxlIiwid2lkdGgiLCJpbm5lckhlaWdodCIsIm5hdGl2ZUV2Iiwia2V5Ym9hcmRIZWlnaHQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImRpc3BhdGNoRXZlbnQiLCJNYXRoIiwicm91bmQiLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0IiwicGFnZVRvcCIsInBhZ2VMZWZ0IiwiY3JlYXRlS2V5Ym9hcmRDb250cm9sbGVyIiwia2V5Ym9hcmRDaGFuZ2VDYWxsYmFjayIsImtleWJvYXJkV2lsbFNob3dIYW5kbGVyIiwia2V5Ym9hcmRXaWxsSGlkZUhhbmRsZXIiLCJrZXlib2FyZFZpc2libGUiLCJpbml0IiwiaXNLZXlib2FyZFZpc2libGUiLCJzcGlubmVycyIsImJ1YmJsZXMiLCJkdXIiLCJjaXJjbGVzIiwiZm4iLCJpbmRleCIsInRvdGFsIiwiYW5pbWF0aW9uRGVsYXkiLCJhbmdsZSIsIlBJIiwic2luIiwiY29zIiwic3RlcCIsImNpcmN1bGFyIiwiZWxtRHVyYXRpb24iLCJjeCIsImN5IiwiZmlsbCIsInZpZXdCb3giLCJ0cmFuc2Zvcm0iLCJjcmVzY2VudCIsImRvdHMiLCJfIiwibGluZXMiLCJ5MSIsInkyIiwiU1BJTk5FUlMiLCJTIiwiY2xhbXAiLCJjcmVhdGVTd2lwZUJhY2tHZXN0dXJlIiwiY2FuU3RhcnRIYW5kbGVyIiwib25TdGFydEhhbmRsZXIiLCJvbk1vdmVIYW5kbGVyIiwib25FbmRIYW5kbGVyIiwiZGVmYXVsdFZpZXciLCJydGwiLCJpc0F0RWRnZSIsInN0YXJ0WCIsImlubmVyV2lkdGgiLCJnZXREZWx0YVgiLCJkZWx0YVgiLCJnZXRWZWxvY2l0eVgiLCJ2ZWxvY2l0eVgiLCJjYW5TdGFydCIsImRlbHRhIiwic3RlcFZhbHVlIiwidmVsb2NpdHkiLCJ6Iiwic2hvdWxkQ29tcGxldGUiLCJtaXNzaW5nIiwibWlzc2luZ0Rpc3RhbmNlIiwicmVhbER1ciIsImFicyIsIm1pbiIsImdlc3R1cmVQcmlvcml0eSJdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2XX0=