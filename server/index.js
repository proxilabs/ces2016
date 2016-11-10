/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _feedme = __webpack_require__(2);

	var _feedme2 = _interopRequireDefault(_feedme);

	var _isomorphicFetch = __webpack_require__(3);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _cors = __webpack_require__(4);

	var _cors2 = _interopRequireDefault(_cors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	app.use((0, _cors2.default)());

	app.get('/', function (req, res) {
	  if (!req.query.url) {
	    res.status(400).end();
	  } else {
	    (function () {
	      var parser = new _feedme2.default(true);

	      (0, _isomorphicFetch2.default)(req.query.url).then(function (r) {
	        return r.text();
	      }).then(function (data) {
	        parser.write(data);

	        res.json(parser.done());
	      }).catch(function () {
	        return res.status(500).end();
	      });
	    })();
	  }
	});

	app.listen(3001, function () {
	  return console.info('Listening on port 3001');
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("feedme");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("cors");

/***/ }
/******/ ]);