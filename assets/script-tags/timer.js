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
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n(function () {\n    console.log('Script is activated at ' + new Date().toString());\n    var el = document.getElementById('discount-timeout');\n\n    if (el !== null) {\n        var timerId = el.dataset.id;\n        getConfig('https://discount-timeout.herokuapp.com/get/config/' + getShopName() + '?timer=' + timerId, function (response) {\n            var today = new Date();\n            var timeout = new Date().setDate(today.getDate() + 3);\n\n            if (response.timeout !== null) {\n                timeout = response.timeout;\n            }\n            // Call the tick method to start countdown\n            // Pass the final date and time to this method as string\n            tick(timeout);\n        });\n    }\n\n    function getShopName() {\n        var url = window.location.href;\n        var urlSplits = url.split('.');\n        return urlSplits[0].substr(8, urlSplits[0].length);\n    }\n\n    function compare(start, end) {\n        var diff = end - start;\n        return diff;\n    }\n\n    function stringToUnix(string) {\n        var date = new Date(string);\n        if ((typeof date === 'undefined' ? 'undefined' : _typeof(date)) == 'object') {\n            return parseInt(date.getTime().toFixed(0));\n        }\n    }\n\n    function msToTime(duration) {\n        var milliseconds = parseInt(duration % 1000 / 100);\n        var seconds = parseInt(duration / 1000 % 60);\n        var minutes = parseInt(duration / (1000 * 60) % 60);\n        var hours = parseInt(duration / (1000 * 60 * 60) % 24);\n        var days = parseInt(duration / (1000 * 60 * 60 * 24));\n\n        return {\n            days: days,\n            hours: hours,\n            minutes: minutes,\n            seconds: seconds,\n            milliseconds: milliseconds\n        };\n    }\n\n    function tick(timeout) {\n        setInterval(function () {\n            var today = new Date().toString();\n            var diff = compare(stringToUnix(today), stringToUnix(timeout));\n            var tick = render(msToTime(diff));\n            el.innerHTML = tick;\n        }, 1000, timeout);\n    }\n\n    function render(payload) {\n        var minutes = payload.minutes < 10 ? \"0\" + payload.minutes : payload.minutes;\n        var seconds = payload.seconds < 10 ? \"0\" + payload.seconds : payload.seconds;\n        var timeSpams = [{ label: 'days', value: payload.days }, { label: 'hours', value: payload.hours }, { label: 'minutes', value: minutes }, { label: 'seconds', value: seconds }];\n\n        var out = '<div class=\"note form-success\" style=\"width:100%;display:flex;justify-content:center;text-align: center;\">';\n\n        if (payload.days !== 0 && payload.hours !== 0 && payload.minutes !== 0 && payload.seconds !== 0) {\n            for (var i = 0; i < timeSpams.length; i++) {\n                out += '<div ' + (i == timeSpams.length - 1 ? '' : 'style=\"margin-right: 10px;\"') + '>' + timeSpams[i].value + ' ' + timeSpams[i].label + '</div>';\n            }\n        } else {\n            out += 'This offer has expired. Stay close for more special offers!';\n        }\n        out += '</div>';\n\n        return out;\n    }\n\n    function getConfig(url, callback) {\n        var options = {\n            method: 'GET',\n            mode: 'cors',\n            headers: { Accept: 'application/json' }\n        };\n\n        fetch(url, options).then(function (response) {\n            return response.json();\n        }).then(function (result) {\n            callback(result);\n        }).catch(function (err) {\n            console.log(err);\n        });\n    }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdGltZXIuanM/NTBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgU2NyaXB0IGlzIGFjdGl2YXRlZCBhdCAke25ldyBEYXRlKCkudG9TdHJpbmcoKX1gKVxyXG4gICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50LXRpbWVvdXQnKTtcclxuXHJcbiAgICBpZihlbCAhPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgICBsZXQgdGltZXJJZCA9IGVsLmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgZ2V0Q29uZmlnKCdodHRwczovL2Rpc2NvdW50LXRpbWVvdXQuaGVyb2t1YXBwLmNvbS9nZXQvY29uZmlnLycgKyBnZXRTaG9wTmFtZSgpICsgJz90aW1lcj0nICsgdGltZXJJZCwgKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgbGV0IHRpbWVvdXQgPSBuZXcgRGF0ZSgpLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMyk7XHJcblxyXG4gICAgICAgICAgICBpZihyZXNwb25zZS50aW1lb3V0ICE9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gcmVzcG9uc2UudGltZW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBDYWxsIHRoZSB0aWNrIG1ldGhvZCB0byBzdGFydCBjb3VudGRvd25cclxuICAgICAgICAgICAgLy8gUGFzcyB0aGUgZmluYWwgZGF0ZSBhbmQgdGltZSB0byB0aGlzIG1ldGhvZCBhcyBzdHJpbmdcclxuICAgICAgICAgICAgdGljayh0aW1lb3V0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNob3BOYW1lKClcclxuICAgIHtcclxuICAgICAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgbGV0IHVybFNwbGl0cyA9IHVybC5zcGxpdCgnLicpO1xyXG4gICAgICAgIHJldHVybiB1cmxTcGxpdHNbMF0uc3Vic3RyKDgsIHVybFNwbGl0c1swXS5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBhcmUoc3RhcnQsIGVuZClcclxuICAgIHtcclxuICAgICAgbGV0IGRpZmYgPSBlbmQgLSBzdGFydDtcclxuICAgICAgcmV0dXJuIGRpZmY7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RyaW5nVG9Vbml4KHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHN0cmluZyk7XHJcbiAgICAgICAgaWYodHlwZW9mIGRhdGUgPT0gJ29iamVjdCcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KChkYXRlLmdldFRpbWUoKSkudG9GaXhlZCgwKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbXNUb1RpbWUoZHVyYXRpb24pXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIG1pbGxpc2Vjb25kcyA9IHBhcnNlSW50KChkdXJhdGlvbiAlIDEwMDApIC8gMTAwKVxyXG4gICAgICAgIHZhciBzZWNvbmRzID0gcGFyc2VJbnQoKGR1cmF0aW9uIC8gMTAwMCkgJSA2MClcclxuICAgICAgICB2YXIgbWludXRlcyA9IHBhcnNlSW50KChkdXJhdGlvbiAvICgxMDAwICogNjApKSAlIDYwKVxyXG4gICAgICAgIHZhciBob3VycyA9IHBhcnNlSW50KChkdXJhdGlvbiAvICgxMDAwICogNjAgKiA2MCkpICUgMjQpXHJcbiAgICAgICAgdmFyIGRheXMgPSBwYXJzZUludCgoZHVyYXRpb24gLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpKVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkYXlzLFxyXG4gICAgICAgICAgICBob3VycyxcclxuICAgICAgICAgICAgbWludXRlcyxcclxuICAgICAgICAgICAgc2Vjb25kcyxcclxuICAgICAgICAgICAgbWlsbGlzZWNvbmRzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRpY2sodGltZW91dClcclxuICAgIHtcclxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBsZXQgZGlmZiA9IGNvbXBhcmUoc3RyaW5nVG9Vbml4KHRvZGF5KSwgc3RyaW5nVG9Vbml4KHRpbWVvdXQpKTtcclxuICAgICAgICAgICAgbGV0IHRpY2sgPSByZW5kZXIobXNUb1RpbWUoZGlmZikpO1xyXG4gICAgICAgICAgICBlbC5pbm5lckhUTUwgPSB0aWNrO1xyXG4gICAgICAgIH0sIDEwMDAsIHRpbWVvdXQpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyKHBheWxvYWQpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSAocGF5bG9hZC5taW51dGVzIDwgMTApID8gXCIwXCIgKyBwYXlsb2FkLm1pbnV0ZXMgOiBwYXlsb2FkLm1pbnV0ZXM7XHJcbiAgICAgICAgbGV0IHNlY29uZHMgPSAocGF5bG9hZC5zZWNvbmRzIDwgMTApID8gXCIwXCIgKyBwYXlsb2FkLnNlY29uZHMgOiBwYXlsb2FkLnNlY29uZHM7XHJcbiAgICAgICAgbGV0IHRpbWVTcGFtcyA9IFtcclxuICAgICAgICAgICAgeyBsYWJlbDogJ2RheXMnLCB2YWx1ZTogcGF5bG9hZC5kYXlzIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6ICdob3VycycsIHZhbHVlOiBwYXlsb2FkLmhvdXJzIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6ICdtaW51dGVzJywgdmFsdWU6IG1pbnV0ZXMgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogJ3NlY29uZHMnLCB2YWx1ZTogc2Vjb25kcyB9XTtcclxuXHJcbiAgICAgICAgbGV0IG91dCA9IGA8ZGl2IGNsYXNzPVwibm90ZSBmb3JtLXN1Y2Nlc3NcIiBzdHlsZT1cIndpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7dGV4dC1hbGlnbjogY2VudGVyO1wiPmA7XHJcblxyXG4gICAgICAgIGlmKHBheWxvYWQuZGF5cyAhPT0gMCAmJiBwYXlsb2FkLmhvdXJzICE9PSAwICYmIHBheWxvYWQubWludXRlcyAhPT0gMCAmJiBwYXlsb2FkLnNlY29uZHMgIT09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGltZVNwYW1zLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvdXQgKz0gYDxkaXYgJHsoaSA9PSAodGltZVNwYW1zLmxlbmd0aCAtIDEpKSA/ICcnIDogJ3N0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4O1wiJ30+JHt0aW1lU3BhbXNbaV0udmFsdWV9ICR7dGltZVNwYW1zW2ldLmxhYmVsfTwvZGl2PmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvdXQgKz0gYFRoaXMgb2ZmZXIgaGFzIGV4cGlyZWQuIFN0YXkgY2xvc2UgZm9yIG1vcmUgc3BlY2lhbCBvZmZlcnMhYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3V0ICs9IGA8L2Rpdj5gO1xyXG5cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbmZpZyh1cmwsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmV0Y2godXJsLCBvcHRpb25zKS50aGVuKChyZXNwb25zZSk9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KT0+IHtcclxuICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0KVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy90aW1lci5qcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);