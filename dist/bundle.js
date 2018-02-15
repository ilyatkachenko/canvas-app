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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var canvas;
var ctx;
function app() {
    var blueInput = document.getElementById("blue-input");
    var blueButton = document.getElementById("blue-button");
    var greenInput = document.getElementById("green-input");
    var greenButton = document.getElementById("green-button");
    var resultInput = document.getElementById("result-input");
    var resultButton = document.getElementById("result-button");
    var centerX = canvas.width / 2;
    var centerY = canvas.height;
    var radius = 500;
    var radius2 = 440;
    var radius3 = 400;
    var radius4 = 470;
    canvasBody(centerX, centerY, radius, radius2, radius3, radius4);
    blueButton.addEventListener("click", function () {
        var val = parseFloat(blueInput.value);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 1 * Math.PI, true);
        ctx.lineWidth = 30;
        ctx.strokeStyle = '#532595';
        ctx.setLineDash([0, 0]);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 1 * Math.PI, true);
        ctx.lineWidth = 30;
        ctx.strokeStyle = '#472188';
        ctx.setLineDash([2, 4]);
        ctx.stroke();
        ctx.closePath();
        blueBar(val);
    });
    greenButton.addEventListener("click", function () {
        var val = parseFloat(greenInput.value);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius2, 0, 1 * Math.PI, true);
        ctx.lineWidth = 30;
        ctx.strokeStyle = '#532595';
        ctx.setLineDash([0, 0]);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius2, 0, 1 * Math.PI, true);
        ctx.lineWidth = 30;
        ctx.strokeStyle = '#472188';
        ctx.setLineDash([2, 4]);
        ctx.stroke();
        ctx.closePath();
        greenBar(val);
    });
    resultButton.addEventListener("click", function () {
        var val = parseFloat(resultInput.value);
        document.getElementById("progressPercent").innerHTML = "0";
        resultBar(val);
    });
    function blueBar(val) {
        var width = 0;
        var anim = setInterval(function frame() {
            if (width >= val) {
                clearInterval(anim);
            }
            else {
                width++;
                var per = (width / 100);
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius, 0, -per * Math.PI, true);
                ctx.lineWidth = 28;
                ctx.strokeStyle = '#0196da';
                ctx.setLineDash([4, 2]);
                ctx.stroke();
                ctx.closePath();
            }
        }, 20);
    }
    function greenBar(val) {
        var width = 0;
        var anim = setInterval(function frame() {
            if (width >= val) {
                clearInterval(anim);
            }
            else {
                width++;
                var per = (width / 100) + 1;
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius2, Math.PI, per * Math.PI, false);
                ctx.lineWidth = 28;
                ctx.strokeStyle = '#51e4c2';
                ctx.setLineDash([4, 2]);
                ctx.stroke();
                ctx.closePath();
            }
        }, 20);
    }
    function resultBar(val) {
        var width = 0;
        var x;
        var y;
        var anim = setInterval(function frame() {
            if (width >= val) {
                clearInterval(anim);
            }
            else {
                width++;
                var per = (width / 100) + 0.5;
                var s = -per * Math.PI;
                x = centerX + radius4 * Math.sin(s);
                y = centerY + radius4 * Math.cos(s);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                canvasBody(centerX, centerY, radius, radius2, radius3, radius4);
                ctx.beginPath();
                ctx.arc(x, y, 25, 0, 2 * Math.PI, true);
                ctx.fillStyle = "#fda803";
                ctx.fill();
                ctx.closePath();
                document.getElementById("progressPercent").innerHTML = "" + width;
            }
        }, 20);
    }
}
function canvasBody(centerX, centerY, radius, radius2, radius3, radius4) {
    ctx.fillStyle = "#6d2eb3";
    ctx.fillRect(0, 0, 1500, 875);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 1 * Math.PI, true);
    ctx.lineWidth = 30;
    ctx.strokeStyle = '#532595';
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius2, 0, 1 * Math.PI, true);
    ctx.lineWidth = 30;
    ctx.strokeStyle = '#532595';
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 1 * Math.PI, true);
    ctx.lineWidth = 30;
    ctx.strokeStyle = '#472188';
    ctx.setLineDash([2, 4]);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius2, 0, 1 * Math.PI, true);
    ctx.lineWidth = 30;
    ctx.strokeStyle = '#472188';
    ctx.setLineDash([2, 4]);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius3, 0, 1 * Math.PI, true);
    ctx.fillStyle = "#442175";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius4, 0, 1 * Math.PI, true);
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#472188';
    ctx.setLineDash([0, 0]);
    ctx.stroke();
    ctx.closePath();
}
window.onload = function () {
    canvas = document.getElementById('cnvs');
    ctx = canvas.getContext("2d");
    app();
};


/***/ })
/******/ ]);