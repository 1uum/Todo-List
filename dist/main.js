/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//import render from './modules/default'\n\n//document.addEventListener('DOMContentLoaded' , render.loadDefault);\n\nconst open_modal_add = document.getElementById('add-button');\nconst modal_container_add = document.getElementById('modal-container');\nconst close_modal_add = document.getElementById('btn-close');\n\nconst open_modal_project = document.getElementById('add-project');\nconst modal_container_project = document.getElementById('modal-project');\nconst close_modal_project =document.getElementById('btn-close-project');\n\nopen_modal_add.addEventListener('click', () =>{\n    modal_container_add.classList.add('show_modal_add');\n});\n\nclose_modal_add.addEventListener('click', () =>{\n    modal_container_add.classList.remove('show_modal_add');\n});\n\nopen_modal_project.addEventListener('click', () => {\n    modal_container_project.classList.add('show_modal_project');\n})\n\nclose_modal_project.addEventListener('click', () => {\n    modal_container_project.classList.remove('show_modal_project');\n})\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;