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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n(function () {\n    console.log('Script is activated at ' + new Date().toString());\n    var el = document.getElementById('discount-timeout');\n\n    if (el !== null) {\n        var timerId = el.dataset.timerId;\n        getConfig('https://discount-timeout.herokuapp.com/get/timer/' + getShopName() + '?timer=' + timerId, function (response) {\n            var today = new Date();\n            var timeout = new Date().setDate(today.getDate() + 3);\n\n            if (response.timeout !== null) {\n                timeout = response.timeout;\n            }\n            // Call the tick method to start countdown\n            // Pass the final date and time to this method as string\n            tick(timeout);\n        });\n    }\n\n    function getShopName() {\n        var url = window.location.href;\n        var urlSplits = url.split('.');\n        return urlSplits[0].substr(8, urlSplits[0].length);\n    }\n\n    function compare(start, end) {\n        var diff = end - start;\n        return diff;\n    }\n\n    function stringToUnix(string) {\n        var date = new Date(string);\n        if ((typeof date === 'undefined' ? 'undefined' : _typeof(date)) == 'object') {\n            return parseInt(date.getTime().toFixed(0));\n        }\n    }\n\n    function msToTime(duration) {\n        var milliseconds = parseInt(duration % 1000 / 100);\n        var seconds = parseInt(duration / 1000 % 60);\n        var minutes = parseInt(duration / (1000 * 60) % 60);\n        var hours = parseInt(duration / (1000 * 60 * 60) % 24);\n        var days = parseInt(duration / (1000 * 60 * 60 * 24));\n\n        return {\n            days: days,\n            hours: hours,\n            minutes: minutes,\n            seconds: seconds,\n            milliseconds: milliseconds\n        };\n    }\n\n    function tick(timeout) {\n        setInterval(function () {\n            var today = new Date().toString();\n            var diff = compare(stringToUnix(today), stringToUnix(timeout));\n            var tick = render(msToTime(diff));\n            el.innerHTML = tick;\n        }, 1000, timeout);\n    }\n\n    function render(payload) {\n        var minutes = payload.minutes < 10 ? \"0\" + payload.minutes : payload.minutes;\n        var seconds = payload.seconds < 10 ? \"0\" + payload.seconds : payload.seconds;\n        var timeSpams = [{ label: 'days', value: payload.days }, { label: 'hours', value: payload.hours }, { label: 'minutes', value: minutes }, { label: 'seconds', value: seconds }];\n\n        var out = '<div class=\"note form-success\" style=\"width:100%;display:flex;justify-content:center;text-align: center;\">';\n\n        if (payload.days !== 0 && payload.hours !== 0 && payload.minutes !== 0 && payload.seconds !== 0) {\n            for (var i = 0; i < timeSpams.length; i++) {\n                out += '<div ' + (i == timeSpams.length - 1 ? '' : 'style=\"margin-right: 10px;\"') + '>' + timeSpams[i].value + ' ' + timeSpams[i].label + '</div>';\n            }\n        } else {\n            out += 'This offer has expired. Stay close for more special offers!';\n        }\n        out += '</div>';\n\n        return out;\n    }\n\n    function getConfig(url, callback) {\n        var options = {\n            method: 'GET',\n            mode: 'cors',\n            headers: { Accept: 'application/json' }\n        };\n\n        fetch(url, options).then(function (response) {\n            return response.json();\n        }).then(function (result) {\n            callback(result);\n        }).catch(function (err) {\n            console.log(err);\n        });\n    }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdGltZXIuanM/NTBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgU2NyaXB0IGlzIGFjdGl2YXRlZCBhdCAke25ldyBEYXRlKCkudG9TdHJpbmcoKX1gKVxyXG4gICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50LXRpbWVvdXQnKTtcclxuXHJcbiAgICBpZihlbCAhPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgICBsZXQgdGltZXJJZCA9IGVsLmRhdGFzZXQudGltZXJJZDtcclxuICAgICAgICBnZXRDb25maWcoJ2h0dHBzOi8vZGlzY291bnQtdGltZW91dC5oZXJva3VhcHAuY29tL2dldC90aW1lci8nICsgZ2V0U2hvcE5hbWUoKSArICc/dGltZXI9JyArIHRpbWVySWQsIChyZXNwb25zZSk9PiB7XHJcbiAgICAgICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGxldCB0aW1lb3V0ID0gbmV3IERhdGUoKS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSArIDMpO1xyXG5cclxuICAgICAgICAgICAgaWYocmVzcG9uc2UudGltZW91dCAhPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGltZW91dCA9IHJlc3BvbnNlLnRpbWVvdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQ2FsbCB0aGUgdGljayBtZXRob2QgdG8gc3RhcnQgY291bnRkb3duXHJcbiAgICAgICAgICAgIC8vIFBhc3MgdGhlIGZpbmFsIGRhdGUgYW5kIHRpbWUgdG8gdGhpcyBtZXRob2QgYXMgc3RyaW5nXHJcbiAgICAgICAgICAgIHRpY2sodGltZW91dCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTaG9wTmFtZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIGxldCB1cmxTcGxpdHMgPSB1cmwuc3BsaXQoJy4nKTtcclxuICAgICAgICByZXR1cm4gdXJsU3BsaXRzWzBdLnN1YnN0cig4LCB1cmxTcGxpdHNbMF0ubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb21wYXJlKHN0YXJ0LCBlbmQpXHJcbiAgICB7XHJcbiAgICAgIGxldCBkaWZmID0gZW5kIC0gc3RhcnQ7XHJcbiAgICAgIHJldHVybiBkaWZmO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0cmluZ1RvVW5peChzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShzdHJpbmcpO1xyXG4gICAgICAgIGlmKHR5cGVvZiBkYXRlID09ICdvYmplY3QnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgIHJldHVybiBwYXJzZUludCgoZGF0ZS5nZXRUaW1lKCkpLnRvRml4ZWQoMCkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1zVG9UaW1lKGR1cmF0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBtaWxsaXNlY29uZHMgPSBwYXJzZUludCgoZHVyYXRpb24gJSAxMDAwKSAvIDEwMClcclxuICAgICAgICB2YXIgc2Vjb25kcyA9IHBhcnNlSW50KChkdXJhdGlvbiAvIDEwMDApICUgNjApXHJcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSBwYXJzZUludCgoZHVyYXRpb24gLyAoMTAwMCAqIDYwKSkgJSA2MClcclxuICAgICAgICB2YXIgaG91cnMgPSBwYXJzZUludCgoZHVyYXRpb24gLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KVxyXG4gICAgICAgIHZhciBkYXlzID0gcGFyc2VJbnQoKGR1cmF0aW9uIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGF5cyxcclxuICAgICAgICAgICAgaG91cnMsXHJcbiAgICAgICAgICAgIG1pbnV0ZXMsXHJcbiAgICAgICAgICAgIHNlY29uZHMsXHJcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0aWNrKHRpbWVvdXQpXHJcbiAgICB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgbGV0IGRpZmYgPSBjb21wYXJlKHN0cmluZ1RvVW5peCh0b2RheSksIHN0cmluZ1RvVW5peCh0aW1lb3V0KSk7XHJcbiAgICAgICAgICAgIGxldCB0aWNrID0gcmVuZGVyKG1zVG9UaW1lKGRpZmYpKTtcclxuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gdGljaztcclxuICAgICAgICB9LCAxMDAwLCB0aW1lb3V0KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlcihwYXlsb2FkKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBtaW51dGVzID0gKHBheWxvYWQubWludXRlcyA8IDEwKSA/IFwiMFwiICsgcGF5bG9hZC5taW51dGVzIDogcGF5bG9hZC5taW51dGVzO1xyXG4gICAgICAgIGxldCBzZWNvbmRzID0gKHBheWxvYWQuc2Vjb25kcyA8IDEwKSA/IFwiMFwiICsgcGF5bG9hZC5zZWNvbmRzIDogcGF5bG9hZC5zZWNvbmRzO1xyXG4gICAgICAgIGxldCB0aW1lU3BhbXMgPSBbXHJcbiAgICAgICAgICAgIHsgbGFiZWw6ICdkYXlzJywgdmFsdWU6IHBheWxvYWQuZGF5cyB9LFxyXG4gICAgICAgICAgICB7IGxhYmVsOiAnaG91cnMnLCB2YWx1ZTogcGF5bG9hZC5ob3VycyB9LFxyXG4gICAgICAgICAgICB7IGxhYmVsOiAnbWludXRlcycsIHZhbHVlOiBtaW51dGVzIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6ICdzZWNvbmRzJywgdmFsdWU6IHNlY29uZHMgfV07XHJcblxyXG4gICAgICAgIGxldCBvdXQgPSBgPGRpdiBjbGFzcz1cIm5vdGUgZm9ybS1zdWNjZXNzXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3RleHQtYWxpZ246IGNlbnRlcjtcIj5gO1xyXG5cclxuICAgICAgICBpZihwYXlsb2FkLmRheXMgIT09IDAgJiYgcGF5bG9hZC5ob3VycyAhPT0gMCAmJiBwYXlsb2FkLm1pbnV0ZXMgIT09IDAgJiYgcGF5bG9hZC5zZWNvbmRzICE9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRpbWVTcGFtcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb3V0ICs9IGA8ZGl2ICR7KGkgPT0gKHRpbWVTcGFtcy5sZW5ndGggLSAxKSkgPyAnJyA6ICdzdHlsZT1cIm1hcmdpbi1yaWdodDogMTBweDtcIid9PiR7dGltZVNwYW1zW2ldLnZhbHVlfSAke3RpbWVTcGFtc1tpXS5sYWJlbH08L2Rpdj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3V0ICs9IGBUaGlzIG9mZmVyIGhhcyBleHBpcmVkLiBTdGF5IGNsb3NlIGZvciBtb3JlIHNwZWNpYWwgb2ZmZXJzIWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG91dCArPSBgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb25maWcodXJsLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZldGNoKHVybCwgb3B0aW9ucykudGhlbigocmVzcG9uc2UpPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCk9PiB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdClcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdGltZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);