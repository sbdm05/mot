"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_form_form_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab1/tab1.module */ 2168)).then(m => m.Tab1PageModule)
            },
            {
                path: 'tab2',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab2_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab2/tab2.module */ 4608)).then(m => m.Tab2PageModule)
            },
            {
                path: 'tab3',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab3_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab3/tab3.module */ 3746)).then(m => m.Tab3PageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/signup',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 5230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 4710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 4710:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\n      <ion-label>Mes infos</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"create-outline\"></ion-icon>\n      <ion-label>Créer une lettre</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"list-outline\"></ion-icon>\n      <ion-label>Historique</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF90YWJzX3RhYnNfbW9kdWxlX3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNjO0FBQ2hCO0FBRXZDLE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsZ0RBQVE7UUFDbkIsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLHNRQUE2QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7YUFDOUU7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsd01BQTZCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQzthQUM5RTtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyx3TUFBNkIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO2FBQzlFO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFNBQVMsRUFBRSxNQUFNO2FBQ2xCO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsU0FBUztRQUNyQixTQUFTLEVBQUUsTUFBTTtLQUNsQjtDQUNGLENBQUM7SUFLVyxxQkFBcUIsU0FBckIscUJBQXFCO0NBQUc7QUFBeEIscUJBQXFCO0lBSGpDLHVEQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxrRUFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN6QyxDQUFDO0dBQ1cscUJBQXFCLENBQUc7QUFBSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q1c7QUFDSjtBQUNNO0FBQ0Y7QUFFaUI7QUFFdkI7SUFXMUIsY0FBYyxTQUFkLGNBQWM7Q0FBRztBQUFqQixjQUFjO0lBVDFCLHVEQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx1REFBVztZQUNYLHlEQUFZO1lBQ1osdURBQVc7WUFDWCx1RUFBcUI7U0FDdEI7UUFDRCxZQUFZLEVBQUUsQ0FBQyxnREFBUSxDQUFDO0tBQ3pCLENBQUM7R0FDVyxjQUFjLENBQUc7QUFBSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZTtJQU83QixRQUFRLFNBQVIsUUFBUTtJQUVuQixnQkFBZSxDQUFDO0NBRWpCOztBQUpZLFFBQVE7SUFMcEIsd0RBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGlFQUE2Qjs7S0FFOUIsQ0FBQztHQUNXLFFBQVEsQ0FJcEI7QUFKb0IiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC90YWJzL3RhYnMtcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvdGFicy90YWJzLm1vZHVsZS50cyIsIi4vc3JjL2FwcC90YWJzL3RhYnMucGFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGFic1BhZ2UgfSBmcm9tICcuL3RhYnMucGFnZSc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ3RhYnMnLFxuICAgIGNvbXBvbmVudDogVGFic1BhZ2UsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3RhYjEnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4vdGFiMS90YWIxLm1vZHVsZScpLnRoZW4obSA9PiBtLlRhYjFQYWdlTW9kdWxlKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3RhYjInLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4vdGFiMi90YWIyLm1vZHVsZScpLnRoZW4obSA9PiBtLlRhYjJQYWdlTW9kdWxlKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3RhYjMnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4vdGFiMy90YWIzLm1vZHVsZScpLnRoZW4obSA9PiBtLlRhYjNQYWdlTW9kdWxlKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIHJlZGlyZWN0VG86ICcvdGFicy90YWIxJyxcbiAgICAgICAgcGF0aE1hdGNoOiAnZnVsbCdcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICByZWRpcmVjdFRvOiAnL3NpZ251cCcsXG4gICAgcGF0aE1hdGNoOiAnZnVsbCdcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFic1BhZ2VSb3V0aW5nTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFRhYnNQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vdGFicy1yb3V0aW5nLm1vZHVsZSc7XG5cbmltcG9ydCB7IFRhYnNQYWdlIH0gZnJvbSAnLi90YWJzLnBhZ2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFRhYnNQYWdlUm91dGluZ01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUYWJzUGFnZV1cbn0pXG5leHBvcnQgY2xhc3MgVGFic1BhZ2VNb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdGFicycsXG4gIHRlbXBsYXRlVXJsOiAndGFicy5wYWdlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFicy5wYWdlLnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzUGFnZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbXX0=