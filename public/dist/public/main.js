(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"container\">\n  <div class=\"input\">\n    <h3>Submit a cake to be rated</h3>\n\n    <form (submit)=\"createCakes()\">\n      <label>baker name:</label>\n      <input type=\"text\" name=\"newCake.name\" [(ngModel)]=\"newCake.name\" />\n      <label>image url:</label>\n      <input type=\"text\" name=\"newCake.url\" [(ngModel)]=\"newCake.url\" />\n      <button type=\"submit\" value=\"Create Cake\">Create Cake</button>\n    </form>\n  </div>\n  <div class=\"cakes\">\n    <div *ngFor=\"let cake of cakes; let i = index\">\n      <div class=\"comments\">\n        <img (click)=\"toggleInfo(i)\" src=\"{{cake.url}}\" alt=\"cake.name\">\n        <div class=\"comment-form\">\n          <form  (submit)=\"newComments(cake._id, i)\">\n            <p>{{ newComment[i] | json}}</p>\n            <select name=\"newComment[i].rate\" [(ngModel)]=\"newComment[i].rate\">\n              <option value=\"1\">1</option>\n              <option value=\"2\">2</option>\n              <option value=\"3\">3</option>\n              <option value=\"4\">4</option>\n              <option value=\"5\">5</option>\n            </select>\n            <input type=\"text\" name=\"newComment[i].comment\" [(ngModel)]=\"newComment[i].comment\">\n            <button type=\"submit\" value=\"Create Cake\">Create Cake</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div style=\"width: 801px; height: 400\">\n    <app-cake-info *ngIf=\"appShowInfo\" [showInfo]= \"appShowInfo\"></app-cake-info> \n  </div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cake-info/cake-info.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cake-info/cake-info.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>baked by {{showInfo.name}}</h2>\n<img src=\"{{showInfo.url}}\" alt=\"{{showInfo.name}}\"/>\n<h3>Average rating: {{cakeAvg}}</h3>\n<div class=\"comments\" *ngFor=\"let c of showInfo.comments; let i = index\">\n  <div class=\"comment\">\n    <p>{{c.rate}}</p>\n    <p>{{c.comment}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    vertical-align: top;\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n.container {\n    vertical-align: top;\n    width: 801px;\n    height: 401px;\n    margin: auto;\n}\n\nlabel {\n    display: block;\n}\n\ninput {\n    display: block;\n}\n\n.input {\n    vertical-align: top;\n    display: inline-block;\n    width: auto;\n    height: 400px;\n    border: solid 1px red;\n}\n\n.cakes {\n    vertical-align: top;\n    display: inline-block;\n    width: 593px;\n    height: 400px;\n    border: solid 1px red;\n    overflow: scroll;\n}\n\n.indiv-comment {\n\n}\n\nimg {\n    display: inline-block;\n    width: 200px;\n    height: auto;\n}\n\n.comments {\n    width: 593px;\n    height: 200px;\n}\n\n.comment-form {\n    display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTs7QUFFQTs7QUFHQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jb250YWluZXIge1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgd2lkdGg6IDgwMXB4O1xuICAgIGhlaWdodDogNDAxcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG5sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5pbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbnB1dCB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZWQ7XG59XG5cbi5jYWtlcyB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDU5M3B4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmVkO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5pbmRpdi1jb21tZW50IHtcblxufVxuXG5cbmltZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cblxuLmNvbW1lbnRzIHtcbiAgICB3aWR0aDogNTkzcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmNvbW1lbnQtZm9ybSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



let AppComponent = class AppComponent {
    constructor(_httpService) {
        this._httpService = _httpService;
    }
    ngOnInit() {
        this.Cakes();
        this.newCake = { name: "", url: "" };
        this.newComment = [];
    }
    createComment(n) {
        for (let i = 0; i < n; i++) {
            this.newComment.push({ rate: 1, comment: "" });
            console.log(this.newComment);
        }
    }
    Cakes() {
        let obs = this._httpService.getCakes();
        obs.subscribe(data => {
            this.cakes = data;
            console.log(this.cakes.length);
            this.createComment(this.cakes.length);
        });
    }
    ;
    createCakes() {
        let obs = this._httpService.postCakes(this.newCake);
        obs.subscribe(data => {
            console.log("send", data);
        });
        this.Cakes();
    }
    newComments(id, index) {
        console.log(this.newComment[index]);
        console.log(id);
        let obs = this._httpService.postComments(this.newComment[index], id);
        obs.subscribe(data => {
            console.log("newComments", data);
        });
    }
    toggleInfo(index) {
        this.appShowInfo = this.cakes[index];
        console.log(this.appShowInfo);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
], AppComponent);

;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _cake_info_cake_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cake-info/cake-info.component */ "./src/app/cake-info/cake-info.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _cake_info_cake_info_component__WEBPACK_IMPORTED_MODULE_8__["CakeInfoComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cake-info/cake-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/cake-info/cake-info.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    vertical-align: top;\n    box-sizing: border-box;\n    margin: 0px;\n}\n\nh2 {\n    display: block;\n}\n\nimg {\n    display: inline-block;\n    width: 200px;\n    height: auto;\n}\n\nh3 {\n    display: inline-block;\n}\n\n.comments {\n    display: inline-block;\n    overflow: scroll;\n    height: 200px;\n}\n\n.comment {\n    display: block;\n    margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FrZS1pbmZvL2Nha2UtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Nha2UtaW5mby9jYWtlLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuaDIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG5oMyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY29tbWVudHMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbi5jb21tZW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cake-info/cake-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cake-info/cake-info.component.ts ***!
  \**************************************************/
/*! exports provided: CakeInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakeInfoComponent", function() { return CakeInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CakeInfoComponent = class CakeInfoComponent {
    constructor() { }
    ngOnInit() {
        this.rateAvg();
    }
    rateAvg() {
        console.log(this.showInfo.comments);
        let list = this.showInfo.comments;
        let sum = 0;
        for (let i = 0; i < list.length; i++) {
            sum += list[i].rate;
        }
        ;
        this.cakeAvg = sum / list.length;
        console.log("this is average", this.cakeAvg);
    }
    ;
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CakeInfoComponent.prototype, "showInfo", void 0);
CakeInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cake-info',
        template: __webpack_require__(/*! raw-loader!./cake-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/cake-info/cake-info.component.html"),
        styles: [__webpack_require__(/*! ./cake-info.component.css */ "./src/app/cake-info/cake-info.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CakeInfoComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    getCakes() {
        return this._http.get("/cakes");
    }
    ;
    postCakes(n) {
        return this._http.post("/cakes", n);
    }
    ;
    postComments(data, id) {
        console.log(data);
        return this._http.post(`/cakes/comment/${id}`, data);
    }
    ;
};
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HttpService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/novi/Dropbox/project/codingDojo/MEAN/Angular/rateMyCakes/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map