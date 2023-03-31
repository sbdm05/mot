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

module.exports = "<ion-header>\n  <ion-toolbar color=\"shade\">\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\n      <ion-button slot=\"icon\">\n        <ion-icon class=\"icon\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios ion-text-capitalize\">Modèle 3 Jaune</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <div id='main' style='font-size:16px; padding:10px 35px; margin: 0 auto;font-family: arial;'>\n\n      <header style='display: flex; align-items: center; border-top: 3px solid black;border-bottom: 3px solid black;'>\n        <div\n          style='flex:1;margin: 24px; border-right: 3px solid black; padding: 16px; background-color:white;text-align: right;'>\n          <!-- ici icône -->\n          <p>\n            <ion-icon name=\"pin\"></ion-icon> {{user.adresse}}\n          </p>\n          <p>\n            <ion-icon name=\"phone-portrait\"></ion-icon> {{user.tel}}\n          </p>\n          <p>\n            <ion-icon name=\"send\"></ion-icon> {{user.email}}\n          </p>\n        </div>\n        <div style='flex:2; font-size:16px; font-weight: 600'>\n\n          <p style='font-size:24px'>{{user.prenom}} {{user.nom}}</p>\n          <p style='padding: 6px; color: white; background-color: rgb(255, 175, 3)'>{{user?.letters[0].intitule}}</p>\n\n        </div>\n\n      </header>\n\n      <section id='contactInfos' style='text-align: right;'>\n        <p>{{user.letters[0].societe}}</p>\n        <p>{{user.letters[0].contact}}</p>\n        <p>{{user.letters[0].adresseSociete}}</p>\n        <p>{{user.letters[0].cpVille}}</p>\n      </section>\n\n      <!-- partie expert -->\n      <section id='content' *ngIf=\"user.letters[0].experience ===  'expert' \" style='text-align: justify;'>\n        <p style='padding:10px 0px; text-align: right;'>Le {{today | date:'dd/MM/yyyy'}}</p>\n        <p style='padding-bottom:10px'>Objet : candidature pour le poste de {{user.letters[0].intitule}}</p>\n        <p *ngIf='user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          {{user.letters[0].contact}},\n        </p>\n        <p *ngIf='!user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          Madame, Monsieur,\n        </p>\n        <!-- premier paragraphe -->\n        <p>\n          Je suis actuellement à la recherche d'un emploi dans votre secteur d'activité, c'est pourquoi, je me permets de\n          vous écrire pour postuler au poste de {{user.letters[0].intitule}}.</p>\n          <!-- second paragraphe -->\n        <p>\n          En effet, j'ai déjà pu exercer à ce poste lors d'une précédente mission. Cette expérience a été très enrichissante et\n          formatrice. Je souhaiterais vivement mettre ces compétences à profit dans votre structure. Dès le début de notre collaboration, vous pourrez constater que je suis {{user.adjs[0]}}, {{user.adjs[1]}} et\n          {{user.adjs[2]}} des qualités essentielles dans ce métier. </p>\n\n        <!-- conclusion -->\n        <p>Je suis disponible pour m'entretenir avec vous, par téléphone ou en personne afin de déterminer comment je\n          pourrais contribuer au mieux au développement de votre entreprise. </p>\n          <p>Je vous remercie de l'attention que vous pourrez accorder à ma candidature,</p>\n          <p>Sincères salutations,</p>\n\n        <p style='margin:24px 0rem; font-weight:600'>{{user.prenom}} {{user.nom}}</p>\n        <div style='border-bottom: 3px solid black;'></div>\n      </section>\n\n      <!-- partie débutant -->\n      <section id='content' style='text-align: justify;' *ngIf=\"user.letters[0].experience ===  'debutant' \">\n        <p style='padding:10px 0px; text-align: right;'>Le {{today | date:'dd/MM/yyyy'}}</p>\n        <p style='padding-bottom:10px'>Objet : candidature pour le poste de {{user.letters[0].intitule}}</p>\n        <p *ngIf='user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n          {{user.letters[0].contact}},\n        </p>\n        <p *ngIf='!user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n        Madame, Monsieur,\n        </p>\n        <!-- premier paragraphe -->\n        <p>\n          Je suis actuellement à la recherche d'un emploi dans votre secteur d'activité, c'est pourquoi, je me permets de\n          vous écrire pour postuler au poste de {{user.letters[0].intitule}}.\n        </p>\n        <p>\n          <!-- si pas expérience -->\n          <span *ngIf=\"user.gender ==='femme'\">\n            Je débute mon activité professionnelle avec beaucoup d'enthousiasme à l'idée de m'intégrer à une nouvelle équipe et\n            d'acquérir de nouvelles compétences. Ma capacité d'adaptation et mon envie de bien faire les tâches demandées me\n            permettront d'être opérationnelle rapidement. Je souhaiterais vivement mettre ces compétences à profit dans votre\n            structure.\n          </span>\n          <span *ngIf=\"user.gender ==='homme'\">\n            Je débute mon activité professionnelle avec beaucoup d'enthousiasme à l'idée de m'intégrer à une nouvelle équipe et\n            d'acquérir de nouvelles compétences. Ma capacité d'adaptation et mon envie de bien faire les tâches demandées me\n            permettront d'être opérationnel rapidement. Je souhaiterais vivement mettre ces compétences à profit dans votre\n            structure.\n          </span>\n        </p>\n\n        <!-- second paragraphe -->\n\n        <p>Dès le début de notre collaboration, vous pourrez constater que je suis {{user.adjs[0]}}, {{user.adjs[1]}} et\n          {{user.adjs[2]}}, des qualités essentielles dans ce métier. </p>\n        <!-- conclusion -->\n        <p>Je suis disponible pour m'entretenir avec vous, par téléphone ou en personne afin de déterminer comment je\n          pourrais contribuer au mieux au développement de votre entreprise. </p>\n          <p>Je vous remercie de l'attention que vous pourrez accorder à ma candidature,</p>\n          <p>Sincères salutations,</p>\n\n        <p style='margin:24px 0px; font-weight:600'>{{user.prenom}} {{user.nom}}</p>\n        <div style='border-bottom: 3px solid black;'></div>\n      </section>\n\n\n    </div>\n</ion-content>\n\n\n<ion-footer (click)=\"downloadLetter()\">\n  <ion-toolbar color=\"success\" class=\"ion-padding-horizontal\">\n    <div class=\"ion-text-center\">\n      <h4 class=\"ion-no-margin\">Télécharger la lettre</h4>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ }),

/***/ 8515:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/cover-letter-simple/cover-letter-simple.page.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"shade\">\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\n      <ion-button slot=\"icon\">\n        <ion-icon class=\"icon\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios ion-text-capitalize\">Modèle 2 Standard</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n\n  <div id='main' style='font-family: arial; font-size:16px; padding:10px 35px'>\n    <header style='display: flex; text-align: left;'>\n      <div style='flex:1; background-color:white;font-size:16px;'>\n        <!-- ici icône -->\n        <p>{{user.prenom}} {{user.nom}}</p>\n        <p>\n          <ion-icon name=\"pin\"></ion-icon> {{user.adresse}}\n        </p>\n        <p>\n          <ion-icon name=\"phone-portrait\"></ion-icon> {{user.tel}}\n        </p>\n        <p>\n          <ion-icon name=\"send\"></ion-icon> {{user.email}}\n        </p>\n\n\n      </div>\n    </header>\n\n    <section id='contactInfos' style='text-align: right;'>\n      <p>{{user.letters[0].societe}}</p>\n      <p>{{user.letters[0].contact}}</p>\n      <p>{{user.letters[0].adresseSociete}}</p>\n      <p>{{user.letters[0].cpVille}}</p>\n    </section>\n\n    <!-- partie expert -->\n    <section id='content' style='text-align: justify;' *ngIf=\"user.letters[0].experience ===  'expert' \">\n      <p style='padding-bottom:35px; text-align: right;'>Le {{today | date:'dd/MM/yyyy'}}</p>\n      <p style='padding-bottom:10px'>Objet : candidature pour le poste de {{user.letters[0].intitule}}</p>\n      <p *ngIf='user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n        {{user.letters[0].contact}},\n      </p>\n      <p *ngIf='!user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n        Madame, Monsieur,\n      </p>\n      <!-- premier paragraphe -->\n\n    <p>\n      Je suis actuellement à la recherche d'un emploi dans votre secteur d'activité, c'est pourquoi, je me permets de vous\n      écrire pour postuler au poste de {{user.letters[0].intitule}}.\n    </p>\n    <p>\n      <!-- si expérience -->\n      En effet, j'ai déjà pu exercer à ce poste lors d'une précédente mission. Cette expérience a été très enrichissante et\n      formatrice. Je souhaiterais vivement mettre ces compétences à profit dans votre structure.\n    </p>\n\n\n      <!-- second paragraphe -->\n      <p>Dès le début de notre collaboration, vous pourrez constater que je suis {{user.adjs[0]}}, {{user.adjs[1]}} et\n        {{user.adjs[2]}} des qualités essentielles dans ce métier. </p>\n      <!-- conclusion -->\n      <p>Je suis disponible pour m'entretenir avec vous, par téléphone ou en personne afin de déterminer comment je\n        pourrais contribuer au mieux au développement de votre entreprise. </p>\n        <p>Je vous remercie de l'attention que vous pourrez accorder à ma candidature,</p>\n        <p>Sincères salutations,</p>\n\n      <p>{{user.prenom}} {{user.nom}}</p>\n\n    </section>\n\n    <!-- partie débutant -->\n    <section id='content' style='text-align: justify;' *ngIf=\"user.letters[0].experience ===  'debutant' \">\n      <p style='padding-bottom:35px; text-align: right;'>Le {{today | date:'dd/MM/yyyy'}}</p>\n      <p style='padding-bottom:10px'>Objet : candidature pour le poste de {{user.letters[0].intitule}}</p>\n      <p *ngIf='user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n        {{user.letters[0].contact}},\n      </p>\n      <p *ngIf='!user.letters[0].contact' style='padding-bottom:8px; text-align: left;'>\n        Madame, Monsieur,\n      </p>\n\n      <!-- premier paragraphe -->\n      <p>\n        Je suis actuellement à la recherche d'un emploi dans votre secteur d'activité, c'est pourquoi, je me permets de\n        vous\n        écrire pour postuler au poste de {{user.letters[0].intitule}}.\n      </p>\n        <!-- si expérience -->\n        <p>\n          <!-- si pas expérience -->\n          <span *ngIf=\"user.gender ==='femme'\">\n            Je débute mon activité professionnelle avec beaucoup d'enthousiasme à l'idée de m'intégrer à une nouvelle équipe et\n            d'acquérir de nouvelles compétences. Ma capacité d'adaptation et mon envie de bien faire les tâches demandées me\n            permettront d'être opérationnelle rapidement. Je souhaiterais vivement mettre ces compétences à profit dans votre\n            structure.\n          </span>\n          <span *ngIf=\"user.gender ==='homme'\">\n            Je débute mon activité professionnelle avec beaucoup d'enthousiasme à l'idée de m'intégrer à une nouvelle équipe et\n            d'acquérir de nouvelles compétences. Ma capacité d'adaptation et mon envie de bien faire les tâches demandées me\n            permettront d'être opérationnel rapidement. Je souhaiterais vivement mettre ces compétences à profit dans votre\n            structure.\n          </span>\n        </p>\n\n      <!-- second paragraphe -->\n\n      <p>Dès le début de notre collaboration, vous pourrez constater que je suis {{user.adjs[0]}}, {{user.adjs[1]}} et\n        {{user.adjs[2]}}, des qualités essentielles dans ce métier. </p>\n      <!-- conclusion -->\n      <p>Je suis disponible pour m'entretenir avec vous, par téléphone ou en personne afin de déterminer comment je\n        pourrais\n        contribuer au mieux au développement de votre entreprise. </p>\n        <p>Je vous remercie de l'attention que vous pourrez accorder à ma candidature,</p>\n        <p>Sincères salutations,</p>\n\n      <p>{{user.prenom}} {{user.nom}}</p>\n\n    </section>\n\n\n  </div>\n\n\n\n  <ion-footer (click)=\"downloadLetter()\">\n    <ion-toolbar color=\"success\" class=\"ion-padding-horizontal\">\n      <div class=\"ion-text-center\">\n        <h4 class=\"ion-no-margin\">Télécharger la lettre</h4>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n";

/***/ }),

/***/ 959:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHckUsS0FBbEM7SUFDQSxJQUFJdUUsT0FBTyxHQUFHLENBQWQ7O0lBQ0EsSUFBSUQsZUFBZSxHQUFHLENBQXRCLEVBQXlCO01BQ3ZCLE1BQU1oRCxHQUFHLEdBQUdnRCxlQUFlLEdBQUcvRCxJQUFJLENBQUNpRSxHQUFMLENBQVNOLFFBQVQsQ0FBOUI7TUFDQUssT0FBTyxHQUFHaEUsSUFBSSxDQUFDa0UsR0FBTCxDQUFTbkQsR0FBVCxFQUFjLEdBQWQsQ0FBVjtJQUNEO0lBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7O0lBQ0krQixZQUFZLENBQUNlLGNBQUQsRUFBaUJILFNBQVMsSUFBSSxDQUFiLEdBQWlCLElBQWpCLEdBQXdCakIsdURBQUssQ0FBQyxDQUFELEVBQUlpQixTQUFKLEVBQWUsTUFBZixDQUE5QyxFQUFzRU0sT0FBdEUsQ0FBWjtFQUNELENBckJEOztFQXNCQSxPQUFPdFMsaUVBQWEsQ0FBQztJQUNuQkUsRUFEbUI7SUFFbkJxQixXQUFXLEVBQUUsY0FGTTtJQUduQmtSLGVBQWUsRUFBRSxFQUhFO0lBSW5CalIsU0FBUyxFQUFFLEVBSlE7SUFLbkJzUSxRQUxtQjtJQU1uQnJRLE9BQU8sRUFBRXlQLGNBTlU7SUFPbkJyUCxNQVBtQjtJQVFuQkM7RUFSbUIsQ0FBRCxDQUFwQjtBQVVELENBL0REIiwic291cmNlcyI6WyIuL3NyYy9hcHAvY29tcG9uZW50cy9jb3Zlci1sZXR0ZXItYy9jb3Zlci1sZXR0ZXItYy5wYWdlLnRzIiwiLi9zcmMvYXBwL2NvbXBvbmVudHMvY292ZXItbGV0dGVyLXNpbXBsZS9jb3Zlci1sZXR0ZXItc2ltcGxlLnBhZ2UudHMiLCIuL3NyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi9zcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL2V4cGxvcmUtY29udGFpbmVyLm1vZHVsZS50cyIsIi4vc3JjL2FwcC91c2VyL3VzZXIudHMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9idXR0b24tYWN0aXZlLTQ5NzVkYmQwLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vZGlyLWU4Yjc2N2E4LmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vZm9jdXMtdmlzaWJsZS01YWQ2ODI1ZC5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2ZyYW1ld29yay1kZWxlZ2F0ZS1jZTRmODA2Yy5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2hhcHRpYy02ODNiM2IzYy5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTMzZmZlYzI1LmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW5kZXgtMzQxM2Y3YmUuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pbmRleC00MGJiNjllZS5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2tleWJvYXJkLTRkNTU0NGEwLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20va2V5Ym9hcmQtY29udHJvbGxlci03M2FmNjJiMi5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3NwaW5uZXItY29uZmlncy01ZDZiNmZlNy5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3N3aXBlLWJhY2stZmEzMGExMzAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBERkdlbmVyYXRvciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvcGRmLWdlbmVyYXRvci9uZ3gnO1xuaW1wb3J0IHsgTW9kYWxDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ3NyYy9hcHAvdXNlci91c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNvdmVyLWxldHRlci1jJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvdmVyLWxldHRlci1jLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvdmVyLWxldHRlci1jLnBhZ2Uuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZlckxldHRlckNQYWdlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB1c2VyOiBVc2VyO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHRvZGF5OiBudW1iZXIgPSBEYXRlLm5vdygpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbW9kYWxDb250cm9sbGVyOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBwZGZHZW5lcmF0b3I6IFBERkdlbmVyYXRvclxuICApIHt9XG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5tb2RhbENvbnRyb2xsZXIuZGlzbWlzcygpO1xuICB9XG5cbiAgZG93bmxvYWRMZXR0ZXIoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5pbm5lckhUTUw7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGRvY3VtZW50U2l6ZTogJ0E0JyxcbiAgICAgIHR5cGU6ICdzaGFyZScsXG4gICAgICAvLyBsYW5kc2NhcGU6ICdwb3J0cmFpdCcsXG4gICAgICBmaWxlTmFtZTogJ2NvdmVyLWxldHRlci5wZGYnLFxuICAgIH07XG4gICAgdGhpcy5wZGZHZW5lcmF0b3JcbiAgICAgIC5mcm9tRGF0YSh0aGlzLmNvbnRlbnQsIG9wdGlvbnMpXG4gICAgICAudGhlbigoYmFzZTY0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPSycsIGJhc2U2NCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIsICdJbnZvaWNlIFBhZ2UgbmdPbkluaXQnKTtcbiAgfVxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIsICdJbnZvaWNlIFBhZ2VjaGFuZ2VzJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUERGR2VuZXJhdG9yIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9wZGYtZ2VuZXJhdG9yL25neCc7XG5pbXBvcnQgeyBNb2RhbENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnc3JjL2FwcC91c2VyL3VzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY292ZXItbGV0dGVyLXNpbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb3Zlci1sZXR0ZXItc2ltcGxlLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvdmVyLWxldHRlci1zaW1wbGUucGFnZS5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENvdmVyTGV0dGVyU2ltcGxlUGFnZSAge1xuICBASW5wdXQoKSB1c2VyOiBVc2VyO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHRvZGF5OiBudW1iZXIgPSBEYXRlLm5vdygpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbW9kYWxDb250cm9sbGVyOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBwZGZHZW5lcmF0b3I6IFBERkdlbmVyYXRvclxuICApIHt9XG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5tb2RhbENvbnRyb2xsZXIuZGlzbWlzcygpO1xuICB9XG5cbiAgZG93bmxvYWRMZXR0ZXIoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5pbm5lckhUTUw7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGRvY3VtZW50U2l6ZTogJ0E0JyxcbiAgICAgIHR5cGU6ICdzaGFyZScsXG4gICAgICAvLyBsYW5kc2NhcGU6ICdwb3J0cmFpdCcsXG4gICAgICBmaWxlTmFtZTogJ2NvdmVyLWxldHRlci5wZGYnLFxuICAgIH07XG4gICAgdGhpcy5wZGZHZW5lcmF0b3JcbiAgICAgIC5mcm9tRGF0YSh0aGlzLmNvbnRlbnQsIG9wdGlvbnMpXG4gICAgICAudGhlbigoYmFzZTY0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPSycsIGJhc2U2NCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1leHBsb3JlLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2V4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEV4cGxvcmVDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBFeHBsb3JlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIElvbmljTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbRXhwbG9yZUNvbnRhaW5lckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtFeHBsb3JlQ29udGFpbmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBFeHBsb3JlQ29udGFpbmVyQ29tcG9uZW50TW9kdWxlIHt9XG4iLCJleHBvcnQgY2xhc3MgVXNlciB7XG4gIGdlbmRlcjogc3RyaW5nO1xuICBwcmVub206IHN0cmluZztcbiAgbm9tOiBzdHJpbmc7XG4gIHRlbDogbnVtYmVyO1xuICBhZHJlc3NlOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHB3ZDogc3RyaW5nO1xuICBhZGpzOiBbc3RyaW5nLCBzdHJpbmcsIHN0cmluZ107XG4gIGxldHRlcnM6IFtcbiAgICB7XG4gICAgICBpbnRpdHVsZTogc3RyaW5nO1xuICAgICAgc29jaWV0ZTogc3RyaW5nO1xuICAgICAgY29udGFjdDogc3RyaW5nO1xuICAgICAgYWRyZXNzZVNvY2lldGU6IHN0cmluZztcbiAgICAgIGNwVmlsbGU6IHN0cmluZztcbiAgICAgIGV4cGVyaWVuY2U6IHN0cmluZztcbiAgICB9XG4gIF07XG4gIHNhdmVkTGV0dGVyczogW1xuICAgIHtcbiAgICAgIG5ld1ZhbHVlOiB7XG4gICAgICAgIGludGl0dWxlOiBzdHJpbmc7XG4gICAgICAgIHNvY2lldGU6IHN0cmluZztcbiAgICAgICAgY29udGFjdDogc3RyaW5nO1xuICAgICAgICBhZHJlc3NlU29jaWV0ZTogc3RyaW5nO1xuICAgICAgICBjcFZpbGxlOiBzdHJpbmc7XG4gICAgICAgIGV4cGVyaWVuY2U6IHN0cmluZztcbiAgICAgIH07XG4gICAgICBkYXRlOiBzdHJpbmc7XG4gICAgICBfaWQ6IG51bWJlcjtcbiAgICB9XG4gIF07XG4gIGNvbnN0cnVjdG9yKG9iaj86IFBhcnRpYWw8VXNlcj4pIHtcbiAgICBpZiAob2JqKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iaik7XG4gICAgfVxuICB9XG59XG5cbi8vIGFkanM6IFtcbi8vICAgICB7XG4vLyAgICAgICBhZGoxOiBzdHJpbmc7XG4vLyAgICAgICBhZGoyOiBzdHJpbmc7XG4vLyAgICAgICBhZGozOiBzdHJpbmc7XG4vLyAgICAgfVxuLy8gICBdO1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IGMgYXMgd3JpdGVUYXNrIH0gZnJvbSAnLi9pbmRleC0xYTk5YWViNy5qcyc7XG5pbXBvcnQgeyBoIGFzIGhhcHRpY1NlbGVjdGlvbkVuZCwgYSBhcyBoYXB0aWNTZWxlY3Rpb25TdGFydCwgYiBhcyBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkIH0gZnJvbSAnLi9oYXB0aWMtNjgzYjNiM2MuanMnO1xuaW1wb3J0IHsgY3JlYXRlR2VzdHVyZSB9IGZyb20gJy4vaW5kZXgtM2YxYTdkOTUuanMnO1xuXG5jb25zdCBjcmVhdGVCdXR0b25BY3RpdmVHZXN0dXJlID0gKGVsLCBpc0J1dHRvbikgPT4ge1xuICBsZXQgY3VycmVudFRvdWNoZWRCdXR0b247XG4gIGxldCBpbml0aWFsVG91Y2hlZEJ1dHRvbjtcbiAgY29uc3QgYWN0aXZhdGVCdXR0b25BdFBvaW50ID0gKHgsIHksIGhhcHRpY0ZlZWRiYWNrRm4pID0+IHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpO1xuICAgIGlmICghdGFyZ2V0IHx8ICFpc0J1dHRvbih0YXJnZXQpKSB7XG4gICAgICBjbGVhckFjdGl2ZUJ1dHRvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0ICE9PSBjdXJyZW50VG91Y2hlZEJ1dHRvbikge1xuICAgICAgY2xlYXJBY3RpdmVCdXR0b24oKTtcbiAgICAgIHNldEFjdGl2ZUJ1dHRvbih0YXJnZXQsIGhhcHRpY0ZlZWRiYWNrRm4pO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2V0QWN0aXZlQnV0dG9uID0gKGJ1dHRvbiwgaGFwdGljRmVlZGJhY2tGbikgPT4ge1xuICAgIGN1cnJlbnRUb3VjaGVkQnV0dG9uID0gYnV0dG9uO1xuICAgIGlmICghaW5pdGlhbFRvdWNoZWRCdXR0b24pIHtcbiAgICAgIGluaXRpYWxUb3VjaGVkQnV0dG9uID0gY3VycmVudFRvdWNoZWRCdXR0b247XG4gICAgfVxuICAgIGNvbnN0IGJ1dHRvblRvTW9kaWZ5ID0gY3VycmVudFRvdWNoZWRCdXR0b247XG4gICAgd3JpdGVUYXNrKCgpID0+IGJ1dHRvblRvTW9kaWZ5LmNsYXNzTGlzdC5hZGQoJ2lvbi1hY3RpdmF0ZWQnKSk7XG4gICAgaGFwdGljRmVlZGJhY2tGbigpO1xuICB9O1xuICBjb25zdCBjbGVhckFjdGl2ZUJ1dHRvbiA9IChkaXNwYXRjaENsaWNrID0gZmFsc2UpID0+IHtcbiAgICBpZiAoIWN1cnJlbnRUb3VjaGVkQnV0dG9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGJ1dHRvblRvTW9kaWZ5ID0gY3VycmVudFRvdWNoZWRCdXR0b247XG4gICAgd3JpdGVUYXNrKCgpID0+IGJ1dHRvblRvTW9kaWZ5LmNsYXNzTGlzdC5yZW1vdmUoJ2lvbi1hY3RpdmF0ZWQnKSk7XG4gICAgLyoqXG4gICAgICogQ2xpY2tpbmcgb24gb25lIGJ1dHRvbiwgYnV0IHJlbGVhc2luZyBvbiBhbm90aGVyIGJ1dHRvblxuICAgICAqIGRvZXMgbm90IGRpc3BhdGNoIGEgY2xpY2sgZXZlbnQgaW4gYnJvd3NlcnMsIHNvIHdlXG4gICAgICogbmVlZCB0byBkbyBpdCBtYW51YWxseSBoZXJlLiBTb21lIGJyb3dzZXJzIHdpbGxcbiAgICAgKiBkaXNwYXRjaCBhIGNsaWNrIGlmIGNsaWNraW5nIG9uIG9uZSBidXR0b24sIGRyYWdnaW5nIG92ZXJcbiAgICAgKiBhbm90aGVyIGJ1dHRvbiwgYW5kIHJlbGVhc2luZyBvbiB0aGUgb3JpZ2luYWwgYnV0dG9uLiBJbiB0aGF0XG4gICAgICogY2FzZSwgd2UgbmVlZCB0byBtYWtlIHN1cmUgd2UgZG8gbm90IGNhdXNlIGEgZG91YmxlIGNsaWNrIHRoZXJlLlxuICAgICAqL1xuICAgIGlmIChkaXNwYXRjaENsaWNrICYmIGluaXRpYWxUb3VjaGVkQnV0dG9uICE9PSBjdXJyZW50VG91Y2hlZEJ1dHRvbikge1xuICAgICAgY3VycmVudFRvdWNoZWRCdXR0b24uY2xpY2soKTtcbiAgICB9XG4gICAgY3VycmVudFRvdWNoZWRCdXR0b24gPSB1bmRlZmluZWQ7XG4gIH07XG4gIHJldHVybiBjcmVhdGVHZXN0dXJlKHtcbiAgICBlbCxcbiAgICBnZXN0dXJlTmFtZTogJ2J1dHRvbkFjdGl2ZURyYWcnLFxuICAgIHRocmVzaG9sZDogMCxcbiAgICBvblN0YXJ0OiAoZXYpID0+IGFjdGl2YXRlQnV0dG9uQXRQb2ludChldi5jdXJyZW50WCwgZXYuY3VycmVudFksIGhhcHRpY1NlbGVjdGlvblN0YXJ0KSxcbiAgICBvbk1vdmU6IChldikgPT4gYWN0aXZhdGVCdXR0b25BdFBvaW50KGV2LmN1cnJlbnRYLCBldi5jdXJyZW50WSwgaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCksXG4gICAgb25FbmQ6ICgpID0+IHtcbiAgICAgIGNsZWFyQWN0aXZlQnV0dG9uKHRydWUpO1xuICAgICAgaGFwdGljU2VsZWN0aW9uRW5kKCk7XG4gICAgICBpbml0aWFsVG91Y2hlZEJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgICB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUJ1dHRvbkFjdGl2ZUdlc3R1cmUgYXMgYyB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGRvY3VtZW50IG9yIGhvc3QgZWxlbWVudFxuICogaGFzIGEgYGRpcmAgc2V0IHRvIGBydGxgLiBUaGUgaG9zdCB2YWx1ZSB3aWxsIGFsd2F5c1xuICogdGFrZSBwcmlvcml0eSBvdmVyIHRoZSByb290IGRvY3VtZW50IHZhbHVlLlxuICovXG5jb25zdCBpc1JUTCA9IChob3N0RWwpID0+IHtcbiAgaWYgKGhvc3RFbCkge1xuICAgIGlmIChob3N0RWwuZGlyICE9PSAnJykge1xuICAgICAgcmV0dXJuIGhvc3RFbC5kaXIudG9Mb3dlckNhc2UoKSA9PT0gJ3J0bCc7XG4gICAgfVxuICB9XG4gIHJldHVybiAoZG9jdW1lbnQgPT09IG51bGwgfHwgZG9jdW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRvY3VtZW50LmRpci50b0xvd2VyQ2FzZSgpKSA9PT0gJ3J0bCc7XG59O1xuXG5leHBvcnQgeyBpc1JUTCBhcyBpIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuY29uc3QgSU9OX0ZPQ1VTRUQgPSAnaW9uLWZvY3VzZWQnO1xuY29uc3QgSU9OX0ZPQ1VTQUJMRSA9ICdpb24tZm9jdXNhYmxlJztcbmNvbnN0IEZPQ1VTX0tFWVMgPSBbXG4gICdUYWInLFxuICAnQXJyb3dEb3duJyxcbiAgJ1NwYWNlJyxcbiAgJ0VzY2FwZScsXG4gICcgJyxcbiAgJ1NoaWZ0JyxcbiAgJ0VudGVyJyxcbiAgJ0Fycm93TGVmdCcsXG4gICdBcnJvd1JpZ2h0JyxcbiAgJ0Fycm93VXAnLFxuICAnSG9tZScsXG4gICdFbmQnLFxuXTtcbmNvbnN0IHN0YXJ0Rm9jdXNWaXNpYmxlID0gKHJvb3RFbCkgPT4ge1xuICBsZXQgY3VycmVudEZvY3VzID0gW107XG4gIGxldCBrZXlib2FyZE1vZGUgPSB0cnVlO1xuICBjb25zdCByZWYgPSByb290RWwgPyByb290RWwuc2hhZG93Um9vdCA6IGRvY3VtZW50O1xuICBjb25zdCByb290ID0gcm9vdEVsID8gcm9vdEVsIDogZG9jdW1lbnQuYm9keTtcbiAgY29uc3Qgc2V0Rm9jdXMgPSAoZWxlbWVudHMpID0+IHtcbiAgICBjdXJyZW50Rm9jdXMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoSU9OX0ZPQ1VTRUQpKTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LmFkZChJT05fRk9DVVNFRCkpO1xuICAgIGN1cnJlbnRGb2N1cyA9IGVsZW1lbnRzO1xuICB9O1xuICBjb25zdCBwb2ludGVyRG93biA9ICgpID0+IHtcbiAgICBrZXlib2FyZE1vZGUgPSBmYWxzZTtcbiAgICBzZXRGb2N1cyhbXSk7XG4gIH07XG4gIGNvbnN0IG9uS2V5ZG93biA9IChldikgPT4ge1xuICAgIGtleWJvYXJkTW9kZSA9IEZPQ1VTX0tFWVMuaW5jbHVkZXMoZXYua2V5KTtcbiAgICBpZiAoIWtleWJvYXJkTW9kZSkge1xuICAgICAgc2V0Rm9jdXMoW10pO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgb25Gb2N1c2luID0gKGV2KSA9PiB7XG4gICAgaWYgKGtleWJvYXJkTW9kZSAmJiBldi5jb21wb3NlZFBhdGgpIHtcbiAgICAgIGNvbnN0IHRvRm9jdXMgPSBldi5jb21wb3NlZFBhdGgoKS5maWx0ZXIoKGVsKSA9PiB7XG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKElPTl9GT0NVU0FCTEUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgc2V0Rm9jdXModG9Gb2N1cyk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvbkZvY3Vzb3V0ID0gKCkgPT4ge1xuICAgIGlmIChyZWYuYWN0aXZlRWxlbWVudCA9PT0gcm9vdCkge1xuICAgICAgc2V0Rm9jdXMoW10pO1xuICAgIH1cbiAgfTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xuICByZWYuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIG9uRm9jdXNpbik7XG4gIHJlZi5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIG9uRm9jdXNvdXQpO1xuICByZWYuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHBvaW50ZXJEb3duKTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHBvaW50ZXJEb3duKTtcbiAgY29uc3QgZGVzdHJveSA9ICgpID0+IHtcbiAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XG4gICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvbkZvY3VzaW4pO1xuICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIG9uRm9jdXNvdXQpO1xuICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcG9pbnRlckRvd24pO1xuICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBwb2ludGVyRG93bik7XG4gIH07XG4gIHJldHVybiB7XG4gICAgZGVzdHJveSxcbiAgICBzZXRGb2N1cyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHN0YXJ0Rm9jdXNWaXNpYmxlIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgYyBhcyBjb21wb25lbnRPblJlYWR5IH0gZnJvbSAnLi9oZWxwZXJzLTRkMjcyMzYwLmpzJztcblxuY29uc3QgYXR0YWNoQ29tcG9uZW50ID0gYXN5bmMgKGRlbGVnYXRlLCBjb250YWluZXIsIGNvbXBvbmVudCwgY3NzQ2xhc3NlcywgY29tcG9uZW50UHJvcHMsIGlubGluZSkgPT4ge1xuICB2YXIgX2E7XG4gIGlmIChkZWxlZ2F0ZSkge1xuICAgIHJldHVybiBkZWxlZ2F0ZS5hdHRhY2hWaWV3VG9Eb20oY29udGFpbmVyLCBjb21wb25lbnQsIGNvbXBvbmVudFByb3BzLCBjc3NDbGFzc2VzKTtcbiAgfVxuICBpZiAoIWlubGluZSAmJiB0eXBlb2YgY29tcG9uZW50ICE9PSAnc3RyaW5nJyAmJiAhKGNvbXBvbmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgIHRocm93IG5ldyBFcnJvcignZnJhbWV3b3JrIGRlbGVnYXRlIGlzIG1pc3NpbmcnKTtcbiAgfVxuICBjb25zdCBlbCA9IHR5cGVvZiBjb21wb25lbnQgPT09ICdzdHJpbmcnID8gKF9hID0gY29udGFpbmVyLm93bmVyRG9jdW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQ7XG4gIGlmIChjc3NDbGFzc2VzKSB7XG4gICAgY3NzQ2xhc3Nlcy5mb3JFYWNoKChjKSA9PiBlbC5jbGFzc0xpc3QuYWRkKGMpKTtcbiAgfVxuICBpZiAoY29tcG9uZW50UHJvcHMpIHtcbiAgICBPYmplY3QuYXNzaWduKGVsLCBjb21wb25lbnRQcm9wcyk7XG4gIH1cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IGNvbXBvbmVudE9uUmVhZHkoZWwsIHJlc29sdmUpKTtcbiAgcmV0dXJuIGVsO1xufTtcbmNvbnN0IGRldGFjaENvbXBvbmVudCA9IChkZWxlZ2F0ZSwgZWxlbWVudCkgPT4ge1xuICBpZiAoZWxlbWVudCkge1xuICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgcmV0dXJuIGRlbGVnYXRlLnJlbW92ZVZpZXdGcm9tRG9tKGNvbnRhaW5lciwgZWxlbWVudCk7XG4gICAgfVxuICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufTtcbmNvbnN0IENvcmVEZWxlZ2F0ZSA9ICgpID0+IHtcbiAgbGV0IEJhc2VDb21wb25lbnQ7XG4gIGxldCBSZWZlcmVuY2U7XG4gIGNvbnN0IGF0dGFjaFZpZXdUb0RvbSA9IGFzeW5jIChwYXJlbnRFbGVtZW50LCB1c2VyQ29tcG9uZW50LCB1c2VyQ29tcG9uZW50UHJvcHMgPSB7fSwgY3NzQ2xhc3NlcyA9IFtdKSA9PiB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBCYXNlQ29tcG9uZW50ID0gcGFyZW50RWxlbWVudDtcbiAgICAvKipcbiAgICAgKiBJZiBwYXNzaW5nIGluIGEgY29tcG9uZW50IHZpYSB0aGUgYGNvbXBvbmVudGAgcHJvcHNcbiAgICAgKiB3ZSBuZWVkIHRvIGFwcGVuZCBpdCBpbnNpZGUgb2Ygb3VyIG92ZXJsYXkgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGlmICh1c2VyQ29tcG9uZW50KSB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHBhc3NpbmcgaW4gdGhlIHRhZyBuYW1lLCBjcmVhdGVcbiAgICAgICAqIHRoZSBlbGVtZW50IG90aGVyd2lzZSBqdXN0IGdldCBhIHJlZmVyZW5jZVxuICAgICAgICogdG8gdGhlIGNvbXBvbmVudC5cbiAgICAgICAqL1xuICAgICAgY29uc3QgZWwgPSB0eXBlb2YgdXNlckNvbXBvbmVudCA9PT0gJ3N0cmluZycgPyAoX2EgPSBCYXNlQ29tcG9uZW50Lm93bmVyRG9jdW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jcmVhdGVFbGVtZW50KHVzZXJDb21wb25lbnQpIDogdXNlckNvbXBvbmVudDtcbiAgICAgIC8qKlxuICAgICAgICogQWRkIGFueSBjc3MgY2xhc3NlcyBwYXNzZWQgaW5cbiAgICAgICAqIHZpYSB0aGUgY3NzQ2xhc3NlcyBwcm9wIG9uIHRoZSBvdmVybGF5LlxuICAgICAgICovXG4gICAgICBjc3NDbGFzc2VzLmZvckVhY2goKGMpID0+IGVsLmNsYXNzTGlzdC5hZGQoYykpO1xuICAgICAgLyoqXG4gICAgICAgKiBBZGQgYW55IHByb3BzIHBhc3NlZCBpblxuICAgICAgICogdmlhIHRoZSBjb21wb25lbnRQcm9wcyBwcm9wIG9uIHRoZSBvdmVybGF5LlxuICAgICAgICovXG4gICAgICBPYmplY3QuYXNzaWduKGVsLCB1c2VyQ29tcG9uZW50UHJvcHMpO1xuICAgICAgLyoqXG4gICAgICAgKiBGaW5hbGx5LCBhcHBlbmQgdGhlIGNvbXBvbmVudFxuICAgICAgICogaW5zaWRlIG9mIHRoZSBvdmVybGF5IGNvbXBvbmVudC5cbiAgICAgICAqL1xuICAgICAgQmFzZUNvbXBvbmVudC5hcHBlbmRDaGlsZChlbCk7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gY29tcG9uZW50T25SZWFkeShlbCwgcmVzb2x2ZSkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChCYXNlQ29tcG9uZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGNvbXBvbmVudCwgdGhlbiB3ZSBuZWVkIHRvIGNyZWF0ZSBhIG5ldyBwYXJlbnRcbiAgICAgIC8vIGVsZW1lbnQgdG8gYXBwbHkgdGhlIGNzcyBjbGFzc2VzIHRvLlxuICAgICAgY29uc3QgZWwgPSAoX2IgPSBCYXNlQ29tcG9uZW50Lm93bmVyRG9jdW1lbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNzc0NsYXNzZXMuZm9yRWFjaCgoYykgPT4gZWwuY2xhc3NMaXN0LmFkZChjKSk7XG4gICAgICAvLyBNb3ZlIGVhY2ggY2hpbGQgZnJvbSB0aGUgb3JpZ2luYWwgdGVtcGxhdGUgdG8gdGhlIG5ldyBwYXJlbnQgZWxlbWVudC5cbiAgICAgIGVsLmFwcGVuZCguLi5CYXNlQ29tcG9uZW50LmNoaWxkcmVuKTtcbiAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHBhcmVudCBlbGVtZW50IHRvIHRoZSBvcmlnaW5hbCBwYXJlbnQgZWxlbWVudC5cbiAgICAgIEJhc2VDb21wb25lbnQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHJvb3Qgb2YgdGhlIGFwcCBhbmRcbiAgICAgKiBhZGQgdGhlIG92ZXJsYXkgdGhlcmUuXG4gICAgICovXG4gICAgY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLWFwcCcpIHx8IGRvY3VtZW50LmJvZHk7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgcGxhY2Vob2xkZXIgY29tbWVudCBzbyB0aGF0XG4gICAgICogd2UgY2FuIHJldHVybiB0aGlzIGNvbXBvbmVudCB0byB3aGVyZVxuICAgICAqIGl0IHdhcyBwcmV2aW91c2x5LlxuICAgICAqL1xuICAgIFJlZmVyZW5jZSA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ2lvbmljIHRlbGVwb3J0Jyk7XG4gICAgQmFzZUNvbXBvbmVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShSZWZlcmVuY2UsIEJhc2VDb21wb25lbnQpO1xuICAgIGFwcC5hcHBlbmRDaGlsZChCYXNlQ29tcG9uZW50KTtcbiAgICByZXR1cm4gQmFzZUNvbXBvbmVudDtcbiAgfTtcbiAgY29uc3QgcmVtb3ZlVmlld0Zyb21Eb20gPSAoKSA9PiB7XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGNvbXBvbmVudCB0byB3aGVyZSBpdCB3YXMgcHJldmlvdXNseSBpbiB0aGUgRE9NLlxuICAgICAqL1xuICAgIGlmIChCYXNlQ29tcG9uZW50ICYmIFJlZmVyZW5jZSkge1xuICAgICAgUmVmZXJlbmNlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKEJhc2VDb21wb25lbnQsIFJlZmVyZW5jZSk7XG4gICAgICBSZWZlcmVuY2UucmVtb3ZlKCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTtcbiAgcmV0dXJuIHsgYXR0YWNoVmlld1RvRG9tLCByZW1vdmVWaWV3RnJvbURvbSB9O1xufTtcblxuZXhwb3J0IHsgQ29yZURlbGVnYXRlIGFzIEMsIGF0dGFjaENvbXBvbmVudCBhcyBhLCBkZXRhY2hDb21wb25lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmNvbnN0IEhhcHRpY0VuZ2luZSA9IHtcbiAgZ2V0RW5naW5lKCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCB3aW4gPSB3aW5kb3c7XG4gICAgcmV0dXJuIHdpbi5UYXB0aWNFbmdpbmUgfHwgKCgoX2EgPSB3aW4uQ2FwYWNpdG9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaXNQbHVnaW5BdmFpbGFibGUoJ0hhcHRpY3MnKSkgJiYgd2luLkNhcGFjaXRvci5QbHVnaW5zLkhhcHRpY3MpO1xuICB9LFxuICBhdmFpbGFibGUoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5nZXRFbmdpbmUoKTtcbiAgfSxcbiAgaXNDb3Jkb3ZhKCkge1xuICAgIHJldHVybiAhIXdpbmRvdy5UYXB0aWNFbmdpbmU7XG4gIH0sXG4gIGlzQ2FwYWNpdG9yKCkge1xuICAgIGNvbnN0IHdpbiA9IHdpbmRvdztcbiAgICByZXR1cm4gISF3aW4uQ2FwYWNpdG9yO1xuICB9LFxuICBpbXBhY3Qob3B0aW9ucykge1xuICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuZ2V0RW5naW5lKCk7XG4gICAgaWYgKCFlbmdpbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLmlzQ2FwYWNpdG9yKCkgPyBvcHRpb25zLnN0eWxlLnRvVXBwZXJDYXNlKCkgOiBvcHRpb25zLnN0eWxlO1xuICAgIGVuZ2luZS5pbXBhY3QoeyBzdHlsZSB9KTtcbiAgfSxcbiAgbm90aWZpY2F0aW9uKG9wdGlvbnMpIHtcbiAgICBjb25zdCBlbmdpbmUgPSB0aGlzLmdldEVuZ2luZSgpO1xuICAgIGlmICghZW5naW5lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5pc0NhcGFjaXRvcigpID8gb3B0aW9ucy5zdHlsZS50b1VwcGVyQ2FzZSgpIDogb3B0aW9ucy5zdHlsZTtcbiAgICBlbmdpbmUubm90aWZpY2F0aW9uKHsgc3R5bGUgfSk7XG4gIH0sXG4gIHNlbGVjdGlvbigpIHtcbiAgICB0aGlzLmltcGFjdCh7IHN0eWxlOiAnbGlnaHQnIH0pO1xuICB9LFxuICBzZWxlY3Rpb25TdGFydCgpIHtcbiAgICBjb25zdCBlbmdpbmUgPSB0aGlzLmdldEVuZ2luZSgpO1xuICAgIGlmICghZW5naW5lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmlzQ2FwYWNpdG9yKCkpIHtcbiAgICAgIGVuZ2luZS5zZWxlY3Rpb25TdGFydCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVuZ2luZS5nZXN0dXJlU2VsZWN0aW9uU3RhcnQoKTtcbiAgICB9XG4gIH0sXG4gIHNlbGVjdGlvbkNoYW5nZWQoKSB7XG4gICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0NhcGFjaXRvcigpKSB7XG4gICAgICBlbmdpbmUuc2VsZWN0aW9uQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVuZ2luZS5nZXN0dXJlU2VsZWN0aW9uQ2hhbmdlZCgpO1xuICAgIH1cbiAgfSxcbiAgc2VsZWN0aW9uRW5kKCkge1xuICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuZ2V0RW5naW5lKCk7XG4gICAgaWYgKCFlbmdpbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNDYXBhY2l0b3IoKSkge1xuICAgICAgZW5naW5lLnNlbGVjdGlvbkVuZCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVuZ2luZS5nZXN0dXJlU2VsZWN0aW9uRW5kKCk7XG4gICAgfVxuICB9LFxufTtcbi8qKlxuICogVHJpZ2dlciBhIHNlbGVjdGlvbiBjaGFuZ2VkIGhhcHRpYyBldmVudC4gR29vZCBmb3Igb25lLXRpbWUgZXZlbnRzXG4gKiAobm90IGZvciBnZXN0dXJlcylcbiAqL1xuY29uc3QgaGFwdGljU2VsZWN0aW9uID0gKCkgPT4ge1xuICBIYXB0aWNFbmdpbmUuc2VsZWN0aW9uKCk7XG59O1xuLyoqXG4gKiBUZWxsIHRoZSBoYXB0aWMgZW5naW5lIHRoYXQgYSBnZXN0dXJlIGZvciBhIHNlbGVjdGlvbiBjaGFuZ2UgaXMgc3RhcnRpbmcuXG4gKi9cbmNvbnN0IGhhcHRpY1NlbGVjdGlvblN0YXJ0ID0gKCkgPT4ge1xuICBIYXB0aWNFbmdpbmUuc2VsZWN0aW9uU3RhcnQoKTtcbn07XG4vKipcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgdGhhdCBhIHNlbGVjdGlvbiBjaGFuZ2VkIGR1cmluZyBhIGdlc3R1cmUuXG4gKi9cbmNvbnN0IGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgPSAoKSA9PiB7XG4gIEhhcHRpY0VuZ2luZS5zZWxlY3Rpb25DaGFuZ2VkKCk7XG59O1xuLyoqXG4gKiBUZWxsIHRoZSBoYXB0aWMgZW5naW5lIHdlIGFyZSBkb25lIHdpdGggYSBnZXN0dXJlLiBUaGlzIG5lZWRzIHRvIGJlXG4gKiBjYWxsZWQgbGVzdCByZXNvdXJjZXMgYXJlIG5vdCBwcm9wZXJseSByZWN5Y2xlZC5cbiAqL1xuY29uc3QgaGFwdGljU2VsZWN0aW9uRW5kID0gKCkgPT4ge1xuICBIYXB0aWNFbmdpbmUuc2VsZWN0aW9uRW5kKCk7XG59O1xuLyoqXG4gKiBVc2UgdGhpcyB0byBpbmRpY2F0ZSBzdWNjZXNzL2ZhaWx1cmUvd2FybmluZyB0byB0aGUgdXNlci5cbiAqIG9wdGlvbnMgc2hvdWxkIGJlIG9mIHRoZSB0eXBlIGB7IHN0eWxlOiAnbGlnaHQnIH1gIChvciBgbWVkaXVtYC9gaGVhdnlgKVxuICovXG5jb25zdCBoYXB0aWNJbXBhY3QgPSAob3B0aW9ucykgPT4ge1xuICBIYXB0aWNFbmdpbmUuaW1wYWN0KG9wdGlvbnMpO1xufTtcblxuZXhwb3J0IHsgaGFwdGljU2VsZWN0aW9uU3RhcnQgYXMgYSwgaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCBhcyBiLCBoYXB0aWNTZWxlY3Rpb24gYXMgYywgaGFwdGljSW1wYWN0IGFzIGQsIGhhcHRpY1NlbGVjdGlvbkVuZCBhcyBoIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuLyoqXG4gKiBXaGVuIGFjY2Vzc2luZyB0aGUgd2luZG93LCBpdCBpcyBpbXBvcnRhbnRcbiAqIHRvIGFjY291bnQgZm9yIFNTUiBhcHBsaWNhdGlvbnMgd2hlcmUgdGhlXG4gKiB3aW5kb3cgaXMgbm90IGF2YWlsYWJsZS4gQ29kZSB0aGF0IGFjY2Vzc2VzXG4gKiB3aW5kb3cgd2hlbiBpdCBpcyBub3QgYXZhaWxhYmxlIHdpbGwgY3Jhc2guXG4gKiBFdmVuIGNoZWNraW5nIGlmIGB3aW5kb3cgPT09IHVuZGVmaW5lZGAgd2lsbCBjYXVzZVxuICogYXBwcyB0byBjcmFzaCBpbiBTU1IuXG4gKlxuICogVXNlIHdpbiBiZWxvdyB0byBhY2Nlc3MgYW4gU1NSLXNhZmUgdmVyc2lvblxuICogb2YgdGhlIHdpbmRvdy5cbiAqXG4gKiBFeGFtcGxlIDE6XG4gKiBCZWZvcmU6XG4gKiBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjgpIHsgLi4uIH1cbiAqXG4gKiBBZnRlcjpcbiAqIGltcG9ydCB7IHdpbiB9IGZyb20gJ3BhdGgvdG8vdGhpcy9maWxlJztcbiAqIGlmICh3aW4/LmlubmVyV2lkdGggPiA3NjgpIHsgLi4uIH1cbiAqXG4gKiBOb3RlOiBDb2RlIGluc2lkZSBvZiB0aGlzIGlmLWJsb2NrIHdpbGxcbiAqIG5vdCBydW4gaW4gYW4gU1NSIGVudmlyb25tZW50LlxuICovXG5jb25zdCB3aW4gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcblxuZXhwb3J0IHsgd2luIGFzIHcgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBjIGFzIGNvbXBvbmVudE9uUmVhZHkgfSBmcm9tICcuL2hlbHBlcnMtNGQyNzIzNjAuanMnO1xuaW1wb3J0IHsgYSBhcyBwcmludFJlcXVpcmVkRWxlbWVudEVycm9yIH0gZnJvbSAnLi9pbmRleC1jNGIxMTY3Ni5qcyc7XG5cbmNvbnN0IElPTl9DT05URU5UX1RBR19OQU1FID0gJ0lPTi1DT05URU5UJztcbmNvbnN0IElPTl9DT05URU5UX0VMRU1FTlRfU0VMRUNUT1IgPSAnaW9uLWNvbnRlbnQnO1xuY29uc3QgSU9OX0NPTlRFTlRfQ0xBU1NfU0VMRUNUT1IgPSAnLmlvbi1jb250ZW50LXNjcm9sbC1ob3N0Jztcbi8qKlxuICogU2VsZWN0b3IgdXNlZCBmb3IgaW1wbGVtZW50YXRpb25zIHJlbGlhbnQgb24gYDxpb24tY29udGVudD5gIGZvciBzY3JvbGwgZXZlbnQgY2hhbmdlcy5cbiAqXG4gKiBEZXZlbG9wZXJzIHNob3VsZCB1c2UgdGhlIGAuaW9uLWNvbnRlbnQtc2Nyb2xsLWhvc3RgIHNlbGVjdG9yIHRvIHRhcmdldCB0aGUgZWxlbWVudCBlbWl0dGluZ1xuICogc2Nyb2xsIGV2ZW50cy4gV2l0aCB2aXJ0dWFsIHNjcm9sbCBpbXBsZW1lbnRhdGlvbnMgdGhpcyB3aWxsIGJlIHRoZSBob3N0IGVsZW1lbnQgZm9yXG4gKiB0aGUgc2Nyb2xsIHZpZXdwb3J0LlxuICovXG5jb25zdCBJT05fQ09OVEVOVF9TRUxFQ1RPUiA9IGAke0lPTl9DT05URU5UX0VMRU1FTlRfU0VMRUNUT1J9LCAke0lPTl9DT05URU5UX0NMQVNTX1NFTEVDVE9SfWA7XG5jb25zdCBpc0lvbkNvbnRlbnQgPSAoZWwpID0+IGVsICYmIGVsLnRhZ05hbWUgPT09IElPTl9DT05URU5UX1RBR19OQU1FO1xuLyoqXG4gKiBXYWl0cyBmb3IgdGhlIGVsZW1lbnQgaG9zdCBmdWxseSBpbml0aWFsaXplIGJlZm9yZVxuICogcmV0dXJuaW5nIHRoZSBpbm5lciBzY3JvbGwgZWxlbWVudC5cbiAqXG4gKiBGb3IgYGlvbi1jb250ZW50YCB0aGUgc2Nyb2xsIHRhcmdldCB3aWxsIGJlIHRoZSByZXN1bHRcbiAqIG9mIHRoZSBgZ2V0U2Nyb2xsRWxlbWVudGAgZnVuY3Rpb24uXG4gKlxuICogRm9yIGN1c3RvbSBpbXBsZW1lbnRhdGlvbnMgaXQgd2lsbCBiZSB0aGUgZWxlbWVudCBob3N0XG4gKiBvciBhIHNlbGVjdG9yIHdpdGhpbiB0aGUgaG9zdCwgaWYgc3VwcGxpZWQgdGhyb3VnaCBgc2Nyb2xsVGFyZ2V0YC5cbiAqL1xuY29uc3QgZ2V0U2Nyb2xsRWxlbWVudCA9IGFzeW5jIChlbCkgPT4ge1xuICBpZiAoaXNJb25Db250ZW50KGVsKSkge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBjb21wb25lbnRPblJlYWR5KGVsLCByZXNvbHZlKSk7XG4gICAgcmV0dXJuIGVsLmdldFNjcm9sbEVsZW1lbnQoKTtcbiAgfVxuICByZXR1cm4gZWw7XG59O1xuLyoqXG4gKiBRdWVyaWVzIHRoZSBlbGVtZW50IG1hdGNoaW5nIHRoZSBzZWxlY3RvciBmb3IgSW9uQ29udGVudC5cbiAqIFNlZSBJT05fQ09OVEVOVF9TRUxFQ1RPUiBmb3IgdGhlIHNlbGVjdG9yIHVzZWQuXG4gKi9cbmNvbnN0IGZpbmRJb25Db250ZW50ID0gKGVsKSA9PiB7XG4gIC8qKlxuICAgKiBGaXJzdCB3ZSB0cnkgdG8gcXVlcnkgdGhlIGN1c3RvbSBzY3JvbGwgaG9zdCBzZWxlY3RvciBpbiBjYXNlcyB3aGVyZVxuICAgKiB0aGUgaW1wbGVtZW50YXRpb24gaXMgdXNpbmcgYW4gb3V0ZXIgYGlvbi1jb250ZW50YCB3aXRoIGFuIGlubmVyIGN1c3RvbVxuICAgKiBzY3JvbGwgY29udGFpbmVyLlxuICAgKi9cbiAgY29uc3QgY3VzdG9tQ29udGVudEhvc3QgPSBlbC5xdWVyeVNlbGVjdG9yKElPTl9DT05URU5UX0NMQVNTX1NFTEVDVE9SKTtcbiAgaWYgKGN1c3RvbUNvbnRlbnRIb3N0KSB7XG4gICAgcmV0dXJuIGN1c3RvbUNvbnRlbnRIb3N0O1xuICB9XG4gIHJldHVybiBlbC5xdWVyeVNlbGVjdG9yKElPTl9DT05URU5UX1NFTEVDVE9SKTtcbn07XG4vKipcbiAqIFF1ZXJpZXMgdGhlIGNsb3Nlc3QgZWxlbWVudCBtYXRjaGluZyB0aGUgc2VsZWN0b3IgZm9yIElvbkNvbnRlbnQuXG4gKi9cbmNvbnN0IGZpbmRDbG9zZXN0SW9uQ29udGVudCA9IChlbCkgPT4ge1xuICByZXR1cm4gZWwuY2xvc2VzdChJT05fQ09OVEVOVF9TRUxFQ1RPUik7XG59O1xuLyoqXG4gKiBTY3JvbGxzIHRvIHRoZSB0b3Agb2YgdGhlIGVsZW1lbnQuIElmIGFuIGBpb24tY29udGVudGAgaXMgZm91bmQsIGl0IHdpbGwgc2Nyb2xsXG4gKiB1c2luZyB0aGUgcHVibGljIEFQSSBgc2Nyb2xsVG9Ub3BgIHdpdGggYSBkdXJhdGlvbi5cbiAqL1xuY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoZWwsIGR1cmF0aW9uTXMpID0+IHtcbiAgaWYgKGlzSW9uQ29udGVudChlbCkpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZWw7XG4gICAgcmV0dXJuIGNvbnRlbnQuc2Nyb2xsVG9Ub3AoZHVyYXRpb25Ncyk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbC5zY3JvbGxUbyh7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYmVoYXZpb3I6IGR1cmF0aW9uTXMgPiAwID8gJ3Ntb290aCcgOiAnYXV0bycsXG4gIH0pKTtcbn07XG4vKipcbiAqIFNjcm9sbHMgYnkgYSBzcGVjaWZpZWQgWC9ZIGRpc3RhbmNlIGluIHRoZSBjb21wb25lbnQuIElmIGFuIGBpb24tY29udGVudGAgaXMgZm91bmQsIGl0IHdpbGwgc2Nyb2xsXG4gKiB1c2luZyB0aGUgcHVibGljIEFQSSBgc2Nyb2xsQnlQb2ludGAgd2l0aCBhIGR1cmF0aW9uLlxuICovXG5jb25zdCBzY3JvbGxCeVBvaW50ID0gKGVsLCB4LCB5LCBkdXJhdGlvbk1zKSA9PiB7XG4gIGlmIChpc0lvbkNvbnRlbnQoZWwpKSB7XG4gICAgY29uc3QgY29udGVudCA9IGVsO1xuICAgIHJldHVybiBjb250ZW50LnNjcm9sbEJ5UG9pbnQoeCwgeSwgZHVyYXRpb25Ncyk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbC5zY3JvbGxCeSh7XG4gICAgdG9wOiB5LFxuICAgIGxlZnQ6IHgsXG4gICAgYmVoYXZpb3I6IGR1cmF0aW9uTXMgPiAwID8gJ3Ntb290aCcgOiAnYXV0bycsXG4gIH0pKTtcbn07XG4vKipcbiAqIFByaW50cyBhbiBlcnJvciBpbmZvcm1pbmcgZGV2ZWxvcGVycyB0aGF0IGFuIGltcGxlbWVudGF0aW9uIHJlcXVpcmVzIGFuIGVsZW1lbnQgdG8gYmUgdXNlZFxuICogd2l0aGluIGVpdGhlciB0aGUgYGlvbi1jb250ZW50YCBzZWxlY3RvciBvciB0aGUgYC5pb24tY29udGVudC1zY3JvbGwtaG9zdGAgY2xhc3MuXG4gKi9cbmNvbnN0IHByaW50SW9uQ29udGVudEVycm9yTXNnID0gKGVsKSA9PiB7XG4gIHJldHVybiBwcmludFJlcXVpcmVkRWxlbWVudEVycm9yKGVsLCBJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SKTtcbn07XG4vKipcbiAqIFNldmVyYWwgY29tcG9uZW50cyBpbiBJb25pYyBuZWVkIHRvIHByZXZlbnQgc2Nyb2xsaW5nXG4gKiBkdXJpbmcgYSBnZXN0dXJlIChjYXJkIG1vZGFsLCByYW5nZSwgaXRlbSBzbGlkaW5nLCBldGMpLlxuICogVXNlIHRoaXMgdXRpbGl0eSB0byBhY2NvdW50IGZvciBpb24tY29udGVudCBhbmQgY3VzdG9tIGNvbnRlbnQgaG9zdHMuXG4gKi9cbmNvbnN0IGRpc2FibGVDb250ZW50U2Nyb2xsWSA9IChjb250ZW50RWwpID0+IHtcbiAgaWYgKGlzSW9uQ29udGVudChjb250ZW50RWwpKSB7XG4gICAgY29uc3QgaW9uQ29udGVudCA9IGNvbnRlbnRFbDtcbiAgICBjb25zdCBpbml0aWFsU2Nyb2xsWSA9IGlvbkNvbnRlbnQuc2Nyb2xsWTtcbiAgICBpb25Db250ZW50LnNjcm9sbFkgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBUaGlzIHNob3VsZCBiZSBwYXNzZWQgaW50byByZXNldENvbnRlbnRTY3JvbGxZXG4gICAgICogc28gdGhhdCB3ZSBjYW4gcmV2ZXJ0IGlvbi1jb250ZW50J3Mgc2Nyb2xsWSB0byB0aGVcbiAgICAgKiBjb3JyZWN0IHN0YXRlLiBGb3IgZXhhbXBsZSwgaWYgc2Nyb2xsWSA9IGZhbHNlXG4gICAgICogaW5pdGlhbGx5LCB3ZSBkbyBub3Qgd2FudCB0byBlbmFibGUgc2Nyb2xsaW5nXG4gICAgICogd2hlbiB3ZSBjYWxsIHJlc2V0Q29udGVudFNjcm9sbFkuXG4gICAgICovXG4gICAgcmV0dXJuIGluaXRpYWxTY3JvbGxZO1xuICB9XG4gIGVsc2Uge1xuICAgIGNvbnRlbnRFbC5zdHlsZS5zZXRQcm9wZXJ0eSgnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5jb25zdCByZXNldENvbnRlbnRTY3JvbGxZID0gKGNvbnRlbnRFbCwgaW5pdGlhbFNjcm9sbFkpID0+IHtcbiAgaWYgKGlzSW9uQ29udGVudChjb250ZW50RWwpKSB7XG4gICAgY29udGVudEVsLnNjcm9sbFkgPSBpbml0aWFsU2Nyb2xsWTtcbiAgfVxuICBlbHNlIHtcbiAgICBjb250ZW50RWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IElPTl9DT05URU5UX0VMRU1FTlRfU0VMRUNUT1IgYXMgSSwgZmluZElvbkNvbnRlbnQgYXMgYSwgSU9OX0NPTlRFTlRfQ0xBU1NfU0VMRUNUT1IgYXMgYiwgc2Nyb2xsQnlQb2ludCBhcyBjLCBkaXNhYmxlQ29udGVudFNjcm9sbFkgYXMgZCwgZmluZENsb3Nlc3RJb25Db250ZW50IGFzIGYsIGdldFNjcm9sbEVsZW1lbnQgYXMgZywgaXNJb25Db250ZW50IGFzIGksIHByaW50SW9uQ29udGVudEVycm9yTXNnIGFzIHAsIHJlc2V0Q29udGVudFNjcm9sbFkgYXMgciwgc2Nyb2xsVG9Ub3AgYXMgcyB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbi8qIElvbmljb25zIHY2LjAuMywgRVMgTW9kdWxlcyAqL1xuY29uc3QgYXJyb3dCYWNrU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5BcnJvdyBCYWNrPC90aXRsZT48cGF0aCBzdHJva2UtbGluZWNhcD0nc3F1YXJlJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nNDgnIGQ9J00yNDQgNDAwTDEwMCAyNTZsMTQ0LTE0NE0xMjAgMjU2aDI5MicgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBhcnJvd0Rvd24gPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5BcnJvdyBEb3duPC90aXRsZT48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nNDgnIGQ9J00xMTIgMjY4bDE0NCAxNDQgMTQ0LTE0NE0yNTYgMzkyVjEwMCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBjYXJldEJhY2tTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkNhcmV0IEJhY2s8L3RpdGxlPjxwYXRoIGQ9J00zNjggNjRMMTQ0IDI1NmwyMjQgMTkyVjY0eicvPjwvc3ZnPlwiO1xuY29uc3QgY2FyZXREb3duU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5DYXJldCBEb3duPC90aXRsZT48cGF0aCBkPSdNNjQgMTQ0bDE5MiAyMjQgMTkyLTIyNEg2NHonLz48L3N2Zz5cIjtcbmNvbnN0IGNhcmV0VXBTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkNhcmV0IFVwPC90aXRsZT48cGF0aCBkPSdNNDQ4IDM2OEwyNTYgMTQ0IDY0IDM2OGgzODR6Jy8+PC9zdmc+XCI7XG5jb25zdCBjaGVja21hcmtPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+Q2hlY2ttYXJrPC90aXRsZT48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J000MTYgMTI4TDE5MiAzODRsLTk2LTk2JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48L3N2Zz5cIjtcbmNvbnN0IGNoZXZyb25CYWNrID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+Q2hldnJvbiBCYWNrPC90aXRsZT48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nNDgnIGQ9J00zMjggMTEyTDE4NCAyNTZsMTQ0IDE0NCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBjaGV2cm9uRG93biA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkNoZXZyb24gRG93bjwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMTEyIDE4NGwxNDQgMTQ0IDE0NC0xNDQnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgY2hldnJvbkZvcndhcmQgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5DaGV2cm9uIEZvcndhcmQ8L3RpdGxlPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSc0OCcgZD0nTTE4NCAxMTJsMTQ0IDE0NC0xNDQgMTQ0JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IGNoZXZyb25Gb3J3YXJkT3V0bGluZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkNoZXZyb24gRm9yd2FyZDwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMTg0IDExMmwxNDQgMTQ0LTE0NCAxNDQnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgY2xvc2UgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5DbG9zZTwvdGl0bGU+PHBhdGggZD0nTTI4OS45NCAyNTZsOTUtOTVBMjQgMjQgMCAwMDM1MSAxMjdsLTk1IDk1LTk1LTk1YTI0IDI0IDAgMDAtMzQgMzRsOTUgOTUtOTUgOTVhMjQgMjQgMCAxMDM0IDM0bDk1LTk1IDk1IDk1YTI0IDI0IDAgMDAzNC0zNHonLz48L3N2Zz5cIjtcbmNvbnN0IGNsb3NlQ2lyY2xlID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+Q2xvc2UgQ2lyY2xlPC90aXRsZT48cGF0aCBkPSdNMjU2IDQ4QzE0MS4zMSA0OCA0OCAxNDEuMzEgNDggMjU2czkzLjMxIDIwOCAyMDggMjA4IDIwOC05My4zMSAyMDgtMjA4UzM3MC42OSA0OCAyNTYgNDh6bTc1LjMxIDI2MC42OWExNiAxNiAwIDExLTIyLjYyIDIyLjYyTDI1NiAyNzguNjNsLTUyLjY5IDUyLjY4YTE2IDE2IDAgMDEtMjIuNjItMjIuNjJMMjMzLjM3IDI1NmwtNTIuNjgtNTIuNjlhMTYgMTYgMCAwMTIyLjYyLTIyLjYyTDI1NiAyMzMuMzdsNTIuNjktNTIuNjhhMTYgMTYgMCAwMTIyLjYyIDIyLjYyTDI3OC42MyAyNTZ6Jy8+PC9zdmc+XCI7XG5jb25zdCBjbG9zZVNoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+Q2xvc2U8L3RpdGxlPjxwYXRoIGQ9J000MDAgMTQ1LjQ5TDM2Ni41MSAxMTIgMjU2IDIyMi41MSAxNDUuNDkgMTEyIDExMiAxNDUuNDkgMjIyLjUxIDI1NiAxMTIgMzY2LjUxIDE0NS40OSA0MDAgMjU2IDI4OS40OSAzNjYuNTEgNDAwIDQwMCAzNjYuNTEgMjg5LjQ5IDI1NiA0MDAgMTQ1LjQ5eicvPjwvc3ZnPlwiO1xuY29uc3QgZWxsaXBzZU91dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5FbGxpcHNlPC90aXRsZT48Y2lyY2xlIGN4PScyNTYnIGN5PScyNTYnIHI9JzE5Micgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48L3N2Zz5cIjtcbmNvbnN0IGVsbGlwc2lzSG9yaXpvbnRhbCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkVsbGlwc2lzIEhvcml6b250YWw8L3RpdGxlPjxjaXJjbGUgY3g9JzI1NicgY3k9JzI1Nicgcj0nNDgnLz48Y2lyY2xlIGN4PSc0MTYnIGN5PScyNTYnIHI9JzQ4Jy8+PGNpcmNsZSBjeD0nOTYnIGN5PScyNTYnIHI9JzQ4Jy8+PC9zdmc+XCI7XG5jb25zdCBtZW51T3V0bGluZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPk1lbnU8L3RpdGxlPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNODAgMTYwaDM1Mk04MCAyNTZoMzUyTTgwIDM1MmgzNTInIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZSBpb25pY29uLXN0cm9rZS13aWR0aCcvPjwvc3ZnPlwiO1xuY29uc3QgbWVudVNoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+TWVudTwvdGl0bGU+PHBhdGggZD0nTTY0IDM4NGgzODR2LTQyLjY3SDY0em0wLTEwNi42N2gzODR2LTQyLjY2SDY0ek02NCAxMjh2NDIuNjdoMzg0VjEyOHonLz48L3N2Zz5cIjtcbmNvbnN0IHJlbW92ZU91dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5SZW1vdmU8L3RpdGxlPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgZD0nTTQwMCAyNTZIMTEyJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48L3N2Zz5cIjtcbmNvbnN0IHJlb3JkZXJUaHJlZU91dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5SZW9yZGVyIFRocmVlPC90aXRsZT48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J005NiAyNTZoMzIwTTk2IDE3NmgzMjBNOTYgMzM2aDMyMCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PC9zdmc+XCI7XG5jb25zdCByZW9yZGVyVHdvU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5SZW9yZGVyIFR3bzwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3NxdWFyZScgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSc0NCcgZD0nTTExOCAzMDRoMjc2TTExOCAyMDhoMjc2JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IHNlYXJjaE91dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5TZWFyY2g8L3RpdGxlPjxwYXRoIGQ9J00yMjEuMDkgNjRhMTU3LjA5IDE1Ny4wOSAwIDEwMTU3LjA5IDE1Ny4wOUExNTcuMSAxNTcuMSAwIDAwMjIxLjA5IDY0eicgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTMzOC4yOSAzMzguMjlMNDQ4IDQ0OCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PC9zdmc+XCI7XG5jb25zdCBzZWFyY2hTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPlNlYXJjaDwvdGl0bGU+PHBhdGggZD0nTTQ2NCA0MjhMMzM5LjkyIDMwMy45YTE2MC40OCAxNjAuNDggMCAwMDMwLjcyLTk0LjU4QzM3MC42NCAxMjAuMzcgMjk4LjI3IDQ4IDIwOS4zMiA0OFM0OCAxMjAuMzcgNDggMjA5LjMyczcyLjM3IDE2MS4zMiAxNjEuMzIgMTYxLjMyYTE2MC40OCAxNjAuNDggMCAwMDk0LjU4LTMwLjcyTDQyOCA0NjR6TTIwOS4zMiAzMTkuNjlhMTEwLjM4IDExMC4zOCAwIDExMTEwLjM3LTExMC4zNyAxMTAuNSAxMTAuNSAwIDAxLTExMC4zNyAxMTAuMzd6Jy8+PC9zdmc+XCI7XG5cbmV4cG9ydCB7IGFycm93QmFja1NoYXJwIGFzIGEsIGNsb3NlQ2lyY2xlIGFzIGIsIGNoZXZyb25CYWNrIGFzIGMsIGNsb3NlU2hhcnAgYXMgZCwgc2VhcmNoU2hhcnAgYXMgZSwgY2hlY2ttYXJrT3V0bGluZSBhcyBmLCBlbGxpcHNlT3V0bGluZSBhcyBnLCBjYXJldEJhY2tTaGFycCBhcyBoLCBhcnJvd0Rvd24gYXMgaSwgcmVvcmRlclRocmVlT3V0bGluZSBhcyBqLCByZW9yZGVyVHdvU2hhcnAgYXMgaywgY2hldnJvbkRvd24gYXMgbCwgY2hldnJvbkZvcndhcmRPdXRsaW5lIGFzIG0sIGVsbGlwc2lzSG9yaXpvbnRhbCBhcyBuLCBjaGV2cm9uRm9yd2FyZCBhcyBvLCBjYXJldFVwU2hhcnAgYXMgcCwgY2FyZXREb3duU2hhcnAgYXMgcSwgcmVtb3ZlT3V0bGluZSBhcyByLCBzZWFyY2hPdXRsaW5lIGFzIHMsIGNsb3NlIGFzIHQsIG1lbnVPdXRsaW5lIGFzIHUsIG1lbnVTaGFycCBhcyB2IH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuY29uc3QgS0VZQk9BUkRfRElEX09QRU4gPSAnaW9uS2V5Ym9hcmREaWRTaG93JztcbmNvbnN0IEtFWUJPQVJEX0RJRF9DTE9TRSA9ICdpb25LZXlib2FyZERpZEhpZGUnO1xuY29uc3QgS0VZQk9BUkRfVEhSRVNIT0xEID0gMTUwO1xubGV0IHByZXZpb3VzVmlzdWFsVmlld3BvcnQgPSB7fTtcbmxldCBjdXJyZW50VmlzdWFsVmlld3BvcnQgPSB7fTtcbmxldCBrZXlib2FyZE9wZW4gPSBmYWxzZTtcbi8qKlxuICogVGhpcyBpcyBvbmx5IHVzZWQgZm9yIHRlc3RzXG4gKi9cbmNvbnN0IHJlc2V0S2V5Ym9hcmRBc3Npc3QgPSAoKSA9PiB7XG4gIHByZXZpb3VzVmlzdWFsVmlld3BvcnQgPSB7fTtcbiAgY3VycmVudFZpc3VhbFZpZXdwb3J0ID0ge307XG4gIGtleWJvYXJkT3BlbiA9IGZhbHNlO1xufTtcbmNvbnN0IHN0YXJ0S2V5Ym9hcmRBc3Npc3QgPSAod2luKSA9PiB7XG4gIHN0YXJ0TmF0aXZlTGlzdGVuZXJzKHdpbik7XG4gIGlmICghd2luLnZpc3VhbFZpZXdwb3J0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGN1cnJlbnRWaXN1YWxWaWV3cG9ydCA9IGNvcHlWaXN1YWxWaWV3cG9ydCh3aW4udmlzdWFsVmlld3BvcnQpO1xuICB3aW4udmlzdWFsVmlld3BvcnQub25yZXNpemUgPSAoKSA9PiB7XG4gICAgdHJhY2tWaWV3cG9ydENoYW5nZXMod2luKTtcbiAgICBpZiAoa2V5Ym9hcmREaWRPcGVuKCkgfHwga2V5Ym9hcmREaWRSZXNpemUod2luKSkge1xuICAgICAgc2V0S2V5Ym9hcmRPcGVuKHdpbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleWJvYXJkRGlkQ2xvc2Uod2luKSkge1xuICAgICAgc2V0S2V5Ym9hcmRDbG9zZSh3aW4pO1xuICAgIH1cbiAgfTtcbn07XG4vKipcbiAqIExpc3RlbiBmb3IgZXZlbnRzIGZpcmVkIGJ5IG5hdGl2ZSBrZXlib2FyZCBwbHVnaW5cbiAqIGluIENhcGFjaXRvci9Db3Jkb3ZhIHNvIGRldnMgb25seSBuZWVkIHRvIGxpc3RlblxuICogaW4gb25lIHBsYWNlLlxuICovXG5jb25zdCBzdGFydE5hdGl2ZUxpc3RlbmVycyA9ICh3aW4pID0+IHtcbiAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWJvYXJkRGlkU2hvdycsIChldikgPT4gc2V0S2V5Ym9hcmRPcGVuKHdpbiwgZXYpKTtcbiAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWJvYXJkRGlkSGlkZScsICgpID0+IHNldEtleWJvYXJkQ2xvc2Uod2luKSk7XG59O1xuY29uc3Qgc2V0S2V5Ym9hcmRPcGVuID0gKHdpbiwgZXYpID0+IHtcbiAgZmlyZUtleWJvYXJkT3BlbkV2ZW50KHdpbiwgZXYpO1xuICBrZXlib2FyZE9wZW4gPSB0cnVlO1xufTtcbmNvbnN0IHNldEtleWJvYXJkQ2xvc2UgPSAod2luKSA9PiB7XG4gIGZpcmVLZXlib2FyZENsb3NlRXZlbnQod2luKTtcbiAga2V5Ym9hcmRPcGVuID0gZmFsc2U7XG59O1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYGtleWJvYXJkT3BlbmAgZmxhZyBpcyBub3RcbiAqIHNldCwgdGhlIHByZXZpb3VzIHZpc3VhbCB2aWV3cG9ydCB3aWR0aCBlcXVhbCB0aGUgY3VycmVudFxuICogdmlzdWFsIHZpZXdwb3J0IHdpZHRoLCBhbmQgaWYgdGhlIHNjYWxlZCBkaWZmZXJlbmNlXG4gKiBvZiB0aGUgcHJldmlvdXMgdmlzdWFsIHZpZXdwb3J0IGhlaWdodCBtaW51cyB0aGUgY3VycmVudFxuICogdmlzdWFsIHZpZXdwb3J0IGhlaWdodCBpcyBncmVhdGVyIHRoYW4gS0VZQk9BUkRfVEhSRVNIT0xEXG4gKlxuICogV2UgbmVlZCB0byBiZSBhYmxlIHRvIGFjY29tbW9kYXRlIHVzZXJzIHdobyBoYXZlIHpvb21pbmdcbiAqIGVuYWJsZWQgaW4gdGhlaXIgYnJvd3NlciAob3IgaGF2ZSB6b29tZWQgaW4gbWFudWFsbHkpIHdoaWNoXG4gKiBpcyB3aHkgd2UgdGFrZSBpbnRvIGFjY291bnQgdGhlIGN1cnJlbnQgdmlzdWFsIHZpZXdwb3J0J3NcbiAqIHNjYWxlIHZhbHVlLlxuICovXG5jb25zdCBrZXlib2FyZERpZE9wZW4gPSAoKSA9PiB7XG4gIGNvbnN0IHNjYWxlZEhlaWdodERpZmZlcmVuY2UgPSAocHJldmlvdXNWaXN1YWxWaWV3cG9ydC5oZWlnaHQgLSBjdXJyZW50VmlzdWFsVmlld3BvcnQuaGVpZ2h0KSAqIGN1cnJlbnRWaXN1YWxWaWV3cG9ydC5zY2FsZTtcbiAgcmV0dXJuICgha2V5Ym9hcmRPcGVuICYmXG4gICAgcHJldmlvdXNWaXN1YWxWaWV3cG9ydC53aWR0aCA9PT0gY3VycmVudFZpc3VhbFZpZXdwb3J0LndpZHRoICYmXG4gICAgc2NhbGVkSGVpZ2h0RGlmZmVyZW5jZSA+IEtFWUJPQVJEX1RIUkVTSE9MRCk7XG59O1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUga2V5Ym9hcmQgaXMgb3BlbixcbiAqIGJ1dCB0aGUga2V5Ym9hcmQgZGlkIG5vdCBjbG9zZVxuICovXG5jb25zdCBrZXlib2FyZERpZFJlc2l6ZSA9ICh3aW4pID0+IHtcbiAgcmV0dXJuIGtleWJvYXJkT3BlbiAmJiAha2V5Ym9hcmREaWRDbG9zZSh3aW4pO1xufTtcbi8qKlxuICogRGV0ZXJtaW5lIGlmIHRoZSBrZXlib2FyZCB3YXMgY2xvc2VkXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYGtleWJvYXJkT3BlbmAgZmxhZyBpcyBzZXQgYW5kXG4gKiB0aGUgY3VycmVudCB2aXN1YWwgdmlld3BvcnQgaGVpZ2h0IGVxdWFscyB0aGVcbiAqIGxheW91dCB2aWV3cG9ydCBoZWlnaHQuXG4gKi9cbmNvbnN0IGtleWJvYXJkRGlkQ2xvc2UgPSAod2luKSA9PiB7XG4gIHJldHVybiBrZXlib2FyZE9wZW4gJiYgY3VycmVudFZpc3VhbFZpZXdwb3J0LmhlaWdodCA9PT0gd2luLmlubmVySGVpZ2h0O1xufTtcbi8qKlxuICogRGlzcGF0Y2ggYSBrZXlib2FyZCBvcGVuIGV2ZW50XG4gKi9cbmNvbnN0IGZpcmVLZXlib2FyZE9wZW5FdmVudCA9ICh3aW4sIG5hdGl2ZUV2KSA9PiB7XG4gIGNvbnN0IGtleWJvYXJkSGVpZ2h0ID0gbmF0aXZlRXYgPyBuYXRpdmVFdi5rZXlib2FyZEhlaWdodCA6IHdpbi5pbm5lckhlaWdodCAtIGN1cnJlbnRWaXN1YWxWaWV3cG9ydC5oZWlnaHQ7XG4gIGNvbnN0IGV2ID0gbmV3IEN1c3RvbUV2ZW50KEtFWUJPQVJEX0RJRF9PUEVOLCB7XG4gICAgZGV0YWlsOiB7IGtleWJvYXJkSGVpZ2h0IH0sXG4gIH0pO1xuICB3aW4uZGlzcGF0Y2hFdmVudChldik7XG59O1xuLyoqXG4gKiBEaXNwYXRjaCBhIGtleWJvYXJkIGNsb3NlIGV2ZW50XG4gKi9cbmNvbnN0IGZpcmVLZXlib2FyZENsb3NlRXZlbnQgPSAod2luKSA9PiB7XG4gIGNvbnN0IGV2ID0gbmV3IEN1c3RvbUV2ZW50KEtFWUJPQVJEX0RJRF9DTE9TRSk7XG4gIHdpbi5kaXNwYXRjaEV2ZW50KGV2KTtcbn07XG4vKipcbiAqIEdpdmVuIGEgd2luZG93IG9iamVjdCwgY3JlYXRlIGEgY29weSBvZlxuICogdGhlIGN1cnJlbnQgdmlzdWFsIGFuZCBsYXlvdXQgdmlld3BvcnQgc3RhdGVzXG4gKiB3aGlsZSBhbHNvIHByZXNlcnZpbmcgdGhlIHByZXZpb3VzIHZpc3VhbCBhbmRcbiAqIGxheW91dCB2aWV3cG9ydCBzdGF0ZXNcbiAqL1xuY29uc3QgdHJhY2tWaWV3cG9ydENoYW5nZXMgPSAod2luKSA9PiB7XG4gIHByZXZpb3VzVmlzdWFsVmlld3BvcnQgPSBPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50VmlzdWFsVmlld3BvcnQpO1xuICBjdXJyZW50VmlzdWFsVmlld3BvcnQgPSBjb3B5VmlzdWFsVmlld3BvcnQod2luLnZpc3VhbFZpZXdwb3J0KTtcbn07XG4vKipcbiAqIENyZWF0ZXMgYSBkZWVwIGNvcHkgb2YgdGhlIHZpc3VhbCB2aWV3cG9ydFxuICogYXQgYSBnaXZlbiBzdGF0ZVxuICovXG5jb25zdCBjb3B5VmlzdWFsVmlld3BvcnQgPSAodmlzdWFsVmlld3BvcnQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogTWF0aC5yb3VuZCh2aXN1YWxWaWV3cG9ydC53aWR0aCksXG4gICAgaGVpZ2h0OiBNYXRoLnJvdW5kKHZpc3VhbFZpZXdwb3J0LmhlaWdodCksXG4gICAgb2Zmc2V0VG9wOiB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3AsXG4gICAgb2Zmc2V0TGVmdDogdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdCxcbiAgICBwYWdlVG9wOiB2aXN1YWxWaWV3cG9ydC5wYWdlVG9wLFxuICAgIHBhZ2VMZWZ0OiB2aXN1YWxWaWV3cG9ydC5wYWdlTGVmdCxcbiAgICBzY2FsZTogdmlzdWFsVmlld3BvcnQuc2NhbGUsXG4gIH07XG59O1xuXG5leHBvcnQgeyBLRVlCT0FSRF9ESURfQ0xPU0UsIEtFWUJPQVJEX0RJRF9PUEVOLCBjb3B5VmlzdWFsVmlld3BvcnQsIGtleWJvYXJkRGlkQ2xvc2UsIGtleWJvYXJkRGlkT3Blbiwga2V5Ym9hcmREaWRSZXNpemUsIHJlc2V0S2V5Ym9hcmRBc3Npc3QsIHNldEtleWJvYXJkQ2xvc2UsIHNldEtleWJvYXJkT3Blbiwgc3RhcnRLZXlib2FyZEFzc2lzdCwgdHJhY2tWaWV3cG9ydENoYW5nZXMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyB3IGFzIHdpbiB9IGZyb20gJy4vaW5kZXgtMzNmZmVjMjUuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjb250cm9sbGVyIHRoYXQgdHJhY2tzIGFuZCByZWFjdHMgdG8gb3BlbmluZyBvciBjbG9zaW5nIHRoZSBrZXlib2FyZC5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSBrZXlib2FyZENoYW5nZUNhbGxiYWNrIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBrZXlib2FyZCBvcGVucyBvciBjbG9zZXMuXG4gKi9cbmNvbnN0IGNyZWF0ZUtleWJvYXJkQ29udHJvbGxlciA9IChrZXlib2FyZENoYW5nZUNhbGxiYWNrKSA9PiB7XG4gIGxldCBrZXlib2FyZFdpbGxTaG93SGFuZGxlcjtcbiAgbGV0IGtleWJvYXJkV2lsbEhpZGVIYW5kbGVyO1xuICBsZXQga2V5Ym9hcmRWaXNpYmxlO1xuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGtleWJvYXJkV2lsbFNob3dIYW5kbGVyID0gKCkgPT4ge1xuICAgICAga2V5Ym9hcmRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChrZXlib2FyZENoYW5nZUNhbGxiYWNrKVxuICAgICAgICBrZXlib2FyZENoYW5nZUNhbGxiYWNrKHRydWUpO1xuICAgIH07XG4gICAga2V5Ym9hcmRXaWxsSGlkZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBrZXlib2FyZFZpc2libGUgPSBmYWxzZTtcbiAgICAgIGlmIChrZXlib2FyZENoYW5nZUNhbGxiYWNrKVxuICAgICAgICBrZXlib2FyZENoYW5nZUNhbGxiYWNrKGZhbHNlKTtcbiAgICB9O1xuICAgIHdpbiA9PT0gbnVsbCB8fCB3aW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbi5hZGRFdmVudExpc3RlbmVyKCdrZXlib2FyZFdpbGxTaG93Jywga2V5Ym9hcmRXaWxsU2hvd0hhbmRsZXIpO1xuICAgIHdpbiA9PT0gbnVsbCB8fCB3aW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbi5hZGRFdmVudExpc3RlbmVyKCdrZXlib2FyZFdpbGxIaWRlJywga2V5Ym9hcmRXaWxsSGlkZUhhbmRsZXIpO1xuICB9O1xuICBjb25zdCBkZXN0cm95ID0gKCkgPT4ge1xuICAgIHdpbiA9PT0gbnVsbCB8fCB3aW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlib2FyZFdpbGxTaG93Jywga2V5Ym9hcmRXaWxsU2hvd0hhbmRsZXIpO1xuICAgIHdpbiA9PT0gbnVsbCB8fCB3aW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlib2FyZFdpbGxIaWRlJywga2V5Ym9hcmRXaWxsSGlkZUhhbmRsZXIpO1xuICAgIGtleWJvYXJkV2lsbFNob3dIYW5kbGVyID0ga2V5Ym9hcmRXaWxsSGlkZUhhbmRsZXIgPSB1bmRlZmluZWQ7XG4gIH07XG4gIGNvbnN0IGlzS2V5Ym9hcmRWaXNpYmxlID0gKCkgPT4ga2V5Ym9hcmRWaXNpYmxlO1xuICBpbml0KCk7XG4gIHJldHVybiB7IGluaXQsIGRlc3Ryb3ksIGlzS2V5Ym9hcmRWaXNpYmxlIH07XG59O1xuXG5leHBvcnQgeyBjcmVhdGVLZXlib2FyZENvbnRyb2xsZXIgYXMgYyB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmNvbnN0IHNwaW5uZXJzID0ge1xuICBidWJibGVzOiB7XG4gICAgZHVyOiAxMDAwLFxuICAgIGNpcmNsZXM6IDksXG4gICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBgJHsoZHVyICogaW5kZXgpIC8gdG90YWwgLSBkdXJ9bXNgO1xuICAgICAgY29uc3QgYW5nbGUgPSAoMiAqIE1hdGguUEkgKiBpbmRleCkgLyB0b3RhbDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHI6IDUsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgdG9wOiBgJHs5ICogTWF0aC5zaW4oYW5nbGUpfXB4YCxcbiAgICAgICAgICBsZWZ0OiBgJHs5ICogTWF0aC5jb3MoYW5nbGUpfXB4YCxcbiAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIGNpcmNsZXM6IHtcbiAgICBkdXI6IDEwMDAsXG4gICAgY2lyY2xlczogOCxcbiAgICBmbjogKGR1ciwgaW5kZXgsIHRvdGFsKSA9PiB7XG4gICAgICBjb25zdCBzdGVwID0gaW5kZXggLyB0b3RhbDtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7ZHVyICogc3RlcCAtIGR1cn1tc2A7XG4gICAgICBjb25zdCBhbmdsZSA9IDIgKiBNYXRoLlBJICogc3RlcDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHI6IDUsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgdG9wOiBgJHs5ICogTWF0aC5zaW4oYW5nbGUpfXB4YCxcbiAgICAgICAgICBsZWZ0OiBgJHs5ICogTWF0aC5jb3MoYW5nbGUpfXB4YCxcbiAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIGNpcmN1bGFyOiB7XG4gICAgZHVyOiAxNDAwLFxuICAgIGVsbUR1cmF0aW9uOiB0cnVlLFxuICAgIGNpcmNsZXM6IDEsXG4gICAgZm46ICgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHI6IDIwLFxuICAgICAgICBjeDogNDgsXG4gICAgICAgIGN5OiA0OCxcbiAgICAgICAgZmlsbDogJ25vbmUnLFxuICAgICAgICB2aWV3Qm94OiAnMjQgMjQgNDggNDgnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwwKScsXG4gICAgICAgIHN0eWxlOiB7fSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgY3Jlc2NlbnQ6IHtcbiAgICBkdXI6IDc1MCxcbiAgICBjaXJjbGVzOiAxLFxuICAgIGZuOiAoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiAyNixcbiAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICBkb3RzOiB7XG4gICAgZHVyOiA3NTAsXG4gICAgY2lyY2xlczogMyxcbiAgICBmbjogKF8sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IC0oMTEwICogaW5kZXgpICsgJ21zJztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHI6IDYsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgbGVmdDogYCR7OSAtIDkgKiBpbmRleH1weGAsXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICBsaW5lczoge1xuICAgIGR1cjogMTAwMCxcbiAgICBsaW5lczogOCxcbiAgICBmbjogKGR1ciwgaW5kZXgsIHRvdGFsKSA9PiB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgcm90YXRlKCR7KDM2MCAvIHRvdGFsKSAqIGluZGV4ICsgKGluZGV4IDwgdG90YWwgLyAyID8gMTgwIDogLTE4MCl9ZGVnKWA7XG4gICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGAkeyhkdXIgKiBpbmRleCkgLyB0b3RhbCAtIGR1cn1tc2A7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB5MTogMTQsXG4gICAgICAgIHkyOiAyNixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gICdsaW5lcy1zbWFsbCc6IHtcbiAgICBkdXI6IDEwMDAsXG4gICAgbGluZXM6IDgsXG4gICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZSgkeygzNjAgLyB0b3RhbCkgKiBpbmRleCArIChpbmRleCA8IHRvdGFsIC8gMiA/IDE4MCA6IC0xODApfWRlZylgO1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBgJHsoZHVyICogaW5kZXgpIC8gdG90YWwgLSBkdXJ9bXNgO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeTE6IDEyLFxuICAgICAgICB5MjogMjAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICAnbGluZXMtc2hhcnAnOiB7XG4gICAgZHVyOiAxMDAwLFxuICAgIGxpbmVzOiAxMixcbiAgICBmbjogKGR1ciwgaW5kZXgsIHRvdGFsKSA9PiB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgcm90YXRlKCR7MzAgKiBpbmRleCArIChpbmRleCA8IDYgPyAxODAgOiAtMTgwKX1kZWcpYDtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7KGR1ciAqIGluZGV4KSAvIHRvdGFsIC0gZHVyfW1zYDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHkxOiAxNyxcbiAgICAgICAgeTI6IDI5LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgJ2xpbmVzLXNoYXJwLXNtYWxsJzoge1xuICAgIGR1cjogMTAwMCxcbiAgICBsaW5lczogMTIsXG4gICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZSgkezMwICogaW5kZXggKyAoaW5kZXggPCA2ID8gMTgwIDogLTE4MCl9ZGVnKWA7XG4gICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGAkeyhkdXIgKiBpbmRleCkgLyB0b3RhbCAtIGR1cn1tc2A7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB5MTogMTIsXG4gICAgICAgIHkyOiAyMCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG59O1xuY29uc3QgU1BJTk5FUlMgPSBzcGlubmVycztcblxuZXhwb3J0IHsgU1BJTk5FUlMgYXMgUyB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IGwgYXMgY2xhbXAgfSBmcm9tICcuL2hlbHBlcnMtNGQyNzIzNjAuanMnO1xuaW1wb3J0IHsgaSBhcyBpc1JUTCB9IGZyb20gJy4vZGlyLWU4Yjc2N2E4LmpzJztcbmltcG9ydCB7IGNyZWF0ZUdlc3R1cmUgfSBmcm9tICcuL2luZGV4LTNmMWE3ZDk1LmpzJztcbmltcG9ydCAnLi9nZXN0dXJlLWNvbnRyb2xsZXItMTdlODIwMDYuanMnO1xuXG5jb25zdCBjcmVhdGVTd2lwZUJhY2tHZXN0dXJlID0gKGVsLCBjYW5TdGFydEhhbmRsZXIsIG9uU3RhcnRIYW5kbGVyLCBvbk1vdmVIYW5kbGVyLCBvbkVuZEhhbmRsZXIpID0+IHtcbiAgY29uc3Qgd2luID0gZWwub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgY29uc3QgcnRsID0gaXNSVEwoZWwpO1xuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIGEgZ2VzdHVyZSBpcyBuZWFyIHRoZSBlZGdlXG4gICAqIG9mIHRoZSBzY3JlZW4uIElmIHRydWUsIHRoZW4gdGhlIHN3aXBlXG4gICAqIHRvIGdvIGJhY2sgZ2VzdHVyZSBzaG91bGQgcHJvY2VlZC5cbiAgICovXG4gIGNvbnN0IGlzQXRFZGdlID0gKGRldGFpbCkgPT4ge1xuICAgIGNvbnN0IHRocmVzaG9sZCA9IDUwO1xuICAgIGNvbnN0IHsgc3RhcnRYIH0gPSBkZXRhaWw7XG4gICAgaWYgKHJ0bCkge1xuICAgICAgcmV0dXJuIHN0YXJ0WCA+PSB3aW4uaW5uZXJXaWR0aCAtIHRocmVzaG9sZDtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXJ0WCA8PSB0aHJlc2hvbGQ7XG4gIH07XG4gIGNvbnN0IGdldERlbHRhWCA9IChkZXRhaWwpID0+IHtcbiAgICByZXR1cm4gcnRsID8gLWRldGFpbC5kZWx0YVggOiBkZXRhaWwuZGVsdGFYO1xuICB9O1xuICBjb25zdCBnZXRWZWxvY2l0eVggPSAoZGV0YWlsKSA9PiB7XG4gICAgcmV0dXJuIHJ0bCA/IC1kZXRhaWwudmVsb2NpdHlYIDogZGV0YWlsLnZlbG9jaXR5WDtcbiAgfTtcbiAgY29uc3QgY2FuU3RhcnQgPSAoZGV0YWlsKSA9PiB7XG4gICAgcmV0dXJuIGlzQXRFZGdlKGRldGFpbCkgJiYgY2FuU3RhcnRIYW5kbGVyKCk7XG4gIH07XG4gIGNvbnN0IG9uTW92ZSA9IChkZXRhaWwpID0+IHtcbiAgICAvLyBzZXQgdGhlIHRyYW5zaXRpb24gYW5pbWF0aW9uJ3MgcHJvZ3Jlc3NcbiAgICBjb25zdCBkZWx0YSA9IGdldERlbHRhWChkZXRhaWwpO1xuICAgIGNvbnN0IHN0ZXBWYWx1ZSA9IGRlbHRhIC8gd2luLmlubmVyV2lkdGg7XG4gICAgb25Nb3ZlSGFuZGxlcihzdGVwVmFsdWUpO1xuICB9O1xuICBjb25zdCBvbkVuZCA9IChkZXRhaWwpID0+IHtcbiAgICAvLyB0aGUgc3dpcGUgYmFjayBnZXN0dXJlIGhhcyBlbmRlZFxuICAgIGNvbnN0IGRlbHRhID0gZ2V0RGVsdGFYKGRldGFpbCk7XG4gICAgY29uc3Qgd2lkdGggPSB3aW4uaW5uZXJXaWR0aDtcbiAgICBjb25zdCBzdGVwVmFsdWUgPSBkZWx0YSAvIHdpZHRoO1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gZ2V0VmVsb2NpdHlYKGRldGFpbCk7XG4gICAgY29uc3QgeiA9IHdpZHRoIC8gMi4wO1xuICAgIGNvbnN0IHNob3VsZENvbXBsZXRlID0gdmVsb2NpdHkgPj0gMCAmJiAodmVsb2NpdHkgPiAwLjIgfHwgZGVsdGEgPiB6KTtcbiAgICBjb25zdCBtaXNzaW5nID0gc2hvdWxkQ29tcGxldGUgPyAxIC0gc3RlcFZhbHVlIDogc3RlcFZhbHVlO1xuICAgIGNvbnN0IG1pc3NpbmdEaXN0YW5jZSA9IG1pc3NpbmcgKiB3aWR0aDtcbiAgICBsZXQgcmVhbER1ciA9IDA7XG4gICAgaWYgKG1pc3NpbmdEaXN0YW5jZSA+IDUpIHtcbiAgICAgIGNvbnN0IGR1ciA9IG1pc3NpbmdEaXN0YW5jZSAvIE1hdGguYWJzKHZlbG9jaXR5KTtcbiAgICAgIHJlYWxEdXIgPSBNYXRoLm1pbihkdXIsIDU0MCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRPRE86IHN0ZXBWYWx1ZSBjYW4gc29tZXRpbWVzIHJldHVybiBuZWdhdGl2ZSB2YWx1ZXNcbiAgICAgKiBvciB2YWx1ZXMgZ3JlYXRlciB0aGFuIDEgd2hpY2ggc2hvdWxkIG5vdCBiZSBwb3NzaWJsZS5cbiAgICAgKiBOZWVkIHRvIGludmVzdGlnYXRlIG1vcmUgdG8gZmluZCB3aGVyZSB0aGUgaXNzdWUgaXMuXG4gICAgICovXG4gICAgb25FbmRIYW5kbGVyKHNob3VsZENvbXBsZXRlLCBzdGVwVmFsdWUgPD0gMCA/IDAuMDEgOiBjbGFtcCgwLCBzdGVwVmFsdWUsIDAuOTk5OSksIHJlYWxEdXIpO1xuICB9O1xuICByZXR1cm4gY3JlYXRlR2VzdHVyZSh7XG4gICAgZWwsXG4gICAgZ2VzdHVyZU5hbWU6ICdnb2JhY2stc3dpcGUnLFxuICAgIGdlc3R1cmVQcmlvcml0eTogNDAsXG4gICAgdGhyZXNob2xkOiAxMCxcbiAgICBjYW5TdGFydCxcbiAgICBvblN0YXJ0OiBvblN0YXJ0SGFuZGxlcixcbiAgICBvbk1vdmUsXG4gICAgb25FbmQsXG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlU3dpcGVCYWNrR2VzdHVyZSB9O1xuIl0sIm5hbWVzIjpbImMiLCJ3cml0ZVRhc2siLCJoIiwiaGFwdGljU2VsZWN0aW9uRW5kIiwiYSIsImhhcHRpY1NlbGVjdGlvblN0YXJ0IiwiYiIsImhhcHRpY1NlbGVjdGlvbkNoYW5nZWQiLCJjcmVhdGVHZXN0dXJlIiwiY3JlYXRlQnV0dG9uQWN0aXZlR2VzdHVyZSIsImVsIiwiaXNCdXR0b24iLCJjdXJyZW50VG91Y2hlZEJ1dHRvbiIsImluaXRpYWxUb3VjaGVkQnV0dG9uIiwiYWN0aXZhdGVCdXR0b25BdFBvaW50IiwieCIsInkiLCJoYXB0aWNGZWVkYmFja0ZuIiwiZG9jdW1lbnQiLCJ0YXJnZXQiLCJlbGVtZW50RnJvbVBvaW50IiwiY2xlYXJBY3RpdmVCdXR0b24iLCJzZXRBY3RpdmVCdXR0b24iLCJidXR0b24iLCJidXR0b25Ub01vZGlmeSIsImNsYXNzTGlzdCIsImFkZCIsImRpc3BhdGNoQ2xpY2siLCJyZW1vdmUiLCJjbGljayIsInVuZGVmaW5lZCIsImdlc3R1cmVOYW1lIiwidGhyZXNob2xkIiwib25TdGFydCIsImV2IiwiY3VycmVudFgiLCJjdXJyZW50WSIsIm9uTW92ZSIsIm9uRW5kIiwiaXNSVEwiLCJob3N0RWwiLCJkaXIiLCJ0b0xvd2VyQ2FzZSIsImkiLCJJT05fRk9DVVNFRCIsIklPTl9GT0NVU0FCTEUiLCJGT0NVU19LRVlTIiwic3RhcnRGb2N1c1Zpc2libGUiLCJyb290RWwiLCJjdXJyZW50Rm9jdXMiLCJrZXlib2FyZE1vZGUiLCJyZWYiLCJzaGFkb3dSb290Iiwicm9vdCIsImJvZHkiLCJzZXRGb2N1cyIsImVsZW1lbnRzIiwiZm9yRWFjaCIsInBvaW50ZXJEb3duIiwib25LZXlkb3duIiwiaW5jbHVkZXMiLCJrZXkiLCJvbkZvY3VzaW4iLCJjb21wb3NlZFBhdGgiLCJ0b0ZvY3VzIiwiZmlsdGVyIiwiY29udGFpbnMiLCJvbkZvY3Vzb3V0IiwiYWN0aXZlRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudE9uUmVhZHkiLCJhdHRhY2hDb21wb25lbnQiLCJkZWxlZ2F0ZSIsImNvbnRhaW5lciIsImNvbXBvbmVudCIsImNzc0NsYXNzZXMiLCJjb21wb25lbnRQcm9wcyIsImlubGluZSIsIl9hIiwiYXR0YWNoVmlld1RvRG9tIiwiSFRNTEVsZW1lbnQiLCJFcnJvciIsIm93bmVyRG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwiYXBwZW5kQ2hpbGQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImRldGFjaENvbXBvbmVudCIsImVsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlVmlld0Zyb21Eb20iLCJDb3JlRGVsZWdhdGUiLCJCYXNlQ29tcG9uZW50IiwiUmVmZXJlbmNlIiwidXNlckNvbXBvbmVudCIsInVzZXJDb21wb25lbnRQcm9wcyIsIl9iIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJhcHBlbmQiLCJhcHAiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlQ29tbWVudCIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJDIiwiZCIsIkhhcHRpY0VuZ2luZSIsImdldEVuZ2luZSIsIndpbiIsIndpbmRvdyIsIlRhcHRpY0VuZ2luZSIsIkNhcGFjaXRvciIsImlzUGx1Z2luQXZhaWxhYmxlIiwiUGx1Z2lucyIsIkhhcHRpY3MiLCJhdmFpbGFibGUiLCJpc0NvcmRvdmEiLCJpc0NhcGFjaXRvciIsImltcGFjdCIsIm9wdGlvbnMiLCJlbmdpbmUiLCJzdHlsZSIsInRvVXBwZXJDYXNlIiwibm90aWZpY2F0aW9uIiwic2VsZWN0aW9uIiwic2VsZWN0aW9uU3RhcnQiLCJnZXN0dXJlU2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25DaGFuZ2VkIiwiZ2VzdHVyZVNlbGVjdGlvbkNoYW5nZWQiLCJzZWxlY3Rpb25FbmQiLCJnZXN0dXJlU2VsZWN0aW9uRW5kIiwiaGFwdGljU2VsZWN0aW9uIiwiaGFwdGljSW1wYWN0IiwidyIsInByaW50UmVxdWlyZWRFbGVtZW50RXJyb3IiLCJJT05fQ09OVEVOVF9UQUdfTkFNRSIsIklPTl9DT05URU5UX0VMRU1FTlRfU0VMRUNUT1IiLCJJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUiIsIklPTl9DT05URU5UX1NFTEVDVE9SIiwiaXNJb25Db250ZW50IiwidGFnTmFtZSIsImdldFNjcm9sbEVsZW1lbnQiLCJmaW5kSW9uQ29udGVudCIsImN1c3RvbUNvbnRlbnRIb3N0IiwiZmluZENsb3Nlc3RJb25Db250ZW50IiwiY2xvc2VzdCIsInNjcm9sbFRvVG9wIiwiZHVyYXRpb25NcyIsImNvbnRlbnQiLCJzY3JvbGxUbyIsInRvcCIsImxlZnQiLCJiZWhhdmlvciIsInNjcm9sbEJ5UG9pbnQiLCJzY3JvbGxCeSIsInByaW50SW9uQ29udGVudEVycm9yTXNnIiwiZGlzYWJsZUNvbnRlbnRTY3JvbGxZIiwiY29udGVudEVsIiwiaW9uQ29udGVudCIsImluaXRpYWxTY3JvbGxZIiwic2Nyb2xsWSIsInNldFByb3BlcnR5IiwicmVzZXRDb250ZW50U2Nyb2xsWSIsInJlbW92ZVByb3BlcnR5IiwiSSIsImYiLCJnIiwicCIsInIiLCJzIiwiYXJyb3dCYWNrU2hhcnAiLCJhcnJvd0Rvd24iLCJjYXJldEJhY2tTaGFycCIsImNhcmV0RG93blNoYXJwIiwiY2FyZXRVcFNoYXJwIiwiY2hlY2ttYXJrT3V0bGluZSIsImNoZXZyb25CYWNrIiwiY2hldnJvbkRvd24iLCJjaGV2cm9uRm9yd2FyZCIsImNoZXZyb25Gb3J3YXJkT3V0bGluZSIsImNsb3NlIiwiY2xvc2VDaXJjbGUiLCJjbG9zZVNoYXJwIiwiZWxsaXBzZU91dGxpbmUiLCJlbGxpcHNpc0hvcml6b250YWwiLCJtZW51T3V0bGluZSIsIm1lbnVTaGFycCIsInJlbW92ZU91dGxpbmUiLCJyZW9yZGVyVGhyZWVPdXRsaW5lIiwicmVvcmRlclR3b1NoYXJwIiwic2VhcmNoT3V0bGluZSIsInNlYXJjaFNoYXJwIiwiZSIsImoiLCJrIiwibCIsIm0iLCJuIiwibyIsInEiLCJ0IiwidSIsInYiLCJLRVlCT0FSRF9ESURfT1BFTiIsIktFWUJPQVJEX0RJRF9DTE9TRSIsIktFWUJPQVJEX1RIUkVTSE9MRCIsInByZXZpb3VzVmlzdWFsVmlld3BvcnQiLCJjdXJyZW50VmlzdWFsVmlld3BvcnQiLCJrZXlib2FyZE9wZW4iLCJyZXNldEtleWJvYXJkQXNzaXN0Iiwic3RhcnRLZXlib2FyZEFzc2lzdCIsInN0YXJ0TmF0aXZlTGlzdGVuZXJzIiwidmlzdWFsVmlld3BvcnQiLCJjb3B5VmlzdWFsVmlld3BvcnQiLCJvbnJlc2l6ZSIsInRyYWNrVmlld3BvcnRDaGFuZ2VzIiwia2V5Ym9hcmREaWRPcGVuIiwia2V5Ym9hcmREaWRSZXNpemUiLCJzZXRLZXlib2FyZE9wZW4iLCJrZXlib2FyZERpZENsb3NlIiwic2V0S2V5Ym9hcmRDbG9zZSIsImZpcmVLZXlib2FyZE9wZW5FdmVudCIsImZpcmVLZXlib2FyZENsb3NlRXZlbnQiLCJzY2FsZWRIZWlnaHREaWZmZXJlbmNlIiwiaGVpZ2h0Iiwic2NhbGUiLCJ3aWR0aCIsImlubmVySGVpZ2h0IiwibmF0aXZlRXYiLCJrZXlib2FyZEhlaWdodCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZGlzcGF0Y2hFdmVudCIsIk1hdGgiLCJyb3VuZCIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJwYWdlVG9wIiwicGFnZUxlZnQiLCJjcmVhdGVLZXlib2FyZENvbnRyb2xsZXIiLCJrZXlib2FyZENoYW5nZUNhbGxiYWNrIiwia2V5Ym9hcmRXaWxsU2hvd0hhbmRsZXIiLCJrZXlib2FyZFdpbGxIaWRlSGFuZGxlciIsImtleWJvYXJkVmlzaWJsZSIsImluaXQiLCJpc0tleWJvYXJkVmlzaWJsZSIsInNwaW5uZXJzIiwiYnViYmxlcyIsImR1ciIsImNpcmNsZXMiLCJmbiIsImluZGV4IiwidG90YWwiLCJhbmltYXRpb25EZWxheSIsImFuZ2xlIiwiUEkiLCJzaW4iLCJjb3MiLCJzdGVwIiwiY2lyY3VsYXIiLCJlbG1EdXJhdGlvbiIsImN4IiwiY3kiLCJmaWxsIiwidmlld0JveCIsInRyYW5zZm9ybSIsImNyZXNjZW50IiwiZG90cyIsIl8iLCJsaW5lcyIsInkxIiwieTIiLCJTUElOTkVSUyIsIlMiLCJjbGFtcCIsImNyZWF0ZVN3aXBlQmFja0dlc3R1cmUiLCJjYW5TdGFydEhhbmRsZXIiLCJvblN0YXJ0SGFuZGxlciIsIm9uTW92ZUhhbmRsZXIiLCJvbkVuZEhhbmRsZXIiLCJkZWZhdWx0VmlldyIsInJ0bCIsImlzQXRFZGdlIiwic3RhcnRYIiwiaW5uZXJXaWR0aCIsImdldERlbHRhWCIsImRlbHRhWCIsImdldFZlbG9jaXR5WCIsInZlbG9jaXR5WCIsImNhblN0YXJ0IiwiZGVsdGEiLCJzdGVwVmFsdWUiLCJ2ZWxvY2l0eSIsInoiLCJzaG91bGRDb21wbGV0ZSIsIm1pc3NpbmciLCJtaXNzaW5nRGlzdGFuY2UiLCJyZWFsRHVyIiwiYWJzIiwibWluIiwiZ2VzdHVyZVByaW9yaXR5Il0sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrOi8vLyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOls1LDYsNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTZdfQ==