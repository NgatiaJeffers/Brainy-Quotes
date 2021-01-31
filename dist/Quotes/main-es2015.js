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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");



class AppComponent {
    constructor() {
        this.title = 'Quotes';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "navbar", "navbar-light"], [1, "container-fluid"], [1, "navbar-brand", "mb-0", "h1"], [1, "row"], [1, "col-md-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Brainy Quotes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-quote", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_quote_quote_component__WEBPACK_IMPORTED_MODULE_1__["QuoteComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quote-form/quote-form.component */ "./src/app/quote-form/quote-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _module_date_count_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/date-count.pipe */ "./src/app/module/date-count.pipe.ts");
/* harmony import */ var _quote_vote_quote_vote_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quote-vote/quote-vote.component */ "./src/app/quote-vote/quote-vote.component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _quote_quote_component__WEBPACK_IMPORTED_MODULE_3__["QuoteComponent"],
        _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_4__["QuoteFormComponent"],
        _module_date_count_pipe__WEBPACK_IMPORTED_MODULE_6__["DateCountPipe"],
        _quote_vote_quote_vote_component__WEBPACK_IMPORTED_MODULE_7__["QuoteVoteComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _quote_quote_component__WEBPACK_IMPORTED_MODULE_3__["QuoteComponent"],
                    _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_4__["QuoteFormComponent"],
                    _module_date_count_pipe__WEBPACK_IMPORTED_MODULE_6__["DateCountPipe"],
                    _quote_vote_quote_vote_component__WEBPACK_IMPORTED_MODULE_7__["QuoteVoteComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/module/date-count.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/module/date-count.pipe.ts ***!
  \*******************************************/
/*! exports provided: DateCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCountPipe", function() { return DateCountPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DateCountPipe {
    transform(value, ...args) {
        let today = new Date(); //get current date and time
        let todayWithNoTime = new Date(today.getFullYear(), today.getMonth(), today.getDay());
        var dateDifference = Math.abs(value - todayWithNoTime); //returns value in milisecondsa
        const secondsInDay = 86400; //60 seeconds * 60 mins in an hr * 24hrs in a day
        var dateDifferenceSeconds = dateDifference * 0.001; //converts milliseconds to seconds
        var dateCounter = dateDifferenceSeconds / secondsInDay;
        if (dateCounter >= 1 && value > todayWithNoTime) {
            return dateCounter;
        }
        else {
            return 0;
        }
    }
}
DateCountPipe.ɵfac = function DateCountPipe_Factory(t) { return new (t || DateCountPipe)(); };
DateCountPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateCount", type: DateCountPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateCountPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'dateCount'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/module/quote.ts":
/*!*********************************!*\
  !*** ./src/app/module/quote.ts ***!
  \*********************************/
/*! exports provided: Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
class Quote {
    constructor(text, author, date, like, dislike) {
        this.text = text;
        this.author = author;
        this.date = date;
        this.like = like;
        this.dislike = dislike;
        this.showQuote = false;
    }
}


/***/ }),

/***/ "./src/app/quote-form/quote-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteFormComponent", function() { return QuoteFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _module_quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../module/quote */ "./src/app/module/quote.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class QuoteFormComponent {
    constructor() {
        this.newQuote = new _module_quote__WEBPACK_IMPORTED_MODULE_1__["Quote"]('', '', new Date(), 0, 0);
        this.addQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    addAnotherQuote() {
        this.addQuote.emit(this.newQuote);
    }
    ngOnInit() {
    }
}
QuoteFormComponent.ɵfac = function QuoteFormComponent_Factory(t) { return new (t || QuoteFormComponent)(); };
QuoteFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteFormComponent, selectors: [["app-quote-form"]], outputs: { addQuote: "addQuote" }, decls: 24, vars: 6, consts: [[1, "container", "submit-form"], [1, "brainy"], [3, "submit"], [1, "form-group"], ["id", "message", "rows", "8", "placeholder", "Quote..", "name", "text", "required", "", 1, "form-control", "item", 3, "ngModel", "ngModelChange"], ["text", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["type", "text", "id", "author", "placeholder", "Author", "name", "author", "required", "", 1, "form-control", "item", 3, "ngModel", "ngModelChange"], ["author", "ngModel"], ["type", "date", "id", "date", "name", "date", "required", "", 1, "form-control", "item", 3, "ngModel", "ngModelChange"], ["date", "ngModel"], ["type", "submit", 1, "btn", "btn-block"]], template: function QuoteFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create a Brainy Quote \uD83D\uDCAC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function QuoteFormComponent_Template_form_submit_3_listener() { return ctx.addAnotherQuote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteFormComponent_Template_textarea_ngModelChange_5_listener($event) { return ctx.newQuote.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "The quote is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteFormComponent_Template_input_ngModelChange_11_listener($event) { return ctx.newQuote.author = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "The author is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteFormComponent_Template_input_ngModelChange_17_listener($event) { return ctx.newQuote.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Date is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Add Quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newQuote.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r0.valid || _r0.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newQuote.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newQuote.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r2.valid || _r2.pristine);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".brainy[_ngcontent-%COMP%] {\n    font-size: 30px;\n    color: #dd8ea4;\n    margin-top: 1em;\n}\n\n.submit-form[_ngcontent-%COMP%] {\n    padding: 10px 0;\n}\n\n.submit-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    background-color: #dd8ea4;\n    max-width: 500px;\n    margin-top: 1em;\n    padding: 50px 50px;\n    border-radius: 10px;\n    box-shadow: 0px 2px 10px rgb(221,142,163);\n}\n\n.item[_ngcontent-%COMP%] {\n    border-radius: 10px;\n    margin-bottom: 20px;\n    padding: 10px 20px;\n}\n\n.btn.btn-block[_ngcontent-%COMP%] {\n    background-color: #fedd89;\n}\n\n@media (max-width: 576px) {\n    .submit-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\n        padding: 50px 20px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUtZm9ybS9xdW90ZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9xdW90ZS1mb3JtL3F1b3RlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFpbnkge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogI2RkOGVhNDtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5zdWJtaXQtZm9ybSB7XG4gICAgcGFkZGluZzogMTBweCAwO1xufVxuXG4uc3VibWl0LWZvcm0gZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkOGVhNDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBwYWRkaW5nOiA1MHB4IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggcmdiKDIyMSwxNDIsMTYzKTtcbn1cblxuLml0ZW0ge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi5idG4uYnRuLWJsb2NrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVkZDg5O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAuc3VibWl0LWZvcm0gZm9ybXtcbiAgICAgICAgcGFkZGluZzogNTBweCAyMHB4O1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quote-form',
                templateUrl: './quote-form.component.html',
                styleUrls: ['./quote-form.component.css']
            }]
    }], function () { return []; }, { addQuote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/quote-vote/quote-vote.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quote-vote/quote-vote.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteVoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteVoteComponent", function() { return QuoteVoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class QuoteVoteComponent {
    constructor() {
        this.numberOfLikes = 0;
        this.numberOfDislikes = 0;
        this.Upvote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    likeClick() {
        this.Upvote.emit(this.numberOfLikes);
        this.numberOfLikes++;
    }
    dislikeClick() {
        this.numberOfDislikes++;
    }
}
QuoteVoteComponent.ɵfac = function QuoteVoteComponent_Factory(t) { return new (t || QuoteVoteComponent)(); };
QuoteVoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteVoteComponent, selectors: [["app-quote-vote"]], inputs: { quote: "quote" }, outputs: { Upvote: "Upvote" }, decls: 7, vars: 2, consts: [[1, "vote"], [1, "up-vote", 3, "click"], [1, "down-vote", 3, "click"]], template: function QuoteVoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteVoteComponent_Template_div_click_1_listener() { return ctx.likeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteVoteComponent_Template_div_click_4_listener() { return ctx.dislikeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.numberOfLikes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.numberOfDislikes);
    } }, styles: [".vote[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n}\n\n\ndiv[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    padding: 5px;\n}\n\n\nh5[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: #dc8ea3;\n}\n\n\n.up-vote[_ngcontent-%COMP%] {\n    background-image: url('blush.png');\n    height: 25px;\n    width: 25px;\n    background-size: cover;\n    background-position: center center;\n    margin-top: 3px;\n    cursor: pointer;\n}\n\n\n.down-vote[_ngcontent-%COMP%] {\n    background-image: url('ang.png');\n    height: 25px;\n    width: 25px;\n    background-size: cover;\n    background-position: center center;\n    margin-top: 3px;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUtdm90ZS9xdW90ZS12b3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOzs7QUFHQTtJQUNJLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksa0NBQW1EO0lBQ25ELFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxnQ0FBaUQ7SUFDakQsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcXVvdGUtdm90ZS9xdW90ZS12b3RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudm90ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG5cbmRpdiBoNSB7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG5cbmg1IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2RjOGVhMztcbn1cblxuXG4udXAtdm90ZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifnNyYy9hc3NldHMvdm90ZS9ibHVzaC5wbmdcIik7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5kb3duLXZvdGUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn5zcmMvYXNzZXRzL3ZvdGUvYW5nLnBuZ1wiKTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteVoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quote-vote',
                templateUrl: './quote-vote.component.html',
                styleUrls: ['./quote-vote.component.css']
            }]
    }], function () { return []; }, { quote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], Upvote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/quote/quote.component.ts":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _module_quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../module/quote */ "./src/app/module/quote.ts");
/* harmony import */ var _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote-form/quote-form.component */ "./src/app/quote-form/quote-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _quote_vote_quote_vote_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quote-vote/quote-vote.component */ "./src/app/quote-vote/quote-vote.component.ts");






function QuoteComponent_blockquote_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "blockquote", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Quote by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "cite", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "cite", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-quote-vote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quote_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", quote_r1.text, ".\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quote_r1.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 3, quote_r1.date));
} }
class QuoteComponent {
    constructor() {
        this.myData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.quotes = [
            new _module_quote__WEBPACK_IMPORTED_MODULE_1__["Quote"]('Dont believe anything that you read on the internet, it may be fake.', 'Abraham Lincon', new Date(2021, 1, 6), 0, 0),
            new _module_quote__WEBPACK_IMPORTED_MODULE_1__["Quote"]('Be yourself; everyone else is already taken.', 'Oscar Wilde', new Date(2021, 2, 8), 0, 0),
            new _module_quote__WEBPACK_IMPORTED_MODULE_1__["Quote"]('Genetic code is a divine writing.', 'Toba Beta ', new Date(2019, 4, 11), 0, 0),
            new _module_quote__WEBPACK_IMPORTED_MODULE_1__["Quote"]('Unless you know the code, it has no meaning.', 'John Connolly', new Date(2019, 5, 3), 0, 0),
            new _module_quote__WEBPACK_IMPORTED_MODULE_1__["Quote"]('Real web designers write code. Always have, always will.', 'Jeffrey Zeldman', new Date(2018, 6, 3), 0, 0),
            new _module_quote__WEBPACK_IMPORTED_MODULE_1__["Quote"]('Any sufficiently advanced technology is indistinguishable from magic.', 'Arthur C. Clarke', new Date(2014, 8, 6), 0, 0)
        ];
    }
    addNewQuote(quote) {
        const quoteLength = this.quotes.length;
        quote.date = new Date(quote.date);
        this.quotes.push(quote);
    }
    ngOnInit() {
    }
}
QuoteComponent.ɵfac = function QuoteComponent_Factory(t) { return new (t || QuoteComponent)(); };
QuoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteComponent, selectors: [["app-quote"]], outputs: { myData: "myData" }, decls: 5, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-4", 3, "addQuote"], [1, "col-md-8", "mx-auto", "bq"], ["class", "blockquote blockquote-custom p-5 shadow rounded", 4, "ngFor", "ngForOf"], [1, "blockquote", "blockquote-custom", "p-5", "shadow", "rounded"], [1, "blockquote-custom-icon", "shadow-sm"], [1, "fa", "fa-quote-left", "text-white"], [1, "mb-0", "mt-2", "font-italic"], [1, "blockquote-footer", "pt-4", "mt-4", "border-top"], ["title", "quote author"], ["title", "quote date"]], template: function QuoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-quote-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addQuote", function QuoteComponent_Template_app_quote_form_addQuote_2_listener($event) { return ctx.addNewQuote($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuoteComponent_blockquote_4_Template, 14, 5, "blockquote", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quotes);
    } }, directives: [_quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_2__["QuoteFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _quote_vote_quote_vote_component__WEBPACK_IMPORTED_MODULE_4__["QuoteVoteComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".bq[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap; \n    margin-top: 1em;\n    justify-content: space-around;\n    padding-top: 4.7em;\n\n}\n\n.blockquote-custom[_ngcontent-%COMP%] {\n    position: relative;\n    font-size: 1.1rem;\n    background-color: #fedd89;\n    width: 325px;\n}\n\n.blockquote-custom-icon[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    background-color: #dd8ea4;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: -25px;\n    left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUvcXVvdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFHQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3F1b3RlL3F1b3RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwOyBcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgcGFkZGluZy10b3A6IDQuN2VtO1xuXG59XG5cbi5ibG9ja3F1b3RlLWN1c3RvbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWRkODk7XG4gICAgd2lkdGg6IDMyNXB4O1xufVxuXG5cbi5ibG9ja3F1b3RlLWN1c3RvbS1pY29uIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkOGVhNDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0yNXB4O1xuICAgIGxlZnQ6IDUwcHg7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quote',
                templateUrl: './quote.component.html',
                styleUrls: ['./quote.component.css']
            }]
    }], function () { return []; }, { myData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/moringa-access/moringa-school-projects/Quotes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map