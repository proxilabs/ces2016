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

	var _feedparser = __webpack_require__(2);

	var _feedparser2 = _interopRequireDefault(_feedparser);

	var _fs = __webpack_require__(3);

	var _fs2 = _interopRequireDefault(_fs);

	var _path = __webpack_require__(4);

	var _path2 = _interopRequireDefault(_path);

	var _request = __webpack_require__(5);

	var _request2 = _interopRequireDefault(_request);

	var _cors = __webpack_require__(6);

	var _cors2 = _interopRequireDefault(_cors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cacheFolder = './cache';

	try {
	  _fs2.default.mkdirSync(cacheFolder);
	} catch (e) {
	  console.info(e.message);
	}

	var app = (0, _express2.default)();

	app.use((0, _cors2.default)());

	app.get('/', function (req, res) {
	  if (!req.query.url) {
	    res.status(400).end();
	  } else {
	    (function () {
	      var cachePath = _path2.default.join(cacheFolder, encodeURIComponent(req.query.url));
	      console.info('Looking for', cachePath);

	      // On commence par vérifier si le flux demandé existe dans le cache
	      if (_fs2.default.existsSync(cachePath)) {
	        console.info('Cache found!');
	        _fs2.default.readFile(cachePath, function (err, data) {
	          return res.json(JSON.parse(data));
	        });
	      } else {
	        (function () {
	          console.info('Cache not found, requesting...');
	          var r = (0, _request2.default)(req.query.url);
	          var items = [];
	          var feedparser = new _feedparser2.default();

	          r.on('error', function () {
	            return res.status(500).end();
	          });
	          r.on('response', function (o) {
	            return o.pipe(feedparser);
	          });

	          feedparser.on('error', function () {
	            return res.status(400).end();
	          });
	          feedparser.on('readable', function onReadable() {
	            var item = this.read();

	            while (item) {
	              items.push(item);
	              item = this.read();
	            }
	          });
	          feedparser.on('end', function () {
	            console.info('Writing', cachePath);
	            // On met dans le cache le résultat
	            _fs2.default.writeFile(cachePath, JSON.stringify(items), function () {
	              return res.json(items);
	            });
	          });
	        })();
	      }
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

	module.exports = require("feedparser");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("request");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("cors");

/***/ }
/******/ ]);