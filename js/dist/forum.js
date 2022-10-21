/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@justinribeiro/lite-youtube/lite-youtube.js":
/*!******************************************************************!*\
  !*** ./node_modules/@justinribeiro/lite-youtube/lite-youtube.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiteYTEmbed": () => (/* binding */ LiteYTEmbed)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");



var LiteYTEmbed = /*#__PURE__*/function (_HTMLElement) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(LiteYTEmbed, _HTMLElement);
  function LiteYTEmbed() {
    var _this;
    _this = _HTMLElement.call(this) || this;
    _this.isIframeLoaded = false;
    _this.setupDom();
    return _this;
  }
  var _proto = LiteYTEmbed.prototype;
  _proto.connectedCallback = function connectedCallback() {
    var _this2 = this;
    this.addEventListener('pointerover', LiteYTEmbed.warmConnections, {
      once: true
    });
    this.addEventListener('click', function () {
      return _this2.addIframe();
    });
  };
  _proto.setupDom = function setupDom() {
    var shadowDom = this.attachShadow({
      mode: 'open'
    });
    shadowDom.innerHTML = "\n      <style>\n        :host {\n          contain: content;\n          display: block;\n          position: relative;\n          width: 100%;\n          padding-bottom: calc(100% / (16 / 9));\n          --lyt-animation: all 0.2s cubic-bezier(0, 0, 0.2, 1);\n          --lyt-play-btn-default: #212121;\n          --lyt-play-btn-hover: #f00;\n        }\n\n        @media (max-width: 40em) {\n          :host([short]) {\n            padding-bottom: calc(100% / (9 / 16));\n          }\n        }\n\n        #frame, #fallbackPlaceholder, iframe {\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          left: 0;\n        }\n\n        #frame {\n          cursor: pointer;\n        }\n\n        #fallbackPlaceholder {\n          object-fit: cover;\n        }\n\n        #frame::before {\n          content: '';\n          display: block;\n          position: absolute;\n          top: 0;\n          background-image: linear-gradient(180deg, #111 -20%, transparent 90%);\n          height: 60px;\n          width: 100%;\n          transition: var(--lyt-animation);\n          z-index: 1;\n        }\n\n        #playButton {\n          width: 70px;\n          height: 46px;\n          background-color: var(--lyt-play-btn-hover);\n          z-index: 1;\n          opacity: 0.8;\n          border-radius: 14%;\n          transition: var(--lyt-animation);\n          border: 0;\n        }\n\n        #frame:hover > #playButton {\n          background-color: var(--lyt-play-btn-hover);\n          opacity: 1;\n        }\n\n        #playButton:before {\n          content: '';\n          border-style: solid;\n          border-width: 11px 0 11px 19px;\n          border-color: transparent transparent transparent #fff;\n        }\n\n        #playButton,\n        #playButton:before {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate3d(-50%, -50%, 0);\n          cursor: inherit;\n        }\n\n        /* Post-click styles */\n        .activated {\n          cursor: unset;\n        }\n\n        #frame.activated::before,\n        #frame.activated > #playButton {\n          display: none;\n        }\n      </style>\n      <div id=\"frame\">\n        <picture>\n          <source id=\"webpPlaceholder\" type=\"image/webp\">\n          <source id=\"jpegPlaceholder\" type=\"image/jpeg\">\n          <img id=\"fallbackPlaceholder\" referrerpolicy=\"origin\" loading=\"lazy\">\n        </picture>\n        <button id=\"playButton\"></button>\n      </div>\n    ";
    this.domRefFrame = shadowDom.querySelector('#frame');
    this.domRefImg = {
      fallback: shadowDom.querySelector('#fallbackPlaceholder'),
      webp: shadowDom.querySelector('#webpPlaceholder'),
      jpeg: shadowDom.querySelector('#jpegPlaceholder')
    };
    this.domRefPlayButton = shadowDom.querySelector('#playButton');
  };
  _proto.setupComponent = function setupComponent() {
    this.initImagePlaceholder();
    this.domRefPlayButton.setAttribute('aria-label', this.videoPlay + ": " + this.videoTitle);
    this.setAttribute('title', this.videoPlay + ": " + this.videoTitle);
    if (this.autoLoad || this.isYouTubeShort()) {
      this.initIntersectionObserver();
    }
  };
  _proto.attributeChangedCallback = function attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
      case 'videoid':
      case 'playlistid':
      case 'videoTitle':
      case 'videoPlay':
        {
          if (oldVal !== newVal) {
            this.setupComponent();
            if (this.domRefFrame.classList.contains('activated')) {
              this.domRefFrame.classList.remove('activated');
              this.shadowRoot.querySelector('iframe').remove();
              this.isIframeLoaded = false;
            }
          }
          break;
        }
      default:
        break;
    }
  };
  _proto.addIframe = function addIframe(isIntersectionObserver) {
    if (isIntersectionObserver === void 0) {
      isIntersectionObserver = false;
    }
    if (!this.isIframeLoaded) {
      var autoplay = isIntersectionObserver ? 0 : 1;
      var wantsNoCookie = this.noCookie ? '-nocookie' : '';
      var embedTarget;
      if (this.playlistId) {
        embedTarget = "?listType=playlist&list=" + this.playlistId + "&";
      } else {
        embedTarget = this.videoId + "?";
      }
      if (this.isYouTubeShort()) {
        this.params = "loop=1&mute=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=" + this.videoId;
        autoplay = 1;
      }
      var iframeHTML = "\n<iframe frameborder=\"0\"\n  allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\n  src=\"https://www.youtube" + wantsNoCookie + ".com/embed/" + embedTarget + "autoplay=" + autoplay + "&" + this.params + "\"\n></iframe>";
      this.domRefFrame.insertAdjacentHTML('beforeend', iframeHTML);
      this.domRefFrame.classList.add('activated');
      this.isIframeLoaded = true;
      this.attemptShortAutoPlay();
      this.dispatchEvent(new CustomEvent('liteYoutubeIframeLoaded', {
        detail: {
          videoId: this.videoId
        },
        bubbles: true,
        cancelable: true
      }));
    }
  };
  _proto.initImagePlaceholder = function initImagePlaceholder() {
    var _this$domRefImg, _this$domRefImg$fallb;
    LiteYTEmbed.addPrefetch('preconnect', 'https://i.ytimg.com/');
    var posterUrlWebp = "https://i.ytimg.com/vi_webp/" + this.videoId + "/" + this.posterQuality + ".webp";
    var posterUrlJpeg = "https://i.ytimg.com/vi/" + this.videoId + "/" + this.posterQuality + ".jpg";
    this.domRefImg.fallback.loading = this.posterLoading;
    this.domRefImg.webp.srcset = posterUrlWebp;
    this.domRefImg.jpeg.srcset = posterUrlJpeg;
    this.domRefImg.fallback.src = posterUrlJpeg;
    this.domRefImg.fallback.setAttribute('aria-label', this.videoPlay + ": " + this.videoTitle);
    (_this$domRefImg = this.domRefImg) == null ? void 0 : (_this$domRefImg$fallb = _this$domRefImg.fallback) == null ? void 0 : _this$domRefImg$fallb.setAttribute('alt', this.videoPlay + ": " + this.videoTitle);
  };
  _proto.initIntersectionObserver = function initIntersectionObserver() {
    var _this3 = this;
    var options = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    };
    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !_this3.isIframeLoaded) {
          LiteYTEmbed.warmConnections();
          _this3.addIframe(true);
          observer.unobserve(_this3);
        }
      });
    }, options);
    observer.observe(this);
  };
  _proto.attemptShortAutoPlay = function attemptShortAutoPlay() {
    var _this4 = this;
    if (this.isYouTubeShort()) {
      setTimeout(function () {
        var _this4$shadowRoot$que, _this4$shadowRoot$que2;
        (_this4$shadowRoot$que = _this4.shadowRoot.querySelector('iframe')) == null ? void 0 : (_this4$shadowRoot$que2 = _this4$shadowRoot$que.contentWindow) == null ? void 0 : _this4$shadowRoot$que2.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      }, 2000);
    }
  };
  _proto.isYouTubeShort = function isYouTubeShort() {
    return this.getAttribute('short') === '' && window.matchMedia('(max-width: 40em)').matches;
  };
  LiteYTEmbed.addPrefetch = function addPrefetch(kind, url) {
    var linkElem = document.createElement('link');
    linkElem.rel = kind;
    linkElem.href = url;
    linkElem.crossOrigin = 'true';
    document.head.append(linkElem);
  };
  LiteYTEmbed.warmConnections = function warmConnections() {
    if (LiteYTEmbed.isPreconnected) return;
    LiteYTEmbed.addPrefetch('preconnect', 'https://s.ytimg.com');
    LiteYTEmbed.addPrefetch('preconnect', 'https://www.youtube.com');
    LiteYTEmbed.addPrefetch('preconnect', 'https://www.google.com');
    LiteYTEmbed.addPrefetch('preconnect', 'https://googleads.g.doubleclick.net');
    LiteYTEmbed.addPrefetch('preconnect', 'https://static.doubleclick.net');
    LiteYTEmbed.isPreconnected = true;
  };
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(LiteYTEmbed, [{
    key: "videoId",
    get: function get() {
      return encodeURIComponent(this.getAttribute('videoid') || '');
    },
    set: function set(id) {
      this.setAttribute('videoid', id);
    }
  }, {
    key: "playlistId",
    get: function get() {
      return encodeURIComponent(this.getAttribute('playlistid') || '');
    },
    set: function set(id) {
      this.setAttribute('playlistid', id);
    }
  }, {
    key: "videoTitle",
    get: function get() {
      return this.getAttribute('videotitle') || 'Video';
    },
    set: function set(title) {
      this.setAttribute('videotitle', title);
    }
  }, {
    key: "videoPlay",
    get: function get() {
      return this.getAttribute('videoPlay') || 'Play';
    },
    set: function set(name) {
      this.setAttribute('videoPlay', name);
    }
  }, {
    key: "videoStartAt",
    get: function get() {
      return this.getAttribute('videoStartAt') || '0';
    }
  }, {
    key: "autoLoad",
    get: function get() {
      return this.hasAttribute('autoload');
    }
  }, {
    key: "noCookie",
    get: function get() {
      return this.hasAttribute('nocookie');
    }
  }, {
    key: "posterQuality",
    get: function get() {
      return this.getAttribute('posterquality') || 'hqdefault';
    }
  }, {
    key: "posterLoading",
    get: function get() {
      return this.getAttribute('posterloading') || 'lazy';
    }
  }, {
    key: "params",
    get: function get() {
      return "start=" + this.videoStartAt + "&" + this.getAttribute('params');
    },
    set: function set(opts) {
      this.setAttribute('params', opts);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['videoid', 'playlistid'];
    }
  }]);
  return LiteYTEmbed;
}( /*#__PURE__*/(0,_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(HTMLElement));
LiteYTEmbed.isPreconnected = false;
customElements.define('lite-youtube', LiteYTEmbed);

/***/ }),

/***/ "./src/forum/index.ts":
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _justinribeiro_lite_youtube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @justinribeiro/lite-youtube */ "./node_modules/@justinribeiro/lite-youtube/lite-youtube.js");


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _construct)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if ((0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeFunction)
/* harmony export */ });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeReflectConstruct)
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _wrapNativeSuper)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !(0,_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return (0,_construct_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Class, arguments, (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map