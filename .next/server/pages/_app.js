(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5224:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/Layout.module.scss
var Layout_module = __webpack_require__(7891);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: ./components/Header.module.scss
var Header_module = __webpack_require__(451);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./assets/das.webp
/* harmony default export */ var das = ({"src":"/_next/static/image/assets/das.c34d7b1ffc91175051a08c718f56c6e2.webp","height":5208,"width":9167,"blurDataURL":"data:image/webp;base64,UklGRqwAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAFRsVFQUPAAAsYlxIJK1eBDJtYU9p/6oAOF9WWRddOwACBgYIAAAAAABWUDggXAAAAPABAJ0BKggABQACQDglsAJ0MEABjz/6IAD+2tY8BK328L2no9JRDc/75959+nhwL2DOW/+vOfSJu7s06dMVUbnzYJ37lsEmMzV/i/PrinT+geglSzZ+/if0K4AA"});
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(9583);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "react-modal"
var external_react_modal_namespaceObject = require("react-modal");;
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_namespaceObject);
;// CONCATENATED MODULE: ./components/Header.jsx









external_react_modal_default().setAppElement("body");

function Header() {
  const {
    0: showNav,
    1: setToggleNav
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: (Header_module_default()).header,
    children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
      className: (Header_module_default()).logo,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: das,
        width: 200,
        height: 100,
        objectFit: "contain"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: (Header_module_default()).nav,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: (Header_module_default()).list,
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Home"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Courses"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaAngleDown */.iUH, {
            className: (Header_module_default()).arrow_down
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "For School"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "For Business"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "About Us"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Contact Us"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Login"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Book a free class"
            })
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_modal_default()), {
      isOpen: showNav,
      contentLabel: "Navigation",
      overlayClassName: {
        base: 'nav_overlay',
        afterOpen: 'nav_overlay_after_open',
        beforeClose: 'nav_overlay_before_close'
      },
      className: {
        base: 'nav_content',
        afterOpen: 'nav_content_after_open',
        beforeClose: 'nav_content_before_close'
      },
      closeTimeoutMS: 300,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: (Header_module_default()).mobile_navigation,
        children: [showNav && /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaTimes */.aHS, {
          className: (Header_module_default()).close_btn,
          onClick: () => setToggleNav(false)
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "#",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Home"
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "#",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Courses"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaAngleDown */.iUH, {
              className: (Header_module_default()).arrow_down_white
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "#",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "For School"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "#",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "For Business"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "#",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "About Us"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "#",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Contact Us"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "#",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Login"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "#",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Book a free class"
              })
            })
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaBars */.Fm7, {
      className: (Header_module_default()).menu,
      onClick: () => setToggleNav(true)
    })]
  });
}

/* harmony default export */ var components_Header = (Header);
// EXTERNAL MODULE: ./components/Footer.module.scss
var Footer_module = __webpack_require__(2761);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer.jsx








function Footer() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: (Footer_module_default()).footer,
    children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
      className: (Footer_module_default()).logo,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: das,
        width: 200,
        height: 100,
        alt: "digital aided school",
        objectFit: "contain"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: (Footer_module_default()).wrapper,
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (Footer_module_default()).text,
        children: "We all have thought of providing additonal information to our kids at some point of time."
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: (Footer_module_default()).ul,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Important Links"
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (Footer_module_default()).link,
              children: "Home"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (Footer_module_default()).link,
              children: "Courses"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (Footer_module_default()).link,
              children: "For Schools"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (Footer_module_default()).link,
              children: "For Business"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (Footer_module_default()).link,
              children: "Login"
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: (Footer_module_default()).ul,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Contact Us"
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: "India"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("address", {
            children: "Spectrum Tower, 5th, Chincholi Bunder Road, Mindspace, Malad West, Mumbai Maharastra 400064"
          }), " "]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaPhone */.I7T, {
            className: (Footer_module_default()).icon
          }), " +91 7304360502"]
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: "United Kingdom"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaPhone */.I7T, {
            className: (Footer_module_default()).icon
          }), " +44 7405888449"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaEnvelope */.SRX, {
            className: (Footer_module_default()).icon
          }), " hello@digitalaidedschool.com"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: (Footer_module_default()).ul,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Policies"
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (Footer_module_default()).link,
              children: "Terms $ Conditions"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (Footer_module_default()).link,
              children: "Refund Policy"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (Footer_module_default()).link,
              children: "Privacy Policy"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (Footer_module_default()).link,
              children: "Customer Feedback"
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: (Footer_module_default()).ul,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Follow Us"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaInstagram */.Zf_, {
            className: (Footer_module_default()).social
          }), /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaLinkedinIn */.BUd, {
            className: (Footer_module_default()).social
          }), /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaYoutube */.V2E, {
            className: (Footer_module_default()).social
          }), /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaTwitter */.fWC, {
            className: (Footer_module_default()).social
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: (Footer_module_default()).ul,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Mobile"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaGooglePlay */.Wfz, {
            className: (Footer_module_default()).store
          }), /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaAppStore */.Zyz, {
            className: (Footer_module_default()).store
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      className: (Footer_module_default()).footer_text,
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "About digital Aided School"
      }), "We are Digital Aided School a team of Young professionals who beliece in quality education and the lastest technolodgy. Learning is never-ending but learning what is required to keep body and soul together is principal, Learning through technology where the resources are unlimited makes it more merrymaking", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "We have the perfect & feasible solutuon when it comes to EDUCATION & TECHNOLOGY. We have DIGITAL in our name (pun intended)", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "For EDUCATION solutions, TECHNOLOGY solutions & DIGITAL solutions allow us to help with our plethora of band-aids as per your needs and requirements."]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      className: (Footer_module_default()).footer_text,
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "Digital Aided Schools Mission"
      }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: "To Create"
      }), " a productive work culture in which our employees happily and whole-heartedly contribute to our goal of making the world a place where every individual thrives together with the usage of technology readily available.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: "To make"
      }), " good knowledge and information available to all while using available technology or developing a new one.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: "To elevate"
      }), " the thinking of the next generation by providing them with all the necessary tools and knowledge to enhance their contribution towards making the society/world a better place.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: "To deliver"
      }), " important skills and values by using available technology and resources and aid by providing a platform for their growth at a fairly accessible price/cost."]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Footer_module_default()).footer_text,
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "With our Association you will gain"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
          children: "Ouality Outcome"
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: "Learning Life and technology"
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: "Digitally Aided Support"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
          children: "State of the Art Technology"
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: "Latest Tech"
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: "User Friendly"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
          children: "Achievement Driven Support"
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: "Endless support till Achievement"
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: "Deadlines"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      className: (Footer_module_default()).footer_text,
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "Payment"
      }), "Digital Aided School offers you multiple payment methods. Payment gateway partners use secure encryption technology to keep your transaction details confidential at all times. You may use Internet Banking. Wallet and QR Support to make your purchase."]
    })]
  });
}

/* harmony default export */ var components_Footer = (Footer);
;// CONCATENATED MODULE: ./components/Layout.jsx







function Layout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: (Layout_module_default()).container,
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
}

/* harmony default export */ var components_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(components_Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 2761:
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "Footer_footer__a95ok",
	"logo": "Footer_logo__3hNs2",
	"wrapper": "Footer_wrapper__k4H8m",
	"text": "Footer_text__3QKbK",
	"ul": "Footer_ul__X3CwN",
	"icon": "Footer_icon__BtkWE",
	"social": "Footer_social__2VarA",
	"store": "Footer_store__1p78q",
	"link": "Footer_link__eKlwz",
	"footer_text": "Footer_footer_text__1hWM8"
};


/***/ }),

/***/ 451:
/***/ (function(module) {

// Exports
module.exports = {
	"mobile_navigation": "Header_mobile_navigation__3rFuZ",
	"close_btn": "Header_close_btn__1uiSI",
	"arrow_down_white": "Header_arrow_down_white__17USA",
	"header": "Header_header__3Z-q0",
	"menu": "Header_menu__2dtDj",
	"nav": "Header_nav__CuhH1",
	"list": "Header_list__1ycGy",
	"arrow_down": "Header_arrow_down__1WCyh"
};


/***/ }),

/***/ 7891:
/***/ (function(module) {

// Exports
module.exports = {

};


/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [821,822], function() { return __webpack_exec__(5224); });
module.exports = __webpack_exports__;

})();