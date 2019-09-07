/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/main.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/main.scss ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/* ========================================================================\n   Component: Base\n ========================================================================== */\n/*\n * 1. Set `font-size` to support `rem` units\n *    Not using `font` property because a leading hyphen (e.g. -apple-system) causes the font to break in IE11 and Edge\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n * 3. Style\n */\nhtml {\n  /* 1 */\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 16px;\n  font-weight: normal;\n  line-height: 1.5;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */\n  background: #fff;\n  color: #666;\n}\n\n/*\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/* Links\n ========================================================================== */\n/*\n * Remove the outline on focused links when they are also active or hovered\n */\na:active,\na:hover {\n  outline: none;\n}\n\n/*\n * Style\n */\na,\n.uk-link {\n  color: #1e87f0;\n  text-decoration: none;\n  cursor: pointer;\n}\n\na:hover,\n.uk-link:hover,\n.uk-link-toggle:hover .uk-link,\n.uk-link-toggle:focus .uk-link {\n  color: #0f6ecd;\n  text-decoration: underline;\n}\n\n/* Text-level semantics\n ========================================================================== */\n/*\n * 1. Add the correct text decoration in Edge.\n * 2. The shorthand declaration `underline dotted` is not supported in Safari.\n */\nabbr[title] {\n  /* 1 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */\n  -webkit-text-decoration-style: dotted;\n}\n\n/*\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n * 1. Consolas has a better baseline in running text compared to `Courier`\n * 2. Correct the odd `em` font sizing in all browsers.\n * 3. Style\n */\n:not(pre) > code,\n:not(pre) > kbd,\n:not(pre) > samp {\n  /* 1 */\n  font-family: Consolas, monaco, monospace;\n  /* 2 */\n  font-size: 0.875rem;\n  /* 3 */\n  color: #f0506e;\n  white-space: nowrap;\n  padding: 2px 6px;\n  background: #f8f8f8;\n}\n\n/*\n * Emphasize\n */\nem {\n  color: #f0506e;\n}\n\n/*\n * Insert\n */\nins {\n  background: #ffd;\n  color: #666;\n  text-decoration: none;\n}\n\n/*\n * Mark\n */\nmark {\n  background: #ffd;\n  color: #666;\n}\n\n/*\n * Quote\n */\nq {\n  font-style: italic;\n}\n\n/*\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/*\n * Prevents `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n ========================================================================== */\n/*\n * Remove the gap between embedded content and the bottom of their containers.\n */\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * 1. Add responsiveness.\n * 2. Auto-scale the height. Only needed if `height` attribute is present.\n * 3. Corrects responsive `max-width` behavior if padding and border are used.\n * 4. Exclude SVGs for IE11 because they don't preserve their aspect ratio.\n */\ncanvas,\nimg,\nvideo {\n  /* 1 */\n  max-width: 100%;\n  /* 2 */\n  height: auto;\n  /* 3 */\n  box-sizing: border-box;\n}\n\n/* 4 */\n@supports (display: block) {\n  svg {\n    max-width: 100%;\n    height: auto;\n    box-sizing: border-box;\n  }\n}\n/*\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/*\n * 1. Fix lazy loading images if parent element is set to `display: inline` and has `overflow: hidden`.\n * 2. Hide `alt` text for lazy loading images.\n * Note: Selector for background while loading img[data-src*='.jpg'][src*='data:image'] { background: grey; }\n */\nimg:not([src]) {\n  /* 1 */\n  min-width: 1px;\n  /* 2 */\n  visibility: hidden;\n}\n\n/*\n * Iframe\n * Remove border in all browsers\n */\niframe {\n  border: 0;\n}\n\n/* Block elements\n ========================================================================== */\n/*\n * Margins\n */\np,\nul,\nol,\ndl,\npre,\naddress,\nfieldset,\nfigure {\n  margin: 0 0 20px 0;\n}\n\n/* Add margin if adjacent element */\n* + p,\n* + ul,\n* + ol,\n* + dl,\n* + pre,\n* + address,\n* + fieldset,\n* + figure {\n  margin-top: 20px;\n}\n\n/* Headings\n ========================================================================== */\nh1, .uk-h1,\nh2, .uk-h2,\nh3, .uk-h3,\nh4, .uk-h4,\nh5, .uk-h5,\nh6, .uk-h6,\n.uk-heading-small,\n.uk-heading-medium,\n.uk-heading-large,\n.uk-heading-xlarge,\n.uk-heading-2xlarge {\n  margin: 0 0 20px 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-weight: normal;\n  color: #333;\n  text-transform: none;\n}\n\n/* Add margin if adjacent element */\n* + h1, * + .uk-h1,\n* + h2, * + .uk-h2,\n* + h3, * + .uk-h3,\n* + h4, * + .uk-h4,\n* + h5, * + .uk-h5,\n* + h6, * + .uk-h6,\n* + .uk-heading-small,\n* + .uk-heading-medium,\n* + .uk-heading-large,\n* + .uk-heading-xlarge,\n* + .uk-heading-2xlarge {\n  margin-top: 40px;\n}\n\n/*\n * Sizes\n */\nh1, .uk-h1 {\n  font-size: 2.23125rem;\n  line-height: 1.2;\n}\n\nh2, .uk-h2 {\n  font-size: 1.7rem;\n  line-height: 1.3;\n}\n\nh3, .uk-h3 {\n  font-size: 1.5rem;\n  line-height: 1.4;\n}\n\nh4, .uk-h4 {\n  font-size: 1.25rem;\n  line-height: 1.4;\n}\n\nh5, .uk-h5 {\n  font-size: 16px;\n  line-height: 1.4;\n}\n\nh6, .uk-h6 {\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  h1, .uk-h1 {\n    font-size: 2.625rem;\n  }\n\n  h2, .uk-h2 {\n    font-size: 2rem;\n  }\n}\n/* Lists\n ========================================================================== */\nul,\nol {\n  padding-left: 30px;\n}\n\n/*\n * Reset margin for nested lists\n */\nul > li > ul,\nul > li > ol,\nol > li > ol,\nol > li > ul {\n  margin: 0;\n}\n\n/* Description lists\n ========================================================================== */\ndt {\n  font-weight: bold;\n}\n\ndd {\n  margin-left: 0;\n}\n\n/* Horizontal rules\n ========================================================================== */\n/*\n * 1. Show the overflow in Chrome, Edge and IE.\n * 2. Add the correct text-align in Edge and IE.\n * 3. Style\n */\nhr, .uk-hr {\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n  text-align: inherit;\n  /* 3 */\n  margin: 0 0 20px 0;\n  border: 0;\n  border-top: 1px solid #e5e5e5;\n}\n\n/* Add margin if adjacent element */\n* + hr,\n* + .uk-hr {\n  margin-top: 20px;\n}\n\n/* Address\n ========================================================================== */\naddress {\n  font-style: normal;\n}\n\n/* Blockquotes\n ========================================================================== */\nblockquote {\n  margin: 0 0 20px 0;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  font-style: italic;\n  color: #333;\n}\n\n/* Add margin if adjacent element */\n* + blockquote {\n  margin-top: 20px;\n}\n\n/*\n * Content\n */\nblockquote p:last-of-type {\n  margin-bottom: 0;\n}\n\nblockquote footer {\n  margin-top: 10px;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #666;\n}\nblockquote footer::before {\n  content: \"\\2014   \";\n}\n\n/* Preformatted text\n ========================================================================== */\n/*\n * 1. Contain overflow in all browsers.\n */\npre {\n  font: 0.875rem / 1.5 Consolas, monaco, monospace;\n  color: #666;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n  /* 1 */\n  overflow: auto;\n  padding: 10px;\n  border: 1px solid #e5e5e5;\n  border-radius: 3px;\n  background: #fff;\n}\n\npre code {\n  font-family: Consolas, monaco, monospace;\n}\n\n/* Selection pseudo-element\n ========================================================================== */\n::-moz-selection {\n  background: #39f;\n  color: #fff;\n  text-shadow: none;\n}\n::selection {\n  background: #39f;\n  color: #fff;\n  text-shadow: none;\n}\n\n/* HTML5 elements\n ========================================================================== */\n/*\n * 1. Add the correct display in Edge, IE 10+, and Firefox.\n * 2. Add the correct display in IE.\n */\ndetails,\nmain {\n  /* 2 */\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/*\n * Add the correct display in IE.\n */\ntemplate {\n  display: none;\n}\n\n/* Pass media breakpoints to JS\n ========================================================================== */\n/*\n * Breakpoints\n */\n.uk-breakpoint-s::before {\n  content: \"640px\";\n}\n\n.uk-breakpoint-m::before {\n  content: \"960px\";\n}\n\n.uk-breakpoint-l::before {\n  content: \"1200px\";\n}\n\n.uk-breakpoint-xl::before {\n  content: \"1600px\";\n}\n\n:root {\n  --uk-breakpoint-s: 640px;\n  --uk-breakpoint-m: 960px;\n  --uk-breakpoint-l: 1200px;\n  --uk-breakpoint-xl: 1600px;\n}\n\n/* ========================================================================\n   Component: Link\n ========================================================================== */\n/* Muted\n ========================================================================== */\na.uk-link-muted,\n.uk-link-muted a {\n  color: #999;\n}\n\na.uk-link-muted:hover,\n.uk-link-muted a:hover,\n.uk-link-toggle:hover .uk-link-muted,\n.uk-link-toggle:focus .uk-link-muted {\n  color: #666;\n}\n\n/* Text\n ========================================================================== */\na.uk-link-text,\n.uk-link-text a {\n  color: inherit;\n}\n\na.uk-link-text:hover,\n.uk-link-text a:hover,\n.uk-link-toggle:hover .uk-link-text,\n.uk-link-toggle:focus .uk-link-text {\n  color: #999;\n}\n\n/* Heading\n ========================================================================== */\na.uk-link-heading,\n.uk-link-heading a {\n  color: inherit;\n}\n\na.uk-link-heading:hover,\n.uk-link-heading a:hover,\n.uk-link-toggle:hover .uk-link-heading,\n.uk-link-toggle:focus .uk-link-heading {\n  color: #1e87f0;\n  text-decoration: none;\n}\n\n/* Reset\n ========================================================================== */\n/*\n * `!important` needed to override inverse component\n */\na.uk-link-reset,\n.uk-link-reset a {\n  color: inherit !important;\n  text-decoration: none !important;\n}\n\n/* Toggle\n ========================================================================== */\n.uk-link-toggle {\n  color: inherit !important;\n  text-decoration: none !important;\n}\n\n.uk-link-toggle:focus {\n  outline: none;\n}\n\n/* ========================================================================\n   Component: Heading\n ========================================================================== */\n.uk-heading-small {\n  font-size: 2.6rem;\n  line-height: 1.2;\n}\n\n.uk-heading-medium {\n  font-size: 2.8875rem;\n  line-height: 1.1;\n}\n\n.uk-heading-large {\n  font-size: 3.4rem;\n  line-height: 1.1;\n}\n\n.uk-heading-xlarge {\n  font-size: 4rem;\n  line-height: 1;\n}\n\n.uk-heading-2xlarge {\n  font-size: 6rem;\n  line-height: 1;\n}\n\n/* Tablet Landscape and bigger */\n@media (min-width: 960px) {\n  .uk-heading-small {\n    font-size: 3.25rem;\n  }\n\n  .uk-heading-medium {\n    font-size: 3.5rem;\n  }\n\n  .uk-heading-large {\n    font-size: 4rem;\n  }\n\n  .uk-heading-xlarge {\n    font-size: 6rem;\n  }\n\n  .uk-heading-2xlarge {\n    font-size: 8rem;\n  }\n}\n/* Laptop and bigger */\n@media (min-width: 1200px) {\n  .uk-heading-medium {\n    font-size: 4rem;\n  }\n\n  .uk-heading-large {\n    font-size: 6rem;\n  }\n\n  .uk-heading-xlarge {\n    font-size: 8rem;\n  }\n\n  .uk-heading-2xlarge {\n    font-size: 11rem;\n  }\n}\n/* Primary\n   Deprecated: Use `uk-heading-medium` instead\n ========================================================================== */\n/* Tablet landscape and bigger */\n/* Desktop and bigger */\n/* Hero\n   Deprecated: Use `uk-heading-xlarge` instead\n ========================================================================== */\n/* Tablet landscape and bigger */\n/* Desktop and bigger */\n/* Divider\n ========================================================================== */\n.uk-heading-divider {\n  padding-bottom: calc(5px + 0.1em);\n  border-bottom: calc(0.2px + 0.05em) solid #e5e5e5;\n}\n\n/* Bullet\n ========================================================================== */\n.uk-heading-bullet {\n  position: relative;\n}\n\n/*\n * 1. Using `inline-block` to make it work with text alignment\n * 2. Center vertically\n * 3. Style\n */\n.uk-heading-bullet::before {\n  content: \"\";\n  /* 1 */\n  display: inline-block;\n  /* 2 */\n  position: relative;\n  top: calc(-0.1 * 1em);\n  vertical-align: middle;\n  /* 3 */\n  height: calc(4px + 0.7em);\n  margin-right: calc(5px + 0.2em);\n  border-left: calc(5px + 0.1em) solid #e5e5e5;\n}\n\n/* Line\n ========================================================================== */\n/*\n * Clip the child element\n */\n.uk-heading-line {\n  overflow: hidden;\n}\n\n/*\n * Extra markup is needed to make it work with text align\n */\n.uk-heading-line > * {\n  display: inline-block;\n  position: relative;\n}\n\n/*\n * 1. Center vertically\n * 2. Make the element as large as possible. It's clipped by the container.\n * 3. Style\n */\n.uk-heading-line > ::before,\n.uk-heading-line > ::after {\n  content: \"\";\n  /* 1 */\n  position: absolute;\n  top: calc(50% - (calc(0.2px + 0.05em) / 2));\n  /* 2 */\n  width: 2000px;\n  /* 3 */\n  border-bottom: calc(0.2px + 0.05em) solid #e5e5e5;\n}\n\n.uk-heading-line > ::before {\n  right: 100%;\n  margin-right: calc(5px + 0.3em);\n}\n\n.uk-heading-line > ::after {\n  left: 100%;\n  margin-left: calc(5px + 0.3em);\n}\n\n/* ========================================================================\n   Component: Divider\n ========================================================================== */\n/*\n * 1. Reset default `hr`\n * 2. Set margin if a `div` is used for semantical reason\n */\n[class*=uk-divider] {\n  /* 1 */\n  border: none;\n  /* 2 */\n  margin-bottom: 20px;\n}\n\n/* Add margin if adjacent element */\n* + [class*=uk-divider] {\n  margin-top: 20px;\n}\n\n/* Icon\n ========================================================================== */\n.uk-divider-icon {\n  position: relative;\n  height: 20px;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22none%22%20stroke%3D%22%23e5e5e5%22%20stroke-width%3D%222%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%227%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n\n.uk-divider-icon::before,\n.uk-divider-icon::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  max-width: calc(50% - (50px / 2));\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.uk-divider-icon::before {\n  right: calc(50% + (50px / 2));\n  width: 100%;\n}\n\n.uk-divider-icon::after {\n  left: calc(50% + (50px / 2));\n  width: 100%;\n}\n\n/* Small\n ========================================================================== */\n/*\n * 1. Fix height because of `inline-block`\n * 2. Using ::after and inline-block to make `text-align` work\n */\n/* 1 */\n.uk-divider-small {\n  line-height: 0;\n}\n\n/* 2 */\n.uk-divider-small::after {\n  content: \"\";\n  display: inline-block;\n  width: 100px;\n  max-width: 100%;\n  border-top: 1px solid #e5e5e5;\n  vertical-align: top;\n}\n\n/* Vertical\n ========================================================================== */\n.uk-divider-vertical {\n  width: 1px;\n  height: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  border-left: 1px solid #e5e5e5;\n}\n\n/* ========================================================================\n   Component: List\n ========================================================================== */\n.uk-list {\n  padding: 0;\n  list-style: none;\n}\n\n/*\n * Micro clearfix\n */\n.uk-list > li::before,\n.uk-list > li::after {\n  content: \"\";\n  display: table;\n}\n\n.uk-list > li::after {\n  clear: both;\n}\n\n/*\n * Remove margin from the last-child\n */\n.uk-list > li > :last-child {\n  margin-bottom: 0;\n}\n\n/*\n * Nested lists\n */\n.uk-list ul {\n  margin: 0;\n  padding-left: 30px;\n  list-style: none;\n}\n\n/*\n * Style\n */\n.uk-list > li:nth-child(n+2),\n.uk-list > li > ul {\n  margin-top: 10px;\n}\n\n/* Style modifiers\n ========================================================================== */\n/*\n * Divider\n */\n.uk-list-divider > li:nth-child(n+2) {\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px solid #e5e5e5;\n}\n\n/*\n * Striped\n */\n.uk-list-striped > li {\n  padding: 10px 10px;\n}\n.uk-list-striped > li:nth-of-type(odd) {\n  border-top: 1px solid #e5e5e5;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.uk-list-striped > li:nth-of-type(odd) {\n  background: #f8f8f8;\n}\n\n.uk-list-striped > li:nth-child(n+2) {\n  margin-top: 0;\n}\n\n/*\n * Bullet\n * 1. Reset display `table` which causes issues in combination with multi column layouts.\n */\n.uk-list-bullet > li {\n  position: relative;\n  padding-left: calc(1.5em + 10px);\n}\n\n.uk-list-bullet > li::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1.5em;\n  height: 1.5em;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23666%22%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  /* 1 */\n  display: block;\n}\n\n/* Size modifier\n ========================================================================== */\n.uk-list-large > li:nth-child(n+2),\n.uk-list-large > li > ul {\n  margin-top: 20px;\n}\n\n/*\n * Divider\n */\n.uk-list-large.uk-list-divider > li:nth-child(n+2) {\n  margin-top: 20px;\n  padding-top: 20px;\n}\n\n/*\n * Striped\n */\n.uk-list-large.uk-list-striped > li {\n  padding: 20px 10px;\n}\n.uk-list-large.uk-list-striped > li:nth-of-type(odd) {\n  border-top: 1px solid #e5e5e5;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.uk-list-large.uk-list-striped > li:nth-child(n+2) {\n  margin-top: 0;\n}\n\n/* ========================================================================\n   Component: Description list\n ========================================================================== */\n/*\n * Term\n */\n.uk-description-list > dt {\n  color: #333;\n  font-size: 0.875rem;\n  font-weight: normal;\n  text-transform: uppercase;\n}\n\n.uk-description-list > dt:nth-child(n+2) {\n  margin-top: 20px;\n}\n\n/*\n * Description\n */\n/* Style modifier\n ========================================================================== */\n/*\n * Line\n */\n.uk-description-list-divider > dt:nth-child(n+2) {\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e5e5;\n}\n\n/* ========================================================================\n   Component: Table\n ========================================================================== */\n/*\n * 1. Remove most spacing between table cells.\n * 2. Behave like a block element\n * 3. Style\n */\n.uk-table {\n  /* 1 */\n  border-collapse: collapse;\n  border-spacing: 0;\n  /* 2 */\n  width: 100%;\n  /* 3 */\n  margin-bottom: 20px;\n}\n\n/* Add margin if adjacent element */\n* + .uk-table {\n  margin-top: 20px;\n}\n\n/* Header cell\n ========================================================================== */\n/*\n * 1. Style\n */\n.uk-table th {\n  padding: 16px 12px;\n  text-align: left;\n  vertical-align: bottom;\n  /* 1 */\n  font-size: 0.875rem;\n  font-weight: normal;\n  color: #999;\n  text-transform: uppercase;\n}\n\n/* Cell\n ========================================================================== */\n.uk-table td {\n  padding: 16px 12px;\n  vertical-align: top;\n}\n\n/*\n * Remove margin from the last-child\n */\n.uk-table td > :last-child {\n  margin-bottom: 0;\n}\n\n/* Footer\n ========================================================================== */\n.uk-table tfoot {\n  font-size: 0.875rem;\n}\n\n/* Caption\n ========================================================================== */\n.uk-table caption {\n  font-size: 0.875rem;\n  text-align: left;\n  color: #999;\n}\n\n/* Alignment modifier\n ========================================================================== */\n.uk-table-middle,\n.uk-table-middle td {\n  vertical-align: middle !important;\n}\n\n/* Style modifiers\n ========================================================================== */\n/*\n * Divider\n */\n.uk-table-divider > tr:not(:first-child),\n.uk-table-divider > :not(:first-child) > tr,\n.uk-table-divider > :first-child > tr:not(:first-child) {\n  border-top: 1px solid #e5e5e5;\n}\n\n/*\n * Striped\n */\n.uk-table-striped > tr:nth-of-type(odd),\n.uk-table-striped tbody tr:nth-of-type(odd) {\n  background: #f8f8f8;\n  border-top: 1px solid #e5e5e5;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n/*\n * Hover\n */\n.uk-table-hover > tr:hover,\n.uk-table-hover tbody tr:hover {\n  background: #ffd;\n}\n\n/* Active state\n ========================================================================== */\n.uk-table > tr.uk-active,\n.uk-table tbody tr.uk-active {\n  background: #ffd;\n}\n\n/* Size modifier\n ========================================================================== */\n.uk-table-small th,\n.uk-table-small td {\n  padding: 10px 12px;\n}\n\n.uk-table-large th,\n.uk-table-large td {\n  padding: 22px 12px;\n}\n\n/* Justify modifier\n ========================================================================== */\n.uk-table-justify th:first-child,\n.uk-table-justify td:first-child {\n  padding-left: 0;\n}\n\n.uk-table-justify th:last-child,\n.uk-table-justify td:last-child {\n  padding-right: 0;\n}\n\n/* Cell size modifier\n ========================================================================== */\n.uk-table-shrink {\n  width: 1px;\n}\n\n.uk-table-expand {\n  min-width: 150px;\n}\n\n/* Cell link modifier\n ========================================================================== */\n/*\n * Does not work with `uk-table-justify` at the moment\n */\n.uk-table-link {\n  padding: 0 !important;\n}\n\n.uk-table-link > a {\n  display: block;\n  padding: 16px 12px;\n}\n\n.uk-table-small .uk-table-link > a {\n  padding: 10px 12px;\n}\n\n/* Responsive table\n ========================================================================== */\n/* Phone landscape and smaller */\n@media (max-width: 959px) {\n  .uk-table-responsive,\n.uk-table-responsive tbody,\n.uk-table-responsive th,\n.uk-table-responsive td,\n.uk-table-responsive tr {\n    display: block;\n  }\n\n  .uk-table-responsive thead {\n    display: none;\n  }\n\n  .uk-table-responsive th,\n.uk-table-responsive td {\n    width: auto !important;\n    max-width: none !important;\n    min-width: 0 !important;\n    overflow: visible !important;\n    white-space: normal !important;\n  }\n\n  .uk-table-responsive th:not(:first-child):not(.uk-table-link),\n.uk-table-responsive td:not(:first-child):not(.uk-table-link),\n.uk-table-responsive .uk-table-link:not(:first-child) > a {\n    padding-top: 5px !important;\n  }\n\n  .uk-table-responsive th:not(:last-child):not(.uk-table-link),\n.uk-table-responsive td:not(:last-child):not(.uk-table-link),\n.uk-table-responsive .uk-table-link:not(:last-child) > a {\n    padding-bottom: 5px !important;\n  }\n\n  .uk-table-justify.uk-table-responsive th,\n.uk-table-justify.uk-table-responsive td {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n.uk-table tbody tr {\n  transition: background-color 0.1s linear;\n}\n\n/* ========================================================================\n   Component: Icon\n ========================================================================== */\n/*\n * Note: 1. - 7. is required for `button` elements. Needed for Close and Form Icon component.\n * 1. Remove margins in Chrome, Safari and Opera.\n * 2. Remove borders for `button`.\n * 3. Remove border-radius in Chrome.\n * 4. Address `overflow` set to `hidden` in IE.\n * 5. Correct `font` properties and `color` not being inherited for `button`.\n * 6. Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 7. Remove default `button` padding and background color\n * 8. Style\n * 9. Fill all SVG elements with the current text color if no `fill` attribute is set\n * 10. Let the container fit the height of the icon\n */\n.uk-icon {\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  border: none;\n  /* 3 */\n  border-radius: 0;\n  /* 4 */\n  overflow: visible;\n  /* 5 */\n  font: inherit;\n  color: inherit;\n  /* 6 */\n  text-transform: none;\n  /* 7. */\n  padding: 0;\n  background-color: transparent;\n  /* 8 */\n  display: inline-block;\n  /* 9 */\n  fill: currentcolor;\n  /* 10 */\n  line-height: 0;\n}\n\n/* Required for `button`. */\nbutton.uk-icon:not(:disabled) {\n  cursor: pointer;\n}\n\n/*\n * Remove the inner border and padding in Firefox.\n */\n.uk-icon::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/*\n * Set the fill and stroke color of all SVG elements to the current text color\n */\n.uk-icon:not(.uk-preserve) [fill*=\"#\"]:not(.uk-preserve) {\n  fill: currentcolor;\n}\n\n.uk-icon:not(.uk-preserve) [stroke*=\"#\"]:not(.uk-preserve) {\n  stroke: currentcolor;\n}\n\n/*\n * Fix Firefox blurry SVG rendering: https://bugzilla.mozilla.org/show_bug.cgi?id=1046835\n */\n.uk-icon > * {\n  transform: translate(0, 0);\n}\n\n/* Image modifier\n ========================================================================== */\n/*\n * Display images in icon dimensions\n */\n.uk-icon-image {\n  width: 20px;\n  height: 20px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: contain;\n  vertical-align: middle;\n}\n\n/* Style modifiers\n ========================================================================== */\n/*\n * Link\n */\n.uk-icon-link {\n  color: #999;\n}\n\n.uk-icon-link:hover,\n.uk-icon-link:focus {\n  color: #666;\n  outline: none;\n}\n\n/* OnClick + Active */\n.uk-icon-link:active,\n.uk-active > .uk-icon-link {\n  color: #595959;\n}\n\n/*\n * Button\n * 1. Center icon vertically and horizontally\n */\n.uk-icon-button {\n  box-sizing: border-box;\n  width: 36px;\n  height: 36px;\n  border-radius: 500px;\n  background: #f8f8f8;\n  color: #999;\n  vertical-align: middle;\n  /* 1 */\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.1s ease-in-out;\n  transition-property: color, background-color;\n}\n\n/* Hover + Focus */\n.uk-icon-button:hover,\n.uk-icon-button:focus {\n  background-color: #ebebeb;\n  color: #666;\n  outline: none;\n}\n\n/* OnClick + Active */\n.uk-icon-button:active,\n.uk-active > .uk-icon-button {\n  background-color: #dfdfdf;\n  color: #666;\n}\n\n/* ========================================================================\n   Component: Form Range\n ========================================================================== */\n/*\n * 1. Normalize and defaults\n * 2. Prevent content overflow if a fixed width is used\n * 3. Take the full width\n * 4. Remove default style\n * 5. Remove white background in Chrome\n * 6. Remove padding in IE11\n */\n.uk-range {\n  /* 1 */\n  box-sizing: border-box;\n  margin: 0;\n  vertical-align: middle;\n  /* 2 */\n  max-width: 100%;\n  /* 3 */\n  width: 100%;\n  /* 4 */\n  -webkit-appearance: none;\n  /* 5 */\n  background: transparent;\n  /* 6 */\n  padding: 0;\n}\n\n/* Focus */\n.uk-range:focus {\n  outline: none;\n}\n\n.uk-range::-moz-focus-outer {\n  border: none;\n}\n\n/* IE11 Reset */\n.uk-range::-ms-track {\n  height: 15px;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n\n/*\n * Improves consistency of cursor style for clickable elements\n */\n.uk-range:not(:disabled)::-webkit-slider-thumb {\n  cursor: pointer;\n}\n\n.uk-range:not(:disabled)::-moz-range-thumb {\n  cursor: pointer;\n}\n\n.uk-range:not(:disabled)::-ms-thumb {\n  cursor: pointer;\n}\n\n/* Thumb\n ========================================================================== */\n/*\n * 1. Reset\n * 2. Style\n */\n/* Webkit */\n.uk-range::-webkit-slider-thumb {\n  /* 1 */\n  -webkit-appearance: none;\n  margin-top: -7px;\n  /* 2 */\n  height: 15px;\n  width: 15px;\n  border-radius: 500px;\n  background: #fff;\n  border: 1px solid #cccccc;\n}\n\n/* Firefox */\n.uk-range::-moz-range-thumb {\n  /* 1 */\n  border: none;\n  /* 2 */\n  height: 15px;\n  width: 15px;\n  border-radius: 500px;\n  background: #fff;\n  border: 1px solid #cccccc;\n}\n\n/* Edge */\n.uk-range::-ms-thumb {\n  /* 1 */\n  margin-top: 0;\n}\n\n/* IE11 */\n.uk-range::-ms-thumb {\n  /* 1 */\n  border: none;\n  /* 2 */\n  height: 15px;\n  width: 15px;\n  border-radius: 500px;\n  background: #fff;\n  border: 1px solid #cccccc;\n}\n\n/* Edge + IE11 */\n.uk-range::-ms-tooltip {\n  display: none;\n}\n\n/* Track\n ========================================================================== */\n/*\n * 1. Safari doesn't have a focus state. Using active instead.\n */\n/* Webkit */\n.uk-range::-webkit-slider-runnable-track {\n  height: 3px;\n  background: #ebebeb;\n  border-radius: 500px;\n}\n\n.uk-range:focus::-webkit-slider-runnable-track,\n.uk-range:active::-webkit-slider-runnable-track {\n  background: #d2d2d2;\n}\n\n/* Firefox */\n.uk-range::-moz-range-track {\n  height: 3px;\n  background: #ebebeb;\n  border-radius: 500px;\n}\n\n.uk-range:focus::-moz-range-track {\n  background: #d2d2d2;\n}\n\n/* Edge */\n.uk-range::-ms-fill-lower,\n.uk-range::-ms-fill-upper {\n  height: 3px;\n  background: #ebebeb;\n  border-radius: 500px;\n}\n\n.uk-range:focus::-ms-fill-lower,\n.uk-range:focus::-ms-fill-upper {\n  background: #d2d2d2;\n}\n\n/* ========================================================================\n   Component: Form\n ========================================================================== */\n/*\n * 1. Define consistent box sizing.\n *    Default is `content-box` with following exceptions set to `border-box`\n *    `select`, `input[type=\"checkbox\"]` and `input[type=\"radio\"]`\n *    `input[type=\"search\"]` in Chrome, Safari and Opera\n *    `input[type=\"color\"]` in Firefox\n * 2. Address margins set differently in Firefox/IE and Chrome/Safari/Opera.\n * 3. Remove `border-radius` in iOS.\n * 4. Change font properties to `inherit` in all browsers.\n */\n.uk-input,\n.uk-select,\n.uk-textarea,\n.uk-radio,\n.uk-checkbox {\n  /* 1 */\n  box-sizing: border-box;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  border-radius: 0;\n  /* 4 */\n  font: inherit;\n}\n\n/*\n * Show the overflow in Edge.\n */\n.uk-input {\n  overflow: visible;\n}\n\n/*\n * Remove the inheritance of text transform in Firefox.\n */\n.uk-select {\n  text-transform: none;\n}\n\n/*\n * 1. Change font properties to `inherit` in all browsers\n * 2. Don't inherit the `font-weight` and use `bold` instead.\n * NOTE: Both declarations don't work in Chrome, Safari and Opera.\n */\n.uk-select optgroup {\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  font-weight: bold;\n}\n\n/*\n * Remove the default vertical scrollbar in IE 10+.\n */\n.uk-textarea {\n  overflow: auto;\n}\n\n/*\n * Remove the inner padding and cancel buttons in Chrome on OS X and Safari on OS X.\n */\n.uk-input[type=search]::-webkit-search-cancel-button,\n.uk-input[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n.uk-input[type=number]::-webkit-inner-spin-button,\n.uk-input[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n * Removes placeholder transparency in Firefox.\n */\n.uk-input::-moz-placeholder,\n.uk-textarea::-moz-placeholder {\n  opacity: 1;\n}\n\n/*\n * Improves consistency of cursor style for clickable elements\n */\n.uk-radio:not(:disabled),\n.uk-checkbox:not(:disabled) {\n  cursor: pointer;\n}\n\n/*\n * Define consistent border, margin, and padding.\n */\n.uk-fieldset {\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n\n/* Input, select and textarea\n * Allowed: `text`, `password`, `datetime`, `datetime-local`, `date`,  `month`,\n            `time`, `week`, `number`, `email`, `url`, `search`, `tel`, `color`\n * Disallowed: `range`, `radio`, `checkbox`, `file`, `submit`, `reset` and `image`\n ========================================================================== */\n/*\n * Remove default style in iOS.\n */\n.uk-input,\n.uk-textarea {\n  -webkit-appearance: none;\n}\n\n/*\n * 1. Prevent content overflow if a fixed width is used\n * 2. Take the full width\n * 3. Reset default\n * 4. Style\n */\n.uk-input,\n.uk-select,\n.uk-textarea {\n  /* 1 */\n  max-width: 100%;\n  /* 2 */\n  width: 100%;\n  /* 3 */\n  border: 0 none;\n  /* 4 */\n  padding: 0 10px;\n  background: #fff;\n  color: #666;\n  border: 1px solid #e5e5e5;\n  transition: 0.2s ease-in-out;\n  transition-property: color, background-color, border;\n}\n\n/*\n * Single-line\n * 1. Allow any element to look like an `input` or `select` element\n * 2. Make sure line-height is not larger than height\n *    Also needed to center the text vertically\n */\n.uk-input,\n.uk-select:not([multiple]):not([size]) {\n  height: 40px;\n  vertical-align: middle;\n  /* 1 */\n  display: inline-block;\n}\n\n/* 2 */\n.uk-input:not(input),\n.uk-select:not(select) {\n  line-height: 38px;\n}\n\n/*\n * Multi-line\n */\n.uk-select[multiple],\n.uk-select[size],\n.uk-textarea {\n  padding-top: 4px;\n  padding-bottom: 4px;\n  vertical-align: top;\n}\n\n/* Focus */\n.uk-input:focus,\n.uk-select:focus,\n.uk-textarea:focus {\n  outline: none;\n  background-color: #fff;\n  color: #666;\n  border-color: #1e87f0;\n}\n\n/* Disabled */\n.uk-input:disabled,\n.uk-select:disabled,\n.uk-textarea:disabled {\n  background-color: #f8f8f8;\n  color: #999;\n  border-color: #e5e5e5;\n}\n\n/*\n * Placeholder\n */\n.uk-input::-ms-input-placeholder {\n  color: #999 !important;\n}\n\n.uk-input::-webkit-input-placeholder {\n  color: #999;\n}\n\n.uk-input::-moz-placeholder {\n  color: #999;\n}\n\n.uk-input:-ms-input-placeholder {\n  color: #999;\n}\n\n.uk-input::placeholder {\n  color: #999;\n}\n\n.uk-textarea::-ms-input-placeholder {\n  color: #999 !important;\n}\n\n.uk-textarea::-webkit-input-placeholder {\n  color: #999;\n}\n\n.uk-textarea::-moz-placeholder {\n  color: #999;\n}\n\n.uk-textarea:-ms-input-placeholder {\n  color: #999;\n}\n\n.uk-textarea::placeholder {\n  color: #999;\n}\n\n/* Style modifier (`uk-input`, `uk-select` and `uk-textarea`)\n ========================================================================== */\n/*\n * Small\n */\n.uk-form-small {\n  font-size: 0.875rem;\n}\n\n.uk-form-small:not(textarea):not([multiple]):not([size]) {\n  height: 30px;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.uk-form-small:not(select):not(input):not(textarea) {\n  line-height: 28px;\n}\n\n/*\n * Large\n */\n.uk-form-large {\n  font-size: 1.25rem;\n}\n\n.uk-form-large:not(textarea):not([multiple]):not([size]) {\n  height: 55px;\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.uk-form-large:not(select):not(input):not(textarea) {\n  line-height: 53px;\n}\n\n/* Style modifier (`uk-input`, `uk-select` and `uk-textarea`)\n ========================================================================== */\n/*\n * Error\n */\n.uk-form-danger,\n.uk-form-danger:focus {\n  color: #f0506e;\n  border-color: #f0506e;\n}\n\n/*\n * Success\n */\n.uk-form-success,\n.uk-form-success:focus {\n  color: #32d296;\n  border-color: #32d296;\n}\n\n/*\n * Blank\n */\n.uk-form-blank {\n  background: none;\n  border-color: transparent;\n}\n\n.uk-form-blank:focus {\n  border-color: #e5e5e5;\n  border-style: dashed;\n}\n\n/* Width modifiers (`uk-input`, `uk-select` and `uk-textarea`)\n ========================================================================== */\n/*\n * Fixed widths\n * Different widths for mini sized `input` and `select` elements\n */\ninput.uk-form-width-xsmall {\n  width: 50px;\n}\n\nselect.uk-form-width-xsmall {\n  width: 75px;\n}\n\n.uk-form-width-small {\n  width: 130px;\n}\n\n.uk-form-width-medium {\n  width: 200px;\n}\n\n.uk-form-width-large {\n  width: 500px;\n}\n\n/* Select\n ========================================================================== */\n/*\n * 1. Remove default style. Also works in Firefox\n * 2. Style\n * 3. Remove default style in IE 10/11\n * 4. Set `color` for options in the select dropdown, because the inherited `color` might be too light.\n */\n.uk-select:not([multiple]):not([size]) {\n  /* 1 */\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  /* 2 */\n  padding-right: 20px;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%201%209%206%2015%206%22%20%2F%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%2013%209%208%2015%208%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n  background-repeat: no-repeat;\n  background-position: 100% 50%;\n}\n\n/* 3 */\n.uk-select:not([multiple]):not([size])::-ms-expand {\n  display: none;\n}\n\n/* 4 */\n.uk-select:not([multiple]):not([size]) option {\n  color: #444;\n}\n\n/*\n * Disabled\n */\n.uk-select:not([multiple]):not([size]):disabled {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23999%22%20points%3D%2212%201%209%206%2015%206%22%20%2F%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23999%22%20points%3D%2212%2013%209%208%2015%208%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n}\n\n/* Datalist\n ========================================================================== */\n/*\n * 1. Remove default style in Chrome\n */\n.uk-input[list] {\n  padding-right: 20px;\n  background-repeat: no-repeat;\n  background-position: 100% 50%;\n}\n\n.uk-input[list]:hover,\n.uk-input[list]:focus {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%2012%208%206%2016%206%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n}\n\n/* 1 */\n.uk-input[list]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n\n/* Radio and checkbox\n * Note: Does not work in IE11\n ========================================================================== */\n/*\n * 1. Style\n * 2. Make box more robust so it clips the child element\n * 3. Vertical alignment\n * 4. Remove default style\n * 5. Fix black background on iOS\n * 6. Center icons\n */\n.uk-radio,\n.uk-checkbox {\n  /* 1 */\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n  /* 2 */\n  overflow: hidden;\n  /* 3 */\n  margin-top: -4px;\n  vertical-align: middle;\n  /* 4 */\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  /* 5 */\n  background-color: transparent;\n  /* 6 */\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  border: 1px solid #cccccc;\n  transition: 0.2s ease-in-out;\n  transition-property: background-color, border;\n}\n\n.uk-radio {\n  border-radius: 50%;\n}\n\n/* Focus */\n.uk-radio:focus,\n.uk-checkbox:focus {\n  outline: none;\n  border-color: #1e87f0;\n}\n\n/*\n * Checked\n */\n.uk-radio:checked,\n.uk-checkbox:checked,\n.uk-checkbox:indeterminate {\n  background-color: #1e87f0;\n  border-color: transparent;\n}\n\n/* Focus */\n.uk-radio:checked:focus,\n.uk-checkbox:checked:focus,\n.uk-checkbox:indeterminate:focus {\n  background-color: #0e6ecd;\n}\n\n/*\n * Icons\n */\n.uk-radio:checked {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23fff%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\n.uk-checkbox:checked {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n}\n\n.uk-checkbox:indeterminate {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23fff%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\n/*\n * Disabled\n */\n.uk-radio:disabled,\n.uk-checkbox:disabled {\n  background-color: #f8f8f8;\n  border-color: #e5e5e5;\n}\n\n.uk-radio:disabled:checked {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23999%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\n.uk-checkbox:disabled:checked {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23999%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n}\n\n.uk-checkbox:disabled:indeterminate {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23999%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\n/* Legend\n ========================================================================== */\n/*\n * Legend\n * 1. Behave like block element\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove padding so people aren't caught out if they zero out fieldsets.\n * 4. Style\n */\n.uk-legend {\n  /* 1 */\n  width: 100%;\n  /* 2 */\n  color: inherit;\n  /* 3 */\n  padding: 0;\n  /* 4 */\n  font-size: 1.5rem;\n  line-height: 1.4;\n}\n\n/* Custom controls\n ========================================================================== */\n/*\n * 1. Container fits its content\n * 2. Create position context\n * 3. Prevent content overflow\n * 4. Behave like most inline-block elements\n */\n.uk-form-custom {\n  /* 1 */\n  display: inline-block;\n  /* 2 */\n  position: relative;\n  /* 3 */\n  max-width: 100%;\n  /* 4 */\n  vertical-align: middle;\n}\n\n/*\n * 1. Position and resize the form control to always cover its container\n * 2. Required for Firefox for positioning to the left\n * 3. Required for Webkit to make `height` work\n * 4. Hide controle and show cursor\n * 5. Needed for the cursor\n * 6. Clip height caused by 5. Needed for Webkit only\n */\n.uk-form-custom select,\n.uk-form-custom input[type=file] {\n  /* 1 */\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  /* 2 */\n  left: 0;\n  /* 3 */\n  -webkit-appearance: none;\n  /* 4 */\n  opacity: 0;\n  cursor: pointer;\n}\n\n.uk-form-custom input[type=file] {\n  /* 5 */\n  font-size: 500px;\n  /* 6 */\n  overflow: hidden;\n}\n\n/* Label\n ========================================================================== */\n.uk-form-label {\n  color: #333;\n  font-size: 0.875rem;\n}\n\n/* Layout\n ========================================================================== */\n/*\n * Stacked\n */\n.uk-form-stacked .uk-form-label {\n  display: block;\n  margin-bottom: 5px;\n}\n\n/*\n * Horizontal\n */\n/* Tablet portrait and smaller */\n@media (max-width: 959px) {\n  /* Behave like `uk-form-stacked` */\n  .uk-form-horizontal .uk-form-label {\n    display: block;\n    margin-bottom: 5px;\n  }\n}\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-form-horizontal .uk-form-label {\n    width: 200px;\n    margin-top: 7px;\n    float: left;\n  }\n\n  .uk-form-horizontal .uk-form-controls {\n    margin-left: 215px;\n  }\n\n  /* Better vertical alignment if controls are checkboxes and radio buttons with text */\n  .uk-form-horizontal .uk-form-controls-text {\n    padding-top: 7px;\n  }\n}\n/* Icons\n ========================================================================== */\n/*\n * 1. Set position\n * 2. Set width\n * 3. Center icon vertically and horizontally\n * 4. Style\n */\n.uk-form-icon {\n  /* 1 */\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  /* 2 */\n  width: 40px;\n  /* 3 */\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  /* 4 */\n  color: #999;\n}\n\n/*\n * Required for `a`.\n */\n.uk-form-icon:hover {\n  color: #666;\n}\n\n/*\n * Make `input` element clickable through icon, e.g. if it's a `span`\n */\n.uk-form-icon:not(a):not(button):not(input) {\n  pointer-events: none;\n}\n\n/*\n * Input padding\n */\n.uk-form-icon:not(.uk-form-icon-flip) ~ .uk-input {\n  padding-left: 40px !important;\n}\n\n/*\n * Position modifier\n */\n.uk-form-icon-flip {\n  right: 0;\n  left: auto;\n}\n\n.uk-form-icon-flip ~ .uk-input {\n  padding-right: 40px !important;\n}\n\n/* ========================================================================\n   Component: Button\n ========================================================================== */\n/*\n * 1. Remove margins in Chrome, Safari and Opera.\n * 2. Remove borders for `button`.\n * 3. Address `overflow` set to `hidden` in IE.\n * 4. Correct `font` properties and `color` not being inherited for `button`.\n * 5. Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 6. Style\n * 7. `line-height` is used to create a height because it also centers the text vertically for `a` elements.\n *    Better would be to use height and flexbox to center the text vertically but flexbox doesn't work in Firefox on `button` elements.\n * 8. Align text if button has a width\n * 9. Required for `a`.\n */\n.uk-button {\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  border: none;\n  /* 3 */\n  overflow: visible;\n  /* 4 */\n  font: inherit;\n  color: inherit;\n  /* 5 */\n  text-transform: none;\n  /* 6 */\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 30px;\n  vertical-align: middle;\n  font-size: 0.875rem;\n  /* 7 */\n  line-height: 38px;\n  /* 8 */\n  text-align: center;\n  /* 9 */\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: 0.1s ease-in-out;\n  transition-property: color, background-color, border-color;\n}\n\n.uk-button:not(:disabled) {\n  cursor: pointer;\n}\n\n/*\n * Remove the inner border and padding in Firefox.\n */\n.uk-button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/* Hover */\n.uk-button:hover {\n  /* 9 */\n  text-decoration: none;\n}\n\n/* Focus */\n.uk-button:focus {\n  outline: none;\n}\n\n/* OnClick + Active */\n/* Style modifiers\n ========================================================================== */\n/*\n * Default\n */\n.uk-button-default {\n  background-color: transparent;\n  color: #333;\n  border: 1px solid #e5e5e5;\n}\n\n/* Hover + Focus */\n.uk-button-default:hover,\n.uk-button-default:focus {\n  background-color: transparent;\n  color: #333;\n  border-color: #b2b2b2;\n}\n\n/* OnClick + Active */\n.uk-button-default:active,\n.uk-button-default.uk-active {\n  background-color: transparent;\n  color: #333;\n  border-color: #999999;\n}\n\n/*\n * Primary\n */\n.uk-button-primary {\n  background-color: #1e87f0;\n  color: #fff;\n  border: 1px solid transparent;\n}\n\n/* Hover + Focus */\n.uk-button-primary:hover,\n.uk-button-primary:focus {\n  background-color: #0f7ae5;\n  color: #fff;\n}\n\n/* OnClick + Active */\n.uk-button-primary:active,\n.uk-button-primary.uk-active {\n  background-color: #0e6ecd;\n  color: #fff;\n}\n\n/*\n * Secondary\n */\n.uk-button-secondary {\n  background-color: #222;\n  color: #fff;\n  border: 1px solid transparent;\n}\n\n/* Hover + Focus */\n.uk-button-secondary:hover,\n.uk-button-secondary:focus {\n  background-color: #151515;\n  color: #fff;\n}\n\n/* OnClick + Active */\n.uk-button-secondary:active,\n.uk-button-secondary.uk-active {\n  background-color: #090909;\n  color: #fff;\n}\n\n/*\n * Danger\n */\n.uk-button-danger {\n  background-color: #f0506e;\n  color: #fff;\n  border: 1px solid transparent;\n}\n\n/* Hover + Focus */\n.uk-button-danger:hover,\n.uk-button-danger:focus {\n  background-color: #ee395b;\n  color: #fff;\n}\n\n/* OnClick + Active */\n.uk-button-danger:active,\n.uk-button-danger.uk-active {\n  background-color: #ec2147;\n  color: #fff;\n}\n\n/*\n * Disabled\n * The same for all style modifiers\n */\n.uk-button-default:disabled,\n.uk-button-primary:disabled,\n.uk-button-secondary:disabled,\n.uk-button-danger:disabled {\n  background-color: transparent;\n  color: #999;\n  border-color: #e5e5e5;\n}\n\n/* Size modifiers\n ========================================================================== */\n.uk-button-small {\n  padding: 0 15px;\n  line-height: 28px;\n  font-size: 0.875rem;\n}\n\n.uk-button-large {\n  padding: 0 40px;\n  line-height: 53px;\n  font-size: 0.875rem;\n}\n\n/* Text modifiers\n ========================================================================== */\n/*\n * Text\n * 1. Reset\n * 2. Style\n */\n.uk-button-text {\n  /* 1 */\n  padding: 0;\n  line-height: 1.5;\n  background: none;\n  /* 2 */\n  color: #333;\n  position: relative;\n}\n.uk-button-text::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 100%;\n  border-bottom: 1px solid #333;\n  transition: right 0.3s ease-out;\n}\n\n/* Hover + Focus */\n.uk-button-text:hover,\n.uk-button-text:focus {\n  color: #333;\n}\n.uk-button-text:hover::before,\n.uk-button-text:focus::before {\n  right: 0;\n}\n\n/* Disabled */\n.uk-button-text:disabled {\n  color: #999;\n}\n.uk-button-text:disabled::before {\n  display: none;\n}\n\n/*\n * Link\n * 1. Reset\n * 2. Style\n */\n.uk-button-link {\n  /* 1 */\n  padding: 0;\n  line-height: 1.5;\n  background: none;\n  /* 2 */\n  color: #1e87f0;\n}\n\n/* Hover + Focus */\n.uk-button-link:hover,\n.uk-button-link:focus {\n  color: #0f6ecd;\n  text-decoration: underline;\n}\n\n/* Disabled */\n.uk-button-link:disabled {\n  color: #999;\n  text-decoration: none;\n}\n\n/* Group\n ========================================================================== */\n/*\n * 1. Using `flex` instead of `inline-block` to prevent whitespace betweent child elements\n * 2. Behave like button\n * 3. Create position context\n */\n.uk-button-group {\n  /* 1 */\n  display: inline-flex;\n  /* 2 */\n  vertical-align: middle;\n  /* 3 */\n  position: relative;\n}\n\n/* Group\n ========================================================================== */\n/*\n * Collapse border\n */\n.uk-button-group > .uk-button:nth-child(n+2),\n.uk-button-group > div:nth-child(n+2) .uk-button {\n  margin-left: -1px;\n}\n\n/*\n * Create position context to superimpose the successor elements border\n * Known issue: If you use an `a` element as button and an icon inside,\n * the active state will not work if you click the icon inside the button\n * Workaround: Just use a `button` or `input` element as button\n */\n.uk-button-group .uk-button:hover,\n.uk-button-group .uk-button:focus,\n.uk-button-group .uk-button:active,\n.uk-button-group .uk-button.uk-active {\n  position: relative;\n  z-index: 1;\n}\n\n/* ========================================================================\n   Component: Section\n ========================================================================== */\n/*\n * 1. Make it work with `100vh` and height in general\n */\n.uk-section {\n  box-sizing: border-box;\n  /* 1 */\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\n\n/* Desktop and bigger */\n@media (min-width: 960px) {\n  .uk-section {\n    padding-top: 70px;\n    padding-bottom: 70px;\n  }\n}\n/*\n * Micro clearfix\n */\n.uk-section::before,\n.uk-section::after {\n  content: \"\";\n  display: table;\n}\n\n.uk-section::after {\n  clear: both;\n}\n\n/*\n * Remove margin from the last-child\n */\n.uk-section > :last-child {\n  margin-bottom: 0;\n}\n\n/* Size modifiers\n ========================================================================== */\n/*\n * XSmall\n */\n.uk-section-xsmall {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n/*\n * Small\n */\n.uk-section-small {\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\n\n/*\n * Large\n */\n.uk-section-large {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-section-large {\n    padding-top: 140px;\n    padding-bottom: 140px;\n  }\n}\n/*\n * XLarge\n */\n.uk-section-xlarge {\n  padding-top: 140px;\n  padding-bottom: 140px;\n}\n\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-section-xlarge {\n    padding-top: 210px;\n    padding-bottom: 210px;\n  }\n}\n/* Style modifiers\n ========================================================================== */\n/*\n * Default\n */\n.uk-section-default {\n  background: #fff;\n}\n\n/*\n * Muted\n */\n.uk-section-muted {\n  background: #f8f8f8;\n}\n\n/*\n * Primary\n */\n.uk-section-primary {\n  background: #1e87f0;\n}\n\n/*\n * Secondary\n */\n.uk-section-secondary {\n  background: #222;\n}\n\n/* Overlap modifier\n ========================================================================== */\n/*\n * Reserved modifier to make a section overlap another section with an border image\n * Implemented by the theme\n */\n/* ========================================================================\n   Component: Container\n ========================================================================== */\n/*\n * 1. Box sizing has to be `content-box` so the max-width is always the same and\n *    unaffected by the padding on different breakpoints. It's important for the size modifiers.\n */\n.uk-container {\n  /* 1 */\n  box-sizing: content-box;\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n/* Phone landscape and bigger */\n@media (min-width: 640px) {\n  .uk-container {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-container {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n}\n/*\n * Micro clearfix\n */\n.uk-container::before,\n.uk-container::after {\n  content: \"\";\n  display: table;\n}\n\n.uk-container::after {\n  clear: both;\n}\n\n/*\n * Remove margin from the last-child\n */\n.uk-container > :last-child {\n  margin-bottom: 0;\n}\n\n/*\n * Remove padding from nested containers\n */\n.uk-container .uk-container {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n/* Size modifier\n ========================================================================== */\n.uk-container-xsmall {\n  max-width: 750px;\n}\n\n.uk-container-small {\n  max-width: 900px;\n}\n\n.uk-container-large {\n  max-width: 1600px;\n}\n\n.uk-container-expand {\n  max-width: none;\n}\n\n/* Expand modifier\n ========================================================================== */\n/*\n * Expand one side only\n */\n.uk-container-expand-left {\n  margin-left: 0;\n}\n\n.uk-container-expand-right {\n  margin-right: 0;\n}\n\n/* Phone landscape and bigger */\n@media (min-width: 640px) {\n  .uk-container-expand-left.uk-container-xsmall,\n.uk-container-expand-right.uk-container-xsmall {\n    max-width: calc(50% + (750px / 2) - 30px);\n  }\n\n  .uk-container-expand-left.uk-container-small,\n.uk-container-expand-right.uk-container-small {\n    max-width: calc(50% + (900px / 2) - 30px);\n  }\n}\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-container-expand-left,\n.uk-container-expand-right {\n    max-width: calc(50% + (1200px / 2) - 40px);\n  }\n\n  .uk-container-expand-left.uk-container-xsmall,\n.uk-container-expand-right.uk-container-xsmall {\n    max-width: calc(50% + (750px / 2) - 40px);\n  }\n\n  .uk-container-expand-left.uk-container-small,\n.uk-container-expand-right.uk-container-small {\n    max-width: calc(50% + (900px / 2) - 40px);\n  }\n\n  .uk-container-expand-left.uk-container-large,\n.uk-container-expand-right.uk-container-large {\n    max-width: calc(50% + (1600px / 2) - 40px);\n  }\n}\n/* Item\n ========================================================================== */\n/*\n * Utility classes to reset container padding on the left or right side\n * Note: It has to be negative margin on the item, because it's specific to the item.\n */\n.uk-container-item-padding-remove-left,\n.uk-container-item-padding-remove-right {\n  width: calc(100% + 15px);\n}\n\n.uk-container-item-padding-remove-left {\n  margin-left: -15px;\n}\n\n.uk-container-item-padding-remove-right {\n  margin-right: -15px;\n}\n\n/* Phone landscape and bigger */\n@media (min-width: 640px) {\n  .uk-container-item-padding-remove-left,\n.uk-container-item-padding-remove-right {\n    width: calc(100% + 30px);\n  }\n\n  .uk-container-item-padding-remove-left {\n    margin-left: -30px;\n  }\n\n  .uk-container-item-padding-remove-right {\n    margin-right: -30px;\n  }\n}\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-container-item-padding-remove-left,\n.uk-container-item-padding-remove-right {\n    width: calc(100% + 40px);\n  }\n\n  .uk-container-item-padding-remove-left {\n    margin-left: -40px;\n  }\n\n  .uk-container-item-padding-remove-right {\n    margin-right: -40px;\n  }\n}\n/* ========================================================================\n   Component: Grid\n ========================================================================== */\n/*\n * 1. Allow cells to wrap into the next line\n * 2. Reset list\n */\n.uk-grid {\n  display: flex;\n  /* 1 */\n  flex-wrap: wrap;\n  /* 2 */\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n/*\n * Grid cell\n * Note: Space is allocated solely based on content dimensions, but shrinks: 0 1 auto\n * Reset margin for e.g. paragraphs\n */\n.uk-grid > * {\n  margin: 0;\n}\n\n/*\n * Remove margin from the last-child\n */\n.uk-grid > * > :last-child {\n  margin-bottom: 0;\n}\n\n/* Gutter\n ========================================================================== */\n/*\n * Default\n */\n/* Horizontal */\n.uk-grid {\n  margin-left: -30px;\n}\n\n.uk-grid > * {\n  padding-left: 30px;\n}\n\n/* Vertical */\n.uk-grid + .uk-grid,\n.uk-grid > .uk-grid-margin,\n* + .uk-grid-margin {\n  margin-top: 30px;\n}\n\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  /* Horizontal */\n  .uk-grid {\n    margin-left: -40px;\n  }\n\n  .uk-grid > * {\n    padding-left: 40px;\n  }\n\n  /* Vertical */\n  .uk-grid + .uk-grid,\n.uk-grid > .uk-grid-margin,\n* + .uk-grid-margin {\n    margin-top: 40px;\n  }\n}\n/*\n * Small\n */\n/* Horizontal */\n.uk-grid-small,\n.uk-grid-column-small {\n  margin-left: -15px;\n}\n\n.uk-grid-small > *,\n.uk-grid-column-small > * {\n  padding-left: 15px;\n}\n\n/* Vertical */\n.uk-grid + .uk-grid-small,\n.uk-grid + .uk-grid-row-small,\n.uk-grid-small > .uk-grid-margin,\n.uk-grid-row-small > .uk-grid-margin,\n* + .uk-grid-margin-small {\n  margin-top: 15px;\n}\n\n/*\n * Medium\n */\n/* Horizontal */\n.uk-grid-medium,\n.uk-grid-column-medium {\n  margin-left: -30px;\n}\n\n.uk-grid-medium > *,\n.uk-grid-column-medium > * {\n  padding-left: 30px;\n}\n\n/* Vertical */\n.uk-grid + .uk-grid-medium,\n.uk-grid + .uk-grid-row-medium,\n.uk-grid-medium > .uk-grid-margin,\n.uk-grid-row-medium > .uk-grid-margin,\n* + .uk-grid-margin-medium {\n  margin-top: 30px;\n}\n\n/*\n * Large\n */\n/* Horizontal */\n.uk-grid-large,\n.uk-grid-column-large {\n  margin-left: -40px;\n}\n\n.uk-grid-large > *,\n.uk-grid-column-large > * {\n  padding-left: 40px;\n}\n\n/* Vertical */\n.uk-grid + .uk-grid-large,\n.uk-grid + .uk-grid-row-large,\n.uk-grid-large > .uk-grid-margin,\n.uk-grid-row-large > .uk-grid-margin,\n* + .uk-grid-margin-large {\n  margin-top: 40px;\n}\n\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  /* Horizontal */\n  .uk-grid-large,\n.uk-grid-column-large {\n    margin-left: -70px;\n  }\n\n  .uk-grid-large > *,\n.uk-grid-column-large > * {\n    padding-left: 70px;\n  }\n\n  /* Vertical */\n  .uk-grid + .uk-grid-large,\n.uk-grid + .uk-grid-row-large,\n.uk-grid-large > .uk-grid-margin,\n.uk-grid-row-large > .uk-grid-margin,\n* + .uk-grid-margin-large {\n    margin-top: 70px;\n  }\n}\n/*\n * Collapse\n */\n/* Horizontal */\n.uk-grid-collapse,\n.uk-grid-column-collapse {\n  margin-left: 0;\n}\n\n.uk-grid-collapse > *,\n.uk-grid-column-collapse > * {\n  padding-left: 0;\n}\n\n/* Vertical */\n.uk-grid + .uk-grid-collapse,\n.uk-grid + .uk-grid-row-collapse,\n.uk-grid-collapse > .uk-grid-margin,\n.uk-grid-row-collapse > .uk-grid-margin {\n  margin-top: 0;\n}\n\n/* Divider\n ========================================================================== */\n.uk-grid-divider > * {\n  position: relative;\n}\n\n.uk-grid-divider > :not(.uk-first-column)::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  border-left: 1px solid #e5e5e5;\n}\n\n/* Vertical */\n.uk-grid-divider.uk-grid-stack > .uk-grid-margin::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  border-top: 1px solid #e5e5e5;\n}\n\n/*\n * Default\n */\n/* Horizontal */\n.uk-grid-divider {\n  margin-left: -60px;\n}\n\n.uk-grid-divider > * {\n  padding-left: 60px;\n}\n\n.uk-grid-divider > :not(.uk-first-column)::before {\n  left: 30px;\n}\n\n/* Vertical */\n.uk-grid-divider.uk-grid-stack > .uk-grid-margin {\n  margin-top: 60px;\n}\n\n.uk-grid-divider.uk-grid-stack > .uk-grid-margin::before {\n  top: -30px;\n  left: 60px;\n}\n\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  /* Horizontal */\n  .uk-grid-divider {\n    margin-left: -80px;\n  }\n\n  .uk-grid-divider > * {\n    padding-left: 80px;\n  }\n\n  .uk-grid-divider > :not(.uk-first-column)::before {\n    left: 40px;\n  }\n\n  /* Vertical */\n  .uk-grid-divider.uk-grid-stack > .uk-grid-margin {\n    margin-top: 80px;\n  }\n\n  .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before {\n    top: -40px;\n    left: 80px;\n  }\n}\n/*\n * Small\n */\n/* Horizontal */\n.uk-grid-divider.uk-grid-small,\n.uk-grid-divider.uk-grid-column-small {\n  margin-left: -30px;\n}\n\n.uk-grid-divider.uk-grid-small > *,\n.uk-grid-divider.uk-grid-column-small > * {\n  padding-left: 30px;\n}\n\n.uk-grid-divider.uk-grid-small > :not(.uk-first-column)::before,\n.uk-grid-divider.uk-grid-column-small > :not(.uk-first-column)::before {\n  left: 15px;\n}\n\n/* Vertical */\n.uk-grid-divider.uk-grid-small.uk-grid-stack > .uk-grid-margin,\n.uk-grid-divider.uk-grid-row-small.uk-grid-stack > .uk-grid-margin {\n  margin-top: 30px;\n}\n\n.uk-grid-divider.uk-grid-small.uk-grid-stack > .uk-grid-margin::before {\n  top: -15px;\n  left: 30px;\n}\n\n.uk-grid-divider.uk-grid-row-small.uk-grid-stack > .uk-grid-margin::before {\n  top: -15px;\n}\n\n.uk-grid-divider.uk-grid-column-small.uk-grid-stack > .uk-grid-margin::before {\n  left: 30px;\n}\n\n/*\n * Medium\n */\n/* Horizontal */\n.uk-grid-divider.uk-grid-medium,\n.uk-grid-divider.uk-grid-column-medium {\n  margin-left: -60px;\n}\n\n.uk-grid-divider.uk-grid-medium > *,\n.uk-grid-divider.uk-grid-column-medium > * {\n  padding-left: 60px;\n}\n\n.uk-grid-divider.uk-grid-medium > :not(.uk-first-column)::before,\n.uk-grid-divider.uk-grid-column-medium > :not(.uk-first-column)::before {\n  left: 30px;\n}\n\n/* Vertical */\n.uk-grid-divider.uk-grid-medium.uk-grid-stack > .uk-grid-margin,\n.uk-grid-divider.uk-grid-row-medium.uk-grid-stack > .uk-grid-margin {\n  margin-top: 60px;\n}\n\n.uk-grid-divider.uk-grid-medium.uk-grid-stack > .uk-grid-margin::before {\n  top: -30px;\n  left: 60px;\n}\n\n.uk-grid-divider.uk-grid-row-medium.uk-grid-stack > .uk-grid-margin::before {\n  top: -30px;\n}\n\n.uk-grid-divider.uk-grid-column-medium.uk-grid-stack > .uk-grid-margin::before {\n  left: 60px;\n}\n\n/*\n * Large\n */\n/* Horizontal */\n.uk-grid-divider.uk-grid-large,\n.uk-grid-divider.uk-grid-column-large {\n  margin-left: -80px;\n}\n\n.uk-grid-divider.uk-grid-large > *,\n.uk-grid-divider.uk-grid-column-large > * {\n  padding-left: 80px;\n}\n\n.uk-grid-divider.uk-grid-large > :not(.uk-first-column)::before,\n.uk-grid-divider.uk-grid-column-large > :not(.uk-first-column)::before {\n  left: 40px;\n}\n\n/* Vertical */\n.uk-grid-divider.uk-grid-large.uk-grid-stack > .uk-grid-margin,\n.uk-grid-divider.uk-grid-row-large.uk-grid-stack > .uk-grid-margin {\n  margin-top: 80px;\n}\n\n.uk-grid-divider.uk-grid-large.uk-grid-stack > .uk-grid-margin::before {\n  top: -40px;\n  left: 80px;\n}\n\n.uk-grid-divider.uk-grid-row-large.uk-grid-stack > .uk-grid-margin::before {\n  top: -40px;\n}\n\n.uk-grid-divider.uk-grid-column-large.uk-grid-stack > .uk-grid-margin::before {\n  left: 80px;\n}\n\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  /* Horizontal */\n  .uk-grid-divider.uk-grid-large,\n.uk-grid-divider.uk-grid-column-large {\n    margin-left: -140px;\n  }\n\n  .uk-grid-divider.uk-grid-large > *,\n.uk-grid-divider.uk-grid-column-large > * {\n    padding-left: 140px;\n  }\n\n  .uk-grid-divider.uk-grid-large > :not(.uk-first-column)::before,\n.uk-grid-divider.uk-grid-column-large > :not(.uk-first-column)::before {\n    left: 70px;\n  }\n\n  /* Vertical */\n  .uk-grid-divider.uk-grid-large.uk-grid-stack > .uk-grid-margin,\n.uk-grid-divider.uk-grid-row-large.uk-grid-stack > .uk-grid-margin {\n    margin-top: 140px;\n  }\n\n  .uk-grid-divider.uk-grid-large.uk-grid-stack > .uk-grid-margin::before {\n    top: -70px;\n    left: 140px;\n  }\n\n  .uk-grid-divider.uk-grid-row-large.uk-grid-stack > .uk-grid-margin::before {\n    top: -70px;\n  }\n\n  .uk-grid-divider.uk-grid-column-large.uk-grid-stack > .uk-grid-margin::before {\n    left: 140px;\n  }\n}\n/* Match child of a grid cell\n ========================================================================== */\n/*\n * Behave like a block element\n * 1. Wrap into the next line\n * 2. Take the full width, at least 100%. Only if no class from the Width component is set.\n * 3. Expand width even if larger than 100%, e.g. because of negative margin (Needed for nested grids)\n */\n.uk-grid-match > *,\n.uk-grid-item-match {\n  display: flex;\n  /* 1 */\n  flex-wrap: wrap;\n}\n\n.uk-grid-match > * > :not([class*=uk-width]),\n.uk-grid-item-match > :not([class*=uk-width]) {\n  /* 2 */\n  box-sizing: border-box;\n  width: 100%;\n  /* 3 */\n  flex: auto;\n}\n\n/* ========================================================================\n   Component: Tile\n ========================================================================== */\n.uk-tile {\n  position: relative;\n  box-sizing: border-box;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\n\n/* Phone landscape and bigger */\n@media (min-width: 640px) {\n  .uk-tile {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-tile {\n    padding-left: 40px;\n    padding-right: 40px;\n    padding-top: 70px;\n    padding-bottom: 70px;\n  }\n}\n/*\n * Micro clearfix\n */\n.uk-tile::before,\n.uk-tile::after {\n  content: \"\";\n  display: table;\n}\n\n.uk-tile::after {\n  clear: both;\n}\n\n/*\n * Remove margin from the last-child\n */\n.uk-tile > :last-child {\n  margin-bottom: 0;\n}\n\n/* Size modifiers\n ========================================================================== */\n/*\n * XSmall\n */\n.uk-tile-xsmall {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n/*\n * Small\n */\n.uk-tile-small {\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\n\n/*\n * Large\n */\n.uk-tile-large {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-tile-large {\n    padding-top: 140px;\n    padding-bottom: 140px;\n  }\n}\n/*\n * XLarge\n */\n.uk-tile-xlarge {\n  padding-top: 140px;\n  padding-bottom: 140px;\n}\n\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-tile-xlarge {\n    padding-top: 210px;\n    padding-bottom: 210px;\n  }\n}\n/* Style modifiers\n ========================================================================== */\n/*\n * Default\n */\n.uk-tile-default {\n  background: #fff;\n}\n\n/*\n * Muted\n */\n.uk-tile-muted {\n  background: #f8f8f8;\n}\n\n/*\n * Primary\n */\n.uk-tile-primary {\n  background: #1e87f0;\n}\n\n/*\n * Secondary\n */\n.uk-tile-secondary {\n  background: #222;\n}\n\n/* ========================================================================\n   Component: Card\n ========================================================================== */\n.uk-card {\n  position: relative;\n  box-sizing: border-box;\n  color: #000;\n}\n\n/* Sections\n ========================================================================== */\n.uk-card-body {\n  padding: 30px 30px;\n}\n\n.uk-card-header {\n  padding: 15px 30px;\n}\n\n.uk-card-footer {\n  padding: 15px 30px;\n}\n\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  .uk-card-body {\n    padding: 40px 40px;\n  }\n\n  .uk-card-header {\n    padding: 20px 40px;\n  }\n\n  .uk-card-footer {\n    padding: 20px 40px;\n  }\n}\n/*\n * Micro clearfix\n */\n.uk-card-body::before,\n.uk-card-body::after,\n.uk-card-header::before,\n.uk-card-header::after,\n.uk-card-footer::before,\n.uk-card-footer::after {\n  content: \"\";\n  display: table;\n}\n\n.uk-card-body::after,\n.uk-card-header::after,\n.uk-card-footer::after {\n  clear: both;\n}\n\n/*\n * Remove margin from the last-child\n */\n.uk-card-body > :last-child,\n.uk-card-header > :last-child,\n.uk-card-footer > :last-child {\n  margin-bottom: 0;\n}\n\n/* Media\n ========================================================================== */\n/*\n * Reserved alignment modifier to style the media element, e.g. with `border-radius`\n * Implemented by the theme\n */\n/* Title\n ========================================================================== */\n.uk-card-title {\n  font-size: 1.5rem;\n  line-height: 1.4;\n}\n\n/* Badge\n ========================================================================== */\n.uk-card-badge {\n  position: absolute;\n  top: 30px;\n  right: 30px;\n  z-index: 1;\n}\n\n/*\n * Remove margin from adjacent element\n */\n.uk-card-badge:first-child + * {\n  margin-top: 0;\n}\n\n/* Hover modifier\n ========================================================================== */\n.uk-card-hover:not(.uk-card-default):not(.uk-card-primary):not(.uk-card-secondary):hover {\n  background: #fff;\n  box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);\n}\n\n/* Style modifiers\n ========================================================================== */\n/*\n * Default\n * Note: Header and Footer are only implemented for the default style\n */\n.uk-card-default {\n  background: #fff;\n  color: #666;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n}\n\n.uk-card-default .uk-card-title {\n  color: #333;\n}\n\n.uk-card-default.uk-card-hover:hover {\n  background-color: #fff;\n  box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);\n}\n\n.uk-card-default .uk-card-header {\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.uk-card-default .uk-card-footer {\n  border-top: 1px solid #e5e5e5;\n}\n\n/*\n * Primary\n */\n.uk-card-primary {\n  background: #1e87f0;\n  color: #fff;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n}\n\n.uk-card-primary .uk-card-title {\n  color: #fff;\n}\n\n.uk-card-primary.uk-card-hover:hover {\n  background-color: #1e87f0;\n  box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);\n}\n\n/*\n * Secondary\n */\n.uk-card-secondary {\n  background: #222;\n  color: #fff;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n}\n\n.uk-card-secondary .uk-card-title {\n  color: #fff;\n}\n\n.uk-card-secondary.uk-card-hover:hover {\n  background-color: #222;\n  box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);\n}\n\n/* Size modifier\n ========================================================================== */\n/*\n * Small\n */\n.uk-card-small.uk-card-body,\n.uk-card-small .uk-card-body {\n  padding: 20px 20px;\n}\n\n.uk-card-small .uk-card-header {\n  padding: 13px 20px;\n}\n\n.uk-card-small .uk-card-footer {\n  padding: 13px 20px;\n}\n\n/*\n * Large\n */\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  .uk-card-large.uk-card-body,\n.uk-card-large .uk-card-body {\n    padding: 70px 70px;\n  }\n\n  .uk-card-large .uk-card-header {\n    padding: 35px 70px;\n  }\n\n  .uk-card-large .uk-card-footer {\n    padding: 35px 70px;\n  }\n}\n/*\n * Default\n */\n.uk-card-body > .uk-nav-default {\n  margin-left: -30px;\n  margin-right: -30px;\n}\n\n.uk-card-body > .uk-nav-default:only-child {\n  margin-top: -15px;\n  margin-bottom: -15px;\n}\n\n.uk-card-body .uk-nav-default > li > a,\n.uk-card-body .uk-nav-default .uk-nav-header,\n.uk-card-body .uk-nav-default .uk-nav-divider {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.uk-card-body .uk-nav-default .uk-nav-sub {\n  padding-left: 45px;\n}\n\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  .uk-card-body > .uk-nav-default {\n    margin-left: -40px;\n    margin-right: -40px;\n  }\n\n  .uk-card-body > .uk-nav-default:only-child {\n    margin-top: -25px;\n    margin-bottom: -25px;\n  }\n\n  .uk-card-body .uk-nav-default > li > a,\n.uk-card-body .uk-nav-default .uk-nav-header,\n.uk-card-body .uk-nav-default .uk-nav-divider {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n\n  .uk-card-body .uk-nav-default .uk-nav-sub {\n    padding-left: 55px;\n  }\n}\n/*\n * Small\n */\n.uk-card-small > .uk-nav-default {\n  margin-left: -20px;\n  margin-right: -20px;\n}\n\n.uk-card-small > .uk-nav-default:only-child {\n  margin-top: -5px;\n  margin-bottom: -5px;\n}\n\n.uk-card-small .uk-nav-default > li > a,\n.uk-card-small .uk-nav-default .uk-nav-header,\n.uk-card-small .uk-nav-default .uk-nav-divider {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.uk-card-small .uk-nav-default .uk-nav-sub {\n  padding-left: 35px;\n}\n\n/*\n * Large\n */\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  .uk-card-large > .uk-nav-default {\n    margin: 0;\n  }\n\n  .uk-card-large > .uk-nav-default:only-child {\n    margin: 0;\n  }\n\n  .uk-card-large .uk-nav-default > li > a,\n.uk-card-large .uk-nav-default .uk-nav-header,\n.uk-card-large .uk-nav-default .uk-nav-divider {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .uk-card-large .uk-nav-default .uk-nav-sub {\n    padding-left: 15px;\n  }\n}\n/* ========================================================================\n   Component: Close\n ========================================================================== */\n/*\n * Adopts `uk-icon`\n */\n.uk-close {\n  color: #999;\n  transition: 0.1s ease-in-out;\n  transition-property: color, opacity;\n}\n\n/* Hover + Focus */\n.uk-close:hover,\n.uk-close:focus {\n  color: #666;\n  outline: none;\n}\n\n/* ========================================================================\n   Component: Spinner\n ========================================================================== */\n/*\n * Adopts `uk-icon`\n */\n/* SVG\n ========================================================================== */\n.uk-spinner > * {\n  -webkit-animation: uk-spinner-rotate 1.4s linear infinite;\n          animation: uk-spinner-rotate 1.4s linear infinite;\n}\n\n@-webkit-keyframes uk-spinner-rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(270deg);\n  }\n}\n\n@keyframes uk-spinner-rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(270deg);\n  }\n}\n/*\n * Circle\n */\n.uk-spinner > * > * {\n  stroke-dasharray: 88px;\n  stroke-dashoffset: 0;\n  transform-origin: center;\n  -webkit-animation: uk-spinner-dash 1.4s ease-in-out infinite;\n          animation: uk-spinner-dash 1.4s ease-in-out infinite;\n  stroke-width: 1;\n  stroke-linecap: round;\n}\n\n@-webkit-keyframes uk-spinner-dash {\n  0% {\n    stroke-dashoffset: 88px;\n  }\n  50% {\n    stroke-dashoffset: 22px;\n    transform: rotate(135deg);\n  }\n  100% {\n    stroke-dashoffset: 88px;\n    transform: rotate(450deg);\n  }\n}\n\n@keyframes uk-spinner-dash {\n  0% {\n    stroke-dashoffset: 88px;\n  }\n  50% {\n    stroke-dashoffset: 22px;\n    transform: rotate(135deg);\n  }\n  100% {\n    stroke-dashoffset: 88px;\n    transform: rotate(450deg);\n  }\n}\n/* ========================================================================\n   Component: Totop\n ========================================================================== */\n/*\n * Addopts `uk-icon`\n */\n.uk-totop {\n  padding: 5px;\n  color: #999;\n  transition: color 0.1s ease-in-out;\n}\n\n/* Hover + Focus */\n.uk-totop:hover,\n.uk-totop:focus {\n  color: #666;\n  outline: none;\n}\n\n/* OnClick */\n.uk-totop:active {\n  color: #333;\n}\n\n/* ========================================================================\n   Component: Marker\n ========================================================================== */\n/*\n * Addopts `uk-icon`\n */\n.uk-marker {\n  padding: 5px;\n  background: #222;\n  color: #fff;\n  border-radius: 500px;\n}\n\n/* Hover + Focus */\n.uk-marker:hover,\n.uk-marker:focus {\n  color: #fff;\n  outline: none;\n}\n\n/* ========================================================================\n   Component: Alert\n ========================================================================== */\n.uk-alert {\n  position: relative;\n  margin-bottom: 20px;\n  padding: 15px 29px 15px 15px;\n  background: #f8f8f8;\n  color: #666;\n}\n\n/* Add margin if adjacent element */\n* + .uk-alert {\n  margin-top: 20px;\n}\n\n/*\n * Remove margin from the last-child\n */\n.uk-alert > :last-child {\n  margin-bottom: 0;\n}\n\n/* Close\n * Adopts `uk-close`\n ========================================================================== */\n.uk-alert-close {\n  position: absolute;\n  top: 20px;\n  right: 15px;\n  color: inherit;\n  opacity: 0.4;\n}\n\n/*\n * Remove margin from adjacent element\n */\n.uk-alert-close:first-child + * {\n  margin-top: 0;\n}\n\n/*\n * Hover + Focus\n */\n.uk-alert-close:hover,\n.uk-alert-close:focus {\n  color: inherit;\n  opacity: 0.8;\n}\n\n/* Style modifiers\n ========================================================================== */\n/*\n * Primary\n */\n.uk-alert-primary {\n  background: #d8eafc;\n  color: #1e87f0;\n}\n\n/*\n * Success\n */\n.uk-alert-success {\n  background: #edfbf6;\n  color: #32d296;\n}\n\n/*\n * Warning\n */\n.uk-alert-warning {\n  background: #fef5ee;\n  color: #faa05a;\n}\n\n/*\n * Danger\n */\n.uk-alert-danger {\n  background: #fef4f6;\n  color: #f0506e;\n}\n\n/*\n * Content\n */\n.uk-alert h1,\n.uk-alert h2,\n.uk-alert h3,\n.uk-alert h4,\n.uk-alert h5,\n.uk-alert h6 {\n  color: inherit;\n}\n\n.uk-alert a:not([class]) {\n  color: inherit;\n  text-decoration: underline;\n}\n\n.uk-alert a:not([class]):hover {\n  color: inherit;\n  text-decoration: underline;\n}\n\n/* ========================================================================\n   Component: Badge\n ========================================================================== */\n/*\n * 1. Style\n * 2. Center child vertically and horizontally\n */\n.uk-badge {\n  box-sizing: border-box;\n  min-width: 22px;\n  height: 22px;\n  padding: 0 5px;\n  border-radius: 500px;\n  vertical-align: middle;\n  /* 1 */\n  background: #1e87f0;\n  color: #fff;\n  font-size: 0.875rem;\n  /* 2 */\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/*\n * Required for `a`\n */\n.uk-badge:hover,\n.uk-badge:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: none;\n}\n\n/* ========================================================================\n   Component: Label\n ========================================================================== */\n.uk-label {\n  display: inline-block;\n  padding: 0 10px;\n  background: #1e87f0;\n  line-height: 1.5;\n  font-size: 0.875rem;\n  color: #fff;\n  vertical-align: middle;\n  white-space: nowrap;\n  border-radius: 2px;\n  text-transform: uppercase;\n}\n\n/* Color modifiers\n ========================================================================== */\n/*\n * Success\n */\n.uk-label-success {\n  background-color: #32d296;\n  color: #fff;\n}\n\n/*\n * Warning\n */\n.uk-label-warning {\n  background-color: #faa05a;\n  color: #fff;\n}\n\n/*\n * Danger\n */\n.uk-label-danger {\n  background-color: #f0506e;\n  color: #fff;\n}\n\n/* ========================================================================\n   Component: Overlay\n ========================================================================== */\n.uk-overlay {\n  padding: 30px 30px;\n}\n\n/*\n * Remove margin from the last-child\n */\n.uk-overlay > :last-child {\n  margin-bottom: 0;\n}\n\n/* Icon\n ========================================================================== */\n/* Style modifiers\n ========================================================================== */\n/*\n * Default\n */\n.uk-overlay-default {\n  background: rgba(255, 255, 255, 0.8);\n}\n\n/*\n * Primary\n */\n.uk-overlay-primary {\n  background: rgba(34, 34, 34, 0.8);\n}\n\n/* ========================================================================\n   Component: Article\n ========================================================================== */\n/*\n * Micro clearfix\n */\n.uk-article::before,\n.uk-article::after {\n  content: \"\";\n  display: table;\n}\n\n.uk-article::after {\n  clear: both;\n}\n\n/*\n * Remove margin from the last-child\n */\n.uk-article > :last-child {\n  margin-bottom: 0;\n}\n\n/* Adjacent sibling\n ========================================================================== */\n.uk-article + .uk-article {\n  margin-top: 70px;\n}\n\n/* Title\n ========================================================================== */\n.uk-article-title {\n  font-size: 2.23125rem;\n  line-height: 1.2;\n}\n\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-article-title {\n    font-size: 2.625rem;\n  }\n}\n/* Meta\n ========================================================================== */\n.uk-article-meta {\n  font-size: 0.875rem;\n  line-height: 1.4;\n  color: #999;\n}\n.uk-article-meta a {\n  color: #999;\n}\n.uk-article-meta a:hover {\n  color: #666;\n  text-decoration: none;\n}\n\n/* ========================================================================\n   Component: Comment\n ========================================================================== */\n/* Sections\n ========================================================================== */\n.uk-comment-body {\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n}\n\n.uk-comment-header {\n  margin-bottom: 20px;\n}\n\n/*\n * Micro clearfix\n */\n.uk-comment-body::before,\n.uk-comment-body::after,\n.uk-comment-header::before,\n.uk-comment-header::after {\n  content: \"\";\n  display: table;\n}\n\n.uk-comment-body::after,\n.uk-comment-header::after {\n  clear: both;\n}\n\n/*\n * Remove margin from the last-child\n */\n.uk-comment-body > :last-child,\n.uk-comment-header > :last-child {\n  margin-bottom: 0;\n}\n\n/* Title\n ========================================================================== */\n.uk-comment-title {\n  font-size: 1.25rem;\n  line-height: 1.4;\n}\n\n/* Meta\n ========================================================================== */\n.uk-comment-meta {\n  font-size: 0.875rem;\n  line-height: 1.4;\n  color: #999;\n}\n\n/* Avatar\n ========================================================================== */\n/* List\n ========================================================================== */\n.uk-comment-list {\n  padding: 0;\n  list-style: none;\n}\n\n/* Adjacent siblings */\n.uk-comment-list > :nth-child(n+2) {\n  margin-top: 70px;\n}\n\n/*\n * Sublists\n * Note: General sibling selector allows reply block between comment and sublist\n */\n.uk-comment-list .uk-comment ~ ul {\n  margin: 70px 0 0 0;\n  padding-left: 30px;\n  list-style: none;\n}\n\n/* Tablet and bigger */\n@media (min-width: 960px) {\n  .uk-comment-list .uk-comment ~ ul {\n    padding-left: 100px;\n  }\n}\n/* Adjacent siblings */\n.uk-comment-list .uk-comment ~ ul > :nth-child(n+2) {\n  margin-top: 70px;\n}\n\n/* Style modifier\n ========================================================================== */\n.uk-comment-primary {\n  padding: 30px;\n  background-color: #f8f8f8;\n}\n\n/* ========================================================================\n   Component: Search\n ========================================================================== */\n/*\n * 1. Container fits its content\n * 2. Create position context\n * 3. Prevent content overflow\n * 4. Reset `form`\n */\n.uk-search {\n  /* 1 */\n  display: inline-block;\n  /* 2 */\n  position: relative;\n  /* 3 */\n  max-width: 100%;\n  /* 4 */\n  margin: 0;\n}\n\n/* Input\n ========================================================================== */\n/*\n * Remove the inner padding and cancel buttons in Chrome on OS X and Safari on OS X.\n */\n.uk-search-input::-webkit-search-cancel-button,\n.uk-search-input::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n * Removes placeholder transparency in Firefox.\n */\n.uk-search-input::-moz-placeholder {\n  opacity: 1;\n}\n\n/*\n * 1. Define consistent box sizing.\n * 2. Address margins set differently in Firefox/IE and Chrome/Safari/Opera.\n * 3. Remove `border-radius` in iOS.\n * 4. Change font properties to `inherit` in all browsers\n * 5. Show the overflow in Edge.\n * 6. Remove default style in iOS.\n * 7. Vertical alignment\n * 8. Take the full container width\n * 9. Style\n */\n.uk-search-input {\n  /* 1 */\n  box-sizing: border-box;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  border-radius: 0;\n  /* 4 */\n  font: inherit;\n  /* 5 */\n  overflow: visible;\n  /* 6 */\n  -webkit-appearance: none;\n  /* 7 */\n  vertical-align: middle;\n  /* 8 */\n  width: 100%;\n  /* 9 */\n  border: none;\n  color: #666;\n}\n\n.uk-search-input:focus {\n  outline: none;\n}\n\n/* Placeholder */\n.uk-search-input:-ms-input-placeholder {\n  color: #999 !important;\n}\n\n.uk-search-input::-webkit-input-placeholder {\n  color: #999;\n}\n\n.uk-search-input::-moz-placeholder {\n  color: #999;\n}\n\n.uk-search-input::-ms-input-placeholder {\n  color: #999;\n}\n\n.uk-search-input::placeholder {\n  color: #999;\n}\n\n/* Icon (Adopts `uk-icon`)\n ========================================================================== */\n/*\n * Remove default focus style\n */\n.uk-search-icon:focus {\n  outline: none;\n}\n\n/*\n * Position above input\n * 1. Set position\n * 2. Center icon vertically and horizontally\n * 3. Style\n */\n.uk-search .uk-search-icon {\n  /* 1 */\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  /* 2 */\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  /* 3 */\n  color: #999;\n}\n\n/*\n * Required for `a`.\n */\n.uk-search .uk-search-icon:hover {\n  color: #999;\n}\n\n/*\n * Make `input` element clickable through icon, e.g. if it's a `span`\n */\n.uk-search .uk-search-icon:not(a):not(button):not(input) {\n  pointer-events: none;\n}\n\n/*\n * Position modifier\n */\n.uk-search .uk-search-icon-flip {\n  right: 0;\n  left: auto;\n}\n\n/* Default modifier\n ========================================================================== */\n.uk-search-default {\n  width: 180px;\n}\n\n/*\n * Input\n */\n.uk-search-default .uk-search-input {\n  height: 40px;\n  padding-left: 6px;\n  padding-right: 6px;\n  background: transparent;\n  border: 1px solid #e5e5e5;\n}\n\n/* Focus */\n.uk-search-default .uk-search-input:focus {\n  background-color: transparent;\n}\n\n/*\n * Icon\n */\n.uk-search-default .uk-search-icon {\n  width: 40px;\n}\n\n.uk-search-default .uk-search-icon:not(.uk-search-icon-flip) ~ .uk-search-input {\n  padding-left: 40px;\n}\n\n.uk-search-default .uk-search-icon-flip ~ .uk-search-input {\n  padding-right: 40px;\n}\n\n/* Navbar modifier\n ========================================================================== */\n.uk-search-navbar {\n  width: 400px;\n}\n\n/*\n * Input\n */\n.uk-search-navbar .uk-search-input {\n  height: 40px;\n  background: transparent;\n  font-size: 1.5rem;\n}\n\n/*\n * Icon\n */\n.uk-search-navbar .uk-search-icon {\n  width: 40px;\n}\n\n.uk-search-navbar .uk-search-icon:not(.uk-search-icon-flip) ~ .uk-search-input {\n  padding-left: 40px;\n}\n\n.uk-search-navbar .uk-search-icon-flip ~ .uk-search-input {\n  padding-right: 40px;\n}\n\n/* Large modifier\n ========================================================================== */\n.uk-search-large {\n  width: 500px;\n}\n\n/*\n * Input\n */\n.uk-search-large .uk-search-input {\n  height: 80px;\n  background: transparent;\n  font-size: 2.625rem;\n}\n\n/*\n * Icon\n */\n.uk-search-large .uk-search-icon {\n  width: 80px;\n}\n\n.uk-search-large .uk-search-icon:not(.uk-search-icon-flip) ~ .uk-search-input {\n  padding-left: 80px;\n}\n\n.uk-search-large .uk-search-icon-flip ~ .uk-search-input {\n  padding-right: 80px;\n}\n\n/* Toggle\n ========================================================================== */\n.uk-search-toggle {\n  color: #999;\n}\n\n/* Hover + Focus */\n.uk-search-toggle:hover,\n.uk-search-toggle:focus {\n  color: #666;\n}\n\n/* ========================================================================\n   Component: Nav\n ========================================================================== */\n/*\n * Reset\n * 1. Prepare lists\n * 2. Prepare links\n * 3. Remove default focus style\n */\n/* 1 */\n.uk-nav,\n.uk-nav ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n/* 2 */\n.uk-nav li > a {\n  display: block;\n  text-decoration: none;\n}\n\n/* 3 */\n.uk-nav li > a:focus {\n  outline: none;\n}\n\n/*\n * Items\n * Must target `a` elements to exclude other elements (e.g. lists)\n */\n.uk-nav > li > a {\n  padding: 5px 0;\n}\n\n/* Sublists\n ========================================================================== */\n/*\n * Level 2\n * `ul` needed for higher specificity to override padding\n */\nul.uk-nav-sub {\n  padding: 5px 0 5px 15px;\n}\n\n/*\n * Level 3 and deeper\n */\n.uk-nav-sub ul {\n  padding-left: 15px;\n}\n\n/*\n * Items\n */\n.uk-nav-sub a {\n  padding: 2px 0;\n}\n\n/* Parent icon modifier\n ========================================================================== */\n.uk-nav-parent-icon > .uk-parent > a::after {\n  content: \"\";\n  width: 1.5em;\n  height: 1.5em;\n  float: right;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%221.1%22%20points%3D%2210%201%204%207%2010%2013%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n\n.uk-nav-parent-icon > .uk-parent.uk-open > a::after {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%221.1%22%20points%3D%221%204%207%2010%2013%204%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\n/* Header\n ========================================================================== */\n.uk-nav-header {\n  padding: 5px 0;\n  text-transform: uppercase;\n  font-size: 0.875rem;\n}\n\n.uk-nav-header:not(:first-child) {\n  margin-top: 20px;\n}\n\n/* Divider\n ========================================================================== */\n.uk-nav-divider {\n  margin: 5px 0;\n}\n\n/* Default modifier\n ========================================================================== */\n.uk-nav-default {\n  font-size: 0.875rem;\n}\n\n/*\n * Items\n */\n.uk-nav-default > li > a {\n  color: #999;\n}\n\n/* Hover + Focus */\n.uk-nav-default > li > a:hover,\n.uk-nav-default > li > a:focus {\n  color: #666;\n}\n\n/* Active */\n.uk-nav-default > li.uk-active > a {\n  color: #333;\n}\n\n/*\n * Header\n */\n.uk-nav-default .uk-nav-header {\n  color: #333;\n}\n\n/*\n * Divider\n */\n.uk-nav-default .uk-nav-divider {\n  border-top: 1px solid #e5e5e5;\n}\n\n/*\n * Sublists\n */\n.uk-nav-default .uk-nav-sub a {\n  color: #999;\n}\n\n.uk-nav-default .uk-nav-sub a:hover,\n.uk-nav-default .uk-nav-sub a:focus {\n  color: #666;\n}\n\n.uk-nav-default .uk-nav-sub li.uk-active > a {\n  color: #333;\n}\n\n/* Primary modifier\n ========================================================================== */\n/*\n * Items\n */\n.uk-nav-primary > li > a {\n  font-size: 1.5rem;\n  line-height: 1.5;\n  color: #999;\n}\n\n/* Hover + Focus */\n.uk-nav-primary > li > a:hover,\n.uk-nav-primary > li > a:focus {\n  color: #666;\n}\n\n/* Active */\n.uk-nav-primary > li.uk-active > a {\n  color: #333;\n}\n\n/*\n * Header\n */\n.uk-nav-primary .uk-nav-header {\n  color: #333;\n}\n\n/*\n * Divider\n */\n.uk-nav-primary .uk-nav-divider {\n  border-top: 1px solid #e5e5e5;\n}\n\n/*\n * Sublists\n */\n.uk-nav-primary .uk-nav-sub a {\n  color: #999;\n}\n\n.uk-nav-primary .uk-nav-sub a:hover,\n.uk-nav-primary .uk-nav-sub a:focus {\n  color: #666;\n}\n\n.uk-nav-primary .uk-nav-sub li.uk-active > a {\n  color: #333;\n}\n\n/* Alignment modifier\n ========================================================================== */\n.uk-nav-center {\n  text-align: center;\n}\n\n/* Sublists */\n.uk-nav-center .uk-nav-sub,\n.uk-nav-center .uk-nav-sub ul {\n  padding-left: 0;\n}\n\n/* Parent icon modifier  */\n.uk-nav-center.uk-nav-parent-icon > .uk-parent > a::after {\n  position: absolute;\n}\n\n/* ========================================================================\n   Component: Navbar\n ========================================================================== */\n/*\n * 1. Create position context to center navbar group\n */\n.uk-navbar {\n  display: flex;\n  /* 1 */\n  position: relative;\n}\n\n/* Container\n ========================================================================== */\n.uk-navbar-container:not(.uk-navbar-transparent) {\n  background: #f8f8f8;\n}\n\n/*\n * Remove pseudo elements created by micro clearfix as precaution (if Container component is used)\n */\n.uk-navbar-container > ::before,\n.uk-navbar-container > ::after {\n  display: none !important;\n}\n\n/* Groups\n ========================================================================== */\n/*\n * 1. Align navs and items vertically if they have a different height\n * 2. Note: IE 11 requires an extra `div` which affects the center selector\n */\n.uk-navbar-left,\n.uk-navbar-right,\n.uk-navbar-center,\n.uk-navbar-center-left > *,\n.uk-navbar-center-right > * {\n  display: flex;\n  /* 1 */\n  align-items: center;\n}\n\n/*\n * Horizontal alignment\n * 1. Create position context for centered navbar with sub groups (left/right)\n * 2. Fix text wrapping if content is larger than 50% of the container.\n * 3. Needed for dropdowns because a new position context is created\n *    `z-index` must be smaller than off-canvas\n * 4. Align sub groups for centered navbar\n */\n.uk-navbar-right {\n  margin-left: auto;\n}\n\n.uk-navbar-center:only-child {\n  margin-left: auto;\n  margin-right: auto;\n  /* 1 */\n  position: relative;\n}\n\n.uk-navbar-center:not(:only-child) {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  /* 2 */\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  box-sizing: border-box;\n  /* 3 */\n  z-index: 990;\n}\n\n/* 4 */\n.uk-navbar-center-left,\n.uk-navbar-center-right {\n  position: absolute;\n  top: 0;\n}\n\n.uk-navbar-center-left {\n  right: 100%;\n}\n\n.uk-navbar-center-right {\n  left: 100%;\n}\n\n[class*=uk-navbar-center-] {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  box-sizing: border-box;\n}\n\n/* Nav\n ========================================================================== */\n/*\n * 1. Reset list\n */\n.uk-navbar-nav {\n  display: flex;\n  /* 1 */\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n/*\n * Allow items to wrap into the next line\n * Only not `absolute` positioned groups\n */\n.uk-navbar-left,\n.uk-navbar-right,\n.uk-navbar-center:only-child {\n  flex-wrap: wrap;\n}\n\n/*\n * Items\n * 1. Center content vertically and horizontally\n * 2. Dimensions\n * 3. Style\n * 4. Required for `a`\n */\n.uk-navbar-nav > li > a,\n.uk-navbar-item,\n.uk-navbar-toggle {\n  /* 1 */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* 2 */\n  box-sizing: border-box;\n  min-height: 80px;\n  padding: 0 15px;\n  /* 3 */\n  font-size: 0.875rem;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  /* 4 */\n  text-decoration: none;\n}\n\n/*\n * Nav items\n */\n.uk-navbar-nav > li > a {\n  color: #999;\n  text-transform: uppercase;\n  transition: 0.1s ease-in-out;\n  transition-property: color, background-color;\n}\n\n/*\n * Hover\n * Apply hover style also to focus state and if dropdown is opened\n */\n.uk-navbar-nav > li:hover > a,\n.uk-navbar-nav > li > a:focus,\n.uk-navbar-nav > li > a.uk-open {\n  color: #666;\n  outline: none;\n}\n\n/* OnClick */\n.uk-navbar-nav > li > a:active {\n  color: #333;\n}\n\n/* Active */\n.uk-navbar-nav > li.uk-active > a {\n  color: #333;\n}\n\n/* Item\n ========================================================================== */\n.uk-navbar-item {\n  color: #666;\n}\n\n/* Toggle\n ========================================================================== */\n.uk-navbar-toggle {\n  color: #999;\n}\n\n.uk-navbar-toggle:hover,\n.uk-navbar-toggle:focus,\n.uk-navbar-toggle.uk-open {\n  color: #666;\n  outline: none;\n  text-decoration: none;\n}\n\n/*\n * Icon\n * Adopts `uk-icon`\n */\n/* Hover + Focus */\n/* Subtitle\n ========================================================================== */\n.uk-navbar-subtitle {\n  font-size: 0.875rem;\n}\n\n/* Style modifiers\n ========================================================================== */\n/* Dropdown\n ========================================================================== */\n/*\n * Adopts `uk-dropdown`\n * 1. Hide by default\n * 2. Set position\n * 3. Set a default width\n * 4. Style\n */\n.uk-navbar-dropdown {\n  /* 1 */\n  display: none;\n  /* 2 */\n  position: absolute;\n  z-index: 1020;\n  /* 3 */\n  box-sizing: border-box;\n  width: 200px;\n  /* 4 */\n  padding: 25px;\n  background: #fff;\n  color: #666;\n  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);\n}\n\n/* Show */\n.uk-navbar-dropdown.uk-open {\n  display: block;\n}\n\n/*\n * Direction / Alignment modifiers\n */\n/* Direction */\n[class*=uk-navbar-dropdown-top] {\n  margin-top: -15px;\n}\n\n[class*=uk-navbar-dropdown-bottom] {\n  margin-top: 15px;\n}\n\n[class*=uk-navbar-dropdown-left] {\n  margin-left: -15px;\n}\n\n[class*=uk-navbar-dropdown-right] {\n  margin-left: 15px;\n}\n\n/*\n * Grid\n * Adopts `uk-grid`\n */\n/* Gutter Horizontal */\n.uk-navbar-dropdown-grid {\n  margin-left: -50px;\n}\n\n.uk-navbar-dropdown-grid > * {\n  padding-left: 50px;\n}\n\n/* Gutter Vertical */\n.uk-navbar-dropdown-grid > .uk-grid-margin {\n  margin-top: 50px;\n}\n\n/* Stack */\n.uk-navbar-dropdown-stack .uk-navbar-dropdown-grid > * {\n  width: 100% !important;\n}\n\n/*\n * Width modifier\n */\n.uk-navbar-dropdown-width-2:not(.uk-navbar-dropdown-stack) {\n  width: 400px;\n}\n\n.uk-navbar-dropdown-width-3:not(.uk-navbar-dropdown-stack) {\n  width: 600px;\n}\n\n.uk-navbar-dropdown-width-4:not(.uk-navbar-dropdown-stack) {\n  width: 800px;\n}\n\n.uk-navbar-dropdown-width-5:not(.uk-navbar-dropdown-stack) {\n  width: 1000px;\n}\n\n/*\n * Dropbar modifier\n */\n.uk-navbar-dropdown-dropbar {\n  margin-top: 0;\n  margin-bottom: 0;\n  box-shadow: none;\n}\n\n/* Dropdown Nav\n * Adopts `uk-nav`\n ========================================================================== */\n.uk-navbar-dropdown-nav {\n  font-size: 0.875rem;\n}\n\n/*\n * Items\n */\n.uk-navbar-dropdown-nav > li > a {\n  color: #999;\n}\n\n/* Hover + Focus */\n.uk-navbar-dropdown-nav > li > a:hover,\n.uk-navbar-dropdown-nav > li > a:focus {\n  color: #666;\n}\n\n/* Active */\n.uk-navbar-dropdown-nav > li.uk-active > a {\n  color: #333;\n}\n\n/*\n * Header\n */\n.uk-navbar-dropdown-nav .uk-nav-header {\n  color: #333;\n}\n\n/*\n * Divider\n */\n.uk-navbar-dropdown-nav .uk-nav-divider {\n  border-top: 1px solid #e5e5e5;\n}\n\n/*\n * Sublists\n */\n.uk-navbar-dropdown-nav .uk-nav-sub a {\n  color: #999;\n}\n\n.uk-navbar-dropdown-nav .uk-nav-sub a:hover,\n.uk-navbar-dropdown-nav .uk-nav-sub a:focus {\n  color: #666;\n}\n\n.uk-navbar-dropdown-nav .uk-nav-sub li.uk-active > a {\n  color: #333;\n}\n\n/* Dropbar\n ========================================================================== */\n.uk-navbar-dropbar {\n  background: #fff;\n}\n\n/*\n * Slide modifier\n */\n.uk-navbar-dropbar-slide {\n  position: absolute;\n  z-index: 980;\n  left: 0;\n  right: 0;\n  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.05);\n}\n\n/*\n * Navbar\n */\n.uk-navbar-container > .uk-container .uk-navbar-left {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.uk-navbar-container > .uk-container .uk-navbar-right {\n  margin-right: -15px;\n}\n\n/*\n * Grid Divider\n */\n.uk-navbar-dropdown-grid > * {\n  position: relative;\n}\n\n.uk-navbar-dropdown-grid > :not(.uk-first-column)::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 25px;\n  border-left: 1px solid #e5e5e5;\n}\n\n/* Vertical */\n.uk-navbar-dropdown-grid.uk-grid-stack > .uk-grid-margin::before {\n  content: \"\";\n  position: absolute;\n  top: -25px;\n  left: 50px;\n  right: 0;\n  border-top: 1px solid #e5e5e5;\n}\n\n/* ========================================================================\n   Component: Subnav\n ========================================================================== */\n/*\n * 1. Allow items to wrap into the next line\n * 2. Gutter\n * 3. Reset list\n */\n.uk-subnav {\n  display: flex;\n  /* 1 */\n  flex-wrap: wrap;\n  /* 2 */\n  margin-left: -20px;\n  /* 3 */\n  padding: 0;\n  list-style: none;\n}\n\n/*\n * 1. Space is allocated solely based on content dimensions: 0 0 auto\n * 2. Gutter\n * 3. Create position context for dropdowns\n */\n.uk-subnav > * {\n  /* 1 */\n  flex: none;\n  /* 2 */\n  padding-left: 20px;\n  /* 3 */\n  position: relative;\n}\n\n/* Items\n ========================================================================== */\n/*\n * Items must target `a` elements to exclude other elements (e.g. dropdowns)\n * Using `:first-child` instead of `a` to support `span` elements for text\n * 1. Prevent gap if child element is `inline-block`, e.g. an icon\n * 2. Style\n */\n.uk-subnav > * > :first-child {\n  /* 1 */\n  display: block;\n  /* 2 */\n  color: #999;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  transition: 0.1s ease-in-out;\n  transition-property: color, background-color;\n}\n\n/* Hover + Focus */\n.uk-subnav > * > a:hover,\n.uk-subnav > * > a:focus {\n  color: #666;\n  text-decoration: none;\n  outline: none;\n}\n\n/* Active */\n.uk-subnav > .uk-active > a {\n  color: #333;\n}\n\n/* Divider modifier\n ========================================================================== */\n/*\n * 1. Align items and divider vertically\n */\n.uk-subnav-divider > * {\n  /* 1 */\n  display: flex;\n  align-items: center;\n}\n\n/*\n * Divider\n * `nth-child` makes it also work without JS if it's only one row\n */\n.uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before {\n  content: \"\";\n  height: 1.5em;\n  margin-left: 0px;\n  margin-right: 20px;\n  border-left: 1px solid #e5e5e5;\n}\n\n/* Pill modifier\n ========================================================================== */\n.uk-subnav-pill > * > :first-child {\n  padding: 5px 10px;\n  background: transparent;\n  color: #999;\n}\n\n/* Hover + Focus */\n.uk-subnav-pill > * > a:hover,\n.uk-subnav-pill > * > a:focus {\n  background-color: #f8f8f8;\n  color: #666;\n}\n\n/* OnClick */\n.uk-subnav-pill > * > a:active {\n  background-color: #f8f8f8;\n  color: #666;\n}\n\n/* Active */\n.uk-subnav-pill > .uk-active > a {\n  background-color: #1e87f0;\n  color: #fff;\n}\n\n/* Disabled\n * The same for all style modifiers\n ========================================================================== */\n.uk-subnav > .uk-disabled > a {\n  color: #999;\n}\n\n/* ========================================================================\n   Component: Breadcrumb\n ========================================================================== */\n/*\n * 1. Allow items to wrap into the next line\n * 2. Reset list\n */\n.uk-breadcrumb {\n  display: flex;\n  /* 1 */\n  flex-wrap: wrap;\n  /* 2 */\n  padding: 0;\n  list-style: none;\n}\n\n/*\n * Space is allocated solely based on content dimensions: 0 0 auto\n */\n.uk-breadcrumb > * {\n  flex: none;\n}\n\n/* Items\n ========================================================================== */\n.uk-breadcrumb > * > * {\n  display: inline-block;\n  font-size: 0.875rem;\n  color: #999;\n}\n\n/* Hover + Focus */\n.uk-breadcrumb > * > :hover,\n.uk-breadcrumb > * > :focus {\n  color: #666;\n  text-decoration: none;\n}\n\n/* Disabled */\n/* Active */\n.uk-breadcrumb > :last-child > * {\n  color: #666;\n}\n\n/*\n * Divider\n * `nth-child` makes it also work without JS if it's only one row\n */\n.uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before {\n  content: \"/\";\n  display: inline-block;\n  margin: 0 20px;\n  color: #999;\n}\n\n/* ========================================================================\n   Component: Pagination\n ========================================================================== */\n/*\n * 1. Allow items to wrap into the next line\n * 2. Gutter\n * 3. Reset list\n */\n.uk-pagination {\n  display: flex;\n  /* 1 */\n  flex-wrap: wrap;\n  /* 2 */\n  margin-left: -20px;\n  /* 3 */\n  padding: 0;\n  list-style: none;\n}\n\n/*\n * 1. Space is allocated solely based on content dimensions: 0 0 auto\n * 2. Gutter\n * 3. Create position context for dropdowns\n */\n.uk-pagination > * {\n  /* 1 */\n  flex: none;\n  /* 2 */\n  padding-left: 20px;\n  /* 3 */\n  position: relative;\n}\n\n/* Items\n ========================================================================== */\n/*\n * 1. Prevent gap if child element is `inline-block`, e.g. an icon\n * 2. Style\n */\n.uk-pagination > * > * {\n  /* 1 */\n  display: block;\n  /* 2 */\n  color: #999;\n  transition: color 0.1s ease-in-out;\n}\n\n/* Hover + Focus */\n.uk-pagination > * > :hover,\n.uk-pagination > * > :focus {\n  color: #666;\n  text-decoration: none;\n}\n\n/* Active */\n.uk-pagination > .uk-active > * {\n  color: #666;\n}\n\n/* Disabled */\n.uk-pagination > .uk-disabled > * {\n  color: #999;\n}\n\n/* ========================================================================\n   Component: Tab\n ========================================================================== */\n/*\n * 1. Allow items to wrap into the next line\n * 2. Gutter\n * 3. Reset list\n */\n.uk-tab {\n  display: flex;\n  /* 1 */\n  flex-wrap: wrap;\n  /* 2 */\n  margin-left: -20px;\n  /* 3 */\n  padding: 0;\n  list-style: none;\n  position: relative;\n}\n.uk-tab::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 20px;\n  right: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n/*\n * 1. Space is allocated solely based on content dimensions: 0 0 auto\n * 2. Gutter\n * 3. Create position context for dropdowns\n */\n.uk-tab > * {\n  /* 1 */\n  flex: none;\n  /* 2 */\n  padding-left: 20px;\n  /* 3 */\n  position: relative;\n}\n\n/* Items\n ========================================================================== */\n/*\n * Items must target `a` elements to exclude other elements (e.g. dropdowns)\n * 1. Center text if a width is set\n * 2. Style\n */\n.uk-tab > * > a {\n  /* 1 */\n  display: block;\n  text-align: center;\n  /* 2 */\n  padding: 5px 10px;\n  color: #999;\n  border-bottom: 1px solid transparent;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  transition: color 0.1s ease-in-out;\n}\n\n/* Hover + Focus */\n.uk-tab > * > a:hover,\n.uk-tab > * > a:focus {\n  color: #666;\n  text-decoration: none;\n}\n\n/* Active */\n.uk-tab > .uk-active > a {\n  color: #333;\n  border-color: #1e87f0;\n}\n\n/* Disabled */\n.uk-tab > .uk-disabled > a {\n  color: #999;\n}\n\n/* Position modifier\n ========================================================================== */\n/*\n * Bottom\n */\n.uk-tab-bottom::before {\n  top: 0;\n  bottom: auto;\n}\n\n.uk-tab-bottom > * > a {\n  border-top: 1px solid transparent;\n  border-bottom: none;\n}\n\n/*\n * Left + Right\n * 1. Reset Gutter\n */\n.uk-tab-left,\n.uk-tab-right {\n  flex-direction: column;\n  /* 1 */\n  margin-left: 0;\n}\n\n/* 1 */\n.uk-tab-left > *,\n.uk-tab-right > * {\n  padding-left: 0;\n}\n\n.uk-tab-left::before {\n  top: 0;\n  bottom: 0;\n  left: auto;\n  right: 0;\n  border-left: 1px solid #e5e5e5;\n  border-bottom: none;\n}\n\n.uk-tab-right::before {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: auto;\n  border-left: 1px solid #e5e5e5;\n  border-bottom: none;\n}\n\n.uk-tab-left > * > a {\n  text-align: left;\n  border-right: 1px solid transparent;\n  border-bottom: none;\n}\n\n.uk-tab-right > * > a {\n  text-align: left;\n  border-left: 1px solid transparent;\n  border-bottom: none;\n}\n\n.uk-tab .uk-dropdown {\n  margin-left: 30px;\n}\n\n/* ========================================================================\n   Component: Slidenav\n ========================================================================== */\n/*\n * Adopts `uk-icon`\n */\n.uk-slidenav {\n  padding: 5px 10px;\n  color: rgba(102, 102, 102, 0.5);\n  transition: color 0.1s ease-in-out;\n}\n\n/* Hover + Focus */\n.uk-slidenav:hover,\n.uk-slidenav:focus {\n  color: rgba(102, 102, 102, 0.9);\n  outline: none;\n}\n\n/* OnClick */\n.uk-slidenav:active {\n  color: rgba(102, 102, 102, 0.5);\n}\n\n/* Icon modifier\n ========================================================================== */\n/*\n * Previous\n */\n/*\n * Next\n */\n/* Size modifier\n ========================================================================== */\n.uk-slidenav-large {\n  padding: 10px 10px;\n}\n\n/* Container\n ========================================================================== */\n.uk-slidenav-container {\n  display: flex;\n}\n\n/* ========================================================================\n   Component: Dotnav\n ========================================================================== */\n/*\n * 1. Allow items to wrap into the next line\n * 2. Reset list\n * 3. Gutter\n */\n.uk-dotnav {\n  display: flex;\n  /* 1 */\n  flex-wrap: wrap;\n  /* 2 */\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  /* 3 */\n  margin-left: -12px;\n}\n\n/*\n * 1. Space is allocated solely based on content dimensions: 0 0 auto\n * 2. Gutter\n */\n.uk-dotnav > * {\n  /* 1 */\n  flex: none;\n  /* 2 */\n  padding-left: 12px;\n}\n\n/* Items\n ========================================================================== */\n/*\n * Items\n * 1. Hide text if present\n */\n.uk-dotnav > * > * {\n  display: block;\n  box-sizing: border-box;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: transparent;\n  /* 1 */\n  text-indent: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  border: 1px solid rgba(102, 102, 102, 0.4);\n  transition: 0.2s ease-in-out;\n  transition-property: background-color, border-color;\n}\n\n/* Hover + Focus */\n.uk-dotnav > * > :hover,\n.uk-dotnav > * > :focus {\n  background-color: rgba(102, 102, 102, 0.6);\n  outline: none;\n  border-color: transparent;\n}\n\n/* OnClick */\n.uk-dotnav > * > :active {\n  background-color: rgba(102, 102, 102, 0.2);\n  border-color: transparent;\n}\n\n/* Active */\n.uk-dotnav > .uk-active > * {\n  background-color: rgba(102, 102, 102, 0.6);\n  border-color: transparent;\n}\n\n/* Modifier: 'uk-dotnav-vertical'\n ========================================================================== */\n/*\n * 1. Change direction\n * 2. Gutter\n */\n.uk-dotnav-vertical {\n  /* 1 */\n  flex-direction: column;\n  /* 2 */\n  margin-left: 0;\n  margin-top: -12px;\n}\n\n/* 2 */\n.uk-dotnav-vertical > * {\n  padding-left: 0;\n  padding-top: 12px;\n}\n\n/* ========================================================================\n   Component: Thumbnav\n ========================================================================== */\n/*\n * 1. Allow items to wrap into the next line\n * 2. Reset list\n * 3. Gutter\n */\n.uk-thumbnav {\n  display: flex;\n  /* 1 */\n  flex-wrap: wrap;\n  /* 2 */\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  /* 3 */\n  margin-left: -15px;\n}\n\n/*\n * Space is allocated based on content dimensions, but shrinks: 0 1 auto\n * 1. Gutter\n */\n.uk-thumbnav > * {\n  /* 1 */\n  padding-left: 15px;\n}\n\n/* Items\n ========================================================================== */\n/*\n * Items\n */\n.uk-thumbnav > * > * {\n  display: inline-block;\n  position: relative;\n}\n.uk-thumbnav > * > *::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.4);\n  transition: background-color 0.1s ease-in-out;\n}\n\n/* Hover + Focus */\n.uk-thumbnav > * > :hover,\n.uk-thumbnav > * > :focus {\n  outline: none;\n}\n.uk-thumbnav > * > :hover::after,\n.uk-thumbnav > * > :focus::after {\n  background-color: transparent;\n}\n\n/* Active */\n.uk-thumbnav > .uk-active > *::after {\n  background-color: transparent;\n}\n\n/* Modifier: 'uk-thumbnav-vertical'\n ========================================================================== */\n/*\n * 1. Change direction\n * 2. Gutter\n */\n.uk-thumbnav-vertical {\n  /* 1 */\n  flex-direction: column;\n  /* 2 */\n  margin-left: 0;\n  margin-top: -15px;\n}\n\n/* 2 */\n.uk-thumbnav-vertical > * {\n  padding-left: 0;\n  padding-top: 15px;\n}\n\n/* ========================================================================\n   Component: Accordion\n ========================================================================== */\n.uk-accordion {\n  padding: 0;\n  list-style: none;\n}\n\n/* Item\n ========================================================================== */\n.uk-accordion > :nth-child(n+2) {\n  margin-top: 20px;\n}\n\n/* Title\n ========================================================================== */\n.uk-accordion-title {\n  display: block;\n  font-size: 1.25rem;\n  line-height: 1.4;\n  color: #333;\n  overflow: hidden;\n}\n.uk-accordion-title::before {\n  content: \"\";\n  width: 1.4em;\n  height: 1.4em;\n  margin-left: 10px;\n  float: right;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%20%2F%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%221%22%20height%3D%2213%22%20x%3D%226%22%20y%3D%220%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n.uk-open > .uk-accordion-title::before {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\n/* Hover + Focus */\n.uk-accordion-title:hover,\n.uk-accordion-title:focus {\n  color: #666;\n  text-decoration: none;\n  outline: none;\n}\n\n/* Content\n ========================================================================== */\n.uk-accordion-content {\n  margin-top: 20px;\n}\n\n/*\n * Micro clearfix\n */\n.uk-accordion-content::before,\n.uk-accordion-content::after {\n  content: \"\";\n  display: table;\n}\n\n.uk-accordion-content::after {\n  clear: both;\n}\n\n/*\n * Remove margin from the last-child\n */\n.uk-accordion-content > :last-child {\n  margin-bottom: 0;\n}\n\n/* ========================================================================\n   Component: Drop\n ========================================================================== */\n/*\n * 1. Hide by default\n * 2. Set position\n * 3. Set a default width\n */\n.uk-drop {\n  /* 1 */\n  display: none;\n  /* 2 */\n  position: absolute;\n  z-index: 1020;\n  /* 3 */\n  box-sizing: border-box;\n  width: 300px;\n}\n\n/* Show */\n.uk-drop.uk-open {\n  display: block;\n}\n\n/* Direction / Alignment modifiers\n ========================================================================== */\n/* Direction */\n[class*=uk-drop-top] {\n  margin-top: -20px;\n}\n\n[class*=uk-drop-bottom] {\n  margin-top: 20px;\n}\n\n[class*=uk-drop-left] {\n  margin-left: -20px;\n}\n\n[class*=uk-drop-right] {\n  margin-left: 20px;\n}\n\n/* Grid modifiers\n ========================================================================== */\n.uk-drop-stack .uk-drop-grid > * {\n  width: 100% !important;\n}\n\n/* ========================================================================\n   Component: Dropdown\n ========================================================================== */\n/*\n * 1. Hide by default\n * 2. Set position\n * 3. Set a default width\n * 4. Style\n */\n.uk-dropdown {\n  /* 1 */\n  display: none;\n  /* 2 */\n  position: absolute;\n  z-index: 1020;\n  /* 3 */\n  box-sizing: border-box;\n  min-width: 200px;\n  /* 4 */\n  padding: 25px;\n  background: #fff;\n  color: #666;\n  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);\n}\n\n/* Show */\n.uk-dropdown.uk-open {\n  display: block;\n}\n\n/* Nav\n * Adopts `uk-nav`\n ========================================================================== */\n.uk-dropdown-nav {\n  white-space: nowrap;\n  font-size: 0.875rem;\n}\n\n/*\n * Items\n */\n.uk-dropdown-nav > li > a {\n  color: #999;\n}\n\n/* Hover + Focus + Active */\n.uk-dropdown-nav > li > a:hover,\n.uk-dropdown-nav > li > a:focus,\n.uk-dropdown-nav > li.uk-active > a {\n  color: #666;\n}\n\n/*\n * Header\n */\n.uk-dropdown-nav .uk-nav-header {\n  color: #333;\n}\n\n/*\n * Divider\n */\n.uk-dropdown-nav .uk-nav-divider {\n  border-top: 1px solid #e5e5e5;\n}\n\n/*\n * Sublists\n */\n.uk-dropdown-nav .uk-nav-sub a {\n  color: #999;\n}\n\n.uk-dropdown-nav .uk-nav-sub a:hover,\n.uk-dropdown-nav .uk-nav-sub a:focus,\n.uk-dropdown-nav .uk-nav-sub li.uk-active > a {\n  color: #666;\n}\n\n/* Direction / Alignment modifiers\n ========================================================================== */\n/* Direction */\n[class*=uk-dropdown-top] {\n  margin-top: -10px;\n}\n\n[class*=uk-dropdown-bottom] {\n  margin-top: 10px;\n}\n\n[class*=uk-dropdown-left] {\n  margin-left: -10px;\n}\n\n[class*=uk-dropdown-right] {\n  margin-left: 10px;\n}\n\n/* Grid modifiers\n ========================================================================== */\n.uk-dropdown-stack .uk-dropdown-grid > * {\n  width: 100% !important;\n}\n\n/* ========================================================================\n   Component: Modal\n ========================================================================== */\n/*\n * 1. Hide by default\n * 2. Set position\n * 3. Allow scrolling for the modal dialog\n * 4. Horizontal padding\n * 5. Mask the background page\n * 6. Fade-in transition\n */\n.uk-modal {\n  /* 1 */\n  display: none;\n  /* 2 */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1010;\n  /* 3 */\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  /* 4 */\n  padding: 15px 15px;\n  /* 5 */\n  background: rgba(0, 0, 0, 0.6);\n  /* 6 */\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n\n/* Phone landscape and bigger */\n@media (min-width: 640px) {\n  .uk-modal {\n    padding: 50px 30px;\n  }\n}\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-modal {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n}\n/*\n * Open\n */\n.uk-modal.uk-open {\n  opacity: 1;\n}\n\n/* Page\n ========================================================================== */\n/*\n * Prevent scrollbars\n */\n.uk-modal-page {\n  overflow: hidden;\n}\n\n/* Dialog\n ========================================================================== */\n/*\n * 1. Create position context for spinner and close button\n * 2. Dimensions\n * 3. Fix `max-width: 100%` not working in combination with flex and responsive images in IE11\n *    `!important` needed to overwrite `uk-width-auto`. See `#modal-media-image` in tests\n * 4. Style\n * 5. Slide-in transition\n */\n.uk-modal-dialog {\n  /* 1 */\n  position: relative;\n  /* 2 */\n  box-sizing: border-box;\n  margin: 0 auto;\n  width: 600px;\n  /* 3 */\n  max-width: calc(100% - 0.01px) !important;\n  /* 4 */\n  background: #fff;\n  /* 5 */\n  opacity: 0;\n  transform: translateY(-100px);\n  transition: 0.3s linear;\n  transition-property: opacity, transform;\n}\n\n/*\n * Open\n */\n.uk-open > .uk-modal-dialog {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n/* Size modifier\n ========================================================================== */\n/*\n * Container size\n * Take the same size as the Container component\n */\n.uk-modal-container .uk-modal-dialog {\n  width: 1200px;\n}\n\n/*\n * Full size\n * 1. Remove padding and background from modal\n * 2. Reset all default declarations from modal dialog\n */\n/* 1 */\n.uk-modal-full {\n  padding: 0;\n  background: none;\n}\n\n/* 2 */\n.uk-modal-full .uk-modal-dialog {\n  margin: 0;\n  width: 100%;\n  max-width: 100%;\n  transform: translateY(0);\n}\n\n/* Sections\n ========================================================================== */\n.uk-modal-body {\n  padding: 30px 30px;\n}\n\n.uk-modal-header {\n  padding: 15px 30px;\n  background: #fff;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.uk-modal-footer {\n  padding: 15px 30px;\n  background: #fff;\n  border-top: 1px solid #e5e5e5;\n}\n\n/*\n * Micro clearfix\n */\n.uk-modal-body::before,\n.uk-modal-body::after,\n.uk-modal-header::before,\n.uk-modal-header::after,\n.uk-modal-footer::before,\n.uk-modal-footer::after {\n  content: \"\";\n  display: table;\n}\n\n.uk-modal-body::after,\n.uk-modal-header::after,\n.uk-modal-footer::after {\n  clear: both;\n}\n\n/*\n * Remove margin from the last-child\n */\n.uk-modal-body > :last-child,\n.uk-modal-header > :last-child,\n.uk-modal-footer > :last-child {\n  margin-bottom: 0;\n}\n\n/* Title\n ========================================================================== */\n.uk-modal-title {\n  font-size: 2rem;\n  line-height: 1.3;\n}\n\n/* Close\n * Adopts `uk-close`\n ========================================================================== */\n[class*=uk-modal-close-] {\n  position: absolute;\n  z-index: 1010;\n  top: 10px;\n  right: 10px;\n  padding: 5px;\n}\n\n/*\n * Remove margin from adjacent element\n */\n[class*=uk-modal-close-]:first-child + * {\n  margin-top: 0;\n}\n\n/*\n * Hover\n */\n/*\n * Default\n */\n/*\n * Outside\n * 1. Prevent scrollbar on small devices\n */\n.uk-modal-close-outside {\n  top: 0;\n  /* 1 */\n  right: -5px;\n  transform: translate(0, -100%);\n  color: white;\n}\n\n.uk-modal-close-outside:hover {\n  color: #fff;\n}\n\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  /* 1 */\n  .uk-modal-close-outside {\n    right: 0;\n    transform: translate(100%, -100%);\n  }\n}\n/*\n * Full\n */\n.uk-modal-close-full {\n  top: 0;\n  right: 0;\n  padding: 20px;\n  background: #fff;\n}\n\n/* ========================================================================\n   Component: Lightbox\n ========================================================================== */\n/*\n * 1. Hide by default\n * 2. Set position\n * 3. Allow scrolling for the modal dialog\n * 4. Horizontal padding\n * 5. Mask the background page\n * 6. Fade-in transition\n */\n.uk-lightbox {\n  /* 1 */\n  display: none;\n  /* 2 */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1010;\n  /* 5 */\n  background: #000;\n  /* 6 */\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n\n/*\n * Open\n * 1. Center child\n * 2. Fade-in\n */\n.uk-lightbox.uk-open {\n  display: block;\n  /* 2 */\n  opacity: 1;\n}\n\n/* Page\n ========================================================================== */\n/*\n * Prevent scrollbars\n */\n.uk-lightbox-page {\n  overflow: hidden;\n}\n\n/* Item\n ========================================================================== */\n/*\n * 1. Center child within the viewport\n * 2. Not visible by default\n * 3. Color needed for spinner icon\n * 4. Optimize animation\n * 5. Responsiveness\n *    Using `vh` for `max-height` to fix image proportions after resize in Safari and Opera\n *    Using `vh` and `vw` to make responsive image work in IE11\n * 6. Suppress outline on focus\n */\n.uk-lightbox-items > * {\n  /* 1 */\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* 2 */\n  display: none;\n  justify-content: center;\n  align-items: center;\n  /* 3 */\n  color: rgba(255, 255, 255, 0.7);\n  /* 4 */\n  will-change: transform, opacity;\n}\n\n/* 5 */\n.uk-lightbox-items > * > * {\n  max-width: 100vw;\n  max-height: 100vh;\n}\n\n/* 6 */\n.uk-lightbox-items > :focus {\n  outline: none;\n}\n\n.uk-lightbox-items > * > :not(iframe) {\n  width: auto;\n  height: auto;\n}\n\n.uk-lightbox-items > .uk-active {\n  display: flex;\n}\n\n/* Toolbar\n ========================================================================== */\n.uk-lightbox-toolbar {\n  padding: 10px 10px;\n  background: rgba(0, 0, 0, 0.3);\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.uk-lightbox-toolbar > * {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n/* Toolbar Icon (Close)\n ========================================================================== */\n.uk-lightbox-toolbar-icon {\n  padding: 5px;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n/*\n * Hover\n */\n.uk-lightbox-toolbar-icon:hover {\n  color: #fff;\n}\n\n/* Button (Slidenav)\n ========================================================================== */\n/*\n * 1. Center icon vertically and horizontally\n */\n.uk-lightbox-button {\n  box-sizing: border-box;\n  width: 50px;\n  height: 50px;\n  background: rgba(0, 0, 0, 0.3);\n  color: rgba(255, 255, 255, 0.7);\n  /* 1 */\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/*\n * Hover\n */\n.uk-lightbox-button:hover {\n  color: #fff;\n}\n\n/* Caption\n ========================================================================== */\n/* Iframe\n ========================================================================== */\n.uk-lightbox-iframe {\n  width: 80%;\n  height: 80%;\n}\n\n/* ========================================================================\n   Component: Slideshow\n ========================================================================== */\n/*\n * 1. Prevent tab highlighting on iOS.\n */\n.uk-slideshow {\n  /* 1 */\n  -webkit-tap-highlight-color: transparent;\n}\n\n/* Items\n ========================================================================== */\n/*\n * 1. Create position and stacking context\n * 2. Reset list\n * 3. Clip child elements\n * 4. Prevent displaying the callout information on iOS.\n */\n.uk-slideshow-items {\n  /* 1 */\n  position: relative;\n  z-index: 0;\n  /* 2 */\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  /* 3 */\n  overflow: hidden;\n  /* 4 */\n  -webkit-touch-callout: none;\n}\n\n/* Item\n ========================================================================== */\n/*\n * 1. Position items above each other\n * 2. Take the full width\n * 3. Clip child elements, e.g. for `uk-cover`\n * 4. Optimize animation\n * 5. Disable horizontal panning gestures in IE11 and Edge\n * 6. Suppress outline on focus\n */\n.uk-slideshow-items > * {\n  /* 1 */\n  position: absolute;\n  top: 0;\n  left: 0;\n  /* 2 */\n  right: 0;\n  bottom: 0;\n  /* 3 */\n  overflow: hidden;\n  /* 4 */\n  will-change: transform, opacity;\n  /* 5 */\n  touch-action: pan-y;\n}\n\n/* 6 */\n.uk-slideshow-items > :focus {\n  outline: none;\n}\n\n/*\n * Hide not active items\n */\n.uk-slideshow-items > :not(.uk-active) {\n  display: none;\n}\n\n/* ========================================================================\n   Component: Slider\n ========================================================================== */\n/*\n * 1. Prevent tab highlighting on iOS.\n */\n.uk-slider {\n  /* 1 */\n  -webkit-tap-highlight-color: transparent;\n}\n\n/* Container\n ========================================================================== */\n/*\n * 1. Clip child elements\n */\n.uk-slider-container {\n  /* 1 */\n  overflow: hidden;\n}\n\n/* Items\n ========================================================================== */\n/*\n * 1. Optimize animation\n * 2. Create a containing block. In Safari it's neither created by `transform` nor `will-change`.\n */\n.uk-slider-items {\n  /* 1 */\n  will-change: transform;\n  /* 2 */\n  position: relative;\n}\n\n/*\n * 1. Reset list style without interfering with grid\n * 2. Prevent displaying the callout information on iOS.\n */\n.uk-slider-items:not(.uk-grid) {\n  display: flex;\n  /* 1 */\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  /* 2 */\n  -webkit-touch-callout: none;\n}\n\n.uk-slider-items.uk-grid {\n  flex-wrap: nowrap;\n}\n\n/* Item\n ========================================================================== */\n/*\n * 1. Let items take content dimensions (0 0 auto)\n * 2. Create position context\n * 3. Disable horizontal panning gestures in IE11 and Edge\n * 4. Suppress outline on focus\n */\n.uk-slider-items > * {\n  /* 1 */\n  flex: none;\n  /* 2 */\n  position: relative;\n  /* 3 */\n  touch-action: pan-y;\n}\n\n/* 4 */\n.uk-slider-items > :focus {\n  outline: none;\n}\n\n/* ========================================================================\n   Component: Sticky\n ========================================================================== */\n/*\n * 1. Resolve frame rate issues on devices with lower frame rates by forcing hardware acceleration\n */\n.uk-sticky-fixed {\n  z-index: 980;\n  box-sizing: border-box;\n  margin: 0 !important;\n  /* 1 */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n/*\n * Faster animations\n */\n.uk-sticky[class*=uk-animation-] {\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n}\n\n.uk-sticky.uk-animation-reverse {\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n}\n\n/* ========================================================================\n   Component: Off-canvas\n ========================================================================== */\n/*\n * 1. Hide by default\n * 2. Set position\n */\n.uk-offcanvas {\n  /* 1 */\n  display: none;\n  /* 2 */\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n}\n\n/*\n * Flip modifier\n */\n.uk-offcanvas-flip .uk-offcanvas {\n  right: 0;\n  left: auto;\n}\n\n/* Bar\n ========================================================================== */\n/*\n * 1. Set position\n * 2. Size and style\n * 3. Allow scrolling\n */\n.uk-offcanvas-bar {\n  /* 1 */\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -270px;\n  /* 2 */\n  box-sizing: border-box;\n  width: 270px;\n  padding: 20px 20px;\n  background: #222;\n  /* 3 */\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-offcanvas-bar {\n    left: -350px;\n    width: 350px;\n    padding: 40px 40px;\n  }\n}\n/* Flip modifier */\n.uk-offcanvas-flip .uk-offcanvas-bar {\n  left: auto;\n  right: -270px;\n}\n\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-offcanvas-flip .uk-offcanvas-bar {\n    right: -350px;\n  }\n}\n/*\n * Open\n */\n.uk-open > .uk-offcanvas-bar {\n  left: 0;\n}\n\n.uk-offcanvas-flip .uk-open > .uk-offcanvas-bar {\n  left: auto;\n  right: 0;\n}\n\n/*\n * Slide Animation (Used in slide and push mode)\n */\n.uk-offcanvas-bar-animation {\n  transition: left 0.3s ease-out;\n}\n\n.uk-offcanvas-flip .uk-offcanvas-bar-animation {\n  transition-property: right;\n}\n\n/*\n * Reveal Animation\n * 1. Set position\n * 2. Clip the bar\n * 3. Animation\n * 4. Reset position\n */\n.uk-offcanvas-reveal {\n  /* 1 */\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  /* 2 */\n  width: 0;\n  overflow: hidden;\n  /* 3 */\n  transition: width 0.3s ease-out;\n}\n\n.uk-offcanvas-reveal .uk-offcanvas-bar {\n  /* 4 */\n  left: 0;\n}\n\n.uk-offcanvas-flip .uk-offcanvas-reveal .uk-offcanvas-bar {\n  /* 4 */\n  left: auto;\n  right: 0;\n}\n\n.uk-open > .uk-offcanvas-reveal {\n  width: 270px;\n}\n\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-open > .uk-offcanvas-reveal {\n    width: 350px;\n  }\n}\n/*\n * Flip modifier\n */\n.uk-offcanvas-flip .uk-offcanvas-reveal {\n  right: 0;\n  left: auto;\n}\n\n/* Close\n * Adopts `uk-close`\n ========================================================================== */\n.uk-offcanvas-close {\n  position: absolute;\n  z-index: 1000;\n  top: 20px;\n  right: 20px;\n  padding: 5px;\n}\n\n/* Overlay\n ========================================================================== */\n/*\n * Overlay the whole page. Needed for the `::before`\n * 1. Using `100vw` so no modification is needed when off-canvas is flipped\n * 2. Allow for closing with swipe gesture on devices with pointer events.\n */\n.uk-offcanvas-overlay {\n  /* 1 */\n  width: 100vw;\n  /* 2 */\n  touch-action: none;\n}\n\n/*\n * 1. Mask the whole page\n * 2. Fade-in transition\n */\n.uk-offcanvas-overlay::before {\n  /* 1 */\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.1);\n  /* 2 */\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n\n.uk-offcanvas-overlay.uk-open::before {\n  opacity: 1;\n}\n\n/* Prevent scrolling\n ========================================================================== */\n/*\n * Prevent horizontal scrollbar when the content is slide-out\n * Has to be on the `html` element too to make it work on the `body`\n */\n.uk-offcanvas-page,\n.uk-offcanvas-container {\n  overflow-x: hidden;\n}\n\n/* Container\n ========================================================================== */\n/*\n * Prepare slide-out animation (Used in reveal and push mode)\n * Using `position: left` instead of `transform` because position `fixed` elements like sticky navbars\n * lose their fixed state and behaves like `absolute` within a transformed container\n * 1. Provide a fixed width and prevent shrinking\n */\n.uk-offcanvas-container {\n  position: relative;\n  left: 0;\n  transition: left 0.3s ease-out;\n  /* 1 */\n  box-sizing: border-box;\n  width: 100%;\n}\n\n/*\n * Activate slide-out animation\n */\n:not(.uk-offcanvas-flip).uk-offcanvas-container-animation {\n  left: 270px;\n}\n\n.uk-offcanvas-flip.uk-offcanvas-container-animation {\n  left: -270px;\n}\n\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  :not(.uk-offcanvas-flip).uk-offcanvas-container-animation {\n    left: 350px;\n  }\n\n  .uk-offcanvas-flip.uk-offcanvas-container-animation {\n    left: -350px;\n  }\n}\n/* ========================================================================\n   Component: Switcher\n ========================================================================== */\n/*\n * Reset list\n */\n.uk-switcher {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n/* Items\n ========================================================================== */\n/*\n * Hide not active items\n */\n.uk-switcher > :not(.uk-active) {\n  display: none;\n}\n\n/*\n * Remove margin from the last-child\n */\n.uk-switcher > * > :last-child {\n  margin-bottom: 0;\n}\n\n/* ========================================================================\n   Component: Leader\n ========================================================================== */\n.uk-leader {\n  overflow: hidden;\n}\n\n/*\n * 1. Place element in text flow\n * 2. Never break into a new line\n * 3. Get a string back with as many repeating characters to fill the container\n * 4. Prevent wrapping. Overflowing characters will be clipped by the container\n */\n.uk-leader-fill::after {\n  /* 1 */\n  display: inline-block;\n  margin-left: 15px;\n  /* 2 */\n  width: 0;\n  /* 3 */\n  content: attr(data-fill);\n  /* 4 */\n  white-space: nowrap;\n}\n\n/*\n * Hide if media does not match\n */\n.uk-leader-fill.uk-leader-hide::after {\n  display: none;\n}\n\n/*\n * Pass fill character to JS\n */\n.uk-leader-fill-content::before {\n  content: \".\";\n}\n\n:root {\n  --uk-leader-fill-content: .;\n}\n\n/* ========================================================================\n   Component: Iconnav\n ========================================================================== */\n/*\n * 1. Allow items to wrap into the next line\n * 2. Reset list\n * 3. Gutter\n */\n.uk-iconnav {\n  display: flex;\n  /* 1 */\n  flex-wrap: wrap;\n  /* 2 */\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  /* 3 */\n  margin-left: -10px;\n}\n\n/*\n * Space is allocated based on content dimensions, but shrinks: 0 1 auto\n * 1. Gutter\n */\n.uk-iconnav > * {\n  /* 1 */\n  padding-left: 10px;\n}\n\n/* Items\n ========================================================================== */\n/*\n * Items must target `a` elements to exclude other elements (e.g. dropdowns)\n * 1. Prevent gap if child element is `inline-block`, e.g. an icon\n * 2. Style\n */\n.uk-iconnav > * > a {\n  /* 1 */\n  display: block;\n  /* 2 */\n  color: #999;\n}\n\n/* Hover + Focus */\n.uk-iconnav > * > a:hover,\n.uk-iconnav > * > a:focus {\n  color: #666;\n  outline: none;\n}\n\n/* Active */\n.uk-iconnav > .uk-active > a {\n  color: #666;\n}\n\n/* Modifier: 'uk-iconnav-vertical'\n ========================================================================== */\n/*\n * 1. Change direction\n * 2. Gutter\n */\n.uk-iconnav-vertical {\n  /* 1 */\n  flex-direction: column;\n  /* 2 */\n  margin-left: 0;\n  margin-top: -10px;\n}\n\n/* 2 */\n.uk-iconnav-vertical > * {\n  padding-left: 0;\n  padding-top: 10px;\n}\n\n/* ========================================================================\n   Component: Notification\n ========================================================================== */\n/*\n * 1. Set position\n * 2. Dimensions\n */\n.uk-notification {\n  /* 1 */\n  position: fixed;\n  top: 10px;\n  left: 10px;\n  z-index: 1040;\n  /* 2 */\n  box-sizing: border-box;\n  width: 350px;\n}\n\n/* Position modifiers\n========================================================================== */\n.uk-notification-top-right,\n.uk-notification-bottom-right {\n  left: auto;\n  right: 10px;\n}\n\n.uk-notification-top-center,\n.uk-notification-bottom-center {\n  left: 50%;\n  margin-left: -175px;\n}\n\n.uk-notification-bottom-left,\n.uk-notification-bottom-right,\n.uk-notification-bottom-center {\n  top: auto;\n  bottom: 10px;\n}\n\n/* Responsiveness\n========================================================================== */\n/* Phones portrait and smaller */\n@media (max-width: 639px) {\n  .uk-notification {\n    left: 10px;\n    right: 10px;\n    width: auto;\n    margin: 0;\n  }\n}\n/* Message\n========================================================================== */\n.uk-notification-message {\n  position: relative;\n  padding: 15px;\n  background: #f8f8f8;\n  color: #666;\n  font-size: 1.25rem;\n  line-height: 1.4;\n  cursor: pointer;\n}\n\n* + .uk-notification-message {\n  margin-top: 10px;\n}\n\n/* Close\n * Adopts `uk-close`\n ========================================================================== */\n.uk-notification-close {\n  display: none;\n  position: absolute;\n  top: 20px;\n  right: 15px;\n}\n\n.uk-notification-message:hover .uk-notification-close {\n  display: block;\n}\n\n/* Style modifiers\n ========================================================================== */\n/*\n * Primary\n */\n.uk-notification-message-primary {\n  color: #1e87f0;\n}\n\n/*\n * Success\n */\n.uk-notification-message-success {\n  color: #32d296;\n}\n\n/*\n * Warning\n */\n.uk-notification-message-warning {\n  color: #faa05a;\n}\n\n/*\n * Danger\n */\n.uk-notification-message-danger {\n  color: #f0506e;\n}\n\n/* ========================================================================\n   Component: Tooltip\n ========================================================================== */\n/*\n * 1. Hide by default\n * 2. Position\n * 3. Dimensions\n * 4. Style\n */\n.uk-tooltip {\n  /* 1 */\n  display: none;\n  /* 2 */\n  position: absolute;\n  z-index: 1030;\n  /* 3 */\n  box-sizing: border-box;\n  max-width: 200px;\n  padding: 3px 6px;\n  /* 4 */\n  background: #666;\n  border-radius: 2px;\n  color: #fff;\n  font-size: 12px;\n}\n\n/* Show */\n.uk-tooltip.uk-active {\n  display: block;\n}\n\n/* Direction / Alignment modifiers\n ========================================================================== */\n/* Direction */\n[class*=uk-tooltip-top] {\n  margin-top: -10px;\n}\n\n[class*=uk-tooltip-bottom] {\n  margin-top: 10px;\n}\n\n[class*=uk-tooltip-left] {\n  margin-left: -10px;\n}\n\n[class*=uk-tooltip-right] {\n  margin-left: 10px;\n}\n\n/* ========================================================================\n   Component: Placeholder\n ========================================================================== */\n.uk-placeholder {\n  margin-bottom: 20px;\n  padding: 30px 30px;\n  background: transparent;\n  border: 1px dashed #e5e5e5;\n}\n\n/* Add margin if adjacent element */\n* + .uk-placeholder {\n  margin-top: 20px;\n}\n\n/*\n * Remove margin from the last-child\n */\n.uk-placeholder > :last-child {\n  margin-bottom: 0;\n}\n\n/* ========================================================================\n   Component: Progress\n ========================================================================== */\n/*\n * 1. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n * 2. Remove default style\n * 3. Behave like a block element\n * 4. Remove borders in Firefox and Edge\n * 5. Set background color for progress container in Firefox, IE11 and Edge\n * 6. Style\n */\n.uk-progress {\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  /* 3 */\n  display: block;\n  width: 100%;\n  /* 4 */\n  border: 0;\n  /* 5 */\n  background-color: #f8f8f8;\n  /* 6 */\n  margin-bottom: 20px;\n  height: 15px;\n  border-radius: 500px;\n  overflow: hidden;\n}\n\n/* Add margin if adjacent element */\n* + .uk-progress {\n  margin-top: 20px;\n}\n\n/*\n * Remove animated circles for indeterminate state in IE11 and Edge\n */\n.uk-progress:indeterminate {\n  color: transparent;\n}\n\n/*\n * Progress container\n * 2. Remove progress bar for indeterminate state in Firefox\n */\n.uk-progress::-webkit-progress-bar {\n  background-color: #f8f8f8;\n  border-radius: 500px;\n  overflow: hidden;\n}\n\n/* 2 */\n.uk-progress:indeterminate::-moz-progress-bar {\n  width: 0;\n}\n\n/*\n * Progress bar\n * 1. Remove right border in IE11 and Edge\n */\n.uk-progress::-webkit-progress-value {\n  background-color: #1e87f0;\n  transition: width 0.6s ease;\n}\n\n.uk-progress::-moz-progress-bar {\n  background-color: #1e87f0;\n}\n\n.uk-progress::-ms-fill {\n  background-color: #1e87f0;\n  transition: width 0.6s ease;\n  /* 1 */\n  border: 0;\n}\n\n/* ========================================================================\n   Component: Sortable\n ========================================================================== */\n.uk-sortable {\n  position: relative;\n}\n\n/*\n * Deactivate pointer-events on SVGs in Safari\n */\n.uk-sortable svg {\n  pointer-events: none;\n}\n\n/*\n * Remove margin from the last-child\n */\n.uk-sortable > :last-child {\n  margin-bottom: 0;\n}\n\n/* Drag\n ========================================================================== */\n.uk-sortable-drag {\n  position: absolute !important;\n  z-index: 1050 !important;\n  pointer-events: none;\n}\n\n/* Placeholder\n ========================================================================== */\n.uk-sortable-placeholder {\n  opacity: 0;\n  pointer-events: none;\n}\n\n/* Empty modifier\n ========================================================================== */\n.uk-sortable-empty {\n  min-height: 50px;\n}\n\n/* Handle\n ========================================================================== */\n/* Hover */\n.uk-sortable-handle:hover {\n  cursor: move;\n}\n\n/* ========================================================================\n   Component: Countdown\n ========================================================================== */\n/* Item\n ========================================================================== */\n/*\n * 1. Center numbers and separators vertically\n */\n.uk-countdown-number,\n.uk-countdown-separator {\n  /* 1 */\n  line-height: 0.8;\n}\n\n/* Number\n ========================================================================== */\n.uk-countdown-number {\n  font-size: 2rem;\n}\n\n/* Phone landscape and bigger */\n@media (min-width: 640px) {\n  .uk-countdown-number {\n    font-size: 4rem;\n  }\n}\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-countdown-number {\n    font-size: 6rem;\n  }\n}\n/* Separator\n ========================================================================== */\n.uk-countdown-separator {\n  font-size: 1rem;\n}\n\n/* Phone landscape and bigger */\n@media (min-width: 640px) {\n  .uk-countdown-separator {\n    font-size: 2rem;\n  }\n}\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-countdown-separator {\n    font-size: 3rem;\n  }\n}\n/* Label\n ========================================================================== */\n/* ========================================================================\n   Component: Animation\n ========================================================================== */\n[class*=uk-animation-] {\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n\n/* Animations\n ========================================================================== */\n/*\n * Fade\n */\n.uk-animation-fade {\n  -webkit-animation-name: uk-fade;\n          animation-name: uk-fade;\n  -webkit-animation-duration: 0.8s;\n          animation-duration: 0.8s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n}\n\n/*\n * Scale\n */\n.uk-animation-scale-up {\n  -webkit-animation-name: uk-fade-scale-02;\n          animation-name: uk-fade-scale-02;\n}\n\n.uk-animation-scale-down {\n  -webkit-animation-name: uk-fade-scale-18;\n          animation-name: uk-fade-scale-18;\n}\n\n/*\n * Slide\n */\n.uk-animation-slide-top {\n  -webkit-animation-name: uk-fade-top;\n          animation-name: uk-fade-top;\n}\n\n.uk-animation-slide-bottom {\n  -webkit-animation-name: uk-fade-bottom;\n          animation-name: uk-fade-bottom;\n}\n\n.uk-animation-slide-left {\n  -webkit-animation-name: uk-fade-left;\n          animation-name: uk-fade-left;\n}\n\n.uk-animation-slide-right {\n  -webkit-animation-name: uk-fade-right;\n          animation-name: uk-fade-right;\n}\n\n/*\n * Slide Small\n */\n.uk-animation-slide-top-small {\n  -webkit-animation-name: uk-fade-top-small;\n          animation-name: uk-fade-top-small;\n}\n\n.uk-animation-slide-bottom-small {\n  -webkit-animation-name: uk-fade-bottom-small;\n          animation-name: uk-fade-bottom-small;\n}\n\n.uk-animation-slide-left-small {\n  -webkit-animation-name: uk-fade-left-small;\n          animation-name: uk-fade-left-small;\n}\n\n.uk-animation-slide-right-small {\n  -webkit-animation-name: uk-fade-right-small;\n          animation-name: uk-fade-right-small;\n}\n\n/*\n * Slide Medium\n */\n.uk-animation-slide-top-medium {\n  -webkit-animation-name: uk-fade-top-medium;\n          animation-name: uk-fade-top-medium;\n}\n\n.uk-animation-slide-bottom-medium {\n  -webkit-animation-name: uk-fade-bottom-medium;\n          animation-name: uk-fade-bottom-medium;\n}\n\n.uk-animation-slide-left-medium {\n  -webkit-animation-name: uk-fade-left-medium;\n          animation-name: uk-fade-left-medium;\n}\n\n.uk-animation-slide-right-medium {\n  -webkit-animation-name: uk-fade-right-medium;\n          animation-name: uk-fade-right-medium;\n}\n\n/*\n * Kenburns\n */\n.uk-animation-kenburns {\n  -webkit-animation-name: uk-scale-kenburns;\n          animation-name: uk-scale-kenburns;\n  -webkit-animation-duration: 15s;\n          animation-duration: 15s;\n}\n\n/*\n * Shake\n */\n.uk-animation-shake {\n  -webkit-animation-name: uk-shake;\n          animation-name: uk-shake;\n}\n\n/*\n * SVG Stroke\n * The `--uk-animation-stroke` custom property contains the longest path length.\n * Set it manually or use `uk-svg=\"stroke-animation: true\"` to set it automatically.\n * All strokes are animated by the same pace and doesn't end simultaneously.\n * To end simultaneously, `pathLength=\"1\"` could be used, but it's not working in Safari yet.\n */\n.uk-animation-stroke {\n  -webkit-animation-name: uk-stroke;\n          animation-name: uk-stroke;\n  stroke-dasharray: var(--uk-animation-stroke);\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n\n/* Direction modifier\n ========================================================================== */\n.uk-animation-reverse {\n  animation-direction: reverse;\n  -webkit-animation-timing-function: ease-in;\n          animation-timing-function: ease-in;\n}\n\n/* Duration modifier\n ========================================================================== */\n.uk-animation-fast {\n  -webkit-animation-duration: 0.1s;\n          animation-duration: 0.1s;\n}\n\n/* Toggle (Hover + Focus)\n========================================================================== */\n/*\n * The toggle is triggered on touch devices using `:focus` and tabindex\n */\n.uk-animation-toggle:not(:hover):not(:focus) [class*=uk-animation-] {\n  -webkit-animation-name: none;\n          animation-name: none;\n}\n\n/*\n * 1. Prevent tab highlighting on iOS.\n */\n.uk-animation-toggle {\n  /* 1 */\n  -webkit-tap-highlight-color: transparent;\n}\n\n/*\n * Remove outline for `tabindex`\n */\n.uk-animation-toggle:focus {\n  outline: none;\n}\n\n/* Keyframes used by animation classes\n ========================================================================== */\n/*\n * Fade\n */\n@-webkit-keyframes uk-fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes uk-fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*\n * Slide Top\n */\n@-webkit-keyframes uk-fade-top {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes uk-fade-top {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*\n * Slide Bottom\n */\n@-webkit-keyframes uk-fade-bottom {\n  0% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes uk-fade-bottom {\n  0% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*\n * Slide Left\n */\n@-webkit-keyframes uk-fade-left {\n  0% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes uk-fade-left {\n  0% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/*\n * Slide Right\n */\n@-webkit-keyframes uk-fade-right {\n  0% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes uk-fade-right {\n  0% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/*\n * Slide Top Small\n */\n@-webkit-keyframes uk-fade-top-small {\n  0% {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes uk-fade-top-small {\n  0% {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*\n * Slide Bottom Small\n */\n@-webkit-keyframes uk-fade-bottom-small {\n  0% {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes uk-fade-bottom-small {\n  0% {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*\n * Slide Left Small\n */\n@-webkit-keyframes uk-fade-left-small {\n  0% {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes uk-fade-left-small {\n  0% {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/*\n * Slide Right Small\n */\n@-webkit-keyframes uk-fade-right-small {\n  0% {\n    opacity: 0;\n    transform: translateX(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes uk-fade-right-small {\n  0% {\n    opacity: 0;\n    transform: translateX(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/*\n * Slide Top Medium\n */\n@-webkit-keyframes uk-fade-top-medium {\n  0% {\n    opacity: 0;\n    transform: translateY(-50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes uk-fade-top-medium {\n  0% {\n    opacity: 0;\n    transform: translateY(-50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*\n * Slide Bottom Medium\n */\n@-webkit-keyframes uk-fade-bottom-medium {\n  0% {\n    opacity: 0;\n    transform: translateY(50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes uk-fade-bottom-medium {\n  0% {\n    opacity: 0;\n    transform: translateY(50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*\n * Slide Left Medium\n */\n@-webkit-keyframes uk-fade-left-medium {\n  0% {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes uk-fade-left-medium {\n  0% {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/*\n * Slide Right Medium\n */\n@-webkit-keyframes uk-fade-right-medium {\n  0% {\n    opacity: 0;\n    transform: translateX(50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes uk-fade-right-medium {\n  0% {\n    opacity: 0;\n    transform: translateX(50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/*\n * Scale Up\n */\n@-webkit-keyframes uk-fade-scale-02 {\n  0% {\n    opacity: 0;\n    transform: scale(0.2);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes uk-fade-scale-02 {\n  0% {\n    opacity: 0;\n    transform: scale(0.2);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*\n * Scale Down\n */\n@-webkit-keyframes uk-fade-scale-18 {\n  0% {\n    opacity: 0;\n    transform: scale(1.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes uk-fade-scale-18 {\n  0% {\n    opacity: 0;\n    transform: scale(1.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*\n * Kenburns\n */\n@-webkit-keyframes uk-scale-kenburns {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.2);\n  }\n}\n@keyframes uk-scale-kenburns {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.2);\n  }\n}\n/*\n * Shake\n */\n@-webkit-keyframes uk-shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  10% {\n    transform: translateX(-9px);\n  }\n  20% {\n    transform: translateX(8px);\n  }\n  30% {\n    transform: translateX(-7px);\n  }\n  40% {\n    transform: translateX(6px);\n  }\n  50% {\n    transform: translateX(-5px);\n  }\n  60% {\n    transform: translateX(4px);\n  }\n  70% {\n    transform: translateX(-3px);\n  }\n  80% {\n    transform: translateX(2px);\n  }\n  90% {\n    transform: translateX(-1px);\n  }\n}\n@keyframes uk-shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  10% {\n    transform: translateX(-9px);\n  }\n  20% {\n    transform: translateX(8px);\n  }\n  30% {\n    transform: translateX(-7px);\n  }\n  40% {\n    transform: translateX(6px);\n  }\n  50% {\n    transform: translateX(-5px);\n  }\n  60% {\n    transform: translateX(4px);\n  }\n  70% {\n    transform: translateX(-3px);\n  }\n  80% {\n    transform: translateX(2px);\n  }\n  90% {\n    transform: translateX(-1px);\n  }\n}\n/*\n * Stroke\n */\n@-webkit-keyframes uk-stroke {\n  0% {\n    stroke-dashoffset: var(--uk-animation-stroke);\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes uk-stroke {\n  0% {\n    stroke-dashoffset: var(--uk-animation-stroke);\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n/* ========================================================================\n   Component: Width\n ========================================================================== */\n/* Equal child widths\n ========================================================================== */\n[class*=uk-child-width] > * {\n  box-sizing: border-box;\n  width: 100%;\n}\n\n.uk-child-width-1-2 > * {\n  width: 50%;\n}\n\n.uk-child-width-1-3 > * {\n  width: calc(100% * 1 / 3.001);\n}\n\n.uk-child-width-1-4 > * {\n  width: 25%;\n}\n\n.uk-child-width-1-5 > * {\n  width: 20%;\n}\n\n.uk-child-width-1-6 > * {\n  width: calc(100% * 1 / 6.001);\n}\n\n.uk-child-width-auto > * {\n  width: auto;\n}\n\n/*\n * 1. Reset the `min-width`, which is set to auto by default, because\n *    flex items won't shrink below their minimum intrinsic content size.\n *    Using `1px` instead of `0`, so items still wrap into the next line,\n *    if they have zero width and padding and the predecessor is 100% wide.\n */\n.uk-child-width-expand > :not([class*=uk-width]) {\n  flex: 1;\n  /* 1 */\n  min-width: 1px;\n}\n\n/* Phone landscape and bigger */\n@media (min-width: 640px) {\n  .uk-child-width-1-1\\@s > * {\n    width: 100%;\n  }\n\n  .uk-child-width-1-2\\@s > * {\n    width: 50%;\n  }\n\n  .uk-child-width-1-3\\@s > * {\n    width: calc(100% * 1 / 3.001);\n  }\n\n  .uk-child-width-1-4\\@s > * {\n    width: 25%;\n  }\n\n  .uk-child-width-1-5\\@s > * {\n    width: 20%;\n  }\n\n  .uk-child-width-1-6\\@s > * {\n    width: calc(100% * 1 / 6.001);\n  }\n\n  .uk-child-width-auto\\@s > * {\n    width: auto;\n  }\n\n  .uk-child-width-expand\\@s > :not([class*=uk-width]) {\n    flex: 1;\n    min-width: 1px;\n  }\n}\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-child-width-1-1\\@m > * {\n    width: 100%;\n  }\n\n  .uk-child-width-1-2\\@m > * {\n    width: 50%;\n  }\n\n  .uk-child-width-1-3\\@m > * {\n    width: calc(100% * 1 / 3.001);\n  }\n\n  .uk-child-width-1-4\\@m > * {\n    width: 25%;\n  }\n\n  .uk-child-width-1-5\\@m > * {\n    width: 20%;\n  }\n\n  .uk-child-width-1-6\\@m > * {\n    width: calc(100% * 1 / 6.001);\n  }\n\n  .uk-child-width-auto\\@m > * {\n    width: auto;\n  }\n\n  .uk-child-width-expand\\@m > :not([class*=uk-width]) {\n    flex: 1;\n    min-width: 1px;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  .uk-child-width-1-1\\@l > * {\n    width: 100%;\n  }\n\n  .uk-child-width-1-2\\@l > * {\n    width: 50%;\n  }\n\n  .uk-child-width-1-3\\@l > * {\n    width: calc(100% * 1 / 3.001);\n  }\n\n  .uk-child-width-1-4\\@l > * {\n    width: 25%;\n  }\n\n  .uk-child-width-1-5\\@l > * {\n    width: 20%;\n  }\n\n  .uk-child-width-1-6\\@l > * {\n    width: calc(100% * 1 / 6.001);\n  }\n\n  .uk-child-width-auto\\@l > * {\n    width: auto;\n  }\n\n  .uk-child-width-expand\\@l > :not([class*=uk-width]) {\n    flex: 1;\n    min-width: 1px;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1600px) {\n  .uk-child-width-1-1\\@xl > * {\n    width: 100%;\n  }\n\n  .uk-child-width-1-2\\@xl > * {\n    width: 50%;\n  }\n\n  .uk-child-width-1-3\\@xl > * {\n    width: calc(100% * 1 / 3.001);\n  }\n\n  .uk-child-width-1-4\\@xl > * {\n    width: 25%;\n  }\n\n  .uk-child-width-1-5\\@xl > * {\n    width: 20%;\n  }\n\n  .uk-child-width-1-6\\@xl > * {\n    width: calc(100% * 1 / 6.001);\n  }\n\n  .uk-child-width-auto\\@xl > * {\n    width: auto;\n  }\n\n  .uk-child-width-expand\\@xl > :not([class*=uk-width]) {\n    flex: 1;\n    min-width: 1px;\n  }\n}\n/* Single Widths\n ========================================================================== */\n/*\n * 1. `max-width` is needed for the pixel-based classes\n */\n[class*=uk-width] {\n  box-sizing: border-box;\n  width: 100%;\n  /* 1 */\n  max-width: 100%;\n}\n\n/* Halves */\n.uk-width-1-2 {\n  width: 50%;\n}\n\n/* Thirds */\n.uk-width-1-3 {\n  width: calc(100% * 1 / 3.001);\n}\n\n.uk-width-2-3 {\n  width: calc(100% * 2 / 3.001);\n}\n\n/* Quarters */\n.uk-width-1-4 {\n  width: 25%;\n}\n\n.uk-width-3-4 {\n  width: 75%;\n}\n\n/* Fifths */\n.uk-width-1-5 {\n  width: 20%;\n}\n\n.uk-width-2-5 {\n  width: 40%;\n}\n\n.uk-width-3-5 {\n  width: 60%;\n}\n\n.uk-width-4-5 {\n  width: 80%;\n}\n\n/* Sixths */\n.uk-width-1-6 {\n  width: calc(100% * 1 / 6.001);\n}\n\n.uk-width-5-6 {\n  width: calc(100% * 5 / 6.001);\n}\n\n/* Pixel */\n.uk-width-small {\n  width: 150px;\n}\n\n.uk-width-medium {\n  width: 300px;\n}\n\n.uk-width-large {\n  width: 450px;\n}\n\n.uk-width-xlarge {\n  width: 600px;\n}\n\n.uk-width-xxlarge {\n  width: 750px;\n}\n\n/* Auto */\n.uk-width-auto {\n  width: auto;\n}\n\n/* Expand */\n.uk-width-expand {\n  flex: 1;\n  min-width: 1px;\n}\n\n/* Phone landscape and bigger */\n@media (min-width: 640px) {\n  /* Whole */\n  .uk-width-1-1\\@s {\n    width: 100%;\n  }\n\n  /* Halves */\n  .uk-width-1-2\\@s {\n    width: 50%;\n  }\n\n  /* Thirds */\n  .uk-width-1-3\\@s {\n    width: calc(100% * 1 / 3.001);\n  }\n\n  .uk-width-2-3\\@s {\n    width: calc(100% * 2 / 3.001);\n  }\n\n  /* Quarters */\n  .uk-width-1-4\\@s {\n    width: 25%;\n  }\n\n  .uk-width-3-4\\@s {\n    width: 75%;\n  }\n\n  /* Fifths */\n  .uk-width-1-5\\@s {\n    width: 20%;\n  }\n\n  .uk-width-2-5\\@s {\n    width: 40%;\n  }\n\n  .uk-width-3-5\\@s {\n    width: 60%;\n  }\n\n  .uk-width-4-5\\@s {\n    width: 80%;\n  }\n\n  /* Sixths */\n  .uk-width-1-6\\@s {\n    width: calc(100% * 1 / 6.001);\n  }\n\n  .uk-width-5-6\\@s {\n    width: calc(100% * 5 / 6.001);\n  }\n\n  /* Pixel */\n  .uk-width-small\\@s {\n    width: 150px;\n  }\n\n  .uk-width-medium\\@s {\n    width: 300px;\n  }\n\n  .uk-width-large\\@s {\n    width: 450px;\n  }\n\n  .uk-width-xlarge\\@s {\n    width: 600px;\n  }\n\n  .uk-width-xxlarge\\@s {\n    width: 750px;\n  }\n\n  /* Auto */\n  .uk-width-auto\\@s {\n    width: auto;\n  }\n\n  /* Expand */\n  .uk-width-expand\\@s {\n    flex: 1;\n    min-width: 1px;\n  }\n}\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  /* Whole */\n  .uk-width-1-1\\@m {\n    width: 100%;\n  }\n\n  /* Halves */\n  .uk-width-1-2\\@m {\n    width: 50%;\n  }\n\n  /* Thirds */\n  .uk-width-1-3\\@m {\n    width: calc(100% * 1 / 3.001);\n  }\n\n  .uk-width-2-3\\@m {\n    width: calc(100% * 2 / 3.001);\n  }\n\n  /* Quarters */\n  .uk-width-1-4\\@m {\n    width: 25%;\n  }\n\n  .uk-width-3-4\\@m {\n    width: 75%;\n  }\n\n  /* Fifths */\n  .uk-width-1-5\\@m {\n    width: 20%;\n  }\n\n  .uk-width-2-5\\@m {\n    width: 40%;\n  }\n\n  .uk-width-3-5\\@m {\n    width: 60%;\n  }\n\n  .uk-width-4-5\\@m {\n    width: 80%;\n  }\n\n  /* Sixths */\n  .uk-width-1-6\\@m {\n    width: calc(100% * 1 / 6.001);\n  }\n\n  .uk-width-5-6\\@m {\n    width: calc(100% * 5 / 6.001);\n  }\n\n  /* Pixel */\n  .uk-width-small\\@m {\n    width: 150px;\n  }\n\n  .uk-width-medium\\@m {\n    width: 300px;\n  }\n\n  .uk-width-large\\@m {\n    width: 450px;\n  }\n\n  .uk-width-xlarge\\@m {\n    width: 600px;\n  }\n\n  .uk-width-xxlarge\\@m {\n    width: 750px;\n  }\n\n  /* Auto */\n  .uk-width-auto\\@m {\n    width: auto;\n  }\n\n  /* Expand */\n  .uk-width-expand\\@m {\n    flex: 1;\n    min-width: 1px;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  /* Whole */\n  .uk-width-1-1\\@l {\n    width: 100%;\n  }\n\n  /* Halves */\n  .uk-width-1-2\\@l {\n    width: 50%;\n  }\n\n  /* Thirds */\n  .uk-width-1-3\\@l {\n    width: calc(100% * 1 / 3.001);\n  }\n\n  .uk-width-2-3\\@l {\n    width: calc(100% * 2 / 3.001);\n  }\n\n  /* Quarters */\n  .uk-width-1-4\\@l {\n    width: 25%;\n  }\n\n  .uk-width-3-4\\@l {\n    width: 75%;\n  }\n\n  /* Fifths */\n  .uk-width-1-5\\@l {\n    width: 20%;\n  }\n\n  .uk-width-2-5\\@l {\n    width: 40%;\n  }\n\n  .uk-width-3-5\\@l {\n    width: 60%;\n  }\n\n  .uk-width-4-5\\@l {\n    width: 80%;\n  }\n\n  /* Sixths */\n  .uk-width-1-6\\@l {\n    width: calc(100% * 1 / 6.001);\n  }\n\n  .uk-width-5-6\\@l {\n    width: calc(100% * 5 / 6.001);\n  }\n\n  /* Pixel */\n  .uk-width-small\\@l {\n    width: 150px;\n  }\n\n  .uk-width-medium\\@l {\n    width: 300px;\n  }\n\n  .uk-width-large\\@l {\n    width: 450px;\n  }\n\n  .uk-width-xlarge\\@l {\n    width: 600px;\n  }\n\n  .uk-width-xxlarge\\@l {\n    width: 750px;\n  }\n\n  /* Auto */\n  .uk-width-auto\\@l {\n    width: auto;\n  }\n\n  /* Expand */\n  .uk-width-expand\\@l {\n    flex: 1;\n    min-width: 1px;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1600px) {\n  /* Whole */\n  .uk-width-1-1\\@xl {\n    width: 100%;\n  }\n\n  /* Halves */\n  .uk-width-1-2\\@xl {\n    width: 50%;\n  }\n\n  /* Thirds */\n  .uk-width-1-3\\@xl {\n    width: calc(100% * 1 / 3.001);\n  }\n\n  .uk-width-2-3\\@xl {\n    width: calc(100% * 2 / 3.001);\n  }\n\n  /* Quarters */\n  .uk-width-1-4\\@xl {\n    width: 25%;\n  }\n\n  .uk-width-3-4\\@xl {\n    width: 75%;\n  }\n\n  /* Fifths */\n  .uk-width-1-5\\@xl {\n    width: 20%;\n  }\n\n  .uk-width-2-5\\@xl {\n    width: 40%;\n  }\n\n  .uk-width-3-5\\@xl {\n    width: 60%;\n  }\n\n  .uk-width-4-5\\@xl {\n    width: 80%;\n  }\n\n  /* Sixths */\n  .uk-width-1-6\\@xl {\n    width: calc(100% * 1 / 6.001);\n  }\n\n  .uk-width-5-6\\@xl {\n    width: calc(100% * 5 / 6.001);\n  }\n\n  /* Pixel */\n  .uk-width-small\\@xl {\n    width: 150px;\n  }\n\n  .uk-width-medium\\@xl {\n    width: 300px;\n  }\n\n  .uk-width-large\\@xl {\n    width: 450px;\n  }\n\n  .uk-width-xlarge\\@xl {\n    width: 600px;\n  }\n\n  .uk-width-xxlarge\\@xl {\n    width: 750px;\n  }\n\n  /* Auto */\n  .uk-width-auto\\@xl {\n    width: auto;\n  }\n\n  /* Expand */\n  .uk-width-expand\\@xl {\n    flex: 1;\n    min-width: 1px;\n  }\n}\n/* ========================================================================\n   Component: Height\n ========================================================================== */\n[class*=uk-height] {\n  box-sizing: border-box;\n}\n\n/*\n * Only works if parent element has a height set\n */\n.uk-height-1-1 {\n  height: 100%;\n}\n\n/*\n * Useful to create image teasers\n */\n.uk-height-viewport {\n  min-height: 100vh;\n}\n\n/*\n * Pixel\n * Useful for `overflow: auto`\n */\n.uk-height-small {\n  height: 150px;\n}\n\n.uk-height-medium {\n  height: 300px;\n}\n\n.uk-height-large {\n  height: 450px;\n}\n\n.uk-height-max-small {\n  max-height: 150px;\n}\n\n.uk-height-max-medium {\n  max-height: 300px;\n}\n\n.uk-height-max-large {\n  max-height: 450px;\n}\n\n/* ========================================================================\n   Component: Text\n ========================================================================== */\n/* Style modifiers\n ========================================================================== */\n.uk-text-lead {\n  font-size: 1.5rem;\n  line-height: 1.5;\n  color: #333;\n}\n\n.uk-text-meta {\n  font-size: 0.875rem;\n  line-height: 1.4;\n  color: #999;\n}\n.uk-text-meta a {\n  color: #999;\n}\n.uk-text-meta a:hover {\n  color: #666;\n  text-decoration: none;\n}\n\n/* Size modifiers\n ========================================================================== */\n.uk-text-small {\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n.uk-text-large {\n  font-size: 1.5rem;\n  line-height: 1.5;\n}\n\n/* Weight modifier\n ========================================================================== */\n.uk-text-light {\n  font-weight: 300;\n}\n\n.uk-text-normal {\n  font-weight: 400;\n}\n\n.uk-text-bold {\n  font-weight: 700;\n}\n\n.uk-text-lighter {\n  font-weight: lighter;\n}\n\n.uk-text-bolder {\n  font-weight: bolder;\n}\n\n/* Style modifier\n ========================================================================== */\n.uk-text-italic {\n  font-style: italic;\n}\n\n/* Transform modifier\n ========================================================================== */\n.uk-text-capitalize {\n  text-transform: capitalize !important;\n}\n\n.uk-text-uppercase {\n  text-transform: uppercase !important;\n}\n\n.uk-text-lowercase {\n  text-transform: lowercase !important;\n}\n\n/* Color modifiers\n ========================================================================== */\n.uk-text-muted {\n  color: #999 !important;\n}\n\n.uk-text-emphasis {\n  color: #333 !important;\n}\n\n.uk-text-primary {\n  color: #1e87f0 !important;\n}\n\n.uk-text-secondary {\n  color: #222 !important;\n}\n\n.uk-text-success {\n  color: #32d296 !important;\n}\n\n.uk-text-warning {\n  color: #faa05a !important;\n}\n\n.uk-text-danger {\n  color: #f0506e !important;\n}\n\n/* Background modifier\n ========================================================================== */\n/*\n * 1. The background clips to the foreground text. Works in Chrome, Firefox, Safari, Edge and Opera\n *    Default color is set to transparent\n * 2. Container fits the text\n * 3. Fallback color for IE11\n */\n.uk-text-background {\n  /* 1 */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  /* 2 */\n  display: inline-block;\n  /* 3 */\n  color: #1e87f0 !important;\n}\n\n@supports (-webkit-background-clip: text) {\n  .uk-text-background {\n    background-color: #1e87f0;\n  }\n}\n/* Alignment modifiers\n ========================================================================== */\n.uk-text-left {\n  text-align: left !important;\n}\n\n.uk-text-right {\n  text-align: right !important;\n}\n\n.uk-text-center {\n  text-align: center !important;\n}\n\n.uk-text-justify {\n  text-align: justify !important;\n}\n\n/* Phone landscape and bigger */\n@media (min-width: 640px) {\n  .uk-text-left\\@s {\n    text-align: left !important;\n  }\n\n  .uk-text-right\\@s {\n    text-align: right !important;\n  }\n\n  .uk-text-center\\@s {\n    text-align: center !important;\n  }\n}\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-text-left\\@m {\n    text-align: left !important;\n  }\n\n  .uk-text-right\\@m {\n    text-align: right !important;\n  }\n\n  .uk-text-center\\@m {\n    text-align: center !important;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  .uk-text-left\\@l {\n    text-align: left !important;\n  }\n\n  .uk-text-right\\@l {\n    text-align: right !important;\n  }\n\n  .uk-text-center\\@l {\n    text-align: center !important;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1600px) {\n  .uk-text-left\\@xl {\n    text-align: left !important;\n  }\n\n  .uk-text-right\\@xl {\n    text-align: right !important;\n  }\n\n  .uk-text-center\\@xl {\n    text-align: center !important;\n  }\n}\n/*\n * Vertical\n */\n.uk-text-top {\n  vertical-align: top !important;\n}\n\n.uk-text-middle {\n  vertical-align: middle !important;\n}\n\n.uk-text-bottom {\n  vertical-align: bottom !important;\n}\n\n.uk-text-baseline {\n  vertical-align: baseline !important;\n}\n\n/* Wrap modifiers\n ========================================================================== */\n/*\n * Prevent text from wrapping onto multiple lines\n */\n.uk-text-nowrap {\n  white-space: nowrap;\n}\n\n/*\n * 1. Make sure a max-width is set after which truncation can occur\n * 2. Prevent text from wrapping onto multiple lines, and truncate with an ellipsis\n * 3. Fix for table cells\n */\n.uk-text-truncate {\n  /* 1 */\n  max-width: 100%;\n  /* 2 */\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* 2 */\nth.uk-text-truncate,\ntd.uk-text-truncate {\n  max-width: 0;\n}\n\n/*\n * 1. Wrap long words onto the next line and break them if they are too long to fit\n * 2. Legacy `word-wrap` as fallback for `overflow-wrap`\n * 3. Fix `overflow-wrap` which doesn't work with table cells in Chrome, Opera, IE11 and Edge\n *    Must use `break-all` to support IE11 and Edge\n * Note: Not using `hyphens: auto;` because it hyphenates text even if not needed\n */\n.uk-text-break {\n  /* 1 */\n  overflow-wrap: break-word;\n  /* 2 */\n  word-wrap: break-word;\n}\n\n/* 3 */\nth.uk-text-break,\ntd.uk-text-break {\n  word-break: break-all;\n}\n\n/* ========================================================================\n   Component: Column\n ========================================================================== */\n[class*=uk-column-] {\n  -moz-column-gap: 30px;\n       column-gap: 30px;\n}\n\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  [class*=uk-column-] {\n    -moz-column-gap: 40px;\n         column-gap: 40px;\n  }\n}\n/*\n * Fix image 1px line wrapping into the next column in Chrome\n */\n[class*=uk-column-] img {\n  transform: translate3d(0, 0, 0);\n}\n\n/* Divider\n ========================================================================== */\n/*\n * 1. Double the column gap\n */\n.uk-column-divider {\n  -moz-column-rule: 1px solid #e5e5e5;\n       column-rule: 1px solid #e5e5e5;\n  /* 1 */\n  -moz-column-gap: 60px;\n       column-gap: 60px;\n}\n\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  .uk-column-divider {\n    -moz-column-gap: 80px;\n         column-gap: 80px;\n  }\n}\n/* Width modifiers\n ========================================================================== */\n.uk-column-1-2 {\n  -moz-column-count: 2;\n       column-count: 2;\n}\n\n.uk-column-1-3 {\n  -moz-column-count: 3;\n       column-count: 3;\n}\n\n.uk-column-1-4 {\n  -moz-column-count: 4;\n       column-count: 4;\n}\n\n.uk-column-1-5 {\n  -moz-column-count: 5;\n       column-count: 5;\n}\n\n.uk-column-1-6 {\n  -moz-column-count: 6;\n       column-count: 6;\n}\n\n/* Phone landscape and bigger */\n@media (min-width: 640px) {\n  .uk-column-1-2\\@s {\n    -moz-column-count: 2;\n         column-count: 2;\n  }\n\n  .uk-column-1-3\\@s {\n    -moz-column-count: 3;\n         column-count: 3;\n  }\n\n  .uk-column-1-4\\@s {\n    -moz-column-count: 4;\n         column-count: 4;\n  }\n\n  .uk-column-1-5\\@s {\n    -moz-column-count: 5;\n         column-count: 5;\n  }\n\n  .uk-column-1-6\\@s {\n    -moz-column-count: 6;\n         column-count: 6;\n  }\n}\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-column-1-2\\@m {\n    -moz-column-count: 2;\n         column-count: 2;\n  }\n\n  .uk-column-1-3\\@m {\n    -moz-column-count: 3;\n         column-count: 3;\n  }\n\n  .uk-column-1-4\\@m {\n    -moz-column-count: 4;\n         column-count: 4;\n  }\n\n  .uk-column-1-5\\@m {\n    -moz-column-count: 5;\n         column-count: 5;\n  }\n\n  .uk-column-1-6\\@m {\n    -moz-column-count: 6;\n         column-count: 6;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  .uk-column-1-2\\@l {\n    -moz-column-count: 2;\n         column-count: 2;\n  }\n\n  .uk-column-1-3\\@l {\n    -moz-column-count: 3;\n         column-count: 3;\n  }\n\n  .uk-column-1-4\\@l {\n    -moz-column-count: 4;\n         column-count: 4;\n  }\n\n  .uk-column-1-5\\@l {\n    -moz-column-count: 5;\n         column-count: 5;\n  }\n\n  .uk-column-1-6\\@l {\n    -moz-column-count: 6;\n         column-count: 6;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1600px) {\n  .uk-column-1-2\\@xl {\n    -moz-column-count: 2;\n         column-count: 2;\n  }\n\n  .uk-column-1-3\\@xl {\n    -moz-column-count: 3;\n         column-count: 3;\n  }\n\n  .uk-column-1-4\\@xl {\n    -moz-column-count: 4;\n         column-count: 4;\n  }\n\n  .uk-column-1-5\\@xl {\n    -moz-column-count: 5;\n         column-count: 5;\n  }\n\n  .uk-column-1-6\\@xl {\n    -moz-column-count: 6;\n         column-count: 6;\n  }\n}\n/* Make element span across all columns\n * Does not work in Firefox yet\n ========================================================================== */\n.uk-column-span {\n  -moz-column-span: all;\n       column-span: all;\n}\n\n/* ========================================================================\n   Component: Cover\n ========================================================================== */\n/*\n * Works with iframes and embedded content\n * 1. Reset responsiveness for embedded content\n * 2. Center object\n * Note: Percent values on the `top` property only works if this element\n *       is absolute positioned or if the container has a height\n */\n.uk-cover {\n  /* 1 */\n  max-width: none;\n  /* 2 */\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\niframe.uk-cover {\n  pointer-events: none;\n}\n\n/* Container\n ========================================================================== */\n/*\n * 1. Parent container which clips resized object\n * 2. Needed if the child is positioned absolute. See note above\n */\n.uk-cover-container {\n  /* 1 */\n  overflow: hidden;\n  /* 2 */\n  position: relative;\n}\n\n/* ========================================================================\n   Component: Background\n ========================================================================== */\n/* Color\n ========================================================================== */\n.uk-background-default {\n  background-color: #fff;\n}\n\n.uk-background-muted {\n  background-color: #f8f8f8;\n}\n\n.uk-background-primary {\n  background-color: #1e87f0;\n}\n\n.uk-background-secondary {\n  background-color: #222;\n}\n\n/* Size\n ========================================================================== */\n.uk-background-cover,\n.uk-background-contain {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n}\n\n.uk-background-cover {\n  background-size: cover;\n}\n\n.uk-background-contain {\n  background-size: contain;\n}\n\n/* Position\n ========================================================================== */\n.uk-background-top-left {\n  background-position: 0 0;\n}\n\n.uk-background-top-center {\n  background-position: 50% 0;\n}\n\n.uk-background-top-right {\n  background-position: 100% 0;\n}\n\n.uk-background-center-left {\n  background-position: 0 50%;\n}\n\n.uk-background-center-center {\n  background-position: 50% 50%;\n}\n\n.uk-background-center-right {\n  background-position: 100% 50%;\n}\n\n.uk-background-bottom-left {\n  background-position: 0 100%;\n}\n\n.uk-background-bottom-center {\n  background-position: 50% 100%;\n}\n\n.uk-background-bottom-right {\n  background-position: 100% 100%;\n}\n\n/* Repeat\n ========================================================================== */\n.uk-background-norepeat {\n  background-repeat: no-repeat;\n}\n\n/* Attachment\n ========================================================================== */\n/*\n * 1. Fix bug introduced in Chrome 67: the background image is not visible if any element on the page uses `translate3d`\n */\n.uk-background-fixed {\n  background-attachment: fixed;\n  /* 1 */\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n/*\n * Exclude touch devices because `fixed` doesn't work on iOS and Android\n */\n@media (pointer: coarse) {\n  .uk-background-fixed {\n    background-attachment: scroll;\n  }\n}\n/* Image\n ========================================================================== */\n/* Phone portrait and smaller */\n@media (max-width: 639px) {\n  .uk-background-image\\@s {\n    background-image: none !important;\n  }\n}\n/* Phone landscape and smaller */\n@media (max-width: 959px) {\n  .uk-background-image\\@m {\n    background-image: none !important;\n  }\n}\n/* Tablet landscape and smaller */\n@media (max-width: 1199px) {\n  .uk-background-image\\@l {\n    background-image: none !important;\n  }\n}\n/* Desktop and smaller */\n@media (max-width: 1599px) {\n  .uk-background-image\\@xl {\n    background-image: none !important;\n  }\n}\n/* Blend modes\n ========================================================================== */\n.uk-background-blend-multiply {\n  background-blend-mode: multiply;\n}\n\n.uk-background-blend-screen {\n  background-blend-mode: screen;\n}\n\n.uk-background-blend-overlay {\n  background-blend-mode: overlay;\n}\n\n.uk-background-blend-darken {\n  background-blend-mode: darken;\n}\n\n.uk-background-blend-lighten {\n  background-blend-mode: lighten;\n}\n\n.uk-background-blend-color-dodge {\n  background-blend-mode: color-dodge;\n}\n\n.uk-background-blend-color-burn {\n  background-blend-mode: color-burn;\n}\n\n.uk-background-blend-hard-light {\n  background-blend-mode: hard-light;\n}\n\n.uk-background-blend-soft-light {\n  background-blend-mode: soft-light;\n}\n\n.uk-background-blend-difference {\n  background-blend-mode: difference;\n}\n\n.uk-background-blend-exclusion {\n  background-blend-mode: exclusion;\n}\n\n.uk-background-blend-hue {\n  background-blend-mode: hue;\n}\n\n.uk-background-blend-saturation {\n  background-blend-mode: saturation;\n}\n\n.uk-background-blend-color {\n  background-blend-mode: color;\n}\n\n.uk-background-blend-luminosity {\n  background-blend-mode: luminosity;\n}\n\n/* ========================================================================\n   Component: Align\n ========================================================================== */\n/*\n * Default\n */\n[class*=uk-align] {\n  display: block;\n  margin-bottom: 30px;\n}\n\n* + [class*=uk-align] {\n  margin-top: 30px;\n}\n\n/*\n * Center\n */\n.uk-align-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/*\n * Left/Right\n */\n.uk-align-left {\n  margin-top: 0;\n  margin-right: 30px;\n  float: left;\n}\n\n.uk-align-right {\n  margin-top: 0;\n  margin-left: 30px;\n  float: right;\n}\n\n/* Phone landscape and bigger */\n@media (min-width: 640px) {\n  .uk-align-left\\@s {\n    margin-top: 0;\n    margin-right: 30px;\n    float: left;\n  }\n\n  .uk-align-right\\@s {\n    margin-top: 0;\n    margin-left: 30px;\n    float: right;\n  }\n}\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-align-left\\@m {\n    margin-top: 0;\n    margin-right: 30px;\n    float: left;\n  }\n\n  .uk-align-right\\@m {\n    margin-top: 0;\n    margin-left: 30px;\n    float: right;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  .uk-align-left\\@l {\n    margin-top: 0;\n    float: left;\n  }\n\n  .uk-align-right\\@l {\n    margin-top: 0;\n    float: right;\n  }\n\n  .uk-align-left,\n.uk-align-left\\@s,\n.uk-align-left\\@m,\n.uk-align-left\\@l {\n    margin-right: 40px;\n  }\n\n  .uk-align-right,\n.uk-align-right\\@s,\n.uk-align-right\\@m,\n.uk-align-right\\@l {\n    margin-left: 40px;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1600px) {\n  .uk-align-left\\@xl {\n    margin-top: 0;\n    margin-right: 40px;\n    float: left;\n  }\n\n  .uk-align-right\\@xl {\n    margin-top: 0;\n    margin-left: 40px;\n    float: right;\n  }\n}\n/* ========================================================================\n   Component: SVG\n ========================================================================== */\n/*\n * 1. Fill all SVG elements with the current text color if no `fill` attribute is set\n * 2. Set the fill and stroke color of all SVG elements to the current text color\n */\n/* 1 */\n.uk-svg,\n.uk-svg:not(.uk-preserve) [fill*=\"#\"]:not(.uk-preserve) {\n  fill: currentcolor;\n}\n\n.uk-svg:not(.uk-preserve) [stroke*=\"#\"]:not(.uk-preserve) {\n  stroke: currentcolor;\n}\n\n/*\n * Fix Firefox blurry SVG rendering: https://bugzilla.mozilla.org/show_bug.cgi?id=1046835\n */\n.uk-svg {\n  transform: translate(0, 0);\n}\n\n/* ========================================================================\n   Component: Utility\n ========================================================================== */\n/* Panel\n ========================================================================== */\n.uk-panel {\n  position: relative;\n  box-sizing: border-box;\n}\n\n/*\n * Micro clearfix\n */\n.uk-panel::before,\n.uk-panel::after {\n  content: \"\";\n  display: table;\n}\n\n.uk-panel::after {\n  clear: both;\n}\n\n/*\n * Remove margin from the last-child\n */\n.uk-panel > :last-child {\n  margin-bottom: 0;\n}\n\n/*\n * Scrollable\n */\n.uk-panel-scrollable {\n  height: 170px;\n  padding: 10px;\n  border: 1px solid #e5e5e5;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  resize: both;\n}\n\n/* Clearfix\n ========================================================================== */\n/*\n * 1. `table-cell` is used with `::before` because `table` creates a 1px gap when it becomes a flex item, only in Webkit\n * 2. `table` is used again with `::after` because `clear` only works with block elements.\n * Note: `display: block` with `overflow: hidden` is currently not working in the latest Safari\n */\n/* 1 */\n.uk-clearfix::before {\n  content: \"\";\n  display: table-cell;\n}\n\n/* 2 */\n.uk-clearfix::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Float\n ========================================================================== */\n/*\n * 1. Prevent content overflow\n */\n.uk-float-left {\n  float: left;\n}\n\n.uk-float-right {\n  float: right;\n}\n\n/* 1 */\n[class*=uk-float-] {\n  max-width: 100%;\n}\n\n/* Overfow\n ========================================================================== */\n.uk-overflow-hidden {\n  overflow: hidden;\n}\n\n/*\n * Enable scrollbars if content is clipped\n * Note: Firefox ignores `padding-bottom` for the scrollable overflow https://bugzilla.mozilla.org/show_bug.cgi?id=748518\n */\n.uk-overflow-auto {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.uk-overflow-auto > :last-child {\n  margin-bottom: 0;\n}\n\n/* Resize\n ========================================================================== */\n.uk-resize {\n  resize: both;\n}\n\n.uk-resize-vertical {\n  resize: vertical;\n}\n\n/* Display\n ========================================================================== */\n.uk-display-block {\n  display: block !important;\n}\n\n.uk-display-inline {\n  display: inline !important;\n}\n\n.uk-display-inline-block {\n  display: inline-block !important;\n}\n\n/* Inline\n ========================================================================== */\n/*\n * 1. Container fits its content\n * 2. Create position context\n * 3. Prevent content overflow\n * 4. Behave like most inline-block elements\n * 5. Force hardware acceleration without creating a new stacking context\n *    to fix 1px glitch when combined with overlays and transitions in Webkit\n * 6. Clip child elements\n */\n[class*=uk-inline] {\n  /* 1 */\n  display: inline-block;\n  /* 2 */\n  position: relative;\n  /* 3 */\n  max-width: 100%;\n  /* 4 */\n  vertical-align: middle;\n  /* 5 */\n  -webkit-backface-visibility: hidden;\n}\n\n.uk-inline-clip {\n  /* 6 */\n  overflow: hidden;\n}\n\n/* Responsive objects\n ========================================================================== */\n/*\n * Preserve original dimensions\n * Because `img, `video`, `canvas` and  `audio` are already responsive by default, see Base component\n */\n.uk-preserve-width,\n.uk-preserve-width canvas,\n.uk-preserve-width img,\n.uk-preserve-width svg,\n.uk-preserve-width video {\n  max-width: none;\n}\n\n/*\n * Responsiveness\n * Corrects `max-width` and `max-height` behavior if padding and border are used\n */\n.uk-responsive-width,\n.uk-responsive-height {\n  box-sizing: border-box;\n}\n\n/*\n * 1. Set a maximum width. `important` needed to override `uk-preserve-width img`\n * 2. Auto scale the height. Only needed if `height` attribute is present\n */\n.uk-responsive-width {\n  /* 1 */\n  max-width: 100% !important;\n  /* 2 */\n  height: auto;\n}\n\n/*\n * 1. Set a maximum height. Only works if the parent element has a fixed height\n * 2. Auto scale the width. Only needed if `width` attribute is present\n * 3. Reset max-width, which `img, `video`, `canvas` and  `audio` already have by default\n */\n.uk-responsive-height {\n  /* 1 */\n  max-height: 100%;\n  /* 2 */\n  width: auto;\n  /* 3 */\n  max-width: none;\n}\n\n/* Border\n ========================================================================== */\n.uk-border-circle {\n  border-radius: 50%;\n}\n\n.uk-border-pill {\n  border-radius: 500px;\n}\n\n.uk-border-rounded {\n  border-radius: 5px;\n}\n\n/*\n * Fix `overflow: hidden` to be ignored with border-radius and CSS transforms in Webkit\n */\n.uk-inline-clip[class*=uk-border-] {\n  -webkit-transform: translateZ(0);\n}\n\n/* Box-shadow\n ========================================================================== */\n.uk-box-shadow-small {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.uk-box-shadow-medium {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n}\n\n.uk-box-shadow-large {\n  box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);\n}\n\n.uk-box-shadow-xlarge {\n  box-shadow: 0 28px 50px rgba(0, 0, 0, 0.16);\n}\n\n/*\n * Hover\n */\n[class*=uk-box-shadow-hover] {\n  transition: box-shadow 0.1s ease-in-out;\n}\n\n.uk-box-shadow-hover-small:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.uk-box-shadow-hover-medium:hover {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n}\n\n.uk-box-shadow-hover-large:hover {\n  box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);\n}\n\n.uk-box-shadow-hover-xlarge:hover {\n  box-shadow: 0 28px 50px rgba(0, 0, 0, 0.16);\n}\n\n/* Box-shadow bottom\n ========================================================================== */\n/*\n * 1. Set position.\n * 2. Set style\n * 3. Blur doesn't work on pseudo elements with negative `z-index` in Edge.\n *    Solved by using `before` and add position context to child elements.\n */\n@supports ((-webkit-filter: blur(0)) or (filter: blur(0))) {\n  .uk-box-shadow-bottom {\n    display: inline-block;\n    position: relative;\n    max-width: 100%;\n    vertical-align: middle;\n  }\n\n  .uk-box-shadow-bottom::before {\n    content: \"\";\n    /* 1 */\n    position: absolute;\n    bottom: -30px;\n    left: 0;\n    right: 0;\n    /* 2 */\n    height: 30px;\n    border-radius: 100%;\n    background: #444;\n    -webkit-filter: blur(20px);\n            filter: blur(20px);\n  }\n\n  /* 3 */\n  .uk-box-shadow-bottom > * {\n    position: relative;\n  }\n}\n/* Drop cap\n ========================================================================== */\n/*\n * 1. Firefox doesn't apply `::first-letter` if the first letter is inside child elements\n *    https://bugzilla.mozilla.org/show_bug.cgi?id=214004\n * 2. In Firefox, a floating `::first-letter` doesn't have a line box and there for no `line-height`\n *    https://bugzilla.mozilla.org/show_bug.cgi?id=317933\n * 3. Caused by 1.: Edge creates two nested `::first-letter` containers, one for each selector\n *    This doubles the `font-size` exponential when using the `em` unit.\n */\n.uk-dropcap::first-letter,\n.uk-dropcap > p:first-of-type::first-letter {\n  display: block;\n  margin-right: 10px;\n  float: left;\n  font-size: 4.5em;\n  line-height: 1;\n  margin-bottom: -2px;\n}\n\n/* 2 */\n@-moz-document url-prefix() {\n  .uk-dropcap::first-letter,\n.uk-dropcap > p:first-of-type::first-letter {\n    margin-top: 1.1%;\n  }\n}\n/* 3 */\n@supports (-ms-ime-align: auto) {\n  .uk-dropcap > p:first-of-type::first-letter {\n    font-size: 1em;\n  }\n}\n/* Logo\n ========================================================================== */\n/*\n * 1. Required for `a`\n */\n.uk-logo {\n  font-size: 1.5rem;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  color: #666;\n  /* 1 */\n  text-decoration: none;\n}\n\n/* Hover + Focus */\n.uk-logo:hover,\n.uk-logo:focus {\n  color: #666;\n  outline: none;\n  /* 1 */\n  text-decoration: none;\n}\n\n.uk-logo-inverse {\n  display: none;\n}\n\n/* Disabled State\n ========================================================================== */\n.uk-disabled {\n  pointer-events: none;\n}\n\n/* Drag State\n ========================================================================== */\n/*\n * 1. Needed if moving over elements with have their own cursor on hover, e.g. links or buttons\n * 2. Fix dragging over iframes\n */\n.uk-drag,\n.uk-drag * {\n  cursor: move;\n}\n\n/* 2 */\n.uk-drag iframe {\n  pointer-events: none;\n}\n\n/* Dragover State\n ========================================================================== */\n/*\n * Create a box-shadow when dragging a file over the upload area\n */\n.uk-dragover {\n  box-shadow: 0 0 20px rgba(100, 100, 100, 0.3);\n}\n\n/* Blend modes\n ========================================================================== */\n.uk-blend-multiply {\n  mix-blend-mode: multiply;\n}\n\n.uk-blend-screen {\n  mix-blend-mode: screen;\n}\n\n.uk-blend-overlay {\n  mix-blend-mode: overlay;\n}\n\n.uk-blend-darken {\n  mix-blend-mode: darken;\n}\n\n.uk-blend-lighten {\n  mix-blend-mode: lighten;\n}\n\n.uk-blend-color-dodge {\n  mix-blend-mode: color-dodge;\n}\n\n.uk-blend-color-burn {\n  mix-blend-mode: color-burn;\n}\n\n.uk-blend-hard-light {\n  mix-blend-mode: hard-light;\n}\n\n.uk-blend-soft-light {\n  mix-blend-mode: soft-light;\n}\n\n.uk-blend-difference {\n  mix-blend-mode: difference;\n}\n\n.uk-blend-exclusion {\n  mix-blend-mode: exclusion;\n}\n\n.uk-blend-hue {\n  mix-blend-mode: hue;\n}\n\n.uk-blend-saturation {\n  mix-blend-mode: saturation;\n}\n\n.uk-blend-color {\n  mix-blend-mode: color;\n}\n\n.uk-blend-luminosity {\n  mix-blend-mode: luminosity;\n}\n\n/* Transform\n========================================================================== */\n.uk-transform-center {\n  transform: translate(-50%, -50%);\n}\n\n/* Transform Origin\n========================================================================== */\n.uk-transform-origin-top-left {\n  transform-origin: 0 0;\n}\n\n.uk-transform-origin-top-center {\n  transform-origin: 50% 0;\n}\n\n.uk-transform-origin-top-right {\n  transform-origin: 100% 0;\n}\n\n.uk-transform-origin-center-left {\n  transform-origin: 0 50%;\n}\n\n.uk-transform-origin-center-right {\n  transform-origin: 100% 50%;\n}\n\n.uk-transform-origin-bottom-left {\n  transform-origin: 0 100%;\n}\n\n.uk-transform-origin-bottom-center {\n  transform-origin: 50% 100%;\n}\n\n.uk-transform-origin-bottom-right {\n  transform-origin: 100% 100%;\n}\n\n/* ========================================================================\n   Component: Flex\n ========================================================================== */\n.uk-flex {\n  display: flex;\n}\n\n.uk-flex-inline {\n  display: inline-flex;\n}\n\n/*\n * Remove pseudo elements created by micro clearfix as precaution\n */\n.uk-flex::before,\n.uk-flex::after,\n.uk-flex-inline::before,\n.uk-flex-inline::after {\n  display: none;\n}\n\n/* Alignment\n ========================================================================== */\n/*\n * Align items along the main axis of the current line of the flex container\n * Row: Horizontal\n */\n.uk-flex-left {\n  justify-content: flex-start;\n}\n\n.uk-flex-center {\n  justify-content: center;\n}\n\n.uk-flex-right {\n  justify-content: flex-end;\n}\n\n.uk-flex-between {\n  justify-content: space-between;\n}\n\n.uk-flex-around {\n  justify-content: space-around;\n}\n\n/* Phone landscape and bigger */\n@media (min-width: 640px) {\n  .uk-flex-left\\@s {\n    justify-content: flex-start;\n  }\n\n  .uk-flex-center\\@s {\n    justify-content: center;\n  }\n\n  .uk-flex-right\\@s {\n    justify-content: flex-end;\n  }\n\n  .uk-flex-between\\@s {\n    justify-content: space-between;\n  }\n\n  .uk-flex-around\\@s {\n    justify-content: space-around;\n  }\n}\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-flex-left\\@m {\n    justify-content: flex-start;\n  }\n\n  .uk-flex-center\\@m {\n    justify-content: center;\n  }\n\n  .uk-flex-right\\@m {\n    justify-content: flex-end;\n  }\n\n  .uk-flex-between\\@m {\n    justify-content: space-between;\n  }\n\n  .uk-flex-around\\@m {\n    justify-content: space-around;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  .uk-flex-left\\@l {\n    justify-content: flex-start;\n  }\n\n  .uk-flex-center\\@l {\n    justify-content: center;\n  }\n\n  .uk-flex-right\\@l {\n    justify-content: flex-end;\n  }\n\n  .uk-flex-between\\@l {\n    justify-content: space-between;\n  }\n\n  .uk-flex-around\\@l {\n    justify-content: space-around;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1600px) {\n  .uk-flex-left\\@xl {\n    justify-content: flex-start;\n  }\n\n  .uk-flex-center\\@xl {\n    justify-content: center;\n  }\n\n  .uk-flex-right\\@xl {\n    justify-content: flex-end;\n  }\n\n  .uk-flex-between\\@xl {\n    justify-content: space-between;\n  }\n\n  .uk-flex-around\\@xl {\n    justify-content: space-around;\n  }\n}\n/*\n * Align items in the cross axis of the current line of the flex container\n * Row: Vertical\n */\n.uk-flex-stretch {\n  align-items: stretch;\n}\n\n.uk-flex-top {\n  align-items: flex-start;\n}\n\n.uk-flex-middle {\n  align-items: center;\n}\n\n.uk-flex-bottom {\n  align-items: flex-end;\n}\n\n/* Direction\n ========================================================================== */\n.uk-flex-row {\n  flex-direction: row;\n}\n\n.uk-flex-row-reverse {\n  flex-direction: row-reverse;\n}\n\n.uk-flex-column {\n  flex-direction: column;\n}\n\n.uk-flex-column-reverse {\n  flex-direction: column-reverse;\n}\n\n/* Wrap\n ========================================================================== */\n.uk-flex-nowrap {\n  flex-wrap: nowrap;\n}\n\n.uk-flex-wrap {\n  flex-wrap: wrap;\n}\n\n.uk-flex-wrap-reverse {\n  flex-wrap: wrap-reverse;\n}\n\n/*\n * Aligns items within the flex container when there is extra space in the cross-axis\n * Only works if there is more than one line of flex items\n */\n.uk-flex-wrap-stretch {\n  align-content: stretch;\n}\n\n.uk-flex-wrap-top {\n  align-content: flex-start;\n}\n\n.uk-flex-wrap-middle {\n  align-content: center;\n}\n\n.uk-flex-wrap-bottom {\n  align-content: flex-end;\n}\n\n.uk-flex-wrap-between {\n  align-content: space-between;\n}\n\n.uk-flex-wrap-around {\n  align-content: space-around;\n}\n\n/* Item ordering\n ========================================================================== */\n/*\n * Default is 0\n */\n.uk-flex-first {\n  order: -1;\n}\n\n.uk-flex-last {\n  order: 99;\n}\n\n/* Phone landscape and bigger */\n@media (min-width: 640px) {\n  .uk-flex-first\\@s {\n    order: -1;\n  }\n\n  .uk-flex-last\\@s {\n    order: 99;\n  }\n}\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-flex-first\\@m {\n    order: -1;\n  }\n\n  .uk-flex-last\\@m {\n    order: 99;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  .uk-flex-first\\@l {\n    order: -1;\n  }\n\n  .uk-flex-last\\@l {\n    order: 99;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1600px) {\n  .uk-flex-first\\@xl {\n    order: -1;\n  }\n\n  .uk-flex-last\\@xl {\n    order: 99;\n  }\n}\n/* Item dimensions\n ========================================================================== */\n/*\n * Initial: 0 1 auto\n * Content dimensions, but shrinks\n */\n/*\n * No Flex: 0 0 auto\n * Content dimensions\n */\n.uk-flex-none {\n  flex: none;\n}\n\n/*\n * Relative Flex: 1 1 auto\n * Space is allocated considering content\n */\n.uk-flex-auto {\n  flex: auto;\n}\n\n/*\n * Absolute Flex: 1 1 0%\n * Space is allocated solely based on flex\n */\n.uk-flex-1 {\n  flex: 1;\n}\n\n/* ========================================================================\n   Component: Margin\n ========================================================================== */\n/*\n * Default\n */\n.uk-margin {\n  margin-bottom: 20px;\n}\n\n* + .uk-margin {\n  margin-top: 20px !important;\n}\n\n.uk-margin-top {\n  margin-top: 20px !important;\n}\n\n.uk-margin-bottom {\n  margin-bottom: 20px !important;\n}\n\n.uk-margin-left {\n  margin-left: 20px !important;\n}\n\n.uk-margin-right {\n  margin-right: 20px !important;\n}\n\n/* Small\n ========================================================================== */\n.uk-margin-small {\n  margin-bottom: 10px;\n}\n\n* + .uk-margin-small {\n  margin-top: 10px !important;\n}\n\n.uk-margin-small-top {\n  margin-top: 10px !important;\n}\n\n.uk-margin-small-bottom {\n  margin-bottom: 10px !important;\n}\n\n.uk-margin-small-left {\n  margin-left: 10px !important;\n}\n\n.uk-margin-small-right {\n  margin-right: 10px !important;\n}\n\n/* Medium\n ========================================================================== */\n.uk-margin-medium {\n  margin-bottom: 40px;\n}\n\n* + .uk-margin-medium {\n  margin-top: 40px !important;\n}\n\n.uk-margin-medium-top {\n  margin-top: 40px !important;\n}\n\n.uk-margin-medium-bottom {\n  margin-bottom: 40px !important;\n}\n\n.uk-margin-medium-left {\n  margin-left: 40px !important;\n}\n\n.uk-margin-medium-right {\n  margin-right: 40px !important;\n}\n\n/* Large\n ========================================================================== */\n.uk-margin-large {\n  margin-bottom: 40px;\n}\n\n* + .uk-margin-large {\n  margin-top: 40px !important;\n}\n\n.uk-margin-large-top {\n  margin-top: 40px !important;\n}\n\n.uk-margin-large-bottom {\n  margin-bottom: 40px !important;\n}\n\n.uk-margin-large-left {\n  margin-left: 40px !important;\n}\n\n.uk-margin-large-right {\n  margin-right: 40px !important;\n}\n\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  .uk-margin-large {\n    margin-bottom: 70px;\n  }\n\n  * + .uk-margin-large {\n    margin-top: 70px !important;\n  }\n\n  .uk-margin-large-top {\n    margin-top: 70px !important;\n  }\n\n  .uk-margin-large-bottom {\n    margin-bottom: 70px !important;\n  }\n\n  .uk-margin-large-left {\n    margin-left: 70px !important;\n  }\n\n  .uk-margin-large-right {\n    margin-right: 70px !important;\n  }\n}\n/* XLarge\n ========================================================================== */\n.uk-margin-xlarge {\n  margin-bottom: 70px;\n}\n\n* + .uk-margin-xlarge {\n  margin-top: 70px !important;\n}\n\n.uk-margin-xlarge-top {\n  margin-top: 70px !important;\n}\n\n.uk-margin-xlarge-bottom {\n  margin-bottom: 70px !important;\n}\n\n.uk-margin-xlarge-left {\n  margin-left: 70px !important;\n}\n\n.uk-margin-xlarge-right {\n  margin-right: 70px !important;\n}\n\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  .uk-margin-xlarge {\n    margin-bottom: 140px;\n  }\n\n  * + .uk-margin-xlarge {\n    margin-top: 140px !important;\n  }\n\n  .uk-margin-xlarge-top {\n    margin-top: 140px !important;\n  }\n\n  .uk-margin-xlarge-bottom {\n    margin-bottom: 140px !important;\n  }\n\n  .uk-margin-xlarge-left {\n    margin-left: 140px !important;\n  }\n\n  .uk-margin-xlarge-right {\n    margin-right: 140px !important;\n  }\n}\n/* Auto\n ========================================================================== */\n.uk-margin-auto {\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n\n.uk-margin-auto-top {\n  margin-top: auto !important;\n}\n\n.uk-margin-auto-bottom {\n  margin-bottom: auto !important;\n}\n\n.uk-margin-auto-left {\n  margin-left: auto !important;\n}\n\n.uk-margin-auto-right {\n  margin-right: auto !important;\n}\n\n.uk-margin-auto-vertical {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n\n/* Phone landscape and bigger */\n@media (min-width: 640px) {\n  .uk-margin-auto\\@s {\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n\n  .uk-margin-auto-left\\@s {\n    margin-left: auto !important;\n  }\n\n  .uk-margin-auto-right\\@s {\n    margin-right: auto !important;\n  }\n}\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-margin-auto\\@m {\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n\n  .uk-margin-auto-left\\@m {\n    margin-left: auto !important;\n  }\n\n  .uk-margin-auto-right\\@m {\n    margin-right: auto !important;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  .uk-margin-auto\\@l {\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n\n  .uk-margin-auto-left\\@l {\n    margin-left: auto !important;\n  }\n\n  .uk-margin-auto-right\\@l {\n    margin-right: auto !important;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1600px) {\n  .uk-margin-auto\\@xl {\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n\n  .uk-margin-auto-left\\@xl {\n    margin-left: auto !important;\n  }\n\n  .uk-margin-auto-right\\@xl {\n    margin-right: auto !important;\n  }\n}\n/* Remove\n ========================================================================== */\n.uk-margin-remove {\n  margin: 0 !important;\n}\n\n.uk-margin-remove-top {\n  margin-top: 0 !important;\n}\n\n.uk-margin-remove-bottom {\n  margin-bottom: 0 !important;\n}\n\n.uk-margin-remove-left {\n  margin-left: 0 !important;\n}\n\n.uk-margin-remove-right {\n  margin-right: 0 !important;\n}\n\n.uk-margin-remove-vertical {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.uk-margin-remove-adjacent + *,\n.uk-margin-remove-first-child > :first-child {\n  margin-top: 0 !important;\n}\n\n.uk-margin-remove-last-child > :last-child {\n  margin-bottom: 0 !important;\n}\n\n/* Phone landscape and bigger */\n@media (min-width: 640px) {\n  .uk-margin-remove-left\\@s {\n    margin-left: 0 !important;\n  }\n\n  .uk-margin-remove-right\\@s {\n    margin-right: 0 !important;\n  }\n}\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-margin-remove-left\\@m {\n    margin-left: 0 !important;\n  }\n\n  .uk-margin-remove-right\\@m {\n    margin-right: 0 !important;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  .uk-margin-remove-left\\@l {\n    margin-left: 0 !important;\n  }\n\n  .uk-margin-remove-right\\@l {\n    margin-right: 0 !important;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1600px) {\n  .uk-margin-remove-left\\@xl {\n    margin-left: 0 !important;\n  }\n\n  .uk-margin-remove-right\\@xl {\n    margin-right: 0 !important;\n  }\n}\n/* ========================================================================\n   Component: Padding\n ========================================================================== */\n.uk-padding {\n  padding: 30px;\n}\n\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  .uk-padding {\n    padding: 40px;\n  }\n}\n/* Small\n ========================================================================== */\n.uk-padding-small {\n  padding: 15px;\n}\n\n/* Large\n ========================================================================== */\n.uk-padding-large {\n  padding: 30px;\n}\n\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  .uk-padding-large {\n    padding: 70px;\n  }\n}\n/* Remove\n ========================================================================== */\n.uk-padding-remove {\n  padding: 0 !important;\n}\n\n.uk-padding-remove-top {\n  padding-top: 0 !important;\n}\n\n.uk-padding-remove-bottom {\n  padding-bottom: 0 !important;\n}\n\n.uk-padding-remove-left {\n  padding-left: 0 !important;\n}\n\n.uk-padding-remove-right {\n  padding-right: 0 !important;\n}\n\n.uk-padding-remove-vertical {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.uk-padding-remove-horizontal {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n\n/* ========================================================================\n   Component: Position\n ========================================================================== */\n/* Directions\n ========================================================================== */\n[class*=uk-position-top],\n[class*=uk-position-bottom],\n[class*=uk-position-left],\n[class*=uk-position-right],\n[class*=uk-position-center] {\n  position: absolute !important;\n}\n\n/* Edges\n ========================================================================== */\n/* Don't use `width: 100%` because it is wrong if the parent has padding. */\n.uk-position-top {\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.uk-position-bottom {\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.uk-position-left {\n  top: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.uk-position-right {\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n\n/* Corners\n ========================================================================== */\n.uk-position-top-left {\n  top: 0;\n  left: 0;\n}\n\n.uk-position-top-right {\n  top: 0;\n  right: 0;\n}\n\n.uk-position-bottom-left {\n  bottom: 0;\n  left: 0;\n}\n\n.uk-position-bottom-right {\n  bottom: 0;\n  right: 0;\n}\n\n/*\n * Center\n * 1. Fix text wrapping if content is larger than 50% of the container.\n */\n.uk-position-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  /* 1 */\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n\n/* Vertical */\n[class*=uk-position-center-left],\n[class*=uk-position-center-right] {\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.uk-position-center-left {\n  left: 0;\n}\n\n.uk-position-center-right {\n  right: 0;\n}\n\n.uk-position-center-left-out {\n  right: 100%;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.uk-position-center-right-out {\n  left: 100%;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n/* Horizontal */\n.uk-position-top-center,\n.uk-position-bottom-center {\n  left: 50%;\n  transform: translateX(-50%);\n  /* 1 */\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n\n.uk-position-top-center {\n  top: 0;\n}\n\n.uk-position-bottom-center {\n  bottom: 0;\n}\n\n/* Cover\n ========================================================================== */\n.uk-position-cover {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n/* Utility\n ========================================================================== */\n.uk-position-relative {\n  position: relative !important;\n}\n\n.uk-position-absolute {\n  position: absolute !important;\n}\n\n.uk-position-fixed {\n  position: fixed !important;\n}\n\n.uk-position-z-index {\n  z-index: 1;\n}\n\n/* Margin modifier\n ========================================================================== */\n/*\n * Small\n */\n.uk-position-small {\n  max-width: calc(100% - (15px * 2));\n  margin: 15px;\n}\n\n.uk-position-small.uk-position-center {\n  transform: translate(-50%, -50%) translate(-15px, -15px);\n}\n\n.uk-position-small[class*=uk-position-center-left],\n.uk-position-small[class*=uk-position-center-right] {\n  transform: translateY(-50%) translateY(-15px);\n}\n\n.uk-position-small.uk-position-top-center,\n.uk-position-small.uk-position-bottom-center {\n  transform: translateX(-50%) translateX(-15px);\n}\n\n/*\n * Medium\n */\n.uk-position-medium {\n  max-width: calc(100% - (30px * 2));\n  margin: 30px;\n}\n\n.uk-position-medium.uk-position-center {\n  transform: translate(-50%, -50%) translate(-30px, -30px);\n}\n\n.uk-position-medium[class*=uk-position-center-left],\n.uk-position-medium[class*=uk-position-center-right] {\n  transform: translateY(-50%) translateY(-30px);\n}\n\n.uk-position-medium.uk-position-top-center,\n.uk-position-medium.uk-position-bottom-center {\n  transform: translateX(-50%) translateX(-30px);\n}\n\n/*\n * Large\n */\n.uk-position-large {\n  max-width: calc(100% - (30px * 2));\n  margin: 30px;\n}\n\n.uk-position-large.uk-position-center {\n  transform: translate(-50%, -50%) translate(-30px, -30px);\n}\n\n.uk-position-large[class*=uk-position-center-left],\n.uk-position-large[class*=uk-position-center-right] {\n  transform: translateY(-50%) translateY(-30px);\n}\n\n.uk-position-large.uk-position-top-center,\n.uk-position-large.uk-position-bottom-center {\n  transform: translateX(-50%) translateX(-30px);\n}\n\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  .uk-position-large {\n    max-width: calc(100% - (50px * 2));\n    margin: 50px;\n  }\n\n  .uk-position-large.uk-position-center {\n    transform: translate(-50%, -50%) translate(-50px, -50px);\n  }\n\n  .uk-position-large[class*=uk-position-center-left],\n.uk-position-large[class*=uk-position-center-right] {\n    transform: translateY(-50%) translateY(-50px);\n  }\n\n  .uk-position-large.uk-position-top-center,\n.uk-position-large.uk-position-bottom-center {\n    transform: translateX(-50%) translateX(-50px);\n  }\n}\n/* ========================================================================\n   Component: Transition\n ========================================================================== */\n/* Toggle (Hover + Focus)\n ========================================================================== */\n/*\n * 1. Prevent tab highlighting on iOS.\n */\n.uk-transition-toggle {\n  /* 1 */\n  -webkit-tap-highlight-color: transparent;\n}\n\n/*\n * Remove outline for `tabindex`\n */\n.uk-transition-toggle:focus {\n  outline: none;\n}\n\n/* Transitions\n ========================================================================== */\n/*\n * The toggle is triggered on touch devices by two methods:\n * 1. Using `:focus` and tabindex\n * 2. Using `:hover` and a `touchstart` event listener registered on the document\n *    (Doesn't work on Surface touch devices)\n *\n * Note: Transitions don't work with `uk-postion-center-*` classes because they also use `transform`,\n *       therefore it's recommended to use an extra `div` for the transition.\n */\n.uk-transition-fade,\n[class*=uk-transition-scale],\n[class*=uk-transition-slide] {\n  transition: 0.3s ease-out;\n  transition-property: opacity, transform, -webkit-filter;\n  transition-property: opacity, transform, filter;\n  transition-property: opacity, transform, filter, -webkit-filter;\n  opacity: 0;\n}\n\n/*\n * Fade\n */\n.uk-transition-toggle:hover .uk-transition-fade,\n.uk-transition-toggle:focus .uk-transition-fade,\n.uk-transition-active.uk-active .uk-transition-fade {\n  opacity: 1;\n}\n\n/*\n * Scale\n */\n.uk-transition-scale-up {\n  transform: scale(1, 1);\n}\n\n.uk-transition-scale-down {\n  transform: scale(1.1, 1.1);\n}\n\n/* Show */\n.uk-transition-toggle:hover .uk-transition-scale-up,\n.uk-transition-toggle:focus .uk-transition-scale-up,\n.uk-transition-active.uk-active .uk-transition-scale-up {\n  opacity: 1;\n  transform: scale(1.1, 1.1);\n}\n\n.uk-transition-toggle:hover .uk-transition-scale-down,\n.uk-transition-toggle:focus .uk-transition-scale-down,\n.uk-transition-active.uk-active .uk-transition-scale-down {\n  opacity: 1;\n  transform: scale(1, 1);\n}\n\n/*\n * Slide\n */\n.uk-transition-slide-top {\n  transform: translateY(-100%);\n}\n\n.uk-transition-slide-bottom {\n  transform: translateY(100%);\n}\n\n.uk-transition-slide-left {\n  transform: translateX(-100%);\n}\n\n.uk-transition-slide-right {\n  transform: translateX(100%);\n}\n\n.uk-transition-slide-top-small {\n  transform: translateY(-10px);\n}\n\n.uk-transition-slide-bottom-small {\n  transform: translateY(10px);\n}\n\n.uk-transition-slide-left-small {\n  transform: translateX(-10px);\n}\n\n.uk-transition-slide-right-small {\n  transform: translateX(10px);\n}\n\n.uk-transition-slide-top-medium {\n  transform: translateY(-50px);\n}\n\n.uk-transition-slide-bottom-medium {\n  transform: translateY(50px);\n}\n\n.uk-transition-slide-left-medium {\n  transform: translateX(-50px);\n}\n\n.uk-transition-slide-right-medium {\n  transform: translateX(50px);\n}\n\n/* Show */\n.uk-transition-toggle:hover [class*=uk-transition-slide],\n.uk-transition-toggle:focus [class*=uk-transition-slide],\n.uk-transition-active.uk-active [class*=uk-transition-slide] {\n  opacity: 1;\n  transform: translate(0, 0);\n}\n\n/* Opacity modifier\n ========================================================================== */\n.uk-transition-opaque {\n  opacity: 1;\n}\n\n/* Duration modifiers\n ========================================================================== */\n.uk-transition-slow {\n  transition-duration: 0.7s;\n}\n\n/* ========================================================================\n   Component: Visibility\n ========================================================================== */\n/*\n * Hidden\n * `hidden` attribute also set here to make it stronger\n */\n[hidden],\n.uk-hidden {\n  display: none !important;\n}\n\n/* Phone landscape and bigger */\n@media (min-width: 640px) {\n  .uk-hidden\\@s {\n    display: none !important;\n  }\n}\n/* Tablet landscape and bigger */\n@media (min-width: 960px) {\n  .uk-hidden\\@m {\n    display: none !important;\n  }\n}\n/* Desktop and bigger */\n@media (min-width: 1200px) {\n  .uk-hidden\\@l {\n    display: none !important;\n  }\n}\n/* Large screen and bigger */\n@media (min-width: 1600px) {\n  .uk-hidden\\@xl {\n    display: none !important;\n  }\n}\n/*\n * Visible\n */\n/* Phone portrait and smaller */\n@media (max-width: 639px) {\n  .uk-visible\\@s {\n    display: none !important;\n  }\n}\n/* Phone landscape and smaller */\n@media (max-width: 959px) {\n  .uk-visible\\@m {\n    display: none !important;\n  }\n}\n/* Tablet landscape and smaller */\n@media (max-width: 1199px) {\n  .uk-visible\\@l {\n    display: none !important;\n  }\n}\n/* Desktop and smaller */\n@media (max-width: 1599px) {\n  .uk-visible\\@xl {\n    display: none !important;\n  }\n}\n/* Visibility\n ========================================================================== */\n.uk-invisible {\n  visibility: hidden !important;\n}\n\n/* Toggle (Hover + Focus)\n ========================================================================== */\n/*\n * Hidden\n * 1. The toggle is triggered on touch devices using `:focus` and tabindex\n * 2. The target stays visible if any element within receives focus through keyboard\n *    Doesn't work in Edge, yet.\n * 3. Can't use `display: none` nor `visibility: hidden` because both are not focusable.\n *\n */\n/* 1 + 2 */\n.uk-visible-toggle:not(:hover):not(:focus) .uk-hidden-hover:not(:focus-within) {\n  /* 3 */\n  position: absolute !important;\n  width: 0 !important;\n  height: 0 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  overflow: hidden !important;\n}\n\n/*\n * Invisible\n */\n/* 1 + 2 */\n.uk-visible-toggle:not(:hover):not(:focus) .uk-invisible-hover:not(:focus-within) {\n  /* 3 */\n  opacity: 0 !important;\n}\n\n/*\n * 1. Prevent tab highlighting on iOS.\n */\n.uk-visible-toggle {\n  /* 1 */\n  -webkit-tap-highlight-color: transparent;\n}\n\n/*\n * Remove outline for `tabindex`\n */\n.uk-visible-toggle:focus {\n  outline: none;\n}\n\n/* Touch\n ========================================================================== */\n/*\n * Hide if primary pointing device has limited accuracy, e.g. a touch screen.\n * Works on mobile browsers: Safari, Chrome and Android browser\n */\n@media (pointer: coarse) {\n  .uk-hidden-touch {\n    display: none !important;\n  }\n}\n/*\n * Hide if primary pointing device is accurate, e.g. mouse.\n * 1. Fallback for IE11 and Firefox, because `pointer` is not supported\n * 2. Reset if supported\n */\n/* 1 */\n.uk-hidden-notouch {\n  display: none !important;\n}\n\n@media (pointer: coarse) {\n  .uk-hidden-notouch {\n    display: block !important;\n  }\n}\n/* ========================================================================\n   Component: Inverse\n ========================================================================== */\n/*\n * Implemented class depends on the general theme color\n * `uk-light` is for light colors on dark backgrounds\n * `uk-dark` is or dark colors on light backgrounds\n */\n.uk-light, .uk-section-primary:not(.uk-preserve-color), .uk-section-secondary:not(.uk-preserve-color), .uk-tile-primary:not(.uk-preserve-color), .uk-tile-secondary:not(.uk-preserve-color), .uk-card-primary.uk-card-body, .uk-card-primary > :not([class*=uk-card-media]), .uk-card-secondary.uk-card-body, .uk-card-secondary > :not([class*=uk-card-media]), .uk-overlay-primary, .uk-offcanvas-bar {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light a, .uk-section-primary:not(.uk-preserve-color) a, .uk-section-secondary:not(.uk-preserve-color) a, .uk-tile-primary:not(.uk-preserve-color) a, .uk-tile-secondary:not(.uk-preserve-color) a, .uk-card-primary.uk-card-body a, .uk-card-primary > :not([class*=uk-card-media]) a, .uk-card-secondary.uk-card-body a, .uk-card-secondary > :not([class*=uk-card-media]) a, .uk-overlay-primary a, .uk-offcanvas-bar a,\n.uk-light .uk-link,\n.uk-section-primary:not(.uk-preserve-color) .uk-link,\n.uk-section-secondary:not(.uk-preserve-color) .uk-link,\n.uk-tile-primary:not(.uk-preserve-color) .uk-link,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-link,\n.uk-card-primary.uk-card-body .uk-link,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-link,\n.uk-card-secondary.uk-card-body .uk-link,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-link,\n.uk-overlay-primary .uk-link,\n.uk-offcanvas-bar .uk-link {\n  color: #fff;\n}\n.uk-light a:hover, .uk-section-primary:not(.uk-preserve-color) a:hover, .uk-section-secondary:not(.uk-preserve-color) a:hover, .uk-tile-primary:not(.uk-preserve-color) a:hover, .uk-tile-secondary:not(.uk-preserve-color) a:hover, .uk-card-primary.uk-card-body a:hover, .uk-card-primary > :not([class*=uk-card-media]) a:hover, .uk-card-secondary.uk-card-body a:hover, .uk-card-secondary > :not([class*=uk-card-media]) a:hover, .uk-overlay-primary a:hover, .uk-offcanvas-bar a:hover,\n.uk-light .uk-link:hover,\n.uk-section-primary:not(.uk-preserve-color) .uk-link:hover,\n.uk-section-secondary:not(.uk-preserve-color) .uk-link:hover,\n.uk-tile-primary:not(.uk-preserve-color) .uk-link:hover,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-link:hover,\n.uk-card-primary.uk-card-body .uk-link:hover,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-link:hover,\n.uk-card-secondary.uk-card-body .uk-link:hover,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-link:hover,\n.uk-overlay-primary .uk-link:hover,\n.uk-offcanvas-bar .uk-link:hover {\n  color: #fff;\n}\n.uk-light :not(pre) > code, .uk-section-primary:not(.uk-preserve-color) :not(pre) > code, .uk-section-secondary:not(.uk-preserve-color) :not(pre) > code, .uk-tile-primary:not(.uk-preserve-color) :not(pre) > code, .uk-tile-secondary:not(.uk-preserve-color) :not(pre) > code, .uk-card-primary.uk-card-body :not(pre) > code, .uk-card-primary > :not([class*=uk-card-media]) :not(pre) > code, .uk-card-secondary.uk-card-body :not(pre) > code, .uk-card-secondary > :not([class*=uk-card-media]) :not(pre) > code, .uk-overlay-primary :not(pre) > code, .uk-offcanvas-bar :not(pre) > code,\n.uk-light :not(pre) > kbd,\n.uk-section-primary:not(.uk-preserve-color) :not(pre) > kbd,\n.uk-section-secondary:not(.uk-preserve-color) :not(pre) > kbd,\n.uk-tile-primary:not(.uk-preserve-color) :not(pre) > kbd,\n.uk-tile-secondary:not(.uk-preserve-color) :not(pre) > kbd,\n.uk-card-primary.uk-card-body :not(pre) > kbd,\n.uk-card-primary > :not([class*=uk-card-media]) :not(pre) > kbd,\n.uk-card-secondary.uk-card-body :not(pre) > kbd,\n.uk-card-secondary > :not([class*=uk-card-media]) :not(pre) > kbd,\n.uk-overlay-primary :not(pre) > kbd,\n.uk-offcanvas-bar :not(pre) > kbd,\n.uk-light :not(pre) > samp,\n.uk-section-primary:not(.uk-preserve-color) :not(pre) > samp,\n.uk-section-secondary:not(.uk-preserve-color) :not(pre) > samp,\n.uk-tile-primary:not(.uk-preserve-color) :not(pre) > samp,\n.uk-tile-secondary:not(.uk-preserve-color) :not(pre) > samp,\n.uk-card-primary.uk-card-body :not(pre) > samp,\n.uk-card-primary > :not([class*=uk-card-media]) :not(pre) > samp,\n.uk-card-secondary.uk-card-body :not(pre) > samp,\n.uk-card-secondary > :not([class*=uk-card-media]) :not(pre) > samp,\n.uk-overlay-primary :not(pre) > samp,\n.uk-offcanvas-bar :not(pre) > samp {\n  color: rgba(255, 255, 255, 0.7);\n  background: rgba(255, 255, 255, 0.1);\n}\n.uk-light em, .uk-section-primary:not(.uk-preserve-color) em, .uk-section-secondary:not(.uk-preserve-color) em, .uk-tile-primary:not(.uk-preserve-color) em, .uk-tile-secondary:not(.uk-preserve-color) em, .uk-card-primary.uk-card-body em, .uk-card-primary > :not([class*=uk-card-media]) em, .uk-card-secondary.uk-card-body em, .uk-card-secondary > :not([class*=uk-card-media]) em, .uk-overlay-primary em, .uk-offcanvas-bar em {\n  color: #fff;\n}\n.uk-light h1, .uk-section-primary:not(.uk-preserve-color) h1, .uk-section-secondary:not(.uk-preserve-color) h1, .uk-tile-primary:not(.uk-preserve-color) h1, .uk-tile-secondary:not(.uk-preserve-color) h1, .uk-card-primary.uk-card-body h1, .uk-card-primary > :not([class*=uk-card-media]) h1, .uk-card-secondary.uk-card-body h1, .uk-card-secondary > :not([class*=uk-card-media]) h1, .uk-overlay-primary h1, .uk-offcanvas-bar h1, .uk-light .uk-h1, .uk-section-primary:not(.uk-preserve-color) .uk-h1, .uk-section-secondary:not(.uk-preserve-color) .uk-h1, .uk-tile-primary:not(.uk-preserve-color) .uk-h1, .uk-tile-secondary:not(.uk-preserve-color) .uk-h1, .uk-card-primary.uk-card-body .uk-h1, .uk-card-primary > :not([class*=uk-card-media]) .uk-h1, .uk-card-secondary.uk-card-body .uk-h1, .uk-card-secondary > :not([class*=uk-card-media]) .uk-h1, .uk-overlay-primary .uk-h1, .uk-offcanvas-bar .uk-h1,\n.uk-light h2,\n.uk-section-primary:not(.uk-preserve-color) h2,\n.uk-section-secondary:not(.uk-preserve-color) h2,\n.uk-tile-primary:not(.uk-preserve-color) h2,\n.uk-tile-secondary:not(.uk-preserve-color) h2,\n.uk-card-primary.uk-card-body h2,\n.uk-card-primary > :not([class*=uk-card-media]) h2,\n.uk-card-secondary.uk-card-body h2,\n.uk-card-secondary > :not([class*=uk-card-media]) h2,\n.uk-overlay-primary h2,\n.uk-offcanvas-bar h2, .uk-light .uk-h2, .uk-section-primary:not(.uk-preserve-color) .uk-h2, .uk-section-secondary:not(.uk-preserve-color) .uk-h2, .uk-tile-primary:not(.uk-preserve-color) .uk-h2, .uk-tile-secondary:not(.uk-preserve-color) .uk-h2, .uk-card-primary.uk-card-body .uk-h2, .uk-card-primary > :not([class*=uk-card-media]) .uk-h2, .uk-card-secondary.uk-card-body .uk-h2, .uk-card-secondary > :not([class*=uk-card-media]) .uk-h2, .uk-overlay-primary .uk-h2, .uk-offcanvas-bar .uk-h2,\n.uk-light h3,\n.uk-section-primary:not(.uk-preserve-color) h3,\n.uk-section-secondary:not(.uk-preserve-color) h3,\n.uk-tile-primary:not(.uk-preserve-color) h3,\n.uk-tile-secondary:not(.uk-preserve-color) h3,\n.uk-card-primary.uk-card-body h3,\n.uk-card-primary > :not([class*=uk-card-media]) h3,\n.uk-card-secondary.uk-card-body h3,\n.uk-card-secondary > :not([class*=uk-card-media]) h3,\n.uk-overlay-primary h3,\n.uk-offcanvas-bar h3, .uk-light .uk-h3, .uk-section-primary:not(.uk-preserve-color) .uk-h3, .uk-section-secondary:not(.uk-preserve-color) .uk-h3, .uk-tile-primary:not(.uk-preserve-color) .uk-h3, .uk-tile-secondary:not(.uk-preserve-color) .uk-h3, .uk-card-primary.uk-card-body .uk-h3, .uk-card-primary > :not([class*=uk-card-media]) .uk-h3, .uk-card-secondary.uk-card-body .uk-h3, .uk-card-secondary > :not([class*=uk-card-media]) .uk-h3, .uk-overlay-primary .uk-h3, .uk-offcanvas-bar .uk-h3,\n.uk-light h4,\n.uk-section-primary:not(.uk-preserve-color) h4,\n.uk-section-secondary:not(.uk-preserve-color) h4,\n.uk-tile-primary:not(.uk-preserve-color) h4,\n.uk-tile-secondary:not(.uk-preserve-color) h4,\n.uk-card-primary.uk-card-body h4,\n.uk-card-primary > :not([class*=uk-card-media]) h4,\n.uk-card-secondary.uk-card-body h4,\n.uk-card-secondary > :not([class*=uk-card-media]) h4,\n.uk-overlay-primary h4,\n.uk-offcanvas-bar h4, .uk-light .uk-h4, .uk-section-primary:not(.uk-preserve-color) .uk-h4, .uk-section-secondary:not(.uk-preserve-color) .uk-h4, .uk-tile-primary:not(.uk-preserve-color) .uk-h4, .uk-tile-secondary:not(.uk-preserve-color) .uk-h4, .uk-card-primary.uk-card-body .uk-h4, .uk-card-primary > :not([class*=uk-card-media]) .uk-h4, .uk-card-secondary.uk-card-body .uk-h4, .uk-card-secondary > :not([class*=uk-card-media]) .uk-h4, .uk-overlay-primary .uk-h4, .uk-offcanvas-bar .uk-h4,\n.uk-light h5,\n.uk-section-primary:not(.uk-preserve-color) h5,\n.uk-section-secondary:not(.uk-preserve-color) h5,\n.uk-tile-primary:not(.uk-preserve-color) h5,\n.uk-tile-secondary:not(.uk-preserve-color) h5,\n.uk-card-primary.uk-card-body h5,\n.uk-card-primary > :not([class*=uk-card-media]) h5,\n.uk-card-secondary.uk-card-body h5,\n.uk-card-secondary > :not([class*=uk-card-media]) h5,\n.uk-overlay-primary h5,\n.uk-offcanvas-bar h5, .uk-light .uk-h5, .uk-section-primary:not(.uk-preserve-color) .uk-h5, .uk-section-secondary:not(.uk-preserve-color) .uk-h5, .uk-tile-primary:not(.uk-preserve-color) .uk-h5, .uk-tile-secondary:not(.uk-preserve-color) .uk-h5, .uk-card-primary.uk-card-body .uk-h5, .uk-card-primary > :not([class*=uk-card-media]) .uk-h5, .uk-card-secondary.uk-card-body .uk-h5, .uk-card-secondary > :not([class*=uk-card-media]) .uk-h5, .uk-overlay-primary .uk-h5, .uk-offcanvas-bar .uk-h5,\n.uk-light h6,\n.uk-section-primary:not(.uk-preserve-color) h6,\n.uk-section-secondary:not(.uk-preserve-color) h6,\n.uk-tile-primary:not(.uk-preserve-color) h6,\n.uk-tile-secondary:not(.uk-preserve-color) h6,\n.uk-card-primary.uk-card-body h6,\n.uk-card-primary > :not([class*=uk-card-media]) h6,\n.uk-card-secondary.uk-card-body h6,\n.uk-card-secondary > :not([class*=uk-card-media]) h6,\n.uk-overlay-primary h6,\n.uk-offcanvas-bar h6, .uk-light .uk-h6, .uk-section-primary:not(.uk-preserve-color) .uk-h6, .uk-section-secondary:not(.uk-preserve-color) .uk-h6, .uk-tile-primary:not(.uk-preserve-color) .uk-h6, .uk-tile-secondary:not(.uk-preserve-color) .uk-h6, .uk-card-primary.uk-card-body .uk-h6, .uk-card-primary > :not([class*=uk-card-media]) .uk-h6, .uk-card-secondary.uk-card-body .uk-h6, .uk-card-secondary > :not([class*=uk-card-media]) .uk-h6, .uk-overlay-primary .uk-h6, .uk-offcanvas-bar .uk-h6,\n.uk-light .uk-heading-small,\n.uk-section-primary:not(.uk-preserve-color) .uk-heading-small,\n.uk-section-secondary:not(.uk-preserve-color) .uk-heading-small,\n.uk-tile-primary:not(.uk-preserve-color) .uk-heading-small,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-heading-small,\n.uk-card-primary.uk-card-body .uk-heading-small,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-heading-small,\n.uk-card-secondary.uk-card-body .uk-heading-small,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-heading-small,\n.uk-overlay-primary .uk-heading-small,\n.uk-offcanvas-bar .uk-heading-small,\n.uk-light .uk-heading-medium,\n.uk-section-primary:not(.uk-preserve-color) .uk-heading-medium,\n.uk-section-secondary:not(.uk-preserve-color) .uk-heading-medium,\n.uk-tile-primary:not(.uk-preserve-color) .uk-heading-medium,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-heading-medium,\n.uk-card-primary.uk-card-body .uk-heading-medium,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-heading-medium,\n.uk-card-secondary.uk-card-body .uk-heading-medium,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-heading-medium,\n.uk-overlay-primary .uk-heading-medium,\n.uk-offcanvas-bar .uk-heading-medium,\n.uk-light .uk-heading-large,\n.uk-section-primary:not(.uk-preserve-color) .uk-heading-large,\n.uk-section-secondary:not(.uk-preserve-color) .uk-heading-large,\n.uk-tile-primary:not(.uk-preserve-color) .uk-heading-large,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-heading-large,\n.uk-card-primary.uk-card-body .uk-heading-large,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-heading-large,\n.uk-card-secondary.uk-card-body .uk-heading-large,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-heading-large,\n.uk-overlay-primary .uk-heading-large,\n.uk-offcanvas-bar .uk-heading-large,\n.uk-light .uk-heading-xlarge,\n.uk-section-primary:not(.uk-preserve-color) .uk-heading-xlarge,\n.uk-section-secondary:not(.uk-preserve-color) .uk-heading-xlarge,\n.uk-tile-primary:not(.uk-preserve-color) .uk-heading-xlarge,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-heading-xlarge,\n.uk-card-primary.uk-card-body .uk-heading-xlarge,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-heading-xlarge,\n.uk-card-secondary.uk-card-body .uk-heading-xlarge,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-heading-xlarge,\n.uk-overlay-primary .uk-heading-xlarge,\n.uk-offcanvas-bar .uk-heading-xlarge,\n.uk-light .uk-heading-2xlarge,\n.uk-section-primary:not(.uk-preserve-color) .uk-heading-2xlarge,\n.uk-section-secondary:not(.uk-preserve-color) .uk-heading-2xlarge,\n.uk-tile-primary:not(.uk-preserve-color) .uk-heading-2xlarge,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-heading-2xlarge,\n.uk-card-primary.uk-card-body .uk-heading-2xlarge,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-heading-2xlarge,\n.uk-card-secondary.uk-card-body .uk-heading-2xlarge,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-heading-2xlarge,\n.uk-overlay-primary .uk-heading-2xlarge,\n.uk-offcanvas-bar .uk-heading-2xlarge {\n  color: #fff;\n}\n.uk-light blockquote, .uk-section-primary:not(.uk-preserve-color) blockquote, .uk-section-secondary:not(.uk-preserve-color) blockquote, .uk-tile-primary:not(.uk-preserve-color) blockquote, .uk-tile-secondary:not(.uk-preserve-color) blockquote, .uk-card-primary.uk-card-body blockquote, .uk-card-primary > :not([class*=uk-card-media]) blockquote, .uk-card-secondary.uk-card-body blockquote, .uk-card-secondary > :not([class*=uk-card-media]) blockquote, .uk-overlay-primary blockquote, .uk-offcanvas-bar blockquote {\n  color: #fff;\n}\n.uk-light blockquote footer, .uk-section-primary:not(.uk-preserve-color) blockquote footer, .uk-section-secondary:not(.uk-preserve-color) blockquote footer, .uk-tile-primary:not(.uk-preserve-color) blockquote footer, .uk-tile-secondary:not(.uk-preserve-color) blockquote footer, .uk-card-primary.uk-card-body blockquote footer, .uk-card-primary > :not([class*=uk-card-media]) blockquote footer, .uk-card-secondary.uk-card-body blockquote footer, .uk-card-secondary > :not([class*=uk-card-media]) blockquote footer, .uk-overlay-primary blockquote footer, .uk-offcanvas-bar blockquote footer {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light hr, .uk-section-primary:not(.uk-preserve-color) hr, .uk-section-secondary:not(.uk-preserve-color) hr, .uk-tile-primary:not(.uk-preserve-color) hr, .uk-tile-secondary:not(.uk-preserve-color) hr, .uk-card-primary.uk-card-body hr, .uk-card-primary > :not([class*=uk-card-media]) hr, .uk-card-secondary.uk-card-body hr, .uk-card-secondary > :not([class*=uk-card-media]) hr, .uk-overlay-primary hr, .uk-offcanvas-bar hr, .uk-light .uk-hr, .uk-section-primary:not(.uk-preserve-color) .uk-hr, .uk-section-secondary:not(.uk-preserve-color) .uk-hr, .uk-tile-primary:not(.uk-preserve-color) .uk-hr, .uk-tile-secondary:not(.uk-preserve-color) .uk-hr, .uk-card-primary.uk-card-body .uk-hr, .uk-card-primary > :not([class*=uk-card-media]) .uk-hr, .uk-card-secondary.uk-card-body .uk-hr, .uk-card-secondary > :not([class*=uk-card-media]) .uk-hr, .uk-overlay-primary .uk-hr, .uk-offcanvas-bar .uk-hr {\n  border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-light .uk-link-muted, .uk-section-primary:not(.uk-preserve-color) .uk-link-muted, .uk-section-secondary:not(.uk-preserve-color) .uk-link-muted, .uk-tile-primary:not(.uk-preserve-color) .uk-link-muted, .uk-tile-secondary:not(.uk-preserve-color) .uk-link-muted, .uk-card-primary.uk-card-body .uk-link-muted, .uk-card-primary > :not([class*=uk-card-media]) .uk-link-muted, .uk-card-secondary.uk-card-body .uk-link-muted, .uk-card-secondary > :not([class*=uk-card-media]) .uk-link-muted, .uk-overlay-primary .uk-link-muted, .uk-offcanvas-bar .uk-link-muted,\n.uk-light .uk-link-muted a,\n.uk-section-primary:not(.uk-preserve-color) .uk-link-muted a,\n.uk-section-secondary:not(.uk-preserve-color) .uk-link-muted a,\n.uk-tile-primary:not(.uk-preserve-color) .uk-link-muted a,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-link-muted a,\n.uk-card-primary.uk-card-body .uk-link-muted a,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-link-muted a,\n.uk-card-secondary.uk-card-body .uk-link-muted a,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-link-muted a,\n.uk-overlay-primary .uk-link-muted a,\n.uk-offcanvas-bar .uk-link-muted a {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-link-muted:hover, .uk-section-primary:not(.uk-preserve-color) .uk-link-muted:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-link-muted:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-link-muted:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-link-muted:hover, .uk-card-primary.uk-card-body .uk-link-muted:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-link-muted:hover, .uk-card-secondary.uk-card-body .uk-link-muted:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-link-muted:hover, .uk-overlay-primary .uk-link-muted:hover, .uk-offcanvas-bar .uk-link-muted:hover,\n.uk-light .uk-link-muted a:hover,\n.uk-section-primary:not(.uk-preserve-color) .uk-link-muted a:hover,\n.uk-section-secondary:not(.uk-preserve-color) .uk-link-muted a:hover,\n.uk-tile-primary:not(.uk-preserve-color) .uk-link-muted a:hover,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-link-muted a:hover,\n.uk-card-primary.uk-card-body .uk-link-muted a:hover,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-link-muted a:hover,\n.uk-card-secondary.uk-card-body .uk-link-muted a:hover,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-link-muted a:hover,\n.uk-overlay-primary .uk-link-muted a:hover,\n.uk-offcanvas-bar .uk-link-muted a:hover {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-link-text:hover, .uk-section-primary:not(.uk-preserve-color) .uk-link-text:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-link-text:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-link-text:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-link-text:hover, .uk-card-primary.uk-card-body .uk-link-text:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-link-text:hover, .uk-card-secondary.uk-card-body .uk-link-text:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-link-text:hover, .uk-overlay-primary .uk-link-text:hover, .uk-offcanvas-bar .uk-link-text:hover,\n.uk-light .uk-link-text a:hover,\n.uk-section-primary:not(.uk-preserve-color) .uk-link-text a:hover,\n.uk-section-secondary:not(.uk-preserve-color) .uk-link-text a:hover,\n.uk-tile-primary:not(.uk-preserve-color) .uk-link-text a:hover,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-link-text a:hover,\n.uk-card-primary.uk-card-body .uk-link-text a:hover,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-link-text a:hover,\n.uk-card-secondary.uk-card-body .uk-link-text a:hover,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-link-text a:hover,\n.uk-overlay-primary .uk-link-text a:hover,\n.uk-offcanvas-bar .uk-link-text a:hover {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-link-heading:hover, .uk-section-primary:not(.uk-preserve-color) .uk-link-heading:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-link-heading:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-link-heading:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-link-heading:hover, .uk-card-primary.uk-card-body .uk-link-heading:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-link-heading:hover, .uk-card-secondary.uk-card-body .uk-link-heading:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-link-heading:hover, .uk-overlay-primary .uk-link-heading:hover, .uk-offcanvas-bar .uk-link-heading:hover,\n.uk-light .uk-link-heading a:hover,\n.uk-section-primary:not(.uk-preserve-color) .uk-link-heading a:hover,\n.uk-section-secondary:not(.uk-preserve-color) .uk-link-heading a:hover,\n.uk-tile-primary:not(.uk-preserve-color) .uk-link-heading a:hover,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-link-heading a:hover,\n.uk-card-primary.uk-card-body .uk-link-heading a:hover,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-link-heading a:hover,\n.uk-card-secondary.uk-card-body .uk-link-heading a:hover,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-link-heading a:hover,\n.uk-overlay-primary .uk-link-heading a:hover,\n.uk-offcanvas-bar .uk-link-heading a:hover {\n  color: #fff;\n}\n.uk-light .uk-heading-divider, .uk-section-primary:not(.uk-preserve-color) .uk-heading-divider, .uk-section-secondary:not(.uk-preserve-color) .uk-heading-divider, .uk-tile-primary:not(.uk-preserve-color) .uk-heading-divider, .uk-tile-secondary:not(.uk-preserve-color) .uk-heading-divider, .uk-card-primary.uk-card-body .uk-heading-divider, .uk-card-primary > :not([class*=uk-card-media]) .uk-heading-divider, .uk-card-secondary.uk-card-body .uk-heading-divider, .uk-card-secondary > :not([class*=uk-card-media]) .uk-heading-divider, .uk-overlay-primary .uk-heading-divider, .uk-offcanvas-bar .uk-heading-divider {\n  border-bottom-color: rgba(255, 255, 255, 0.2);\n}\n.uk-light .uk-heading-bullet::before, .uk-section-primary:not(.uk-preserve-color) .uk-heading-bullet::before, .uk-section-secondary:not(.uk-preserve-color) .uk-heading-bullet::before, .uk-tile-primary:not(.uk-preserve-color) .uk-heading-bullet::before, .uk-tile-secondary:not(.uk-preserve-color) .uk-heading-bullet::before, .uk-card-primary.uk-card-body .uk-heading-bullet::before, .uk-card-primary > :not([class*=uk-card-media]) .uk-heading-bullet::before, .uk-card-secondary.uk-card-body .uk-heading-bullet::before, .uk-card-secondary > :not([class*=uk-card-media]) .uk-heading-bullet::before, .uk-overlay-primary .uk-heading-bullet::before, .uk-offcanvas-bar .uk-heading-bullet::before {\n  border-left-color: rgba(255, 255, 255, 0.2);\n}\n.uk-light .uk-heading-line > ::before, .uk-section-primary:not(.uk-preserve-color) .uk-heading-line > ::before, .uk-section-secondary:not(.uk-preserve-color) .uk-heading-line > ::before, .uk-tile-primary:not(.uk-preserve-color) .uk-heading-line > ::before, .uk-tile-secondary:not(.uk-preserve-color) .uk-heading-line > ::before, .uk-card-primary.uk-card-body .uk-heading-line > ::before, .uk-card-primary > :not([class*=uk-card-media]) .uk-heading-line > ::before, .uk-card-secondary.uk-card-body .uk-heading-line > ::before, .uk-card-secondary > :not([class*=uk-card-media]) .uk-heading-line > ::before, .uk-overlay-primary .uk-heading-line > ::before, .uk-offcanvas-bar .uk-heading-line > ::before,\n.uk-light .uk-heading-line > ::after,\n.uk-section-primary:not(.uk-preserve-color) .uk-heading-line > ::after,\n.uk-section-secondary:not(.uk-preserve-color) .uk-heading-line > ::after,\n.uk-tile-primary:not(.uk-preserve-color) .uk-heading-line > ::after,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-heading-line > ::after,\n.uk-card-primary.uk-card-body .uk-heading-line > ::after,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-heading-line > ::after,\n.uk-card-secondary.uk-card-body .uk-heading-line > ::after,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-heading-line > ::after,\n.uk-overlay-primary .uk-heading-line > ::after,\n.uk-offcanvas-bar .uk-heading-line > ::after {\n  border-bottom-color: rgba(255, 255, 255, 0.2);\n}\n.uk-light .uk-divider-icon, .uk-section-primary:not(.uk-preserve-color) .uk-divider-icon, .uk-section-secondary:not(.uk-preserve-color) .uk-divider-icon, .uk-tile-primary:not(.uk-preserve-color) .uk-divider-icon, .uk-tile-secondary:not(.uk-preserve-color) .uk-divider-icon, .uk-card-primary.uk-card-body .uk-divider-icon, .uk-card-primary > :not([class*=uk-card-media]) .uk-divider-icon, .uk-card-secondary.uk-card-body .uk-divider-icon, .uk-card-secondary > :not([class*=uk-card-media]) .uk-divider-icon, .uk-overlay-primary .uk-divider-icon, .uk-offcanvas-bar .uk-divider-icon {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22none%22%20stroke%3D%22rgba(255, 255, 255, 0.2)%22%20stroke-width%3D%222%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%227%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n}\n.uk-light .uk-divider-icon::before, .uk-section-primary:not(.uk-preserve-color) .uk-divider-icon::before, .uk-section-secondary:not(.uk-preserve-color) .uk-divider-icon::before, .uk-tile-primary:not(.uk-preserve-color) .uk-divider-icon::before, .uk-tile-secondary:not(.uk-preserve-color) .uk-divider-icon::before, .uk-card-primary.uk-card-body .uk-divider-icon::before, .uk-card-primary > :not([class*=uk-card-media]) .uk-divider-icon::before, .uk-card-secondary.uk-card-body .uk-divider-icon::before, .uk-card-secondary > :not([class*=uk-card-media]) .uk-divider-icon::before, .uk-overlay-primary .uk-divider-icon::before, .uk-offcanvas-bar .uk-divider-icon::before,\n.uk-light .uk-divider-icon::after,\n.uk-section-primary:not(.uk-preserve-color) .uk-divider-icon::after,\n.uk-section-secondary:not(.uk-preserve-color) .uk-divider-icon::after,\n.uk-tile-primary:not(.uk-preserve-color) .uk-divider-icon::after,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-divider-icon::after,\n.uk-card-primary.uk-card-body .uk-divider-icon::after,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-divider-icon::after,\n.uk-card-secondary.uk-card-body .uk-divider-icon::after,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-divider-icon::after,\n.uk-overlay-primary .uk-divider-icon::after,\n.uk-offcanvas-bar .uk-divider-icon::after {\n  border-bottom-color: rgba(255, 255, 255, 0.2);\n}\n.uk-light .uk-divider-small::after, .uk-section-primary:not(.uk-preserve-color) .uk-divider-small::after, .uk-section-secondary:not(.uk-preserve-color) .uk-divider-small::after, .uk-tile-primary:not(.uk-preserve-color) .uk-divider-small::after, .uk-tile-secondary:not(.uk-preserve-color) .uk-divider-small::after, .uk-card-primary.uk-card-body .uk-divider-small::after, .uk-card-primary > :not([class*=uk-card-media]) .uk-divider-small::after, .uk-card-secondary.uk-card-body .uk-divider-small::after, .uk-card-secondary > :not([class*=uk-card-media]) .uk-divider-small::after, .uk-overlay-primary .uk-divider-small::after, .uk-offcanvas-bar .uk-divider-small::after {\n  border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-light .uk-divider-vertical, .uk-section-primary:not(.uk-preserve-color) .uk-divider-vertical, .uk-section-secondary:not(.uk-preserve-color) .uk-divider-vertical, .uk-tile-primary:not(.uk-preserve-color) .uk-divider-vertical, .uk-tile-secondary:not(.uk-preserve-color) .uk-divider-vertical, .uk-card-primary.uk-card-body .uk-divider-vertical, .uk-card-primary > :not([class*=uk-card-media]) .uk-divider-vertical, .uk-card-secondary.uk-card-body .uk-divider-vertical, .uk-card-secondary > :not([class*=uk-card-media]) .uk-divider-vertical, .uk-overlay-primary .uk-divider-vertical, .uk-offcanvas-bar .uk-divider-vertical {\n  border-left-color: rgba(255, 255, 255, 0.2);\n}\n.uk-light .uk-list-divider > li:nth-child(n+2), .uk-section-primary:not(.uk-preserve-color) .uk-list-divider > li:nth-child(n+2), .uk-section-secondary:not(.uk-preserve-color) .uk-list-divider > li:nth-child(n+2), .uk-tile-primary:not(.uk-preserve-color) .uk-list-divider > li:nth-child(n+2), .uk-tile-secondary:not(.uk-preserve-color) .uk-list-divider > li:nth-child(n+2), .uk-card-primary.uk-card-body .uk-list-divider > li:nth-child(n+2), .uk-card-primary > :not([class*=uk-card-media]) .uk-list-divider > li:nth-child(n+2), .uk-card-secondary.uk-card-body .uk-list-divider > li:nth-child(n+2), .uk-card-secondary > :not([class*=uk-card-media]) .uk-list-divider > li:nth-child(n+2), .uk-overlay-primary .uk-list-divider > li:nth-child(n+2), .uk-offcanvas-bar .uk-list-divider > li:nth-child(n+2) {\n  border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-light .uk-list-striped > li:nth-of-type(odd), .uk-section-primary:not(.uk-preserve-color) .uk-list-striped > li:nth-of-type(odd), .uk-section-secondary:not(.uk-preserve-color) .uk-list-striped > li:nth-of-type(odd), .uk-tile-primary:not(.uk-preserve-color) .uk-list-striped > li:nth-of-type(odd), .uk-tile-secondary:not(.uk-preserve-color) .uk-list-striped > li:nth-of-type(odd), .uk-card-primary.uk-card-body .uk-list-striped > li:nth-of-type(odd), .uk-card-primary > :not([class*=uk-card-media]) .uk-list-striped > li:nth-of-type(odd), .uk-card-secondary.uk-card-body .uk-list-striped > li:nth-of-type(odd), .uk-card-secondary > :not([class*=uk-card-media]) .uk-list-striped > li:nth-of-type(odd), .uk-overlay-primary .uk-list-striped > li:nth-of-type(odd), .uk-offcanvas-bar .uk-list-striped > li:nth-of-type(odd) {\n  border-top-color: rgba(255, 255, 255, 0.2);\n  border-bottom-color: rgba(255, 255, 255, 0.2);\n}\n.uk-light .uk-list-striped > li:nth-of-type(odd), .uk-section-primary:not(.uk-preserve-color) .uk-list-striped > li:nth-of-type(odd), .uk-section-secondary:not(.uk-preserve-color) .uk-list-striped > li:nth-of-type(odd), .uk-tile-primary:not(.uk-preserve-color) .uk-list-striped > li:nth-of-type(odd), .uk-tile-secondary:not(.uk-preserve-color) .uk-list-striped > li:nth-of-type(odd), .uk-card-primary.uk-card-body .uk-list-striped > li:nth-of-type(odd), .uk-card-primary > :not([class*=uk-card-media]) .uk-list-striped > li:nth-of-type(odd), .uk-card-secondary.uk-card-body .uk-list-striped > li:nth-of-type(odd), .uk-card-secondary > :not([class*=uk-card-media]) .uk-list-striped > li:nth-of-type(odd), .uk-overlay-primary .uk-list-striped > li:nth-of-type(odd), .uk-offcanvas-bar .uk-list-striped > li:nth-of-type(odd) {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.uk-light .uk-list-bullet > li::before, .uk-section-primary:not(.uk-preserve-color) .uk-list-bullet > li::before, .uk-section-secondary:not(.uk-preserve-color) .uk-list-bullet > li::before, .uk-tile-primary:not(.uk-preserve-color) .uk-list-bullet > li::before, .uk-tile-secondary:not(.uk-preserve-color) .uk-list-bullet > li::before, .uk-card-primary.uk-card-body .uk-list-bullet > li::before, .uk-card-primary > :not([class*=uk-card-media]) .uk-list-bullet > li::before, .uk-card-secondary.uk-card-body .uk-list-bullet > li::before, .uk-card-secondary > :not([class*=uk-card-media]) .uk-list-bullet > li::before, .uk-overlay-primary .uk-list-bullet > li::before, .uk-offcanvas-bar .uk-list-bullet > li::before {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22rgba(255, 255, 255, 0.7)%22%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n.uk-light .uk-icon-link, .uk-section-primary:not(.uk-preserve-color) .uk-icon-link, .uk-section-secondary:not(.uk-preserve-color) .uk-icon-link, .uk-tile-primary:not(.uk-preserve-color) .uk-icon-link, .uk-tile-secondary:not(.uk-preserve-color) .uk-icon-link, .uk-card-primary.uk-card-body .uk-icon-link, .uk-card-primary > :not([class*=uk-card-media]) .uk-icon-link, .uk-card-secondary.uk-card-body .uk-icon-link, .uk-card-secondary > :not([class*=uk-card-media]) .uk-icon-link, .uk-overlay-primary .uk-icon-link, .uk-offcanvas-bar .uk-icon-link {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-icon-link:hover, .uk-section-primary:not(.uk-preserve-color) .uk-icon-link:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-icon-link:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-icon-link:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-icon-link:hover, .uk-card-primary.uk-card-body .uk-icon-link:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-icon-link:hover, .uk-card-secondary.uk-card-body .uk-icon-link:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-icon-link:hover, .uk-overlay-primary .uk-icon-link:hover, .uk-offcanvas-bar .uk-icon-link:hover,\n.uk-light .uk-icon-link:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-icon-link:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-icon-link:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-icon-link:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-icon-link:focus,\n.uk-card-primary.uk-card-body .uk-icon-link:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-icon-link:focus,\n.uk-card-secondary.uk-card-body .uk-icon-link:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-icon-link:focus,\n.uk-overlay-primary .uk-icon-link:focus,\n.uk-offcanvas-bar .uk-icon-link:focus {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-icon-link:active, .uk-section-primary:not(.uk-preserve-color) .uk-icon-link:active, .uk-section-secondary:not(.uk-preserve-color) .uk-icon-link:active, .uk-tile-primary:not(.uk-preserve-color) .uk-icon-link:active, .uk-tile-secondary:not(.uk-preserve-color) .uk-icon-link:active, .uk-card-primary.uk-card-body .uk-icon-link:active, .uk-card-primary > :not([class*=uk-card-media]) .uk-icon-link:active, .uk-card-secondary.uk-card-body .uk-icon-link:active, .uk-card-secondary > :not([class*=uk-card-media]) .uk-icon-link:active, .uk-overlay-primary .uk-icon-link:active, .uk-offcanvas-bar .uk-icon-link:active,\n.uk-light .uk-active > .uk-icon-link,\n.uk-section-primary:not(.uk-preserve-color) .uk-active > .uk-icon-link,\n.uk-section-secondary:not(.uk-preserve-color) .uk-active > .uk-icon-link,\n.uk-tile-primary:not(.uk-preserve-color) .uk-active > .uk-icon-link,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-active > .uk-icon-link,\n.uk-card-primary.uk-card-body .uk-active > .uk-icon-link,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-active > .uk-icon-link,\n.uk-card-secondary.uk-card-body .uk-active > .uk-icon-link,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-active > .uk-icon-link,\n.uk-overlay-primary .uk-active > .uk-icon-link,\n.uk-offcanvas-bar .uk-active > .uk-icon-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-icon-button, .uk-section-primary:not(.uk-preserve-color) .uk-icon-button, .uk-section-secondary:not(.uk-preserve-color) .uk-icon-button, .uk-tile-primary:not(.uk-preserve-color) .uk-icon-button, .uk-tile-secondary:not(.uk-preserve-color) .uk-icon-button, .uk-card-primary.uk-card-body .uk-icon-button, .uk-card-primary > :not([class*=uk-card-media]) .uk-icon-button, .uk-card-secondary.uk-card-body .uk-icon-button, .uk-card-secondary > :not([class*=uk-card-media]) .uk-icon-button, .uk-overlay-primary .uk-icon-button, .uk-offcanvas-bar .uk-icon-button {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-icon-button:hover, .uk-section-primary:not(.uk-preserve-color) .uk-icon-button:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-icon-button:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-icon-button:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-icon-button:hover, .uk-card-primary.uk-card-body .uk-icon-button:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-icon-button:hover, .uk-card-secondary.uk-card-body .uk-icon-button:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-icon-button:hover, .uk-overlay-primary .uk-icon-button:hover, .uk-offcanvas-bar .uk-icon-button:hover,\n.uk-light .uk-icon-button:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-icon-button:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-icon-button:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-icon-button:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-icon-button:focus,\n.uk-card-primary.uk-card-body .uk-icon-button:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-icon-button:focus,\n.uk-card-secondary.uk-card-body .uk-icon-button:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-icon-button:focus,\n.uk-overlay-primary .uk-icon-button:focus,\n.uk-offcanvas-bar .uk-icon-button:focus {\n  background-color: rgba(242, 242, 242, 0.1);\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-icon-button:active, .uk-section-primary:not(.uk-preserve-color) .uk-icon-button:active, .uk-section-secondary:not(.uk-preserve-color) .uk-icon-button:active, .uk-tile-primary:not(.uk-preserve-color) .uk-icon-button:active, .uk-tile-secondary:not(.uk-preserve-color) .uk-icon-button:active, .uk-card-primary.uk-card-body .uk-icon-button:active, .uk-card-primary > :not([class*=uk-card-media]) .uk-icon-button:active, .uk-card-secondary.uk-card-body .uk-icon-button:active, .uk-card-secondary > :not([class*=uk-card-media]) .uk-icon-button:active, .uk-overlay-primary .uk-icon-button:active, .uk-offcanvas-bar .uk-icon-button:active {\n  background-color: rgba(230, 230, 230, 0.1);\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-input, .uk-section-primary:not(.uk-preserve-color) .uk-input, .uk-section-secondary:not(.uk-preserve-color) .uk-input, .uk-tile-primary:not(.uk-preserve-color) .uk-input, .uk-tile-secondary:not(.uk-preserve-color) .uk-input, .uk-card-primary.uk-card-body .uk-input, .uk-card-primary > :not([class*=uk-card-media]) .uk-input, .uk-card-secondary.uk-card-body .uk-input, .uk-card-secondary > :not([class*=uk-card-media]) .uk-input, .uk-overlay-primary .uk-input, .uk-offcanvas-bar .uk-input,\n.uk-light .uk-select,\n.uk-section-primary:not(.uk-preserve-color) .uk-select,\n.uk-section-secondary:not(.uk-preserve-color) .uk-select,\n.uk-tile-primary:not(.uk-preserve-color) .uk-select,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-select,\n.uk-card-primary.uk-card-body .uk-select,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-select,\n.uk-card-secondary.uk-card-body .uk-select,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-select,\n.uk-overlay-primary .uk-select,\n.uk-offcanvas-bar .uk-select,\n.uk-light .uk-textarea,\n.uk-section-primary:not(.uk-preserve-color) .uk-textarea,\n.uk-section-secondary:not(.uk-preserve-color) .uk-textarea,\n.uk-tile-primary:not(.uk-preserve-color) .uk-textarea,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-textarea,\n.uk-card-primary.uk-card-body .uk-textarea,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-textarea,\n.uk-card-secondary.uk-card-body .uk-textarea,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-textarea,\n.uk-overlay-primary .uk-textarea,\n.uk-offcanvas-bar .uk-textarea {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.7);\n  background-clip: padding-box;\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.uk-light .uk-input:focus, .uk-section-primary:not(.uk-preserve-color) .uk-input:focus, .uk-section-secondary:not(.uk-preserve-color) .uk-input:focus, .uk-tile-primary:not(.uk-preserve-color) .uk-input:focus, .uk-tile-secondary:not(.uk-preserve-color) .uk-input:focus, .uk-card-primary.uk-card-body .uk-input:focus, .uk-card-primary > :not([class*=uk-card-media]) .uk-input:focus, .uk-card-secondary.uk-card-body .uk-input:focus, .uk-card-secondary > :not([class*=uk-card-media]) .uk-input:focus, .uk-overlay-primary .uk-input:focus, .uk-offcanvas-bar .uk-input:focus,\n.uk-light .uk-select:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-select:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-select:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-select:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-select:focus,\n.uk-card-primary.uk-card-body .uk-select:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-select:focus,\n.uk-card-secondary.uk-card-body .uk-select:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-select:focus,\n.uk-overlay-primary .uk-select:focus,\n.uk-offcanvas-bar .uk-select:focus,\n.uk-light .uk-textarea:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-textarea:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-textarea:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-textarea:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-textarea:focus,\n.uk-card-primary.uk-card-body .uk-textarea:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-textarea:focus,\n.uk-card-secondary.uk-card-body .uk-textarea:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-textarea:focus,\n.uk-overlay-primary .uk-textarea:focus,\n.uk-offcanvas-bar .uk-textarea:focus {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.7);\n  border-color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-input::-ms-input-placeholder, .uk-section-primary:not(.uk-preserve-color) .uk-input::-ms-input-placeholder, .uk-section-secondary:not(.uk-preserve-color) .uk-input::-ms-input-placeholder, .uk-tile-primary:not(.uk-preserve-color) .uk-input::-ms-input-placeholder, .uk-tile-secondary:not(.uk-preserve-color) .uk-input::-ms-input-placeholder, .uk-card-primary.uk-card-body .uk-input::-ms-input-placeholder, .uk-card-primary > :not([class*=uk-card-media]) .uk-input::-ms-input-placeholder, .uk-card-secondary.uk-card-body .uk-input::-ms-input-placeholder, .uk-card-secondary > :not([class*=uk-card-media]) .uk-input::-ms-input-placeholder, .uk-overlay-primary .uk-input::-ms-input-placeholder, .uk-offcanvas-bar .uk-input::-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.uk-light .uk-input::-webkit-input-placeholder, .uk-section-primary:not(.uk-preserve-color) .uk-input::-webkit-input-placeholder, .uk-section-secondary:not(.uk-preserve-color) .uk-input::-webkit-input-placeholder, .uk-tile-primary:not(.uk-preserve-color) .uk-input::-webkit-input-placeholder, .uk-tile-secondary:not(.uk-preserve-color) .uk-input::-webkit-input-placeholder, .uk-card-primary.uk-card-body .uk-input::-webkit-input-placeholder, .uk-card-primary > :not([class*=uk-card-media]) .uk-input::-webkit-input-placeholder, .uk-card-secondary.uk-card-body .uk-input::-webkit-input-placeholder, .uk-card-secondary > :not([class*=uk-card-media]) .uk-input::-webkit-input-placeholder, .uk-overlay-primary .uk-input::-webkit-input-placeholder, .uk-offcanvas-bar .uk-input::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-input::-moz-placeholder, .uk-section-primary:not(.uk-preserve-color) .uk-input::-moz-placeholder, .uk-section-secondary:not(.uk-preserve-color) .uk-input::-moz-placeholder, .uk-tile-primary:not(.uk-preserve-color) .uk-input::-moz-placeholder, .uk-tile-secondary:not(.uk-preserve-color) .uk-input::-moz-placeholder, .uk-card-primary.uk-card-body .uk-input::-moz-placeholder, .uk-card-primary > :not([class*=uk-card-media]) .uk-input::-moz-placeholder, .uk-card-secondary.uk-card-body .uk-input::-moz-placeholder, .uk-card-secondary > :not([class*=uk-card-media]) .uk-input::-moz-placeholder, .uk-overlay-primary .uk-input::-moz-placeholder, .uk-offcanvas-bar .uk-input::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-input:-ms-input-placeholder, .uk-section-primary:not(.uk-preserve-color) .uk-input:-ms-input-placeholder, .uk-section-secondary:not(.uk-preserve-color) .uk-input:-ms-input-placeholder, .uk-tile-primary:not(.uk-preserve-color) .uk-input:-ms-input-placeholder, .uk-tile-secondary:not(.uk-preserve-color) .uk-input:-ms-input-placeholder, .uk-card-primary.uk-card-body .uk-input:-ms-input-placeholder, .uk-card-primary > :not([class*=uk-card-media]) .uk-input:-ms-input-placeholder, .uk-card-secondary.uk-card-body .uk-input:-ms-input-placeholder, .uk-card-secondary > :not([class*=uk-card-media]) .uk-input:-ms-input-placeholder, .uk-overlay-primary .uk-input:-ms-input-placeholder, .uk-offcanvas-bar .uk-input:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-input::placeholder, .uk-section-primary:not(.uk-preserve-color) .uk-input::placeholder, .uk-section-secondary:not(.uk-preserve-color) .uk-input::placeholder, .uk-tile-primary:not(.uk-preserve-color) .uk-input::placeholder, .uk-tile-secondary:not(.uk-preserve-color) .uk-input::placeholder, .uk-card-primary.uk-card-body .uk-input::placeholder, .uk-card-primary > :not([class*=uk-card-media]) .uk-input::placeholder, .uk-card-secondary.uk-card-body .uk-input::placeholder, .uk-card-secondary > :not([class*=uk-card-media]) .uk-input::placeholder, .uk-overlay-primary .uk-input::placeholder, .uk-offcanvas-bar .uk-input::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-textarea::-ms-input-placeholder, .uk-section-primary:not(.uk-preserve-color) .uk-textarea::-ms-input-placeholder, .uk-section-secondary:not(.uk-preserve-color) .uk-textarea::-ms-input-placeholder, .uk-tile-primary:not(.uk-preserve-color) .uk-textarea::-ms-input-placeholder, .uk-tile-secondary:not(.uk-preserve-color) .uk-textarea::-ms-input-placeholder, .uk-card-primary.uk-card-body .uk-textarea::-ms-input-placeholder, .uk-card-primary > :not([class*=uk-card-media]) .uk-textarea::-ms-input-placeholder, .uk-card-secondary.uk-card-body .uk-textarea::-ms-input-placeholder, .uk-card-secondary > :not([class*=uk-card-media]) .uk-textarea::-ms-input-placeholder, .uk-overlay-primary .uk-textarea::-ms-input-placeholder, .uk-offcanvas-bar .uk-textarea::-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.uk-light .uk-textarea::-webkit-input-placeholder, .uk-section-primary:not(.uk-preserve-color) .uk-textarea::-webkit-input-placeholder, .uk-section-secondary:not(.uk-preserve-color) .uk-textarea::-webkit-input-placeholder, .uk-tile-primary:not(.uk-preserve-color) .uk-textarea::-webkit-input-placeholder, .uk-tile-secondary:not(.uk-preserve-color) .uk-textarea::-webkit-input-placeholder, .uk-card-primary.uk-card-body .uk-textarea::-webkit-input-placeholder, .uk-card-primary > :not([class*=uk-card-media]) .uk-textarea::-webkit-input-placeholder, .uk-card-secondary.uk-card-body .uk-textarea::-webkit-input-placeholder, .uk-card-secondary > :not([class*=uk-card-media]) .uk-textarea::-webkit-input-placeholder, .uk-overlay-primary .uk-textarea::-webkit-input-placeholder, .uk-offcanvas-bar .uk-textarea::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-textarea::-moz-placeholder, .uk-section-primary:not(.uk-preserve-color) .uk-textarea::-moz-placeholder, .uk-section-secondary:not(.uk-preserve-color) .uk-textarea::-moz-placeholder, .uk-tile-primary:not(.uk-preserve-color) .uk-textarea::-moz-placeholder, .uk-tile-secondary:not(.uk-preserve-color) .uk-textarea::-moz-placeholder, .uk-card-primary.uk-card-body .uk-textarea::-moz-placeholder, .uk-card-primary > :not([class*=uk-card-media]) .uk-textarea::-moz-placeholder, .uk-card-secondary.uk-card-body .uk-textarea::-moz-placeholder, .uk-card-secondary > :not([class*=uk-card-media]) .uk-textarea::-moz-placeholder, .uk-overlay-primary .uk-textarea::-moz-placeholder, .uk-offcanvas-bar .uk-textarea::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-textarea:-ms-input-placeholder, .uk-section-primary:not(.uk-preserve-color) .uk-textarea:-ms-input-placeholder, .uk-section-secondary:not(.uk-preserve-color) .uk-textarea:-ms-input-placeholder, .uk-tile-primary:not(.uk-preserve-color) .uk-textarea:-ms-input-placeholder, .uk-tile-secondary:not(.uk-preserve-color) .uk-textarea:-ms-input-placeholder, .uk-card-primary.uk-card-body .uk-textarea:-ms-input-placeholder, .uk-card-primary > :not([class*=uk-card-media]) .uk-textarea:-ms-input-placeholder, .uk-card-secondary.uk-card-body .uk-textarea:-ms-input-placeholder, .uk-card-secondary > :not([class*=uk-card-media]) .uk-textarea:-ms-input-placeholder, .uk-overlay-primary .uk-textarea:-ms-input-placeholder, .uk-offcanvas-bar .uk-textarea:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-textarea::placeholder, .uk-section-primary:not(.uk-preserve-color) .uk-textarea::placeholder, .uk-section-secondary:not(.uk-preserve-color) .uk-textarea::placeholder, .uk-tile-primary:not(.uk-preserve-color) .uk-textarea::placeholder, .uk-tile-secondary:not(.uk-preserve-color) .uk-textarea::placeholder, .uk-card-primary.uk-card-body .uk-textarea::placeholder, .uk-card-primary > :not([class*=uk-card-media]) .uk-textarea::placeholder, .uk-card-secondary.uk-card-body .uk-textarea::placeholder, .uk-card-secondary > :not([class*=uk-card-media]) .uk-textarea::placeholder, .uk-overlay-primary .uk-textarea::placeholder, .uk-offcanvas-bar .uk-textarea::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-select:not([multiple]):not([size]), .uk-section-primary:not(.uk-preserve-color) .uk-select:not([multiple]):not([size]), .uk-section-secondary:not(.uk-preserve-color) .uk-select:not([multiple]):not([size]), .uk-tile-primary:not(.uk-preserve-color) .uk-select:not([multiple]):not([size]), .uk-tile-secondary:not(.uk-preserve-color) .uk-select:not([multiple]):not([size]), .uk-card-primary.uk-card-body .uk-select:not([multiple]):not([size]), .uk-card-primary > :not([class*=uk-card-media]) .uk-select:not([multiple]):not([size]), .uk-card-secondary.uk-card-body .uk-select:not([multiple]):not([size]), .uk-card-secondary > :not([class*=uk-card-media]) .uk-select:not([multiple]):not([size]), .uk-overlay-primary .uk-select:not([multiple]):not([size]), .uk-offcanvas-bar .uk-select:not([multiple]):not([size]) {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22rgba(255, 255, 255, 0.7)%22%20points%3D%2212%201%209%206%2015%206%22%20%2F%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22rgba(255, 255, 255, 0.7)%22%20points%3D%2212%2013%209%208%2015%208%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n}\n.uk-light .uk-input[list]:hover, .uk-section-primary:not(.uk-preserve-color) .uk-input[list]:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-input[list]:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-input[list]:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-input[list]:hover, .uk-card-primary.uk-card-body .uk-input[list]:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-input[list]:hover, .uk-card-secondary.uk-card-body .uk-input[list]:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-input[list]:hover, .uk-overlay-primary .uk-input[list]:hover, .uk-offcanvas-bar .uk-input[list]:hover,\n.uk-light .uk-input[list]:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-input[list]:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-input[list]:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-input[list]:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-input[list]:focus,\n.uk-card-primary.uk-card-body .uk-input[list]:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-input[list]:focus,\n.uk-card-secondary.uk-card-body .uk-input[list]:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-input[list]:focus,\n.uk-overlay-primary .uk-input[list]:focus,\n.uk-offcanvas-bar .uk-input[list]:focus {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22rgba(255, 255, 255, 0.7)%22%20points%3D%2212%2012%208%206%2016%206%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n}\n.uk-light .uk-radio, .uk-section-primary:not(.uk-preserve-color) .uk-radio, .uk-section-secondary:not(.uk-preserve-color) .uk-radio, .uk-tile-primary:not(.uk-preserve-color) .uk-radio, .uk-tile-secondary:not(.uk-preserve-color) .uk-radio, .uk-card-primary.uk-card-body .uk-radio, .uk-card-primary > :not([class*=uk-card-media]) .uk-radio, .uk-card-secondary.uk-card-body .uk-radio, .uk-card-secondary > :not([class*=uk-card-media]) .uk-radio, .uk-overlay-primary .uk-radio, .uk-offcanvas-bar .uk-radio,\n.uk-light .uk-checkbox,\n.uk-section-primary:not(.uk-preserve-color) .uk-checkbox,\n.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox,\n.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox,\n.uk-card-primary.uk-card-body .uk-checkbox,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-checkbox,\n.uk-card-secondary.uk-card-body .uk-checkbox,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-checkbox,\n.uk-overlay-primary .uk-checkbox,\n.uk-offcanvas-bar .uk-checkbox {\n  background-color: rgba(242, 242, 242, 0.1);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.uk-light .uk-radio:focus, .uk-section-primary:not(.uk-preserve-color) .uk-radio:focus, .uk-section-secondary:not(.uk-preserve-color) .uk-radio:focus, .uk-tile-primary:not(.uk-preserve-color) .uk-radio:focus, .uk-tile-secondary:not(.uk-preserve-color) .uk-radio:focus, .uk-card-primary.uk-card-body .uk-radio:focus, .uk-card-primary > :not([class*=uk-card-media]) .uk-radio:focus, .uk-card-secondary.uk-card-body .uk-radio:focus, .uk-card-secondary > :not([class*=uk-card-media]) .uk-radio:focus, .uk-overlay-primary .uk-radio:focus, .uk-offcanvas-bar .uk-radio:focus,\n.uk-light .uk-checkbox:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-checkbox:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:focus,\n.uk-card-primary.uk-card-body .uk-checkbox:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-checkbox:focus,\n.uk-card-secondary.uk-card-body .uk-checkbox:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-checkbox:focus,\n.uk-overlay-primary .uk-checkbox:focus,\n.uk-offcanvas-bar .uk-checkbox:focus {\n  border-color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-radio:checked, .uk-section-primary:not(.uk-preserve-color) .uk-radio:checked, .uk-section-secondary:not(.uk-preserve-color) .uk-radio:checked, .uk-tile-primary:not(.uk-preserve-color) .uk-radio:checked, .uk-tile-secondary:not(.uk-preserve-color) .uk-radio:checked, .uk-card-primary.uk-card-body .uk-radio:checked, .uk-card-primary > :not([class*=uk-card-media]) .uk-radio:checked, .uk-card-secondary.uk-card-body .uk-radio:checked, .uk-card-secondary > :not([class*=uk-card-media]) .uk-radio:checked, .uk-overlay-primary .uk-radio:checked, .uk-offcanvas-bar .uk-radio:checked,\n.uk-light .uk-checkbox:checked,\n.uk-section-primary:not(.uk-preserve-color) .uk-checkbox:checked,\n.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:checked,\n.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:checked,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:checked,\n.uk-card-primary.uk-card-body .uk-checkbox:checked,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-checkbox:checked,\n.uk-card-secondary.uk-card-body .uk-checkbox:checked,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-checkbox:checked,\n.uk-overlay-primary .uk-checkbox:checked,\n.uk-offcanvas-bar .uk-checkbox:checked,\n.uk-light .uk-checkbox:indeterminate,\n.uk-section-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate,\n.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate,\n.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate,\n.uk-card-primary.uk-card-body .uk-checkbox:indeterminate,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-checkbox:indeterminate,\n.uk-card-secondary.uk-card-body .uk-checkbox:indeterminate,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-checkbox:indeterminate,\n.uk-overlay-primary .uk-checkbox:indeterminate,\n.uk-offcanvas-bar .uk-checkbox:indeterminate {\n  background-color: #fff;\n  border-color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-radio:checked:focus, .uk-section-primary:not(.uk-preserve-color) .uk-radio:checked:focus, .uk-section-secondary:not(.uk-preserve-color) .uk-radio:checked:focus, .uk-tile-primary:not(.uk-preserve-color) .uk-radio:checked:focus, .uk-tile-secondary:not(.uk-preserve-color) .uk-radio:checked:focus, .uk-card-primary.uk-card-body .uk-radio:checked:focus, .uk-card-primary > :not([class*=uk-card-media]) .uk-radio:checked:focus, .uk-card-secondary.uk-card-body .uk-radio:checked:focus, .uk-card-secondary > :not([class*=uk-card-media]) .uk-radio:checked:focus, .uk-overlay-primary .uk-radio:checked:focus, .uk-offcanvas-bar .uk-radio:checked:focus,\n.uk-light .uk-checkbox:checked:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-checkbox:checked:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:checked:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:checked:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:checked:focus,\n.uk-card-primary.uk-card-body .uk-checkbox:checked:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-checkbox:checked:focus,\n.uk-card-secondary.uk-card-body .uk-checkbox:checked:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-checkbox:checked:focus,\n.uk-overlay-primary .uk-checkbox:checked:focus,\n.uk-offcanvas-bar .uk-checkbox:checked:focus,\n.uk-light .uk-checkbox:indeterminate:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate:focus,\n.uk-card-primary.uk-card-body .uk-checkbox:indeterminate:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-checkbox:indeterminate:focus,\n.uk-card-secondary.uk-card-body .uk-checkbox:indeterminate:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-checkbox:indeterminate:focus,\n.uk-overlay-primary .uk-checkbox:indeterminate:focus,\n.uk-offcanvas-bar .uk-checkbox:indeterminate:focus {\n  background-color: #e6e6e6;\n}\n.uk-light .uk-radio:checked, .uk-section-primary:not(.uk-preserve-color) .uk-radio:checked, .uk-section-secondary:not(.uk-preserve-color) .uk-radio:checked, .uk-tile-primary:not(.uk-preserve-color) .uk-radio:checked, .uk-tile-secondary:not(.uk-preserve-color) .uk-radio:checked, .uk-card-primary.uk-card-body .uk-radio:checked, .uk-card-primary > :not([class*=uk-card-media]) .uk-radio:checked, .uk-card-secondary.uk-card-body .uk-radio:checked, .uk-card-secondary > :not([class*=uk-card-media]) .uk-radio:checked, .uk-overlay-primary .uk-radio:checked, .uk-offcanvas-bar .uk-radio:checked {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23666%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n.uk-light .uk-checkbox:checked, .uk-section-primary:not(.uk-preserve-color) .uk-checkbox:checked, .uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:checked, .uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:checked, .uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:checked, .uk-card-primary.uk-card-body .uk-checkbox:checked, .uk-card-primary > :not([class*=uk-card-media]) .uk-checkbox:checked, .uk-card-secondary.uk-card-body .uk-checkbox:checked, .uk-card-secondary > :not([class*=uk-card-media]) .uk-checkbox:checked, .uk-overlay-primary .uk-checkbox:checked, .uk-offcanvas-bar .uk-checkbox:checked {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n}\n.uk-light .uk-checkbox:indeterminate, .uk-section-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate, .uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate, .uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate, .uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate, .uk-card-primary.uk-card-body .uk-checkbox:indeterminate, .uk-card-primary > :not([class*=uk-card-media]) .uk-checkbox:indeterminate, .uk-card-secondary.uk-card-body .uk-checkbox:indeterminate, .uk-card-secondary > :not([class*=uk-card-media]) .uk-checkbox:indeterminate, .uk-overlay-primary .uk-checkbox:indeterminate, .uk-offcanvas-bar .uk-checkbox:indeterminate {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n.uk-light .uk-form-label, .uk-section-primary:not(.uk-preserve-color) .uk-form-label, .uk-section-secondary:not(.uk-preserve-color) .uk-form-label, .uk-tile-primary:not(.uk-preserve-color) .uk-form-label, .uk-tile-secondary:not(.uk-preserve-color) .uk-form-label, .uk-card-primary.uk-card-body .uk-form-label, .uk-card-primary > :not([class*=uk-card-media]) .uk-form-label, .uk-card-secondary.uk-card-body .uk-form-label, .uk-card-secondary > :not([class*=uk-card-media]) .uk-form-label, .uk-overlay-primary .uk-form-label, .uk-offcanvas-bar .uk-form-label {\n  color: #fff;\n}\n.uk-light .uk-form-icon, .uk-section-primary:not(.uk-preserve-color) .uk-form-icon, .uk-section-secondary:not(.uk-preserve-color) .uk-form-icon, .uk-tile-primary:not(.uk-preserve-color) .uk-form-icon, .uk-tile-secondary:not(.uk-preserve-color) .uk-form-icon, .uk-card-primary.uk-card-body .uk-form-icon, .uk-card-primary > :not([class*=uk-card-media]) .uk-form-icon, .uk-card-secondary.uk-card-body .uk-form-icon, .uk-card-secondary > :not([class*=uk-card-media]) .uk-form-icon, .uk-overlay-primary .uk-form-icon, .uk-offcanvas-bar .uk-form-icon {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-form-icon:hover, .uk-section-primary:not(.uk-preserve-color) .uk-form-icon:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-form-icon:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-form-icon:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-form-icon:hover, .uk-card-primary.uk-card-body .uk-form-icon:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-form-icon:hover, .uk-card-secondary.uk-card-body .uk-form-icon:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-form-icon:hover, .uk-overlay-primary .uk-form-icon:hover, .uk-offcanvas-bar .uk-form-icon:hover {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-button-default, .uk-section-primary:not(.uk-preserve-color) .uk-button-default, .uk-section-secondary:not(.uk-preserve-color) .uk-button-default, .uk-tile-primary:not(.uk-preserve-color) .uk-button-default, .uk-tile-secondary:not(.uk-preserve-color) .uk-button-default, .uk-card-primary.uk-card-body .uk-button-default, .uk-card-primary > :not([class*=uk-card-media]) .uk-button-default, .uk-card-secondary.uk-card-body .uk-button-default, .uk-card-secondary > :not([class*=uk-card-media]) .uk-button-default, .uk-overlay-primary .uk-button-default, .uk-offcanvas-bar .uk-button-default {\n  background-color: transparent;\n  color: #fff;\n  border-color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-button-default:hover, .uk-section-primary:not(.uk-preserve-color) .uk-button-default:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-button-default:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-button-default:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-button-default:hover, .uk-card-primary.uk-card-body .uk-button-default:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-button-default:hover, .uk-card-secondary.uk-card-body .uk-button-default:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-button-default:hover, .uk-overlay-primary .uk-button-default:hover, .uk-offcanvas-bar .uk-button-default:hover,\n.uk-light .uk-button-default:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-button-default:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-button-default:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-button-default:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-button-default:focus,\n.uk-card-primary.uk-card-body .uk-button-default:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-button-default:focus,\n.uk-card-secondary.uk-card-body .uk-button-default:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-button-default:focus,\n.uk-overlay-primary .uk-button-default:focus,\n.uk-offcanvas-bar .uk-button-default:focus {\n  background-color: transparent;\n  color: #fff;\n  border-color: #fff;\n}\n.uk-light .uk-button-default:active, .uk-section-primary:not(.uk-preserve-color) .uk-button-default:active, .uk-section-secondary:not(.uk-preserve-color) .uk-button-default:active, .uk-tile-primary:not(.uk-preserve-color) .uk-button-default:active, .uk-tile-secondary:not(.uk-preserve-color) .uk-button-default:active, .uk-card-primary.uk-card-body .uk-button-default:active, .uk-card-primary > :not([class*=uk-card-media]) .uk-button-default:active, .uk-card-secondary.uk-card-body .uk-button-default:active, .uk-card-secondary > :not([class*=uk-card-media]) .uk-button-default:active, .uk-overlay-primary .uk-button-default:active, .uk-offcanvas-bar .uk-button-default:active,\n.uk-light .uk-button-default.uk-active,\n.uk-section-primary:not(.uk-preserve-color) .uk-button-default.uk-active,\n.uk-section-secondary:not(.uk-preserve-color) .uk-button-default.uk-active,\n.uk-tile-primary:not(.uk-preserve-color) .uk-button-default.uk-active,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-button-default.uk-active,\n.uk-card-primary.uk-card-body .uk-button-default.uk-active,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-button-default.uk-active,\n.uk-card-secondary.uk-card-body .uk-button-default.uk-active,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-button-default.uk-active,\n.uk-overlay-primary .uk-button-default.uk-active,\n.uk-offcanvas-bar .uk-button-default.uk-active {\n  background-color: transparent;\n  color: #fff;\n  border-color: #fff;\n}\n.uk-light .uk-button-primary, .uk-section-primary:not(.uk-preserve-color) .uk-button-primary, .uk-section-secondary:not(.uk-preserve-color) .uk-button-primary, .uk-tile-primary:not(.uk-preserve-color) .uk-button-primary, .uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary, .uk-card-primary.uk-card-body .uk-button-primary, .uk-card-primary > :not([class*=uk-card-media]) .uk-button-primary, .uk-card-secondary.uk-card-body .uk-button-primary, .uk-card-secondary > :not([class*=uk-card-media]) .uk-button-primary, .uk-overlay-primary .uk-button-primary, .uk-offcanvas-bar .uk-button-primary {\n  background-color: #fff;\n  color: #666;\n}\n.uk-light .uk-button-primary:hover, .uk-section-primary:not(.uk-preserve-color) .uk-button-primary:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-button-primary:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-button-primary:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary:hover, .uk-card-primary.uk-card-body .uk-button-primary:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-button-primary:hover, .uk-card-secondary.uk-card-body .uk-button-primary:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-button-primary:hover, .uk-overlay-primary .uk-button-primary:hover, .uk-offcanvas-bar .uk-button-primary:hover,\n.uk-light .uk-button-primary:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-button-primary:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-button-primary:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-button-primary:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary:focus,\n.uk-card-primary.uk-card-body .uk-button-primary:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-button-primary:focus,\n.uk-card-secondary.uk-card-body .uk-button-primary:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-button-primary:focus,\n.uk-overlay-primary .uk-button-primary:focus,\n.uk-offcanvas-bar .uk-button-primary:focus {\n  background-color: #f2f2f2;\n  color: #666;\n}\n.uk-light .uk-button-primary:active, .uk-section-primary:not(.uk-preserve-color) .uk-button-primary:active, .uk-section-secondary:not(.uk-preserve-color) .uk-button-primary:active, .uk-tile-primary:not(.uk-preserve-color) .uk-button-primary:active, .uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary:active, .uk-card-primary.uk-card-body .uk-button-primary:active, .uk-card-primary > :not([class*=uk-card-media]) .uk-button-primary:active, .uk-card-secondary.uk-card-body .uk-button-primary:active, .uk-card-secondary > :not([class*=uk-card-media]) .uk-button-primary:active, .uk-overlay-primary .uk-button-primary:active, .uk-offcanvas-bar .uk-button-primary:active,\n.uk-light .uk-button-primary.uk-active,\n.uk-section-primary:not(.uk-preserve-color) .uk-button-primary.uk-active,\n.uk-section-secondary:not(.uk-preserve-color) .uk-button-primary.uk-active,\n.uk-tile-primary:not(.uk-preserve-color) .uk-button-primary.uk-active,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary.uk-active,\n.uk-card-primary.uk-card-body .uk-button-primary.uk-active,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-button-primary.uk-active,\n.uk-card-secondary.uk-card-body .uk-button-primary.uk-active,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-button-primary.uk-active,\n.uk-overlay-primary .uk-button-primary.uk-active,\n.uk-offcanvas-bar .uk-button-primary.uk-active {\n  background-color: #e6e6e6;\n  color: #666;\n}\n.uk-light .uk-button-secondary, .uk-section-primary:not(.uk-preserve-color) .uk-button-secondary, .uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary, .uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary, .uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary, .uk-card-primary.uk-card-body .uk-button-secondary, .uk-card-primary > :not([class*=uk-card-media]) .uk-button-secondary, .uk-card-secondary.uk-card-body .uk-button-secondary, .uk-card-secondary > :not([class*=uk-card-media]) .uk-button-secondary, .uk-overlay-primary .uk-button-secondary, .uk-offcanvas-bar .uk-button-secondary {\n  background-color: #fff;\n  color: #666;\n}\n.uk-light .uk-button-secondary:hover, .uk-section-primary:not(.uk-preserve-color) .uk-button-secondary:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary:hover, .uk-card-primary.uk-card-body .uk-button-secondary:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-button-secondary:hover, .uk-card-secondary.uk-card-body .uk-button-secondary:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-button-secondary:hover, .uk-overlay-primary .uk-button-secondary:hover, .uk-offcanvas-bar .uk-button-secondary:hover,\n.uk-light .uk-button-secondary:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-button-secondary:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary:focus,\n.uk-card-primary.uk-card-body .uk-button-secondary:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-button-secondary:focus,\n.uk-card-secondary.uk-card-body .uk-button-secondary:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-button-secondary:focus,\n.uk-overlay-primary .uk-button-secondary:focus,\n.uk-offcanvas-bar .uk-button-secondary:focus {\n  background-color: #f2f2f2;\n  color: #666;\n}\n.uk-light .uk-button-secondary:active, .uk-section-primary:not(.uk-preserve-color) .uk-button-secondary:active, .uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary:active, .uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary:active, .uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary:active, .uk-card-primary.uk-card-body .uk-button-secondary:active, .uk-card-primary > :not([class*=uk-card-media]) .uk-button-secondary:active, .uk-card-secondary.uk-card-body .uk-button-secondary:active, .uk-card-secondary > :not([class*=uk-card-media]) .uk-button-secondary:active, .uk-overlay-primary .uk-button-secondary:active, .uk-offcanvas-bar .uk-button-secondary:active,\n.uk-light .uk-button-secondary.uk-active,\n.uk-section-primary:not(.uk-preserve-color) .uk-button-secondary.uk-active,\n.uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary.uk-active,\n.uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary.uk-active,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary.uk-active,\n.uk-card-primary.uk-card-body .uk-button-secondary.uk-active,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-button-secondary.uk-active,\n.uk-card-secondary.uk-card-body .uk-button-secondary.uk-active,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-button-secondary.uk-active,\n.uk-overlay-primary .uk-button-secondary.uk-active,\n.uk-offcanvas-bar .uk-button-secondary.uk-active {\n  background-color: #e6e6e6;\n  color: #666;\n}\n.uk-light .uk-button-text, .uk-section-primary:not(.uk-preserve-color) .uk-button-text, .uk-section-secondary:not(.uk-preserve-color) .uk-button-text, .uk-tile-primary:not(.uk-preserve-color) .uk-button-text, .uk-tile-secondary:not(.uk-preserve-color) .uk-button-text, .uk-card-primary.uk-card-body .uk-button-text, .uk-card-primary > :not([class*=uk-card-media]) .uk-button-text, .uk-card-secondary.uk-card-body .uk-button-text, .uk-card-secondary > :not([class*=uk-card-media]) .uk-button-text, .uk-overlay-primary .uk-button-text, .uk-offcanvas-bar .uk-button-text {\n  color: #fff;\n}\n.uk-light .uk-button-text::before, .uk-section-primary:not(.uk-preserve-color) .uk-button-text::before, .uk-section-secondary:not(.uk-preserve-color) .uk-button-text::before, .uk-tile-primary:not(.uk-preserve-color) .uk-button-text::before, .uk-tile-secondary:not(.uk-preserve-color) .uk-button-text::before, .uk-card-primary.uk-card-body .uk-button-text::before, .uk-card-primary > :not([class*=uk-card-media]) .uk-button-text::before, .uk-card-secondary.uk-card-body .uk-button-text::before, .uk-card-secondary > :not([class*=uk-card-media]) .uk-button-text::before, .uk-overlay-primary .uk-button-text::before, .uk-offcanvas-bar .uk-button-text::before {\n  border-bottom-color: #fff;\n}\n.uk-light .uk-button-text:hover, .uk-section-primary:not(.uk-preserve-color) .uk-button-text:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-button-text:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-button-text:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-button-text:hover, .uk-card-primary.uk-card-body .uk-button-text:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-button-text:hover, .uk-card-secondary.uk-card-body .uk-button-text:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-button-text:hover, .uk-overlay-primary .uk-button-text:hover, .uk-offcanvas-bar .uk-button-text:hover,\n.uk-light .uk-button-text:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-button-text:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-button-text:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-button-text:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-button-text:focus,\n.uk-card-primary.uk-card-body .uk-button-text:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-button-text:focus,\n.uk-card-secondary.uk-card-body .uk-button-text:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-button-text:focus,\n.uk-overlay-primary .uk-button-text:focus,\n.uk-offcanvas-bar .uk-button-text:focus {\n  color: #fff;\n}\n.uk-light .uk-button-text:disabled, .uk-section-primary:not(.uk-preserve-color) .uk-button-text:disabled, .uk-section-secondary:not(.uk-preserve-color) .uk-button-text:disabled, .uk-tile-primary:not(.uk-preserve-color) .uk-button-text:disabled, .uk-tile-secondary:not(.uk-preserve-color) .uk-button-text:disabled, .uk-card-primary.uk-card-body .uk-button-text:disabled, .uk-card-primary > :not([class*=uk-card-media]) .uk-button-text:disabled, .uk-card-secondary.uk-card-body .uk-button-text:disabled, .uk-card-secondary > :not([class*=uk-card-media]) .uk-button-text:disabled, .uk-overlay-primary .uk-button-text:disabled, .uk-offcanvas-bar .uk-button-text:disabled {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-button-link, .uk-section-primary:not(.uk-preserve-color) .uk-button-link, .uk-section-secondary:not(.uk-preserve-color) .uk-button-link, .uk-tile-primary:not(.uk-preserve-color) .uk-button-link, .uk-tile-secondary:not(.uk-preserve-color) .uk-button-link, .uk-card-primary.uk-card-body .uk-button-link, .uk-card-primary > :not([class*=uk-card-media]) .uk-button-link, .uk-card-secondary.uk-card-body .uk-button-link, .uk-card-secondary > :not([class*=uk-card-media]) .uk-button-link, .uk-overlay-primary .uk-button-link, .uk-offcanvas-bar .uk-button-link {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-button-link:hover, .uk-section-primary:not(.uk-preserve-color) .uk-button-link:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-button-link:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-button-link:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-button-link:hover, .uk-card-primary.uk-card-body .uk-button-link:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-button-link:hover, .uk-card-secondary.uk-card-body .uk-button-link:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-button-link:hover, .uk-overlay-primary .uk-button-link:hover, .uk-offcanvas-bar .uk-button-link:hover,\n.uk-light .uk-button-link:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-button-link:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-button-link:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-button-link:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-button-link:focus,\n.uk-card-primary.uk-card-body .uk-button-link:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-button-link:focus,\n.uk-card-secondary.uk-card-body .uk-button-link:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-button-link:focus,\n.uk-overlay-primary .uk-button-link:focus,\n.uk-offcanvas-bar .uk-button-link:focus {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-grid-divider > :not(.uk-first-column)::before, .uk-section-primary:not(.uk-preserve-color) .uk-grid-divider > :not(.uk-first-column)::before, .uk-section-secondary:not(.uk-preserve-color) .uk-grid-divider > :not(.uk-first-column)::before, .uk-tile-primary:not(.uk-preserve-color) .uk-grid-divider > :not(.uk-first-column)::before, .uk-tile-secondary:not(.uk-preserve-color) .uk-grid-divider > :not(.uk-first-column)::before, .uk-card-primary.uk-card-body .uk-grid-divider > :not(.uk-first-column)::before, .uk-card-primary > :not([class*=uk-card-media]) .uk-grid-divider > :not(.uk-first-column)::before, .uk-card-secondary.uk-card-body .uk-grid-divider > :not(.uk-first-column)::before, .uk-card-secondary > :not([class*=uk-card-media]) .uk-grid-divider > :not(.uk-first-column)::before, .uk-overlay-primary .uk-grid-divider > :not(.uk-first-column)::before, .uk-offcanvas-bar .uk-grid-divider > :not(.uk-first-column)::before {\n  border-left-color: rgba(255, 255, 255, 0.2);\n}\n.uk-light .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before, .uk-section-primary:not(.uk-preserve-color) .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before, .uk-section-secondary:not(.uk-preserve-color) .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before, .uk-tile-primary:not(.uk-preserve-color) .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before, .uk-tile-secondary:not(.uk-preserve-color) .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before, .uk-card-primary.uk-card-body .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before, .uk-card-primary > :not([class*=uk-card-media]) .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before, .uk-card-secondary.uk-card-body .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before, .uk-card-secondary > :not([class*=uk-card-media]) .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before, .uk-overlay-primary .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before, .uk-offcanvas-bar .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before {\n  border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-light .uk-close, .uk-section-primary:not(.uk-preserve-color) .uk-close, .uk-section-secondary:not(.uk-preserve-color) .uk-close, .uk-tile-primary:not(.uk-preserve-color) .uk-close, .uk-tile-secondary:not(.uk-preserve-color) .uk-close, .uk-card-primary.uk-card-body .uk-close, .uk-card-primary > :not([class*=uk-card-media]) .uk-close, .uk-card-secondary.uk-card-body .uk-close, .uk-card-secondary > :not([class*=uk-card-media]) .uk-close, .uk-overlay-primary .uk-close, .uk-offcanvas-bar .uk-close {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-close:hover, .uk-section-primary:not(.uk-preserve-color) .uk-close:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-close:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-close:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-close:hover, .uk-card-primary.uk-card-body .uk-close:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-close:hover, .uk-card-secondary.uk-card-body .uk-close:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-close:hover, .uk-overlay-primary .uk-close:hover, .uk-offcanvas-bar .uk-close:hover,\n.uk-light .uk-close:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-close:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-close:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-close:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-close:focus,\n.uk-card-primary.uk-card-body .uk-close:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-close:focus,\n.uk-card-secondary.uk-card-body .uk-close:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-close:focus,\n.uk-overlay-primary .uk-close:focus,\n.uk-offcanvas-bar .uk-close:focus {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-totop, .uk-section-primary:not(.uk-preserve-color) .uk-totop, .uk-section-secondary:not(.uk-preserve-color) .uk-totop, .uk-tile-primary:not(.uk-preserve-color) .uk-totop, .uk-tile-secondary:not(.uk-preserve-color) .uk-totop, .uk-card-primary.uk-card-body .uk-totop, .uk-card-primary > :not([class*=uk-card-media]) .uk-totop, .uk-card-secondary.uk-card-body .uk-totop, .uk-card-secondary > :not([class*=uk-card-media]) .uk-totop, .uk-overlay-primary .uk-totop, .uk-offcanvas-bar .uk-totop {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-totop:hover, .uk-section-primary:not(.uk-preserve-color) .uk-totop:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-totop:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-totop:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-totop:hover, .uk-card-primary.uk-card-body .uk-totop:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-totop:hover, .uk-card-secondary.uk-card-body .uk-totop:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-totop:hover, .uk-overlay-primary .uk-totop:hover, .uk-offcanvas-bar .uk-totop:hover,\n.uk-light .uk-totop:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-totop:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-totop:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-totop:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-totop:focus,\n.uk-card-primary.uk-card-body .uk-totop:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-totop:focus,\n.uk-card-secondary.uk-card-body .uk-totop:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-totop:focus,\n.uk-overlay-primary .uk-totop:focus,\n.uk-offcanvas-bar .uk-totop:focus {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-totop:active, .uk-section-primary:not(.uk-preserve-color) .uk-totop:active, .uk-section-secondary:not(.uk-preserve-color) .uk-totop:active, .uk-tile-primary:not(.uk-preserve-color) .uk-totop:active, .uk-tile-secondary:not(.uk-preserve-color) .uk-totop:active, .uk-card-primary.uk-card-body .uk-totop:active, .uk-card-primary > :not([class*=uk-card-media]) .uk-totop:active, .uk-card-secondary.uk-card-body .uk-totop:active, .uk-card-secondary > :not([class*=uk-card-media]) .uk-totop:active, .uk-overlay-primary .uk-totop:active, .uk-offcanvas-bar .uk-totop:active {\n  color: #fff;\n}\n.uk-light .uk-badge, .uk-section-primary:not(.uk-preserve-color) .uk-badge, .uk-section-secondary:not(.uk-preserve-color) .uk-badge, .uk-tile-primary:not(.uk-preserve-color) .uk-badge, .uk-tile-secondary:not(.uk-preserve-color) .uk-badge, .uk-card-primary.uk-card-body .uk-badge, .uk-card-primary > :not([class*=uk-card-media]) .uk-badge, .uk-card-secondary.uk-card-body .uk-badge, .uk-card-secondary > :not([class*=uk-card-media]) .uk-badge, .uk-overlay-primary .uk-badge, .uk-offcanvas-bar .uk-badge {\n  background-color: #fff;\n  color: #666;\n}\n.uk-light .uk-badge:hover, .uk-section-primary:not(.uk-preserve-color) .uk-badge:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-badge:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-badge:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-badge:hover, .uk-card-primary.uk-card-body .uk-badge:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-badge:hover, .uk-card-secondary.uk-card-body .uk-badge:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-badge:hover, .uk-overlay-primary .uk-badge:hover, .uk-offcanvas-bar .uk-badge:hover,\n.uk-light .uk-badge:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-badge:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-badge:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-badge:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-badge:focus,\n.uk-card-primary.uk-card-body .uk-badge:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-badge:focus,\n.uk-card-secondary.uk-card-body .uk-badge:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-badge:focus,\n.uk-overlay-primary .uk-badge:focus,\n.uk-offcanvas-bar .uk-badge:focus {\n  color: #666;\n}\n.uk-light .uk-label, .uk-section-primary:not(.uk-preserve-color) .uk-label, .uk-section-secondary:not(.uk-preserve-color) .uk-label, .uk-tile-primary:not(.uk-preserve-color) .uk-label, .uk-tile-secondary:not(.uk-preserve-color) .uk-label, .uk-card-primary.uk-card-body .uk-label, .uk-card-primary > :not([class*=uk-card-media]) .uk-label, .uk-card-secondary.uk-card-body .uk-label, .uk-card-secondary > :not([class*=uk-card-media]) .uk-label, .uk-overlay-primary .uk-label, .uk-offcanvas-bar .uk-label {\n  background-color: #fff;\n  color: #666;\n}\n.uk-light .uk-article-meta, .uk-section-primary:not(.uk-preserve-color) .uk-article-meta, .uk-section-secondary:not(.uk-preserve-color) .uk-article-meta, .uk-tile-primary:not(.uk-preserve-color) .uk-article-meta, .uk-tile-secondary:not(.uk-preserve-color) .uk-article-meta, .uk-card-primary.uk-card-body .uk-article-meta, .uk-card-primary > :not([class*=uk-card-media]) .uk-article-meta, .uk-card-secondary.uk-card-body .uk-article-meta, .uk-card-secondary > :not([class*=uk-card-media]) .uk-article-meta, .uk-overlay-primary .uk-article-meta, .uk-offcanvas-bar .uk-article-meta {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-search-input, .uk-section-primary:not(.uk-preserve-color) .uk-search-input, .uk-section-secondary:not(.uk-preserve-color) .uk-search-input, .uk-tile-primary:not(.uk-preserve-color) .uk-search-input, .uk-tile-secondary:not(.uk-preserve-color) .uk-search-input, .uk-card-primary.uk-card-body .uk-search-input, .uk-card-primary > :not([class*=uk-card-media]) .uk-search-input, .uk-card-secondary.uk-card-body .uk-search-input, .uk-card-secondary > :not([class*=uk-card-media]) .uk-search-input, .uk-overlay-primary .uk-search-input, .uk-offcanvas-bar .uk-search-input {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-search-input:-ms-input-placeholder, .uk-section-primary:not(.uk-preserve-color) .uk-search-input:-ms-input-placeholder, .uk-section-secondary:not(.uk-preserve-color) .uk-search-input:-ms-input-placeholder, .uk-tile-primary:not(.uk-preserve-color) .uk-search-input:-ms-input-placeholder, .uk-tile-secondary:not(.uk-preserve-color) .uk-search-input:-ms-input-placeholder, .uk-card-primary.uk-card-body .uk-search-input:-ms-input-placeholder, .uk-card-primary > :not([class*=uk-card-media]) .uk-search-input:-ms-input-placeholder, .uk-card-secondary.uk-card-body .uk-search-input:-ms-input-placeholder, .uk-card-secondary > :not([class*=uk-card-media]) .uk-search-input:-ms-input-placeholder, .uk-overlay-primary .uk-search-input:-ms-input-placeholder, .uk-offcanvas-bar .uk-search-input:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.uk-light .uk-search-input::-webkit-input-placeholder, .uk-section-primary:not(.uk-preserve-color) .uk-search-input::-webkit-input-placeholder, .uk-section-secondary:not(.uk-preserve-color) .uk-search-input::-webkit-input-placeholder, .uk-tile-primary:not(.uk-preserve-color) .uk-search-input::-webkit-input-placeholder, .uk-tile-secondary:not(.uk-preserve-color) .uk-search-input::-webkit-input-placeholder, .uk-card-primary.uk-card-body .uk-search-input::-webkit-input-placeholder, .uk-card-primary > :not([class*=uk-card-media]) .uk-search-input::-webkit-input-placeholder, .uk-card-secondary.uk-card-body .uk-search-input::-webkit-input-placeholder, .uk-card-secondary > :not([class*=uk-card-media]) .uk-search-input::-webkit-input-placeholder, .uk-overlay-primary .uk-search-input::-webkit-input-placeholder, .uk-offcanvas-bar .uk-search-input::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-search-input::-moz-placeholder, .uk-section-primary:not(.uk-preserve-color) .uk-search-input::-moz-placeholder, .uk-section-secondary:not(.uk-preserve-color) .uk-search-input::-moz-placeholder, .uk-tile-primary:not(.uk-preserve-color) .uk-search-input::-moz-placeholder, .uk-tile-secondary:not(.uk-preserve-color) .uk-search-input::-moz-placeholder, .uk-card-primary.uk-card-body .uk-search-input::-moz-placeholder, .uk-card-primary > :not([class*=uk-card-media]) .uk-search-input::-moz-placeholder, .uk-card-secondary.uk-card-body .uk-search-input::-moz-placeholder, .uk-card-secondary > :not([class*=uk-card-media]) .uk-search-input::-moz-placeholder, .uk-overlay-primary .uk-search-input::-moz-placeholder, .uk-offcanvas-bar .uk-search-input::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-search-input::-ms-input-placeholder, .uk-section-primary:not(.uk-preserve-color) .uk-search-input::-ms-input-placeholder, .uk-section-secondary:not(.uk-preserve-color) .uk-search-input::-ms-input-placeholder, .uk-tile-primary:not(.uk-preserve-color) .uk-search-input::-ms-input-placeholder, .uk-tile-secondary:not(.uk-preserve-color) .uk-search-input::-ms-input-placeholder, .uk-card-primary.uk-card-body .uk-search-input::-ms-input-placeholder, .uk-card-primary > :not([class*=uk-card-media]) .uk-search-input::-ms-input-placeholder, .uk-card-secondary.uk-card-body .uk-search-input::-ms-input-placeholder, .uk-card-secondary > :not([class*=uk-card-media]) .uk-search-input::-ms-input-placeholder, .uk-overlay-primary .uk-search-input::-ms-input-placeholder, .uk-offcanvas-bar .uk-search-input::-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-search-input::placeholder, .uk-section-primary:not(.uk-preserve-color) .uk-search-input::placeholder, .uk-section-secondary:not(.uk-preserve-color) .uk-search-input::placeholder, .uk-tile-primary:not(.uk-preserve-color) .uk-search-input::placeholder, .uk-tile-secondary:not(.uk-preserve-color) .uk-search-input::placeholder, .uk-card-primary.uk-card-body .uk-search-input::placeholder, .uk-card-primary > :not([class*=uk-card-media]) .uk-search-input::placeholder, .uk-card-secondary.uk-card-body .uk-search-input::placeholder, .uk-card-secondary > :not([class*=uk-card-media]) .uk-search-input::placeholder, .uk-overlay-primary .uk-search-input::placeholder, .uk-offcanvas-bar .uk-search-input::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-search .uk-search-icon, .uk-section-primary:not(.uk-preserve-color) .uk-search .uk-search-icon, .uk-section-secondary:not(.uk-preserve-color) .uk-search .uk-search-icon, .uk-tile-primary:not(.uk-preserve-color) .uk-search .uk-search-icon, .uk-tile-secondary:not(.uk-preserve-color) .uk-search .uk-search-icon, .uk-card-primary.uk-card-body .uk-search .uk-search-icon, .uk-card-primary > :not([class*=uk-card-media]) .uk-search .uk-search-icon, .uk-card-secondary.uk-card-body .uk-search .uk-search-icon, .uk-card-secondary > :not([class*=uk-card-media]) .uk-search .uk-search-icon, .uk-overlay-primary .uk-search .uk-search-icon, .uk-offcanvas-bar .uk-search .uk-search-icon {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-search .uk-search-icon:hover, .uk-section-primary:not(.uk-preserve-color) .uk-search .uk-search-icon:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-search .uk-search-icon:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-search .uk-search-icon:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-search .uk-search-icon:hover, .uk-card-primary.uk-card-body .uk-search .uk-search-icon:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-search .uk-search-icon:hover, .uk-card-secondary.uk-card-body .uk-search .uk-search-icon:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-search .uk-search-icon:hover, .uk-overlay-primary .uk-search .uk-search-icon:hover, .uk-offcanvas-bar .uk-search .uk-search-icon:hover {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-search-default .uk-search-input, .uk-section-primary:not(.uk-preserve-color) .uk-search-default .uk-search-input, .uk-section-secondary:not(.uk-preserve-color) .uk-search-default .uk-search-input, .uk-tile-primary:not(.uk-preserve-color) .uk-search-default .uk-search-input, .uk-tile-secondary:not(.uk-preserve-color) .uk-search-default .uk-search-input, .uk-card-primary.uk-card-body .uk-search-default .uk-search-input, .uk-card-primary > :not([class*=uk-card-media]) .uk-search-default .uk-search-input, .uk-card-secondary.uk-card-body .uk-search-default .uk-search-input, .uk-card-secondary > :not([class*=uk-card-media]) .uk-search-default .uk-search-input, .uk-overlay-primary .uk-search-default .uk-search-input, .uk-offcanvas-bar .uk-search-default .uk-search-input {\n  background-color: transparent;\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.uk-light .uk-search-default .uk-search-input:focus, .uk-section-primary:not(.uk-preserve-color) .uk-search-default .uk-search-input:focus, .uk-section-secondary:not(.uk-preserve-color) .uk-search-default .uk-search-input:focus, .uk-tile-primary:not(.uk-preserve-color) .uk-search-default .uk-search-input:focus, .uk-tile-secondary:not(.uk-preserve-color) .uk-search-default .uk-search-input:focus, .uk-card-primary.uk-card-body .uk-search-default .uk-search-input:focus, .uk-card-primary > :not([class*=uk-card-media]) .uk-search-default .uk-search-input:focus, .uk-card-secondary.uk-card-body .uk-search-default .uk-search-input:focus, .uk-card-secondary > :not([class*=uk-card-media]) .uk-search-default .uk-search-input:focus, .uk-overlay-primary .uk-search-default .uk-search-input:focus, .uk-offcanvas-bar .uk-search-default .uk-search-input:focus {\n  background-color: transparent;\n}\n.uk-light .uk-search-navbar .uk-search-input, .uk-section-primary:not(.uk-preserve-color) .uk-search-navbar .uk-search-input, .uk-section-secondary:not(.uk-preserve-color) .uk-search-navbar .uk-search-input, .uk-tile-primary:not(.uk-preserve-color) .uk-search-navbar .uk-search-input, .uk-tile-secondary:not(.uk-preserve-color) .uk-search-navbar .uk-search-input, .uk-card-primary.uk-card-body .uk-search-navbar .uk-search-input, .uk-card-primary > :not([class*=uk-card-media]) .uk-search-navbar .uk-search-input, .uk-card-secondary.uk-card-body .uk-search-navbar .uk-search-input, .uk-card-secondary > :not([class*=uk-card-media]) .uk-search-navbar .uk-search-input, .uk-overlay-primary .uk-search-navbar .uk-search-input, .uk-offcanvas-bar .uk-search-navbar .uk-search-input {\n  background-color: transparent;\n}\n.uk-light .uk-search-large .uk-search-input, .uk-section-primary:not(.uk-preserve-color) .uk-search-large .uk-search-input, .uk-section-secondary:not(.uk-preserve-color) .uk-search-large .uk-search-input, .uk-tile-primary:not(.uk-preserve-color) .uk-search-large .uk-search-input, .uk-tile-secondary:not(.uk-preserve-color) .uk-search-large .uk-search-input, .uk-card-primary.uk-card-body .uk-search-large .uk-search-input, .uk-card-primary > :not([class*=uk-card-media]) .uk-search-large .uk-search-input, .uk-card-secondary.uk-card-body .uk-search-large .uk-search-input, .uk-card-secondary > :not([class*=uk-card-media]) .uk-search-large .uk-search-input, .uk-overlay-primary .uk-search-large .uk-search-input, .uk-offcanvas-bar .uk-search-large .uk-search-input {\n  background-color: transparent;\n}\n.uk-light .uk-search-toggle, .uk-section-primary:not(.uk-preserve-color) .uk-search-toggle, .uk-section-secondary:not(.uk-preserve-color) .uk-search-toggle, .uk-tile-primary:not(.uk-preserve-color) .uk-search-toggle, .uk-tile-secondary:not(.uk-preserve-color) .uk-search-toggle, .uk-card-primary.uk-card-body .uk-search-toggle, .uk-card-primary > :not([class*=uk-card-media]) .uk-search-toggle, .uk-card-secondary.uk-card-body .uk-search-toggle, .uk-card-secondary > :not([class*=uk-card-media]) .uk-search-toggle, .uk-overlay-primary .uk-search-toggle, .uk-offcanvas-bar .uk-search-toggle {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-search-toggle:hover, .uk-section-primary:not(.uk-preserve-color) .uk-search-toggle:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-search-toggle:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-search-toggle:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-search-toggle:hover, .uk-card-primary.uk-card-body .uk-search-toggle:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-search-toggle:hover, .uk-card-secondary.uk-card-body .uk-search-toggle:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-search-toggle:hover, .uk-overlay-primary .uk-search-toggle:hover, .uk-offcanvas-bar .uk-search-toggle:hover,\n.uk-light .uk-search-toggle:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-search-toggle:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-search-toggle:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-search-toggle:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-search-toggle:focus,\n.uk-card-primary.uk-card-body .uk-search-toggle:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-search-toggle:focus,\n.uk-card-secondary.uk-card-body .uk-search-toggle:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-search-toggle:focus,\n.uk-overlay-primary .uk-search-toggle:focus,\n.uk-offcanvas-bar .uk-search-toggle:focus {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-nav-parent-icon > .uk-parent > a::after, .uk-section-primary:not(.uk-preserve-color) .uk-nav-parent-icon > .uk-parent > a::after, .uk-section-secondary:not(.uk-preserve-color) .uk-nav-parent-icon > .uk-parent > a::after, .uk-tile-primary:not(.uk-preserve-color) .uk-nav-parent-icon > .uk-parent > a::after, .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-parent-icon > .uk-parent > a::after, .uk-card-primary.uk-card-body .uk-nav-parent-icon > .uk-parent > a::after, .uk-card-primary > :not([class*=uk-card-media]) .uk-nav-parent-icon > .uk-parent > a::after, .uk-card-secondary.uk-card-body .uk-nav-parent-icon > .uk-parent > a::after, .uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-parent-icon > .uk-parent > a::after, .uk-overlay-primary .uk-nav-parent-icon > .uk-parent > a::after, .uk-offcanvas-bar .uk-nav-parent-icon > .uk-parent > a::after {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22rgba(255, 255, 255, 0.7)%22%20stroke-width%3D%221.1%22%20points%3D%2210%201%204%207%2010%2013%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n.uk-light .uk-nav-parent-icon > .uk-parent.uk-open > a::after, .uk-section-primary:not(.uk-preserve-color) .uk-nav-parent-icon > .uk-parent.uk-open > a::after, .uk-section-secondary:not(.uk-preserve-color) .uk-nav-parent-icon > .uk-parent.uk-open > a::after, .uk-tile-primary:not(.uk-preserve-color) .uk-nav-parent-icon > .uk-parent.uk-open > a::after, .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-parent-icon > .uk-parent.uk-open > a::after, .uk-card-primary.uk-card-body .uk-nav-parent-icon > .uk-parent.uk-open > a::after, .uk-card-primary > :not([class*=uk-card-media]) .uk-nav-parent-icon > .uk-parent.uk-open > a::after, .uk-card-secondary.uk-card-body .uk-nav-parent-icon > .uk-parent.uk-open > a::after, .uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-parent-icon > .uk-parent.uk-open > a::after, .uk-overlay-primary .uk-nav-parent-icon > .uk-parent.uk-open > a::after, .uk-offcanvas-bar .uk-nav-parent-icon > .uk-parent.uk-open > a::after {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22rgba(255, 255, 255, 0.7)%22%20stroke-width%3D%221.1%22%20points%3D%221%204%207%2010%2013%204%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n.uk-light .uk-nav-default > li > a, .uk-section-primary:not(.uk-preserve-color) .uk-nav-default > li > a, .uk-section-secondary:not(.uk-preserve-color) .uk-nav-default > li > a, .uk-tile-primary:not(.uk-preserve-color) .uk-nav-default > li > a, .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default > li > a, .uk-card-primary.uk-card-body .uk-nav-default > li > a, .uk-card-primary > :not([class*=uk-card-media]) .uk-nav-default > li > a, .uk-card-secondary.uk-card-body .uk-nav-default > li > a, .uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-default > li > a, .uk-overlay-primary .uk-nav-default > li > a, .uk-offcanvas-bar .uk-nav-default > li > a {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-nav-default > li > a:hover, .uk-section-primary:not(.uk-preserve-color) .uk-nav-default > li > a:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-nav-default > li > a:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-nav-default > li > a:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default > li > a:hover, .uk-card-primary.uk-card-body .uk-nav-default > li > a:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-nav-default > li > a:hover, .uk-card-secondary.uk-card-body .uk-nav-default > li > a:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-default > li > a:hover, .uk-overlay-primary .uk-nav-default > li > a:hover, .uk-offcanvas-bar .uk-nav-default > li > a:hover,\n.uk-light .uk-nav-default > li > a:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-nav-default > li > a:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default > li > a:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default > li > a:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default > li > a:focus,\n.uk-card-primary.uk-card-body .uk-nav-default > li > a:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-nav-default > li > a:focus,\n.uk-card-secondary.uk-card-body .uk-nav-default > li > a:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-default > li > a:focus,\n.uk-overlay-primary .uk-nav-default > li > a:focus,\n.uk-offcanvas-bar .uk-nav-default > li > a:focus {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-nav-default > li.uk-active > a, .uk-section-primary:not(.uk-preserve-color) .uk-nav-default > li.uk-active > a, .uk-section-secondary:not(.uk-preserve-color) .uk-nav-default > li.uk-active > a, .uk-tile-primary:not(.uk-preserve-color) .uk-nav-default > li.uk-active > a, .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default > li.uk-active > a, .uk-card-primary.uk-card-body .uk-nav-default > li.uk-active > a, .uk-card-primary > :not([class*=uk-card-media]) .uk-nav-default > li.uk-active > a, .uk-card-secondary.uk-card-body .uk-nav-default > li.uk-active > a, .uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-default > li.uk-active > a, .uk-overlay-primary .uk-nav-default > li.uk-active > a, .uk-offcanvas-bar .uk-nav-default > li.uk-active > a {\n  color: #fff;\n}\n.uk-light .uk-nav-default .uk-nav-header, .uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-header, .uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-header, .uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-header, .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-header, .uk-card-primary.uk-card-body .uk-nav-default .uk-nav-header, .uk-card-primary > :not([class*=uk-card-media]) .uk-nav-default .uk-nav-header, .uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-header, .uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-default .uk-nav-header, .uk-overlay-primary .uk-nav-default .uk-nav-header, .uk-offcanvas-bar .uk-nav-default .uk-nav-header {\n  color: #fff;\n}\n.uk-light .uk-nav-default .uk-nav-divider, .uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-divider, .uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-divider, .uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-divider, .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-divider, .uk-card-primary.uk-card-body .uk-nav-default .uk-nav-divider, .uk-card-primary > :not([class*=uk-card-media]) .uk-nav-default .uk-nav-divider, .uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-divider, .uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-default .uk-nav-divider, .uk-overlay-primary .uk-nav-default .uk-nav-divider, .uk-offcanvas-bar .uk-nav-default .uk-nav-divider {\n  border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-light .uk-nav-default .uk-nav-sub a, .uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a, .uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a, .uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a, .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a, .uk-card-primary.uk-card-body .uk-nav-default .uk-nav-sub a, .uk-card-primary > :not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub a, .uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-sub a, .uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub a, .uk-overlay-primary .uk-nav-default .uk-nav-sub a, .uk-offcanvas-bar .uk-nav-default .uk-nav-sub a {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-nav-default .uk-nav-sub a:hover, .uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:hover, .uk-card-primary.uk-card-body .uk-nav-default .uk-nav-sub a:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub a:hover, .uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-sub a:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub a:hover, .uk-overlay-primary .uk-nav-default .uk-nav-sub a:hover, .uk-offcanvas-bar .uk-nav-default .uk-nav-sub a:hover,\n.uk-light .uk-nav-default .uk-nav-sub a:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:focus,\n.uk-card-primary.uk-card-body .uk-nav-default .uk-nav-sub a:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub a:focus,\n.uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-sub a:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub a:focus,\n.uk-overlay-primary .uk-nav-default .uk-nav-sub a:focus,\n.uk-offcanvas-bar .uk-nav-default .uk-nav-sub a:focus {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-nav-default .uk-nav-sub li.uk-active > a, .uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub li.uk-active > a, .uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub li.uk-active > a, .uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub li.uk-active > a, .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub li.uk-active > a, .uk-card-primary.uk-card-body .uk-nav-default .uk-nav-sub li.uk-active > a, .uk-card-primary > :not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub li.uk-active > a, .uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-sub li.uk-active > a, .uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub li.uk-active > a, .uk-overlay-primary .uk-nav-default .uk-nav-sub li.uk-active > a, .uk-offcanvas-bar .uk-nav-default .uk-nav-sub li.uk-active > a {\n  color: #fff;\n}\n.uk-light .uk-nav-primary > li > a, .uk-section-primary:not(.uk-preserve-color) .uk-nav-primary > li > a, .uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary > li > a, .uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary > li > a, .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary > li > a, .uk-card-primary.uk-card-body .uk-nav-primary > li > a, .uk-card-primary > :not([class*=uk-card-media]) .uk-nav-primary > li > a, .uk-card-secondary.uk-card-body .uk-nav-primary > li > a, .uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-primary > li > a, .uk-overlay-primary .uk-nav-primary > li > a, .uk-offcanvas-bar .uk-nav-primary > li > a {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-nav-primary > li > a:hover, .uk-section-primary:not(.uk-preserve-color) .uk-nav-primary > li > a:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary > li > a:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary > li > a:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary > li > a:hover, .uk-card-primary.uk-card-body .uk-nav-primary > li > a:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-nav-primary > li > a:hover, .uk-card-secondary.uk-card-body .uk-nav-primary > li > a:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-primary > li > a:hover, .uk-overlay-primary .uk-nav-primary > li > a:hover, .uk-offcanvas-bar .uk-nav-primary > li > a:hover,\n.uk-light .uk-nav-primary > li > a:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary > li > a:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary > li > a:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary > li > a:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary > li > a:focus,\n.uk-card-primary.uk-card-body .uk-nav-primary > li > a:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-nav-primary > li > a:focus,\n.uk-card-secondary.uk-card-body .uk-nav-primary > li > a:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-primary > li > a:focus,\n.uk-overlay-primary .uk-nav-primary > li > a:focus,\n.uk-offcanvas-bar .uk-nav-primary > li > a:focus {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-nav-primary > li.uk-active > a, .uk-section-primary:not(.uk-preserve-color) .uk-nav-primary > li.uk-active > a, .uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary > li.uk-active > a, .uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary > li.uk-active > a, .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary > li.uk-active > a, .uk-card-primary.uk-card-body .uk-nav-primary > li.uk-active > a, .uk-card-primary > :not([class*=uk-card-media]) .uk-nav-primary > li.uk-active > a, .uk-card-secondary.uk-card-body .uk-nav-primary > li.uk-active > a, .uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-primary > li.uk-active > a, .uk-overlay-primary .uk-nav-primary > li.uk-active > a, .uk-offcanvas-bar .uk-nav-primary > li.uk-active > a {\n  color: #fff;\n}\n.uk-light .uk-nav-primary .uk-nav-header, .uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-header, .uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-header, .uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-header, .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-header, .uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-header, .uk-card-primary > :not([class*=uk-card-media]) .uk-nav-primary .uk-nav-header, .uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-header, .uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-primary .uk-nav-header, .uk-overlay-primary .uk-nav-primary .uk-nav-header, .uk-offcanvas-bar .uk-nav-primary .uk-nav-header {\n  color: #fff;\n}\n.uk-light .uk-nav-primary .uk-nav-divider, .uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-divider, .uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-divider, .uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-divider, .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-divider, .uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-divider, .uk-card-primary > :not([class*=uk-card-media]) .uk-nav-primary .uk-nav-divider, .uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-divider, .uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-primary .uk-nav-divider, .uk-overlay-primary .uk-nav-primary .uk-nav-divider, .uk-offcanvas-bar .uk-nav-primary .uk-nav-divider {\n  border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-light .uk-nav-primary .uk-nav-sub a, .uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a, .uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a, .uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a, .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a, .uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-sub a, .uk-card-primary > :not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub a, .uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-sub a, .uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub a, .uk-overlay-primary .uk-nav-primary .uk-nav-sub a, .uk-offcanvas-bar .uk-nav-primary .uk-nav-sub a {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-nav-primary .uk-nav-sub a:hover, .uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:hover, .uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-sub a:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub a:hover, .uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-sub a:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub a:hover, .uk-overlay-primary .uk-nav-primary .uk-nav-sub a:hover, .uk-offcanvas-bar .uk-nav-primary .uk-nav-sub a:hover,\n.uk-light .uk-nav-primary .uk-nav-sub a:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:focus,\n.uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-sub a:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub a:focus,\n.uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-sub a:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub a:focus,\n.uk-overlay-primary .uk-nav-primary .uk-nav-sub a:focus,\n.uk-offcanvas-bar .uk-nav-primary .uk-nav-sub a:focus {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-nav-primary .uk-nav-sub li.uk-active > a, .uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub li.uk-active > a, .uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub li.uk-active > a, .uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub li.uk-active > a, .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub li.uk-active > a, .uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-sub li.uk-active > a, .uk-card-primary > :not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub li.uk-active > a, .uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-sub li.uk-active > a, .uk-card-secondary > :not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub li.uk-active > a, .uk-overlay-primary .uk-nav-primary .uk-nav-sub li.uk-active > a, .uk-offcanvas-bar .uk-nav-primary .uk-nav-sub li.uk-active > a {\n  color: #fff;\n}\n.uk-light .uk-navbar-nav > li > a, .uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav > li > a, .uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav > li > a, .uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav > li > a, .uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav > li > a, .uk-card-primary.uk-card-body .uk-navbar-nav > li > a, .uk-card-primary > :not([class*=uk-card-media]) .uk-navbar-nav > li > a, .uk-card-secondary.uk-card-body .uk-navbar-nav > li > a, .uk-card-secondary > :not([class*=uk-card-media]) .uk-navbar-nav > li > a, .uk-overlay-primary .uk-navbar-nav > li > a, .uk-offcanvas-bar .uk-navbar-nav > li > a {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-navbar-nav > li:hover > a, .uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav > li:hover > a, .uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav > li:hover > a, .uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav > li:hover > a, .uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav > li:hover > a, .uk-card-primary.uk-card-body .uk-navbar-nav > li:hover > a, .uk-card-primary > :not([class*=uk-card-media]) .uk-navbar-nav > li:hover > a, .uk-card-secondary.uk-card-body .uk-navbar-nav > li:hover > a, .uk-card-secondary > :not([class*=uk-card-media]) .uk-navbar-nav > li:hover > a, .uk-overlay-primary .uk-navbar-nav > li:hover > a, .uk-offcanvas-bar .uk-navbar-nav > li:hover > a,\n.uk-light .uk-navbar-nav > li > a:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav > li > a:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav > li > a:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav > li > a:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav > li > a:focus,\n.uk-card-primary.uk-card-body .uk-navbar-nav > li > a:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-navbar-nav > li > a:focus,\n.uk-card-secondary.uk-card-body .uk-navbar-nav > li > a:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-navbar-nav > li > a:focus,\n.uk-overlay-primary .uk-navbar-nav > li > a:focus,\n.uk-offcanvas-bar .uk-navbar-nav > li > a:focus,\n.uk-light .uk-navbar-nav > li > a.uk-open,\n.uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav > li > a.uk-open,\n.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav > li > a.uk-open,\n.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav > li > a.uk-open,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav > li > a.uk-open,\n.uk-card-primary.uk-card-body .uk-navbar-nav > li > a.uk-open,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-navbar-nav > li > a.uk-open,\n.uk-card-secondary.uk-card-body .uk-navbar-nav > li > a.uk-open,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-navbar-nav > li > a.uk-open,\n.uk-overlay-primary .uk-navbar-nav > li > a.uk-open,\n.uk-offcanvas-bar .uk-navbar-nav > li > a.uk-open {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-navbar-nav > li > a:active, .uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav > li > a:active, .uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav > li > a:active, .uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav > li > a:active, .uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav > li > a:active, .uk-card-primary.uk-card-body .uk-navbar-nav > li > a:active, .uk-card-primary > :not([class*=uk-card-media]) .uk-navbar-nav > li > a:active, .uk-card-secondary.uk-card-body .uk-navbar-nav > li > a:active, .uk-card-secondary > :not([class*=uk-card-media]) .uk-navbar-nav > li > a:active, .uk-overlay-primary .uk-navbar-nav > li > a:active, .uk-offcanvas-bar .uk-navbar-nav > li > a:active {\n  color: #fff;\n}\n.uk-light .uk-navbar-nav > li.uk-active > a, .uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav > li.uk-active > a, .uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav > li.uk-active > a, .uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav > li.uk-active > a, .uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav > li.uk-active > a, .uk-card-primary.uk-card-body .uk-navbar-nav > li.uk-active > a, .uk-card-primary > :not([class*=uk-card-media]) .uk-navbar-nav > li.uk-active > a, .uk-card-secondary.uk-card-body .uk-navbar-nav > li.uk-active > a, .uk-card-secondary > :not([class*=uk-card-media]) .uk-navbar-nav > li.uk-active > a, .uk-overlay-primary .uk-navbar-nav > li.uk-active > a, .uk-offcanvas-bar .uk-navbar-nav > li.uk-active > a {\n  color: #fff;\n}\n.uk-light .uk-navbar-item, .uk-section-primary:not(.uk-preserve-color) .uk-navbar-item, .uk-section-secondary:not(.uk-preserve-color) .uk-navbar-item, .uk-tile-primary:not(.uk-preserve-color) .uk-navbar-item, .uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-item, .uk-card-primary.uk-card-body .uk-navbar-item, .uk-card-primary > :not([class*=uk-card-media]) .uk-navbar-item, .uk-card-secondary.uk-card-body .uk-navbar-item, .uk-card-secondary > :not([class*=uk-card-media]) .uk-navbar-item, .uk-overlay-primary .uk-navbar-item, .uk-offcanvas-bar .uk-navbar-item {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-navbar-toggle, .uk-section-primary:not(.uk-preserve-color) .uk-navbar-toggle, .uk-section-secondary:not(.uk-preserve-color) .uk-navbar-toggle, .uk-tile-primary:not(.uk-preserve-color) .uk-navbar-toggle, .uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-toggle, .uk-card-primary.uk-card-body .uk-navbar-toggle, .uk-card-primary > :not([class*=uk-card-media]) .uk-navbar-toggle, .uk-card-secondary.uk-card-body .uk-navbar-toggle, .uk-card-secondary > :not([class*=uk-card-media]) .uk-navbar-toggle, .uk-overlay-primary .uk-navbar-toggle, .uk-offcanvas-bar .uk-navbar-toggle {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-navbar-toggle:hover, .uk-section-primary:not(.uk-preserve-color) .uk-navbar-toggle:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-navbar-toggle:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-navbar-toggle:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-toggle:hover, .uk-card-primary.uk-card-body .uk-navbar-toggle:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-navbar-toggle:hover, .uk-card-secondary.uk-card-body .uk-navbar-toggle:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-navbar-toggle:hover, .uk-overlay-primary .uk-navbar-toggle:hover, .uk-offcanvas-bar .uk-navbar-toggle:hover,\n.uk-light .uk-navbar-toggle:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-navbar-toggle:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-toggle:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-toggle:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-toggle:focus,\n.uk-card-primary.uk-card-body .uk-navbar-toggle:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-navbar-toggle:focus,\n.uk-card-secondary.uk-card-body .uk-navbar-toggle:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-navbar-toggle:focus,\n.uk-overlay-primary .uk-navbar-toggle:focus,\n.uk-offcanvas-bar .uk-navbar-toggle:focus,\n.uk-light .uk-navbar-toggle.uk-open,\n.uk-section-primary:not(.uk-preserve-color) .uk-navbar-toggle.uk-open,\n.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-toggle.uk-open,\n.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-toggle.uk-open,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-toggle.uk-open,\n.uk-card-primary.uk-card-body .uk-navbar-toggle.uk-open,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-navbar-toggle.uk-open,\n.uk-card-secondary.uk-card-body .uk-navbar-toggle.uk-open,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-navbar-toggle.uk-open,\n.uk-overlay-primary .uk-navbar-toggle.uk-open,\n.uk-offcanvas-bar .uk-navbar-toggle.uk-open {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-subnav > * > :first-child, .uk-section-primary:not(.uk-preserve-color) .uk-subnav > * > :first-child, .uk-section-secondary:not(.uk-preserve-color) .uk-subnav > * > :first-child, .uk-tile-primary:not(.uk-preserve-color) .uk-subnav > * > :first-child, .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav > * > :first-child, .uk-card-primary.uk-card-body .uk-subnav > * > :first-child, .uk-card-primary > :not([class*=uk-card-media]) .uk-subnav > * > :first-child, .uk-card-secondary.uk-card-body .uk-subnav > * > :first-child, .uk-card-secondary > :not([class*=uk-card-media]) .uk-subnav > * > :first-child, .uk-overlay-primary .uk-subnav > * > :first-child, .uk-offcanvas-bar .uk-subnav > * > :first-child {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-subnav > * > a:hover, .uk-section-primary:not(.uk-preserve-color) .uk-subnav > * > a:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-subnav > * > a:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-subnav > * > a:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav > * > a:hover, .uk-card-primary.uk-card-body .uk-subnav > * > a:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-subnav > * > a:hover, .uk-card-secondary.uk-card-body .uk-subnav > * > a:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-subnav > * > a:hover, .uk-overlay-primary .uk-subnav > * > a:hover, .uk-offcanvas-bar .uk-subnav > * > a:hover,\n.uk-light .uk-subnav > * > a:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-subnav > * > a:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-subnav > * > a:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-subnav > * > a:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav > * > a:focus,\n.uk-card-primary.uk-card-body .uk-subnav > * > a:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-subnav > * > a:focus,\n.uk-card-secondary.uk-card-body .uk-subnav > * > a:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-subnav > * > a:focus,\n.uk-overlay-primary .uk-subnav > * > a:focus,\n.uk-offcanvas-bar .uk-subnav > * > a:focus {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-subnav > .uk-active > a, .uk-section-primary:not(.uk-preserve-color) .uk-subnav > .uk-active > a, .uk-section-secondary:not(.uk-preserve-color) .uk-subnav > .uk-active > a, .uk-tile-primary:not(.uk-preserve-color) .uk-subnav > .uk-active > a, .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav > .uk-active > a, .uk-card-primary.uk-card-body .uk-subnav > .uk-active > a, .uk-card-primary > :not([class*=uk-card-media]) .uk-subnav > .uk-active > a, .uk-card-secondary.uk-card-body .uk-subnav > .uk-active > a, .uk-card-secondary > :not([class*=uk-card-media]) .uk-subnav > .uk-active > a, .uk-overlay-primary .uk-subnav > .uk-active > a, .uk-offcanvas-bar .uk-subnav > .uk-active > a {\n  color: #fff;\n}\n.uk-light .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before, .uk-section-primary:not(.uk-preserve-color) .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before, .uk-section-secondary:not(.uk-preserve-color) .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before, .uk-tile-primary:not(.uk-preserve-color) .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before, .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before, .uk-card-primary.uk-card-body .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before, .uk-card-primary > :not([class*=uk-card-media]) .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before, .uk-card-secondary.uk-card-body .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before, .uk-card-secondary > :not([class*=uk-card-media]) .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before, .uk-overlay-primary .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before, .uk-offcanvas-bar .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before {\n  border-left-color: rgba(255, 255, 255, 0.2);\n}\n.uk-light .uk-subnav-pill > * > :first-child, .uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill > * > :first-child, .uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill > * > :first-child, .uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill > * > :first-child, .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill > * > :first-child, .uk-card-primary.uk-card-body .uk-subnav-pill > * > :first-child, .uk-card-primary > :not([class*=uk-card-media]) .uk-subnav-pill > * > :first-child, .uk-card-secondary.uk-card-body .uk-subnav-pill > * > :first-child, .uk-card-secondary > :not([class*=uk-card-media]) .uk-subnav-pill > * > :first-child, .uk-overlay-primary .uk-subnav-pill > * > :first-child, .uk-offcanvas-bar .uk-subnav-pill > * > :first-child {\n  background-color: transparent;\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-subnav-pill > * > a:hover, .uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill > * > a:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill > * > a:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill > * > a:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill > * > a:hover, .uk-card-primary.uk-card-body .uk-subnav-pill > * > a:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-subnav-pill > * > a:hover, .uk-card-secondary.uk-card-body .uk-subnav-pill > * > a:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-subnav-pill > * > a:hover, .uk-overlay-primary .uk-subnav-pill > * > a:hover, .uk-offcanvas-bar .uk-subnav-pill > * > a:hover,\n.uk-light .uk-subnav-pill > * > a:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill > * > a:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill > * > a:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill > * > a:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill > * > a:focus,\n.uk-card-primary.uk-card-body .uk-subnav-pill > * > a:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-subnav-pill > * > a:focus,\n.uk-card-secondary.uk-card-body .uk-subnav-pill > * > a:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-subnav-pill > * > a:focus,\n.uk-overlay-primary .uk-subnav-pill > * > a:focus,\n.uk-offcanvas-bar .uk-subnav-pill > * > a:focus {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-subnav-pill > * > a:active, .uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill > * > a:active, .uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill > * > a:active, .uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill > * > a:active, .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill > * > a:active, .uk-card-primary.uk-card-body .uk-subnav-pill > * > a:active, .uk-card-primary > :not([class*=uk-card-media]) .uk-subnav-pill > * > a:active, .uk-card-secondary.uk-card-body .uk-subnav-pill > * > a:active, .uk-card-secondary > :not([class*=uk-card-media]) .uk-subnav-pill > * > a:active, .uk-overlay-primary .uk-subnav-pill > * > a:active, .uk-offcanvas-bar .uk-subnav-pill > * > a:active {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-subnav-pill > .uk-active > a, .uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a, .uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a, .uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a, .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a, .uk-card-primary.uk-card-body .uk-subnav-pill > .uk-active > a, .uk-card-primary > :not([class*=uk-card-media]) .uk-subnav-pill > .uk-active > a, .uk-card-secondary.uk-card-body .uk-subnav-pill > .uk-active > a, .uk-card-secondary > :not([class*=uk-card-media]) .uk-subnav-pill > .uk-active > a, .uk-overlay-primary .uk-subnav-pill > .uk-active > a, .uk-offcanvas-bar .uk-subnav-pill > .uk-active > a {\n  background-color: #fff;\n  color: #666;\n}\n.uk-light .uk-subnav > .uk-disabled > a, .uk-section-primary:not(.uk-preserve-color) .uk-subnav > .uk-disabled > a, .uk-section-secondary:not(.uk-preserve-color) .uk-subnav > .uk-disabled > a, .uk-tile-primary:not(.uk-preserve-color) .uk-subnav > .uk-disabled > a, .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav > .uk-disabled > a, .uk-card-primary.uk-card-body .uk-subnav > .uk-disabled > a, .uk-card-primary > :not([class*=uk-card-media]) .uk-subnav > .uk-disabled > a, .uk-card-secondary.uk-card-body .uk-subnav > .uk-disabled > a, .uk-card-secondary > :not([class*=uk-card-media]) .uk-subnav > .uk-disabled > a, .uk-overlay-primary .uk-subnav > .uk-disabled > a, .uk-offcanvas-bar .uk-subnav > .uk-disabled > a {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-breadcrumb > * > *, .uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb > * > *, .uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb > * > *, .uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb > * > *, .uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb > * > *, .uk-card-primary.uk-card-body .uk-breadcrumb > * > *, .uk-card-primary > :not([class*=uk-card-media]) .uk-breadcrumb > * > *, .uk-card-secondary.uk-card-body .uk-breadcrumb > * > *, .uk-card-secondary > :not([class*=uk-card-media]) .uk-breadcrumb > * > *, .uk-overlay-primary .uk-breadcrumb > * > *, .uk-offcanvas-bar .uk-breadcrumb > * > * {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-breadcrumb > * > :hover, .uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb > * > :hover, .uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb > * > :hover, .uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb > * > :hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb > * > :hover, .uk-card-primary.uk-card-body .uk-breadcrumb > * > :hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-breadcrumb > * > :hover, .uk-card-secondary.uk-card-body .uk-breadcrumb > * > :hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-breadcrumb > * > :hover, .uk-overlay-primary .uk-breadcrumb > * > :hover, .uk-offcanvas-bar .uk-breadcrumb > * > :hover,\n.uk-light .uk-breadcrumb > * > :focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb > * > :focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb > * > :focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb > * > :focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb > * > :focus,\n.uk-card-primary.uk-card-body .uk-breadcrumb > * > :focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-breadcrumb > * > :focus,\n.uk-card-secondary.uk-card-body .uk-breadcrumb > * > :focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-breadcrumb > * > :focus,\n.uk-overlay-primary .uk-breadcrumb > * > :focus,\n.uk-offcanvas-bar .uk-breadcrumb > * > :focus {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-breadcrumb > :last-child > *, .uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb > :last-child > *, .uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb > :last-child > *, .uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb > :last-child > *, .uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb > :last-child > *, .uk-card-primary.uk-card-body .uk-breadcrumb > :last-child > *, .uk-card-primary > :not([class*=uk-card-media]) .uk-breadcrumb > :last-child > *, .uk-card-secondary.uk-card-body .uk-breadcrumb > :last-child > *, .uk-card-secondary > :not([class*=uk-card-media]) .uk-breadcrumb > :last-child > *, .uk-overlay-primary .uk-breadcrumb > :last-child > *, .uk-offcanvas-bar .uk-breadcrumb > :last-child > * {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before, .uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before, .uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before, .uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before, .uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before, .uk-card-primary.uk-card-body .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before, .uk-card-primary > :not([class*=uk-card-media]) .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before, .uk-card-secondary.uk-card-body .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before, .uk-card-secondary > :not([class*=uk-card-media]) .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before, .uk-overlay-primary .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before, .uk-offcanvas-bar .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-pagination > * > *, .uk-section-primary:not(.uk-preserve-color) .uk-pagination > * > *, .uk-section-secondary:not(.uk-preserve-color) .uk-pagination > * > *, .uk-tile-primary:not(.uk-preserve-color) .uk-pagination > * > *, .uk-tile-secondary:not(.uk-preserve-color) .uk-pagination > * > *, .uk-card-primary.uk-card-body .uk-pagination > * > *, .uk-card-primary > :not([class*=uk-card-media]) .uk-pagination > * > *, .uk-card-secondary.uk-card-body .uk-pagination > * > *, .uk-card-secondary > :not([class*=uk-card-media]) .uk-pagination > * > *, .uk-overlay-primary .uk-pagination > * > *, .uk-offcanvas-bar .uk-pagination > * > * {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-pagination > * > :hover, .uk-section-primary:not(.uk-preserve-color) .uk-pagination > * > :hover, .uk-section-secondary:not(.uk-preserve-color) .uk-pagination > * > :hover, .uk-tile-primary:not(.uk-preserve-color) .uk-pagination > * > :hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-pagination > * > :hover, .uk-card-primary.uk-card-body .uk-pagination > * > :hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-pagination > * > :hover, .uk-card-secondary.uk-card-body .uk-pagination > * > :hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-pagination > * > :hover, .uk-overlay-primary .uk-pagination > * > :hover, .uk-offcanvas-bar .uk-pagination > * > :hover,\n.uk-light .uk-pagination > * > :focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-pagination > * > :focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-pagination > * > :focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-pagination > * > :focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-pagination > * > :focus,\n.uk-card-primary.uk-card-body .uk-pagination > * > :focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-pagination > * > :focus,\n.uk-card-secondary.uk-card-body .uk-pagination > * > :focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-pagination > * > :focus,\n.uk-overlay-primary .uk-pagination > * > :focus,\n.uk-offcanvas-bar .uk-pagination > * > :focus {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-pagination > .uk-active > *, .uk-section-primary:not(.uk-preserve-color) .uk-pagination > .uk-active > *, .uk-section-secondary:not(.uk-preserve-color) .uk-pagination > .uk-active > *, .uk-tile-primary:not(.uk-preserve-color) .uk-pagination > .uk-active > *, .uk-tile-secondary:not(.uk-preserve-color) .uk-pagination > .uk-active > *, .uk-card-primary.uk-card-body .uk-pagination > .uk-active > *, .uk-card-primary > :not([class*=uk-card-media]) .uk-pagination > .uk-active > *, .uk-card-secondary.uk-card-body .uk-pagination > .uk-active > *, .uk-card-secondary > :not([class*=uk-card-media]) .uk-pagination > .uk-active > *, .uk-overlay-primary .uk-pagination > .uk-active > *, .uk-offcanvas-bar .uk-pagination > .uk-active > * {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-pagination > .uk-disabled > *, .uk-section-primary:not(.uk-preserve-color) .uk-pagination > .uk-disabled > *, .uk-section-secondary:not(.uk-preserve-color) .uk-pagination > .uk-disabled > *, .uk-tile-primary:not(.uk-preserve-color) .uk-pagination > .uk-disabled > *, .uk-tile-secondary:not(.uk-preserve-color) .uk-pagination > .uk-disabled > *, .uk-card-primary.uk-card-body .uk-pagination > .uk-disabled > *, .uk-card-primary > :not([class*=uk-card-media]) .uk-pagination > .uk-disabled > *, .uk-card-secondary.uk-card-body .uk-pagination > .uk-disabled > *, .uk-card-secondary > :not([class*=uk-card-media]) .uk-pagination > .uk-disabled > *, .uk-overlay-primary .uk-pagination > .uk-disabled > *, .uk-offcanvas-bar .uk-pagination > .uk-disabled > * {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-tab::before, .uk-section-primary:not(.uk-preserve-color) .uk-tab::before, .uk-section-secondary:not(.uk-preserve-color) .uk-tab::before, .uk-tile-primary:not(.uk-preserve-color) .uk-tab::before, .uk-tile-secondary:not(.uk-preserve-color) .uk-tab::before, .uk-card-primary.uk-card-body .uk-tab::before, .uk-card-primary > :not([class*=uk-card-media]) .uk-tab::before, .uk-card-secondary.uk-card-body .uk-tab::before, .uk-card-secondary > :not([class*=uk-card-media]) .uk-tab::before, .uk-overlay-primary .uk-tab::before, .uk-offcanvas-bar .uk-tab::before {\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.uk-light .uk-tab > * > a, .uk-section-primary:not(.uk-preserve-color) .uk-tab > * > a, .uk-section-secondary:not(.uk-preserve-color) .uk-tab > * > a, .uk-tile-primary:not(.uk-preserve-color) .uk-tab > * > a, .uk-tile-secondary:not(.uk-preserve-color) .uk-tab > * > a, .uk-card-primary.uk-card-body .uk-tab > * > a, .uk-card-primary > :not([class*=uk-card-media]) .uk-tab > * > a, .uk-card-secondary.uk-card-body .uk-tab > * > a, .uk-card-secondary > :not([class*=uk-card-media]) .uk-tab > * > a, .uk-overlay-primary .uk-tab > * > a, .uk-offcanvas-bar .uk-tab > * > a {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-tab > * > a:hover, .uk-section-primary:not(.uk-preserve-color) .uk-tab > * > a:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-tab > * > a:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-tab > * > a:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-tab > * > a:hover, .uk-card-primary.uk-card-body .uk-tab > * > a:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-tab > * > a:hover, .uk-card-secondary.uk-card-body .uk-tab > * > a:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-tab > * > a:hover, .uk-overlay-primary .uk-tab > * > a:hover, .uk-offcanvas-bar .uk-tab > * > a:hover,\n.uk-light .uk-tab > * > a:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-tab > * > a:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-tab > * > a:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-tab > * > a:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-tab > * > a:focus,\n.uk-card-primary.uk-card-body .uk-tab > * > a:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-tab > * > a:focus,\n.uk-card-secondary.uk-card-body .uk-tab > * > a:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-tab > * > a:focus,\n.uk-overlay-primary .uk-tab > * > a:focus,\n.uk-offcanvas-bar .uk-tab > * > a:focus {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-tab > .uk-active > a, .uk-section-primary:not(.uk-preserve-color) .uk-tab > .uk-active > a, .uk-section-secondary:not(.uk-preserve-color) .uk-tab > .uk-active > a, .uk-tile-primary:not(.uk-preserve-color) .uk-tab > .uk-active > a, .uk-tile-secondary:not(.uk-preserve-color) .uk-tab > .uk-active > a, .uk-card-primary.uk-card-body .uk-tab > .uk-active > a, .uk-card-primary > :not([class*=uk-card-media]) .uk-tab > .uk-active > a, .uk-card-secondary.uk-card-body .uk-tab > .uk-active > a, .uk-card-secondary > :not([class*=uk-card-media]) .uk-tab > .uk-active > a, .uk-overlay-primary .uk-tab > .uk-active > a, .uk-offcanvas-bar .uk-tab > .uk-active > a {\n  color: #fff;\n  border-color: #fff;\n}\n.uk-light .uk-tab > .uk-disabled > a, .uk-section-primary:not(.uk-preserve-color) .uk-tab > .uk-disabled > a, .uk-section-secondary:not(.uk-preserve-color) .uk-tab > .uk-disabled > a, .uk-tile-primary:not(.uk-preserve-color) .uk-tab > .uk-disabled > a, .uk-tile-secondary:not(.uk-preserve-color) .uk-tab > .uk-disabled > a, .uk-card-primary.uk-card-body .uk-tab > .uk-disabled > a, .uk-card-primary > :not([class*=uk-card-media]) .uk-tab > .uk-disabled > a, .uk-card-secondary.uk-card-body .uk-tab > .uk-disabled > a, .uk-card-secondary > :not([class*=uk-card-media]) .uk-tab > .uk-disabled > a, .uk-overlay-primary .uk-tab > .uk-disabled > a, .uk-offcanvas-bar .uk-tab > .uk-disabled > a {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-slidenav, .uk-section-primary:not(.uk-preserve-color) .uk-slidenav, .uk-section-secondary:not(.uk-preserve-color) .uk-slidenav, .uk-tile-primary:not(.uk-preserve-color) .uk-slidenav, .uk-tile-secondary:not(.uk-preserve-color) .uk-slidenav, .uk-card-primary.uk-card-body .uk-slidenav, .uk-card-primary > :not([class*=uk-card-media]) .uk-slidenav, .uk-card-secondary.uk-card-body .uk-slidenav, .uk-card-secondary > :not([class*=uk-card-media]) .uk-slidenav, .uk-overlay-primary .uk-slidenav, .uk-offcanvas-bar .uk-slidenav {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-slidenav:hover, .uk-section-primary:not(.uk-preserve-color) .uk-slidenav:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-slidenav:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-slidenav:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-slidenav:hover, .uk-card-primary.uk-card-body .uk-slidenav:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-slidenav:hover, .uk-card-secondary.uk-card-body .uk-slidenav:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-slidenav:hover, .uk-overlay-primary .uk-slidenav:hover, .uk-offcanvas-bar .uk-slidenav:hover,\n.uk-light .uk-slidenav:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-slidenav:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-slidenav:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-slidenav:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-slidenav:focus,\n.uk-card-primary.uk-card-body .uk-slidenav:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-slidenav:focus,\n.uk-card-secondary.uk-card-body .uk-slidenav:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-slidenav:focus,\n.uk-overlay-primary .uk-slidenav:focus,\n.uk-offcanvas-bar .uk-slidenav:focus {\n  color: rgba(255, 255, 255, 0.95);\n}\n.uk-light .uk-slidenav:active, .uk-section-primary:not(.uk-preserve-color) .uk-slidenav:active, .uk-section-secondary:not(.uk-preserve-color) .uk-slidenav:active, .uk-tile-primary:not(.uk-preserve-color) .uk-slidenav:active, .uk-tile-secondary:not(.uk-preserve-color) .uk-slidenav:active, .uk-card-primary.uk-card-body .uk-slidenav:active, .uk-card-primary > :not([class*=uk-card-media]) .uk-slidenav:active, .uk-card-secondary.uk-card-body .uk-slidenav:active, .uk-card-secondary > :not([class*=uk-card-media]) .uk-slidenav:active, .uk-overlay-primary .uk-slidenav:active, .uk-offcanvas-bar .uk-slidenav:active {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-dotnav > * > *, .uk-section-primary:not(.uk-preserve-color) .uk-dotnav > * > *, .uk-section-secondary:not(.uk-preserve-color) .uk-dotnav > * > *, .uk-tile-primary:not(.uk-preserve-color) .uk-dotnav > * > *, .uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav > * > *, .uk-card-primary.uk-card-body .uk-dotnav > * > *, .uk-card-primary > :not([class*=uk-card-media]) .uk-dotnav > * > *, .uk-card-secondary.uk-card-body .uk-dotnav > * > *, .uk-card-secondary > :not([class*=uk-card-media]) .uk-dotnav > * > *, .uk-overlay-primary .uk-dotnav > * > *, .uk-offcanvas-bar .uk-dotnav > * > * {\n  background-color: transparent;\n  border-color: rgba(255, 255, 255, 0.9);\n}\n.uk-light .uk-dotnav > * > :hover, .uk-section-primary:not(.uk-preserve-color) .uk-dotnav > * > :hover, .uk-section-secondary:not(.uk-preserve-color) .uk-dotnav > * > :hover, .uk-tile-primary:not(.uk-preserve-color) .uk-dotnav > * > :hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav > * > :hover, .uk-card-primary.uk-card-body .uk-dotnav > * > :hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-dotnav > * > :hover, .uk-card-secondary.uk-card-body .uk-dotnav > * > :hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-dotnav > * > :hover, .uk-overlay-primary .uk-dotnav > * > :hover, .uk-offcanvas-bar .uk-dotnav > * > :hover,\n.uk-light .uk-dotnav > * > :focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-dotnav > * > :focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-dotnav > * > :focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-dotnav > * > :focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav > * > :focus,\n.uk-card-primary.uk-card-body .uk-dotnav > * > :focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-dotnav > * > :focus,\n.uk-card-secondary.uk-card-body .uk-dotnav > * > :focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-dotnav > * > :focus,\n.uk-overlay-primary .uk-dotnav > * > :focus,\n.uk-offcanvas-bar .uk-dotnav > * > :focus {\n  background-color: rgba(255, 255, 255, 0.9);\n  border-color: transparent;\n}\n.uk-light .uk-dotnav > * > :active, .uk-section-primary:not(.uk-preserve-color) .uk-dotnav > * > :active, .uk-section-secondary:not(.uk-preserve-color) .uk-dotnav > * > :active, .uk-tile-primary:not(.uk-preserve-color) .uk-dotnav > * > :active, .uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav > * > :active, .uk-card-primary.uk-card-body .uk-dotnav > * > :active, .uk-card-primary > :not([class*=uk-card-media]) .uk-dotnav > * > :active, .uk-card-secondary.uk-card-body .uk-dotnav > * > :active, .uk-card-secondary > :not([class*=uk-card-media]) .uk-dotnav > * > :active, .uk-overlay-primary .uk-dotnav > * > :active, .uk-offcanvas-bar .uk-dotnav > * > :active {\n  background-color: rgba(255, 255, 255, 0.5);\n  border-color: transparent;\n}\n.uk-light .uk-dotnav > .uk-active > *, .uk-section-primary:not(.uk-preserve-color) .uk-dotnav > .uk-active > *, .uk-section-secondary:not(.uk-preserve-color) .uk-dotnav > .uk-active > *, .uk-tile-primary:not(.uk-preserve-color) .uk-dotnav > .uk-active > *, .uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav > .uk-active > *, .uk-card-primary.uk-card-body .uk-dotnav > .uk-active > *, .uk-card-primary > :not([class*=uk-card-media]) .uk-dotnav > .uk-active > *, .uk-card-secondary.uk-card-body .uk-dotnav > .uk-active > *, .uk-card-secondary > :not([class*=uk-card-media]) .uk-dotnav > .uk-active > *, .uk-overlay-primary .uk-dotnav > .uk-active > *, .uk-offcanvas-bar .uk-dotnav > .uk-active > * {\n  background-color: rgba(255, 255, 255, 0.9);\n  border-color: transparent;\n}\n.uk-light .uk-accordion-title::before, .uk-section-primary:not(.uk-preserve-color) .uk-accordion-title::before, .uk-section-secondary:not(.uk-preserve-color) .uk-accordion-title::before, .uk-tile-primary:not(.uk-preserve-color) .uk-accordion-title::before, .uk-tile-secondary:not(.uk-preserve-color) .uk-accordion-title::before, .uk-card-primary.uk-card-body .uk-accordion-title::before, .uk-card-primary > :not([class*=uk-card-media]) .uk-accordion-title::before, .uk-card-secondary.uk-card-body .uk-accordion-title::before, .uk-card-secondary > :not([class*=uk-card-media]) .uk-accordion-title::before, .uk-overlay-primary .uk-accordion-title::before, .uk-offcanvas-bar .uk-accordion-title::before {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22rgba(255, 255, 255, 0.7)%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%20%2F%3E%0A%20%20%20%20%3Crect%20fill%3D%22rgba(255, 255, 255, 0.7)%22%20width%3D%221%22%20height%3D%2213%22%20x%3D%226%22%20y%3D%220%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n.uk-light .uk-open > .uk-accordion-title::before, .uk-section-primary:not(.uk-preserve-color) .uk-open > .uk-accordion-title::before, .uk-section-secondary:not(.uk-preserve-color) .uk-open > .uk-accordion-title::before, .uk-tile-primary:not(.uk-preserve-color) .uk-open > .uk-accordion-title::before, .uk-tile-secondary:not(.uk-preserve-color) .uk-open > .uk-accordion-title::before, .uk-card-primary.uk-card-body .uk-open > .uk-accordion-title::before, .uk-card-primary > :not([class*=uk-card-media]) .uk-open > .uk-accordion-title::before, .uk-card-secondary.uk-card-body .uk-open > .uk-accordion-title::before, .uk-card-secondary > :not([class*=uk-card-media]) .uk-open > .uk-accordion-title::before, .uk-overlay-primary .uk-open > .uk-accordion-title::before, .uk-offcanvas-bar .uk-open > .uk-accordion-title::before {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22rgba(255, 255, 255, 0.7)%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n.uk-light .uk-iconnav > * > a, .uk-section-primary:not(.uk-preserve-color) .uk-iconnav > * > a, .uk-section-secondary:not(.uk-preserve-color) .uk-iconnav > * > a, .uk-tile-primary:not(.uk-preserve-color) .uk-iconnav > * > a, .uk-tile-secondary:not(.uk-preserve-color) .uk-iconnav > * > a, .uk-card-primary.uk-card-body .uk-iconnav > * > a, .uk-card-primary > :not([class*=uk-card-media]) .uk-iconnav > * > a, .uk-card-secondary.uk-card-body .uk-iconnav > * > a, .uk-card-secondary > :not([class*=uk-card-media]) .uk-iconnav > * > a, .uk-overlay-primary .uk-iconnav > * > a, .uk-offcanvas-bar .uk-iconnav > * > a {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-iconnav > * > a:hover, .uk-section-primary:not(.uk-preserve-color) .uk-iconnav > * > a:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-iconnav > * > a:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-iconnav > * > a:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-iconnav > * > a:hover, .uk-card-primary.uk-card-body .uk-iconnav > * > a:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-iconnav > * > a:hover, .uk-card-secondary.uk-card-body .uk-iconnav > * > a:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-iconnav > * > a:hover, .uk-overlay-primary .uk-iconnav > * > a:hover, .uk-offcanvas-bar .uk-iconnav > * > a:hover,\n.uk-light .uk-iconnav > * > a:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-iconnav > * > a:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-iconnav > * > a:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-iconnav > * > a:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-iconnav > * > a:focus,\n.uk-card-primary.uk-card-body .uk-iconnav > * > a:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-iconnav > * > a:focus,\n.uk-card-secondary.uk-card-body .uk-iconnav > * > a:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-iconnav > * > a:focus,\n.uk-overlay-primary .uk-iconnav > * > a:focus,\n.uk-offcanvas-bar .uk-iconnav > * > a:focus {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-iconnav > .uk-active > a, .uk-section-primary:not(.uk-preserve-color) .uk-iconnav > .uk-active > a, .uk-section-secondary:not(.uk-preserve-color) .uk-iconnav > .uk-active > a, .uk-tile-primary:not(.uk-preserve-color) .uk-iconnav > .uk-active > a, .uk-tile-secondary:not(.uk-preserve-color) .uk-iconnav > .uk-active > a, .uk-card-primary.uk-card-body .uk-iconnav > .uk-active > a, .uk-card-primary > :not([class*=uk-card-media]) .uk-iconnav > .uk-active > a, .uk-card-secondary.uk-card-body .uk-iconnav > .uk-active > a, .uk-card-secondary > :not([class*=uk-card-media]) .uk-iconnav > .uk-active > a, .uk-overlay-primary .uk-iconnav > .uk-active > a, .uk-offcanvas-bar .uk-iconnav > .uk-active > a {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-text-lead, .uk-section-primary:not(.uk-preserve-color) .uk-text-lead, .uk-section-secondary:not(.uk-preserve-color) .uk-text-lead, .uk-tile-primary:not(.uk-preserve-color) .uk-text-lead, .uk-tile-secondary:not(.uk-preserve-color) .uk-text-lead, .uk-card-primary.uk-card-body .uk-text-lead, .uk-card-primary > :not([class*=uk-card-media]) .uk-text-lead, .uk-card-secondary.uk-card-body .uk-text-lead, .uk-card-secondary > :not([class*=uk-card-media]) .uk-text-lead, .uk-overlay-primary .uk-text-lead, .uk-offcanvas-bar .uk-text-lead {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-text-meta, .uk-section-primary:not(.uk-preserve-color) .uk-text-meta, .uk-section-secondary:not(.uk-preserve-color) .uk-text-meta, .uk-tile-primary:not(.uk-preserve-color) .uk-text-meta, .uk-tile-secondary:not(.uk-preserve-color) .uk-text-meta, .uk-card-primary.uk-card-body .uk-text-meta, .uk-card-primary > :not([class*=uk-card-media]) .uk-text-meta, .uk-card-secondary.uk-card-body .uk-text-meta, .uk-card-secondary > :not([class*=uk-card-media]) .uk-text-meta, .uk-overlay-primary .uk-text-meta, .uk-offcanvas-bar .uk-text-meta {\n  color: rgba(255, 255, 255, 0.5);\n}\n.uk-light .uk-text-muted, .uk-section-primary:not(.uk-preserve-color) .uk-text-muted, .uk-section-secondary:not(.uk-preserve-color) .uk-text-muted, .uk-tile-primary:not(.uk-preserve-color) .uk-text-muted, .uk-tile-secondary:not(.uk-preserve-color) .uk-text-muted, .uk-card-primary.uk-card-body .uk-text-muted, .uk-card-primary > :not([class*=uk-card-media]) .uk-text-muted, .uk-card-secondary.uk-card-body .uk-text-muted, .uk-card-secondary > :not([class*=uk-card-media]) .uk-text-muted, .uk-overlay-primary .uk-text-muted, .uk-offcanvas-bar .uk-text-muted {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.uk-light .uk-text-emphasis, .uk-section-primary:not(.uk-preserve-color) .uk-text-emphasis, .uk-section-secondary:not(.uk-preserve-color) .uk-text-emphasis, .uk-tile-primary:not(.uk-preserve-color) .uk-text-emphasis, .uk-tile-secondary:not(.uk-preserve-color) .uk-text-emphasis, .uk-card-primary.uk-card-body .uk-text-emphasis, .uk-card-primary > :not([class*=uk-card-media]) .uk-text-emphasis, .uk-card-secondary.uk-card-body .uk-text-emphasis, .uk-card-secondary > :not([class*=uk-card-media]) .uk-text-emphasis, .uk-overlay-primary .uk-text-emphasis, .uk-offcanvas-bar .uk-text-emphasis {\n  color: #fff !important;\n}\n.uk-light .uk-text-primary, .uk-section-primary:not(.uk-preserve-color) .uk-text-primary, .uk-section-secondary:not(.uk-preserve-color) .uk-text-primary, .uk-tile-primary:not(.uk-preserve-color) .uk-text-primary, .uk-tile-secondary:not(.uk-preserve-color) .uk-text-primary, .uk-card-primary.uk-card-body .uk-text-primary, .uk-card-primary > :not([class*=uk-card-media]) .uk-text-primary, .uk-card-secondary.uk-card-body .uk-text-primary, .uk-card-secondary > :not([class*=uk-card-media]) .uk-text-primary, .uk-overlay-primary .uk-text-primary, .uk-offcanvas-bar .uk-text-primary {\n  color: #fff !important;\n}\n.uk-light .uk-text-secondary, .uk-section-primary:not(.uk-preserve-color) .uk-text-secondary, .uk-section-secondary:not(.uk-preserve-color) .uk-text-secondary, .uk-tile-primary:not(.uk-preserve-color) .uk-text-secondary, .uk-tile-secondary:not(.uk-preserve-color) .uk-text-secondary, .uk-card-primary.uk-card-body .uk-text-secondary, .uk-card-primary > :not([class*=uk-card-media]) .uk-text-secondary, .uk-card-secondary.uk-card-body .uk-text-secondary, .uk-card-secondary > :not([class*=uk-card-media]) .uk-text-secondary, .uk-overlay-primary .uk-text-secondary, .uk-offcanvas-bar .uk-text-secondary {\n  color: #fff !important;\n}\n.uk-light .uk-column-divider, .uk-section-primary:not(.uk-preserve-color) .uk-column-divider, .uk-section-secondary:not(.uk-preserve-color) .uk-column-divider, .uk-tile-primary:not(.uk-preserve-color) .uk-column-divider, .uk-tile-secondary:not(.uk-preserve-color) .uk-column-divider, .uk-card-primary.uk-card-body .uk-column-divider, .uk-card-primary > :not([class*=uk-card-media]) .uk-column-divider, .uk-card-secondary.uk-card-body .uk-column-divider, .uk-card-secondary > :not([class*=uk-card-media]) .uk-column-divider, .uk-overlay-primary .uk-column-divider, .uk-offcanvas-bar .uk-column-divider {\n  -moz-column-rule-color: rgba(255, 255, 255, 0.2);\n       column-rule-color: rgba(255, 255, 255, 0.2);\n}\n.uk-light .uk-logo, .uk-section-primary:not(.uk-preserve-color) .uk-logo, .uk-section-secondary:not(.uk-preserve-color) .uk-logo, .uk-tile-primary:not(.uk-preserve-color) .uk-logo, .uk-tile-secondary:not(.uk-preserve-color) .uk-logo, .uk-card-primary.uk-card-body .uk-logo, .uk-card-primary > :not([class*=uk-card-media]) .uk-logo, .uk-card-secondary.uk-card-body .uk-logo, .uk-card-secondary > :not([class*=uk-card-media]) .uk-logo, .uk-overlay-primary .uk-logo, .uk-offcanvas-bar .uk-logo {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-logo:hover, .uk-section-primary:not(.uk-preserve-color) .uk-logo:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-logo:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-logo:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-logo:hover, .uk-card-primary.uk-card-body .uk-logo:hover, .uk-card-primary > :not([class*=uk-card-media]) .uk-logo:hover, .uk-card-secondary.uk-card-body .uk-logo:hover, .uk-card-secondary > :not([class*=uk-card-media]) .uk-logo:hover, .uk-overlay-primary .uk-logo:hover, .uk-offcanvas-bar .uk-logo:hover,\n.uk-light .uk-logo:focus,\n.uk-section-primary:not(.uk-preserve-color) .uk-logo:focus,\n.uk-section-secondary:not(.uk-preserve-color) .uk-logo:focus,\n.uk-tile-primary:not(.uk-preserve-color) .uk-logo:focus,\n.uk-tile-secondary:not(.uk-preserve-color) .uk-logo:focus,\n.uk-card-primary.uk-card-body .uk-logo:focus,\n.uk-card-primary > :not([class*=uk-card-media]) .uk-logo:focus,\n.uk-card-secondary.uk-card-body .uk-logo:focus,\n.uk-card-secondary > :not([class*=uk-card-media]) .uk-logo:focus,\n.uk-overlay-primary .uk-logo:focus,\n.uk-offcanvas-bar .uk-logo:focus {\n  color: rgba(255, 255, 255, 0.7);\n}\n.uk-light .uk-logo > :not(.uk-logo-inverse):not(:only-of-type), .uk-section-primary:not(.uk-preserve-color) .uk-logo > :not(.uk-logo-inverse):not(:only-of-type), .uk-section-secondary:not(.uk-preserve-color) .uk-logo > :not(.uk-logo-inverse):not(:only-of-type), .uk-tile-primary:not(.uk-preserve-color) .uk-logo > :not(.uk-logo-inverse):not(:only-of-type), .uk-tile-secondary:not(.uk-preserve-color) .uk-logo > :not(.uk-logo-inverse):not(:only-of-type), .uk-card-primary.uk-card-body .uk-logo > :not(.uk-logo-inverse):not(:only-of-type), .uk-card-primary > :not([class*=uk-card-media]) .uk-logo > :not(.uk-logo-inverse):not(:only-of-type), .uk-card-secondary.uk-card-body .uk-logo > :not(.uk-logo-inverse):not(:only-of-type), .uk-card-secondary > :not([class*=uk-card-media]) .uk-logo > :not(.uk-logo-inverse):not(:only-of-type), .uk-overlay-primary .uk-logo > :not(.uk-logo-inverse):not(:only-of-type), .uk-offcanvas-bar .uk-logo > :not(.uk-logo-inverse):not(:only-of-type) {\n  display: none;\n}\n.uk-light .uk-logo-inverse, .uk-section-primary:not(.uk-preserve-color) .uk-logo-inverse, .uk-section-secondary:not(.uk-preserve-color) .uk-logo-inverse, .uk-tile-primary:not(.uk-preserve-color) .uk-logo-inverse, .uk-tile-secondary:not(.uk-preserve-color) .uk-logo-inverse, .uk-card-primary.uk-card-body .uk-logo-inverse, .uk-card-primary > :not([class*=uk-card-media]) .uk-logo-inverse, .uk-card-secondary.uk-card-body .uk-logo-inverse, .uk-card-secondary > :not([class*=uk-card-media]) .uk-logo-inverse, .uk-overlay-primary .uk-logo-inverse, .uk-offcanvas-bar .uk-logo-inverse {\n  display: inline;\n}\n\n/* ========================================================================\n   Component: Print\n ========================================================================== */\n@media print {\n  *,\n*::before,\n*::after {\n    background: transparent !important;\n    color: black !important;\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\na:visited {\n    text-decoration: underline;\n  }\n\n  pre,\nblockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\nimg {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  @page {\n    margin: 0.5cm;\n  }\n  p,\nh2,\nh3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\nh3 {\n    page-break-after: avoid;\n  }\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/uikit/dist/js/uikit.js":
/*!*********************************************!*\
  !*** ./node_modules/uikit/dist/js/uikit.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {/*! UIkit 3.2.0 | http://www.getuikit.com | (c) 2014 - 2019 YOOtheme | MIT License */

(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, function () { 'use strict';

    var objPrototype = Object.prototype;
    var hasOwnProperty = objPrototype.hasOwnProperty;

    function hasOwn(obj, key) {
        return hasOwnProperty.call(obj, key);
    }

    var hyphenateCache = {};
    var hyphenateRe = /([a-z\d])([A-Z])/g;

    function hyphenate(str) {

        if (!(str in hyphenateCache)) {
            hyphenateCache[str] = str
                .replace(hyphenateRe, '$1-$2')
                .toLowerCase();
        }

        return hyphenateCache[str];
    }

    var camelizeRe = /-(\w)/g;

    function camelize(str) {
        return str.replace(camelizeRe, toUpper);
    }

    function toUpper(_, c) {
        return c ? c.toUpperCase() : '';
    }

    function ucfirst(str) {
        return str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : '';
    }

    var strPrototype = String.prototype;
    var startsWithFn = strPrototype.startsWith || function (search) { return this.lastIndexOf(search, 0) === 0; };

    function startsWith(str, search) {
        return startsWithFn.call(str, search);
    }

    var endsWithFn = strPrototype.endsWith || function (search) { return this.substr(-search.length) === search; };

    function endsWith(str, search) {
        return endsWithFn.call(str, search);
    }

    var arrPrototype = Array.prototype;

    var includesFn = function (search, i) { return ~this.indexOf(search, i); };
    var includesStr = strPrototype.includes || includesFn;
    var includesArray = arrPrototype.includes || includesFn;

    function includes(obj, search) {
        return obj && (isString(obj) ? includesStr : includesArray).call(obj, search);
    }

    var findIndexFn = arrPrototype.findIndex || function (predicate) {
        var arguments$1 = arguments;

        for (var i = 0; i < this.length; i++) {
            if (predicate.call(arguments$1[1], this[i], i, this)) {
                return i;
            }
        }
        return -1;
    };

    function findIndex(array, predicate) {
        return findIndexFn.call(array, predicate);
    }

    var isArray = Array.isArray;

    function isFunction(obj) {
        return typeof obj === 'function';
    }

    function isObject(obj) {
        return obj !== null && typeof obj === 'object';
    }

    function isPlainObject(obj) {
        return isObject(obj) && Object.getPrototypeOf(obj) === objPrototype;
    }

    function isWindow(obj) {
        return isObject(obj) && obj === obj.window;
    }

    function isDocument(obj) {
        return isObject(obj) && obj.nodeType === 9;
    }

    function isJQuery(obj) {
        return isObject(obj) && !!obj.jquery;
    }

    function isNode(obj) {
        return obj instanceof Node || isObject(obj) && obj.nodeType >= 1;
    }

    var toString = objPrototype.toString;
    function isNodeCollection(obj) {
        return toString.call(obj).match(/^\[object (NodeList|HTMLCollection)\]$/);
    }

    function isBoolean(value) {
        return typeof value === 'boolean';
    }

    function isString(value) {
        return typeof value === 'string';
    }

    function isNumber(value) {
        return typeof value === 'number';
    }

    function isNumeric(value) {
        return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
    }

    function isEmpty(obj) {
        return !(isArray(obj)
            ? obj.length
            : isObject(obj)
                ? Object.keys(obj).length
                : false
        );
    }

    function isUndefined(value) {
        return value === void 0;
    }

    function toBoolean(value) {
        return isBoolean(value)
            ? value
            : value === 'true' || value === '1' || value === ''
                ? true
                : value === 'false' || value === '0'
                    ? false
                    : value;
    }

    function toNumber(value) {
        var number = Number(value);
        return !isNaN(number) ? number : false;
    }

    function toFloat(value) {
        return parseFloat(value) || 0;
    }

    function toNode(element) {
        return isNode(element) || isWindow(element) || isDocument(element)
            ? element
            : isNodeCollection(element) || isJQuery(element)
                ? element[0]
                : isArray(element)
                    ? toNode(element[0])
                    : null;
    }

    function toNodes(element) {
        return isNode(element)
            ? [element]
            : isNodeCollection(element)
                ? arrPrototype.slice.call(element)
                : isArray(element)
                    ? element.map(toNode).filter(Boolean)
                    : isJQuery(element)
                        ? element.toArray()
                        : [];
    }

    function toList(value) {
        return isArray(value)
            ? value
            : isString(value)
                ? value.split(/,(?![^(]*\))/).map(function (value) { return isNumeric(value)
                    ? toNumber(value)
                    : toBoolean(value.trim()); })
                : [value];
    }

    function toMs(time) {
        return !time
            ? 0
            : endsWith(time, 'ms')
                ? toFloat(time)
                : toFloat(time) * 1000;
    }

    function isEqual(value, other) {
        return value === other
            || isObject(value)
            && isObject(other)
            && Object.keys(value).length === Object.keys(other).length
            && each(value, function (val, key) { return val === other[key]; });
    }

    function swap(value, a, b) {
        return value.replace(new RegExp((a + "|" + b), 'mg'), function (match) {
            return match === a ? b : a;
        });
    }

    var assign = Object.assign || function (target) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        target = Object(target);
        for (var i = 0; i < args.length; i++) {
            var source = args[i];
            if (source !== null) {
                for (var key in source) {
                    if (hasOwn(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };

    function last(array) {
        return array[array.length - 1];
    }

    function each(obj, cb) {
        for (var key in obj) {
            if (false === cb(obj[key], key)) {
                return false;
            }
        }
        return true;
    }

    function sortBy(array, prop) {
        return array.sort(function (ref, ref$1) {
                var propA = ref[prop]; if ( propA === void 0 ) propA = 0;
                var propB = ref$1[prop]; if ( propB === void 0 ) propB = 0;

                return propA > propB
                ? 1
                : propB > propA
                    ? -1
                    : 0;
        }
        );
    }

    function uniqueBy(array, prop) {
        var seen = new Set();
        return array.filter(function (ref) {
            var check = ref[prop];

            return seen.has(check)
            ? false
            : seen.add(check) || true;
        } // IE 11 does not return the Set object
        );
    }

    function clamp(number, min, max) {
        if ( min === void 0 ) min = 0;
        if ( max === void 0 ) max = 1;

        return Math.min(Math.max(toNumber(number) || 0, min), max);
    }

    function noop() {}

    function intersectRect(r1, r2) {
        return r1.left < r2.right &&
            r1.right > r2.left &&
            r1.top < r2.bottom &&
            r1.bottom > r2.top;
    }

    function pointInRect(point, rect) {
        return point.x <= rect.right &&
            point.x >= rect.left &&
            point.y <= rect.bottom &&
            point.y >= rect.top;
    }

    var Dimensions = {

        ratio: function(dimensions, prop, value) {
            var obj;


            var aProp = prop === 'width' ? 'height' : 'width';

            return ( obj = {}, obj[aProp] = dimensions[prop] ? Math.round(value * dimensions[aProp] / dimensions[prop]) : dimensions[aProp], obj[prop] = value, obj );
        },

        contain: function(dimensions, maxDimensions) {
            var this$1 = this;

            dimensions = assign({}, dimensions);

            each(dimensions, function (_, prop) { return dimensions = dimensions[prop] > maxDimensions[prop]
                ? this$1.ratio(dimensions, prop, maxDimensions[prop])
                : dimensions; }
            );

            return dimensions;
        },

        cover: function(dimensions, maxDimensions) {
            var this$1 = this;

            dimensions = this.contain(dimensions, maxDimensions);

            each(dimensions, function (_, prop) { return dimensions = dimensions[prop] < maxDimensions[prop]
                ? this$1.ratio(dimensions, prop, maxDimensions[prop])
                : dimensions; }
            );

            return dimensions;
        }

    };

    function attr(element, name, value) {

        if (isObject(name)) {
            for (var key in name) {
                attr(element, key, name[key]);
            }
            return;
        }

        if (isUndefined(value)) {
            element = toNode(element);
            return element && element.getAttribute(name);
        } else {
            toNodes(element).forEach(function (element) {

                if (isFunction(value)) {
                    value = value.call(element, attr(element, name));
                }

                if (value === null) {
                    removeAttr(element, name);
                } else {
                    element.setAttribute(name, value);
                }
            });
        }

    }

    function hasAttr(element, name) {
        return toNodes(element).some(function (element) { return element.hasAttribute(name); });
    }

    function removeAttr(element, name) {
        element = toNodes(element);
        name.split(' ').forEach(function (name) { return element.forEach(function (element) { return element.hasAttribute(name) && element.removeAttribute(name); }
            ); }
        );
    }

    function data(element, attribute) {
        for (var i = 0, attrs = [attribute, ("data-" + attribute)]; i < attrs.length; i++) {
            if (hasAttr(element, attrs[i])) {
                return attr(element, attrs[i]);
            }
        }
    }

    /* global DocumentTouch */

    var isIE = /msie|trident/i.test(window.navigator.userAgent);
    var isRtl = attr(document.documentElement, 'dir') === 'rtl';

    var hasTouchEvents = 'ontouchstart' in window;
    var hasPointerEvents = window.PointerEvent;
    var hasTouch = hasTouchEvents
        || window.DocumentTouch && document instanceof DocumentTouch
        || navigator.maxTouchPoints; // IE >=11

    var pointerDown = hasPointerEvents ? 'pointerdown' : hasTouchEvents ? 'touchstart' : 'mousedown';
    var pointerMove = hasPointerEvents ? 'pointermove' : hasTouchEvents ? 'touchmove' : 'mousemove';
    var pointerUp = hasPointerEvents ? 'pointerup' : hasTouchEvents ? 'touchend' : 'mouseup';
    var pointerEnter = hasPointerEvents ? 'pointerenter' : hasTouchEvents ? '' : 'mouseenter';
    var pointerLeave = hasPointerEvents ? 'pointerleave' : hasTouchEvents ? '' : 'mouseleave';
    var pointerCancel = hasPointerEvents ? 'pointercancel' : 'touchcancel';

    function query(selector, context) {
        return toNode(selector) || find(selector, getContext(selector, context));
    }

    function queryAll(selector, context) {
        var nodes = toNodes(selector);
        return nodes.length && nodes || findAll(selector, getContext(selector, context));
    }

    function getContext(selector, context) {
        if ( context === void 0 ) context = document;

        return isContextSelector(selector) || isDocument(context)
            ? context
            : context.ownerDocument;
    }

    function find(selector, context) {
        return toNode(_query(selector, context, 'querySelector'));
    }

    function findAll(selector, context) {
        return toNodes(_query(selector, context, 'querySelectorAll'));
    }

    function _query(selector, context, queryFn) {
        if ( context === void 0 ) context = document;


        if (!selector || !isString(selector)) {
            return null;
        }

        selector = selector.replace(contextSanitizeRe, '$1 *');

        var removes;

        if (isContextSelector(selector)) {

            removes = [];

            selector = splitSelector(selector).map(function (selector, i) {

                var ctx = context;

                if (selector[0] === '!') {

                    var selectors = selector.substr(1).trim().split(' ');
                    ctx = closest(context.parentNode, selectors[0]);
                    selector = selectors.slice(1).join(' ').trim();

                }

                if (selector[0] === '-') {

                    var selectors$1 = selector.substr(1).trim().split(' ');
                    var prev = (ctx || context).previousElementSibling;
                    ctx = matches(prev, selector.substr(1)) ? prev : null;
                    selector = selectors$1.slice(1).join(' ');

                }

                if (!ctx) {
                    return null;
                }

                if (!ctx.id) {
                    ctx.id = "uk-" + (Date.now()) + i;
                    removes.push(function () { return removeAttr(ctx, 'id'); });
                }

                return ("#" + (escape(ctx.id)) + " " + selector);

            }).filter(Boolean).join(',');

            context = document;

        }

        try {

            return context[queryFn](selector);

        } catch (e) {

            return null;

        } finally {

            removes && removes.forEach(function (remove) { return remove(); });

        }

    }

    var contextSelectorRe = /(^|[^\\],)\s*[!>+~-]/;
    var contextSanitizeRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

    function isContextSelector(selector) {
        return isString(selector) && selector.match(contextSelectorRe);
    }

    var selectorRe = /.*?[^\\](?:,|$)/g;

    function splitSelector(selector) {
        return selector.match(selectorRe).map(function (selector) { return selector.replace(/,$/, '').trim(); });
    }

    var elProto = Element.prototype;
    var matchesFn = elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector;

    function matches(element, selector) {
        return toNodes(element).some(function (element) { return matchesFn.call(element, selector); });
    }

    var closestFn = elProto.closest || function (selector) {
        var ancestor = this;

        do {

            if (matches(ancestor, selector)) {
                return ancestor;
            }

            ancestor = ancestor.parentNode;

        } while (ancestor && ancestor.nodeType === 1);
    };

    function closest(element, selector) {

        if (startsWith(selector, '>')) {
            selector = selector.slice(1);
        }

        return isNode(element)
            ? closestFn.call(element, selector)
            : toNodes(element).map(function (element) { return closest(element, selector); }).filter(Boolean);
    }

    function parents(element, selector) {
        var elements = [];
        element = toNode(element);

        while ((element = element.parentNode) && element.nodeType === 1) {
            if (matches(element, selector)) {
                elements.push(element);
            }
        }

        return elements;
    }

    var escapeFn = window.CSS && CSS.escape || function (css) { return css.replace(/([^\x7f-\uFFFF\w-])/g, function (match) { return ("\\" + match); }); };
    function escape(css) {
        return isString(css) ? escapeFn.call(null, css) : '';
    }

    var voidElements = {
        area: true,
        base: true,
        br: true,
        col: true,
        embed: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        menuitem: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
    };
    function isVoidElement(element) {
        return toNodes(element).some(function (element) { return voidElements[element.tagName.toLowerCase()]; });
    }

    function isVisible(element) {
        return toNodes(element).some(function (element) { return element.offsetWidth || element.offsetHeight || element.getClientRects().length; });
    }

    var selInput = 'input,select,textarea,button';
    function isInput(element) {
        return toNodes(element).some(function (element) { return matches(element, selInput); });
    }

    function filter(element, selector) {
        return toNodes(element).filter(function (element) { return matches(element, selector); });
    }

    function within(element, selector) {
        return !isString(selector)
            ? element === selector || (isDocument(selector)
                ? selector.documentElement
                : toNode(selector)).contains(toNode(element)) // IE 11 document does not implement contains
            : matches(element, selector) || closest(element, selector);
    }

    function on() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];


        var ref = getArgs(args);
        var targets = ref[0];
        var type = ref[1];
        var selector = ref[2];
        var listener = ref[3];
        var useCapture = ref[4];

        targets = toEventTargets(targets);

        if (listener.length > 1) {
            listener = detail(listener);
        }

        if (selector) {
            listener = delegate(targets, selector, listener);
        }

        if (useCapture && useCapture.self) {
            listener = selfFilter(listener);
        }

        useCapture = useCaptureFilter(useCapture);

        type.split(' ').forEach(function (type) { return targets.forEach(function (target) { return target.addEventListener(type, listener, useCapture); }
            ); }
        );
        return function () { return off(targets, type, listener, useCapture); };
    }

    function off(targets, type, listener, useCapture) {
        if ( useCapture === void 0 ) useCapture = false;

        useCapture = useCaptureFilter(useCapture);
        targets = toEventTargets(targets);
        type.split(' ').forEach(function (type) { return targets.forEach(function (target) { return target.removeEventListener(type, listener, useCapture); }
            ); }
        );
    }

    function once() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];


        var ref = getArgs(args);
        var element = ref[0];
        var type = ref[1];
        var selector = ref[2];
        var listener = ref[3];
        var useCapture = ref[4];
        var condition = ref[5];
        var off = on(element, type, selector, function (e) {
            var result = !condition || condition(e);
            if (result) {
                off();
                listener(e, result);
            }
        }, useCapture);

        return off;
    }

    function trigger(targets, event, detail) {
        return toEventTargets(targets).reduce(function (notCanceled, target) { return notCanceled && target.dispatchEvent(createEvent(event, true, true, detail)); }
            , true);
    }

    function createEvent(e, bubbles, cancelable, detail) {
        if ( bubbles === void 0 ) bubbles = true;
        if ( cancelable === void 0 ) cancelable = false;

        if (isString(e)) {
            var event = document.createEvent('CustomEvent'); // IE 11
            event.initCustomEvent(e, bubbles, cancelable, detail);
            e = event;
        }

        return e;
    }

    function getArgs(args) {
        if (isFunction(args[2])) {
            args.splice(2, 0, false);
        }
        return args;
    }

    function delegate(delegates, selector, listener) {
        var this$1 = this;

        return function (e) {

            delegates.forEach(function (delegate) {

                var current = selector[0] === '>'
                    ? findAll(selector, delegate).reverse().filter(function (element) { return within(e.target, element); })[0]
                    : closest(e.target, selector);

                if (current) {
                    e.delegate = delegate;
                    e.current = current;

                    listener.call(this$1, e);
                }

            });

        };
    }

    function detail(listener) {
        return function (e) { return isArray(e.detail) ? listener.apply(void 0, [e].concat(e.detail)) : listener(e); };
    }

    function selfFilter(listener) {
        return function (e) {
            if (e.target === e.currentTarget || e.target === e.current) {
                return listener.call(null, e);
            }
        };
    }

    function useCaptureFilter(options) {
        return options && isIE && !isBoolean(options)
            ? !!options.capture
            : options;
    }

    function isEventTarget(target) {
        return target && 'addEventListener' in target;
    }

    function toEventTarget(target) {
        return isEventTarget(target) ? target : toNode(target);
    }

    function toEventTargets(target) {
        return isArray(target)
                ? target.map(toEventTarget).filter(Boolean)
                : isString(target)
                    ? findAll(target)
                    : isEventTarget(target)
                        ? [target]
                        : toNodes(target);
    }

    function isTouch(e) {
        return e.pointerType === 'touch' || !!e.touches;
    }

    function getEventPos(e, prop) {
        if ( prop === void 0 ) prop = 'client';

        var touches = e.touches;
        var changedTouches = e.changedTouches;
        var ref = touches && touches[0] || changedTouches && changedTouches[0] || e;
        var x = ref[(prop + "X")];
        var y = ref[(prop + "Y")];

        return {x: x, y: y};
    }

    /* global setImmediate */

    var Promise = 'Promise' in window ? window.Promise : PromiseFn;

    var Deferred = function() {
        var this$1 = this;

        this.promise = new Promise(function (resolve, reject) {
            this$1.reject = reject;
            this$1.resolve = resolve;
        });
    };

    /**
     * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
     */

    var RESOLVED = 0;
    var REJECTED = 1;
    var PENDING = 2;

    var async = 'setImmediate' in window ? setImmediate : setTimeout;

    function PromiseFn(executor) {

        this.state = PENDING;
        this.value = undefined;
        this.deferred = [];

        var promise = this;

        try {
            executor(
                function (x) {
                    promise.resolve(x);
                },
                function (r) {
                    promise.reject(r);
                }
            );
        } catch (e) {
            promise.reject(e);
        }
    }

    PromiseFn.reject = function (r) {
        return new PromiseFn(function (resolve, reject) {
            reject(r);
        });
    };

    PromiseFn.resolve = function (x) {
        return new PromiseFn(function (resolve, reject) {
            resolve(x);
        });
    };

    PromiseFn.all = function all(iterable) {
        return new PromiseFn(function (resolve, reject) {
            var result = [];
            var count = 0;

            if (iterable.length === 0) {
                resolve(result);
            }

            function resolver(i) {
                return function (x) {
                    result[i] = x;
                    count += 1;

                    if (count === iterable.length) {
                        resolve(result);
                    }
                };
            }

            for (var i = 0; i < iterable.length; i += 1) {
                PromiseFn.resolve(iterable[i]).then(resolver(i), reject);
            }
        });
    };

    PromiseFn.race = function race(iterable) {
        return new PromiseFn(function (resolve, reject) {
            for (var i = 0; i < iterable.length; i += 1) {
                PromiseFn.resolve(iterable[i]).then(resolve, reject);
            }
        });
    };

    var p = PromiseFn.prototype;

    p.resolve = function resolve(x) {
        var promise = this;

        if (promise.state === PENDING) {
            if (x === promise) {
                throw new TypeError('Promise settled with itself.');
            }

            var called = false;

            try {
                var then = x && x.then;

                if (x !== null && isObject(x) && isFunction(then)) {
                    then.call(
                        x,
                        function (x) {
                            if (!called) {
                                promise.resolve(x);
                            }
                            called = true;
                        },
                        function (r) {
                            if (!called) {
                                promise.reject(r);
                            }
                            called = true;
                        }
                    );
                    return;
                }
            } catch (e) {
                if (!called) {
                    promise.reject(e);
                }
                return;
            }

            promise.state = RESOLVED;
            promise.value = x;
            promise.notify();
        }
    };

    p.reject = function reject(reason) {
        var promise = this;

        if (promise.state === PENDING) {
            if (reason === promise) {
                throw new TypeError('Promise settled with itself.');
            }

            promise.state = REJECTED;
            promise.value = reason;
            promise.notify();
        }
    };

    p.notify = function notify() {
        var this$1 = this;

        async(function () {
            if (this$1.state !== PENDING) {
                while (this$1.deferred.length) {
                    var ref = this$1.deferred.shift();
                    var onResolved = ref[0];
                    var onRejected = ref[1];
                    var resolve = ref[2];
                    var reject = ref[3];

                    try {
                        if (this$1.state === RESOLVED) {
                            if (isFunction(onResolved)) {
                                resolve(onResolved.call(undefined, this$1.value));
                            } else {
                                resolve(this$1.value);
                            }
                        } else if (this$1.state === REJECTED) {
                            if (isFunction(onRejected)) {
                                resolve(onRejected.call(undefined, this$1.value));
                            } else {
                                reject(this$1.value);
                            }
                        }
                    } catch (e) {
                        reject(e);
                    }
                }
            }
        });
    };

    p.then = function then(onResolved, onRejected) {
        var this$1 = this;

        return new PromiseFn(function (resolve, reject) {
            this$1.deferred.push([onResolved, onRejected, resolve, reject]);
            this$1.notify();
        });
    };

    p.catch = function (onRejected) {
        return this.then(undefined, onRejected);
    };

    function ajax(url, options) {
        return new Promise(function (resolve, reject) {

            var env = assign({
                data: null,
                method: 'GET',
                headers: {},
                xhr: new XMLHttpRequest(),
                beforeSend: noop,
                responseType: ''
            }, options);

            env.beforeSend(env);

            var xhr = env.xhr;

            for (var prop in env) {
                if (prop in xhr) {
                    try {

                        xhr[prop] = env[prop];

                    } catch (e) {}
                }
            }

            xhr.open(env.method.toUpperCase(), url);

            for (var header in env.headers) {
                xhr.setRequestHeader(header, env.headers[header]);
            }

            on(xhr, 'load', function () {

                if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    resolve(xhr);
                } else {
                    reject(assign(Error(xhr.statusText), {
                        xhr: xhr,
                        status: xhr.status
                    }));
                }

            });

            on(xhr, 'error', function () { return reject(assign(Error('Network Error'), {xhr: xhr})); });
            on(xhr, 'timeout', function () { return reject(assign(Error('Network Timeout'), {xhr: xhr})); });

            xhr.send(env.data);
        });
    }

    function getImage(src, srcset, sizes) {

        return new Promise(function (resolve, reject) {
            var img = new Image();

            img.onerror = reject;
            img.onload = function () { return resolve(img); };

            sizes && (img.sizes = sizes);
            srcset && (img.srcset = srcset);
            img.src = src;
        });

    }

    function ready(fn) {

        if (document.readyState !== 'loading') {
            fn();
            return;
        }

        var unbind = on(document, 'DOMContentLoaded', function () {
            unbind();
            fn();
        });
    }

    function index(element, ref) {
        return ref
            ? toNodes(element).indexOf(toNode(ref))
            : toNodes((element = toNode(element)) && element.parentNode.children).indexOf(element);
    }

    function getIndex(i, elements, current, finite) {
        if ( current === void 0 ) current = 0;
        if ( finite === void 0 ) finite = false;


        elements = toNodes(elements);

        var length = elements.length;

        i = isNumeric(i)
            ? toNumber(i)
            : i === 'next'
                ? current + 1
                : i === 'previous'
                    ? current - 1
                    : index(elements, i);

        if (finite) {
            return clamp(i, 0, length - 1);
        }

        i %= length;

        return i < 0 ? i + length : i;
    }

    function empty(element) {
        element = $(element);
        element.innerHTML = '';
        return element;
    }

    function html(parent, html) {
        parent = $(parent);
        return isUndefined(html)
            ? parent.innerHTML
            : append(parent.hasChildNodes() ? empty(parent) : parent, html);
    }

    function prepend(parent, element) {

        parent = $(parent);

        if (!parent.hasChildNodes()) {
            return append(parent, element);
        } else {
            return insertNodes(element, function (element) { return parent.insertBefore(element, parent.firstChild); });
        }
    }

    function append(parent, element) {
        parent = $(parent);
        return insertNodes(element, function (element) { return parent.appendChild(element); });
    }

    function before(ref, element) {
        ref = $(ref);
        return insertNodes(element, function (element) { return ref.parentNode.insertBefore(element, ref); });
    }

    function after(ref, element) {
        ref = $(ref);
        return insertNodes(element, function (element) { return ref.nextSibling
            ? before(ref.nextSibling, element)
            : append(ref.parentNode, element); }
        );
    }

    function insertNodes(element, fn) {
        element = isString(element) ? fragment(element) : element;
        return element
            ? 'length' in element
                ? toNodes(element).map(fn)
                : fn(element)
            : null;
    }

    function remove(element) {
        toNodes(element).map(function (element) { return element.parentNode && element.parentNode.removeChild(element); });
    }

    function wrapAll(element, structure) {

        structure = toNode(before(element, structure));

        while (structure.firstChild) {
            structure = structure.firstChild;
        }

        append(structure, element);

        return structure;
    }

    function wrapInner(element, structure) {
        return toNodes(toNodes(element).map(function (element) { return element.hasChildNodes ? wrapAll(toNodes(element.childNodes), structure) : append(element, structure); }
        ));
    }

    function unwrap(element) {
        toNodes(element)
            .map(function (element) { return element.parentNode; })
            .filter(function (value, index, self) { return self.indexOf(value) === index; })
            .forEach(function (parent) {
                before(parent, parent.childNodes);
                remove(parent);
            });
    }

    var fragmentRe = /^\s*<(\w+|!)[^>]*>/;
    var singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    function fragment(html) {

        var matches = singleTagRe.exec(html);
        if (matches) {
            return document.createElement(matches[1]);
        }

        var container = document.createElement('div');
        if (fragmentRe.test(html)) {
            container.insertAdjacentHTML('beforeend', html.trim());
        } else {
            container.textContent = html;
        }

        return container.childNodes.length > 1 ? toNodes(container.childNodes) : container.firstChild;

    }

    function apply(node, fn) {

        if (!node || node.nodeType !== 1) {
            return;
        }

        fn(node);
        node = node.firstElementChild;
        while (node) {
            apply(node, fn);
            node = node.nextElementSibling;
        }
    }

    function $(selector, context) {
        return !isString(selector)
            ? toNode(selector)
            : isHtml(selector)
                ? toNode(fragment(selector))
                : find(selector, context);
    }

    function $$(selector, context) {
        return !isString(selector)
            ? toNodes(selector)
            : isHtml(selector)
                ? toNodes(fragment(selector))
                : findAll(selector, context);
    }

    function isHtml(str) {
        return str[0] === '<' || str.match(/^\s*</);
    }

    function addClass(element) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        apply$1(element, args, 'add');
    }

    function removeClass(element) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        apply$1(element, args, 'remove');
    }

    function removeClasses(element, cls) {
        attr(element, 'class', function (value) { return (value || '').replace(new RegExp(("\\b" + cls + "\\b"), 'g'), ''); });
    }

    function replaceClass(element) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        args[0] && removeClass(element, args[0]);
        args[1] && addClass(element, args[1]);
    }

    function hasClass(element, cls) {
        return cls && toNodes(element).some(function (element) { return element.classList.contains(cls.split(' ')[0]); });
    }

    function toggleClass(element) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];


        if (!args.length) {
            return;
        }

        args = getArgs$1(args);

        var force = !isString(last(args)) ? args.pop() : []; // in iOS 9.3 force === undefined evaluates to false

        args = args.filter(Boolean);

        toNodes(element).forEach(function (ref) {
            var classList = ref.classList;

            for (var i = 0; i < args.length; i++) {
                supports.Force
                    ? classList.toggle.apply(classList, [args[i]].concat(force))
                    : (classList[(!isUndefined(force) ? force : !classList.contains(args[i])) ? 'add' : 'remove'](args[i]));
            }
        });

    }

    function apply$1(element, args, fn) {
        args = getArgs$1(args).filter(Boolean);

        args.length && toNodes(element).forEach(function (ref) {
            var classList = ref.classList;

            supports.Multiple
                ? classList[fn].apply(classList, args)
                : args.forEach(function (cls) { return classList[fn](cls); });
        });
    }

    function getArgs$1(args) {
        return args.reduce(function (args, arg) { return args.concat.call(args, isString(arg) && includes(arg, ' ') ? arg.trim().split(' ') : arg); }
            , []);
    }

    // IE 11
    var supports = {

        get Multiple() {
            return this.get('_multiple');
        },

        get Force() {
            return this.get('_force');
        },

        get: function(key) {

            if (!hasOwn(this, key)) {
                var ref = document.createElement('_');
                var classList = ref.classList;
                classList.add('a', 'b');
                classList.toggle('c', false);
                this._multiple = classList.contains('b');
                this._force = !classList.contains('c');
            }

            return this[key];
        }

    };

    var cssNumber = {
        'animation-iteration-count': true,
        'column-count': true,
        'fill-opacity': true,
        'flex-grow': true,
        'flex-shrink': true,
        'font-weight': true,
        'line-height': true,
        'opacity': true,
        'order': true,
        'orphans': true,
        'stroke-dasharray': true,
        'stroke-dashoffset': true,
        'widows': true,
        'z-index': true,
        'zoom': true
    };

    function css(element, property, value) {

        return toNodes(element).map(function (element) {

            if (isString(property)) {

                property = propName(property);

                if (isUndefined(value)) {
                    return getStyle(element, property);
                } else if (!value && !isNumber(value)) {
                    element.style.removeProperty(property);
                } else {
                    element.style[property] = isNumeric(value) && !cssNumber[property] ? (value + "px") : value;
                }

            } else if (isArray(property)) {

                var styles = getStyles(element);

                return property.reduce(function (props, property) {
                    props[property] = styles[propName(property)];
                    return props;
                }, {});

            } else if (isObject(property)) {
                each(property, function (value, property) { return css(element, property, value); });
            }

            return element;

        })[0];

    }

    function getStyles(element, pseudoElt) {
        element = toNode(element);
        return element.ownerDocument.defaultView.getComputedStyle(element, pseudoElt);
    }

    function getStyle(element, property, pseudoElt) {
        return getStyles(element, pseudoElt)[property];
    }

    var vars = {};

    function getCssVar(name) {

        var docEl = document.documentElement;

        if (!isIE) {
            return getStyles(docEl).getPropertyValue(("--uk-" + name));
        }

        if (!(name in vars)) {

            /* usage in css: .uk-name:before { content:"xyz" } */

            var element = append(docEl, document.createElement('div'));

            addClass(element, ("uk-" + name));

            vars[name] = getStyle(element, 'content', ':before').replace(/^["'](.*)["']$/, '$1');

            remove(element);

        }

        return vars[name];

    }

    var cssProps = {};

    function propName(name) {

        var ret = cssProps[name];
        if (!ret) {
            ret = cssProps[name] = vendorPropName(name) || name;
        }
        return ret;
    }

    var cssPrefixes = ['webkit', 'moz', 'ms'];

    function vendorPropName(name) {

        name = hyphenate(name);

        var ref = document.documentElement;
        var style = ref.style;

        if (name in style) {
            return name;
        }

        var i = cssPrefixes.length, prefixedName;

        while (i--) {
            prefixedName = "-" + (cssPrefixes[i]) + "-" + name;
            if (prefixedName in style) {
                return prefixedName;
            }
        }
    }

    function transition(element, props, duration, timing) {
        if ( duration === void 0 ) duration = 400;
        if ( timing === void 0 ) timing = 'linear';


        return Promise.all(toNodes(element).map(function (element) { return new Promise(function (resolve, reject) {

                for (var name in props) {
                    var value = css(element, name);
                    if (value === '') {
                        css(element, name, value);
                    }
                }

                var timer = setTimeout(function () { return trigger(element, 'transitionend'); }, duration);

                once(element, 'transitionend transitioncanceled', function (ref) {
                    var type = ref.type;

                    clearTimeout(timer);
                    removeClass(element, 'uk-transition');
                    css(element, {
                        'transition-property': '',
                        'transition-duration': '',
                        'transition-timing-function': ''
                    });
                    type === 'transitioncanceled' ? reject() : resolve();
                }, {self: true});

                addClass(element, 'uk-transition');
                css(element, assign({
                    'transition-property': Object.keys(props).map(propName).join(','),
                    'transition-duration': (duration + "ms"),
                    'transition-timing-function': timing
                }, props));

            }); }
        ));

    }

    var Transition = {

        start: transition,

        stop: function(element) {
            trigger(element, 'transitionend');
            return Promise.resolve();
        },

        cancel: function(element) {
            trigger(element, 'transitioncanceled');
        },

        inProgress: function(element) {
            return hasClass(element, 'uk-transition');
        }

    };

    var animationPrefix = 'uk-animation-';
    var clsCancelAnimation = 'uk-cancel-animation';

    function animate(element, animation, duration, origin, out) {
        var arguments$1 = arguments;
        if ( duration === void 0 ) duration = 200;


        return Promise.all(toNodes(element).map(function (element) { return new Promise(function (resolve, reject) {

                if (hasClass(element, clsCancelAnimation)) {
                    requestAnimationFrame(function () { return Promise.resolve().then(function () { return animate.apply(void 0, arguments$1).then(resolve, reject); }
                        ); }
                    );
                    return;
                }

                var cls = animation + " " + animationPrefix + (out ? 'leave' : 'enter');

                if (startsWith(animation, animationPrefix)) {

                    if (origin) {
                        cls += " uk-transform-origin-" + origin;
                    }

                    if (out) {
                        cls += " " + animationPrefix + "reverse";
                    }

                }

                reset();

                once(element, 'animationend animationcancel', function (ref) {
                    var type = ref.type;


                    var hasReset = false;

                    if (type === 'animationcancel') {
                        reject();
                        reset();
                    } else {
                        resolve();
                        Promise.resolve().then(function () {
                            hasReset = true;
                            reset();
                        });
                    }

                    requestAnimationFrame(function () {
                        if (!hasReset) {
                            addClass(element, clsCancelAnimation);

                            requestAnimationFrame(function () { return removeClass(element, clsCancelAnimation); });
                        }
                    });

                }, {self: true});

                css(element, 'animationDuration', (duration + "ms"));
                addClass(element, cls);

                function reset() {
                    css(element, 'animationDuration', '');
                    removeClasses(element, (animationPrefix + "\\S*"));
                }

            }); }
        ));

    }

    var inProgress = new RegExp((animationPrefix + "(enter|leave)"));
    var Animation = {

        in: function(element, animation, duration, origin) {
            return animate(element, animation, duration, origin, false);
        },

        out: function(element, animation, duration, origin) {
            return animate(element, animation, duration, origin, true);
        },

        inProgress: function(element) {
            return inProgress.test(attr(element, 'class'));
        },

        cancel: function(element) {
            trigger(element, 'animationcancel');
        }

    };

    var dirs = {
        width: ['x', 'left', 'right'],
        height: ['y', 'top', 'bottom']
    };

    function positionAt(element, target, elAttach, targetAttach, elOffset, targetOffset, flip, boundary) {

        elAttach = getPos(elAttach);
        targetAttach = getPos(targetAttach);

        var flipped = {element: elAttach, target: targetAttach};

        if (!element || !target) {
            return flipped;
        }

        var dim = getDimensions(element);
        var targetDim = getDimensions(target);
        var position = targetDim;

        moveTo(position, elAttach, dim, -1);
        moveTo(position, targetAttach, targetDim, 1);

        elOffset = getOffsets(elOffset, dim.width, dim.height);
        targetOffset = getOffsets(targetOffset, targetDim.width, targetDim.height);

        elOffset['x'] += targetOffset['x'];
        elOffset['y'] += targetOffset['y'];

        position.left += elOffset['x'];
        position.top += elOffset['y'];

        if (flip) {

            var boundaries = [getDimensions(getWindow(element))];

            if (boundary) {
                boundaries.unshift(getDimensions(boundary));
            }

            each(dirs, function (ref, prop) {
                var dir = ref[0];
                var align = ref[1];
                var alignFlip = ref[2];


                if (!(flip === true || includes(flip, dir))) {
                    return;
                }

                boundaries.some(function (boundary) {

                    var elemOffset = elAttach[dir] === align
                        ? -dim[prop]
                        : elAttach[dir] === alignFlip
                            ? dim[prop]
                            : 0;

                    var targetOffset = targetAttach[dir] === align
                        ? targetDim[prop]
                        : targetAttach[dir] === alignFlip
                            ? -targetDim[prop]
                            : 0;

                    if (position[align] < boundary[align] || position[align] + dim[prop] > boundary[alignFlip]) {

                        var centerOffset = dim[prop] / 2;
                        var centerTargetOffset = targetAttach[dir] === 'center' ? -targetDim[prop] / 2 : 0;

                        return elAttach[dir] === 'center' && (
                            apply(centerOffset, centerTargetOffset)
                            || apply(-centerOffset, -centerTargetOffset)
                        ) || apply(elemOffset, targetOffset);

                    }

                    function apply(elemOffset, targetOffset) {

                        var newVal = position[align] + elemOffset + targetOffset - elOffset[dir] * 2;

                        if (newVal >= boundary[align] && newVal + dim[prop] <= boundary[alignFlip]) {
                            position[align] = newVal;

                            ['element', 'target'].forEach(function (el) {
                                flipped[el][dir] = !elemOffset
                                    ? flipped[el][dir]
                                    : flipped[el][dir] === dirs[prop][1]
                                        ? dirs[prop][2]
                                        : dirs[prop][1];
                            });

                            return true;
                        }

                    }

                });

            });
        }

        offset(element, position);

        return flipped;
    }

    function offset(element, coordinates) {

        element = toNode(element);

        if (coordinates) {

            var currentOffset = offset(element);
            var pos = css(element, 'position');

            ['left', 'top'].forEach(function (prop) {
                if (prop in coordinates) {
                    var value = css(element, prop);
                    css(element, prop, coordinates[prop] - currentOffset[prop]
                        + toFloat(pos === 'absolute' && value === 'auto'
                            ? position(element)[prop]
                            : value)
                    );
                }
            });

            return;
        }

        return getDimensions(element);
    }

    function getDimensions(element) {

        element = toNode(element);

        if (!element) {
            return {};
        }

        var ref = getWindow(element);
        var top = ref.pageYOffset;
        var left = ref.pageXOffset;

        if (isWindow(element)) {

            var height = element.innerHeight;
            var width = element.innerWidth;

            return {
                top: top,
                left: left,
                height: height,
                width: width,
                bottom: top + height,
                right: left + width
            };
        }

        var style, hidden;

        if (!isVisible(element) && css(element, 'display') === 'none') {

            style = attr(element, 'style');
            hidden = attr(element, 'hidden');

            attr(element, {
                style: ((style || '') + ";display:block !important;"),
                hidden: null
            });
        }

        var rect = element.getBoundingClientRect();

        if (!isUndefined(style)) {
            attr(element, {style: style, hidden: hidden});
        }

        return {
            height: rect.height,
            width: rect.width,
            top: rect.top + top,
            left: rect.left + left,
            bottom: rect.bottom + top,
            right: rect.right + left
        };
    }

    function position(element) {
        element = toNode(element);

        var parent = element.offsetParent || getDocEl(element);
        var parentOffset = offset(parent);
        var ref = ['top', 'left'].reduce(function (props, prop) {
            var propName = ucfirst(prop);
            props[prop] -= parentOffset[prop]
                + toFloat(css(element, ("margin" + propName)))
                + toFloat(css(parent, ("border" + propName + "Width")));
            return props;
        }, offset(element));
        var top = ref.top;
        var left = ref.left;

        return {top: top, left: left};
    }

    var height = dimension('height');
    var width = dimension('width');

    function dimension(prop) {
        var propName = ucfirst(prop);
        return function (element, value) {

            element = toNode(element);

            if (isUndefined(value)) {

                if (isWindow(element)) {
                    return element[("inner" + propName)];
                }

                if (isDocument(element)) {
                    var doc = element.documentElement;
                    return Math.max(doc[("offset" + propName)], doc[("scroll" + propName)]);
                }

                value = css(element, prop);
                value = value === 'auto' ? element[("offset" + propName)] : toFloat(value) || 0;

                return value - boxModelAdjust(prop, element);

            } else {

                css(element, prop, !value && value !== 0
                    ? ''
                    : +value + boxModelAdjust(prop, element) + 'px'
                );

            }

        };
    }

    function boxModelAdjust(prop, element, sizing) {
        if ( sizing === void 0 ) sizing = 'border-box';

        return css(element, 'boxSizing') === sizing
            ? dirs[prop].slice(1).map(ucfirst).reduce(function (value, prop) { return value
                + toFloat(css(element, ("padding" + prop)))
                + toFloat(css(element, ("border" + prop + "Width"))); }
                , 0)
            : 0;
    }

    function moveTo(position, attach, dim, factor) {
        each(dirs, function (ref, prop) {
            var dir = ref[0];
            var align = ref[1];
            var alignFlip = ref[2];

            if (attach[dir] === alignFlip) {
                position[align] += dim[prop] * factor;
            } else if (attach[dir] === 'center') {
                position[align] += dim[prop] * factor / 2;
            }
        });
    }

    function getPos(pos) {

        var x = /left|center|right/;
        var y = /top|center|bottom/;

        pos = (pos || '').split(' ');

        if (pos.length === 1) {
            pos = x.test(pos[0])
                ? pos.concat(['center'])
                : y.test(pos[0])
                    ? ['center'].concat(pos)
                    : ['center', 'center'];
        }

        return {
            x: x.test(pos[0]) ? pos[0] : 'center',
            y: y.test(pos[1]) ? pos[1] : 'center'
        };
    }

    function getOffsets(offsets, width, height) {

        var ref = (offsets || '').split(' ');
        var x = ref[0];
        var y = ref[1];

        return {
            x: x ? toFloat(x) * (endsWith(x, '%') ? width / 100 : 1) : 0,
            y: y ? toFloat(y) * (endsWith(y, '%') ? height / 100 : 1) : 0
        };
    }

    function flipPosition(pos) {
        switch (pos) {
            case 'left':
                return 'right';
            case 'right':
                return 'left';
            case 'top':
                return 'bottom';
            case 'bottom':
                return 'top';
            default:
                return pos;
        }
    }

    function isInView(element, topOffset, leftOffset) {
        if ( topOffset === void 0 ) topOffset = 0;
        if ( leftOffset === void 0 ) leftOffset = 0;


        if (!isVisible(element)) {
            return false;
        }

        element = toNode(element);

        var win = getWindow(element);
        var client = element.getBoundingClientRect();
        var bounding = {
            top: -topOffset,
            left: -leftOffset,
            bottom: topOffset + height(win),
            right: leftOffset + width(win)
        };

        return intersectRect(client, bounding) || pointInRect({x: client.left, y: client.top}, bounding);

    }

    function scrolledOver(element, heightOffset) {
        if ( heightOffset === void 0 ) heightOffset = 0;


        if (!isVisible(element)) {
            return 0;
        }

        element = toNode(element);

        var win = getWindow(element);
        var doc = getDocument(element);
        var elHeight = element.offsetHeight + heightOffset;
        var ref = offsetPosition(element);
        var top = ref[0];
        var vp = height(win);
        var vh = vp + Math.min(0, top - vp);
        var diff = Math.max(0, vp - (height(doc) + heightOffset - (top + elHeight)));

        return clamp(((vh + win.pageYOffset - top) / ((vh + (elHeight - (diff < vp ? diff : 0))) / 100)) / 100);
    }

    function scrollTop(element, top) {
        element = toNode(element);

        if (isWindow(element) || isDocument(element)) {
            var ref = getWindow(element);
            var scrollTo = ref.scrollTo;
            var pageXOffset = ref.pageXOffset;
            scrollTo(pageXOffset, top);
        } else {
            element.scrollTop = top;
        }
    }

    function offsetPosition(element) {
        var offset = [0, 0];

        do {

            offset[0] += element.offsetTop;
            offset[1] += element.offsetLeft;

            if (css(element, 'position') === 'fixed') {
                var win = getWindow(element);
                offset[0] += win.pageYOffset;
                offset[1] += win.pageXOffset;
                return offset;
            }

        } while ((element = element.offsetParent));

        return offset;
    }

    function toPx(value, property, element) {
        if ( property === void 0 ) property = 'width';
        if ( element === void 0 ) element = window;

        return isNumeric(value)
            ? +value
            : endsWith(value, 'vh')
                ? percent(height(getWindow(element)), value)
                : endsWith(value, 'vw')
                    ? percent(width(getWindow(element)), value)
                    : endsWith(value, '%')
                        ? percent(getDimensions(element)[property], value)
                        : toFloat(value);
    }

    function percent(base, value) {
        return base * toFloat(value) / 100;
    }

    function getWindow(element) {
        return isWindow(element) ? element : getDocument(element).defaultView;
    }

    function getDocument(element) {
        return toNode(element).ownerDocument;
    }

    function getDocEl(element) {
        return getDocument(element).documentElement;
    }

    /*
        Based on:
        Copyright (c) 2016 Wilson Page wilsonpage@me.com
        https://github.com/wilsonpage/fastdom
    */

    var fastdom = {

        reads: [],
        writes: [],

        read: function(task) {
            this.reads.push(task);
            scheduleFlush();
            return task;
        },

        write: function(task) {
            this.writes.push(task);
            scheduleFlush();
            return task;
        },

        clear: function(task) {
            return remove$1(this.reads, task) || remove$1(this.writes, task);
        },

        flush: flush

    };

    function flush() {
        runTasks(fastdom.reads);
        runTasks(fastdom.writes.splice(0, fastdom.writes.length));

        fastdom.scheduled = false;

        if (fastdom.reads.length || fastdom.writes.length) {
            scheduleFlush(true);
        }
    }

    function scheduleFlush(microtask) {
        if ( microtask === void 0 ) microtask = false;

        if (!fastdom.scheduled) {
            fastdom.scheduled = true;
            if (microtask) {
                Promise.resolve().then(flush);
            } else {
                requestAnimationFrame(flush);
            }
        }
    }

    function runTasks(tasks) {
        var task;
        while ((task = tasks.shift())) {
            task();
        }
    }

    function remove$1(array, item) {
        var index = array.indexOf(item);
        return !!~index && !!array.splice(index, 1);
    }

    function MouseTracker() {}

    MouseTracker.prototype = {

        positions: [],
        position: null,

        init: function() {
            var this$1 = this;


            this.positions = [];
            this.position = null;

            var ticking = false;
            this.unbind = on(document, 'mousemove', function (e) {

                if (ticking) {
                    return;
                }

                setTimeout(function () {

                    var time = Date.now();
                    var ref = this$1.positions;
                    var length = ref.length;

                    if (length && (time - this$1.positions[length - 1].time > 100)) {
                        this$1.positions.splice(0, length);
                    }

                    this$1.positions.push({time: time, x: e.pageX, y: e.pageY});

                    if (this$1.positions.length > 5) {
                        this$1.positions.shift();
                    }

                    ticking = false;
                }, 5);

                ticking = true;
            });

        },

        cancel: function() {
            if (this.unbind) {
                this.unbind();
            }
        },

        movesTo: function(target) {

            if (this.positions.length < 2) {
                return false;
            }

            var p = offset(target);
            var position = last(this.positions);
            var ref = this.positions;
            var prevPos = ref[0];

            if (p.left <= position.x && position.x <= p.right && p.top <= position.y && position.y <= p.bottom) {
                return false;
            }

            var points = [
                [{x: p.left, y: p.top}, {x: p.right, y: p.bottom}],
                [{x: p.right, y: p.top}, {x: p.left, y: p.bottom}]
            ];

            if (p.right <= position.x) ; else if (p.left >= position.x) {
                points[0].reverse();
                points[1].reverse();
            } else if (p.bottom <= position.y) {
                points[0].reverse();
            } else if (p.top >= position.y) {
                points[1].reverse();
            }

            return !!points.reduce(function (result, point) {
                return result + (slope(prevPos, point[0]) < slope(position, point[0]) && slope(prevPos, point[1]) > slope(position, point[1]));
            }, 0);
        }

    };

    function slope(a, b) {
        return (b.y - a.y) / (b.x - a.x);
    }

    var strats = {};

    strats.events =
    strats.created =
    strats.beforeConnect =
    strats.connected =
    strats.beforeDisconnect =
    strats.disconnected =
    strats.destroy = concatStrat;

    // args strategy
    strats.args = function (parentVal, childVal) {
        return childVal !== false && concatStrat(childVal || parentVal);
    };

    // update strategy
    strats.update = function (parentVal, childVal) {
        return sortBy(concatStrat(parentVal, isFunction(childVal) ? {read: childVal} : childVal), 'order');
    };

    // property strategy
    strats.props = function (parentVal, childVal) {

        if (isArray(childVal)) {
            childVal = childVal.reduce(function (value, key) {
                value[key] = String;
                return value;
            }, {});
        }

        return strats.methods(parentVal, childVal);
    };

    // extend strategy
    strats.computed =
    strats.methods = function (parentVal, childVal) {
        return childVal
            ? parentVal
                ? assign({}, parentVal, childVal)
                : childVal
            : parentVal;
    };

    // data strategy
    strats.data = function (parentVal, childVal, vm) {

        if (!vm) {

            if (!childVal) {
                return parentVal;
            }

            if (!parentVal) {
                return childVal;
            }

            return function (vm) {
                return mergeFnData(parentVal, childVal, vm);
            };

        }

        return mergeFnData(parentVal, childVal, vm);
    };

    function mergeFnData(parentVal, childVal, vm) {
        return strats.computed(
            isFunction(parentVal)
                ? parentVal.call(vm, vm)
                : parentVal,
            isFunction(childVal)
                ? childVal.call(vm, vm)
                : childVal
        );
    }

    // concat strategy
    function concatStrat(parentVal, childVal) {

        parentVal = parentVal && !isArray(parentVal) ? [parentVal] : parentVal;

        return childVal
            ? parentVal
                ? parentVal.concat(childVal)
                : isArray(childVal)
                    ? childVal
                    : [childVal]
            : parentVal;
    }

    // default strategy
    function defaultStrat(parentVal, childVal) {
        return isUndefined(childVal) ? parentVal : childVal;
    }

    function mergeOptions(parent, child, vm) {

        var options = {};

        if (isFunction(child)) {
            child = child.options;
        }

        if (child.extends) {
            parent = mergeOptions(parent, child.extends, vm);
        }

        if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
                parent = mergeOptions(parent, child.mixins[i], vm);
            }
        }

        for (var key in parent) {
            mergeKey(key);
        }

        for (var key$1 in child) {
            if (!hasOwn(parent, key$1)) {
                mergeKey(key$1);
            }
        }

        function mergeKey(key) {
            options[key] = (strats[key] || defaultStrat)(parent[key], child[key], vm);
        }

        return options;
    }

    function parseOptions(options, args) {
        var obj;

        if ( args === void 0 ) args = [];

        try {

            return !options
                ? {}
                : startsWith(options, '{')
                    ? JSON.parse(options)
                    : args.length && !includes(options, ':')
                        ? (( obj = {}, obj[args[0]] = options, obj ))
                        : options.split(';').reduce(function (options, option) {
                            var ref = option.split(/:(.*)/);
                            var key = ref[0];
                            var value = ref[1];
                            if (key && !isUndefined(value)) {
                                options[key.trim()] = value.trim();
                            }
                            return options;
                        }, {});

        } catch (e) {
            return {};
        }

    }

    var id = 0;

    var Player = function(el) {
        this.id = ++id;
        this.el = toNode(el);
    };

    Player.prototype.isVideo = function () {
        return this.isYoutube() || this.isVimeo() || this.isHTML5();
    };

    Player.prototype.isHTML5 = function () {
        return this.el.tagName === 'VIDEO';
    };

    Player.prototype.isIFrame = function () {
        return this.el.tagName === 'IFRAME';
    };

    Player.prototype.isYoutube = function () {
        return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
    };

    Player.prototype.isVimeo = function () {
        return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/);
    };

    Player.prototype.enableApi = function () {
            var this$1 = this;


        if (this.ready) {
            return this.ready;
        }

        var youtube = this.isYoutube();
        var vimeo = this.isVimeo();

        var poller;

        if (youtube || vimeo) {

            return this.ready = new Promise(function (resolve) {

                once(this$1.el, 'load', function () {
                    if (youtube) {
                        var listener = function () { return post(this$1.el, {event: 'listening', id: this$1.id}); };
                        poller = setInterval(listener, 100);
                        listener();
                    }
                });

                listen(function (data) { return youtube && data.id === this$1.id && data.event === 'onReady' || vimeo && Number(data.player_id) === this$1.id; })
                    .then(function () {
                        resolve();
                        poller && clearInterval(poller);
                    });

                attr(this$1.el, 'src', ("" + (this$1.el.src) + (includes(this$1.el.src, '?') ? '&' : '?') + (youtube ? 'enablejsapi=1' : ("api=1&player_id=" + (this$1.id)))));

            });

        }

        return Promise.resolve();

    };

    Player.prototype.play = function () {
            var this$1 = this;


        if (!this.isVideo()) {
            return;
        }

        if (this.isIFrame()) {
            this.enableApi().then(function () { return post(this$1.el, {func: 'playVideo', method: 'play'}); });
        } else if (this.isHTML5()) {
            try {
                var promise = this.el.play();

                if (promise) {
                    promise.catch(noop);
                }
            } catch (e) {}
        }
    };

    Player.prototype.pause = function () {
            var this$1 = this;


        if (!this.isVideo()) {
            return;
        }

        if (this.isIFrame()) {
            this.enableApi().then(function () { return post(this$1.el, {func: 'pauseVideo', method: 'pause'}); });
        } else if (this.isHTML5()) {
            this.el.pause();
        }
    };

    Player.prototype.mute = function () {
            var this$1 = this;


        if (!this.isVideo()) {
            return;
        }

        if (this.isIFrame()) {
            this.enableApi().then(function () { return post(this$1.el, {func: 'mute', method: 'setVolume', value: 0}); });
        } else if (this.isHTML5()) {
            this.el.muted = true;
            attr(this.el, 'muted', '');
        }

    };

    function post(el, cmd) {
        try {
            el.contentWindow.postMessage(JSON.stringify(assign({event: 'command'}, cmd)), '*');
        } catch (e) {}
    }

    function listen(cb) {

        return new Promise(function (resolve) {

            once(window, 'message', function (_, data) { return resolve(data); }, false, function (ref) {
                var data = ref.data;


                if (!data || !isString(data)) {
                    return;
                }

                try {
                    data = JSON.parse(data);
                } catch (e) {
                    return;
                }

                return data && cb(data);

            });

        });

    }

    var IntersectionObserver = 'IntersectionObserver' in window
        ? window.IntersectionObserver
        : /*@__PURE__*/(function () {
        function IntersectionObserverClass(callback, ref) {
            var this$1 = this;
            if ( ref === void 0 ) ref = {};
            var rootMargin = ref.rootMargin; if ( rootMargin === void 0 ) rootMargin = '0 0';


                this.targets = [];

                var ref$1 = (rootMargin || '0 0').split(' ').map(toFloat);
            var offsetTop = ref$1[0];
            var offsetLeft = ref$1[1];

                this.offsetTop = offsetTop;
                this.offsetLeft = offsetLeft;

                var pending;
                this.apply = function () {

                    if (pending) {
                        return;
                    }

                    pending = requestAnimationFrame(function () { return setTimeout(function () {
                        var records = this$1.takeRecords();

                        if (records.length) {
                            callback(records, this$1);
                        }

                        pending = false;
                    }); });

                };

                this.off = on(window, 'scroll resize load', this.apply, {passive: true, capture: true});

            }

            IntersectionObserverClass.prototype.takeRecords = function () {
                var this$1 = this;

                return this.targets.filter(function (entry) {

                    var inView = isInView(entry.target, this$1.offsetTop, this$1.offsetLeft);

                    if (entry.isIntersecting === null || inView ^ entry.isIntersecting) {
                        entry.isIntersecting = inView;
                        return true;
                    }

                });
            };

            IntersectionObserverClass.prototype.observe = function (target) {
                this.targets.push({
                    target: target,
                    isIntersecting: null
                });
                this.apply();
            };

            IntersectionObserverClass.prototype.disconnect = function () {
                this.targets = [];
                this.off();
            };

        return IntersectionObserverClass;
    }());



    var util = /*#__PURE__*/Object.freeze({
        ajax: ajax,
        getImage: getImage,
        transition: transition,
        Transition: Transition,
        animate: animate,
        Animation: Animation,
        attr: attr,
        hasAttr: hasAttr,
        removeAttr: removeAttr,
        data: data,
        addClass: addClass,
        removeClass: removeClass,
        removeClasses: removeClasses,
        replaceClass: replaceClass,
        hasClass: hasClass,
        toggleClass: toggleClass,
        positionAt: positionAt,
        offset: offset,
        position: position,
        height: height,
        width: width,
        boxModelAdjust: boxModelAdjust,
        flipPosition: flipPosition,
        isInView: isInView,
        scrolledOver: scrolledOver,
        scrollTop: scrollTop,
        offsetPosition: offsetPosition,
        toPx: toPx,
        ready: ready,
        index: index,
        getIndex: getIndex,
        empty: empty,
        html: html,
        prepend: prepend,
        append: append,
        before: before,
        after: after,
        remove: remove,
        wrapAll: wrapAll,
        wrapInner: wrapInner,
        unwrap: unwrap,
        fragment: fragment,
        apply: apply,
        $: $,
        $$: $$,
        isIE: isIE,
        isRtl: isRtl,
        hasTouch: hasTouch,
        pointerDown: pointerDown,
        pointerMove: pointerMove,
        pointerUp: pointerUp,
        pointerEnter: pointerEnter,
        pointerLeave: pointerLeave,
        pointerCancel: pointerCancel,
        on: on,
        off: off,
        once: once,
        trigger: trigger,
        createEvent: createEvent,
        toEventTargets: toEventTargets,
        isTouch: isTouch,
        getEventPos: getEventPos,
        fastdom: fastdom,
        isVoidElement: isVoidElement,
        isVisible: isVisible,
        selInput: selInput,
        isInput: isInput,
        filter: filter,
        within: within,
        hasOwn: hasOwn,
        hyphenate: hyphenate,
        camelize: camelize,
        ucfirst: ucfirst,
        startsWith: startsWith,
        endsWith: endsWith,
        includes: includes,
        findIndex: findIndex,
        isArray: isArray,
        isFunction: isFunction,
        isObject: isObject,
        isPlainObject: isPlainObject,
        isWindow: isWindow,
        isDocument: isDocument,
        isJQuery: isJQuery,
        isNode: isNode,
        isNodeCollection: isNodeCollection,
        isBoolean: isBoolean,
        isString: isString,
        isNumber: isNumber,
        isNumeric: isNumeric,
        isEmpty: isEmpty,
        isUndefined: isUndefined,
        toBoolean: toBoolean,
        toNumber: toNumber,
        toFloat: toFloat,
        toNode: toNode,
        toNodes: toNodes,
        toList: toList,
        toMs: toMs,
        isEqual: isEqual,
        swap: swap,
        assign: assign,
        last: last,
        each: each,
        sortBy: sortBy,
        uniqueBy: uniqueBy,
        clamp: clamp,
        noop: noop,
        intersectRect: intersectRect,
        pointInRect: pointInRect,
        Dimensions: Dimensions,
        MouseTracker: MouseTracker,
        mergeOptions: mergeOptions,
        parseOptions: parseOptions,
        Player: Player,
        Promise: Promise,
        Deferred: Deferred,
        IntersectionObserver: IntersectionObserver,
        query: query,
        queryAll: queryAll,
        find: find,
        findAll: findAll,
        matches: matches,
        closest: closest,
        parents: parents,
        escape: escape,
        css: css,
        getStyles: getStyles,
        getStyle: getStyle,
        getCssVar: getCssVar,
        propName: propName
    });

    function componentAPI (UIkit) {

        var DATA = UIkit.data;

        var components = {};

        UIkit.component = function (name, options) {

            if (!options) {

                if (isPlainObject(components[name])) {
                    components[name] = UIkit.extend(components[name]);
                }

                return components[name];

            }

            UIkit[name] = function (element, data) {
                var i = arguments.length, argsArray = Array(i);
                while ( i-- ) argsArray[i] = arguments[i];


                var component = UIkit.component(name);

                if (isPlainObject(element)) {
                    return new component({data: element});
                }

                if (component.options.functional) {
                    return new component({data: [].concat( argsArray )});
                }

                return element && element.nodeType ? init(element) : $$(element).map(init)[0];

                function init(element) {

                    var instance = UIkit.getComponent(element, name);

                    if (instance) {
                        if (!data) {
                            return instance;
                        } else {
                            instance.$destroy();
                        }
                    }

                    return new component({el: element, data: data});

                }

            };

            var opt = isPlainObject(options) ? assign({}, options) : options.options;

            opt.name = name;

            if (opt.install) {
                opt.install(UIkit, opt, name);
            }

            if (UIkit._initialized && !opt.functional) {
                var id = hyphenate(name);
                fastdom.read(function () { return UIkit[name](("[uk-" + id + "],[data-uk-" + id + "]")); });
            }

            return components[name] = isPlainObject(options) ? opt : options;
        };

        UIkit.getComponents = function (element) { return element && element[DATA] || {}; };
        UIkit.getComponent = function (element, name) { return UIkit.getComponents(element)[name]; };

        UIkit.connect = function (node) {

            if (node[DATA]) {
                for (var name in node[DATA]) {
                    node[DATA][name]._callConnected();
                }
            }

            for (var i = 0; i < node.attributes.length; i++) {

                var name$1 = getComponentName(node.attributes[i].name);

                if (name$1 && name$1 in components) {
                    UIkit[name$1](node);
                }

            }

        };

        UIkit.disconnect = function (node) {
            for (var name in node[DATA]) {
                node[DATA][name]._callDisconnected();
            }
        };

    }

    function getComponentName(attribute) {
        return startsWith(attribute, 'uk-') || startsWith(attribute, 'data-uk-')
            ? camelize(attribute.replace('data-uk-', '').replace('uk-', ''))
            : false;
    }

    function boot (UIkit) {

        var connect = UIkit.connect;
        var disconnect = UIkit.disconnect;

        if (!('MutationObserver' in window)) {
            return;
        }

        if (document.body) {

            fastdom.read(init);

        } else {

            (new MutationObserver(function () {

                if (document.body) {
                    this.disconnect();
                    init();
                }

            })).observe(document, {childList: true, subtree: true});

        }

        function init() {

            apply(document.body, connect);

            // Safari renders prior to first animation frame
            fastdom.flush();

            (new MutationObserver(function (mutations) { return mutations.forEach(applyMutation); })).observe(document, {
                childList: true,
                subtree: true,
                characterData: true,
                attributes: true
            });

            UIkit._initialized = true;
        }

        function applyMutation(mutation) {

            var target = mutation.target;
            var type = mutation.type;

            var update = type !== 'attributes'
                ? applyChildList(mutation)
                : applyAttribute(mutation);

            update && UIkit.update(target);

        }

        function applyAttribute(ref) {
            var target = ref.target;
            var attributeName = ref.attributeName;


            if (attributeName === 'href') {
                return true;
            }

            var name = getComponentName(attributeName);

            if (!name || !(name in UIkit)) {
                return;
            }

            if (hasAttr(target, attributeName)) {
                UIkit[name](target);
                return true;
            }

            var component = UIkit.getComponent(target, name);

            if (component) {
                component.$destroy();
                return true;
            }

        }

        function applyChildList(ref) {
            var addedNodes = ref.addedNodes;
            var removedNodes = ref.removedNodes;


            for (var i = 0; i < addedNodes.length; i++) {
                apply(addedNodes[i], connect);
            }

            for (var i$1 = 0; i$1 < removedNodes.length; i$1++) {
                apply(removedNodes[i$1], disconnect);
            }

            return true;
        }

        function apply(node, fn) {

            if (node.nodeType !== 1 || hasAttr(node, 'uk-no-boot')) {
                return;
            }

            fn(node);
            node = node.firstElementChild;
            while (node) {
                var next = node.nextElementSibling;
                apply(node, fn);
                node = next;
            }
        }

    }

    function globalAPI (UIkit) {

        var DATA = UIkit.data;

        UIkit.use = function (plugin) {

            if (plugin.installed) {
                return;
            }

            plugin.call(null, this);
            plugin.installed = true;

            return this;
        };

        UIkit.mixin = function (mixin, component) {
            component = (isString(component) ? UIkit.component(component) : component) || this;
            component.options = mergeOptions(component.options, mixin);
        };

        UIkit.extend = function (options) {

            options = options || {};

            var Super = this;
            var Sub = function UIkitComponent(options) {
                this._init(options);
            };

            Sub.prototype = Object.create(Super.prototype);
            Sub.prototype.constructor = Sub;
            Sub.options = mergeOptions(Super.options, options);

            Sub.super = Super;
            Sub.extend = Super.extend;

            return Sub;
        };

        UIkit.update = function (element, e) {

            element = element ? toNode(element) : document.body;

            path(element, function (element) { return update(element[DATA], e); });
            apply(element, function (element) { return update(element[DATA], e); });

        };

        var container;
        Object.defineProperty(UIkit, 'container', {

            get: function() {
                return container || document.body;
            },

            set: function(element) {
                container = $(element);
            }

        });

        function update(data, e) {

            if (!data) {
                return;
            }

            for (var name in data) {
                if (data[name]._connected) {
                    data[name]._callUpdate(e);
                }
            }

        }

        function path(node, fn) {
            if (node && node !== document.body && node.parentNode) {
                path(node.parentNode, fn);
                fn(node.parentNode);
            }
        }

    }

    function hooksAPI (UIkit) {

        UIkit.prototype._callHook = function (hook) {
            var this$1 = this;


            var handlers = this.$options[hook];

            if (handlers) {
                handlers.forEach(function (handler) { return handler.call(this$1); });
            }
        };

        UIkit.prototype._callConnected = function () {

            if (this._connected) {
                return;
            }

            this._data = {};
            this._computeds = {};
            this._initProps();

            this._callHook('beforeConnect');
            this._connected = true;

            this._initEvents();
            this._initObserver();

            this._callHook('connected');
            this._callUpdate();
        };

        UIkit.prototype._callDisconnected = function () {

            if (!this._connected) {
                return;
            }

            this._callHook('beforeDisconnect');

            if (this._observer) {
                this._observer.disconnect();
                this._observer = null;
            }

            this._unbindEvents();
            this._callHook('disconnected');

            this._connected = false;

        };

        UIkit.prototype._callUpdate = function (e) {
            var this$1 = this;
            if ( e === void 0 ) e = 'update';


            var type = e.type || e;

            if (includes(['update', 'resize'], type)) {
                this._callWatches();
            }

            var updates = this.$options.update;
            var ref = this._frames;
            var reads = ref.reads;
            var writes = ref.writes;

            if (!updates) {
                return;
            }

            updates.forEach(function (ref, i) {
                var read = ref.read;
                var write = ref.write;
                var events = ref.events;


                if (type !== 'update' && !includes(events, type)) {
                    return;
                }

                if (read && !includes(fastdom.reads, reads[i])) {
                    reads[i] = fastdom.read(function () {

                        var result = this$1._connected && read.call(this$1, this$1._data, type);

                        if (result === false && write) {
                            fastdom.clear(writes[i]);
                        } else if (isPlainObject(result)) {
                            assign(this$1._data, result);
                        }
                    });
                }

                if (write && !includes(fastdom.writes, writes[i])) {
                    writes[i] = fastdom.write(function () { return this$1._connected && write.call(this$1, this$1._data, type); });
                }

            });

        };

    }

    function stateAPI (UIkit) {

        var uid = 0;

        UIkit.prototype._init = function (options) {

            options = options || {};
            options.data = normalizeData(options, this.constructor.options);

            this.$options = mergeOptions(this.constructor.options, options, this);
            this.$el = null;
            this.$props = {};

            this._frames = {reads: {}, writes: {}};
            this._events = [];

            this._uid = uid++;
            this._initData();
            this._initMethods();
            this._initComputeds();
            this._callHook('created');

            if (options.el) {
                this.$mount(options.el);
            }
        };

        UIkit.prototype._initData = function () {

            var ref = this.$options;
            var data = ref.data; if ( data === void 0 ) data = {};

            for (var key in data) {
                this.$props[key] = this[key] = data[key];
            }
        };

        UIkit.prototype._initMethods = function () {

            var ref = this.$options;
            var methods = ref.methods;

            if (methods) {
                for (var key in methods) {
                    this[key] = methods[key].bind(this);
                }
            }
        };

        UIkit.prototype._initComputeds = function () {

            var ref = this.$options;
            var computed = ref.computed;

            this._computeds = {};

            if (computed) {
                for (var key in computed) {
                    registerComputed(this, key, computed[key]);
                }
            }
        };

        UIkit.prototype._callWatches = function () {

            var ref = this;
            var computed = ref.$options.computed;
            var _computeds = ref._computeds;

            for (var key in _computeds) {

                var value = _computeds[key];
                delete _computeds[key];

                if (computed[key].watch && !isEqual(value, this[key])) {
                    computed[key].watch.call(this, this[key], value);
                }

            }

        };

        UIkit.prototype._initProps = function (props) {

            var key;

            props = props || getProps(this.$options, this.$name);

            for (key in props) {
                if (!isUndefined(props[key])) {
                    this.$props[key] = props[key];
                }
            }

            var exclude = [this.$options.computed, this.$options.methods];
            for (key in this.$props) {
                if (key in props && notIn(exclude, key)) {
                    this[key] = this.$props[key];
                }
            }
        };

        UIkit.prototype._initEvents = function () {
            var this$1 = this;


            var ref = this.$options;
            var events = ref.events;

            if (events) {

                events.forEach(function (event) {

                    if (!hasOwn(event, 'handler')) {
                        for (var key in event) {
                            registerEvent(this$1, event[key], key);
                        }
                    } else {
                        registerEvent(this$1, event);
                    }

                });
            }
        };

        UIkit.prototype._unbindEvents = function () {
            this._events.forEach(function (unbind) { return unbind(); });
            this._events = [];
        };

        UIkit.prototype._initObserver = function () {
            var this$1 = this;


            var ref = this.$options;
            var attrs = ref.attrs;
            var props = ref.props;
            var el = ref.el;
            if (this._observer || !props || attrs === false) {
                return;
            }

            attrs = isArray(attrs) ? attrs : Object.keys(props);

            this._observer = new MutationObserver(function () {

                var data = getProps(this$1.$options, this$1.$name);
                if (attrs.some(function (key) { return !isUndefined(data[key]) && data[key] !== this$1.$props[key]; })) {
                    this$1.$reset();
                }

            });

            var filter = attrs.map(function (key) { return hyphenate(key); }).concat(this.$name);

            this._observer.observe(el, {
                attributes: true,
                attributeFilter: filter.concat(filter.map(function (key) { return ("data-" + key); }))
            });
        };

        function getProps(opts, name) {

            var data$1 = {};
            var args = opts.args; if ( args === void 0 ) args = [];
            var props = opts.props; if ( props === void 0 ) props = {};
            var el = opts.el;

            if (!props) {
                return data$1;
            }

            for (var key in props) {
                var prop = hyphenate(key);
                var value = data(el, prop);

                if (!isUndefined(value)) {

                    value = props[key] === Boolean && value === ''
                        ? true
                        : coerce(props[key], value);

                    if (prop === 'target' && (!value || startsWith(value, '_'))) {
                        continue;
                    }

                    data$1[key] = value;
                }
            }

            var options = parseOptions(data(el, name), args);

            for (var key$1 in options) {
                var prop$1 = camelize(key$1);
                if (props[prop$1] !== undefined) {
                    data$1[prop$1] = coerce(props[prop$1], options[key$1]);
                }
            }

            return data$1;
        }

        function registerComputed(component, key, cb) {
            Object.defineProperty(component, key, {

                enumerable: true,

                get: function() {

                    var _computeds = component._computeds;
                    var $props = component.$props;
                    var $el = component.$el;

                    if (!hasOwn(_computeds, key)) {
                        _computeds[key] = (cb.get || cb).call(component, $props, $el);
                    }

                    return _computeds[key];
                },

                set: function(value) {

                    var _computeds = component._computeds;

                    _computeds[key] = cb.set ? cb.set.call(component, value) : value;

                    if (isUndefined(_computeds[key])) {
                        delete _computeds[key];
                    }
                }

            });
        }

        function registerEvent(component, event, key) {

            if (!isPlainObject(event)) {
                event = ({name: key, handler: event});
            }

            var name = event.name;
            var el = event.el;
            var handler = event.handler;
            var capture = event.capture;
            var passive = event.passive;
            var delegate = event.delegate;
            var filter = event.filter;
            var self = event.self;
            el = isFunction(el)
                ? el.call(component)
                : el || component.$el;

            if (isArray(el)) {
                el.forEach(function (el) { return registerEvent(component, assign({}, event, {el: el}), key); });
                return;
            }

            if (!el || filter && !filter.call(component)) {
                return;
            }

            component._events.push(
                on(
                    el,
                    name,
                    !delegate
                        ? null
                        : isString(delegate)
                            ? delegate
                            : delegate.call(component),
                    isString(handler) ? component[handler] : handler.bind(component),
                    {passive: passive, capture: capture, self: self}
                )
            );

        }

        function notIn(options, key) {
            return options.every(function (arr) { return !arr || !hasOwn(arr, key); });
        }

        function coerce(type, value) {

            if (type === Boolean) {
                return toBoolean(value);
            } else if (type === Number) {
                return toNumber(value);
            } else if (type === 'list') {
                return toList(value);
            }

            return type ? type(value) : value;
        }

        function normalizeData(ref, ref$1) {
            var data = ref.data;
            var el = ref.el;
            var args = ref$1.args;
            var props = ref$1.props; if ( props === void 0 ) props = {};

            data = isArray(data)
                ? !isEmpty(args)
                    ? data.slice(0, args.length).reduce(function (data, value, index) {
                        if (isPlainObject(value)) {
                            assign(data, value);
                        } else {
                            data[args[index]] = value;
                        }
                        return data;
                    }, {})
                    : undefined
                : data;

            if (data) {
                for (var key in data) {
                    if (isUndefined(data[key])) {
                        delete data[key];
                    } else {
                        data[key] = props[key] ? coerce(props[key], data[key]) : data[key];
                    }
                }
            }

            return data;
        }
    }

    function instanceAPI (UIkit) {

        var DATA = UIkit.data;

        UIkit.prototype.$mount = function (el) {

            var ref = this.$options;
            var name = ref.name;

            if (!el[DATA]) {
                el[DATA] = {};
            }

            if (el[DATA][name]) {
                return;
            }

            el[DATA][name] = this;

            this.$el = this.$options.el = this.$options.el || el;

            if (within(el, document)) {
                this._callConnected();
            }
        };

        UIkit.prototype.$emit = function (e) {
            this._callUpdate(e);
        };

        UIkit.prototype.$reset = function () {
            this._callDisconnected();
            this._callConnected();
        };

        UIkit.prototype.$destroy = function (removeEl) {
            if ( removeEl === void 0 ) removeEl = false;


            var ref = this.$options;
            var el = ref.el;
            var name = ref.name;

            if (el) {
                this._callDisconnected();
            }

            this._callHook('destroy');

            if (!el || !el[DATA]) {
                return;
            }

            delete el[DATA][name];

            if (!isEmpty(el[DATA])) {
                delete el[DATA];
            }

            if (removeEl) {
                remove(this.$el);
            }
        };

        UIkit.prototype.$create = function (component, element, data) {
            return UIkit[component](element, data);
        };

        UIkit.prototype.$update = UIkit.update;
        UIkit.prototype.$getComponent = UIkit.getComponent;

        var names = {};
        Object.defineProperties(UIkit.prototype, {

            $container: Object.getOwnPropertyDescriptor(UIkit, 'container'),

            $name: {

                get: function() {
                    var ref = this.$options;
                    var name = ref.name;

                    if (!names[name]) {
                        names[name] = UIkit.prefix + hyphenate(name);
                    }

                    return names[name];
                }

            }

        });

    }

    var UIkit = function (options) {
        this._init(options);
    };

    UIkit.util = util;
    UIkit.data = '__uikit__';
    UIkit.prefix = 'uk-';
    UIkit.options = {};

    globalAPI(UIkit);
    hooksAPI(UIkit);
    stateAPI(UIkit);
    componentAPI(UIkit);
    instanceAPI(UIkit);

    var Class = {

        connected: function() {
            !hasClass(this.$el, this.$name) && addClass(this.$el, this.$name);
        }

    };

    var Togglable = {

        props: {
            cls: Boolean,
            animation: 'list',
            duration: Number,
            origin: String,
            transition: String,
            queued: Boolean
        },

        data: {
            cls: false,
            animation: [false],
            duration: 200,
            origin: false,
            transition: 'linear',
            queued: false,

            initProps: {
                overflow: '',
                height: '',
                paddingTop: '',
                paddingBottom: '',
                marginTop: '',
                marginBottom: ''
            },

            hideProps: {
                overflow: 'hidden',
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0
            }

        },

        computed: {

            hasAnimation: function(ref) {
                var animation = ref.animation;

                return !!animation[0];
            },

            hasTransition: function(ref) {
                var animation = ref.animation;

                return this.hasAnimation && animation[0] === true;
            }

        },

        methods: {

            toggleElement: function(targets, show, animate) {
                var this$1 = this;

                return new Promise(function (resolve) {

                    targets = toNodes(targets);

                    var all = function (targets) { return Promise.all(targets.map(function (el) { return this$1._toggleElement(el, show, animate); })); };
                    var toggled = targets.filter(function (el) { return this$1.isToggled(el); });
                    var untoggled = targets.filter(function (el) { return !includes(toggled, el); });

                    var p;

                    if (!this$1.queued || !isUndefined(animate) || !isUndefined(show) || !this$1.hasAnimation || targets.length < 2) {

                        p = all(untoggled.concat(toggled));

                    } else {

                        var body = document.body;
                        var scroll = body.scrollTop;
                        var el = toggled[0];
                        var inProgress = Animation.inProgress(el) && hasClass(el, 'uk-animation-leave')
                                || Transition.inProgress(el) && el.style.height === '0px';

                        p = all(toggled);

                        if (!inProgress) {
                            p = p.then(function () {
                                var p = all(untoggled);
                                body.scrollTop = scroll;
                                return p;
                            });
                        }

                    }

                    p.then(resolve, noop);

                });
            },

            toggleNow: function(targets, show) {
                var this$1 = this;

                return new Promise(function (resolve) { return Promise.all(toNodes(targets).map(function (el) { return this$1._toggleElement(el, show, false); })).then(resolve, noop); });
            },

            isToggled: function(el) {
                var nodes = toNodes(el || this.$el);
                return this.cls
                    ? hasClass(nodes, this.cls.split(' ')[0])
                    : !hasAttr(nodes, 'hidden');
            },

            updateAria: function(el) {
                if (this.cls === false) {
                    attr(el, 'aria-hidden', !this.isToggled(el));
                }
            },

            _toggleElement: function(el, show, animate) {
                var this$1 = this;


                show = isBoolean(show)
                    ? show
                    : Animation.inProgress(el)
                        ? hasClass(el, 'uk-animation-leave')
                        : Transition.inProgress(el)
                            ? el.style.height === '0px'
                            : !this.isToggled(el);

                if (!trigger(el, ("before" + (show ? 'show' : 'hide')), [this])) {
                    return Promise.reject();
                }

                var promise = (
                    isFunction(animate)
                        ? animate
                        : animate === false || !this.hasAnimation
                            ? this._toggle
                            : this.hasTransition
                                ? toggleHeight(this)
                                : toggleAnimation(this)
                )(el, show);

                trigger(el, show ? 'show' : 'hide', [this]);

                var final = function () {
                    trigger(el, show ? 'shown' : 'hidden', [this$1]);
                    this$1.$update(el);
                };

                return promise ? promise.then(final) : Promise.resolve(final());
            },

            _toggle: function(el, toggled) {

                if (!el) {
                    return;
                }

                toggled = Boolean(toggled);

                var changed;
                if (this.cls) {
                    changed = includes(this.cls, ' ') || toggled !== hasClass(el, this.cls);
                    changed && toggleClass(el, this.cls, includes(this.cls, ' ') ? undefined : toggled);
                } else {
                    changed = toggled === hasAttr(el, 'hidden');
                    changed && attr(el, 'hidden', !toggled ? '' : null);
                }

                $$('[autofocus]', el).some(function (el) { return isVisible(el) ? el.focus() || true : el.blur(); });

                this.updateAria(el);
                changed && this.$update(el);
            }

        }

    };

    function toggleHeight(ref) {
        var isToggled = ref.isToggled;
        var duration = ref.duration;
        var initProps = ref.initProps;
        var hideProps = ref.hideProps;
        var transition = ref.transition;
        var _toggle = ref._toggle;

        return function (el, show) {

            var inProgress = Transition.inProgress(el);
            var inner = el.hasChildNodes ? toFloat(css(el.firstElementChild, 'marginTop')) + toFloat(css(el.lastElementChild, 'marginBottom')) : 0;
            var currentHeight = isVisible(el) ? height(el) + (inProgress ? 0 : inner) : 0;

            Transition.cancel(el);

            if (!isToggled(el)) {
                _toggle(el, true);
            }

            height(el, '');

            // Update child components first
            fastdom.flush();

            var endHeight = height(el) + (inProgress ? 0 : inner);
            height(el, currentHeight);

            return (show
                    ? Transition.start(el, assign({}, initProps, {overflow: 'hidden', height: endHeight}), Math.round(duration * (1 - currentHeight / endHeight)), transition)
                    : Transition.start(el, hideProps, Math.round(duration * (currentHeight / endHeight)), transition).then(function () { return _toggle(el, false); })
            ).then(function () { return css(el, initProps); });

        };
    }

    function toggleAnimation(ref) {
        var animation = ref.animation;
        var duration = ref.duration;
        var origin = ref.origin;
        var _toggle = ref._toggle;

        return function (el, show) {

            Animation.cancel(el);

            if (show) {
                _toggle(el, true);
                return Animation.in(el, animation[0], duration, origin);
            }

            return Animation.out(el, animation[1] || animation[0], duration, origin).then(function () { return _toggle(el, false); });
        };
    }

    var Accordion = {

        mixins: [Class, Togglable],

        props: {
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            transition: String
        },

        data: {
            targets: '> *',
            active: false,
            animation: [true],
            collapsible: true,
            multiple: false,
            clsOpen: 'uk-open',
            toggle: '> .uk-accordion-title',
            content: '> .uk-accordion-content',
            transition: 'ease'
        },

        computed: {

            items: function(ref, $el) {
                var targets = ref.targets;

                return $$(targets, $el);
            }

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return ((this.targets) + " " + (this.$props.toggle));
                },

                handler: function(e) {
                    e.preventDefault();
                    this.toggle(index($$(((this.targets) + " " + (this.$props.toggle)), this.$el), e.current));
                }

            }

        ],

        connected: function() {

            if (this.active === false) {
                return;
            }

            var active = this.items[Number(this.active)];
            if (active && !hasClass(active, this.clsOpen)) {
                this.toggle(active, false);
            }
        },

        update: function() {
            var this$1 = this;


            this.items.forEach(function (el) { return this$1._toggle($(this$1.content, el), hasClass(el, this$1.clsOpen)); });

            var active = !this.collapsible && !hasClass(this.items, this.clsOpen) && this.items[0];
            if (active) {
                this.toggle(active, false);
            }
        },

        methods: {

            toggle: function(item, animate) {
                var this$1 = this;


                var index = getIndex(item, this.items);
                var active = filter(this.items, ("." + (this.clsOpen)));

                item = this.items[index];

                item && [item]
                    .concat(!this.multiple && !includes(active, item) && active || [])
                    .forEach(function (el) {

                        var isItem = el === item;
                        var state = isItem && !hasClass(el, this$1.clsOpen);

                        if (!state && isItem && !this$1.collapsible && active.length < 2) {
                            return;
                        }

                        toggleClass(el, this$1.clsOpen, state);

                        var content = el._wrapper ? el._wrapper.firstElementChild : $(this$1.content, el);

                        if (!el._wrapper) {
                            el._wrapper = wrapAll(content, '<div>');
                            attr(el._wrapper, 'hidden', state ? '' : null);
                        }

                        this$1._toggle(content, true);
                        this$1.toggleElement(el._wrapper, state, animate).then(function () {

                            if (hasClass(el, this$1.clsOpen) !== state) {
                                return;
                            }

                            if (!state) {
                                this$1._toggle(content, false);
                            }

                            el._wrapper = null;
                            unwrap(content);

                        });

                    });
            }

        }

    };

    var Alert = {

        mixins: [Class, Togglable],

        args: 'animation',

        props: {
            close: String
        },

        data: {
            animation: [true],
            selClose: '.uk-alert-close',
            duration: 150,
            hideProps: assign({opacity: 0}, Togglable.data.hideProps)
        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return this.selClose;
                },

                handler: function(e) {
                    e.preventDefault();
                    this.close();
                }

            }

        ],

        methods: {

            close: function() {
                var this$1 = this;

                this.toggleElement(this.$el).then(function () { return this$1.$destroy(true); });
            }

        }

    };

    function Core (UIkit) {

        ready(function () {

            UIkit.update();
            on(window, 'load resize', function () { return UIkit.update(null, 'resize'); });
            on(document, 'loadedmetadata load', function (ref) {
                var target = ref.target;

                return UIkit.update(target, 'resize');
            }, true);

            // throttle `scroll` event (Safari triggers multiple `scroll` events per frame)
            var pending;
            on(window, 'scroll', function (e) {

                if (pending) {
                    return;
                }
                pending = true;
                fastdom.write(function () { return pending = false; });

                var target = e.target;
                UIkit.update(target.nodeType !== 1 ? document.body : target, e.type);

            }, {passive: true, capture: true});

            var started = 0;
            on(document, 'animationstart', function (ref) {
                var target = ref.target;

                if ((css(target, 'animationName') || '').match(/^uk-.*(left|right)/)) {

                    started++;
                    css(document.body, 'overflowX', 'hidden');
                    setTimeout(function () {
                        if (!--started) {
                            css(document.body, 'overflowX', '');
                        }
                    }, toMs(css(target, 'animationDuration')) + 100);
                }
            }, true);

            var off;
            on(document, pointerDown, function (e) {

                off && off();

                if (!isTouch(e)) {
                    return;
                }

                // Handle Swipe Gesture
                var pos = getEventPos(e);
                var target = 'tagName' in e.target ? e.target : e.target.parentNode;
                off = once(document, (pointerUp + " " + pointerCancel), function (e) {

                    var ref = getEventPos(e);
                    var x = ref.x;
                    var y = ref.y;

                    // swipe
                    if (target && x && Math.abs(pos.x - x) > 100 || y && Math.abs(pos.y - y) > 100) {

                        setTimeout(function () {
                            trigger(target, 'swipe');
                            trigger(target, ("swipe" + (swipeDirection(pos.x, pos.y, x, y))));
                        });

                    }

                });

                // Force click event anywhere on iOS < 13
                if (pointerDown === 'touchstart') {
                    css(document.body, 'cursor', 'pointer');
                    once(document, (pointerUp + " " + pointerCancel), function () { return setTimeout(function () { return css(document.body, 'cursor', ''); }
                        , 50); }
                    );
                }

            }, {passive: true});

        });

    }

    function swipeDirection(x1, y1, x2, y2) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2)
            ? x1 - x2 > 0
                ? 'Left'
                : 'Right'
            : y1 - y2 > 0
                ? 'Up'
                : 'Down';
    }

    var Video = {

        args: 'autoplay',

        props: {
            automute: Boolean,
            autoplay: Boolean
        },

        data: {
            automute: false,
            autoplay: true
        },

        computed: {

            inView: function(ref) {
                var autoplay = ref.autoplay;

                return autoplay === 'inview';
            }

        },

        connected: function() {

            if (this.inView && !hasAttr(this.$el, 'preload')) {
                this.$el.preload = 'none';
            }

            this.player = new Player(this.$el);

            if (this.automute) {
                this.player.mute();
            }

        },

        update: {

            read: function() {

                return !this.player
                    ? false
                    : {
                        visible: isVisible(this.$el) && css(this.$el, 'visibility') !== 'hidden',
                        inView: this.inView && isInView(this.$el)
                    };
            },

            write: function(ref) {
                var visible = ref.visible;
                var inView = ref.inView;


                if (!visible || this.inView && !inView) {
                    this.player.pause();
                } else if (this.autoplay === true || this.inView && inView) {
                    this.player.play();
                }

            },

            events: ['resize', 'scroll']

        }

    };

    var Cover = {

        mixins: [Class, Video],

        props: {
            width: Number,
            height: Number
        },

        data: {
            automute: true
        },

        update: {

            read: function() {

                var el = this.$el;
                var ref = el.parentNode;
                var height = ref.offsetHeight;
                var width = ref.offsetWidth;
                var dim = Dimensions.cover(
                    {
                        width: this.width || el.naturalWidth || el.videoWidth || el.clientWidth,
                        height: this.height || el.naturalHeight || el.videoHeight || el.clientHeight
                    },
                    {
                        width: width + (width % 2 ? 1 : 0),
                        height: height + (height % 2 ? 1 : 0)
                    }
                );

                if (!dim.width || !dim.height) {
                    return false;
                }

                return dim;
            },

            write: function(ref) {
                var height = ref.height;
                var width = ref.width;

                css(this.$el, {height: height, width: width});
            },

            events: ['resize']

        }

    };

    var Position = {

        props: {
            pos: String,
            offset: null,
            flip: Boolean,
            clsPos: String
        },

        data: {
            pos: ("bottom-" + (!isRtl ? 'left' : 'right')),
            flip: true,
            offset: false,
            clsPos: ''
        },

        computed: {

            pos: function(ref) {
                var pos = ref.pos;

                return (pos + (!includes(pos, '-') ? '-center' : '')).split('-');
            },

            dir: function() {
                return this.pos[0];
            },

            align: function() {
                return this.pos[1];
            }

        },

        methods: {

            positionAt: function(element, target, boundary) {

                removeClasses(element, ((this.clsPos) + "-(top|bottom|left|right)(-[a-z]+)?"));
                css(element, {top: '', left: ''});

                var node;
                var ref = this;
                var offset$1 = ref.offset;
                var axis = this.getAxis();

                if (!isNumeric(offset$1)) {
                    node = $(offset$1);
                    offset$1 = node
                        ? offset(node)[axis === 'x' ? 'left' : 'top'] - offset(target)[axis === 'x' ? 'right' : 'bottom']
                        : 0;
                }

                var ref$1 = positionAt(
                    element,
                    target,
                    axis === 'x' ? ((flipPosition(this.dir)) + " " + (this.align)) : ((this.align) + " " + (flipPosition(this.dir))),
                    axis === 'x' ? ((this.dir) + " " + (this.align)) : ((this.align) + " " + (this.dir)),
                    axis === 'x' ? ("" + (this.dir === 'left' ? -offset$1 : offset$1)) : (" " + (this.dir === 'top' ? -offset$1 : offset$1)),
                    null,
                    this.flip,
                    boundary
                ).target;
                var x = ref$1.x;
                var y = ref$1.y;

                this.dir = axis === 'x' ? x : y;
                this.align = axis === 'x' ? y : x;

                toggleClass(element, ((this.clsPos) + "-" + (this.dir) + "-" + (this.align)), this.offset === false);

            },

            getAxis: function() {
                return this.dir === 'top' || this.dir === 'bottom' ? 'y' : 'x';
            }

        }

    };

    var active;

    var Drop = {

        mixins: [Position, Togglable],

        args: 'pos',

        props: {
            mode: 'list',
            toggle: Boolean,
            boundary: Boolean,
            boundaryAlign: Boolean,
            delayShow: Number,
            delayHide: Number,
            clsDrop: String
        },

        data: {
            mode: ['click', 'hover'],
            toggle: '- *',
            boundary: window,
            boundaryAlign: false,
            delayShow: 0,
            delayHide: 800,
            clsDrop: false,
            hoverIdle: 200,
            animation: ['uk-animation-fade'],
            cls: 'uk-open'
        },

        computed: {

            boundary: function(ref, $el) {
                var boundary = ref.boundary;

                return query(boundary, $el);
            },

            clsDrop: function(ref) {
                var clsDrop = ref.clsDrop;

                return clsDrop || ("uk-" + (this.$options.name));
            },

            clsPos: function() {
                return this.clsDrop;
            }

        },

        created: function() {
            this.tracker = new MouseTracker();
        },

        connected: function() {

            addClass(this.$el, this.clsDrop);

            var ref = this.$props;
            var toggle = ref.toggle;
            this.toggle = toggle && this.$create('toggle', query(toggle, this.$el), {
                target: this.$el,
                mode: this.mode
            });

            !this.toggle && trigger(this.$el, 'updatearia');

        },

        events: [


            {

                name: 'click',

                delegate: function() {
                    return ("." + (this.clsDrop) + "-close");
                },

                handler: function(e) {
                    e.preventDefault();
                    this.hide(false);
                }

            },

            {

                name: 'click',

                delegate: function() {
                    return 'a[href^="#"]';
                },

                handler: function(ref) {
                    var defaultPrevented = ref.defaultPrevented;
                    var hash = ref.current.hash;

                    if (!defaultPrevented && hash && !within(hash, this.$el)) {
                        this.hide(false);
                    }
                }

            },

            {

                name: 'beforescroll',

                handler: function() {
                    this.hide(false);
                }

            },

            {

                name: 'toggle',

                self: true,

                handler: function(e, toggle) {

                    e.preventDefault();

                    if (this.isToggled()) {
                        this.hide(false);
                    } else {
                        this.show(toggle, false);
                    }
                }

            },

            {

                name: pointerEnter,

                filter: function() {
                    return includes(this.mode, 'hover');
                },

                handler: function(e) {

                    if (isTouch(e)) {
                        return;
                    }

                    if (active
                        && active !== this
                        && active.toggle
                        && includes(active.toggle.mode, 'hover')
                        && !within(e.target, active.toggle.$el)
                        && !pointInRect({x: e.pageX, y: e.pageY}, offset(active.$el))
                    ) {
                        active.hide(false);
                    }

                    e.preventDefault();
                    this.show(this.toggle);
                }

            },

            {

                name: 'toggleshow',

                handler: function(e, toggle) {

                    if (toggle && !includes(toggle.target, this.$el)) {
                        return;
                    }

                    e.preventDefault();
                    this.show(toggle || this.toggle);
                }

            },

            {

                name: ("togglehide " + pointerLeave),

                handler: function(e, toggle) {

                    if (isTouch(e) || toggle && !includes(toggle.target, this.$el)) {
                        return;
                    }

                    e.preventDefault();

                    if (this.toggle && includes(this.toggle.mode, 'hover')) {
                        this.hide();
                    }
                }

            },

            {

                name: 'beforeshow',

                self: true,

                handler: function() {
                    this.clearTimers();
                    Animation.cancel(this.$el);
                    this.position();
                }

            },

            {

                name: 'show',

                self: true,

                handler: function() {
                    var this$1 = this;

                    this.tracker.init();
                    trigger(this.$el, 'updatearia');

                    // If triggered from an click event handler, delay adding the click handler
                    var off = delayOn(document, 'click', function (ref) {
                        var defaultPrevented = ref.defaultPrevented;
                        var target = ref.target;

                        if (!defaultPrevented && !within(target, this$1.$el) && !(this$1.toggle && within(target, this$1.toggle.$el))) {
                            this$1.hide(false);
                        }
                    });

                    once(this.$el, 'hide', off, {self: true});
                }

            },

            {

                name: 'beforehide',

                self: true,

                handler: function() {
                    this.clearTimers();
                }

            },

            {

                name: 'hide',

                handler: function(ref) {
                    var target = ref.target;


                    if (this.$el !== target) {
                        active = active === null && within(target, this.$el) && this.isToggled() ? this : active;
                        return;
                    }

                    active = this.isActive() ? null : active;
                    trigger(this.$el, 'updatearia');
                    this.tracker.cancel();
                }

            },

            {

                name: 'updatearia',

                self: true,

                handler: function(e, toggle) {

                    e.preventDefault();

                    this.updateAria(this.$el);

                    if (toggle || this.toggle) {
                        attr((toggle || this.toggle).$el, 'aria-expanded', this.isToggled());
                        toggleClass(this.toggle.$el, this.cls, this.isToggled());
                    }
                }
            }

        ],

        update: {

            write: function() {

                if (this.isToggled() && !Animation.inProgress(this.$el)) {
                    this.position();
                }

            },

            events: ['resize']

        },

        methods: {

            show: function(toggle, delay) {
                var this$1 = this;
                if ( delay === void 0 ) delay = true;


                var show = function () { return !this$1.isToggled() && this$1.toggleElement(this$1.$el, true); };
                var tryShow = function () {

                    this$1.toggle = toggle || this$1.toggle;

                    this$1.clearTimers();

                    if (this$1.isActive()) {
                        return;
                    } else if (delay && active && active !== this$1 && active.isDelaying) {
                        this$1.showTimer = setTimeout(this$1.show, 10);
                        return;
                    } else if (this$1.isParentOf(active)) {

                        if (active.hideTimer) {
                            active.hide(false);
                        } else {
                            return;
                        }

                    } else if (this$1.isChildOf(active)) {

                        active.clearTimers();

                    } else if (active && !this$1.isChildOf(active) && !this$1.isParentOf(active)) {

                        var prev;
                        while (active && active !== prev && !this$1.isChildOf(active)) {
                            prev = active;
                            active.hide(false);
                        }

                    }

                    if (delay && this$1.delayShow) {
                        this$1.showTimer = setTimeout(show, this$1.delayShow);
                    } else {
                        show();
                    }

                    active = this$1;
                };

                if (toggle && this.toggle && toggle.$el !== this.toggle.$el) {

                    once(this.$el, 'hide', tryShow);
                    this.hide(false);

                } else {
                    tryShow();
                }
            },

            hide: function(delay) {
                var this$1 = this;
                if ( delay === void 0 ) delay = true;


                var hide = function () { return this$1.toggleNow(this$1.$el, false); };

                this.clearTimers();

                this.isDelaying = this.tracker.movesTo(this.$el);

                if (delay && this.isDelaying) {
                    this.hideTimer = setTimeout(this.hide, this.hoverIdle);
                } else if (delay && this.delayHide) {
                    this.hideTimer = setTimeout(hide, this.delayHide);
                } else {
                    hide();
                }
            },

            clearTimers: function() {
                clearTimeout(this.showTimer);
                clearTimeout(this.hideTimer);
                this.showTimer = null;
                this.hideTimer = null;
                this.isDelaying = false;
            },

            isActive: function() {
                return active === this;
            },

            isChildOf: function(drop) {
                return drop && drop !== this && within(this.$el, drop.$el);
            },

            isParentOf: function(drop) {
                return drop && drop !== this && within(drop.$el, this.$el);
            },

            position: function() {

                removeClasses(this.$el, ((this.clsDrop) + "-(stack|boundary)"));
                css(this.$el, {top: '', left: '', display: 'block'});
                toggleClass(this.$el, ((this.clsDrop) + "-boundary"), this.boundaryAlign);

                var boundary = offset(this.boundary);
                var alignTo = this.boundaryAlign ? boundary : offset(this.toggle.$el);

                if (this.align === 'justify') {
                    var prop = this.getAxis() === 'y' ? 'width' : 'height';
                    css(this.$el, prop, alignTo[prop]);
                } else if (this.$el.offsetWidth > Math.max(boundary.right - alignTo.left, alignTo.right - boundary.left)) {
                    addClass(this.$el, ((this.clsDrop) + "-stack"));
                }

                this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary);

                css(this.$el, 'display', '');

            }

        }

    };

    function delayOn(el, type, fn) {
        var off = once(el, type, function () { return off = on(el, type, fn); }
        , true);
        return function () { return off(); };
    }

    var Dropdown = {

        extends: Drop

    };

    var FormCustom = {

        mixins: [Class],

        args: 'target',

        props: {
            target: Boolean
        },

        data: {
            target: false
        },

        computed: {

            input: function(_, $el) {
                return $(selInput, $el);
            },

            state: function() {
                return this.input.nextElementSibling;
            },

            target: function(ref, $el) {
                var target = ref.target;

                return target && (target === true
                    && this.input.parentNode === $el
                    && this.input.nextElementSibling
                    || query(target, $el));
            }

        },

        update: function() {

            var ref = this;
            var target = ref.target;
            var input = ref.input;

            if (!target) {
                return;
            }

            var option;
            var prop = isInput(target) ? 'value' : 'textContent';
            var prev = target[prop];
            var value = input.files && input.files[0]
                ? input.files[0].name
                : matches(input, 'select') && (option = $$('option', input).filter(function (el) { return el.selected; })[0]) // eslint-disable-line prefer-destructuring
                    ? option.textContent
                    : input.value;

            if (prev !== value) {
                target[prop] = value;
            }

        },

        events: [

            {
                name: 'change',

                handler: function() {
                    this.$emit();
                }
            },

            {
                name: 'reset',

                el: function() {
                    return closest(this.$el, 'form');
                },

                handler: function() {
                    this.$emit();
                }
            }

        ]

    };

    // Deprecated
    var Gif = {

        update: {

            read: function(data) {

                var inview = isInView(this.$el);

                if (!inview || data.isInView === inview) {
                    return false;
                }

                data.isInView = inview;
            },

            write: function() {
                this.$el.src = this.$el.src;
            },

            events: ['scroll', 'resize']
        }

    };

    var Margin = {

        props: {
            margin: String,
            firstColumn: Boolean
        },

        data: {
            margin: 'uk-margin-small-top',
            firstColumn: 'uk-first-column'
        },

        update: {

            read: function(data) {

                var items = this.$el.children;
                var rows = [[]];

                if (!items.length || !isVisible(this.$el)) {
                    return data.rows = rows;
                }

                data.rows = getRows(items);
                data.stacks = !data.rows.some(function (row) { return row.length > 1; });

            },

            write: function(ref) {
                var this$1 = this;
                var rows = ref.rows;


                rows.forEach(function (row, i) { return row.forEach(function (el, j) {
                        toggleClass(el, this$1.margin, i !== 0);
                        toggleClass(el, this$1.firstColumn, j === 0);
                    }); }
                );

            },

            events: ['resize']

        }

    };

    function getRows(items) {
        var rows = [[]];

        for (var i = 0; i < items.length; i++) {

            var el = items[i];
            var dim = getOffset(el);

            if (!dim.height) {
                continue;
            }

            for (var j = rows.length - 1; j >= 0; j--) {

                var row = rows[j];

                if (!row[0]) {
                    row.push(el);
                    break;
                }

                var leftDim = (void 0);
                if (row[0].offsetParent === el.offsetParent) {
                    leftDim = getOffset(row[0]);
                } else {
                    dim = getOffset(el, true);
                    leftDim = getOffset(row[0], true);
                }

                if (dim.top >= leftDim.bottom - 1 && dim.top !== leftDim.top) {
                    rows.push([el]);
                    break;
                }

                if (dim.bottom > leftDim.top) {

                    if (dim.left < leftDim.left && !isRtl) {
                        row.unshift(el);
                        break;
                    }

                    row.push(el);
                    break;
                }

                if (j === 0) {
                    rows.unshift([el]);
                    break;
                }

            }

        }

        return rows;

    }

    function getOffset(element, offset) {
        var assign;

        if ( offset === void 0 ) offset = false;

        var offsetTop = element.offsetTop;
        var offsetLeft = element.offsetLeft;
        var offsetHeight = element.offsetHeight;

        if (offset) {
            (assign = offsetPosition(element), offsetTop = assign[0], offsetLeft = assign[1]);
        }

        return {
            top: offsetTop,
            left: offsetLeft,
            height: offsetHeight,
            bottom: offsetTop + offsetHeight
        };
    }

    var Grid = {

        extends: Margin,

        mixins: [Class],

        name: 'grid',

        props: {
            masonry: Boolean,
            parallax: Number
        },

        data: {
            margin: 'uk-grid-margin',
            clsStack: 'uk-grid-stack',
            masonry: false,
            parallax: 0
        },

        computed: {

            length: function(_, $el) {
                return $el.children.length;
            },

            parallax: function(ref) {
                var parallax = ref.parallax;

                return parallax && this.length ? Math.abs(parallax) : '';
            }

        },

        connected: function() {
            this.masonry && addClass(this.$el, 'uk-flex-top uk-flex-wrap-top');
        },

        update: [

            {

                read: function(ref) {
                    var rows = ref.rows;


                    if (this.masonry || this.parallax) {
                        rows = rows.map(function (elements) { return sortBy(elements, 'offsetLeft'); });

                        if (isRtl) {
                            rows.map(function (row) { return row.reverse(); });
                        }

                    }

                    var transitionInProgress = rows.some(function (elements) { return elements.some(Transition.inProgress); });
                    var translates = false;
                    var elHeight = '';

                    if (this.masonry && this.length) {

                        var height = 0;

                        translates = rows.reduce(function (translates, row, i) {

                            translates[i] = row.map(function (_, j) { return i === 0 ? 0 : toFloat(translates[i - 1][j]) + (height - toFloat(rows[i - 1][j] && rows[i - 1][j].offsetHeight)); });
                            height = row.reduce(function (height, el) { return Math.max(height, el.offsetHeight); }, 0);

                            return translates;

                        }, []);

                        elHeight = maxColumnHeight(rows) + getMarginTop(this.$el, this.margin) * (rows.length - 1);

                    }

                    var padding = this.parallax && getPaddingBottom(this.parallax, rows, translates);

                    return {padding: padding, rows: rows, translates: translates, height: !transitionInProgress ? elHeight : false};

                },

                write: function(ref) {
                    var stacks = ref.stacks;
                    var height = ref.height;
                    var padding = ref.padding;


                    toggleClass(this.$el, this.clsStack, stacks);

                    css(this.$el, 'paddingBottom', padding);
                    height !== false && css(this.$el, 'height', height);

                },

                events: ['resize']

            },

            {

                read: function(ref) {
                    var height$1 = ref.height;

                    return {
                        scrolled: this.parallax
                            ? scrolledOver(this.$el, height$1 ? height$1 - height(this.$el) : 0) * this.parallax
                            : false
                    };
                },

                write: function(ref) {
                    var rows = ref.rows;
                    var scrolled = ref.scrolled;
                    var translates = ref.translates;


                    if (scrolled === false && !translates) {
                        return;
                    }

                    rows.forEach(function (row, i) { return row.forEach(function (el, j) { return css(el, 'transform', !scrolled && !translates ? '' : ("translateY(" + ((translates && -translates[i][j]) + (scrolled ? j % 2 ? scrolled : scrolled / 8 : 0)) + "px)")); }
                        ); }
                    );

                },

                events: ['scroll', 'resize']

            }

        ]

    };

    function getPaddingBottom(distance, rows, translates) {
        var column = 0;
        var max = 0;
        var maxScrolled = 0;
        for (var i = rows.length - 1; i >= 0; i--) {
            for (var j = column; j < rows[i].length; j++) {
                var el = rows[i][j];
                var bottom = el.offsetTop + height(el) + (translates && -translates[i][j]);
                max = Math.max(max, bottom);
                maxScrolled = Math.max(maxScrolled, bottom + (j % 2 ? distance : distance / 8));
                column++;
            }
        }
        return maxScrolled - max;
    }

    function getMarginTop(root, cls) {

        var nodes = toNodes(root.children);
        var ref = nodes.filter(function (el) { return hasClass(el, cls); });
        var node = ref[0];

        return toFloat(node
            ? css(node, 'marginTop')
            : css(nodes[0], 'paddingLeft'));
    }

    function maxColumnHeight(rows) {
        return Math.max.apply(Math, rows.reduce(function (sum, row) {
            row.forEach(function (el, i) { return sum[i] = (sum[i] || 0) + el.offsetHeight; });
            return sum;
        }, []));
    }

    // IE 11 fix (min-height on a flex container won't apply to its flex items)
    var FlexBug = isIE ? {

        props: {
            selMinHeight: String
        },

        data: {
            selMinHeight: false,
            forceHeight: false
        },

        computed: {

            elements: function(ref, $el) {
                var selMinHeight = ref.selMinHeight;

                return selMinHeight ? $$(selMinHeight, $el) : [$el];
            }

        },

        update: [

            {

                read: function() {
                    css(this.elements, 'height', '');
                },

                order: -5,

                events: ['resize']

            },

            {

                write: function() {
                    var this$1 = this;

                    this.elements.forEach(function (el) {
                        var height = toFloat(css(el, 'minHeight'));
                        if (height && (this$1.forceHeight || Math.round(height + boxModelAdjust('height', el, 'content-box')) >= el.offsetHeight)) {
                            css(el, 'height', height);
                        }
                    });
                },

                order: 5,

                events: ['resize']

            }

        ]

    } : {};

    var HeightMatch = {

        mixins: [FlexBug],

        args: 'target',

        props: {
            target: String,
            row: Boolean
        },

        data: {
            target: '> *',
            row: true,
            forceHeight: true
        },

        computed: {

            elements: function(ref, $el) {
                var target = ref.target;

                return $$(target, $el);
            }

        },

        update: {

            read: function() {
                return {
                    rows: (this.row ? getRows(this.elements) : [this.elements]).map(match)
                };
            },

            write: function(ref) {
                var rows = ref.rows;

                rows.forEach(function (ref) {
                        var heights = ref.heights;
                        var elements = ref.elements;

                        return elements.forEach(function (el, i) { return css(el, 'minHeight', heights[i]); }
                    );
                }
                );
            },

            events: ['resize']

        }

    };

    function match(elements) {
        var assign;


        if (elements.length < 2) {
            return {heights: [''], elements: elements};
        }

        var ref = getHeights(elements);
        var heights = ref.heights;
        var max = ref.max;
        var hasMinHeight = elements.some(function (el) { return el.style.minHeight; });
        var hasShrunk = elements.some(function (el, i) { return !el.style.minHeight && heights[i] < max; });

        if (hasMinHeight && hasShrunk) {
            css(elements, 'minHeight', '');
            ((assign = getHeights(elements), heights = assign.heights, max = assign.max));
        }

        heights = elements.map(function (el, i) { return heights[i] === max && toFloat(el.style.minHeight).toFixed(2) !== max.toFixed(2) ? '' : max; }
        );

        return {heights: heights, elements: elements};
    }

    function getHeights(elements) {
        var heights = elements.map(function (el) { return offset(el).height - boxModelAdjust('height', el, 'content-box'); });
        var max = Math.max.apply(null, heights);

        return {heights: heights, max: max};
    }

    var HeightViewport = {

        mixins: [FlexBug],

        props: {
            expand: Boolean,
            offsetTop: Boolean,
            offsetBottom: Boolean,
            minHeight: Number
        },

        data: {
            expand: false,
            offsetTop: false,
            offsetBottom: false,
            minHeight: 0
        },

        update: {

            read: function(ref) {
                var prev = ref.minHeight;


                if (!isVisible(this.$el)) {
                    return false;
                }

                var minHeight = '';
                var box = boxModelAdjust('height', this.$el, 'content-box');

                if (this.expand) {

                    this.$el.dataset.heightExpand = '';

                    if ($('[data-height-expand]') !== this.$el) {
                        return false;
                    }

                    minHeight = height(window) - (offsetHeight(document.documentElement) - offsetHeight(this.$el)) - box || '';

                } else {

                    // on mobile devices (iOS and Android) window.innerHeight !== 100vh
                    minHeight = 'calc(100vh';

                    if (this.offsetTop) {

                        var ref$1 = offset(this.$el);
                        var top = ref$1.top;
                        minHeight += top > 0 && top < height(window) / 2 ? (" - " + top + "px") : '';

                    }

                    if (this.offsetBottom === true) {

                        minHeight += " - " + (offsetHeight(this.$el.nextElementSibling)) + "px";

                    } else if (isNumeric(this.offsetBottom)) {

                        minHeight += " - " + (this.offsetBottom) + "vh";

                    } else if (this.offsetBottom && endsWith(this.offsetBottom, 'px')) {

                        minHeight += " - " + (toFloat(this.offsetBottom)) + "px";

                    } else if (isString(this.offsetBottom)) {

                        minHeight += " - " + (offsetHeight(query(this.offsetBottom, this.$el))) + "px";

                    }

                    minHeight += (box ? (" - " + box + "px") : '') + ")";

                }

                return {minHeight: minHeight, prev: prev};
            },

            write: function(ref) {
                var minHeight = ref.minHeight;
                var prev = ref.prev;


                css(this.$el, {minHeight: minHeight});

                if (minHeight !== prev) {
                    this.$update(this.$el, 'resize');
                }

                if (this.minHeight && toFloat(css(this.$el, 'minHeight')) < this.minHeight) {
                    css(this.$el, 'minHeight', this.minHeight);
                }

            },

            events: ['resize']

        }

    };

    function offsetHeight(el) {
        return el && offset(el).height || 0;
    }

    var Svg = {

        args: 'src',

        props: {
            id: Boolean,
            icon: String,
            src: String,
            style: String,
            width: Number,
            height: Number,
            ratio: Number,
            class: String,
            strokeAnimation: Boolean,
            focusable: Boolean, // IE 11
            attributes: 'list'
        },

        data: {
            ratio: 1,
            include: ['style', 'class', 'focusable'],
            class: '',
            strokeAnimation: false
        },

        beforeConnect: function() {
            var this$1 = this;
            var assign;


            this.class += ' uk-svg';

            if (!this.icon && includes(this.src, '#')) {

                var parts = this.src.split('#');

                if (parts.length > 1) {
                    (assign = parts, this.src = assign[0], this.icon = assign[1]);
                }
            }

            this.svg = this.getSvg().then(function (el) {
                this$1.applyAttributes(el);
                return this$1.svgEl = insertSVG(el, this$1.$el);
            }, noop);

        },

        disconnected: function() {
            var this$1 = this;


            if (isVoidElement(this.$el)) {
                attr(this.$el, 'hidden', null);
            }

            if (this.svg) {
                this.svg.then(function (svg) { return (!this$1._connected || svg !== this$1.svgEl) && remove(svg); }, noop);
            }

            this.svg = this.svgEl = null;

        },

        update: {

            read: function() {
                return !!(this.strokeAnimation && this.svgEl && isVisible(this.svgEl));
            },

            write: function() {
                applyAnimation(this.svgEl);
            },

            type: ['resize']

        },

        methods: {

            getSvg: function() {
                var this$1 = this;

                return loadSVG(this.src).then(function (svg) { return parseSVG(svg, this$1.icon) || Promise.reject('SVG not found.'); }
                );
            },

            applyAttributes: function(el) {
                var this$1 = this;


                for (var prop in this.$options.props) {
                    if (this[prop] && includes(this.include, prop)) {
                        attr(el, prop, this[prop]);
                    }
                }

                for (var attribute in this.attributes) {
                    var ref = this.attributes[attribute].split(':', 2);
                    var prop$1 = ref[0];
                    var value = ref[1];
                    attr(el, prop$1, value);
                }

                if (!this.id) {
                    removeAttr(el, 'id');
                }

                var props = ['width', 'height'];
                var dimensions = [this.width, this.height];

                if (!dimensions.some(function (val) { return val; })) {
                    dimensions = props.map(function (prop) { return attr(el, prop); });
                }

                var viewBox = attr(el, 'viewBox');
                if (viewBox && !dimensions.some(function (val) { return val; })) {
                    dimensions = viewBox.split(' ').slice(2);
                }

                dimensions.forEach(function (val, i) {
                    val = (val | 0) * this$1.ratio;
                    val && attr(el, props[i], val);

                    if (val && !dimensions[i ^ 1]) {
                        removeAttr(el, props[i ^ 1]);
                    }
                });

                attr(el, 'data-svg', this.icon || this.src);

            }

        }

    };

    var svgs = {};

    function loadSVG(src) {

        if (svgs[src]) {
            return svgs[src];
        }

        return svgs[src] = new Promise(function (resolve, reject) {

            if (!src) {
                reject();
                return;
            }

            if (startsWith(src, 'data:')) {
                resolve(decodeURIComponent(src.split(',')[1]));
            } else {

                ajax(src).then(
                    function (xhr) { return resolve(xhr.response); },
                    function () { return reject('SVG not found.'); }
                );

            }

        });
    }

    function parseSVG(svg, icon) {

        if (icon && includes(svg, '<symbol')) {
            svg = parseSymbols(svg, icon) || svg;
        }

        svg = $(svg.substr(svg.indexOf('<svg')));
        return svg && svg.hasChildNodes() && svg;
    }

    var symbolRe = /<symbol(.*?id=(['"])(.*?)\2[^]*?<\/)symbol>/g;
    var symbols = {};

    function parseSymbols(svg, icon) {

        if (!symbols[svg]) {

            symbols[svg] = {};

            var match;
            while ((match = symbolRe.exec(svg))) {
                symbols[svg][match[3]] = "<svg xmlns=\"http://www.w3.org/2000/svg\"" + (match[1]) + "svg>";
            }

            symbolRe.lastIndex = 0;

        }

        return symbols[svg][icon];
    }

    function applyAnimation(el) {

        var length = getMaxPathLength(el);

        if (length) {
            el.style.setProperty('--uk-animation-stroke', length);
        }

    }

    function getMaxPathLength(el) {
        return Math.ceil(Math.max.apply(Math, $$('[stroke]', el).map(function (stroke) { return stroke.getTotalLength && stroke.getTotalLength() || 0; }
        ).concat([0])));
    }

    function insertSVG(el, root) {
        if (isVoidElement(root) || root.tagName === 'CANVAS') {

            attr(root, 'hidden', true);

            var next = root.nextElementSibling;
            return equals(el, next)
                ? next
                : after(root, el);

        } else {

            var last = root.lastElementChild;
            return equals(el, last)
                ? last
                : append(root, el);

        }
    }

    function equals(el, other) {
        return attr(el, 'data-svg') === attr(other, 'data-svg');
    }

    var closeIcon = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"1\" y1=\"1\" x2=\"13\" y2=\"13\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13\" y1=\"1\" x2=\"1\" y2=\"13\"/></svg>";

    var closeLarge = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"1\" y1=\"1\" x2=\"19\" y2=\"19\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"19\" y1=\"1\" x2=\"1\" y2=\"19\"/></svg>";

    var marker = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"9\" y=\"4\" width=\"1\" height=\"11\"/><rect x=\"4\" y=\"9\" width=\"11\" height=\"1\"/></svg>";

    var navbarToggleIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"9\" width=\"20\" height=\"2\"/><rect y=\"3\" width=\"20\" height=\"2\"/><rect y=\"15\" width=\"20\" height=\"2\"/></svg>";

    var overlayIcon = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"19\" y=\"0\" width=\"1\" height=\"40\"/><rect x=\"0\" y=\"19\" width=\"40\" height=\"1\"/></svg>";

    var paginationNext = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 6 6 1 11\"/></svg>";

    var paginationPrevious = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"6 1 1 6 6 11\"/></svg>";

    var searchIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"/></svg>";

    var searchLarge = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" cx=\"17.5\" cy=\"17.5\" r=\"16.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" x1=\"38\" y1=\"39\" x2=\"29\" y2=\"30\"/></svg>";

    var searchNavbar = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10.5\" cy=\"10.5\" r=\"9.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"23\" y1=\"23\" x2=\"17\" y2=\"17\"/></svg>";

    var slidenavNext = "<svg width=\"14px\" height=\"24px\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"1.225,23 12.775,12 1.225,1 \"/></svg>";

    var slidenavNextLarge = "<svg width=\"25px\" height=\"40px\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"4.002,38.547 22.527,20.024 4,1.5 \"/></svg>";

    var slidenavPrevious = "<svg width=\"14px\" height=\"24px\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"12.775,1 1.225,12 12.775,23 \"/></svg>";

    var slidenavPreviousLarge = "<svg width=\"25px\" height=\"40px\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"20.527,1.5 2,20.024 20.525,38.547 \"/></svg>";

    var spinner = "<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" cx=\"15\" cy=\"15\" r=\"14\"/></svg>";

    var totop = "<svg width=\"18\" height=\"10\" viewBox=\"0 0 18 10\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 9 9 1 17 9 \"/></svg>";

    var parsed = {};
    var icons = {
        spinner: spinner,
        totop: totop,
        marker: marker,
        'close-icon': closeIcon,
        'close-large': closeLarge,
        'navbar-toggle-icon': navbarToggleIcon,
        'overlay-icon': overlayIcon,
        'pagination-next': paginationNext,
        'pagination-previous': paginationPrevious,
        'search-icon': searchIcon,
        'search-large': searchLarge,
        'search-navbar': searchNavbar,
        'slidenav-next': slidenavNext,
        'slidenav-next-large': slidenavNextLarge,
        'slidenav-previous': slidenavPrevious,
        'slidenav-previous-large': slidenavPreviousLarge
    };

    var Icon = {

        install: install,

        extends: Svg,

        args: 'icon',

        props: ['icon'],

        data: {
            include: ['focusable']
        },

        isIcon: true,

        beforeConnect: function() {
            addClass(this.$el, 'uk-icon');
        },

        methods: {

            getSvg: function() {

                var icon = getIcon(applyRtl(this.icon));

                if (!icon) {
                    return Promise.reject('Icon not found.');
                }

                return Promise.resolve(icon);
            }

        }

    };

    var IconComponent = {

        args: false,

        extends: Icon,

        data: function (vm) { return ({
            icon: hyphenate(vm.constructor.options.name)
        }); },

        beforeConnect: function() {
            addClass(this.$el, this.$name);
        }

    };

    var Slidenav = {

        extends: IconComponent,

        beforeConnect: function() {
            addClass(this.$el, 'uk-slidenav');
        },

        computed: {

            icon: function(ref, $el) {
                var icon = ref.icon;

                return hasClass($el, 'uk-slidenav-large')
                    ? (icon + "-large")
                    : icon;
            }

        }

    };

    var Search = {

        extends: IconComponent,

        computed: {

            icon: function(ref, $el) {
                var icon = ref.icon;

                return hasClass($el, 'uk-search-icon') && parents($el, '.uk-search-large').length
                    ? 'search-large'
                    : parents($el, '.uk-search-navbar').length
                        ? 'search-navbar'
                        : icon;
            }

        }

    };

    var Close = {

        extends: IconComponent,

        computed: {

            icon: function() {
                return ("close-" + (hasClass(this.$el, 'uk-close-large') ? 'large' : 'icon'));
            }

        }

    };

    var Spinner = {

        extends: IconComponent,

        connected: function() {
            var this$1 = this;

            this.svg.then(function (svg) { return this$1.ratio !== 1 && css($('circle', svg), 'strokeWidth', 1 / this$1.ratio); }, noop);
        }

    };

    function install(UIkit) {
        UIkit.icon.add = function (name, svg) {
            var obj;


            var added = isString(name) ? (( obj = {}, obj[name] = svg, obj )) : name;
            each(added, function (svg, name) {
                icons[name] = svg;
                delete parsed[name];
            });

            if (UIkit._initialized) {
                apply(document.body, function (el) { return each(UIkit.getComponents(el), function (cmp) {
                        cmp.$options.isIcon && cmp.icon in added && cmp.$reset();
                    }); }
                );
            }
        };
    }

    function getIcon(icon) {

        if (!icons[icon]) {
            return null;
        }

        if (!parsed[icon]) {
            parsed[icon] = $(icons[icon].trim());
        }

        return parsed[icon].cloneNode(true);
    }

    function applyRtl(icon) {
        return isRtl ? swap(swap(icon, 'left', 'right'), 'previous', 'next') : icon;
    }

    var Img = {

        args: 'dataSrc',

        props: {
            dataSrc: String,
            dataSrcset: Boolean,
            sizes: String,
            width: Number,
            height: Number,
            offsetTop: String,
            offsetLeft: String,
            target: String
        },

        data: {
            dataSrc: '',
            dataSrcset: false,
            sizes: false,
            width: false,
            height: false,
            offsetTop: '50vh',
            offsetLeft: 0,
            target: false
        },

        computed: {

            cacheKey: function(ref) {
                var dataSrc = ref.dataSrc;

                return ((this.$name) + "." + dataSrc);
            },

            width: function(ref) {
                var width = ref.width;
                var dataWidth = ref.dataWidth;

                return width || dataWidth;
            },

            height: function(ref) {
                var height = ref.height;
                var dataHeight = ref.dataHeight;

                return height || dataHeight;
            },

            sizes: function(ref) {
                var sizes = ref.sizes;
                var dataSizes = ref.dataSizes;

                return sizes || dataSizes;
            },

            isImg: function(_, $el) {
                return isImg($el);
            },

            target: {

                get: function(ref) {
                    var target = ref.target;

                    return [this.$el].concat(queryAll(target, this.$el));
                },

                watch: function() {
                    this.observe();
                }

            },

            offsetTop: function(ref) {
                var offsetTop = ref.offsetTop;

                return toPx(offsetTop, 'height');
            },

            offsetLeft: function(ref) {
                var offsetLeft = ref.offsetLeft;

                return toPx(offsetLeft, 'width');
            }

        },

        connected: function() {

            if (storage[this.cacheKey]) {
                setSrcAttrs(this.$el, storage[this.cacheKey] || this.dataSrc, this.dataSrcset, this.sizes);
            } else if (this.isImg && this.width && this.height) {
                setSrcAttrs(this.$el, getPlaceholderImage(this.width, this.height, this.sizes));
            }

            this.observer = new IntersectionObserver(this.load, {
                rootMargin: ((this.offsetTop) + "px " + (this.offsetLeft) + "px")
            });

            requestAnimationFrame(this.observe);

        },

        disconnected: function() {
            this.observer.disconnect();
        },

        update: {

            read: function(ref) {
                var this$1 = this;
                var image = ref.image;


                if (!image && document.readyState === 'complete') {
                    this.load(this.observer.takeRecords());
                }

                if (this.isImg) {
                    return false;
                }

                image && image.then(function (img) { return img && img.currentSrc !== '' && setSrcAttrs(this$1.$el, currentSrc(img)); });

            },

            write: function(data) {

                if (this.dataSrcset && window.devicePixelRatio !== 1) {

                    var bgSize = css(this.$el, 'backgroundSize');
                    if (bgSize.match(/^(auto\s?)+$/) || toFloat(bgSize) === data.bgSize) {
                        data.bgSize = getSourceSize(this.dataSrcset, this.sizes);
                        css(this.$el, 'backgroundSize', ((data.bgSize) + "px"));
                    }

                }

            },

            events: ['resize']

        },

        methods: {

            load: function(entries) {
                var this$1 = this;


                // Old chromium based browsers (UC Browser) did not implement `isIntersecting`
                if (!entries.some(function (entry) { return isUndefined(entry.isIntersecting) || entry.isIntersecting; })) {
                    return;
                }

                this._data.image = getImage(this.dataSrc, this.dataSrcset, this.sizes).then(function (img) {

                    setSrcAttrs(this$1.$el, currentSrc(img), img.srcset, img.sizes);
                    storage[this$1.cacheKey] = currentSrc(img);
                    return img;

                }, noop);

                this.observer.disconnect();
            },

            observe: function() {
                var this$1 = this;

                if (!this._data.image && this._connected) {
                    this.target.forEach(function (el) { return this$1.observer.observe(el); });
                }
            }

        }

    };

    function setSrcAttrs(el, src, srcset, sizes) {

        if (isImg(el)) {
            sizes && (el.sizes = sizes);
            srcset && (el.srcset = srcset);
            src && (el.src = src);
        } else if (src) {

            var change = !includes(el.style.backgroundImage, src);
            if (change) {
                css(el, 'backgroundImage', ("url(" + (escape(src)) + ")"));
                trigger(el, createEvent('load', false));
            }

        }

    }

    function getPlaceholderImage(width, height, sizes) {
        var assign;


        if (sizes) {
            ((assign = Dimensions.ratio({width: width, height: height}, 'width', toPx(sizesToPixel(sizes))), width = assign.width, height = assign.height));
        }

        return ("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + width + "\" height=\"" + height + "\"></svg>");
    }

    var sizesRe = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;
    function sizesToPixel(sizes) {
        var matches;

        sizesRe.lastIndex = 0;

        while ((matches = sizesRe.exec(sizes))) {
            if (!matches[1] || window.matchMedia(matches[1]).matches) {
                matches = evaluateSize(matches[2]);
                break;
            }
        }

        return matches || '100vw';
    }

    var sizeRe = /\d+(?:\w+|%)/g;
    var additionRe = /[+-]?(\d+)/g;
    function evaluateSize(size) {
        return startsWith(size, 'calc')
            ? size
                .substring(5, size.length - 1)
                .replace(sizeRe, function (size) { return toPx(size); })
                .replace(/ /g, '')
                .match(additionRe)
                .reduce(function (a, b) { return a + +b; }, 0)
            : size;
    }

    var srcSetRe = /\s+\d+w\s*(?:,|$)/g;
    function getSourceSize(srcset, sizes) {
        var srcSize = toPx(sizesToPixel(sizes));
        var descriptors = (srcset.match(srcSetRe) || []).map(toFloat).sort(function (a, b) { return a - b; });

        return descriptors.filter(function (size) { return size >= srcSize; })[0] || descriptors.pop() || '';
    }

    function isImg(el) {
        return el.tagName === 'IMG';
    }

    function currentSrc(el) {
        return el.currentSrc || el.src;
    }

    var key = '__test__';
    var storage;

    // workaround for Safari's private browsing mode and accessing sessionStorage in Blink
    try {
        storage = window.sessionStorage || {};
        storage[key] = 1;
        delete storage[key];
    } catch (e) {
        storage = {};
    }

    var Media = {

        props: {
            media: Boolean
        },

        data: {
            media: false
        },

        computed: {

            matchMedia: function() {
                var media = toMedia(this.media);
                return !media || window.matchMedia(media).matches;
            }

        }

    };

    function toMedia(value) {

        if (isString(value)) {
            if (value[0] === '@') {
                var name = "breakpoint-" + (value.substr(1));
                value = toFloat(getCssVar(name));
            } else if (isNaN(value)) {
                return value;
            }
        }

        return value && !isNaN(value) ? ("(min-width: " + value + "px)") : false;
    }

    var Leader = {

        mixins: [Class, Media],

        props: {
            fill: String
        },

        data: {
            fill: '',
            clsWrapper: 'uk-leader-fill',
            clsHide: 'uk-leader-hide',
            attrFill: 'data-fill'
        },

        computed: {

            fill: function(ref) {
                var fill = ref.fill;

                return fill || getCssVar('leader-fill-content');
            }

        },

        connected: function() {
            var assign;

            (assign = wrapInner(this.$el, ("<span class=\"" + (this.clsWrapper) + "\">")), this.wrapper = assign[0]);
        },

        disconnected: function() {
            unwrap(this.wrapper.childNodes);
        },

        update: {

            read: function(ref) {
                var changed = ref.changed;
                var width = ref.width;


                var prev = width;

                width = Math.floor(this.$el.offsetWidth / 2);

                return {
                    width: width,
                    fill: this.fill,
                    changed: changed || prev !== width,
                    hide: !this.matchMedia
                };
            },

            write: function(data) {

                toggleClass(this.wrapper, this.clsHide, data.hide);

                if (data.changed) {
                    data.changed = false;
                    attr(this.wrapper, this.attrFill, new Array(data.width).join(data.fill));
                }

            },

            events: ['resize']

        }

    };

    var Container = {

        props: {
            container: Boolean
        },

        data: {
            container: true
        },

        computed: {

            container: function(ref) {
                var container = ref.container;

                return container === true && this.$container || container && $(container);
            }

        }

    };

    var active$1 = [];

    var Modal = {

        mixins: [Class, Container, Togglable],

        props: {
            selPanel: String,
            selClose: String,
            escClose: Boolean,
            bgClose: Boolean,
            stack: Boolean
        },

        data: {
            cls: 'uk-open',
            escClose: true,
            bgClose: true,
            overlay: true,
            stack: false
        },

        computed: {

            panel: function(ref, $el) {
                var selPanel = ref.selPanel;

                return $(selPanel, $el);
            },

            transitionElement: function() {
                return this.panel;
            },

            bgClose: function(ref) {
                var bgClose = ref.bgClose;

                return bgClose && this.panel;
            }

        },

        beforeDisconnect: function() {
            if (this.isToggled()) {
                this.toggleNow(this.$el, false);
            }
        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return this.selClose;
                },

                handler: function(e) {
                    e.preventDefault();
                    this.hide();
                }

            },

            {

                name: 'toggle',

                self: true,

                handler: function(e) {

                    if (e.defaultPrevented) {
                        return;
                    }

                    e.preventDefault();
                    this.toggle();
                }

            },

            {
                name: 'beforeshow',

                self: true,

                handler: function(e) {

                    if (includes(active$1, this)) {
                        return false;
                    }

                    if (!this.stack && active$1.length) {
                        Promise.all(active$1.map(function (modal) { return modal.hide(); })).then(this.show);
                        e.preventDefault();
                    } else {
                        active$1.push(this);
                    }
                }

            },

            {

                name: 'show',

                self: true,

                handler: function() {
                    var this$1 = this;


                    if (width(window) - width(document) && this.overlay) {
                        css(document.body, 'overflowY', 'scroll');
                    }

                    addClass(document.documentElement, this.clsPage);

                    if (this.bgClose) {
                        once(this.$el, 'hide', delayOn(document, 'click', function (ref) {
                            var defaultPrevented = ref.defaultPrevented;
                            var target = ref.target;

                            var current = last(active$1);
                            if (!defaultPrevented
                                && current === this$1
                                && (!current.overlay || within(target, current.$el))
                                && !within(target, current.panel)
                            ) {
                                current.hide();
                            }
                        }), {self: true});
                    }

                    if (this.escClose) {
                        once(this.$el, 'hide', on(document, 'keydown', function (e) {
                            var current = last(active$1);
                            if (e.keyCode === 27 && current === this$1) {
                                e.preventDefault();
                                current.hide();
                            }
                        }), {self: true});
                    }
                }

            },

            {

                name: 'hidden',

                self: true,

                handler: function() {
                    var this$1 = this;


                    active$1.splice(active$1.indexOf(this), 1);

                    if (!active$1.length) {
                        css(document.body, 'overflowY', '');
                    }

                    if (!active$1.some(function (modal) { return modal.clsPage === this$1.clsPage; })) {
                        removeClass(document.documentElement, this.clsPage);
                    }

                }

            }

        ],

        methods: {

            toggle: function() {
                return this.isToggled() ? this.hide() : this.show();
            },

            show: function() {
                var this$1 = this;


                if (this.container && this.$el.parentNode !== this.container) {
                    append(this.container, this.$el);
                    return new Promise(function (resolve) { return requestAnimationFrame(function () { return this$1.show().then(resolve); }
                        ); }
                    );
                }

                return this.toggleElement(this.$el, true, animate$1(this));
            },

            hide: function() {
                return this.toggleElement(this.$el, false, animate$1(this));
            }

        }

    };

    function animate$1(ref) {
        var transitionElement = ref.transitionElement;
        var _toggle = ref._toggle;

        return function (el, show) { return new Promise(function (resolve, reject) { return once(el, 'show hide', function () {
                    el._reject && el._reject();
                    el._reject = reject;

                    _toggle(el, show);

                    var off = once(transitionElement, 'transitionstart', function () {
                        once(transitionElement, 'transitionend transitioncancel', resolve, {self: true});
                        clearTimeout(timer);
                    }, {self: true});

                    var timer = setTimeout(function () {
                        off();
                        resolve();
                    }, toMs(css(transitionElement, 'transitionDuration')));

                }); }
            ); };
    }

    var Modal$1 = {

        install: install$1,

        mixins: [Modal],

        data: {
            clsPage: 'uk-modal-page',
            selPanel: '.uk-modal-dialog',
            selClose: '.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full'
        },

        events: [

            {
                name: 'show',

                self: true,

                handler: function() {

                    if (hasClass(this.panel, 'uk-margin-auto-vertical')) {
                        addClass(this.$el, 'uk-flex');
                    } else {
                        css(this.$el, 'display', 'block');
                    }

                    height(this.$el); // force reflow
                }
            },

            {
                name: 'hidden',

                self: true,

                handler: function() {

                    css(this.$el, 'display', '');
                    removeClass(this.$el, 'uk-flex');

                }
            }

        ]

    };

    function install$1(UIkit) {

        UIkit.modal.dialog = function (content, options) {

            var dialog = UIkit.modal((" <div class=\"uk-modal\"> <div class=\"uk-modal-dialog\">" + content + "</div> </div> "), options);

            dialog.show();

            on(dialog.$el, 'hidden', function () { return Promise.resolve(function () { return dialog.$destroy(true); }); }, {self: true});

            return dialog;
        };

        UIkit.modal.alert = function (message, options) {

            options = assign({bgClose: false, escClose: false, labels: UIkit.modal.labels}, options);

            return new Promise(
                function (resolve) { return on(UIkit.modal.dialog((" <div class=\"uk-modal-body\">" + (isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-primary uk-modal-close\" autofocus>" + (options.labels.ok) + "</button> </div> "), options).$el, 'hide', resolve); }
            );
        };

        UIkit.modal.confirm = function (message, options) {

            options = assign({bgClose: false, escClose: true, labels: UIkit.modal.labels}, options);

            return new Promise(function (resolve, reject) {

                var confirm = UIkit.modal.dialog((" <form> <div class=\"uk-modal-body\">" + (isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + (options.labels.cancel) + "</button> <button class=\"uk-button uk-button-primary\" autofocus>" + (options.labels.ok) + "</button> </div> </form> "), options);

                var resolved = false;

                on(confirm.$el, 'submit', 'form', function (e) {
                    e.preventDefault();
                    resolve();
                    resolved = true;
                    confirm.hide();
                });
                on(confirm.$el, 'hide', function () {
                    if (!resolved) {
                        reject();
                    }
                });

            });
        };

        UIkit.modal.prompt = function (message, value, options) {

            options = assign({bgClose: false, escClose: true, labels: UIkit.modal.labels}, options);

            return new Promise(function (resolve) {

                var prompt = UIkit.modal.dialog((" <form class=\"uk-form-stacked\"> <div class=\"uk-modal-body\"> <label>" + (isString(message) ? message : html(message)) + "</label> <input class=\"uk-input\" autofocus> </div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + (options.labels.cancel) + "</button> <button class=\"uk-button uk-button-primary\">" + (options.labels.ok) + "</button> </div> </form> "), options),
                    input = $('input', prompt.$el);

                input.value = value;

                var resolved = false;

                on(prompt.$el, 'submit', 'form', function (e) {
                    e.preventDefault();
                    resolve(input.value);
                    resolved = true;
                    prompt.hide();
                });
                on(prompt.$el, 'hide', function () {
                    if (!resolved) {
                        resolve(null);
                    }
                });

            });
        };

        UIkit.modal.labels = {
            ok: 'Ok',
            cancel: 'Cancel'
        };

    }

    var Nav = {

        extends: Accordion,

        data: {
            targets: '> .uk-parent',
            toggle: '> a',
            content: '> ul'
        }

    };

    var Navbar = {

        mixins: [Class, FlexBug],

        props: {
            dropdown: String,
            mode: 'list',
            align: String,
            offset: Number,
            boundary: Boolean,
            boundaryAlign: Boolean,
            clsDrop: String,
            delayShow: Number,
            delayHide: Number,
            dropbar: Boolean,
            dropbarMode: String,
            dropbarAnchor: Boolean,
            duration: Number
        },

        data: {
            dropdown: '.uk-navbar-nav > li',
            align: !isRtl ? 'left' : 'right',
            clsDrop: 'uk-navbar-dropdown',
            mode: undefined,
            offset: undefined,
            delayShow: undefined,
            delayHide: undefined,
            boundaryAlign: undefined,
            flip: 'x',
            boundary: true,
            dropbar: false,
            dropbarMode: 'slide',
            dropbarAnchor: false,
            duration: 200,
            forceHeight: true,
            selMinHeight: '.uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle'
        },

        computed: {

            boundary: function(ref, $el) {
                var boundary = ref.boundary;
                var boundaryAlign = ref.boundaryAlign;

                return (boundary === true || boundaryAlign) ? $el : boundary;
            },

            dropbarAnchor: function(ref, $el) {
                var dropbarAnchor = ref.dropbarAnchor;

                return query(dropbarAnchor, $el);
            },

            pos: function(ref) {
                var align = ref.align;

                return ("bottom-" + align);
            },

            dropdowns: function(ref, $el) {
                var dropdown = ref.dropdown;
                var clsDrop = ref.clsDrop;

                return $$((dropdown + " ." + clsDrop), $el);
            }

        },

        beforeConnect: function() {

            var ref = this.$props;
            var dropbar = ref.dropbar;

            this.dropbar = dropbar && (query(dropbar, this.$el) || $('+ .uk-navbar-dropbar', this.$el) || $('<div></div>'));

            if (this.dropbar) {

                addClass(this.dropbar, 'uk-navbar-dropbar');

                if (this.dropbarMode === 'slide') {
                    addClass(this.dropbar, 'uk-navbar-dropbar-slide');
                }
            }

        },

        disconnected: function() {
            this.dropbar && remove(this.dropbar);
        },

        update: function() {
            var this$1 = this;


            this.$create(
                'drop',
                this.dropdowns.filter(function (el) { return !this$1.getDropdown(el); }),
                assign({}, this.$props, {boundary: this.boundary, pos: this.pos, offset: this.dropbar || this.offset})
            );

        },

        events: [

            {
                name: 'mouseover',

                delegate: function() {
                    return this.dropdown;
                },

                handler: function(ref) {
                    var current = ref.current;

                    var active = this.getActive();
                    if (active && active.toggle && !within(active.toggle.$el, current) && !active.tracker.movesTo(active.$el)) {
                        active.hide(false);
                    }
                }

            },

            {
                name: 'mouseleave',

                el: function() {
                    return this.dropbar;
                },

                handler: function() {
                    var active = this.getActive();

                    if (active && !this.dropdowns.some(function (el) { return matches(el, ':hover'); })) {
                        active.hide();
                    }
                }
            },

            {
                name: 'beforeshow',

                capture: true,

                filter: function() {
                    return this.dropbar;
                },

                handler: function() {

                    if (!this.dropbar.parentNode) {
                        after(this.dropbarAnchor || this.$el, this.dropbar);
                    }

                }
            },

            {
                name: 'show',

                capture: true,

                filter: function() {
                    return this.dropbar;
                },

                handler: function(_, drop) {

                    var $el = drop.$el;
                    var dir = drop.dir;

                    this.clsDrop && addClass($el, ((this.clsDrop) + "-dropbar"));

                    if (dir === 'bottom') {
                        this.transitionTo($el.offsetHeight + toFloat(css($el, 'marginTop')) + toFloat(css($el, 'marginBottom')), $el);
                    }
                }
            },

            {
                name: 'beforehide',

                filter: function() {
                    return this.dropbar;
                },

                handler: function(e, ref) {
                    var $el = ref.$el;


                    var active = this.getActive();

                    if (matches(this.dropbar, ':hover') && active && active.$el === $el) {
                        e.preventDefault();
                    }
                }
            },

            {
                name: 'hide',

                filter: function() {
                    return this.dropbar;
                },

                handler: function(_, ref) {
                    var $el = ref.$el;


                    var active = this.getActive();

                    if (!active || active && active.$el === $el) {
                        this.transitionTo(0);
                    }
                }
            }

        ],

        methods: {

            getActive: function() {
                var ref = this.dropdowns.map(this.getDropdown).filter(function (drop) { return drop && drop.isActive(); });
                var active = ref[0];
                return active && includes(active.mode, 'hover') && within(active.toggle.$el, this.$el) && active;
            },

            transitionTo: function(newHeight, el) {
                var this$1 = this;


                var ref = this;
                var dropbar = ref.dropbar;
                var oldHeight = isVisible(dropbar) ? height(dropbar) : 0;

                el = oldHeight < newHeight && el;

                css(el, 'clip', ("rect(0," + (el.offsetWidth) + "px," + oldHeight + "px,0)"));

                height(dropbar, oldHeight);

                Transition.cancel([el, dropbar]);
                return Promise.all([
                    Transition.start(dropbar, {height: newHeight}, this.duration),
                    Transition.start(el, {clip: ("rect(0," + (el.offsetWidth) + "px," + newHeight + "px,0)")}, this.duration)
                ])
                    .catch(noop)
                    .then(function () {
                        css(el, {clip: ''});
                        this$1.$update(dropbar);
                    });
            },

            getDropdown: function(el) {
                return this.$getComponent(el, 'drop') || this.$getComponent(el, 'dropdown');
            }

        }

    };

    var Offcanvas = {

        mixins: [Modal],

        args: 'mode',

        props: {
            mode: String,
            flip: Boolean,
            overlay: Boolean
        },

        data: {
            mode: 'slide',
            flip: false,
            overlay: false,
            clsPage: 'uk-offcanvas-page',
            clsContainer: 'uk-offcanvas-container',
            selPanel: '.uk-offcanvas-bar',
            clsFlip: 'uk-offcanvas-flip',
            clsContainerAnimation: 'uk-offcanvas-container-animation',
            clsSidebarAnimation: 'uk-offcanvas-bar-animation',
            clsMode: 'uk-offcanvas',
            clsOverlay: 'uk-offcanvas-overlay',
            selClose: '.uk-offcanvas-close',
            container: false
        },

        computed: {

            clsFlip: function(ref) {
                var flip = ref.flip;
                var clsFlip = ref.clsFlip;

                return flip ? clsFlip : '';
            },

            clsOverlay: function(ref) {
                var overlay = ref.overlay;
                var clsOverlay = ref.clsOverlay;

                return overlay ? clsOverlay : '';
            },

            clsMode: function(ref) {
                var mode = ref.mode;
                var clsMode = ref.clsMode;

                return (clsMode + "-" + mode);
            },

            clsSidebarAnimation: function(ref) {
                var mode = ref.mode;
                var clsSidebarAnimation = ref.clsSidebarAnimation;

                return mode === 'none' || mode === 'reveal' ? '' : clsSidebarAnimation;
            },

            clsContainerAnimation: function(ref) {
                var mode = ref.mode;
                var clsContainerAnimation = ref.clsContainerAnimation;

                return mode !== 'push' && mode !== 'reveal' ? '' : clsContainerAnimation;
            },

            transitionElement: function(ref) {
                var mode = ref.mode;

                return mode === 'reveal' ? this.panel.parentNode : this.panel;
            }

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return 'a[href^="#"]';
                },

                handler: function(ref) {
                    var hash = ref.current.hash;
                    var defaultPrevented = ref.defaultPrevented;

                    if (!defaultPrevented && hash && $(hash, document.body)) {
                        this.hide();
                    }
                }

            },

            {
                name: 'touchstart',

                passive: true,

                el: function() {
                    return this.panel;
                },

                handler: function(ref) {
                    var targetTouches = ref.targetTouches;


                    if (targetTouches.length === 1) {
                        this.clientY = targetTouches[0].clientY;
                    }

                }

            },

            {
                name: 'touchmove',

                self: true,
                passive: false,

                filter: function() {
                    return this.overlay;
                },

                handler: function(e) {
                    e.cancelable && e.preventDefault();
                }

            },

            {
                name: 'touchmove',

                passive: false,

                el: function() {
                    return this.panel;
                },

                handler: function(e) {

                    if (e.targetTouches.length !== 1) {
                        return;
                    }

                    var clientY = event.targetTouches[0].clientY - this.clientY;
                    var ref = this.panel;
                    var scrollTop = ref.scrollTop;
                    var scrollHeight = ref.scrollHeight;
                    var clientHeight = ref.clientHeight;

                    if (clientHeight >= scrollHeight
                        || scrollTop === 0 && clientY > 0
                        || scrollHeight - scrollTop <= clientHeight && clientY < 0
                    ) {
                        e.cancelable && e.preventDefault();
                    }

                }

            },

            {
                name: 'show',

                self: true,

                handler: function() {

                    if (this.mode === 'reveal' && !hasClass(this.panel.parentNode, this.clsMode)) {
                        wrapAll(this.panel, '<div>');
                        addClass(this.panel.parentNode, this.clsMode);
                    }

                    css(document.documentElement, 'overflowY', this.overlay ? 'hidden' : '');
                    addClass(document.body, this.clsContainer, this.clsFlip);
                    css(document.body, 'touch-action', 'pan-y pinch-zoom');
                    css(this.$el, 'display', 'block');
                    addClass(this.$el, this.clsOverlay);
                    addClass(this.panel, this.clsSidebarAnimation, this.mode !== 'reveal' ? this.clsMode : '');

                    height(document.body); // force reflow
                    addClass(document.body, this.clsContainerAnimation);

                    this.clsContainerAnimation && suppressUserScale();


                }
            },

            {
                name: 'hide',

                self: true,

                handler: function() {
                    removeClass(document.body, this.clsContainerAnimation);
                    css(document.body, 'touch-action', '');
                }
            },

            {
                name: 'hidden',

                self: true,

                handler: function() {

                    this.clsContainerAnimation && resumeUserScale();

                    if (this.mode === 'reveal') {
                        unwrap(this.panel);
                    }

                    removeClass(this.panel, this.clsSidebarAnimation, this.clsMode);
                    removeClass(this.$el, this.clsOverlay);
                    css(this.$el, 'display', '');
                    removeClass(document.body, this.clsContainer, this.clsFlip);

                    css(document.documentElement, 'overflowY', '');

                }
            },

            {
                name: 'swipeLeft swipeRight',

                handler: function(e) {

                    if (this.isToggled() && endsWith(e.type, 'Left') ^ this.flip) {
                        this.hide();
                    }

                }
            }

        ]

    };

    // Chrome in responsive mode zooms page upon opening offcanvas
    function suppressUserScale() {
        getViewport().content += ',user-scalable=0';
    }

    function resumeUserScale() {
        var viewport = getViewport();
        viewport.content = viewport.content.replace(/,user-scalable=0$/, '');
    }

    function getViewport() {
        return $('meta[name="viewport"]', document.head) || append(document.head, '<meta name="viewport">');
    }

    var OverflowAuto = {

        mixins: [Class],

        props: {
            selContainer: String,
            selContent: String
        },

        data: {
            selContainer: '.uk-modal',
            selContent: '.uk-modal-dialog'
        },

        computed: {

            container: function(ref, $el) {
                var selContainer = ref.selContainer;

                return closest($el, selContainer);
            },

            content: function(ref, $el) {
                var selContent = ref.selContent;

                return closest($el, selContent);
            }

        },

        connected: function() {
            css(this.$el, 'minHeight', 150);
        },

        update: {

            read: function() {

                if (!this.content || !this.container) {
                    return false;
                }

                return {
                    current: toFloat(css(this.$el, 'maxHeight')),
                    max: Math.max(150, height(this.container) - (offset(this.content).height - height(this.$el)))
                };
            },

            write: function(ref) {
                var current = ref.current;
                var max = ref.max;

                css(this.$el, 'maxHeight', max);
                if (Math.round(current) !== Math.round(max)) {
                    trigger(this.$el, 'resize');
                }
            },

            events: ['resize']

        }

    };

    var Responsive = {

        props: ['width', 'height'],

        connected: function() {
            addClass(this.$el, 'uk-responsive-width');
        },

        update: {

            read: function() {
                return isVisible(this.$el) && this.width && this.height
                    ? {width: width(this.$el.parentNode), height: this.height}
                    : false;
            },

            write: function(dim) {
                height(this.$el, Dimensions.contain({
                    height: this.height,
                    width: this.width
                }, dim).height);
            },

            events: ['resize']

        }

    };

    var Scroll = {

        props: {
            duration: Number,
            offset: Number
        },

        data: {
            duration: 1000,
            offset: 0
        },

        methods: {

            scrollTo: function(el) {
                var this$1 = this;


                el = el && $(el) || document.body;

                var docHeight = height(document);
                var winHeight = height(window);

                var target = offset(el).top - this.offset;
                if (target + winHeight > docHeight) {
                    target = docHeight - winHeight;
                }

                if (!trigger(this.$el, 'beforescroll', [this, el])) {
                    return;
                }

                var start = Date.now();
                var startY = window.pageYOffset;
                var step = function () {

                    var currentY = startY + (target - startY) * ease(clamp((Date.now() - start) / this$1.duration));

                    scrollTop(window, currentY);

                    // scroll more if we have not reached our destination
                    if (currentY !== target) {
                        requestAnimationFrame(step);
                    } else {
                        trigger(this$1.$el, 'scrolled', [this$1, el]);
                    }

                };

                step();

            }

        },

        events: {

            click: function(e) {

                if (e.defaultPrevented) {
                    return;
                }

                e.preventDefault();
                this.scrollTo(escape(decodeURIComponent(this.$el.hash)).substr(1));
            }

        }

    };

    function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    var Scrollspy = {

        args: 'cls',

        props: {
            cls: String,
            target: String,
            hidden: Boolean,
            offsetTop: Number,
            offsetLeft: Number,
            repeat: Boolean,
            delay: Number
        },

        data: function () { return ({
            cls: false,
            target: false,
            hidden: true,
            offsetTop: 0,
            offsetLeft: 0,
            repeat: false,
            delay: 0,
            inViewClass: 'uk-scrollspy-inview'
        }); },

        computed: {

            elements: function(ref, $el) {
                var target = ref.target;

                return target ? $$(target, $el) : [$el];
            }

        },

        update: [

            {

                write: function() {
                    if (this.hidden) {
                        css(filter(this.elements, (":not(." + (this.inViewClass) + ")")), 'visibility', 'hidden');
                    }
                }

            },

            {

                read: function(ref) {
                    var this$1 = this;
                    var update = ref.update;


                    if (!update) {
                        return;
                    }

                    this.elements.forEach(function (el) {

                        var state = el._ukScrollspyState;

                        if (!state) {
                            state = {cls: data(el, 'uk-scrollspy-class') || this$1.cls};
                        }

                        state.show = isInView(el, this$1.offsetTop, this$1.offsetLeft);
                        el._ukScrollspyState = state;

                    });

                },

                write: function(data) {
                    var this$1 = this;


                    // Let child components be applied at least once first
                    if (!data.update) {
                        this.$emit();
                        return data.update = true;
                    }

                    this.elements.forEach(function (el) {

                        var state = el._ukScrollspyState;
                        var cls = state.cls;

                        if (state.show && !state.inview && !state.queued) {

                            var show = function () {

                                css(el, 'visibility', '');
                                addClass(el, this$1.inViewClass);
                                toggleClass(el, cls);

                                trigger(el, 'inview');

                                this$1.$update(el);

                                state.inview = true;
                                state.abort && state.abort();
                            };

                            if (this$1.delay) {

                                state.queued = true;
                                data.promise = (data.promise || Promise.resolve()).then(function () {
                                    return !state.inview && new Promise(function (resolve) {

                                        var timer = setTimeout(function () {

                                            show();
                                            resolve();

                                        }, data.promise || this$1.elements.length === 1 ? this$1.delay : 0);

                                        state.abort = function () {
                                            clearTimeout(timer);
                                            resolve();
                                            state.queued = false;
                                        };

                                    });

                                });

                            } else {
                                show();
                            }

                        } else if (!state.show && (state.inview || state.queued) && this$1.repeat) {

                            state.abort && state.abort();

                            if (!state.inview) {
                                return;
                            }

                            css(el, 'visibility', this$1.hidden ? 'hidden' : '');
                            removeClass(el, this$1.inViewClass);
                            toggleClass(el, cls);

                            trigger(el, 'outview');

                            this$1.$update(el);

                            state.inview = false;

                        }


                    });

                },

                events: ['scroll', 'resize']

            }

        ]

    };

    var ScrollspyNav = {

        props: {
            cls: String,
            closest: String,
            scroll: Boolean,
            overflow: Boolean,
            offset: Number
        },

        data: {
            cls: 'uk-active',
            closest: false,
            scroll: false,
            overflow: true,
            offset: 0
        },

        computed: {

            links: function(_, $el) {
                return $$('a[href^="#"]', $el).filter(function (el) { return el.hash; });
            },

            elements: function(ref) {
                var selector = ref.closest;

                return closest(this.links, selector || '*');
            },

            targets: function() {
                return $$(this.links.map(function (el) { return escape(el.hash).substr(1); }).join(','));
            }

        },

        update: [

            {

                read: function() {
                    if (this.scroll) {
                        this.$create('scroll', this.links, {offset: this.offset || 0});
                    }
                }

            },

            {

                read: function(data) {
                    var this$1 = this;


                    var scroll = window.pageYOffset + this.offset + 1;
                    var max = height(document) - height(window) + this.offset;

                    data.active = false;

                    this.targets.every(function (el, i) {

                        var ref = offset(el);
                        var top = ref.top;
                        var last = i + 1 === this$1.targets.length;

                        if (!this$1.overflow && (i === 0 && top > scroll || last && top + el.offsetTop < scroll)) {
                            return false;
                        }

                        if (!last && offset(this$1.targets[i + 1]).top <= scroll) {
                            return true;
                        }

                        if (scroll >= max) {
                            for (var j = this$1.targets.length - 1; j > i; j--) {
                                if (isInView(this$1.targets[j])) {
                                    el = this$1.targets[j];
                                    break;
                                }
                            }
                        }

                        return !(data.active = $(filter(this$1.links, ("[href=\"#" + (el.id) + "\"]"))));

                    });

                },

                write: function(ref) {
                    var active = ref.active;


                    this.links.forEach(function (el) { return el.blur(); });
                    removeClass(this.elements, this.cls);

                    if (active) {
                        trigger(this.$el, 'active', [active, addClass(this.closest ? closest(active, this.closest) : active, this.cls)]);
                    }

                },

                events: ['scroll', 'resize']

            }

        ]

    };

    var Sticky = {

        mixins: [Class, Media],

        props: {
            top: null,
            bottom: Boolean,
            offset: String,
            animation: String,
            clsActive: String,
            clsInactive: String,
            clsFixed: String,
            clsBelow: String,
            selTarget: String,
            widthElement: Boolean,
            showOnUp: Boolean,
            targetOffset: Number
        },

        data: {
            top: 0,
            bottom: false,
            offset: 0,
            animation: '',
            clsActive: 'uk-active',
            clsInactive: '',
            clsFixed: 'uk-sticky-fixed',
            clsBelow: 'uk-sticky-below',
            selTarget: '',
            widthElement: false,
            showOnUp: false,
            targetOffset: false
        },

        computed: {

            offset: function(ref) {
                var offset = ref.offset;

                return toPx(offset);
            },

            selTarget: function(ref, $el) {
                var selTarget = ref.selTarget;

                return selTarget && $(selTarget, $el) || $el;
            },

            widthElement: function(ref, $el) {
                var widthElement = ref.widthElement;

                return query(widthElement, $el) || this.placeholder;
            },

            isActive: {

                get: function() {
                    return hasClass(this.selTarget, this.clsActive);
                },

                set: function(value) {
                    if (value && !this.isActive) {
                        replaceClass(this.selTarget, this.clsInactive, this.clsActive);
                        trigger(this.$el, 'active');
                    } else if (!value && !hasClass(this.selTarget, this.clsInactive)) {
                        replaceClass(this.selTarget, this.clsActive, this.clsInactive);
                        trigger(this.$el, 'inactive');
                    }
                }

            }

        },

        connected: function() {
            this.placeholder = $('+ .uk-sticky-placeholder', this.$el) || $('<div class="uk-sticky-placeholder"></div>');
            this.isFixed = false;
            this.isActive = false;
        },

        disconnected: function() {

            if (this.isFixed) {
                this.hide();
                removeClass(this.selTarget, this.clsInactive);
            }

            remove(this.placeholder);
            this.placeholder = null;
            this.widthElement = null;
        },

        events: [

            {

                name: 'load hashchange popstate',

                el: window,

                handler: function() {
                    var this$1 = this;


                    if (!(this.targetOffset !== false && location.hash && window.pageYOffset > 0)) {
                        return;
                    }

                    var target = $(location.hash);

                    if (target) {
                        fastdom.read(function () {

                            var ref = offset(target);
                            var top = ref.top;
                            var elTop = offset(this$1.$el).top;
                            var elHeight = this$1.$el.offsetHeight;

                            if (this$1.isFixed && elTop + elHeight >= top && elTop <= top + target.offsetHeight) {
                                scrollTop(window, top - elHeight - (isNumeric(this$1.targetOffset) ? this$1.targetOffset : 0) - this$1.offset);
                            }

                        });
                    }

                }

            }

        ],

        update: [

            {

                read: function(ref, type) {
                    var height = ref.height;


                    if (this.isActive && type !== 'update') {

                        this.hide();
                        height = this.$el.offsetHeight;
                        this.show();

                    }

                    height = !this.isActive ? this.$el.offsetHeight : height;

                    this.topOffset = offset(this.isFixed ? this.placeholder : this.$el).top;
                    this.bottomOffset = this.topOffset + height;

                    var bottom = parseProp('bottom', this);

                    this.top = Math.max(toFloat(parseProp('top', this)), this.topOffset) - this.offset;
                    this.bottom = bottom && bottom - height;
                    this.inactive = !this.matchMedia;

                    return {
                        lastScroll: false,
                        height: height,
                        margins: css(this.$el, ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'])
                    };
                },

                write: function(ref) {
                    var height = ref.height;
                    var margins = ref.margins;


                    var ref$1 = this;
                    var placeholder = ref$1.placeholder;

                    css(placeholder, assign({height: height}, margins));

                    if (!within(placeholder, document)) {
                        after(this.$el, placeholder);
                        attr(placeholder, 'hidden', '');
                    }

                    // ensure active/inactive classes are applied
                    this.isActive = this.isActive;

                },

                events: ['resize']

            },

            {

                read: function(ref) {
                    var scroll = ref.scroll; if ( scroll === void 0 ) scroll = 0;


                    this.width = (isVisible(this.widthElement) ? this.widthElement : this.$el).offsetWidth;

                    this.scroll = window.pageYOffset;

                    return {
                        dir: scroll <= this.scroll ? 'down' : 'up',
                        scroll: this.scroll,
                        visible: isVisible(this.$el),
                        top: offsetPosition(this.placeholder)[0]
                    };
                },

                write: function(data, type) {
                    var this$1 = this;


                    var initTimestamp = data.initTimestamp; if ( initTimestamp === void 0 ) initTimestamp = 0;
                    var dir = data.dir;
                    var lastDir = data.lastDir;
                    var lastScroll = data.lastScroll;
                    var scroll = data.scroll;
                    var top = data.top;
                    var visible = data.visible;
                    var now = performance.now();

                    data.lastScroll = scroll;

                    if (scroll < 0 || scroll === lastScroll || !visible || this.disabled || this.showOnUp && type !== 'scroll') {
                        return;
                    }

                    if (now - initTimestamp > 300 || dir !== lastDir) {
                        data.initScroll = scroll;
                        data.initTimestamp = now;
                    }

                    data.lastDir = dir;

                    if (this.showOnUp && Math.abs(data.initScroll - scroll) <= 30 && Math.abs(lastScroll - scroll) <= 10) {
                        return;
                    }

                    if (this.inactive
                        || scroll < this.top
                        || this.showOnUp && (scroll <= this.top || dir === 'down' || dir === 'up' && !this.isFixed && scroll <= this.bottomOffset)
                    ) {

                        if (!this.isFixed) {

                            if (Animation.inProgress(this.$el) && top > scroll) {
                                Animation.cancel(this.$el);
                                this.hide();
                            }

                            return;
                        }

                        this.isFixed = false;

                        if (this.animation && scroll > this.topOffset) {
                            Animation.cancel(this.$el);
                            Animation.out(this.$el, this.animation).then(function () { return this$1.hide(); }, noop);
                        } else {
                            this.hide();
                        }

                    } else if (this.isFixed) {

                        this.update();

                    } else if (this.animation) {

                        Animation.cancel(this.$el);
                        this.show();
                        Animation.in(this.$el, this.animation).catch(noop);

                    } else {
                        this.show();
                    }

                },

                events: ['resize', 'scroll']

            }

        ],

        methods: {

            show: function() {

                this.isFixed = true;
                this.update();
                attr(this.placeholder, 'hidden', null);

            },

            hide: function() {

                this.isActive = false;
                removeClass(this.$el, this.clsFixed, this.clsBelow);
                css(this.$el, {position: '', top: '', width: ''});
                attr(this.placeholder, 'hidden', '');

            },

            update: function() {

                var active = this.top !== 0 || this.scroll > this.top;
                var top = Math.max(0, this.offset);

                if (this.bottom && this.scroll > this.bottom - this.offset) {
                    top = this.bottom - this.scroll;
                }

                css(this.$el, {
                    position: 'fixed',
                    top: (top + "px"),
                    width: this.width
                });

                this.isActive = active;
                toggleClass(this.$el, this.clsBelow, this.scroll > this.bottomOffset);
                addClass(this.$el, this.clsFixed);

            }

        }

    };

    function parseProp(prop, ref) {
        var $props = ref.$props;
        var $el = ref.$el;
        var propOffset = ref[(prop + "Offset")];


        var value = $props[prop];

        if (!value) {
            return;
        }

        if (isNumeric(value) && isString(value) && value.match(/^-?\d/)) {

            return propOffset + toPx(value);

        } else {

            return offset(value === true ? $el.parentNode : query(value, $el)).bottom;

        }
    }

    var Switcher = {

        mixins: [Togglable],

        args: 'connect',

        props: {
            connect: String,
            toggle: String,
            active: Number,
            swiping: Boolean
        },

        data: {
            connect: '~.uk-switcher',
            toggle: '> * > :first-child',
            active: 0,
            swiping: true,
            cls: 'uk-active',
            clsContainer: 'uk-switcher',
            attrItem: 'uk-switcher-item',
            queued: true
        },

        computed: {

            connects: function(ref, $el) {
                var connect = ref.connect;

                return queryAll(connect, $el);
            },

            toggles: function(ref, $el) {
                var toggle = ref.toggle;

                return $$(toggle, $el);
            }

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return ((this.toggle) + ":not(.uk-disabled)");
                },

                handler: function(e) {
                    e.preventDefault();
                    this.show(toNodes(this.$el.children).filter(function (el) { return within(e.current, el); })[0]);
                }

            },

            {
                name: 'click',

                el: function() {
                    return this.connects;
                },

                delegate: function() {
                    return ("[" + (this.attrItem) + "],[data-" + (this.attrItem) + "]");
                },

                handler: function(e) {
                    e.preventDefault();
                    this.show(data(e.current, this.attrItem));
                }
            },

            {
                name: 'swipeRight swipeLeft',

                filter: function() {
                    return this.swiping;
                },

                el: function() {
                    return this.connects;
                },

                handler: function(ref) {
                    var type = ref.type;

                    this.show(endsWith(type, 'Left') ? 'next' : 'previous');
                }
            }

        ],

        update: function() {
            var this$1 = this;


            this.connects.forEach(function (list) { return this$1.updateAria(list.children); });
            var ref = this.$el;
            var children = ref.children;
            this.show(filter(children, ("." + (this.cls)))[0] || children[this.active] || children[0]);

            this.swiping && css(this.connects, 'touch-action', 'pan-y pinch-zoom');

        },

        methods: {

            index: function() {
                return !isEmpty(this.connects) && index(filter(this.connects[0].children, ("." + (this.cls)))[0]);
            },

            show: function(item) {
                var this$1 = this;


                var ref = this.$el;
                var children = ref.children;
                var length = children.length;
                var prev = this.index();
                var hasPrev = prev >= 0;
                var dir = item === 'previous' ? -1 : 1;

                var toggle, active, next = getIndex(item, children, prev);

                for (var i = 0; i < length; i++, next = (next + dir + length) % length) {
                    if (!matches(this.toggles[next], '.uk-disabled *, .uk-disabled, [disabled]')) {
                        toggle = this.toggles[next];
                        active = children[next];
                        break;
                    }
                }

                if (!active || prev >= 0 && hasClass(active, this.cls) || prev === next) {
                    return;
                }

                removeClass(children, this.cls);
                addClass(active, this.cls);
                attr(this.toggles, 'aria-expanded', false);
                attr(toggle, 'aria-expanded', true);

                this.connects.forEach(function (list) {
                    if (!hasPrev) {
                        this$1.toggleNow(list.children[next]);
                    } else {
                        this$1.toggleElement([list.children[prev], list.children[next]]);
                    }
                });

            }

        }

    };

    var Tab = {

        mixins: [Class],

        extends: Switcher,

        props: {
            media: Boolean
        },

        data: {
            media: 960,
            attrItem: 'uk-tab-item'
        },

        connected: function() {

            var cls = hasClass(this.$el, 'uk-tab-left')
                ? 'uk-tab-left'
                : hasClass(this.$el, 'uk-tab-right')
                    ? 'uk-tab-right'
                    : false;

            if (cls) {
                this.$create('toggle', this.$el, {cls: cls, mode: 'media', media: this.media});
            }
        }

    };

    var Toggle = {

        mixins: [Media, Togglable],

        args: 'target',

        props: {
            href: String,
            target: null,
            mode: 'list'
        },

        data: {
            href: false,
            target: false,
            mode: 'click',
            queued: true
        },

        computed: {

            target: function(ref, $el) {
                var href = ref.href;
                var target = ref.target;

                target = queryAll(target || href, $el);
                return target.length && target || [$el];
            }

        },

        connected: function() {
            trigger(this.target, 'updatearia', [this]);
        },

        events: [

            {

                name: (pointerEnter + " " + pointerLeave),

                filter: function() {
                    return includes(this.mode, 'hover');
                },

                handler: function(e) {
                    if (!isTouch(e)) {
                        this.toggle(("toggle" + (e.type === pointerEnter ? 'show' : 'hide')));
                    }
                }

            },

            {

                name: 'click',

                filter: function() {
                    return includes(this.mode, 'click') || hasTouch && includes(this.mode, 'hover');
                },

                handler: function(e) {

                    // TODO better isToggled handling
                    var link;
                    if (closest(e.target, 'a[href="#"], a[href=""]')
                        || (link = closest(e.target, 'a[href]')) && (
                            this.cls
                            || !isVisible(this.target)
                            || link.hash && matches(this.target, link.hash)
                        )
                    ) {
                        e.preventDefault();
                    }

                    this.toggle();
                }

            }

        ],

        update: {

            read: function() {
                return includes(this.mode, 'media') && this.media
                    ? {match: this.matchMedia}
                    : false;
            },

            write: function(ref) {
                var match = ref.match;


                var toggled = this.isToggled(this.target);
                if (match ? !toggled : toggled) {
                    this.toggle();
                }

            },

            events: ['resize']

        },

        methods: {

            toggle: function(type) {
                if (trigger(this.target, type || 'toggle', [this])) {
                    this.toggleElement(this.target);
                }
            }

        }

    };

    function core (UIkit) {

        // core components
        UIkit.component('accordion', Accordion);
        UIkit.component('alert', Alert);
        UIkit.component('cover', Cover);
        UIkit.component('drop', Drop);
        UIkit.component('dropdown', Dropdown);
        UIkit.component('formCustom', FormCustom);
        UIkit.component('gif', Gif);
        UIkit.component('grid', Grid);
        UIkit.component('heightMatch', HeightMatch);
        UIkit.component('heightViewport', HeightViewport);
        UIkit.component('icon', Icon);
        UIkit.component('img', Img);
        UIkit.component('leader', Leader);
        UIkit.component('margin', Margin);
        UIkit.component('modal', Modal$1);
        UIkit.component('nav', Nav);
        UIkit.component('navbar', Navbar);
        UIkit.component('offcanvas', Offcanvas);
        UIkit.component('overflowAuto', OverflowAuto);
        UIkit.component('responsive', Responsive);
        UIkit.component('scroll', Scroll);
        UIkit.component('scrollspy', Scrollspy);
        UIkit.component('scrollspyNav', ScrollspyNav);
        UIkit.component('sticky', Sticky);
        UIkit.component('svg', Svg);
        UIkit.component('switcher', Switcher);
        UIkit.component('tab', Tab);
        UIkit.component('toggle', Toggle);
        UIkit.component('video', Video);

        // Icon components
        UIkit.component('close', Close);
        UIkit.component('marker', IconComponent);
        UIkit.component('navbarToggleIcon', IconComponent);
        UIkit.component('overlayIcon', IconComponent);
        UIkit.component('paginationNext', IconComponent);
        UIkit.component('paginationPrevious', IconComponent);
        UIkit.component('searchIcon', Search);
        UIkit.component('slidenavNext', Slidenav);
        UIkit.component('slidenavPrevious', Slidenav);
        UIkit.component('spinner', Spinner);
        UIkit.component('totop', IconComponent);

        // core functionality
        UIkit.use(Core);

    }

    UIkit.version = '3.2.0';

    core(UIkit);

    var Countdown = {

        mixins: [Class],

        props: {
            date: String,
            clsWrapper: String
        },

        data: {
            date: '',
            clsWrapper: '.uk-countdown-%unit%'
        },

        computed: {

            date: function(ref) {
                var date = ref.date;

                return Date.parse(date);
            },

            days: function(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'days'), $el);
            },

            hours: function(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'hours'), $el);
            },

            minutes: function(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'minutes'), $el);
            },

            seconds: function(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'seconds'), $el);
            },

            units: function() {
                var this$1 = this;

                return ['days', 'hours', 'minutes', 'seconds'].filter(function (unit) { return this$1[unit]; });
            }

        },

        connected: function() {
            this.start();
        },

        disconnected: function() {
            var this$1 = this;

            this.stop();
            this.units.forEach(function (unit) { return empty(this$1[unit]); });
        },

        events: [

            {

                name: 'visibilitychange',

                el: document,

                handler: function() {
                    if (document.hidden) {
                        this.stop();
                    } else {
                        this.start();
                    }
                }

            }

        ],

        update: {

            write: function() {
                var this$1 = this;


                var timespan = getTimeSpan(this.date);

                if (timespan.total <= 0) {

                    this.stop();

                    timespan.days
                        = timespan.hours
                        = timespan.minutes
                        = timespan.seconds
                        = 0;
                }

                this.units.forEach(function (unit) {

                    var digits = String(Math.floor(timespan[unit]));

                    digits = digits.length < 2 ? ("0" + digits) : digits;

                    var el = this$1[unit];
                    if (el.textContent !== digits) {
                        digits = digits.split('');

                        if (digits.length !== el.children.length) {
                            html(el, digits.map(function () { return '<span></span>'; }).join(''));
                        }

                        digits.forEach(function (digit, i) { return el.children[i].textContent = digit; });
                    }

                });

            }

        },

        methods: {

            start: function() {
                var this$1 = this;


                this.stop();

                if (this.date && this.units.length) {
                    this.$emit();
                    this.timer = setInterval(function () { return this$1.$emit(); }, 1000);
                }

            },

            stop: function() {

                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }

            }

        }

    };

    function getTimeSpan(date) {

        var total = date - Date.now();

        return {
            total: total,
            seconds: total / 1000 % 60,
            minutes: total / 1000 / 60 % 60,
            hours: total / 1000 / 60 / 60 % 24,
            days: total / 1000 / 60 / 60 / 24
        };
    }

    var targetClass = 'uk-animation-target';

    var Animate = {

        props: {
            animation: Number
        },

        data: {
            animation: 150
        },

        computed: {

            target: function() {
                return this.$el;
            }

        },

        methods: {

            animate: function(action) {
                var this$1 = this;


                addStyle();

                var children = toNodes(this.target.children);
                var propsFrom = children.map(function (el) { return getProps(el, true); });

                var oldHeight = height(this.target);
                var oldScrollY = window.pageYOffset;

                action();

                Transition.cancel(this.target);
                children.forEach(Transition.cancel);

                reset(this.target);
                this.$update(this.target);
                fastdom.flush();

                var newHeight = height(this.target);

                children = children.concat(toNodes(this.target.children).filter(function (el) { return !includes(children, el); }));

                var propsTo = children.map(function (el, i) { return el.parentNode && i in propsFrom
                        ? propsFrom[i]
                        ? isVisible(el)
                            ? getPositionWithMargin(el)
                            : {opacity: 0}
                        : {opacity: isVisible(el) ? 1 : 0}
                        : false; }
                );

                propsFrom = propsTo.map(function (props, i) {
                    var from = children[i].parentNode === this$1.target
                        ? propsFrom[i] || getProps(children[i])
                        : false;

                    if (from) {
                        if (!props) {
                            delete from.opacity;
                        } else if (!('opacity' in props)) {
                            var opacity = from.opacity;

                            if (opacity % 1) {
                                props.opacity = 1;
                            } else {
                                delete from.opacity;
                            }
                        }
                    }

                    return from;
                });

                addClass(this.target, targetClass);
                children.forEach(function (el, i) { return propsFrom[i] && css(el, propsFrom[i]); });
                css(this.target, 'height', oldHeight);
                scrollTop(window, oldScrollY);

                return Promise.all(children.map(function (el, i) { return propsFrom[i] && propsTo[i]
                        ? Transition.start(el, propsTo[i], this$1.animation, 'ease')
                        : Promise.resolve(); }
                ).concat(Transition.start(this.target, {height: newHeight}, this.animation, 'ease'))).then(function () {
                    children.forEach(function (el, i) { return css(el, {display: propsTo[i].opacity === 0 ? 'none' : '', zIndex: ''}); });
                    reset(this$1.target);
                    this$1.$update(this$1.target);
                    fastdom.flush(); // needed for IE11
                }, noop);

            }
        }
    };

    function getProps(el, opacity) {

        var zIndex = css(el, 'zIndex');

        return isVisible(el)
            ? assign({
                display: '',
                opacity: opacity ? css(el, 'opacity') : '0',
                pointerEvents: 'none',
                position: 'absolute',
                zIndex: zIndex === 'auto' ? index(el) : zIndex
            }, getPositionWithMargin(el))
            : false;
    }

    function reset(el) {
        css(el.children, {
            height: '',
            left: '',
            opacity: '',
            pointerEvents: '',
            position: '',
            top: '',
            width: ''
        });
        removeClass(el, targetClass);
        css(el, 'height', '');
    }

    function getPositionWithMargin(el) {
        var ref = el.getBoundingClientRect();
        var height = ref.height;
        var width = ref.width;
        var ref$1 = position(el);
        var top = ref$1.top;
        var left = ref$1.left;
        top += toFloat(css(el, 'marginTop'));

        return {top: top, left: left, height: height, width: width};
    }

    var style;

    function addStyle() {
        if (style) {
            return;
        }
        style = append(document.head, '<style>').sheet;
        style.insertRule(
            ("." + targetClass + " > * {\n            margin-top: 0 !important;\n            transform: none !important;\n        }"), 0
        );
    }

    var Filter = {

        mixins: [Animate],

        args: 'target',

        props: {
            target: Boolean,
            selActive: Boolean
        },

        data: {
            target: null,
            selActive: false,
            attrItem: 'uk-filter-control',
            cls: 'uk-active',
            animation: 250
        },

        computed: {

            toggles: {

                get: function(ref, $el) {
                    var attrItem = ref.attrItem;

                    return $$(("[" + (this.attrItem) + "],[data-" + (this.attrItem) + "]"), $el);
                },

                watch: function() {
                    this.updateState();
                }

            },

            target: function(ref, $el) {
                var target = ref.target;

                return $(target, $el);
            },

            children: {

                get: function() {
                    return toNodes(this.target && this.target.children);
                },

                watch: function(list, old) {
                    if (!isEqualList(list, old)) {
                        this.updateState();
                    }
                }
            }

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return ("[" + (this.attrItem) + "],[data-" + (this.attrItem) + "]");
                },

                handler: function(e) {

                    e.preventDefault();
                    this.apply(e.current);

                }

            }

        ],

        connected: function() {
            var this$1 = this;


            this.updateState();

            if (this.selActive !== false) {
                var actives = $$(this.selActive, this.$el);
                this.toggles.forEach(function (el) { return toggleClass(el, this$1.cls, includes(actives, el)); });
            }

        },

        methods: {

            apply: function(el) {
                this.setState(mergeState(el, this.attrItem, this.getState()));
            },

            getState: function() {
                var this$1 = this;

                return this.toggles
                    .filter(function (item) { return hasClass(item, this$1.cls); })
                    .reduce(function (state, el) { return mergeState(el, this$1.attrItem, state); }, {filter: {'': ''}, sort: []});
            },

            setState: function(state, animate) {
                var this$1 = this;
                if ( animate === void 0 ) animate = true;


                state = assign({filter: {'': ''}, sort: []}, state);

                trigger(this.$el, 'beforeFilter', [this, state]);

                var ref = this;
                var children = ref.children;

                this.toggles.forEach(function (el) { return toggleClass(el, this$1.cls, !!matchFilter(el, this$1.attrItem, state)); });

                var apply = function () {

                    var selector = getSelector(state);

                    children.forEach(function (el) { return css(el, 'display', selector && !matches(el, selector) ? 'none' : ''); });

                    var ref = state.sort;
                    var sort = ref[0];
                    var order = ref[1];

                    if (sort) {
                        var sorted = sortItems(children, sort, order);
                        if (!isEqual(sorted, children)) {
                            sorted.forEach(function (el) { return append(this$1.target, el); });
                        }
                    }

                };

                if (animate) {
                    this.animate(apply).then(function () { return trigger(this$1.$el, 'afterFilter', [this$1]); });
                } else {
                    apply();
                    trigger(this.$el, 'afterFilter', [this]);
                }

            },

            updateState: function() {
                var this$1 = this;

                fastdom.write(function () { return this$1.setState(this$1.getState(), false); });
            }

        }

    };

    function getFilter(el, attr) {
        return parseOptions(data(el, attr), ['filter']);
    }

    function mergeState(el, attr, state) {

        var filterBy = getFilter(el, attr);
        var filter = filterBy.filter;
        var group = filterBy.group;
        var sort = filterBy.sort;
        var order = filterBy.order; if ( order === void 0 ) order = 'asc';

        if (filter || isUndefined(sort)) {

            if (group) {

                if (filter) {
                    delete state.filter[''];
                    state.filter[group] = filter;
                } else {
                    delete state.filter[group];

                    if (isEmpty(state.filter) || '' in state.filter) {
                        state.filter = {'': filter || ''};
                    }

                }

            } else {
                state.filter = {'': filter || ''};
            }

        }

        if (!isUndefined(sort)) {
            state.sort = [sort, order];
        }

        return state;
    }

    function matchFilter(el, attr, ref) {
        var stateFilter = ref.filter; if ( stateFilter === void 0 ) stateFilter = {'': ''};
        var ref_sort = ref.sort;
        var stateSort = ref_sort[0];
        var stateOrder = ref_sort[1];


        var ref$1 = getFilter(el, attr);
        var filter = ref$1.filter; if ( filter === void 0 ) filter = '';
        var group = ref$1.group; if ( group === void 0 ) group = '';
        var sort = ref$1.sort;
        var order = ref$1.order; if ( order === void 0 ) order = 'asc';

        return isUndefined(sort)
            ? group in stateFilter && filter === stateFilter[group]
                || !filter && group && !(group in stateFilter) && !stateFilter['']
            : stateSort === sort && stateOrder === order;
    }

    function isEqualList(listA, listB) {
        return listA.length === listB.length
            && listA.every(function (el) { return ~listB.indexOf(el); });
    }

    function getSelector(ref) {
        var filter = ref.filter;

        var selector = '';
        each(filter, function (value) { return selector += value || ''; });
        return selector;
    }

    function sortItems(nodes, sort, order) {
        return assign([], nodes).sort(function (a, b) { return data(a, sort).localeCompare(data(b, sort), undefined, {numeric: true}) * (order === 'asc' || -1); });
    }

    var Animations = {

        slide: {

            show: function(dir) {
                return [
                    {transform: translate(dir * -100)},
                    {transform: translate()}
                ];
            },

            percent: function(current) {
                return translated(current);
            },

            translate: function(percent, dir) {
                return [
                    {transform: translate(dir * -100 * percent)},
                    {transform: translate(dir * 100 * (1 - percent))}
                ];
            }

        }

    };

    function translated(el) {
        return Math.abs(css(el, 'transform').split(',')[4] / el.offsetWidth) || 0;
    }

    function translate(value, unit) {
        if ( value === void 0 ) value = 0;
        if ( unit === void 0 ) unit = '%';

        value += value ? unit : '';
        return isIE ? ("translateX(" + value + ")") : ("translate3d(" + value + ", 0, 0)"); // currently not translate3d in IE, translate3d within translate3d does not work while transitioning
    }

    function scale3d(value) {
        return ("scale3d(" + value + ", " + value + ", 1)");
    }

    var Animations$1 = assign({}, Animations, {

        fade: {

            show: function() {
                return [
                    {opacity: 0},
                    {opacity: 1}
                ];
            },

            percent: function(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function(percent) {
                return [
                    {opacity: 1 - percent},
                    {opacity: percent}
                ];
            }

        },

        scale: {

            show: function() {
                return [
                    {opacity: 0, transform: scale3d(1 - .2)},
                    {opacity: 1, transform: scale3d(1)}
                ];
            },

            percent: function(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function(percent) {
                return [
                    {opacity: 1 - percent, transform: scale3d(1 - .2 * percent)},
                    {opacity: percent, transform: scale3d(1 - .2 + .2 * percent)}
                ];
            }

        }

    });

    function Transitioner(prev, next, dir, ref) {
        var animation = ref.animation;
        var easing = ref.easing;


        var percent = animation.percent;
        var translate = animation.translate;
        var show = animation.show; if ( show === void 0 ) show = noop;
        var props = show(dir);
        var deferred = new Deferred();

        return {

            dir: dir,

            show: function(duration, percent, linear) {
                var this$1 = this;
                if ( percent === void 0 ) percent = 0;


                var timing = linear ? 'linear' : easing;
                duration -= Math.round(duration * clamp(percent, -1, 1));

                this.translate(percent);

                triggerUpdate(next, 'itemin', {percent: percent, duration: duration, timing: timing, dir: dir});
                triggerUpdate(prev, 'itemout', {percent: 1 - percent, duration: duration, timing: timing, dir: dir});

                Promise.all([
                    Transition.start(next, props[1], duration, timing),
                    Transition.start(prev, props[0], duration, timing)
                ]).then(function () {
                    this$1.reset();
                    deferred.resolve();
                }, noop);

                return deferred.promise;
            },

            stop: function() {
                return Transition.stop([next, prev]);
            },

            cancel: function() {
                Transition.cancel([next, prev]);
            },

            reset: function() {
                for (var prop in props[0]) {
                    css([next, prev], prop, '');
                }
            },

            forward: function(duration, percent) {
                if ( percent === void 0 ) percent = this.percent();

                Transition.cancel([next, prev]);
                return this.show(duration, percent, true);

            },

            translate: function(percent) {

                this.reset();

                var props = translate(percent, dir);
                css(next, props[1]);
                css(prev, props[0]);
                triggerUpdate(next, 'itemtranslatein', {percent: percent, dir: dir});
                triggerUpdate(prev, 'itemtranslateout', {percent: 1 - percent, dir: dir});

            },

            percent: function() {
                return percent(prev || next, next, dir);
            },

            getDistance: function() {
                return prev && prev.offsetWidth;
            }

        };

    }

    function triggerUpdate(el, type, data) {
        trigger(el, createEvent(type, false, false, data));
    }

    var SliderAutoplay = {

        props: {
            autoplay: Boolean,
            autoplayInterval: Number,
            pauseOnHover: Boolean
        },

        data: {
            autoplay: false,
            autoplayInterval: 7000,
            pauseOnHover: true
        },

        connected: function() {
            this.autoplay && this.startAutoplay();
        },

        disconnected: function() {
            this.stopAutoplay();
        },

        update: function() {
            attr(this.slides, 'tabindex', '-1');
        },

        events: [

            {

                name: 'visibilitychange',

                el: document,

                filter: function() {
                    return this.autoplay;
                },

                handler: function() {
                    if (document.hidden) {
                        this.stopAutoplay();
                    } else {
                        this.startAutoplay();
                    }
                }

            }

        ],

        methods: {

            startAutoplay: function() {
                var this$1 = this;


                this.stopAutoplay();

                this.interval = setInterval(
                    function () { return (!this$1.draggable || !$(':focus', this$1.$el))
                        && (!this$1.pauseOnHover || !matches(this$1.$el, ':hover'))
                        && !this$1.stack.length
                        && this$1.show('next'); },
                    this.autoplayInterval
                );

            },

            stopAutoplay: function() {
                this.interval && clearInterval(this.interval);
            }

        }

    };

    var SliderDrag = {

        props: {
            draggable: Boolean
        },

        data: {
            draggable: true,
            threshold: 10
        },

        created: function() {
            var this$1 = this;


            ['start', 'move', 'end'].forEach(function (key) {

                var fn = this$1[key];
                this$1[key] = function (e) {

                    var pos = getEventPos(e).x * (isRtl ? -1 : 1);

                    this$1.prevPos = pos !== this$1.pos ? this$1.pos : this$1.prevPos;
                    this$1.pos = pos;

                    fn(e);
                };

            });

        },

        events: [

            {

                name: pointerDown,

                delegate: function() {
                    return this.selSlides;
                },

                handler: function(e) {

                    if (!this.draggable
                        || !isTouch(e) && hasTextNodesOnly(e.target)
                        || e.button > 0
                        || this.length < 2
                    ) {
                        return;
                    }

                    this.start(e);
                }

            },

            {

                // Workaround for iOS 11 bug: https://bugs.webkit.org/show_bug.cgi?id=184250

                name: 'touchmove',
                passive: false,
                handler: 'move',
                delegate: function() {
                    return this.selSlides;
                }

            },

            {
                name: 'dragstart',

                handler: function(e) {
                    e.preventDefault();
                }
            }

        ],

        methods: {

            start: function() {
                var this$1 = this;


                this.drag = this.pos;

                if (this._transitioner) {

                    this.percent = this._transitioner.percent();
                    this.drag += this._transitioner.getDistance() * this.percent * this.dir;

                    this._transitioner.cancel();
                    this._transitioner.translate(this.percent);

                    this.dragging = true;

                    this.stack = [];

                } else {
                    this.prevIndex = this.index;
                }

                // See above workaround notice
                var off = pointerMove !== 'touchmove'
                    ? on(document, pointerMove, this.move, {passive: false})
                    : noop;
                this.unbindMove = function () {
                    off();
                    this$1.unbindMove = null;
                };
                on(window, 'scroll', this.unbindMove);
                on(document, pointerUp, this.end, true);

                css(this.list, 'userSelect', 'none');

            },

            move: function(e) {
                var this$1 = this;


                // See above workaround notice
                if (!this.unbindMove) {
                    return;
                }

                var distance = this.pos - this.drag;

                if (distance === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(distance) < this.threshold) {
                    return;
                }

                css(this.list, 'pointerEvents', 'none');

                e.cancelable && e.preventDefault();

                this.dragging = true;
                this.dir = (distance < 0 ? 1 : -1);

                var ref = this;
                var slides = ref.slides;
                var ref$1 = this;
                var prevIndex = ref$1.prevIndex;
                var dis = Math.abs(distance);
                var nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
                var width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

                while (nextIndex !== prevIndex && dis > width) {

                    this.drag -= width * this.dir;

                    prevIndex = nextIndex;
                    dis -= width;
                    nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
                    width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

                }

                this.percent = dis / width;

                var prev = slides[prevIndex];
                var next = slides[nextIndex];
                var changed = this.index !== nextIndex;
                var edge = prevIndex === nextIndex;

                var itemShown;

                [this.index, this.prevIndex].filter(function (i) { return !includes([nextIndex, prevIndex], i); }).forEach(function (i) {
                    trigger(slides[i], 'itemhidden', [this$1]);

                    if (edge) {
                        itemShown = true;
                        this$1.prevIndex = prevIndex;
                    }

                });

                if (this.index === prevIndex && this.prevIndex !== prevIndex || itemShown) {
                    trigger(slides[this.index], 'itemshown', [this]);
                }

                if (changed) {
                    this.prevIndex = prevIndex;
                    this.index = nextIndex;

                    !edge && trigger(prev, 'beforeitemhide', [this]);
                    trigger(next, 'beforeitemshow', [this]);
                }

                this._transitioner = this._translate(Math.abs(this.percent), prev, !edge && next);

                if (changed) {
                    !edge && trigger(prev, 'itemhide', [this]);
                    trigger(next, 'itemshow', [this]);
                }

            },

            end: function() {

                off(window, 'scroll', this.unbindMove);
                this.unbindMove && this.unbindMove();
                off(document, pointerUp, this.end, true);

                if (this.dragging) {

                    this.dragging = null;

                    if (this.index === this.prevIndex) {
                        this.percent = 1 - this.percent;
                        this.dir *= -1;
                        this._show(false, this.index, true);
                        this._transitioner = null;
                    } else {

                        var dirChange = (isRtl ? this.dir * (isRtl ? 1 : -1) : this.dir) < 0 === this.prevPos > this.pos;
                        this.index = dirChange ? this.index : this.prevIndex;

                        if (dirChange) {
                            this.percent = 1 - this.percent;
                        }

                        this.show(this.dir > 0 && !dirChange || this.dir < 0 && dirChange ? 'next' : 'previous', true);
                    }

                }

                css(this.list, {userSelect: '', pointerEvents: ''});

                this.drag
                    = this.percent
                    = null;

            }

        }

    };

    function hasTextNodesOnly(el) {
        return !el.children.length && el.childNodes.length;
    }

    var SliderNav = {

        data: {
            selNav: false
        },

        computed: {

            nav: function(ref, $el) {
                var selNav = ref.selNav;

                return $(selNav, $el);
            },

            selNavItem: function(ref) {
                var attrItem = ref.attrItem;

                return ("[" + attrItem + "],[data-" + attrItem + "]");
            },

            navItems: function(_, $el) {
                return $$(this.selNavItem, $el);
            }

        },

        update: {

            write: function() {
                var this$1 = this;


                if (this.nav && this.length !== this.nav.children.length) {
                    html(this.nav, this.slides.map(function (_, i) { return ("<li " + (this$1.attrItem) + "=\"" + i + "\"><a href=\"#\"></a></li>"); }).join(''));
                }

                toggleClass($$(this.selNavItem, this.$el).concat(this.nav), 'uk-hidden', !this.maxIndex);

                this.updateNav();

            },

            events: ['resize']

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return this.selNavItem;
                },

                handler: function(e) {
                    e.preventDefault();
                    this.show(data(e.current, this.attrItem));
                }

            },

            {

                name: 'itemshow',
                handler: 'updateNav'

            }

        ],

        methods: {

            updateNav: function() {
                var this$1 = this;


                var i = this.getValidIndex();
                this.navItems.forEach(function (el) {

                    var cmd = data(el, this$1.attrItem);

                    toggleClass(el, this$1.clsActive, toNumber(cmd) === i);
                    toggleClass(el, 'uk-invisible', this$1.finite && (cmd === 'previous' && i === 0 || cmd === 'next' && i >= this$1.maxIndex));
                });

            }

        }

    };

    var Slider = {

        mixins: [SliderAutoplay, SliderDrag, SliderNav],

        props: {
            clsActivated: Boolean,
            easing: String,
            index: Number,
            finite: Boolean,
            velocity: Number
        },

        data: function () { return ({
            easing: 'ease',
            finite: false,
            velocity: 1,
            index: 0,
            prevIndex: -1,
            stack: [],
            percent: 0,
            clsActive: 'uk-active',
            clsActivated: false,
            Transitioner: false,
            transitionOptions: {}
        }); },

        connected: function() {
            this.prevIndex = -1;
            this.index = this.getValidIndex(this.index);
            this.stack = [];
        },

        disconnected: function() {
            removeClass(this.slides, this.clsActive);
        },

        computed: {

            duration: function(ref, $el) {
                var velocity = ref.velocity;

                return speedUp($el.offsetWidth / velocity);
            },

            list: function(ref, $el) {
                var selList = ref.selList;

                return $(selList, $el);
            },

            maxIndex: function() {
                return this.length - 1;
            },

            selSlides: function(ref) {
                var selList = ref.selList;

                return (selList + " > *");
            },

            slides: {

                get: function() {
                    return toNodes(this.list.children);
                },

                watch: function() {
                    this.$reset();
                }

            },

            length: function() {
                return this.slides.length;
            }

        },

        events: {

            itemshown: function() {
                this.$update(this.list);
            }

        },

        methods: {

            show: function(index, force) {
                var this$1 = this;
                if ( force === void 0 ) force = false;


                if (this.dragging || !this.length) {
                    return;
                }

                var ref = this;
                var stack = ref.stack;
                var queueIndex = force ? 0 : stack.length;
                var reset = function () {
                    stack.splice(queueIndex, 1);

                    if (stack.length) {
                        this$1.show(stack.shift(), true);
                    }
                };

                stack[force ? 'unshift' : 'push'](index);

                if (!force && stack.length > 1) {

                    if (stack.length === 2) {
                        this._transitioner.forward(Math.min(this.duration, 200));
                    }

                    return;
                }

                var prevIndex = this.index;
                var prev = hasClass(this.slides, this.clsActive) && this.slides[prevIndex];
                var nextIndex = this.getIndex(index, this.index);
                var next = this.slides[nextIndex];

                if (prev === next) {
                    reset();
                    return;
                }

                this.dir = getDirection(index, prevIndex);
                this.prevIndex = prevIndex;
                this.index = nextIndex;

                prev && trigger(prev, 'beforeitemhide', [this]);
                if (!trigger(next, 'beforeitemshow', [this, prev])) {
                    this.index = this.prevIndex;
                    reset();
                    return;
                }

                var promise = this._show(prev, next, force).then(function () {

                    prev && trigger(prev, 'itemhidden', [this$1]);
                    trigger(next, 'itemshown', [this$1]);

                    return new Promise(function (resolve) {
                        fastdom.write(function () {
                            stack.shift();
                            if (stack.length) {
                                this$1.show(stack.shift(), true);
                            } else {
                                this$1._transitioner = null;
                            }
                            resolve();
                        });
                    });

                });

                prev && trigger(prev, 'itemhide', [this]);
                trigger(next, 'itemshow', [this]);

                return promise;

            },

            getIndex: function(index, prev) {
                if ( index === void 0 ) index = this.index;
                if ( prev === void 0 ) prev = this.index;

                return clamp(getIndex(index, this.slides, prev, this.finite), 0, this.maxIndex);
            },

            getValidIndex: function(index, prevIndex) {
                if ( index === void 0 ) index = this.index;
                if ( prevIndex === void 0 ) prevIndex = this.prevIndex;

                return this.getIndex(index, prevIndex);
            },

            _show: function(prev, next, force) {

                this._transitioner = this._getTransitioner(
                    prev,
                    next,
                    this.dir,
                    assign({
                        easing: force
                            ? next.offsetWidth < 600
                                ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' /* easeOutQuad */
                                : 'cubic-bezier(0.165, 0.84, 0.44, 1)' /* easeOutQuart */
                            : this.easing
                    }, this.transitionOptions)
                );

                if (!force && !prev) {
                    this._transitioner.translate(1);
                    return Promise.resolve();
                }

                var ref = this.stack;
                var length = ref.length;
                return this._transitioner[length > 1 ? 'forward' : 'show'](length > 1 ? Math.min(this.duration, 75 + 75 / (length - 1)) : this.duration, this.percent);

            },

            _getDistance: function(prev, next) {
                return this._getTransitioner(prev, prev !== next && next).getDistance();
            },

            _translate: function(percent, prev, next) {
                if ( prev === void 0 ) prev = this.prevIndex;
                if ( next === void 0 ) next = this.index;

                var transitioner = this._getTransitioner(prev !== next ? prev : false, next);
                transitioner.translate(percent);
                return transitioner;
            },

            _getTransitioner: function(prev, next, dir, options) {
                if ( prev === void 0 ) prev = this.prevIndex;
                if ( next === void 0 ) next = this.index;
                if ( dir === void 0 ) dir = this.dir || 1;
                if ( options === void 0 ) options = this.transitionOptions;

                return new this.Transitioner(
                    isNumber(prev) ? this.slides[prev] : prev,
                    isNumber(next) ? this.slides[next] : next,
                    dir * (isRtl ? -1 : 1),
                    options
                );
            }

        }

    };

    function getDirection(index, prevIndex) {
        return index === 'next'
            ? 1
            : index === 'previous'
                ? -1
                : index < prevIndex
                    ? -1
                    : 1;
    }

    function speedUp(x) {
        return .5 * x + 300; // parabola through (400,500; 600,600; 1800,1200)
    }

    var Slideshow = {

        mixins: [Slider],

        props: {
            animation: String
        },

        data: {
            animation: 'slide',
            clsActivated: 'uk-transition-active',
            Animations: Animations,
            Transitioner: Transitioner
        },

        computed: {

            animation: function(ref) {
                var animation = ref.animation;
                var Animations = ref.Animations;

                return assign(animation in Animations ? Animations[animation] : Animations.slide, {name: animation});
            },

            transitionOptions: function() {
                return {animation: this.animation};
            }

        },

        events: {

            'itemshow itemhide itemshown itemhidden': function(ref) {
                var target = ref.target;

                this.$update(target);
            },

            beforeitemshow: function(ref) {
                var target = ref.target;

                addClass(target, this.clsActive);
            },

            itemshown: function(ref) {
                var target = ref.target;

                addClass(target, this.clsActivated);
            },

            itemhidden: function(ref) {
                var target = ref.target;

                removeClass(target, this.clsActive, this.clsActivated);
            }

        }

    };

    var lightboxPanel = {

        mixins: [Container, Modal, Togglable, Slideshow],

        functional: true,

        props: {
            delayControls: Number,
            preload: Number,
            videoAutoplay: Boolean,
            template: String
        },

        data: function () { return ({
            preload: 1,
            videoAutoplay: false,
            delayControls: 3000,
            items: [],
            cls: 'uk-open',
            clsPage: 'uk-lightbox-page',
            selList: '.uk-lightbox-items',
            attrItem: 'uk-lightbox-item',
            selClose: '.uk-close-large',
            selCaption: '.uk-lightbox-caption',
            pauseOnHover: false,
            velocity: 2,
            Animations: Animations$1,
            template: "<div class=\"uk-lightbox uk-overflow-hidden\"> <ul class=\"uk-lightbox-items\"></ul> <div class=\"uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque\"> <button class=\"uk-lightbox-toolbar-icon uk-close-large\" type=\"button\" uk-close></button> </div> <a class=\"uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade\" href=\"#\" uk-slidenav-previous uk-lightbox-item=\"previous\"></a> <a class=\"uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade\" href=\"#\" uk-slidenav-next uk-lightbox-item=\"next\"></a> <div class=\"uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque\"></div> </div>"
        }); },

        created: function() {

            var $el = $(this.template);
            var list = $(this.selList, $el);
            this.items.forEach(function () { return append(list, '<li></li>'); });

            this.$mount(append(this.container, $el));

        },

        computed: {

            caption: function(ref, $el) {
                var selCaption = ref.selCaption;

                return $('.uk-lightbox-caption', $el);
            }

        },

        events: [

            {

                name: (pointerMove + " " + pointerDown + " keydown"),

                handler: 'showControls'

            },

            {

                name: 'click',

                self: true,

                delegate: function() {
                    return this.selSlides;
                },

                handler: function(e) {

                    if (e.defaultPrevented) {
                        return;
                    }

                    this.hide();
                }

            },

            {

                name: 'shown',

                self: true,

                handler: function() {
                    this.showControls();
                }

            },

            {

                name: 'hide',

                self: true,

                handler: function() {

                    this.hideControls();

                    removeClass(this.slides, this.clsActive);
                    Transition.stop(this.slides);

                }
            },

            {

                name: 'hidden',

                self: true,

                handler: function() {
                    this.$destroy(true);
                }

            },

            {

                name: 'keyup',

                el: document,

                handler: function(e) {

                    if (!this.isToggled(this.$el)) {
                        return;
                    }

                    switch (e.keyCode) {
                        case 37:
                            this.show('previous');
                            break;
                        case 39:
                            this.show('next');
                            break;
                    }
                }
            },

            {

                name: 'beforeitemshow',

                handler: function(e) {

                    if (this.isToggled()) {
                        return;
                    }

                    this.draggable = false;

                    e.preventDefault();

                    this.toggleNow(this.$el, true);

                    this.animation = Animations$1['scale'];
                    removeClass(e.target, this.clsActive);
                    this.stack.splice(1, 0, this.index);

                }

            },

            {

                name: 'itemshow',

                handler: function(ref) {
                    var target = ref.target;


                    var i = index(target);
                    var ref$1 = this.getItem(i);
                    var caption = ref$1.caption;

                    css(this.caption, 'display', caption ? '' : 'none');
                    html(this.caption, caption);

                    for (var j = 0; j <= this.preload; j++) {
                        this.loadItem(this.getIndex(i + j));
                        this.loadItem(this.getIndex(i - j));
                    }

                }

            },

            {

                name: 'itemshown',

                handler: function() {
                    this.draggable = this.$props.draggable;
                }

            },

            {

                name: 'itemload',

                handler: function(_, item) {
                    var this$1 = this;


                    var source = item.source;
                    var type = item.type;
                    var alt = item.alt;

                    this.setItem(item, '<span uk-spinner></span>');

                    if (!source) {
                        return;
                    }

                    var matches;

                    // Image
                    if (type === 'image' || source.match(/\.(jp(e)?g|png|gif|svg|webp)($|\?)/i)) {

                        getImage(source).then(
                            function (img) { return this$1.setItem(item, ("<img width=\"" + (img.width) + "\" height=\"" + (img.height) + "\" src=\"" + source + "\" alt=\"" + (alt ? alt : '') + "\">")); },
                            function () { return this$1.setError(item); }
                        );

                        // Video
                    } else if (type === 'video' || source.match(/\.(mp4|webm|ogv)($|\?)/i)) {

                        var video = $(("<video controls playsinline" + (item.poster ? (" poster=\"" + (item.poster) + "\"") : '') + " uk-video=\"" + (this.videoAutoplay) + "\"></video>"));
                        attr(video, 'src', source);

                        once(video, 'error loadedmetadata', function (type) {
                            if (type === 'error') {
                                this$1.setError(item);
                            } else {
                                attr(video, {width: video.videoWidth, height: video.videoHeight});
                                this$1.setItem(item, video);
                            }
                        });

                        // Iframe
                    } else if (type === 'iframe' || source.match(/\.(html|php)($|\?)/i)) {

                        this.setItem(item, ("<iframe class=\"uk-lightbox-iframe\" src=\"" + source + "\" frameborder=\"0\" allowfullscreen></iframe>"));

                        // YouTube
                    } else if ((matches = source.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/watch\?v=([^&\s]+)/) || source.match(/()youtu\.be\/(.*)/))) {

                        var id = matches[2];
                        var setIframe = function (width, height) {
                            if ( width === void 0 ) width = 640;
                            if ( height === void 0 ) height = 450;

                            return this$1.setItem(item, getIframe(("https://www.youtube" + (matches[1] || '') + ".com/embed/" + id), width, height, this$1.videoAutoplay));
                        };

                        getImage(("https://img.youtube.com/vi/" + id + "/maxresdefault.jpg")).then(
                            function (ref) {
                                var width = ref.width;
                                var height = ref.height;

                                // YouTube default 404 thumb, fall back to low resolution
                                if (width === 120 && height === 90) {
                                    getImage(("https://img.youtube.com/vi/" + id + "/0.jpg")).then(
                                        function (ref) {
                                            var width = ref.width;
                                            var height = ref.height;

                                            return setIframe(width, height);
                                    },
                                        setIframe
                                    );
                                } else {
                                    setIframe(width, height);
                                }
                            },
                            setIframe
                        );

                        // Vimeo
                    } else if ((matches = source.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/))) {

                        ajax(("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + (encodeURI(source))), {responseType: 'json', withCredentials: false})
                            .then(
                                function (ref) {
                                    var ref_response = ref.response;
                                    var height = ref_response.height;
                                    var width = ref_response.width;

                                    return this$1.setItem(item, getIframe(("https://player.vimeo.com/video/" + (matches[2])), width, height, this$1.videoAutoplay));
                        },
                                function () { return this$1.setError(item); }
                            );

                    }

                }

            }

        ],

        methods: {

            loadItem: function(index) {
                if ( index === void 0 ) index = this.index;


                var item = this.getItem(index);

                if (item.content) {
                    return;
                }

                trigger(this.$el, 'itemload', [item]);
            },

            getItem: function(index) {
                if ( index === void 0 ) index = this.index;

                return this.items[index] || {};
            },

            setItem: function(item, content) {
                assign(item, {content: content});
                var el = html(this.slides[this.items.indexOf(item)], content);
                trigger(this.$el, 'itemloaded', [this, el]);
                this.$update(el);
            },

            setError: function(item) {
                this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
            },

            showControls: function() {

                clearTimeout(this.controlsTimer);
                this.controlsTimer = setTimeout(this.hideControls, this.delayControls);

                addClass(this.$el, 'uk-active', 'uk-transition-active');

            },

            hideControls: function() {
                removeClass(this.$el, 'uk-active', 'uk-transition-active');
            }

        }

    };

    function getIframe(src, width, height, autoplay) {
        return ("<iframe src=\"" + src + "\" width=\"" + width + "\" height=\"" + height + "\" style=\"max-width: 100%; box-sizing: border-box;\" frameborder=\"0\" allowfullscreen uk-video=\"autoplay: " + autoplay + "\" uk-responsive></iframe>");
    }

    var Lightbox = {

        install: install$2,

        props: {toggle: String},

        data: {toggle: 'a'},

        computed: {

            toggles: {

                get: function(ref, $el) {
                    var toggle = ref.toggle;

                    return $$(toggle, $el);
                },

                watch: function() {
                    this.hide();
                }

            },

            items: function() {
                return uniqueBy(this.toggles.map(toItem), 'source');
            }

        },

        disconnected: function() {
            this.hide();
        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return ((this.toggle) + ":not(.uk-disabled)");
                },

                handler: function(e) {
                    e.preventDefault();
                    var src = data(e.current, 'href');
                    this.show(findIndex(this.items, function (ref) {
                        var source = ref.source;

                        return source === src;
                    }));
                }

            }

        ],

        methods: {

            show: function(index) {
                var this$1 = this;


                this.panel = this.panel || this.$create('lightboxPanel', assign({}, this.$props, {items: this.items}));

                on(this.panel.$el, 'hidden', function () { return this$1.panel = false; });

                return this.panel.show(index);

            },

            hide: function() {

                return this.panel && this.panel.hide();

            }

        }

    };

    function install$2(UIkit, Lightbox) {

        if (!UIkit.lightboxPanel) {
            UIkit.component('lightboxPanel', lightboxPanel);
        }

        assign(
            Lightbox.props,
            UIkit.component('lightboxPanel').options.props
        );

    }

    function toItem(el) {
        return ['href', 'caption', 'type', 'poster', 'alt'].reduce(function (obj, attr) {
            obj[attr === 'href' ? 'source' : attr] = data(el, attr);
            return obj;
        }, {});
    }

    var obj;

    var containers = {};

    var Notification = {

        functional: true,

        args: ['message', 'status'],

        data: {
            message: '',
            status: '',
            timeout: 5000,
            group: null,
            pos: 'top-center',
            clsClose: 'uk-notification-close',
            clsMsg: 'uk-notification-message'
        },

        install: install$3,

        computed: {

            marginProp: function(ref) {
                var pos = ref.pos;

                return ("margin" + (startsWith(pos, 'top') ? 'Top' : 'Bottom'));
            },

            startProps: function() {
                var obj;

                return ( obj = {opacity: 0}, obj[this.marginProp] = -this.$el.offsetHeight, obj );
            }

        },

        created: function() {

            if (!containers[this.pos]) {
                containers[this.pos] = append(this.$container, ("<div class=\"uk-notification uk-notification-" + (this.pos) + "\"></div>"));
            }

            var container = css(containers[this.pos], 'display', 'block');

            this.$mount(append(container,
                ("<div class=\"" + (this.clsMsg) + (this.status ? (" " + (this.clsMsg) + "-" + (this.status)) : '') + "\"> <a href=\"#\" class=\"" + (this.clsClose) + "\" data-uk-close></a> <div>" + (this.message) + "</div> </div>")
            ));

        },

        connected: function() {
            var this$1 = this;
            var obj;


            var margin = toFloat(css(this.$el, this.marginProp));
            Transition.start(
                css(this.$el, this.startProps),
                ( obj = {opacity: 1}, obj[this.marginProp] = margin, obj )
            ).then(function () {
                if (this$1.timeout) {
                    this$1.timer = setTimeout(this$1.close, this$1.timeout);
                }
            });

        },

        events: ( obj = {

            click: function(e) {
                if (closest(e.target, 'a[href="#"],a[href=""]')) {
                    e.preventDefault();
                }
                this.close();
            }

        }, obj[pointerEnter] = function () {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
            }, obj[pointerLeave] = function () {
                if (this.timeout) {
                    this.timer = setTimeout(this.close, this.timeout);
                }
            }, obj ),

        methods: {

            close: function(immediate) {
                var this$1 = this;


                var removeFn = function () {

                    trigger(this$1.$el, 'close', [this$1]);
                    remove(this$1.$el);

                    if (!containers[this$1.pos].children.length) {
                        css(containers[this$1.pos], 'display', 'none');
                    }

                };

                if (this.timer) {
                    clearTimeout(this.timer);
                }

                if (immediate) {
                    removeFn();
                } else {
                    Transition.start(this.$el, this.startProps).then(removeFn);
                }
            }

        }

    };

    function install$3(UIkit) {
        UIkit.notification.closeAll = function (group, immediate) {
            apply(document.body, function (el) {
                var notification = UIkit.getComponent(el, 'notification');
                if (notification && (!group || group === notification.group)) {
                    notification.close(immediate);
                }
            });
        };
    }

    var props = ['x', 'y', 'bgx', 'bgy', 'rotate', 'scale', 'color', 'backgroundColor', 'borderColor', 'opacity', 'blur', 'hue', 'grayscale', 'invert', 'saturate', 'sepia', 'fopacity', 'stroke'];

    var Parallax = {

        mixins: [Media],

        props: props.reduce(function (props, prop) {
            props[prop] = 'list';
            return props;
        }, {}),

        data: props.reduce(function (data, prop) {
            data[prop] = undefined;
            return data;
        }, {}),

        computed: {

            props: function(properties, $el) {
                var this$1 = this;


                return props.reduce(function (props, prop) {

                    if (isUndefined(properties[prop])) {
                        return props;
                    }

                    var isColor = prop.match(/color/i);
                    var isCssProp = isColor || prop === 'opacity';

                    var pos, bgPos, diff;
                    var steps = properties[prop].slice(0);

                    if (isCssProp) {
                        css($el, prop, '');
                    }

                    if (steps.length < 2) {
                        steps.unshift((prop === 'scale'
                            ? 1
                            : isCssProp
                                ? css($el, prop)
                                : 0) || 0);
                    }

                    var unit = getUnit(steps);

                    if (isColor) {

                        var ref = $el.style;
                        var color = ref.color;
                        steps = steps.map(function (step) { return parseColor($el, step); });
                        $el.style.color = color;

                    } else if (startsWith(prop, 'bg')) {

                        var attr = prop === 'bgy' ? 'height' : 'width';
                        steps = steps.map(function (step) { return toPx(step, attr, this$1.$el); });

                        css($el, ("background-position-" + (prop[2])), '');
                        bgPos = css($el, 'backgroundPosition').split(' ')[prop[2] === 'x' ? 0 : 1]; // IE 11 can't read background-position-[x|y]

                        if (this$1.covers) {

                            var min = Math.min.apply(Math, steps);
                            var max = Math.max.apply(Math, steps);
                            var down = steps.indexOf(min) < steps.indexOf(max);

                            diff = max - min;

                            steps = steps.map(function (step) { return step - (down ? min : max); });
                            pos = (down ? -diff : 0) + "px";

                        } else {

                            pos = bgPos;

                        }

                    } else {

                        steps = steps.map(toFloat);

                    }

                    if (prop === 'stroke') {

                        if (!steps.some(function (step) { return step; })) {
                            return props;
                        }

                        var length = getMaxPathLength(this$1.$el);
                        css($el, 'strokeDasharray', length);

                        if (unit === '%') {
                            steps = steps.map(function (step) { return step * length / 100; });
                        }

                        steps = steps.reverse();

                        prop = 'strokeDashoffset';
                    }

                    props[prop] = {steps: steps, unit: unit, pos: pos, bgPos: bgPos, diff: diff};

                    return props;

                }, {});

            },

            bgProps: function() {
                var this$1 = this;

                return ['bgx', 'bgy'].filter(function (bg) { return bg in this$1.props; });
            },

            covers: function(_, $el) {
                return covers($el);
            }

        },

        disconnected: function() {
            delete this._image;
        },

        update: {

            read: function(data) {
                var this$1 = this;


                data.active = this.matchMedia;

                if (!data.active) {
                    return;
                }

                if (!data.image && this.covers && this.bgProps.length) {
                    var src = css(this.$el, 'backgroundImage').replace(/^none|url\(["']?(.+?)["']?\)$/, '$1');

                    if (src) {
                        var img = new Image();
                        img.src = src;
                        data.image = img;

                        if (!img.naturalWidth) {
                            img.onload = function () { return this$1.$emit(); };
                        }
                    }

                }

                var image = data.image;

                if (!image || !image.naturalWidth) {
                    return;
                }

                var dimEl = {
                    width: this.$el.offsetWidth,
                    height: this.$el.offsetHeight
                };
                var dimImage = {
                    width: image.naturalWidth,
                    height: image.naturalHeight
                };

                var dim = Dimensions.cover(dimImage, dimEl);

                this.bgProps.forEach(function (prop) {

                    var ref = this$1.props[prop];
                    var diff = ref.diff;
                    var bgPos = ref.bgPos;
                    var steps = ref.steps;
                    var attr = prop === 'bgy' ? 'height' : 'width';
                    var span = dim[attr] - dimEl[attr];

                    if (span < diff) {
                        dimEl[attr] = dim[attr] + diff - span;
                    } else if (span > diff) {

                        var posPercentage = dimEl[attr] / toPx(bgPos, attr, this$1.$el);

                        if (posPercentage) {
                            this$1.props[prop].steps = steps.map(function (step) { return step - (span - diff) / posPercentage; });
                        }
                    }

                    dim = Dimensions.cover(dimImage, dimEl);
                });

                data.dim = dim;
            },

            write: function(ref) {
                var dim = ref.dim;
                var active = ref.active;


                if (!active) {
                    css(this.$el, {backgroundSize: '', backgroundRepeat: ''});
                    return;
                }

                dim && css(this.$el, {
                    backgroundSize: ((dim.width) + "px " + (dim.height) + "px"),
                    backgroundRepeat: 'no-repeat'
                });

            },

            events: ['resize']

        },

        methods: {

            reset: function() {
                var this$1 = this;

                each(this.getCss(0), function (_, prop) { return css(this$1.$el, prop, ''); });
            },

            getCss: function(percent) {

                var ref = this;
                var props = ref.props;
                return Object.keys(props).reduce(function (css, prop) {

                    var ref = props[prop];
                    var steps = ref.steps;
                    var unit = ref.unit;
                    var pos = ref.pos;
                    var value = getValue(steps, percent);

                    switch (prop) {

                        // transforms
                        case 'x':
                        case 'y': {
                            unit = unit || 'px';
                            css.transform += " translate" + (ucfirst(prop)) + "(" + (toFloat(value).toFixed(unit === 'px' ? 0 : 2)) + unit + ")";
                            break;
                        }
                        case 'rotate':
                            unit = unit || 'deg';
                            css.transform += " rotate(" + (value + unit) + ")";
                            break;
                        case 'scale':
                            css.transform += " scale(" + value + ")";
                            break;

                        // bg image
                        case 'bgy':
                        case 'bgx':
                            css[("background-position-" + (prop[2]))] = "calc(" + pos + " + " + value + "px)";
                            break;

                        // color
                        case 'color':
                        case 'backgroundColor':
                        case 'borderColor': {

                            var ref$1 = getStep(steps, percent);
                            var start = ref$1[0];
                            var end = ref$1[1];
                            var p = ref$1[2];

                            css[prop] = "rgba(" + (start.map(function (value, i) {
                                    value = value + p * (end[i] - value);
                                    return i === 3 ? toFloat(value) : parseInt(value, 10);
                                }).join(',')) + ")";
                            break;
                        }
                        // CSS Filter
                        case 'blur':
                            unit = unit || 'px';
                            css.filter += " blur(" + (value + unit) + ")";
                            break;
                        case 'hue':
                            unit = unit || 'deg';
                            css.filter += " hue-rotate(" + (value + unit) + ")";
                            break;
                        case 'fopacity':
                            unit = unit || '%';
                            css.filter += " opacity(" + (value + unit) + ")";
                            break;
                        case 'grayscale':
                        case 'invert':
                        case 'saturate':
                        case 'sepia':
                            unit = unit || '%';
                            css.filter += " " + prop + "(" + (value + unit) + ")";
                            break;
                        default:
                            css[prop] = value;
                    }

                    return css;

                }, {transform: '', filter: ''});

            }

        }

    };

    function parseColor(el, color) {
        return css(css(el, 'color', color), 'color')
            .split(/[(),]/g)
            .slice(1, -1)
            .concat(1)
            .slice(0, 4)
            .map(toFloat);
    }

    function getStep(steps, percent) {
        var count = steps.length - 1;
        var index = Math.min(Math.floor(count * percent), count - 1);
        var step = steps.slice(index, index + 2);

        step.push(percent === 1 ? 1 : percent % (1 / count) * count);

        return step;
    }

    function getValue(steps, percent, digits) {
        if ( digits === void 0 ) digits = 2;

        var ref = getStep(steps, percent);
        var start = ref[0];
        var end = ref[1];
        var p = ref[2];
        return (isNumber(start)
            ? start + Math.abs(start - end) * p * (start < end ? 1 : -1)
            : +end
        ).toFixed(digits);
    }

    function getUnit(steps) {
        return steps.reduce(function (unit, step) { return isString(step) && step.replace(/-|\d/g, '').trim() || unit; }, '');
    }

    function covers(el) {
        var ref = el.style;
        var backgroundSize = ref.backgroundSize;
        var covers = css(css(el, 'backgroundSize', ''), 'backgroundSize') === 'cover';
        el.style.backgroundSize = backgroundSize;
        return covers;
    }

    var Parallax$1 = {

        mixins: [Parallax],

        props: {
            target: String,
            viewport: Number,
            easing: Number
        },

        data: {
            target: false,
            viewport: 1,
            easing: 1
        },

        computed: {

            target: function(ref, $el) {
                var target = ref.target;

                return getOffsetElement(target && query(target, $el) || $el);
            }

        },

        update: {

            read: function(ref, type) {
                var percent = ref.percent;
                var active = ref.active;


                if (type !== 'scroll') {
                    percent = false;
                }

                if (!active) {
                    return;
                }

                var prev = percent;
                percent = ease$1(scrolledOver(this.target) / (this.viewport || 1), this.easing);

                return {
                    percent: percent,
                    style: prev !== percent ? this.getCss(percent) : false
                };
            },

            write: function(ref) {
                var style = ref.style;
                var active = ref.active;


                if (!active) {
                    this.reset();
                    return;
                }

                style && css(this.$el, style);

            },

            events: ['scroll', 'resize']
        }

    };

    function ease$1(percent, easing) {
        return clamp(percent * (1 - (easing - easing * percent)));
    }

    // SVG elements do not inherit from HTMLElement
    function getOffsetElement(el) {
        return el
            ? 'offsetTop' in el
                ? el
                : getOffsetElement(el.parentNode)
            : document.body;
    }

    var SliderReactive = {

        update: {

            write: function() {

                if (this.stack.length || this.dragging) {
                    return;
                }

                var index = this.getValidIndex(this.index);

                if (!~this.prevIndex || this.index !== index) {
                    this.show(index);
                }

            },

            events: ['resize']

        }

    };

    function Transitioner$1 (prev, next, dir, ref) {
        var center = ref.center;
        var easing = ref.easing;
        var list = ref.list;


        var deferred = new Deferred();

        var from = prev
            ? getLeft(prev, list, center)
            : getLeft(next, list, center) + bounds(next).width * dir;
        var to = next
            ? getLeft(next, list, center)
            : from + bounds(prev).width * dir * (isRtl ? -1 : 1);

        return {

            dir: dir,

            show: function(duration, percent, linear) {
                if ( percent === void 0 ) percent = 0;


                var timing = linear ? 'linear' : easing;
                duration -= Math.round(duration * clamp(percent, -1, 1));

                this.translate(percent);

                prev && this.updateTranslates();
                percent = prev ? percent : clamp(percent, 0, 1);
                triggerUpdate$1(this.getItemIn(), 'itemin', {percent: percent, duration: duration, timing: timing, dir: dir});
                prev && triggerUpdate$1(this.getItemIn(true), 'itemout', {percent: 1 - percent, duration: duration, timing: timing, dir: dir});

                Transition
                    .start(list, {transform: translate(-to * (isRtl ? -1 : 1), 'px')}, duration, timing)
                    .then(deferred.resolve, noop);

                return deferred.promise;

            },

            stop: function() {
                return Transition.stop(list);
            },

            cancel: function() {
                Transition.cancel(list);
            },

            reset: function() {
                css(list, 'transform', '');
            },

            forward: function(duration, percent) {
                if ( percent === void 0 ) percent = this.percent();

                Transition.cancel(list);
                return this.show(duration, percent, true);
            },

            translate: function(percent) {

                var distance = this.getDistance() * dir * (isRtl ? -1 : 1);

                css(list, 'transform', translate(clamp(
                    -to + (distance - distance * percent),
                    -getWidth(list),
                    bounds(list).width
                ) * (isRtl ? -1 : 1), 'px'));

                this.updateTranslates();

                if (prev) {
                    percent = clamp(percent, -1, 1);
                    triggerUpdate$1(this.getItemIn(), 'itemtranslatein', {percent: percent, dir: dir});
                    triggerUpdate$1(this.getItemIn(true), 'itemtranslateout', {percent: 1 - percent, dir: dir});
                }

            },

            percent: function() {
                return Math.abs((css(list, 'transform').split(',')[4] * (isRtl ? -1 : 1) + from) / (to - from));
            },

            getDistance: function() {
                return Math.abs(to - from);
            },

            getItemIn: function(out) {
                if ( out === void 0 ) out = false;


                var actives = this.getActives();
                var all = sortBy(slides(list), 'offsetLeft');
                var i = index(all, actives[dir * (out ? -1 : 1) > 0 ? actives.length - 1 : 0]);

                return ~i && all[i + (prev && !out ? dir : 0)];

            },

            getActives: function() {

                var left = getLeft(prev || next, list, center);

                return sortBy(slides(list).filter(function (slide) {
                    var slideLeft = getElLeft(slide, list);
                    return slideLeft >= left && slideLeft + bounds(slide).width <= bounds(list).width + left;
                }), 'offsetLeft');

            },

            updateTranslates: function() {

                var actives = this.getActives();

                slides(list).forEach(function (slide) {
                    var isActive = includes(actives, slide);

                    triggerUpdate$1(slide, ("itemtranslate" + (isActive ? 'in' : 'out')), {
                        percent: isActive ? 1 : 0,
                        dir: slide.offsetLeft <= next.offsetLeft ? 1 : -1
                    });
                });
            }

        };

    }

    function getLeft(el, list, center) {

        var left = getElLeft(el, list);

        return center
            ? left - centerEl(el, list)
            : Math.min(left, getMax(list));

    }

    function getMax(list) {
        return Math.max(0, getWidth(list) - bounds(list).width);
    }

    function getWidth(list) {
        return slides(list).reduce(function (right, el) { return bounds(el).width + right; }, 0);
    }

    function getMaxWidth(list) {
        return slides(list).reduce(function (right, el) { return Math.max(right, bounds(el).width); }, 0);
    }

    function centerEl(el, list) {
        return bounds(list).width / 2 - bounds(el).width / 2;
    }

    function getElLeft(el, list) {
        return (position(el).left + (isRtl ? bounds(el).width - bounds(list).width : 0)) * (isRtl ? -1 : 1);
    }

    function bounds(el) {
        return el.getBoundingClientRect();
    }

    function triggerUpdate$1(el, type, data) {
        trigger(el, createEvent(type, false, false, data));
    }

    function slides(list) {
        return toNodes(list.children);
    }

    var Slider$1 = {

        mixins: [Class, Slider, SliderReactive],

        props: {
            center: Boolean,
            sets: Boolean
        },

        data: {
            center: false,
            sets: false,
            attrItem: 'uk-slider-item',
            selList: '.uk-slider-items',
            selNav: '.uk-slider-nav',
            clsContainer: 'uk-slider-container',
            Transitioner: Transitioner$1
        },

        computed: {

            avgWidth: function() {
                return getWidth(this.list) / this.length;
            },

            finite: function(ref) {
                var finite = ref.finite;

                return finite || getWidth(this.list) < bounds(this.list).width + getMaxWidth(this.list) + this.center;
            },

            maxIndex: function() {

                if (!this.finite || this.center && !this.sets) {
                    return this.length - 1;
                }

                if (this.center) {
                    return last(this.sets);
                }

                css(this.slides, 'order', '');

                var max = getMax(this.list);
                var i = this.length;

                while (i--) {
                    if (getElLeft(this.list.children[i], this.list) < max) {
                        return Math.min(i + 1, this.length - 1);
                    }
                }

                return 0;
            },

            sets: function(ref) {
                var this$1 = this;
                var sets = ref.sets;


                var width = bounds(this.list).width / (this.center ? 2 : 1);

                var left = 0;
                var leftCenter = width;
                var slideLeft = 0;

                sets = sets && this.slides.reduce(function (sets, slide, i) {

                    var ref = bounds(slide);
                    var slideWidth = ref.width;
                    var slideRight = slideLeft + slideWidth;

                    if (slideRight > left) {

                        if (!this$1.center && i > this$1.maxIndex) {
                            i = this$1.maxIndex;
                        }

                        if (!includes(sets, i)) {

                            var cmp = this$1.slides[i + 1];
                            if (this$1.center && cmp && slideWidth < leftCenter - bounds(cmp).width / 2) {
                                leftCenter -= slideWidth;
                            } else {
                                leftCenter = width;
                                sets.push(i);
                                left = slideLeft + width + (this$1.center ? slideWidth / 2 : 0);
                            }

                        }
                    }

                    slideLeft += slideWidth;

                    return sets;

                }, []);

                return !isEmpty(sets) && sets;

            },

            transitionOptions: function() {
                return {
                    center: this.center,
                    list: this.list
                };
            }

        },

        connected: function() {
            toggleClass(this.$el, this.clsContainer, !$(("." + (this.clsContainer)), this.$el));
        },

        update: {

            write: function() {
                var this$1 = this;


                $$(("[" + (this.attrItem) + "],[data-" + (this.attrItem) + "]"), this.$el).forEach(function (el) {
                    var index = data(el, this$1.attrItem);
                    this$1.maxIndex && toggleClass(el, 'uk-hidden', isNumeric(index) && (this$1.sets && !includes(this$1.sets, toFloat(index)) || index > this$1.maxIndex));
                });

                if (!this.dragging && !this.stack.length) {
                    this._getTransitioner().translate(1);
                }

            },

            events: ['resize']

        },

        events: {

            beforeitemshow: function(e) {

                if (!this.dragging && this.sets && this.stack.length < 2 && !includes(this.sets, this.index)) {
                    this.index = this.getValidIndex();
                }

                var diff = Math.abs(
                    this.index
                    - this.prevIndex
                    + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0)
                );

                if (!this.dragging && diff > 1) {

                    for (var i = 0; i < diff; i++) {
                        this.stack.splice(1, 0, this.dir > 0 ? 'next' : 'previous');
                    }

                    e.preventDefault();
                    return;
                }

                this.duration = speedUp(this.avgWidth / this.velocity)
                    * (bounds(
                        this.dir < 0 || !this.slides[this.prevIndex]
                            ? this.slides[this.index]
                            : this.slides[this.prevIndex]
                    ).width / this.avgWidth);

                this.reorder();

            },

            itemshow: function() {
                !isUndefined(this.prevIndex) && addClass(this._getTransitioner().getItemIn(), this.clsActive);
            },

            itemshown: function() {
                var this$1 = this;

                var actives = this._getTransitioner(this.index).getActives();
                this.slides.forEach(function (slide) { return toggleClass(slide, this$1.clsActive, includes(actives, slide)); });
                (!this.sets || includes(this.sets, toFloat(this.index))) && this.slides.forEach(function (slide) { return toggleClass(slide, this$1.clsActivated, includes(actives, slide)); });
            }

        },

        methods: {

            reorder: function() {
                var this$1 = this;


                css(this.slides, 'order', '');

                if (this.finite) {
                    return;
                }

                var index = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;

                this.slides.forEach(function (slide, i) { return css(slide, 'order', this$1.dir > 0 && i < index
                        ? 1
                        : this$1.dir < 0 && i >= this$1.index
                            ? -1
                            : ''
                    ); }
                );

                if (!this.center) {
                    return;
                }

                var next = this.slides[index];
                var width = bounds(this.list).width / 2 - bounds(next).width / 2;
                var j = 0;

                while (width > 0) {
                    var slideIndex = this.getIndex(--j + index, index);
                    var slide = this.slides[slideIndex];

                    css(slide, 'order', slideIndex > index ? -2 : -1);
                    width -= bounds(slide).width;
                }

            },

            getValidIndex: function(index, prevIndex) {
                if ( index === void 0 ) index = this.index;
                if ( prevIndex === void 0 ) prevIndex = this.prevIndex;


                index = this.getIndex(index, prevIndex);

                if (!this.sets) {
                    return index;
                }

                var prev;

                do {

                    if (includes(this.sets, index)) {
                        return index;
                    }

                    prev = index;
                    index = this.getIndex(index + this.dir, prevIndex);

                } while (index !== prev);

                return index;
            }

        }

    };

    var SlideshowParallax = {

        mixins: [Parallax],

        data: {
            selItem: '!li'
        },

        computed: {

            item: function(ref, $el) {
                var selItem = ref.selItem;

                return query(selItem, $el);
            }

        },

        events: [

            {

                name: 'itemshown',

                self: true,

                el: function() {
                    return this.item;
                },

                handler: function() {
                    css(this.$el, this.getCss(.5));
                }

            },

            {
                name: 'itemin itemout',

                self: true,

                el: function() {
                    return this.item;
                },

                handler: function(ref) {
                    var type = ref.type;
                    var ref_detail = ref.detail;
                    var percent = ref_detail.percent;
                    var duration = ref_detail.duration;
                    var timing = ref_detail.timing;
                    var dir = ref_detail.dir;


                    Transition.cancel(this.$el);
                    css(this.$el, this.getCss(getCurrent(type, dir, percent)));

                    Transition.start(this.$el, this.getCss(isIn(type)
                        ? .5
                        : dir > 0
                            ? 1
                            : 0
                    ), duration, timing).catch(noop);

                }
            },

            {
                name: 'transitioncanceled transitionend',

                self: true,

                el: function() {
                    return this.item;
                },

                handler: function() {
                    Transition.cancel(this.$el);
                }

            },

            {
                name: 'itemtranslatein itemtranslateout',

                self: true,

                el: function() {
                    return this.item;
                },

                handler: function(ref) {
                    var type = ref.type;
                    var ref_detail = ref.detail;
                    var percent = ref_detail.percent;
                    var dir = ref_detail.dir;

                    Transition.cancel(this.$el);
                    css(this.$el, this.getCss(getCurrent(type, dir, percent)));
                }
            }

        ]

    };

    function isIn(type) {
        return endsWith(type, 'in');
    }

    function getCurrent(type, dir, percent) {

        percent /= 2;

        return !isIn(type)
            ? dir < 0
                ? percent
                : 1 - percent
            : dir < 0
                ? 1 - percent
                : percent;
    }

    var Animations$2 = assign({}, Animations, {

        fade: {

            show: function() {
                return [
                    {opacity: 0, zIndex: 0},
                    {zIndex: -1}
                ];
            },

            percent: function(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function(percent) {
                return [
                    {opacity: 1 - percent, zIndex: 0},
                    {zIndex: -1}
                ];
            }

        },

        scale: {

            show: function() {
                return [
                    {opacity: 0, transform: scale3d(1 + .5), zIndex: 0},
                    {zIndex: -1}
                ];
            },

            percent: function(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function(percent) {
                return [
                    {opacity: 1 - percent, transform: scale3d(1 + .5 * percent), zIndex: 0},
                    {zIndex: -1}
                ];
            }

        },

        pull: {

            show: function(dir) {
                return dir < 0
                    ? [
                        {transform: translate(30), zIndex: -1},
                        {transform: translate(), zIndex: 0}
                    ]
                    : [
                        {transform: translate(-100), zIndex: 0},
                        {transform: translate(), zIndex: -1}
                    ];
            },

            percent: function(current, next, dir) {
                return dir < 0
                    ? 1 - translated(next)
                    : translated(current);
            },

            translate: function(percent, dir) {
                return dir < 0
                    ? [
                        {transform: translate(30 * percent), zIndex: -1},
                        {transform: translate(-100 * (1 - percent)), zIndex: 0}
                    ]
                    : [
                        {transform: translate(-percent * 100), zIndex: 0},
                        {transform: translate(30 * (1 - percent)), zIndex: -1}
                    ];
            }

        },

        push: {

            show: function(dir) {
                return dir < 0
                    ? [
                        {transform: translate(100), zIndex: 0},
                        {transform: translate(), zIndex: -1}
                    ]
                    : [
                        {transform: translate(-30), zIndex: -1},
                        {transform: translate(), zIndex: 0}
                    ];
            },

            percent: function(current, next, dir) {
                return dir > 0
                    ? 1 - translated(next)
                    : translated(current);
            },

            translate: function(percent, dir) {
                return dir < 0
                    ? [
                        {transform: translate(percent * 100), zIndex: 0},
                        {transform: translate(-30 * (1 - percent)), zIndex: -1}
                    ]
                    : [
                        {transform: translate(-30 * percent), zIndex: -1},
                        {transform: translate(100 * (1 - percent)), zIndex: 0}
                    ];
            }

        }

    });

    var Slideshow$1 = {

        mixins: [Class, Slideshow, SliderReactive],

        props: {
            ratio: String,
            minHeight: Number,
            maxHeight: Number
        },

        data: {
            ratio: '16:9',
            minHeight: false,
            maxHeight: false,
            selList: '.uk-slideshow-items',
            attrItem: 'uk-slideshow-item',
            selNav: '.uk-slideshow-nav',
            Animations: Animations$2
        },

        update: {

            read: function() {

                var ref = this.ratio.split(':').map(Number);
                var width = ref[0];
                var height = ref[1];

                height = height * this.list.offsetWidth / width || 0;

                if (this.minHeight) {
                    height = Math.max(this.minHeight, height);
                }

                if (this.maxHeight) {
                    height = Math.min(this.maxHeight, height);
                }

                return {height: height - boxModelAdjust(this.list, 'content-box')};
            },

            write: function(ref) {
                var height = ref.height;

                height > 0 && css(this.list, 'minHeight', height);
            },

            events: ['resize']

        }

    };

    var Sortable = {

        mixins: [Class, Animate],

        props: {
            group: String,
            threshold: Number,
            clsItem: String,
            clsPlaceholder: String,
            clsDrag: String,
            clsDragState: String,
            clsBase: String,
            clsNoDrag: String,
            clsEmpty: String,
            clsCustom: String,
            handle: String
        },

        data: {
            group: false,
            threshold: 5,
            clsItem: 'uk-sortable-item',
            clsPlaceholder: 'uk-sortable-placeholder',
            clsDrag: 'uk-sortable-drag',
            clsDragState: 'uk-drag',
            clsBase: 'uk-sortable',
            clsNoDrag: 'uk-sortable-nodrag',
            clsEmpty: 'uk-sortable-empty',
            clsCustom: '',
            handle: false
        },

        created: function() {
            var this$1 = this;

            ['init', 'start', 'move', 'end'].forEach(function (key) {
                var fn = this$1[key];
                this$1[key] = function (e) {
                    this$1.scrollY = window.pageYOffset;
                    var ref = getEventPos(e, 'page');
                    var x = ref.x;
                    var y = ref.y;
                    this$1.pos = {x: x, y: y};

                    fn(e);
                };
            });
        },

        events: {

            name: pointerDown,
            passive: false,
            handler: 'init'

        },

        update: {

            write: function() {

                if (this.clsEmpty) {
                    toggleClass(this.$el, this.clsEmpty, isEmpty(this.$el.children));
                }

                css(this.handle ? $$(this.handle, this.$el) : this.$el.children, {touchAction: 'none', userSelect: 'none'});

                if (this.drag) {

                    // clamp to viewport
                    var ref = offset(window);
                    var right = ref.right;
                    var bottom = ref.bottom;
                    offset(this.drag, {
                        top: clamp(this.pos.y + this.origin.top, 0, bottom - this.drag.offsetHeight),
                        left: clamp(this.pos.x + this.origin.left, 0, right - this.drag.offsetWidth)
                    });

                    trackScroll(this.pos);

                }

            }

        },

        methods: {

            init: function(e) {

                var target = e.target;
                var button = e.button;
                var defaultPrevented = e.defaultPrevented;
                var ref = toNodes(this.$el.children).filter(function (el) { return within(target, el); });
                var placeholder = ref[0];

                if (!placeholder
                    || defaultPrevented
                    || button > 0
                    || isInput(target)
                    || within(target, ("." + (this.clsNoDrag)))
                    || this.handle && !within(target, this.handle)
                ) {
                    return;
                }

                e.preventDefault();

                this.touched = [this];
                this.placeholder = placeholder;
                this.origin = assign({target: target, index: index(placeholder)}, this.pos);

                on(document, pointerMove, this.move);
                on(document, pointerUp, this.end);
                on(window, 'scroll', this.scroll);

                if (!this.threshold) {
                    this.start(e);
                }

            },

            start: function(e) {

                this.drag = append(this.$container, this.placeholder.outerHTML.replace(/^<li/i, '<div').replace(/li>$/i, 'div>'));

                css(this.drag, assign({
                    boxSizing: 'border-box',
                    width: this.placeholder.offsetWidth,
                    height: this.placeholder.offsetHeight,
                    overflow: 'hidden'
                }, css(this.placeholder, ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'])));
                attr(this.drag, 'uk-no-boot', '');
                addClass(this.drag, this.clsDrag, this.clsCustom);

                height(this.drag.firstElementChild, height(this.placeholder.firstElementChild));

                var ref = offset(this.placeholder);
                var left = ref.left;
                var top = ref.top;
                assign(this.origin, {left: left - this.pos.x, top: top - this.pos.y});

                addClass(this.placeholder, this.clsPlaceholder);
                addClass(this.$el.children, this.clsItem);
                addClass(document.documentElement, this.clsDragState);

                trigger(this.$el, 'start', [this, this.placeholder]);

                this.move(e);
            },

            move: function(e) {

                if (!this.drag) {

                    if (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) {
                        this.start(e);
                    }

                    return;
                }

                this.$emit();

                var target = e.type === 'mousemove' ? e.target : document.elementFromPoint(this.pos.x - window.pageXOffset, this.pos.y - window.pageYOffset);

                var sortable = this.getSortable(target);
                var previous = this.getSortable(this.placeholder);
                var move = sortable !== previous;

                if (!sortable || within(target, this.placeholder) || move && (!sortable.group || sortable.group !== previous.group)) {
                    return;
                }

                target = sortable.$el === target.parentNode && target || toNodes(sortable.$el.children).filter(function (element) { return within(target, element); })[0];

                if (move) {
                    previous.remove(this.placeholder);
                } else if (!target) {
                    return;
                }

                sortable.insert(this.placeholder, target);

                if (!includes(this.touched, sortable)) {
                    this.touched.push(sortable);
                }

            },

            end: function(e) {

                off(document, pointerMove, this.move);
                off(document, pointerUp, this.end);
                off(window, 'scroll', this.scroll);

                if (!this.drag) {
                    if (e.type === 'touchend') {
                        e.target.click();
                    }

                    return;
                }

                untrackScroll();

                var sortable = this.getSortable(this.placeholder);

                if (this === sortable) {
                    if (this.origin.index !== index(this.placeholder)) {
                        trigger(this.$el, 'moved', [this, this.placeholder]);
                    }
                } else {
                    trigger(sortable.$el, 'added', [sortable, this.placeholder]);
                    trigger(this.$el, 'removed', [this, this.placeholder]);
                }

                trigger(this.$el, 'stop', [this, this.placeholder]);

                remove(this.drag);
                this.drag = null;

                var classes = this.touched.map(function (sortable) { return ((sortable.clsPlaceholder) + " " + (sortable.clsItem)); }).join(' ');
                this.touched.forEach(function (sortable) { return removeClass(sortable.$el.children, classes); });

                removeClass(document.documentElement, this.clsDragState);

            },

            scroll: function() {
                var scroll = window.pageYOffset;
                if (scroll !== this.scrollY) {
                    this.pos.y += scroll - this.scrollY;
                    this.scrollY = scroll;
                    this.$emit();
                }
            },

            insert: function(element, target) {
                var this$1 = this;


                addClass(this.$el.children, this.clsItem);

                var insert = function () {

                    if (target) {

                        if (!within(element, this$1.$el) || isPredecessor(element, target)) {
                            before(target, element);
                        } else {
                            after(target, element);
                        }

                    } else {
                        append(this$1.$el, element);
                    }

                };

                if (this.animation) {
                    this.animate(insert);
                } else {
                    insert();
                }

            },

            remove: function(element) {

                if (!within(element, this.$el)) {
                    return;
                }

                css(this.handle ? $$(this.handle, element) : element, {touchAction: '', userSelect: ''});

                if (this.animation) {
                    this.animate(function () { return remove(element); });
                } else {
                    remove(element);
                }

            },

            getSortable: function(element) {
                return element && (this.$getComponent(element, 'sortable') || this.getSortable(element.parentNode));
            }

        }

    };

    function isPredecessor(element, target) {
        return element.parentNode === target.parentNode && index(element) > index(target);
    }

    var trackTimer;
    function trackScroll(ref) {
        var x = ref.x;
        var y = ref.y;


        clearTimeout(trackTimer);

        scrollParents(document.elementFromPoint(x - window.pageXOffset, y - window.pageYOffset)).some(function (scrollEl) {

            var scroll = scrollEl.scrollTop;
            var scrollHeight = scrollEl.scrollHeight;

            if (getScrollingElement() === scrollEl) {
                scrollEl = window;
                scrollHeight -= window.innerHeight;
            }

            var ref = offset(scrollEl);
            var top = ref.top;
            var bottom = ref.bottom;

            if (top < y && top + 30 > y) {
                scroll -= 5;
            } else if (bottom > y && bottom - 20 < y) {
                scroll += 5;
            }

            if (scroll > 0 && scroll < scrollHeight) {
                return trackTimer = setTimeout(function () {
                    scrollTop(scrollEl, scroll);
                    trackScroll({x: x, y: y});
                }, 10);
            }

        });

    }

    function untrackScroll() {
        clearTimeout(trackTimer);
    }

    var overflowRe = /auto|scroll/;

    function scrollParents(element) {
        var scrollEl = getScrollingElement();
        return parents$1(element, function (parent) { return parent === scrollEl || overflowRe.test(css(parent, 'overflow')); });
    }

    function parents$1(element, fn) {
        var parents = [];
        do {
            if (fn(element)) {
                parents.unshift(element);
            }
        } while (element && (element = element.parentElement));
        return parents;
    }

    function getScrollingElement() {
        return document.scrollingElement || document.documentElement;
    }

    var obj$1;

    var actives = [];

    var Tooltip = {

        mixins: [Container, Togglable, Position],

        args: 'title',

        props: {
            delay: Number,
            title: String
        },

        data: {
            pos: 'top',
            title: '',
            delay: 0,
            animation: ['uk-animation-scale-up'],
            duration: 100,
            cls: 'uk-active',
            clsPos: 'uk-tooltip'
        },

        beforeConnect: function() {
            this._hasTitle = hasAttr(this.$el, 'title');
            attr(this.$el, {title: '', 'aria-expanded': false});
        },

        disconnected: function() {
            this.hide();
            attr(this.$el, {title: this._hasTitle ? this.title : null, 'aria-expanded': null});
        },

        methods: {

            show: function() {
                var this$1 = this;


                if (this.isActive() || !this.title) {
                    return;
                }

                actives.forEach(function (active) { return active.hide(); });
                actives.push(this);

                this._unbind = on(document, pointerUp, function (e) { return !within(e.target, this$1.$el) && this$1.hide(); });

                clearTimeout(this.showTimer);
                this.showTimer = setTimeout(function () {
                    this$1._show();
                    this$1.hideTimer = setInterval(function () {

                        if (!isVisible(this$1.$el)) {
                            this$1.hide();
                        }

                    }, 150);
                }, this.delay);
            },

            hide: function() {

                if (!this.isActive() || matches(this.$el, 'input:focus')) {
                    return;
                }

                actives.splice(actives.indexOf(this), 1);

                clearTimeout(this.showTimer);
                clearInterval(this.hideTimer);
                attr(this.$el, 'aria-expanded', false);
                this.toggleElement(this.tooltip, false);
                this.tooltip && remove(this.tooltip);
                this.tooltip = false;
                this._unbind();

            },

            _show: function() {

                this.tooltip = append(this.container,
                    ("<div class=\"" + (this.clsPos) + "\" aria-expanded=\"true\" aria-hidden> <div class=\"" + (this.clsPos) + "-inner\">" + (this.title) + "</div> </div>")
                );

                this.positionAt(this.tooltip, this.$el);

                this.origin = this.getAxis() === 'y'
                    ? ((flipPosition(this.dir)) + "-" + (this.align))
                    : ((this.align) + "-" + (flipPosition(this.dir)));

                this.toggleElement(this.tooltip, true);

            },

            isActive: function() {
                return includes(actives, this);
            }

        },

        events: ( obj$1 = {

            focus: 'show',
            blur: 'hide'

        }, obj$1[(pointerEnter + " " + pointerLeave)] = function (e) {
                if (isTouch(e)) {
                    return;
                }
                e.type === pointerEnter
                    ? this.show()
                    : this.hide();
            }, obj$1[pointerDown] = function (e) {
                if (!isTouch(e)) {
                    return;
                }
                this.isActive()
                    ? this.hide()
                    : this.show();
            }, obj$1 )

    };

    var Upload = {

        props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            method: String,
            mime: String,
            msgInvalidMime: String,
            msgInvalidName: String,
            msgInvalidSize: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String
        },

        data: {
            allow: false,
            clsDragover: 'uk-dragover',
            concurrent: 1,
            maxSize: 0,
            method: 'POST',
            mime: false,
            msgInvalidMime: 'Invalid File Type: %s',
            msgInvalidName: 'Invalid File Name: %s',
            msgInvalidSize: 'Invalid File Size: %s Kilobytes Max',
            multiple: false,
            name: 'files[]',
            params: {},
            type: '',
            url: '',
            abort: noop,
            beforeAll: noop,
            beforeSend: noop,
            complete: noop,
            completeAll: noop,
            error: noop,
            fail: noop,
            load: noop,
            loadEnd: noop,
            loadStart: noop,
            progress: noop
        },

        events: {

            change: function(e) {

                if (!matches(e.target, 'input[type="file"]')) {
                    return;
                }

                e.preventDefault();

                if (e.target.files) {
                    this.upload(e.target.files);
                }

                e.target.value = '';
            },

            drop: function(e) {
                stop(e);

                var transfer = e.dataTransfer;

                if (!transfer || !transfer.files) {
                    return;
                }

                removeClass(this.$el, this.clsDragover);

                this.upload(transfer.files);
            },

            dragenter: function(e) {
                stop(e);
            },

            dragover: function(e) {
                stop(e);
                addClass(this.$el, this.clsDragover);
            },

            dragleave: function(e) {
                stop(e);
                removeClass(this.$el, this.clsDragover);
            }

        },

        methods: {

            upload: function(files) {
                var this$1 = this;


                if (!files.length) {
                    return;
                }

                trigger(this.$el, 'upload', [files]);

                for (var i = 0; i < files.length; i++) {

                    if (this.maxSize && this.maxSize * 1000 < files[i].size) {
                        this.fail(this.msgInvalidSize.replace('%s', this.maxSize));
                        return;
                    }

                    if (this.allow && !match$1(this.allow, files[i].name)) {
                        this.fail(this.msgInvalidName.replace('%s', this.allow));
                        return;
                    }

                    if (this.mime && !match$1(this.mime, files[i].type)) {
                        this.fail(this.msgInvalidMime.replace('%s', this.mime));
                        return;
                    }

                }

                if (!this.multiple) {
                    files = [files[0]];
                }

                this.beforeAll(this, files);

                var chunks = chunk(files, this.concurrent);
                var upload = function (files) {

                    var data = new FormData();

                    files.forEach(function (file) { return data.append(this$1.name, file); });

                    for (var key in this$1.params) {
                        data.append(key, this$1.params[key]);
                    }

                    ajax(this$1.url, {
                        data: data,
                        method: this$1.method,
                        responseType: this$1.type,
                        beforeSend: function (env) {

                            var xhr = env.xhr;
                            xhr.upload && on(xhr.upload, 'progress', this$1.progress);
                            ['loadStart', 'load', 'loadEnd', 'abort'].forEach(function (type) { return on(xhr, type.toLowerCase(), this$1[type]); }
                            );

                            this$1.beforeSend(env);

                        }
                    }).then(
                        function (xhr) {

                            this$1.complete(xhr);

                            if (chunks.length) {
                                upload(chunks.shift());
                            } else {
                                this$1.completeAll(xhr);
                            }

                        },
                        function (e) { return this$1.error(e); }
                    );

                };

                upload(chunks.shift());

            }

        }

    };

    function match$1(pattern, path) {
        return path.match(new RegExp(("^" + (pattern.replace(/\//g, '\\/').replace(/\*\*/g, '(\\/[^\\/]+)*').replace(/\*/g, '[^\\/]+').replace(/((?!\\))\?/g, '$1.')) + "$"), 'i'));
    }

    function chunk(files, size) {
        var chunks = [];
        for (var i = 0; i < files.length; i += size) {
            var chunk = [];
            for (var j = 0; j < size; j++) {
                chunk.push(files[i + j]);
            }
            chunks.push(chunk);
        }
        return chunks;
    }

    function stop(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    UIkit.component('countdown', Countdown);
    UIkit.component('filter', Filter);
    UIkit.component('lightbox', Lightbox);
    UIkit.component('lightboxPanel', lightboxPanel);
    UIkit.component('notification', Notification);
    UIkit.component('parallax', Parallax$1);
    UIkit.component('slider', Slider$1);
    UIkit.component('sliderParallax', SlideshowParallax);
    UIkit.component('slideshow', Slideshow$1);
    UIkit.component('slideshowParallax', SlideshowParallax);
    UIkit.component('sortable', Sortable);
    UIkit.component('tooltip', Tooltip);
    UIkit.component('upload', Upload);

    {
        boot(UIkit);
    }

    return UIkit;

}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uikit */ "./node_modules/uikit/dist/js/uikit.js");
/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uikit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.scss */ "./resources/js/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./resources/js/main.scss":
/*!********************************!*\
  !*** ./resources/js/main.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/src??ref--7-2!../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./main.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/sass/app.sass":
/*!*********************************!*\
  !*** ./resources/sass/app.sass ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.sass ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\laragon\www\PRM\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\laragon\www\PRM\resources\sass\app.sass */"./resources/sass/app.sass");


/***/ })

/******/ });