(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/home/home.module */ 842)).then(m => m.HomeModule),
    },
    {
        path: 'skill',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_skills_skills_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/skills/skills.module */ 3839)).then(m => m.SkillsModule),
    },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _template_user_sidebar_user_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/user-sidebar/user-sidebar.component */ 4046);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _template_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template/footer/footer.component */ 3948);




class AppComponent {
    constructor() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [[1, "container"], [1, "container__info-bar"], [1, "container__content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-user-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_template_user_sidebar_user_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.UserSidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _template_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  min-height: calc(100vh - 40px);\n  margin: 0 auto;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.container__info-bar[_ngcontent-%COMP%] {\n  width: 310px;\n}\n\n.container__content[_ngcontent-%COMP%] {\n  width: calc(100% - 310px - 16px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHNCQUFBO0FBQUo7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNJO0VBQ0ksWUFBQTtBQUNSOztBQUNJO0VBQ0ksZ0NBQUE7QUFDUiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgJl9faW5mby1iYXIge1xyXG4gICAgICAgIHdpZHRoOiAzMTBweDtcclxuICAgIH1cclxuICAgICZfX2NvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMTBweCAtIDE2cHgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _template_template_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/template.module */ 41);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule,
            _template_template_module__WEBPACK_IMPORTED_MODULE_0__.TemplateModule,
        ], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule,
        _template_template_module__WEBPACK_IMPORTED_MODULE_0__.TemplateModule], exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule] }); })();


/***/ }),

/***/ 7637:
/*!****************************************************************!*\
  !*** ./src/app/template/components/avatar/avatar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarComponent": () => (/* binding */ AvatarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class AvatarComponent {
    constructor() { }
    ngOnInit() {
    }
}
AvatarComponent.ɵfac = function AvatarComponent_Factory(t) { return new (t || AvatarComponent)(); };
AvatarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AvatarComponent, selectors: [["app-avatar"]], decls: 24, vars: 0, consts: [[1, "avatar"], [1, "avatar__header"], [1, "avatar__box-img"], ["src", "../../../assets/images/wendell--noce.png", "alt", "Wendell Noce", 1, "avatar__box-img__img"], [1, "avatar__name"], [1, "avatar__position"], [1, "avatar__infos"], [1, "d-flex", "justify-content-between"]], template: function AvatarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Wendell Noce ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Front-end Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " P\u00E1is: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Brasil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Cidade: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Belo Horizonte ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Idade: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " 36 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".avatar[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.avatar__header[_ngcontent-%COMP%] {\n  padding: 16px 0;\n  background-color: var(--global-gray);\n  border-bottom: 1px solid var(--color-primary);\n}\n.avatar__infos[_ngcontent-%COMP%] {\n  padding: 16px 16px 0px;\n}\n.avatar__infos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .avatar__infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n}\n.avatar__infos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .avatar__infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.avatar__infos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n}\n.avatar__box-img[_ngcontent-%COMP%] {\n  margin: 16px auto;\n  border: 2px solid var(--color-primary);\n  width: 90px;\n  height: 90px;\n  border-radius: 100px;\n  overflow: hidden;\n}\n.avatar__box-img__img[_ngcontent-%COMP%] {\n  max-width: 110%;\n}\n.avatar__name[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-primary);\n  font-size: 22px;\n}\n.avatar__position[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--color-gray);\n  margin: 8px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2YXRhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7QUFDSTtFQUNJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLDZDQUFBO0FBQ1I7QUFFSTtFQUNJLHNCQUFBO0FBQVI7QUFDUTtFQUNJLGVBQUE7RUFDQSxTQUFBO0FBQ1o7QUFBWTtFQUNJLDJCQUFBO0FBRWhCO0FBQ1E7RUFDSSxlQUFBO0FBQ1o7QUFHSTtFQUNJLGlCQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUdRO0VBQ0ksZUFBQTtBQURaO0FBS0k7RUFDSSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBSFI7QUFNSTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUVBLGVBQUE7QUFMUiIsImZpbGUiOiJhdmF0YXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICZfX2hlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdsb2JhbC1ncmF5KTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgJl9faW5mb3Mge1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTZweCAwcHg7XHJcbiAgICAgICAgcCwgc3BhbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19ib3gtaW1nIHtcclxuICAgICAgICBtYXJnaW46IDE2cHggYXV0bztcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgJl9faW1nIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19uYW1lIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19wb3NpdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5KTtcclxuXHJcbiAgICAgICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7845:
/*!********************************************************************************!*\
  !*** ./src/app/template/components/user-languages/user-languages.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLanguagesComponent": () => (/* binding */ UserLanguagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class UserLanguagesComponent {
    constructor() {
        this.percentage = '';
        this.language = '';
    }
    ngOnInit() {
    }
}
UserLanguagesComponent.ɵfac = function UserLanguagesComponent_Factory(t) { return new (t || UserLanguagesComponent)(); };
UserLanguagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserLanguagesComponent, selectors: [["app-user-languages"]], inputs: { percentage: "percentage", language: "language" }, decls: 5, vars: 4, consts: [[1, "chart"], [1, "pie", "animate"]], template: function UserLanguagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"]("--p:" + ctx.percentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.percentage, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.language, " ");
    } }, styles: [".chart[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px 0px;\n}\n.chart[_ngcontent-%COMP%]   .pie[_ngcontent-%COMP%] {\n  --p: 20;\n  --b: 4px;\n  --c: var(--color-primary);\n  --w: 45px;\n  width: var(--w);\n  aspect-ratio: 1;\n  position: relative;\n  display: inline-grid;\n  margin: 5px;\n  place-content: center;\n  font-size: 10px;\n  color: var(--text-color);\n  cursor: pointer;\n}\n.chart[_ngcontent-%COMP%]   .pie[_ngcontent-%COMP%]:before, .chart[_ngcontent-%COMP%]   .pie[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n}\n.chart[_ngcontent-%COMP%]   .pie[_ngcontent-%COMP%]:before {\n  inset: 0;\n  background: radial-gradient(farthest-side, var(--c) 98%, #0000) top/var(--b) var(--b) no-repeat, conic-gradient(var(--c) calc(var(--p) * 1%), #0000 0);\n  -webkit-mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)), #000 calc(100% - var(--b)));\n  mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)), #000 calc(100% - var(--b)));\n}\n.chart[_ngcontent-%COMP%]   .pie[_ngcontent-%COMP%]:after {\n  inset: calc(50% - var(--b) / 2);\n  background: var(--c);\n  transform: rotate(calc(var(--p) * 3.6deg)) translateY(calc(50% - var(--w) / 2));\n}\n.chart[_ngcontent-%COMP%]   .animate[_ngcontent-%COMP%] {\n  animation: graph 1s 0.5s both;\n}\n.chart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  margin: 8px 0 0;\n}\n@property --p {\n  syntax: \"<number>\";\n  inherits: true;\n  initial-value: 0;\n}\n@keyframes graph {\n  from {\n    --p:0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGFuZ3VhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQUk7RUFFSSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUVBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFFQSx3QkFBQTtFQUNBLGVBQUE7QUFEUjtBQUdRO0VBRUksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFGWjtBQUtRO0VBQ0ksUUFBQTtFQUNBLHNKQUFBO0VBR0Esb0dBQUE7RUFLQSw0RkFBQTtBQVRaO0FBZ0JRO0VBQ0ksK0JBQUE7RUFDQSxvQkFBQTtFQUNBLCtFQUFBO0FBZFo7QUFtQkk7RUFDSSw2QkFBQTtBQWpCUjtBQW9CSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFsQlI7QUF1QkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQXBCSjtBQXdCQTtFQUNJO0lBQUssS0FBQTtFQXJCUDtBQUNGIiwiZmlsZSI6InVzZXItbGFuZ3VhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTZweCAwcHg7XHJcbiAgICAucGllIHtcclxuXHJcbiAgICAgICAgLS1wOiAyMDtcclxuICAgICAgICAtLWI6IDRweDtcclxuICAgICAgICAtLWM6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIC0tdzogNDVweDtcclxuXHJcbiAgICAgICAgd2lkdGg6IHZhcigtLXcpO1xyXG4gICAgICAgIGFzcGVjdC1yYXRpbzogMTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuXHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBpbnNldDogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGZhcnRoZXN0LXNpZGUsIHZhcigtLWMpIDk4JSwgIzAwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wL3ZhcigtLWIpIHZhcigtLWIpIG5vLXJlcGVhdCxcclxuICAgICAgICAgICAgICAgIGNvbmljLWdyYWRpZW50KHZhcigtLWMpIGNhbGModmFyKC0tcCkgKiAxJSksICMwMDAwIDApO1xyXG4gICAgICAgICAgICAtd2Via2l0LW1hc2s6IHJhZGlhbC1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIGZhcnRoZXN0LXNpZGUsXHJcbiAgICAgICAgICAgICAgICAjMDAwMCBjYWxjKDk5JSAtIHZhcigtLWIpKSxcclxuICAgICAgICAgICAgICAgICMwMDAgY2FsYygxMDAlIC0gdmFyKC0tYikpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1hc2s6IHJhZGlhbC1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIGZhcnRoZXN0LXNpZGUsXHJcbiAgICAgICAgICAgICAgICAjMDAwMCBjYWxjKDk5JSAtIHZhcigtLWIpKSxcclxuICAgICAgICAgICAgICAgICMwMDAgY2FsYygxMDAlIC0gdmFyKC0tYikpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgaW5zZXQ6IGNhbGMoNTAlIC0gdmFyKC0tYikgLyAyKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKGNhbGModmFyKC0tcCkgKiAzLjZkZWcpKVxyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWShjYWxjKDUwJSAtIHZhcigtLXcpIC8gMikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYW5pbWF0ZSB7XHJcbiAgICAgICAgYW5pbWF0aW9uOmdyYXBoIDFzIC41cyBib3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQHByb3BlcnR5IC0tcCB7XHJcbiAgICBzeW50YXg6IFwiPG51bWJlcj5cIjtcclxuICAgIGluaGVyaXRzOiB0cnVlO1xyXG4gICAgaW5pdGlhbC12YWx1ZTogMDtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgZ3JhcGgge1xyXG4gICAgZnJvbXstLXA6MH1cclxuICB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3948:
/*!*****************************************************!*\
  !*** ./src/app/template/footer/footer.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 0, consts: [[1, "footer", "d-flex", "align-items-center"], ["href", "mailto:wendell.noce@gmail.com"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A9 2023 Todos os direitos reservados. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " wendell.noce@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  background-color: var(--color-primary);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 16px;\n}\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 10px;\n  color: var(--global-gray);\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFDSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBQ1IiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcblxyXG4gICAgcCxhe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1nbG9iYWwtZ3JheSk7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2668:
/*!********************************************************************!*\
  !*** ./src/app/template/menu/menu-button/menu-button.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuButtonComponent": () => (/* binding */ MenuButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 2529);



class MenuButtonComponent {
    constructor() {
        this.closeSideNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    toggleMenu() {
        this.closeSideNav.emit();
    }
}
MenuButtonComponent.ɵfac = function MenuButtonComponent_Factory(t) { return new (t || MenuButtonComponent)(); };
MenuButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuButtonComponent, selectors: [["app-menu-button"]], outputs: { closeSideNav: "closeSideNav" }, decls: 4, vars: 0, consts: [[1, "menu"], ["mat-icon-button", "", 1, "menu__button", 3, "click"]], template: function MenuButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuButtonComponent_Template_button_click_1_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon], styles: [".menu[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 16px;\n}\n.menu__button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: var(--color-primary);\n  border: 1px solid var(--color-primary);\n  padding-top: 3px;\n  transition: 0.3s all ease;\n  cursor: pointer;\n}\n.menu__button[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary);\n  color: var(--global-gray);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBQ1I7QUFDUTtFQUNJLHNDQUFBO0VBQ0EseUJBQUE7QUFDWiIsImZpbGUiOiJtZW51LWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTZweDtcclxuXHJcbiAgICAmX19idXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWdsb2JhbC1ncmF5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2521:
/*!**************************************************************!*\
  !*** ./src/app/template/menu/nav-menu/nav-menu.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavMenuComponent": () => (/* binding */ NavMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class NavMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) { return new (t || NavMenuComponent)(); };
NavMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavMenuComponent, selectors: [["app-nav-menu"]], decls: 6, vars: 0, template: function NavMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " item 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " item2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 41:
/*!*********************************************!*\
  !*** ./src/app/template/template.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateModule": () => (/* binding */ TemplateModule)
/* harmony export */ });
/* harmony import */ var _user_sidebar_user_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-sidebar/user-sidebar.component */ 4046);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _menu_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/nav-menu/nav-menu.component */ 2521);
/* harmony import */ var _menu_menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu-button/menu-button.component */ 2668);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ 3948);
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/avatar/avatar.component */ 7637);
/* harmony import */ var _components_user_languages_user_languages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-languages/user-languages.component */ 7845);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);


// Components





//Materail Modules


class TemplateModule {
}
TemplateModule.ɵfac = function TemplateModule_Factory(t) { return new (t || TemplateModule)(); };
TemplateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: TemplateModule });
TemplateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TemplateModule, { declarations: [_menu_menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_2__.MenuButtonComponent,
        _menu_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__.NavMenuComponent,
        _user_sidebar_user_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.UserSidebarComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_4__.AvatarComponent,
        _components_user_languages_user_languages_component__WEBPACK_IMPORTED_MODULE_5__.UserLanguagesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule], exports: [_menu_menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_2__.MenuButtonComponent,
        _menu_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__.NavMenuComponent,
        _user_sidebar_user_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.UserSidebarComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent] }); })();


/***/ }),

/***/ 4046:
/*!*****************************************************************!*\
  !*** ./src/app/template/user-sidebar/user-sidebar.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSidebarComponent": () => (/* binding */ UserSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/avatar/avatar.component */ 7637);
/* harmony import */ var _components_user_languages_user_languages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/user-languages/user-languages.component */ 7845);



class UserSidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserSidebarComponent.ɵfac = function UserSidebarComponent_Factory(t) { return new (t || UserSidebarComponent)(); };
UserSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserSidebarComponent, selectors: [["app-user-sidebar"]], decls: 8, vars: 6, consts: [[1, "user-sidebar"], [1, "user-sidebar__box"], [1, "d-flex", "justify-content-around"], [3, "percentage", "language"]], template: function UserSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-user-languages", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-user-languages", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-user-languages", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("percentage", "80")("language", "Portug\u00EAs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("percentage", "45")("language", "Ingl\u00EAs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("percentage", "60")("language", "Espanhol");
    } }, directives: [_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_0__.AvatarComponent, _components_user_languages_user_languages_component__WEBPACK_IMPORTED_MODULE_1__.UserLanguagesComponent], styles: [".user-sidebar[_ngcontent-%COMP%] {\n  margin: 16px;\n}\n.user-sidebar__box[_ngcontent-%COMP%] {\n  background-color: var(--global-dark);\n  border-bottom: 1px solid var(--color-primary);\n  padding-bottom: 8px;\n}\n.user-sidebar__box[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjtBQUNJO0VBQ0ksb0NBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDUTtFQUNJLG1CQUFBO0FBQ1oiLCJmaWxlIjoidXNlci1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItc2lkZWJhciB7XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcblxyXG4gICAgJl9fYm94IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nbG9iYWwtZGFyayk7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


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
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map