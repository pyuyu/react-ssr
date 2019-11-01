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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
    return _react2.default.createElement(
        "div",
        { className: "wrapper" },
        _react2.default.createElement(
            "h2",
            null,
            "This is the about page"
        )
    );
};

exports.default = About;

/***/ }),

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function Contact() {
    return _react2.default.createElement(
        "div",
        { className: "wrapper" },
        _react2.default.createElement(
            "h2",
            null,
            "This is the contact page"
        ),
        _react2.default.createElement(
            _reactHelmet2.default,
            null,
            _react2.default.createElement(
                "title",
                null,
                "Contact Page"
            ),
            _react2.default.createElement("meta", { name: "description", content: "This is a proof of concept for React SSR" })
        )
    );
};

exports.default = Contact;

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _store = __webpack_require__(/*! ../store */ "./src/store.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var loggedIn = _ref.loggedIn,
        login = _ref.login,
        logout = _ref.logout;
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/", className: "link" },
            "Home"
        ),
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/about", className: "link" },
            "About"
        ),
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/contact", className: "link" },
            "Contact"
        ),
        loggedIn ? _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "/secret", className: "link" },
                "Personal Page"
            ),
            _react2.default.createElement(
                "button",
                { onClick: function onClick() {
                        return logout();
                    } },
                "Logout"
            )
        ) : _react2.default.createElement(
            "button",
            { onClick: function onClick() {
                    return login();
                } },
            "Login"
        )
    );
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        login: function login() {
            dispatch((0, _store.login)());
        },
        logout: function logout() {
            dispatch((0, _store.logout)());
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header);

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _store = __webpack_require__(/*! ../store */ "./src/store.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            if (this.props.list.length <= 0) {
                this.props.fetchData();
            }
        }
    }, {
        key: "render",
        value: function render() {
            var list = this.props.list;

            return _react2.default.createElement(
                "div",
                { className: "wrapper" },
                _react2.default.createElement(
                    "h2",
                    null,
                    "React 16 new features"
                ),
                _react2.default.createElement(
                    "ul",
                    null,
                    list.map(function (item) {
                        return _react2.default.createElement(
                            "li",
                            { key: item },
                            " ",
                            item,
                            " "
                        );
                    })
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

Home.serverFetch = _store.fetchData;

var mapStateToProps = function mapStateToProps(state) {
    return {
        list: state.data
    };
};

var mapDispatchToProps = {
    fetchData: _store.fetchData
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _Header = __webpack_require__(/*! ./Header */ "./src/components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _routes = __webpack_require__(/*! ../routes */ "./src/routes.js");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout() {
        _classCallCheck(this, Layout);

        var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

        _this.state = {
            title: "Hello React SSR!"
        };
        return _this;
    }

    _createClass(Layout, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h1",
                    null,
                    this.state.title
                ),
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _routes2.default.map(function (route) {
                        return _react2.default.createElement(_reactRouterDom.Route, _extends({ key: route.path }, route));
                    })
                )
            );
        }
    }]);

    return Layout;
}(_react2.default.Component);

exports.default = Layout;

/***/ }),

/***/ "./src/components/Secret.js":
/*!**********************************!*\
  !*** ./src/components/Secret.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Secret = function Secret() {
    return _react2.default.createElement(
        "div",
        { className: "wrapper" },
        _react2.default.createElement(
            "h2",
            null,
            "This is a prersonal page"
        )
    );
};

exports.default = Secret;

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Home = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");

var _Home2 = _interopRequireDefault(_Home);

var _About = __webpack_require__(/*! ./components/About */ "./src/components/About.js");

var _About2 = _interopRequireDefault(_About);

var _Contact = __webpack_require__(/*! ./components/Contact */ "./src/components/Contact.js");

var _Contact2 = _interopRequireDefault(_Contact);

var _Secret = __webpack_require__(/*! ./components/Secret */ "./src/components/Secret.js");

var _Secret2 = _interopRequireDefault(_Secret);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    path: "/",
    component: _Home2.default,
    exact: true
}, {
    path: "/about",
    component: _About2.default,
    exact: true
}, {
    path: "/contact",
    component: _Contact2.default,
    exact: true
}, {
    path: "/secret",
    component: _Secret2.default,
    exact: true
}];

/***/ }),

/***/ "./src/server/api.js":
/*!***************************!*\
  !*** ./src/server/api.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchFeatures = fetchFeatures;
function fetchFeatures() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(['1', '2', '3']);
        }, 2000);
    });
}

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _utils = __webpack_require__(/*! ./utils */ "./src/server/utils.js");

var _store = __webpack_require__(/*! ../store */ "./src/store.js");

var _store2 = _interopRequireDefault(_store);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _routes = __webpack_require__(/*! ../routes */ "./src/routes.js");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
	var store = (0, _store2.default)();
	store.dispatch((0, _store.initializeSession)());
	var context = {};

	var dataRequirements = _routes2.default.filter(function (route) {
		return (0, _reactRouterDom.matchPath)(req.url, route);
	}) // filter matching paths
	.map(function (route) {
		return route.component;
	}) // map to components
	.filter(function (comp) {
		return comp.serverFetch;
	}) // check if components have data requirement
	.map(function (comp) {
		return store.dispatch(comp.serverFetch());
	}); // dispatch data requirement

	Promise.all(dataRequirements).then(function () {
		res.writeHead(200, { "Content-Type": "text/html" });
		var html = (0, _utils.render)(store, req, context);
		res.end(html);
	});
});

var server = app.listen(3000);

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = undefined;

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _serializeJavascript = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = exports.render = function render(store, req, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(_Layout2.default, null)
    )
  ));

  var helmetData = _reactHelmet.Helmet.renderStatic();
  var reduxState = store.getState();

  return '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset="utf-8">\n        ' + helmetData.title.toString() + '\n        ' + helmetData.meta.toString() + '\n        <title>React SSR</title>\n      </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n          window.REDUX_DATA = ' + (0, _serializeJavascript2.default)(reduxState, { isJSON: true }) + '\n        </script>\n        <script src="/index.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchData = exports.logout = exports.login = exports.initializeSession = undefined;

var _redux = __webpack_require__(/*! redux */ "redux");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _api = __webpack_require__(/*! ./server/api.js */ "./src/server/api.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initializeSession = exports.initializeSession = function initializeSession() {
    return {
        type: "INITIALIZE_SESSION"
    };
};

var login = exports.login = function login() {
    return {
        type: "LOGIN"
    };
};

var logout = exports.logout = function logout() {
    return {
        type: "LOGOUT"
    };
};

var storeData = function storeData(data) {
    return {
        type: "STORE_DATA",
        data: data
    };
};

var fetchData = exports.fetchData = function fetchData() {
    return function (dispatch) {
        return (0, _api.fetchFeatures)().then(function (res) {
            return dispatch(storeData(res));
        });
    };
};

var sessionReducer = function sessionReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments[1];

    switch (action.type) {
        case "INITIALIZE_SESSION":
            return false;
        case "LOGOUT":
            console.log('logout!');
            return false;
        case "LOGIN":
            console.log('login!');
            return true;
        default:
            return state;
    }
};

var dataReducer = function dataReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case "STORE_DATA":
            return action.data;
        default:
            return state;
    }
};

var reducer = (0, _redux.combineReducers)({
    loggedIn: sessionReducer,
    data: dataReducer
});

exports.default = function (initialState) {
    return (0, _redux.createStore)(reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map