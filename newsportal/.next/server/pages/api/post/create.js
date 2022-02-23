"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/post/create";
exports.ids = ["pages/api/post/create"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./common/db.js":
/*!**********************!*\
  !*** ./common/db.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nglobal.mongoose = {\n    conn: null,\n    promise: null\n};\nconst connectToDb = async ()=>{\n    if (global.mongoose && global.mongoose.conn) {\n        console.log('existing Database Connected Succesfully');\n        return global.mongoose.conn;\n    } else {\n        console.log('new Database Connected Succesfully');\n        const promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URL).then((mongoose1)=>mongoose1\n        ).catch((error)=>{\n            console.log(process.env.MONGODB_URL);\n            console.log('Database Connection fail');\n        });\n        global.mongoose = {\n            conn: await promise,\n            promise\n        };\n        return await promise;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDb);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb21tb24vZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CQyxNQUFNLENBQUNELFFBQVEsR0FBRyxDQUFDO0lBQ2ZFLElBQUksRUFBRSxJQUFJO0lBQ1ZDLE9BQU8sRUFBRSxJQUFJO0FBQ2pCLENBQUM7QUFFRCxLQUFLLENBQUNDLFdBQVcsYUFBZSxDQUFDO0lBQzdCLEVBQUUsRUFBRUgsTUFBTSxDQUFDRCxRQUFRLElBQUlDLE1BQU0sQ0FBQ0QsUUFBUSxDQUFDRSxJQUFJLEVBQUUsQ0FBQztRQUMxQ0csT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBeUM7UUFDckQsTUFBTSxDQUFDTCxNQUFNLENBQUNELFFBQVEsQ0FBQ0UsSUFBSTtJQUMvQixDQUFDLE1BQU0sQ0FBQztRQUNKRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFvQztRQUNoRCxLQUFLLENBQUNILE9BQU8sR0FBR0gsdURBQWdCLENBQUNRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLEVBQ3ZEQyxJQUFJLEVBQUNYLFNBQVEsR0FBSUEsU0FBUTtVQUN6QlksS0FBSyxFQUFFQyxLQUFLLEdBQUssQ0FBQztZQUNYUixPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVc7WUFDbkNMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQTBCO1FBQzFDLENBQUM7UUFFTEwsTUFBTSxDQUFDRCxRQUFRLEdBQUcsQ0FBQztZQUNmRSxJQUFJLEVBQUUsS0FBSyxDQUFDQyxPQUFPO1lBQ25CQSxPQUFPO1FBQ1gsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUNBLE9BQU87SUFDeEIsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZUMsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3c3BvcnRhbC8uL2NvbW1vbi9kYi5qcz8zYjQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5nbG9iYWwubW9uZ29vc2UgPSB7XHJcbiAgICBjb25uOiBudWxsLFxyXG4gICAgcHJvbWlzZTogbnVsbFxyXG59XHJcblxyXG5jb25zdCBjb25uZWN0VG9EYiA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChnbG9iYWwubW9uZ29vc2UgJiYgZ2xvYmFsLm1vbmdvb3NlLmNvbm4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZXhpc3RpbmcgRGF0YWJhc2UgQ29ubmVjdGVkIFN1Y2Nlc2Z1bGx5Jyk7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbC5tb25nb29zZS5jb25uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbmV3IERhdGFiYXNlIENvbm5lY3RlZCBTdWNjZXNmdWxseScpO1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMKVxyXG4gICAgICAgIC50aGVuKG1vbmdvb3NlID0+IG1vbmdvb3NlKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhYmFzZSBDb25uZWN0aW9uIGZhaWwnKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZ2xvYmFsLm1vbmdvb3NlID0ge1xyXG4gICAgICAgICAgICBjb25uOiBhd2FpdCBwcm9taXNlLFxyXG4gICAgICAgICAgICBwcm9taXNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgcHJvbWlzZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb0RiOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiY29ubmVjdFRvRGIiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSTCIsInRoZW4iLCJjYXRjaCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./common/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/post/create.js":
/*!**********************************!*\
  !*** ./pages/api/post/create.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _common_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/db */ \"(api)/./common/db.js\");\n\nasync function handler(req, res) {\n    if (req.method !== 'POST') {\n        await (0,_common_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        res.status(404).json({\n            name: \"invalid url\"\n        });\n    } else {\n        const { name  } = req.body;\n        res.status(200).json([\n            {\n                id: \"1\",\n                name: \"ih8u7h\",\n                email: \"dodjid\"\n            }\n        ]);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdC9jcmVhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEM7QUFFN0IsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQzdDLEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBTSxPQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDSixzREFBVztRQUNqQkcsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxJQUFJLEVBQUUsQ0FBYTtRQUFDLENBQUM7SUFDaEQsQ0FBQyxNQUFNLENBQUM7UUFDSixLQUFLLENBQUMsQ0FBQ0EsQ0FBQUEsSUFBSSxHQUFDLEdBQUdMLEdBQUcsQ0FBQ00sSUFBSTtRQUV2QkwsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUNsQixDQUFDO2dCQUNHRyxFQUFFLEVBQUUsQ0FBRztnQkFDUEYsSUFBSSxFQUFFLENBQVE7Z0JBQ2RHLEtBQUssRUFBRSxDQUFRO1lBQ25CLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcG9ydGFsLy4vcGFnZXMvYXBpL3Bvc3QvY3JlYXRlLmpzPzk0NzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3RUb0RiIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9kYic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgYXdhaXQgY29ubmVjdFRvRGIoKTtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG5hbWU6IFwiaW52YWxpZCB1cmxcIiB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB7bmFtZX0gPSByZXEuYm9keTtcclxuXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImloOHU3aFwiLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IFwiZG9kamlkXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiY29ubmVjdFRvRGIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm5hbWUiLCJib2R5IiwiaWQiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/post/create.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/post/create.js"));
module.exports = __webpack_exports__;

})();