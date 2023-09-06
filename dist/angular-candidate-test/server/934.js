"use strict";
exports.id = 934;
exports.ids = [934];
exports.modules = {

/***/ 9934:
/*!*****************************************************!*\
  !*** ./src/app/routes/product/product.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductComponent: () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9936);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 1081);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/product.service */ 8702);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 8804);
var _class;







function ProductComponent_tr_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td")(11, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductComponent_tr_119_Template_div_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const product_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.goProductDetails(product_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r1.disseminated);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r1.distribution);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 4, product_r1.redistributedDate, "MM/dd/yyyy"));
  }
}
const _c0 = function (a0) {
  return {
    "active": a0
  };
};
class ProductComponent {
  constructor(titleService, productService, router) {
    this.titleService = titleService;
    this.productService = productService;
    this.router = router;
    // Angular Signals
    this.products = this.productService.products;
    // local state
    this.isActive = false;
    this.sortDirection = 'asc';
  }
  ngOnInit() {
    this.titleService.setTitle('Product');
  }
  toggleActive() {
    this.isActive = !this.isActive;
  }
  toggleSort() {
    if (this.sortDirection === 'asc') {
      this.sortDirection = 'desc';
    } else {
      this.sortDirection = 'asc';
    }
    this.sortId();
  }
  sortId(key) {
    const products = this.productService.products();
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      return products.sort((a, b) => {
        if (this.sortDirection === 'asc') {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
    });
  }
  goProductDetails(id) {
    this.productService.getProductDetails$(id).subscribe(data => {
      this.router.navigate(['/details', id]);
    });
  }
}
_class = ProductComponent;
_class.ɵfac = function ProductComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-product"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 120,
  vars: 4,
  consts: [[1, "wrapper", 3, "ngClass"], [1, "overlay-nav"], [1, "container"], [1, "menu"], ["width", "16", "height", "15", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z", "fill", "#69707D", "fill-rule", "evenodd"], [1, "logo-ctn"], [1, "nav-links"], ["type", "image/svg+xml", "src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtrustConstantResourceUrl"]`assets/NASA_logo.svg`, 2, "height", "75px", "margin-left", "100px"], ["routerLink", "/dashboard", 1, "nav-link"], ["routerLink", "/logs", 1, "nav-link"], ["routerLink", "/reports", 1, "nav-link"], ["routerLink", "/about", 1, "nav-link"], ["routerLink", "/contact", 1, "nav-link"], [1, "cart-ctn"], [1, "user-pf-ctn"], ["src", "https://media.licdn.com/dms/image/C5603AQE9VvwQ6aJSWQ/profile-displayphoto-shrink_400_400/0/1650261432885?e=1699488000&v=beta&t=Fdf76qPTZMOJAazj83gYf1RnNUO3au1IMA-tbQqPZJc", "alt", "Cinque Terre", 1, "rounded-circle"], [1, "main_body"], [1, "sidebar_menu"], [1, "inner__sidebar_menu"], ["href", "#", 1, "active"], [1, "icon"], [1, "fas", "fa-border-all"], [1, "list"], ["href", "#"], [1, "fas", "fa-chart-pie"], [1, "fas", "fa-address-book"], [1, "fas", "fa-address-card"], [1, "fab", "fa-blogger"], [1, "fas", "fa-map-marked-alt"], [1, "hamburger", 3, "click"], [1, "inner_hamburger"], [1, "arrow"], [1, "fas", "fa-long-arrow-alt-left"], [1, "fas", "fa-long-arrow-alt-right"], [1, "row", "item_wrap"], [1, "col-lg-6", "col-md-6", "col-sm-12"], [1, "item"], [1, "flex-wrapper"], [1, "single-chart"], ["viewBox", "0 0 36 36", 1, "circular-chart", "orange"], ["d", "M18 2.0845\n\t\t\t\t\t\t\t\t\ta 15.9155 15.9155 0 0 1 0 31.831\n\t\t\t\t\t\t\t\t\ta 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle-bg"], ["stroke-dasharray", "30, 100", "d", "M18 2.0845\n\t\t\t\t\t\t\t\t\ta 15.9155 15.9155 0 0 1 0 31.831\n\t\t\t\t\t\t\t\t\ta 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle"], ["x", "18", "y", "20.35", 1, "percentage"], ["viewBox", "0 0 36 36", 1, "circular-chart", "green"], ["stroke-dasharray", "60, 100", "d", "M18 2.0845\n\t\t\t\t\t\t\t\t\ta 15.9155 15.9155 0 0 1 0 31.831\n\t\t\t\t\t\t\t\t\ta 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle"], ["viewBox", "0 0 36 36", 1, "circular-chart", "blue"], ["stroke-dasharray", "90, 100", "d", "M18 2.0845\n\t\t\t\t\t\t\t\t\ta 15.9155 15.9155 0 0 1 0 31.831\n\t\t\t\t\t\t\t\t\ta 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle"], ["src", "assets/STRIVES.png", "alt", "Strives", 2, "width", "55%", "height", "55%", "object-fit", "contain"], [1, "col"], [1, "card", "shadow"], [1, "card-header", "border-0"], [1, "table-responsive"], [1, "table", "align-items-center", "table-flush"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [2, "text-decoration", "underline", "cursor", "pointer", "color", "blue", 3, "click"]],
  template: function ProductComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav")(3, "div", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "svg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 7)(9, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "embed", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Logs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Reports");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17)(30, "div", 18)(31, "div", 19)(32, "ul")(33, "li")(34, "a", 20)(35, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li")(40, "a", 24)(41, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Charts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li")(46, "a", 24)(47, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li")(52, "a", 24)(53, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li")(58, "a", 24)(59, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Blogs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "li")(64, "a", 24)(65, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Maps");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductComponent_Template_div_click_69_listener() {
        return ctx.toggleActive();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 31)(71, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "i", 33)(73, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 2)(75, "div", 35)(76, "div", 36)(77, "div", 37)(78, "div", 38)(79, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "svg", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "path", 41)(82, "path", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "text", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "30%");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "svg", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "path", 41)(88, "path", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "text", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "60%");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "svg", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "path", 41)(94, "path", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "text", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "90%");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 36)(98, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "img", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 2)(101, "div", 49)(102, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 52)(105, "table", 53)(106, "thead", 54)(107, "tr")(108, "th", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Id");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "th", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Disseminated");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "th", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Distribution");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "th", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Redistributed Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "th", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "View Logs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](119, ProductComponent_tr_119_Template, 13, 7, "tr", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx.isActive));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](119);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: [".wrapper[_ngcontent-%COMP%]   .top_navbar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 65px;\n  display: flex;\n  position: fixed;\n  top: 0;\n}\n\n.wrapper[_ngcontent-%COMP%]   .top_navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .top_navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-family: \"Montserrat Subrayada\", sans-serif;\n  font-size: 20px;\n  color: #fff;\n  padding: 20px 0;\n}\n\n.wrapper[_ngcontent-%COMP%]   .top_navbar[_ngcontent-%COMP%]   .top_menu[_ngcontent-%COMP%] {\n  width: calc(100% - 250px);\n  height: 100%;\n  background: #fff;\n  padding: 0 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.wrapper[_ngcontent-%COMP%]   .top_navbar[_ngcontent-%COMP%]   .top_menu[_ngcontent-%COMP%]   .home_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  background: #3421C0;\n  color: #fff;\n  padding: 8px 15px;\n  border-radius: 3px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .top_navbar[_ngcontent-%COMP%]   .top_menu[_ngcontent-%COMP%]   .home_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .wrapper[_ngcontent-%COMP%]   .top_navbar[_ngcontent-%COMP%]   .right_info[_ngcontent-%COMP%]   .icon_wrap[_ngcontent-%COMP%]:hover {\n  background: #5343c7;\n}\n\n.wrapper[_ngcontent-%COMP%]   .top_navbar[_ngcontent-%COMP%]   .right_info[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.wrapper[_ngcontent-%COMP%]   .top_navbar[_ngcontent-%COMP%]   .right_info[_ngcontent-%COMP%]   .icon_wrap[_ngcontent-%COMP%] {\n  padding: 8px 15px;\n  border-radius: 3px;\n  background: #3421C0;\n  color: #fff;\n  margin: 0 5px;\n  cursor: pointer;\n}\n\n.main_body[_ngcontent-%COMP%]   .sidebar_menu[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #3421C0;\n  width: 200px;\n  height: 100%;\n  transition: all 0.3s linear;\n}\n\n.main_body[_ngcontent-%COMP%]   .sidebar_menu[_ngcontent-%COMP%]   .inner__sidebar_menu[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 60px;\n}\n\n.main_body[_ngcontent-%COMP%]   .sidebar_menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #7467d3;\n  font-size: 18px;\n  padding: 20px 35px;\n  display: block;\n  white-space: nowrap;\n}\n\n.main_body[_ngcontent-%COMP%]   .sidebar_menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.main_body[_ngcontent-%COMP%]   .sidebar_menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.main_body[_ngcontent-%COMP%]   .sidebar_menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #5343c7;\n  color: #fff;\n}\n\n.main_body[_ngcontent-%COMP%]   .sidebar_menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #22119d;\n  color: #fff;\n}\n\n.main_body[_ngcontent-%COMP%]   .sidebar_menu[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: -25px;\n  width: 50px;\n  height: 50px;\n  background: #e8edf5;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.main_body[_ngcontent-%COMP%]   .sidebar_menu[_ngcontent-%COMP%]   .inner_hamburger[_ngcontent-%COMP%], .main_body[_ngcontent-%COMP%]   .sidebar_menu[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.main_body[_ngcontent-%COMP%]   .sidebar_menu[_ngcontent-%COMP%]   .inner_hamburger[_ngcontent-%COMP%] {\n  width: 40px;\n  border-radius: 50%;\n  height: 40px;\n  background: #3421C0;\n}\n\n.main_body[_ngcontent-%COMP%]   .sidebar_menu[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n}\n\n.main_body[_ngcontent-%COMP%]   .sidebar_menu[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .fa-long-arrow-alt-right[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.main_body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: calc(100% - 250px);\n  margin-left: 250px;\n  transition: all 0.3s linear;\n}\n\n.main_body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item_wrap[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n}\n\n.main_body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item_wrap[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  padding: 25px;\n  font-size: 14px;\n  line-height: 22px;\n}\n\n.main_body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item_wrap[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n}\n\n\n\n.wrapper.active[_ngcontent-%COMP%]   .sidebar_menu[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.wrapper.active[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .fa-long-arrow-alt-right[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.wrapper.active[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .fa-long-arrow-alt-left[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.wrapper.active[_ngcontent-%COMP%]   .sidebar_menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.wrapper.active[_ngcontent-%COMP%]   .main_body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: calc(100% - 100px);\n  margin-left: 100px;\n}\n\n.nasa-logo-size[_ngcontent-%COMP%] {\n  width: 75px;\n  margin-top: 10px;\n}\n\n\n\n.nav-links[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 70%;\n  height: 100%;\n  padding: 1.75rem;\n  background: var(--White);\n  gap: 0.75rem;\n  z-index: 200;\n  flex-direction: column;\n  align-items: flex-start;\n  transform: translateX(-100%);\n  transition: all 500ms ease-in-out;\n}\n\n\n\n.show-nav[_ngcontent-%COMP%] {\n  transform: translateX(0%);\n}\n\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-bottom: 2rem;\n}\n\n\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n\n\nbody[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n\n\nul[role=list][_ngcontent-%COMP%], ol[role=list][_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n\n\nhtml[_ngcontent-%COMP%]:focus-within {\n  scroll-behavior: smooth;\n}\n\n\n\nbody[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n\n\na[_ngcontent-%COMP%]:not([class]) {\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n}\n\n\n\nimg[_ngcontent-%COMP%], picture[_ngcontent-%COMP%] {\n  max-width: 100%;\n  display: block;\n}\n\n\n\ninput[_ngcontent-%COMP%], button[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  font: inherit;\n}\n\n\n\n@media (prefers-reduced-motion: reduce) {\n  html[_ngcontent-%COMP%]:focus-within {\n    scroll-behavior: auto;\n  }\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n\n\n\n.container[_ngcontent-%COMP%] {\n  width: min(90%, 1140px);\n  margin: auto;\n  padding: 1.5rem 0.5rem;\n}\n\n.container[_ngcontent-%COMP%], .nav-links[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%], .logo-ctn[_ngcontent-%COMP%], .cart-ctn[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.75rem;\n  align-items: center;\n}\n\n\n\n.show-overlay[_ngcontent-%COMP%] {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  transition: all 500ms;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n\n\n.nav-links[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 70%;\n  height: 100%;\n  padding: 1.75rem;\n  background: var(--White);\n  gap: 0.75rem;\n  z-index: 200;\n  flex-direction: column;\n  align-items: flex-start;\n  transform: translateX(-100%);\n  transition: all 500ms ease-in-out;\n}\n\n\n\n.show-nav[_ngcontent-%COMP%] {\n  transform: translateX(0%);\n}\n\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-bottom: 2rem;\n}\n\n\n\n.nav-link[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.2rem;\n  position: relative;\n}\n\n.nav-link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 100%;\n  height: 5px;\n  position: absolute;\n  left: 0;\n  bottom: -0.5rem;\n  background: var(--Orange);\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 300ms;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1);\n}\n\n\n\n.cart-ctn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  position: relative;\n  margin-right: 0.5rem;\n}\n\n.cart-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: var(--Very-dark-blue);\n}\n\n.cart-notify[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  font-weight: bold;\n  line-height: 1.4;\n  padding: 0rem 0.4rem;\n  color: var(--White);\n  border-radius: 50px;\n  background: var(--Orange);\n  display: none;\n}\n\n.show-cart-notification[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.cart-modal[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 230px;\n  top: 5.5rem;\n  left: 50%;\n  z-index: 10;\n  transform: translateX(50%);\n  opacity: 0;\n  position: absolute;\n  border-radius: 10px;\n  background: var(--White);\n  transition: all 500ms ease-in-out;\n  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2), -10px 10px 30px rgba(0, 0, 0, 0.2);\n}\n\n.cart-modal__title-ctn[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid var(--Grayish-blue);\n}\n\n.cart-content-ctn[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  height: 170px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.empty-cart-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.05rem;\n  color: var(--Dark-grayish-blue);\n}\n\n.cart-content-ctn[_ngcontent-%COMP%]   .pdt-info-ctn[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n\n.pdt-info-ctn[_ngcontent-%COMP%]   .pdt-preview-ctn[_ngcontent-%COMP%] {\n  width: 2.75em;\n}\n\n.pdt-preview-ctn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n.cart-modal__pdt-qnty-ctn[_ngcontent-%COMP%] {\n  color: var(--Dark-grayish-blue);\n}\n\n.cart-modal__pdt-qnty[_ngcontent-%COMP%]   span.total-price[_ngcontent-%COMP%] {\n  color: var(--Very-dark-blue);\n  font-weight: bold;\n}\n\n.cart-modal__delete-icon-ctn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  cursor: pointer;\n}\n\n.cart-modal[_ngcontent-%COMP%]   .checkout-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  padding: 0.75rem 0;\n  color: var(--White);\n  font-size: 1rem;\n  font-weight: bold;\n  border-radius: 10px;\n  cursor: pointer;\n  background: var(--Orange);\n  box-shadow: 0px 5px 20px var(--Pale-orange);\n}\n\n.checkout-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 300ms;\n}\n\n.checkout-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.6;\n}\n\n\n\n.show-card-modal[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 1;\n  transform: translateX(-50%);\n}\n\n\n\n.user-pf-ctn[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  border-radius: 50%;\n}\n\n.user-pf-ctn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border: 2px solid var(--Orange);\n}\n\n@media screen and (min-width: 800px) {\n  .container[_ngcontent-%COMP%] {\n    padding-bottom: 2rem;\n    border-bottom: 1px solid var(--Grayish-blue);\n  }\n  \n\n  .menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #nav-close-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nav-links[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    margin-left: 1.5rem;\n    color: var(--Dark-grayish-blue);\n    position: relative;\n    padding: 0;\n    z-index: 50;\n    width: auto;\n    flex-direction: row;\n    transform: translateX(0%);\n  }\n  .nav-link[_ngcontent-%COMP%] {\n    font-weight: 300;\n    font-size: 1rem;\n    transition: color 300ms;\n  }\n  .nav-link[_ngcontent-%COMP%]:hover {\n    color: var(--Very-dark-blue);\n  }\n  .nav-link[_ngcontent-%COMP%]::after {\n    bottom: calc(-7px - 2.5rem);\n  }\n  .cart-ctn[_ngcontent-%COMP%] {\n    margin-right: 1.5rem;\n  }\n  .cart-modal[_ngcontent-%COMP%] {\n    left: 75%;\n    transform: translateX(50%);\n  }\n  .show-card-modal[_ngcontent-%COMP%] {\n    transform: translateX(-50%);\n  }\n  .user-pf-ctn[_ngcontent-%COMP%] {\n    width: 3rem;\n  }\n}\n.flex-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n}\n\n.single-chart[_ngcontent-%COMP%] {\n  width: 33%;\n  justify-content: space-around;\n}\n\n.circular-chart[_ngcontent-%COMP%] {\n  display: block;\n  margin: 10px auto;\n  max-width: 80%;\n  max-height: 250px;\n}\n\n.circle-bg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #eee;\n  stroke-width: 3.8;\n}\n\n.circle[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 2.8;\n  stroke-linecap: round;\n  animation: _ngcontent-%COMP%_progress 1s ease-out forwards;\n}\n\n@keyframes _ngcontent-%COMP%_progress {\n  0% {\n    stroke-dasharray: 0 100;\n  }\n}\n.circular-chart.orange[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  stroke: #ff9f00;\n}\n\n.circular-chart.green[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  stroke: #4CC790;\n}\n\n.circular-chart.blue[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  stroke: #3c9ee5;\n}\n\n.percentage[_ngcontent-%COMP%] {\n  fill: #666;\n  font-family: sans-serif;\n  font-size: 0.5em;\n  text-anchor: middle;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcm91dGVzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0FBQ0Q7O0FBRUE7RUFDQyxZQUFBO0VBQ0EsWUFBQTtBQUNEOztBQUVBO0VBQ0MsY0FBQTtFQUNHLGtCQUFBO0VBQ0EsK0NBQUE7RUFDRCxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDSDs7QUFFQTtFQUNDLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0csZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDQyxjQUFBO0VBQ0csbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBOztFQUVJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDQyxhQUFBO0FBQ0Q7O0FBRUE7RUFDQyxpQkFBQTtFQUNHLGtCQUFBO0VBQ0gsbUJBQUE7RUFDRyxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNDLGVBQUE7RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUNIOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSxpQkFBQTtBQUNEOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxr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RSxlQUFBO0FBM0NKOztBQThDRTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUEzQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciAudG9wX25hdmJhcntcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogNjVweDtcblx0ZGlzcGxheTogZmxleDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDA7XG59XG5cbi53cmFwcGVyIC50b3BfbmF2YmFyIC5sb2dve1xuXHR3aWR0aDogMjUwcHg7XG5cdGhlaWdodDogMTAwJTtcbn1cblxuLndyYXBwZXIgLnRvcF9uYXZiYXIgLmxvZ28gYSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQgU3VicmF5YWRhJywgc2Fucy1zZXJpZjtcbiAgXHRmb250LXNpemU6IDIwcHg7XG4gIFx0Y29sb3I6ICNmZmY7XG4gIFx0cGFkZGluZzogMjBweCAwO1xufVxuXG4ud3JhcHBlciAudG9wX25hdmJhciAudG9wX21lbnV7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7XG5cdGhlaWdodDogMTAwJTtcblx0YmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLndyYXBwZXIgLnRvcF9uYXZiYXIgLnRvcF9tZW51IC5ob21lX2xpbmsgYXtcblx0ZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogIzM0MjFDMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi53cmFwcGVyIC50b3BfbmF2YmFyIC50b3BfbWVudSAuaG9tZV9saW5rIGE6aG92ZXIsXG4ud3JhcHBlciAudG9wX25hdmJhciAucmlnaHRfaW5mbyAuaWNvbl93cmFwOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTM0M2M3O1xufVxuXG4ud3JhcHBlciAudG9wX25hdmJhciAucmlnaHRfaW5mb3tcblx0ZGlzcGxheTogZmxleDtcbn1cblxuLndyYXBwZXIgLnRvcF9uYXZiYXIgLnJpZ2h0X2luZm8gLmljb25fd3JhcHtcblx0cGFkZGluZzogOHB4IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXHRiYWNrZ3JvdW5kOiAjMzQyMUMwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFpbl9ib2R5IC5zaWRlYmFyX21lbnV7XG5cdHBvc2l0aW9uOiBmaXhlZDtcbiAgXHR0b3A6IDA7XG4gIFx0bGVmdDogMDtcbiAgXHRiYWNrZ3JvdW5kOiAjMzQyMUMwO1xuICBcdHdpZHRoOiAyMDBweDtcbiAgXHRoZWlnaHQ6IDEwMCU7XG4gIFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xufVxuXG4ubWFpbl9ib2R5IC5zaWRlYmFyX21lbnUgLmlubmVyX19zaWRlYmFyX21lbnV7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZy10b3A6IDYwcHg7XG59XG5cbi5tYWluX2JvZHkgLnNpZGViYXJfbWVudSB1bCBsaSBhe1xuICBjb2xvcjogIzc0NjdkMztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAyMHB4IDM1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubWFpbl9ib2R5IC5zaWRlYmFyX21lbnUgdWwgbGkgYSAuaWNvbntcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5tYWluX2JvZHkgLnNpZGViYXJfbWVudSB1bCBsaSBhIHNwYW57XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm1haW5fYm9keSAuc2lkZWJhcl9tZW51IHVsIGxpIGE6aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICM1MzQzYzc7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWFpbl9ib2R5IC5zaWRlYmFyX21lbnUgdWwgbGkgYS5hY3RpdmV7XG4gIGJhY2tncm91bmQ6ICMyMjExOWQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWFpbl9ib2R5IC5zaWRlYmFyX21lbnUgLmhhbWJ1cmdlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IC0yNXB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZThlZGY1O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1haW5fYm9keSAuc2lkZWJhcl9tZW51IC5pbm5lcl9oYW1idXJnZXIsXG4ubWFpbl9ib2R5IC5zaWRlYmFyX21lbnUgLmhhbWJ1cmdlciAuYXJyb3d7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbn1cblxuLm1haW5fYm9keSAuc2lkZWJhcl9tZW51IC5pbm5lcl9oYW1idXJnZXJ7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogIzM0MjFDMDtcbn1cblxuLm1haW5fYm9keSAuc2lkZWJhcl9tZW51IC5oYW1idXJnZXIgLmFycm93e1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWFpbl9ib2R5IC5zaWRlYmFyX21lbnUgLmhhbWJ1cmdlciAgLmZhLWxvbmctYXJyb3ctYWx0LXJpZ2h0e1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWFpbl9ib2R5IC5jb250YWluZXJ7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7XG5cdG1hcmdpbi1sZWZ0OiAyNTBweDtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xufVxuXG4ubWFpbl9ib2R5IC5jb250YWluZXIgLml0ZW1fd3JhcHtcblx0ZGlzcGxheTogZmxleDtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1haW5fYm9keSAuY29udGFpbmVyIC5pdGVtX3dyYXAgLml0ZW17XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG5cdHBhZGRpbmc6IDI1cHg7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5tYWluX2JvZHkgLmNvbnRhaW5lciAuaXRlbV93cmFwIC5pdGVtOmZpcnN0LWNoaWxke1xuXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi8qIGFmdGVyIGFkZGluZyBhY3RpdmUgY2xhc3MgKi9cbi53cmFwcGVyLmFjdGl2ZSAuc2lkZWJhcl9tZW51e1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi53cmFwcGVyLmFjdGl2ZSAuaGFtYnVyZ2VyIC5mYS1sb25nLWFycm93LWFsdC1yaWdodHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi53cmFwcGVyLmFjdGl2ZSAuaGFtYnVyZ2VyIC5mYS1sb25nLWFycm93LWFsdC1sZWZ0e1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ud3JhcHBlci5hY3RpdmUgLnNpZGViYXJfbWVudSB1bCBsaSBhIC5saXN0e1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ud3JhcHBlci5hY3RpdmUgLm1haW5fYm9keSAuY29udGFpbmVye1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG5cbi5uYXNhLWxvZ28tc2l6ZSB7XG5cdHdpZHRoOiA3NXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cblxuLyogTmF2aWdhdGlvbiBCb3ggc3R5bGluZyBmb3IgdGhlIG1vYmlsZSBzaXplLiAqL1xuXG4ubmF2LWxpbmtzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMS43NXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1XaGl0ZSk7XG4gICAgZ2FwOiAwLjc1cmVtO1xuICAgIHotaW5kZXg6IDIwMDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG5cbi8qIEFkZGluZyB0aGlzIGNsYXNzIHRvIG5hdmlnYXRpb24gYm94LCB0byBjb21lIGluIHRoZSBzY3JlZW4gd2hlbiBuYXZpZ2F0aW9uIG1lbnUgaXMgY2xpY2tlZC4gKi9cblxuLnNob3ctbmF2IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xufVxuXG4ubmF2LWxpbmtzIGxpOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5cbi8qIEJveCBzaXppbmcgcnVsZXMgKi9cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5cbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xuXG5ib2R5LFxuaDEsXG5oMixcbmgzLFxuaDQsXG5wLFxuZmlndXJlLFxuYmxvY2txdW90ZSxcbmRsLFxuZGQge1xuICAgIG1hcmdpbjogMDtcbn1cblxuXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cblxudWxbcm9sZT0nbGlzdCddLFxub2xbcm9sZT0nbGlzdCddIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5cbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cblxuaHRtbDpmb2N1cy13aXRoaW4ge1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5cbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cblxuYm9keSB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xuXG5hOm5vdChbY2xhc3NdKSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xufVxuXG5cbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cblxuaW1nLFxucGljdHVyZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xuXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgICBmb250OiBpbmhlcml0O1xufVxuXG5cbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgICBodG1sOmZvY3VzLXdpdGhpbiB7XG4gICAgICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcbiAgICB9XG4gICAgKixcbiAgICAqOjpiZWZvcmUsXG4gICAgKjo6YWZ0ZXIge1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi8qICoqKioqKioqKioqKioqKiogTmF2QmFyICoqKioqKioqKioqKioqKiAqL1xuXG5cbi8qIENvbnRhaW5lciB0aGF0IGNvbnRhaW4gdGhlIG90aGVycyBzbyB0aGF0IHRoZXkgaGF2ZSBzb21lIHNwYWNlIG9uIHRoZSBsZWZ0IGFuZCByaWdodCBzaWRlIG9mIHRoZW0gKi9cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IG1pbig5MCUsIDExNDBweCk7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAwLjVyZW07XG59XG5cbi5jb250YWluZXIsXG4ubmF2LWxpbmtzLFxuLm1lbnUsXG4ubG9nby1jdG4sXG4uY2FydC1jdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxLjc1cmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLyogR3JheSBvdmVybGF5IHRvIGJvZHkgd2hlbiBzaWRlIG5hdmJhciBwb3BzLXVwIG9uIHRoZSBtb2JpbGUgc2l6ZSAqL1xuXG4uc2hvdy1vdmVybGF5IHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcztcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cblxuLyogTmF2aWdhdGlvbiBCb3ggc3R5bGluZyBmb3IgdGhlIG1vYmlsZSBzaXplLiAqL1xuXG4ubmF2LWxpbmtzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMS43NXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1XaGl0ZSk7XG4gICAgZ2FwOiAwLjc1cmVtO1xuICAgIHotaW5kZXg6IDIwMDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG5cbi8qIEFkZGluZyB0aGlzIGNsYXNzIHRvIG5hdmlnYXRpb24gYm94LCB0byBjb21lIGluIHRoZSBzY3JlZW4gd2hlbiBuYXZpZ2F0aW9uIG1lbnUgaXMgY2xpY2tlZC4gKi9cblxuLnNob3ctbmF2IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xufVxuXG4ubmF2LWxpbmtzIGxpOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5cbi8qIE5hdmlnYXRpb24gbGlua3MgKi9cblxuLm5hdi1saW5rIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5hdi1saW5rOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IC0wLjVyZW07XG4gICAgYmFja2dyb3VuZDogdmFyKC0tT3JhbmdlKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcbn1cblxuLm5hdi1saW5rOmhvdmVyOjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG59XG5cblxuLyogU2hvcHBpbmcgQ2FydCBpY29uICovXG5cbi5jYXJ0LWN0biB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4uY2FydC1pY29uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLVZlcnktZGFyay1ibHVlKTtcbn1cblxuLmNhcnQtbm90aWZ5IHtcbiAgICBmb250LXNpemU6IDAuNTVyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTVweDtcbiAgICByaWdodDogLTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIHBhZGRpbmc6IDByZW0gMC40cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1PcmFuZ2UpO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93LWNhcnQtbm90aWZpY2F0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4vKiBDYXJ0IG1vZGFsICovXG5cbi5jYXJ0LW1vZGFsIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAyMzBweDtcbiAgICB0b3A6IDUuNXJlbTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgei1pbmRleDogMTA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1XaGl0ZSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgLTEwcHggMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmNhcnQtbW9kYWxfX3RpdGxlLWN0biB7XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLUdyYXlpc2gtYmx1ZSk7XG59XG5cbi5jYXJ0LWNvbnRlbnQtY3RuIHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmVtcHR5LWNhcnQtdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1EYXJrLWdyYXlpc2gtYmx1ZSk7XG59XG5cbi5jYXJ0LWNvbnRlbnQtY3RuIC5wZHQtaW5mby1jdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4ucGR0LWluZm8tY3RuIC5wZHQtcHJldmlldy1jdG4ge1xuICAgIHdpZHRoOiAyLjc1ZW07XG59XG5cbi5wZHQtcHJldmlldy1jdG4gaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jYXJ0LW1vZGFsX19wZHQtcW50eS1jdG4ge1xuICAgIGNvbG9yOiB2YXIoLS1EYXJrLWdyYXlpc2gtYmx1ZSk7XG59XG5cbi5jYXJ0LW1vZGFsX19wZHQtcW50eSBzcGFuLnRvdGFsLXByaWNlIHtcbiAgICBjb2xvcjogdmFyKC0tVmVyeS1kYXJrLWJsdWUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FydC1tb2RhbF9fZGVsZXRlLWljb24tY3RuIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJ0LW1vZGFsIC5jaGVja291dC1idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDA7XG4gICAgY29sb3I6IHZhcigtLVdoaXRlKTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tT3JhbmdlKTtcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDIwcHggdmFyKC0tUGFsZS1vcmFuZ2UpO1xufVxuXG4uY2hlY2tvdXQtYnRuIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG59XG5cbi5jaGVja291dC1idG46aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNjtcbn1cblxuXG4vKiBDYXJ0IG1vZGFsIHNob3VsZCBvbmx5IGJlIHZpc2libGUgd2hlbiBjYXJ0IGljb24gaXMgY2xpY2tlZCAqL1xuXG4uc2hvdy1jYXJkLW1vZGFsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuXG4vKiBVc2VyIHByb2ZpbGUgY2lyY2xlICAqL1xuXG4udXNlci1wZi1jdG4ge1xuICAgIHdpZHRoOiAxLjc1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnVzZXItcGYtY3RuOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tT3JhbmdlKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1HcmF5aXNoLWJsdWUpO1xuICAgIH1cbiAgICAvKiBSZW1vdmluZyB0aGUgbWVudSBmdW5jdGlvbmFsaXR5IGZvciB0aGUgZGVza3RvcCBzaXplICovXG4gICAgLm1lbnUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAjbmF2LWNsb3NlLWJ0biB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5uYXYtbGlua3Mge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1EYXJrLWdyYXlpc2gtYmx1ZSk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgei1pbmRleDogNTA7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbiAgICAubmF2LWxpbmsge1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zO1xuICAgIH1cbiAgICAubmF2LWxpbms6aG92ZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tVmVyeS1kYXJrLWJsdWUpO1xuICAgIH1cbiAgICAubmF2LWxpbms6OmFmdGVyIHtcbiAgICAgICAgYm90dG9tOiBjYWxjKCgtN3B4IC0gMi41cmVtKSk7XG4gICAgfVxuICAgIC5jYXJ0LWN0biB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICAgIH1cbiAgICAuY2FydC1tb2RhbCB7XG4gICAgICAgIGxlZnQ6IDc1JTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gICAgfVxuICAgIC5zaG93LWNhcmQtbW9kYWwge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgfVxuICAgIC51c2VyLXBmLWN0biB7XG4gICAgICAgIHdpZHRoOiAzcmVtO1xuICAgIH1cbn1cblxuLmZsZXgtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIH1cbiAgXG4gIC5zaW5nbGUtY2hhcnQge1xuICAgIHdpZHRoOiAzMyU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgO1xuICB9XG4gIFxuICAuY2lyY3VsYXItY2hhcnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICB9XG4gIFxuICAuY2lyY2xlLWJnIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZTogI2VlZTtcbiAgICBzdHJva2Utd2lkdGg6IDMuODtcbiAgfVxuICBcbiAgLmNpcmNsZSB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2Utd2lkdGg6IDIuODtcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgYW5pbWF0aW9uOiBwcm9ncmVzcyAxcyBlYXNlLW91dCBmb3J3YXJkcztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwcm9ncmVzcyB7XG4gICAgMCUge1xuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMCAxMDA7XG4gICAgfVxuICB9XG4gIFxuICAuY2lyY3VsYXItY2hhcnQub3JhbmdlIC5jaXJjbGUge1xuICAgIHN0cm9rZTogI2ZmOWYwMDtcbiAgfVxuICBcbiAgLmNpcmN1bGFyLWNoYXJ0LmdyZWVuIC5jaXJjbGUge1xuICAgIHN0cm9rZTogIzRDQzc5MDtcbiAgfVxuICBcbiAgLmNpcmN1bGFyLWNoYXJ0LmJsdWUgLmNpcmNsZSB7XG4gICAgc3Ryb2tlOiAjM2M5ZWU1O1xuICB9XG4gIFxuICAucGVyY2VudGFnZSB7XG4gICAgZmlsbDogIzY2NjtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDAuNWVtO1xuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gIH1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6536:
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpService: () => (/* binding */ HttpService),
/* harmony export */   httpActions: () => (/* binding */ httpActions)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5028);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 3410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9936);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6448);
var _class;




var httpActions;
(function (httpActions) {
  httpActions["GET"] = "GET";
  httpActions["POST"] = "POST";
  httpActions["UPDATE"] = "UPDATE";
  httpActions["DELETE"] = "DELETE";
})(httpActions || (httpActions = {}));
class HttpService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.apiServer = "";
  }
  get(url) {
    return this.httpClient.get(this.apiServer + url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.errorHandler));
  }
  getById(url, id) {
    return this.httpClient.get(this.apiServer + url + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.errorHandler));
  }
  post(url, obj) {
    return this.httpClient.post(this.apiServer + url, obj).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.errorHandler));
  }
  update(id, obj, url) {
    return this.httpClient.put(this.apiServer + url + id, obj).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.errorHandler));
  }
  delete(id, url) {
    return this.httpClient.delete(this.apiServer + url + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.errorHandler));
  }
  errorHandler(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error;
    } else {
      errorMessage = error.error.msg;
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(errorMessage);
  }
}
_class = HttpService;
_class.ɵfac = function HttpService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8702:
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9936);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3410);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 6316);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 8817);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ 6536);
var _class;






class ProductService {
  constructor(http) {
    this.http = http;
    this.productUrl = `https://${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.productBaseUrl}/api/citations/redistributions`;
    this.productDetailsUrl = `https://${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.productBaseUrl}/api/citations/`;
    // Signal stream of products
    this.products = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.toSignal)(this.getProducts$());
    this.productDetails = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)(undefined);
  }
  //observable stream of products
  getProducts$() {
    return this.http.get(this.productUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => data.results.filter(item => item.distribution === 'PUBLIC')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => data.sort((a, b) => new Date(b.redistributedDate).getTime() - new Date(a.redistributedDate).getTime())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(data => this.logger(data)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
  }
  getProductDetails$(id) {
    return this.http.getById(this.productDetailsUrl, id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(data => {
      this.productDetails.set(data);
      this.logger(data);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
  }
  logger(data) {
    // To Do: replace with a logger service
    console.info(JSON.stringify(data));
  }
}
_class = ProductService;
_class.ɵfac = function ProductService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6316:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  productBaseUrl: 'ntrs.nasa.gov'
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

/***/ 8817:
/*!**************************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/rxjs-interop.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   takeUntilDestroyed: () => (/* binding */ takeUntilDestroyed),
/* harmony export */   toObservable: () => (/* binding */ toObservable),
/* harmony export */   toSignal: () => (/* binding */ toSignal)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5028);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3410);
/**
 * @license Angular v16.2.3
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */





/**
 * Operator which completes the Observable when the calling context (component, directive, service,
 * etc) is destroyed.
 *
 * @param destroyRef optionally, the `DestroyRef` representing the current context. This can be
 *     passed explicitly to use `takeUntilDestroyed` outside of an [injection
 * context](guide/dependency-injection-context). Otherwise, the current `DestroyRef` is injected.
 *
 * @developerPreview
 */
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.assertInInjectionContext)(takeUntilDestroyed);
    destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef);
  }
  const destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return source => {
    return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(destroyed$));
  };
}

/**
 * Exposes the value of an Angular `Signal` as an RxJS `Observable`.
 *
 * The signal's value will be propagated into the `Observable`'s subscribers using an `effect`.
 *
 * `toObservable` must be called in an injection context unless an injector is provided via options.
 *
 * @developerPreview
 */
function toObservable(source, options) {
  !options?.injector && (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.assertInInjectionContext)(toObservable);
  const injector = options?.injector ?? (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
  const subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
  const watcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => subject.error(err));
      return;
    }
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}

/**
 * Base URL for the error details page.
 *
 * Keep this constant in sync across:
 *  - packages/compiler-cli/src/ngtsc/diagnostics/src/error_details_base_url.ts
 *  - packages/core/src/error_details_base_url.ts
 */
const ERROR_DETAILS_PAGE_BASE_URL = 'https://angular.io/errors';
/**
 * URL for the XSS security documentation.
 */
const XSS_SECURITY_URL = 'https://g.co/ng/security#xss';

/**
 * Class that represents a runtime error.
 * Formats and outputs the error message in a consistent way.
 *
 * Example:
 * ```
 *  throw new RuntimeError(
 *    RuntimeErrorCode.INJECTOR_ALREADY_DESTROYED,
 *    ngDevMode && 'Injector has already been destroyed.');
 * ```
 *
 * Note: the `message` argument contains a descriptive error message as a string in development
 * mode (when the `ngDevMode` is defined). In production mode (after tree-shaking pass), the
 * `message` argument becomes `false`, thus we account for it in the typings and the runtime
 * logic.
 */
class RuntimeError extends Error {
  constructor(code, message) {
    super(formatRuntimeError(code, message));
    this.code = code;
  }
}
/**
 * Called to format a runtime error.
 * See additional info on the `message` argument type in the `RuntimeError` class description.
 */
function formatRuntimeError(code, message) {
  // Error code might be a negative number, which is a special marker that instructs the logic to
  // generate a link to the error details page on angular.io.
  // We also prepend `0` to non-compile-time errors.
  const fullCode = `NG0${Math.abs(code)}`;
  let errorMessage = `${fullCode}${message ? ': ' + message : ''}`;
  if (ngDevMode && code < 0) {
    const addPeriodSeparator = !errorMessage.match(/[.,;!?\n]$/);
    const separator = addPeriodSeparator ? '.' : '';
    errorMessage = `${errorMessage}${separator} Find more at ${ERROR_DETAILS_PAGE_BASE_URL}/${fullCode}`;
  }
  return errorMessage;
}

/**
 * Symbol used to tell `Signal`s apart from other functions.
 *
 * This can be used to auto-unwrap signals in various cases, or to auto-wrap non-signal values.
 */
const SIGNAL = Symbol('SIGNAL');
/**
 * Checks if the given `value` is a reactive `Signal`.
 *
 * @developerPreview
 */
function isSignal(value) {
  return typeof value === 'function' && value[SIGNAL] !== undefined;
}
/**
 * Converts `fn` into a marked signal function (where `isSignal(fn)` will be `true`), and
 * potentially add some set of extra properties (passed as an object record `extraApi`).
 */
function createSignalFromFunction(node, fn, extraApi = {}) {
  fn[SIGNAL] = node;
  // Copy properties from `extraApi` to `fn` to complete the desired API of the `Signal`.
  return Object.assign(fn, extraApi);
}
/**
 * The default equality function used for `signal` and `computed`, which treats objects and arrays
 * as never equal, and all other primitive values using identity semantics.
 *
 * This allows signals to hold non-primitive values (arrays, objects, other collections) and still
 * propagate change notification upon explicit mutation without identity change.
 *
 * @developerPreview
 */
function defaultEquals(a, b) {
  // `Object.is` compares two values using identity semantics which is desired behavior for
  // primitive values. If `Object.is` determines two values to be equal we need to make sure that
  // those don't represent objects (we want to make sure that 2 objects are always considered
  // "unequal"). The null check is needed for the special case of JavaScript reporting null values
  // as objects (`typeof null === 'object'`).
  return (a === null || typeof a !== 'object') && Object.is(a, b);
}
const _global = globalThis;
function ngDevModeResetPerfCounters() {
  const locationString = typeof location !== 'undefined' ? location.toString() : '';
  const newCounters = {
    namedConstructors: locationString.indexOf('ngDevMode=namedConstructors') != -1,
    firstCreatePass: 0,
    tNode: 0,
    tView: 0,
    rendererCreateTextNode: 0,
    rendererSetText: 0,
    rendererCreateElement: 0,
    rendererAddEventListener: 0,
    rendererSetAttribute: 0,
    rendererRemoveAttribute: 0,
    rendererSetProperty: 0,
    rendererSetClassName: 0,
    rendererAddClass: 0,
    rendererRemoveClass: 0,
    rendererSetStyle: 0,
    rendererRemoveStyle: 0,
    rendererDestroy: 0,
    rendererDestroyNode: 0,
    rendererMoveNode: 0,
    rendererRemoveNode: 0,
    rendererAppendChild: 0,
    rendererInsertBefore: 0,
    rendererCreateComment: 0,
    hydratedNodes: 0,
    hydratedComponents: 0,
    dehydratedViewsRemoved: 0,
    dehydratedViewsCleanupRuns: 0,
    componentsSkippedHydration: 0
  };
  // Make sure to refer to ngDevMode as ['ngDevMode'] for closure.
  const allowNgDevModeTrue = locationString.indexOf('ngDevMode=false') === -1;
  _global['ngDevMode'] = allowNgDevModeTrue && newCounters;
  return newCounters;
}
/**
 * This function checks to see if the `ngDevMode` has been set. If yes,
 * then we honor it, otherwise we default to dev mode with additional checks.
 *
 * The idea is that unless we are doing production build where we explicitly
 * set `ngDevMode == false` we should be helping the developer by providing
 * as much early warning and errors as possible.
 *
 * `ɵɵdefineComponent` is guaranteed to have been called before any component template functions
 * (and thus Ivy instructions), so a single initialization there is sufficient to ensure ngDevMode
 * is defined for the entire instruction set.
 *
 * When checking `ngDevMode` on toplevel, always init it before referencing it
 * (e.g. `((typeof ngDevMode === 'undefined' || ngDevMode) && initNgDevMode())`), otherwise you can
 *  get a `ReferenceError` like in https://github.com/angular/angular/issues/31595.
 *
 * Details on possible values for `ngDevMode` can be found on its docstring.
 *
 * NOTE:
 * - changes to the `ngDevMode` name must be synced with `compiler-cli/src/tooling.ts`.
 */
function initNgDevMode() {
  // The below checks are to ensure that calling `initNgDevMode` multiple times does not
  // reset the counters.
  // If the `ngDevMode` is not an object, then it means we have not created the perf counters
  // yet.
  if (typeof ngDevMode === 'undefined' || ngDevMode) {
    if (typeof ngDevMode !== 'object') {
      ngDevModeResetPerfCounters();
    }
    return typeof ngDevMode !== 'undefined' && !!ngDevMode;
  }
  return false;
}

// Required as the signals library is in a separate package, so we need to explicitly ensure the
/**
 * A `WeakRef`-compatible reference that fakes the API with a strong reference
 * internally.
 */
class LeakyRef {
  constructor(ref) {
    this.ref = ref;
  }
  deref() {
    return this.ref;
  }
}
// `WeakRef` is not always defined in every TS environment where Angular is compiled. Instead,
// read it off of the global context if available.
// tslint:disable-next-line: no-toplevel-property-access
let WeakRefImpl = _global['WeakRef'] ?? LeakyRef;
function newWeakRef(value) {
  if (typeof ngDevMode !== 'undefined' && ngDevMode && WeakRefImpl === undefined) {
    throw new Error(`Angular requires a browser which supports the 'WeakRef' API`);
  }
  return new WeakRefImpl(value);
}
function setAlternateWeakRefImpl(impl) {
  // no-op since the alternate impl is included by default by the framework. Remove once internal
  // migration is complete.
}

// Required as the signals library is in a separate package, so we need to explicitly ensure the
/**
 * Counter tracking the next `ProducerId` or `ConsumerId`.
 */
let _nextReactiveId = 0;
/**
 * Tracks the currently active reactive consumer (or `null` if there is no active
 * consumer).
 */
let activeConsumer = null;
/**
 * Whether the graph is currently propagating change notifications.
 */
let inNotificationPhase = false;
function setActiveConsumer(consumer) {
  const prev = activeConsumer;
  activeConsumer = consumer;
  return prev;
}
/**
 * A node in the reactive graph.
 *
 * Nodes can be producers of reactive values, consumers of other reactive values, or both.
 *
 * Producers are nodes that produce values, and can be depended upon by consumer nodes.
 *
 * Producers expose a monotonic `valueVersion` counter, and are responsible for incrementing this
 * version when their value semantically changes. Some producers may produce their values lazily and
 * thus at times need to be polled for potential updates to their value (and by extension their
 * `valueVersion`). This is accomplished via the `onProducerUpdateValueVersion` method for
 * implemented by producers, which should perform whatever calculations are necessary to ensure
 * `valueVersion` is up to date.
 *
 * Consumers are nodes that depend on the values of producers and are notified when those values
 * might have changed.
 *
 * Consumers do not wrap the reads they consume themselves, but rather can be set as the active
 * reader via `setActiveConsumer`. Reads of producers that happen while a consumer is active will
 * result in those producers being added as dependencies of that consumer node.
 *
 * The set of dependencies of a consumer is dynamic. Implementers expose a monotonically increasing
 * `trackingVersion` counter, which increments whenever the consumer is about to re-run any reactive
 * reads it needs and establish a new set of dependencies as a result.
 *
 * Producers store the last `trackingVersion` they've seen from `Consumer`s which have read them.
 * This allows a producer to identify whether its record of the dependency is current or stale, by
 * comparing the consumer's `trackingVersion` to the version at which the dependency was
 * last observed.
 */
class ReactiveNode {
  constructor() {
    this.id = _nextReactiveId++;
    /**
     * A cached weak reference to this node, which will be used in `ReactiveEdge`s.
     */
    this.ref = newWeakRef(this);
    /**
     * Edges to producers on which this node depends (in its consumer capacity).
     */
    this.producers = new Map();
    /**
     * Edges to consumers on which this node depends (in its producer capacity).
     */
    this.consumers = new Map();
    /**
     * Monotonically increasing counter representing a version of this `Consumer`'s
     * dependencies.
     */
    this.trackingVersion = 0;
    /**
     * Monotonically increasing counter which increases when the value of this `Producer`
     * semantically changes.
     */
    this.valueVersion = 0;
  }
  /**
   * Polls dependencies of a consumer to determine if they have actually changed.
   *
   * If this returns `false`, then even though the consumer may have previously been notified of a
   * change, the values of its dependencies have not actually changed and the consumer should not
   * rerun any reactions.
   */
  consumerPollProducersForChange() {
    for (const [producerId, edge] of this.producers) {
      const producer = edge.producerNode.deref();
      // On Safari < 16.1 deref can return null, we need to check for null also.
      // See https://github.com/WebKit/WebKit/commit/44c15ba58912faab38b534fef909dd9e13e095e0
      if (producer == null || edge.atTrackingVersion !== this.trackingVersion) {
        // This dependency edge is stale, so remove it.
        this.producers.delete(producerId);
        producer?.consumers.delete(this.id);
        continue;
      }
      if (producer.producerPollStatus(edge.seenValueVersion)) {
        // One of the dependencies reports a real value change.
        return true;
      }
    }
    // No dependency reported a real value change, so the `Consumer` has also not been
    // impacted.
    return false;
  }
  /**
   * Notify all consumers of this producer that its value may have changed.
   */
  producerMayHaveChanged() {
    // Prevent signal reads when we're updating the graph
    const prev = inNotificationPhase;
    inNotificationPhase = true;
    try {
      for (const [consumerId, edge] of this.consumers) {
        const consumer = edge.consumerNode.deref();
        // On Safari < 16.1 deref can return null, we need to check for null also.
        // See https://github.com/WebKit/WebKit/commit/44c15ba58912faab38b534fef909dd9e13e095e0
        if (consumer == null || consumer.trackingVersion !== edge.atTrackingVersion) {
          this.consumers.delete(consumerId);
          consumer?.producers.delete(this.id);
          continue;
        }
        consumer.onConsumerDependencyMayHaveChanged();
      }
    } finally {
      inNotificationPhase = prev;
    }
  }
  /**
   * Mark that this producer node has been accessed in the current reactive context.
   */
  producerAccessed() {
    if (inNotificationPhase) {
      throw new Error(typeof ngDevMode !== 'undefined' && ngDevMode ? `Assertion error: signal read during notification phase` : '');
    }
    if (activeConsumer === null) {
      return;
    }
    // Either create or update the dependency `Edge` in both directions.
    let edge = activeConsumer.producers.get(this.id);
    if (edge === undefined) {
      edge = {
        consumerNode: activeConsumer.ref,
        producerNode: this.ref,
        seenValueVersion: this.valueVersion,
        atTrackingVersion: activeConsumer.trackingVersion
      };
      activeConsumer.producers.set(this.id, edge);
      this.consumers.set(activeConsumer.id, edge);
    } else {
      edge.seenValueVersion = this.valueVersion;
      edge.atTrackingVersion = activeConsumer.trackingVersion;
    }
  }
  /**
   * Whether this consumer currently has any producers registered.
   */
  get hasProducers() {
    return this.producers.size > 0;
  }
  /**
   * Whether this `ReactiveNode` in its producer capacity is currently allowed to initiate updates,
   * based on the current consumer context.
   */
  get producerUpdatesAllowed() {
    return activeConsumer?.consumerAllowSignalWrites !== false;
  }
  /**
   * Checks if a `Producer` has a current value which is different than the value
   * last seen at a specific version by a `Consumer` which recorded a dependency on
   * this `Producer`.
   */
  producerPollStatus(lastSeenValueVersion) {
    // `producer.valueVersion` may be stale, but a mismatch still means that the value
    // last seen by the `Consumer` is also stale.
    if (this.valueVersion !== lastSeenValueVersion) {
      return true;
    }
    // Trigger the `Producer` to update its `valueVersion` if necessary.
    this.onProducerUpdateValueVersion();
    // At this point, we can trust `producer.valueVersion`.
    return this.valueVersion !== lastSeenValueVersion;
  }
}

/**
 * Create a computed `Signal` which derives a reactive value from an expression.
 *
 * @developerPreview
 */
function computed(computation, options) {
  const node = new ComputedImpl(computation, options?.equal ?? defaultEquals);
  // Casting here is required for g3, as TS inference behavior is slightly different between our
  // version/options and g3's.
  return createSignalFromFunction(node, node.signal.bind(node));
}
/**
 * A dedicated symbol used before a computed value has been calculated for the first time.
 * Explicitly typed as `any` so we can use it as signal's value.
 */
const UNSET = Symbol('UNSET');
/**
 * A dedicated symbol used in place of a computed signal value to indicate that a given computation
 * is in progress. Used to detect cycles in computation chains.
 * Explicitly typed as `any` so we can use it as signal's value.
 */
const COMPUTING = Symbol('COMPUTING');
/**
 * A dedicated symbol used in place of a computed signal value to indicate that a given computation
 * failed. The thrown error is cached until the computation gets dirty again.
 * Explicitly typed as `any` so we can use it as signal's value.
 */
const ERRORED = Symbol('ERRORED');
/**
 * A computation, which derives a value from a declarative reactive expression.
 *
 * `Computed`s are both producers and consumers of reactivity.
 */
class ComputedImpl extends ReactiveNode {
  constructor(computation, equal) {
    super();
    this.computation = computation;
    this.equal = equal;
    /**
     * Current value of the computation.
     *
     * This can also be one of the special values `UNSET`, `COMPUTING`, or `ERRORED`.
     */
    this.value = UNSET;
    /**
     * If `value` is `ERRORED`, the error caught from the last computation attempt which will
     * be re-thrown.
     */
    this.error = null;
    /**
     * Flag indicating that the computation is currently stale, meaning that one of the
     * dependencies has notified of a potential change.
     *
     * It's possible that no dependency has _actually_ changed, in which case the `stale`
     * state can be resolved without recomputing the value.
     */
    this.stale = true;
    this.consumerAllowSignalWrites = false;
  }
  onConsumerDependencyMayHaveChanged() {
    if (this.stale) {
      // We've already notified consumers that this value has potentially changed.
      return;
    }
    // Record that the currently cached value may be stale.
    this.stale = true;
    // Notify any consumers about the potential change.
    this.producerMayHaveChanged();
  }
  onProducerUpdateValueVersion() {
    if (!this.stale) {
      // The current value and its version are already up to date.
      return;
    }
    // The current value is stale. Check whether we need to produce a new one.
    if (this.value !== UNSET && this.value !== COMPUTING && !this.consumerPollProducersForChange()) {
      // Even though we were previously notified of a potential dependency update, all of
      // our dependencies report that they have not actually changed in value, so we can
      // resolve the stale state without needing to recompute the current value.
      this.stale = false;
      return;
    }
    // The current value is stale, and needs to be recomputed. It still may not change -
    // that depends on whether the newly computed value is equal to the old.
    this.recomputeValue();
  }
  recomputeValue() {
    if (this.value === COMPUTING) {
      // Our computation somehow led to a cyclic read of itself.
      throw new Error('Detected cycle in computations.');
    }
    const oldValue = this.value;
    this.value = COMPUTING;
    // As we're re-running the computation, update our dependent tracking version number.
    this.trackingVersion++;
    const prevConsumer = setActiveConsumer(this);
    let newValue;
    try {
      newValue = this.computation();
    } catch (err) {
      newValue = ERRORED;
      this.error = err;
    } finally {
      setActiveConsumer(prevConsumer);
    }
    this.stale = false;
    if (oldValue !== UNSET && oldValue !== ERRORED && newValue !== ERRORED && this.equal(oldValue, newValue)) {
      // No change to `valueVersion` - old and new values are
      // semantically equivalent.
      this.value = oldValue;
      return;
    }
    this.value = newValue;
    this.valueVersion++;
  }
  signal() {
    // Check if the value needs updating before returning it.
    this.onProducerUpdateValueVersion();
    // Record that someone looked at this signal.
    this.producerAccessed();
    if (this.value === ERRORED) {
      throw this.error;
    }
    return this.value;
  }
}
function defaultThrowError() {
  throw new Error();
}
let throwInvalidWriteToSignalErrorFn = defaultThrowError;
function throwInvalidWriteToSignalError() {
  throwInvalidWriteToSignalErrorFn();
}
function setThrowInvalidWriteToSignalError(fn) {
  throwInvalidWriteToSignalErrorFn = fn;
}

/**
 * If set, called after `WritableSignal`s are updated.
 *
 * This hook can be used to achieve various effects, such as running effects synchronously as part
 * of setting a signal.
 */
let postSignalSetFn = null;
class WritableSignalImpl extends ReactiveNode {
  constructor(value, equal) {
    super();
    this.value = value;
    this.equal = equal;
    this.consumerAllowSignalWrites = false;
  }
  onConsumerDependencyMayHaveChanged() {
    // This never happens for writable signals as they're not consumers.
  }
  onProducerUpdateValueVersion() {
    // Writable signal value versions are always up to date.
  }
  /**
   * Directly update the value of the signal to a new value, which may or may not be
   * equal to the previous.
   *
   * In the event that `newValue` is semantically equal to the current value, `set` is
   * a no-op.
   */
  set(newValue) {
    if (!this.producerUpdatesAllowed) {
      throwInvalidWriteToSignalError();
    }
    if (!this.equal(this.value, newValue)) {
      this.value = newValue;
      this.valueVersion++;
      this.producerMayHaveChanged();
      postSignalSetFn?.();
    }
  }
  /**
   * Derive a new value for the signal from its current value using the `updater` function.
   *
   * This is equivalent to calling `set` on the result of running `updater` on the current
   * value.
   */
  update(updater) {
    if (!this.producerUpdatesAllowed) {
      throwInvalidWriteToSignalError();
    }
    this.set(updater(this.value));
  }
  /**
   * Calls `mutator` on the current value and assumes that it has been mutated.
   */
  mutate(mutator) {
    if (!this.producerUpdatesAllowed) {
      throwInvalidWriteToSignalError();
    }
    // Mutate bypasses equality checks as it's by definition changing the value.
    mutator(this.value);
    this.valueVersion++;
    this.producerMayHaveChanged();
    postSignalSetFn?.();
  }
  asReadonly() {
    if (this.readonlySignal === undefined) {
      this.readonlySignal = createSignalFromFunction(this, () => this.signal());
    }
    return this.readonlySignal;
  }
  signal() {
    this.producerAccessed();
    return this.value;
  }
}
/**
 * Create a `Signal` that can be set or updated directly.
 *
 * @developerPreview
 */
function signal(initialValue, options) {
  const signalNode = new WritableSignalImpl(initialValue, options?.equal ?? defaultEquals);
  // Casting here is required for g3, as TS inference behavior is slightly different between our
  // version/options and g3's.
  const signalFn = createSignalFromFunction(signalNode, signalNode.signal.bind(signalNode), {
    set: signalNode.set.bind(signalNode),
    update: signalNode.update.bind(signalNode),
    mutate: signalNode.mutate.bind(signalNode),
    asReadonly: signalNode.asReadonly.bind(signalNode)
  });
  return signalFn;
}
function setPostSignalSetFn(fn) {
  const prev = postSignalSetFn;
  postSignalSetFn = fn;
  return prev;
}

/**
 * Execute an arbitrary function in a non-reactive (non-tracking) context. The executed function
 * can, optionally, return a value.
 *
 * @developerPreview
 */
function untracked(nonReactiveReadsFn) {
  const prevConsumer = setActiveConsumer(null);
  // We are not trying to catch any particular errors here, just making sure that the consumers
  // stack is restored in case of errors.
  try {
    return nonReactiveReadsFn();
  } finally {
    setActiveConsumer(prevConsumer);
  }
}
const NOOP_CLEANUP_FN = () => {};
/**
 * Watches a reactive expression and allows it to be scheduled to re-run
 * when any dependencies notify of a change.
 *
 * `Watch` doesn't run reactive expressions itself, but relies on a consumer-
 * provided scheduling operation to coordinate calling `Watch.run()`.
 */
class Watch extends ReactiveNode {
  constructor(watch, schedule, allowSignalWrites) {
    super();
    this.watch = watch;
    this.schedule = schedule;
    this.dirty = false;
    this.cleanupFn = NOOP_CLEANUP_FN;
    this.registerOnCleanup = cleanupFn => {
      this.cleanupFn = cleanupFn;
    };
    this.consumerAllowSignalWrites = allowSignalWrites;
  }
  notify() {
    if (!this.dirty) {
      this.schedule(this);
    }
    this.dirty = true;
  }
  onConsumerDependencyMayHaveChanged() {
    this.notify();
  }
  onProducerUpdateValueVersion() {
    // Watches are not producers.
  }
  /**
   * Execute the reactive expression in the context of this `Watch` consumer.
   *
   * Should be called by the user scheduling algorithm when the provided
   * `schedule` hook is called by `Watch`.
   */
  run() {
    this.dirty = false;
    if (this.trackingVersion !== 0 && !this.consumerPollProducersForChange()) {
      return;
    }
    const prevConsumer = setActiveConsumer(this);
    this.trackingVersion++;
    try {
      this.cleanupFn();
      this.cleanupFn = NOOP_CLEANUP_FN;
      this.watch(this.registerOnCleanup);
    } finally {
      setActiveConsumer(prevConsumer);
    }
  }
  cleanup() {
    this.cleanupFn();
  }
}
function toSignal(source, options) {
  const requiresCleanup = !options?.manualCleanup;
  requiresCleanup && !options?.injector && (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.assertInInjectionContext)(toSignal);
  const cleanupRef = requiresCleanup ? options?.injector?.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef) ?? (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef) : null;
  // Note: T is the Observable value type, and U is the initial value type. They don't have to be
  // the same - the returned signal gives values of type `T`.
  let state;
  if (options?.requireSync) {
    // Initially the signal is in a `NoValue` state.
    state = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
      kind: 0 /* StateKind.NoValue */
    });
  } else {
    // If an initial value was passed, use it. Otherwise, use `undefined` as the initial value.
    state = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
      kind: 1 /* StateKind.Value */,
      value: options?.initialValue
    });
  }
  const sub = source.subscribe({
    next: value => state.set({
      kind: 1 /* StateKind.Value */,
      value
    }),
    error: error => state.set({
      kind: 2 /* StateKind.Error */,
      error
    })
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
  });

  if (ngDevMode && options?.requireSync && untracked(state).kind === 0 /* StateKind.NoValue */) {
    throw new RuntimeError(601 /* RuntimeErrorCode.REQUIRE_SYNC_WITHOUT_SYNC_EMIT */, '`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.');
  }
  // Unsubscribe when the current context is destroyed, if requested.
  cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  // The actual returned signal is a `computed` of the `State` signal, which maps the various states
  // to either values or errors.
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const current = state();
    switch (current.kind) {
      case 1 /* StateKind.Value */:
        return current.value;
      case 2 /* StateKind.Error */:
        throw current.error;
      case 0 /* StateKind.NoValue */:
        // This shouldn't really happen because the error is thrown on creation.
        // TODO(alxhub): use a RuntimeError when we finalize the error semantics
        throw new RuntimeError(601 /* RuntimeErrorCode.REQUIRE_SYNC_WITHOUT_SYNC_EMIT */, '`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.');
    }
  });
}

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

};
;
//# sourceMappingURL=934.js.map