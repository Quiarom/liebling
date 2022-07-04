<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1:function(n,e,t){"use strict";t.r(e),t.d(e,"isRTL",(function(){return o})),t.d(e,"isMobile",(function(){return a})),t.d(e,"isDarkMode",(function(){return i})),t.d(e,"formatDate",(function(){return r})),t.d(e,"getParameterByName",(function(){return c})),t.d(e,"adjustImageGallery",(function(){return u})),t.d(e,"managePostImages",(function(){return s})),t.d(e,"makeImagesZoomable",(function(){return l}));var o=function(){var n=document.querySelector("html");return["ar","he","fa"].includes(n.getAttribute("lang"))},a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(n,")")).matches},i=function(){var n=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");return n&&n.matches},r=function(n){return n?new Date(n).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""},c=function(n,e){e||(e=window.location.href),n=n.replace(/[\[\]]/g,"\\$&");var t=new RegExp("[?&]".concat(n,"(=([^&#]*)|&|#|$)")).exec(e);return t?t[2]?decodeURIComponent(t[2].replace(/\+/g," ")):"":null},u=function(){for(var n=document.querySelectorAll(".kg-gallery-image img"),e=0,t=n.length;e<t;e++){var o=n[e].closest(".kg-gallery-image"),a=n[e].attributes.width.value/n[e].attributes.height.value;o.style.flex="".concat(a," 1 0%")}},s=function(n){n(".js-post-content").find("img").each((function(){n(this).closest("figure").hasClass("kg-bookmark-card")||n(this).closest("figure").hasClass("kg-nft-card")||n(this).parent().is("a")||n(this).hasClass("kg-product-card-image")||n(this).hasClass("kg-audio-thumbnail")||n(this).addClass("js-zoomable")}))},l=function(n,e){e(".js-zoomable").on("opened",(function(){setTimeout((function(){var e=n(".medium-zoom-image--opened");e.length>1&&e.last().hide()}),10)}))}},14:function(n,e,t){t(1),t(30),t(32),t(34),t(36),t(38),t(40),n.exports=t(42)},30:function(n,e){},32:function(n,e){},34:function(n,e){},36:function(n,e){},38:function(n,e){},40:function(n,e){},42:function(n,e){}},[[14,0,1]]]);
=======
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/helpers"],{

/***/ "./js/helpers.js":
/*!***********************!*\
  !*** ./js/helpers.js ***!
  \***********************/
/*! exports provided: isRTL, isMobile, isDarkMode, formatDate, getParameterByName, adjustImageGallery, managePostImages, makeImagesZoomable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRTL", function() { return isRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDarkMode", function() { return isDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameterByName", function() { return getParameterByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustImageGallery", function() { return adjustImageGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managePostImages", function() { return managePostImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeImagesZoomable", function() { return makeImagesZoomable; });
var isRTL = function isRTL() {
  var $html = document.querySelector('html');
  return ['ar', 'he', 'fa'].includes($html.getAttribute('lang'));
};
var isMobile = function isMobile() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '768px';
  return window.matchMedia("(max-width: ".concat(width, ")")).matches;
};
var isDarkMode = function isDarkMode() {
  var darkModeMatcher = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
  return darkModeMatcher && darkModeMatcher.matches;
};
var formatDate = function formatDate(date) {
  if (date) {
    return new Date(date).toLocaleDateString(document.documentElement.lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return '';
};
var getParameterByName = function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp("[?&]".concat(name, "(=([^&#]*)|&|#|$)"));
  var results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
var adjustImageGallery = function adjustImageGallery() {
  var images = document.querySelectorAll('.kg-gallery-image img');

  for (var i = 0, len = images.length; i < len; i++) {
    var container = images[i].closest('.kg-gallery-image');
    var width = images[i].attributes.width.value;
    var height = images[i].attributes.height.value;
    var ratio = width / height;
    container.style.flex = "".concat(ratio, " 1 0%");
  }
};
var managePostImages = function managePostImages($) {
  $('.js-post-content').find('img').each(function () {
    if (!$(this).closest('figure').hasClass('kg-bookmark-card') && !$(this).closest('figure').hasClass('kg-nft-card') && !$(this).parent().is('a') && !$(this).hasClass('kg-product-card-image') && !$(this).hasClass('kg-audio-thumbnail')) {
      $(this).addClass('js-zoomable');
    }
  });
};
var makeImagesZoomable = function makeImagesZoomable($, mediumZoom) {
  var zoom = mediumZoom('.js-zoomable');
  zoom.on('opened', function () {
    setTimeout(function () {
      var $mediumZoomImages = $('.medium-zoom-image--opened');

      if ($mediumZoomImages.length > 1) {
        $mediumZoomImages.last().hide();
      }
    }, 10);
  });
};

/***/ }),

/***/ "./sass/404.scss":
/*!***********************!*\
  !*** ./sass/404.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/app.scss":
/*!***********************!*\
  !*** ./sass/app.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/home.scss":
/*!************************!*\
  !*** ./sass/home.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/listing.scss":
/*!***************************!*\
  !*** ./sass/listing.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/newsletter.scss":
/*!******************************!*\
  !*** ./sass/newsletter.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/post.scss":
/*!************************!*\
  !*** ./sass/post.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/tags.scss":
/*!************************!*\
  !*** ./sass/tags.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***********************************************************************************************************************************************************!*\
  !*** multi ./js/helpers.js ./sass/app.scss ./sass/home.scss ./sass/listing.scss ./sass/post.scss ./sass/newsletter.scss ./sass/tags.scss ./sass/404.scss ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/quiarom/Documents/projects-world/liebling/src/js/helpers.js */"./js/helpers.js");
__webpack_require__(/*! /home/quiarom/Documents/projects-world/liebling/src/sass/app.scss */"./sass/app.scss");
__webpack_require__(/*! /home/quiarom/Documents/projects-world/liebling/src/sass/home.scss */"./sass/home.scss");
__webpack_require__(/*! /home/quiarom/Documents/projects-world/liebling/src/sass/listing.scss */"./sass/listing.scss");
__webpack_require__(/*! /home/quiarom/Documents/projects-world/liebling/src/sass/post.scss */"./sass/post.scss");
__webpack_require__(/*! /home/quiarom/Documents/projects-world/liebling/src/sass/newsletter.scss */"./sass/newsletter.scss");
__webpack_require__(/*! /home/quiarom/Documents/projects-world/liebling/src/sass/tags.scss */"./sass/tags.scss");
module.exports = __webpack_require__(/*! /home/quiarom/Documents/projects-world/liebling/src/sass/404.scss */"./sass/404.scss");


/***/ })

},[[0,"/js/manifest"]]]);
>>>>>>> 79dbdae2862b9b05e03e78444c0a12a28fc3f12f
