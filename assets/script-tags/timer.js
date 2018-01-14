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
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n(function () {\n    console.log('Script is activated at ' + new Date().toString());\n    var el = document.getElementById('discount-timeout');\n\n    if (el !== null) {\n        var timerId = el.dataset.id;\n        getConfig('https://discount-timeout.herokuapp.com/get/config/{{shop.name}}', function (response) {\n            var today = new Date();\n            var timeout = new Date().setDate(today.getDate() + 3);\n\n            if (response.timeout !== null) {\n                timeout = response.timeout;\n            }\n            // Call the tick method to start countdown\n            // Pass the final date and time to this method as string\n            tick(timeout);\n        });\n    }\n\n    function compare(start, end) {\n        var diff = end - start;\n        return diff;\n    }\n\n    function stringToUnix(string) {\n        var date = new Date(string);\n        if ((typeof date === 'undefined' ? 'undefined' : _typeof(date)) == 'object') {\n            return parseInt(date.getTime().toFixed(0));\n        }\n    }\n\n    function msToTime(duration) {\n        var milliseconds = parseInt(duration % 1000 / 100);\n        var seconds = parseInt(duration / 1000 % 60);\n        var minutes = parseInt(duration / (1000 * 60) % 60);\n        var hours = parseInt(duration / (1000 * 60 * 60) % 24);\n        var days = parseInt(duration / (1000 * 60 * 60 * 24));\n\n        return {\n            days: days,\n            hours: hours,\n            minutes: minutes,\n            seconds: seconds,\n            milliseconds: milliseconds\n        };\n    }\n\n    function tick(timeout) {\n        setInterval(function () {\n            var today = new Date().toString();\n            var diff = compare(stringToUnix(today), stringToUnix(timeout));\n            var tick = render(msToTime(diff));\n            el.innerHTML = tick;\n        }, 1000, timeout);\n    }\n\n    function render(payload) {\n        var minutes = payload.minutes < 10 ? \"0\" + payload.minutes : payload.minutes;\n        var seconds = payload.seconds < 10 ? \"0\" + payload.seconds : payload.seconds;\n        var timeSpams = [{ label: 'days', value: payload.days }, { label: 'hours', value: payload.hours }, { label: 'minutes', value: minutes }, { label: 'seconds', value: seconds }];\n\n        var out = '<div class=\"note form-success\" style=\"width:100%;display:flex;justify-content:center;text-align: center;\">';\n\n        if (payload.days !== 0 && payload.hours !== 0 && payload.minutes !== 0 && payload.seconds !== 0) {\n            for (var i = 0; i < timeSpams.length; i++) {\n                out += '<div ' + (i == timeSpams.length - 1 ? '' : 'style=\"margin-right: 10px;\"') + '>' + timeSpams[i].value + ' ' + timeSpams[i].label + '</div>';\n            }\n        } else {\n            out += 'This offer has expired. Stay close for more special offers!';\n        }\n        out += '</div>';\n\n        return out;\n    }\n\n    function getConfig(url, callback) {\n        var options = {\n            method: 'GET',\n            mode: 'cors',\n            headers: { Accept: 'application/json' }\n        };\n\n        fetch(url, options).then(function (response) {\n            return response.json();\n        }).then(function (result) {\n            callback(result);\n        }).catch(function (err) {\n            console.log(err);\n        });\n    }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdGltZXIuanM/NTBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgU2NyaXB0IGlzIGFjdGl2YXRlZCBhdCAke25ldyBEYXRlKCkudG9TdHJpbmcoKX1gKVxyXG4gICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50LXRpbWVvdXQnKTtcclxuXHJcbiAgICBpZihlbCAhPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgICBsZXQgdGltZXJJZCA9IGVsLmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgZ2V0Q29uZmlnKCdodHRwczovL2Rpc2NvdW50LXRpbWVvdXQuaGVyb2t1YXBwLmNvbS9nZXQvY29uZmlnL3t7c2hvcC5uYW1lfX0nLCAocmVzcG9uc2UpPT4ge1xyXG4gICAgICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBsZXQgdGltZW91dCA9IG5ldyBEYXRlKCkuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyAzKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnRpbWVvdXQgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSByZXNwb25zZS50aW1lb3V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIENhbGwgdGhlIHRpY2sgbWV0aG9kIHRvIHN0YXJ0IGNvdW50ZG93blxyXG4gICAgICAgICAgICAvLyBQYXNzIHRoZSBmaW5hbCBkYXRlIGFuZCB0aW1lIHRvIHRoaXMgbWV0aG9kIGFzIHN0cmluZ1xyXG4gICAgICAgICAgICB0aWNrKHRpbWVvdXQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcGFyZShzdGFydCwgZW5kKVxyXG4gICAge1xyXG4gICAgICBsZXQgZGlmZiA9IGVuZCAtIHN0YXJ0O1xyXG4gICAgICByZXR1cm4gZGlmZjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdHJpbmdUb1VuaXgoc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoc3RyaW5nKTtcclxuICAgICAgICBpZih0eXBlb2YgZGF0ZSA9PSAnb2JqZWN0JylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoKGRhdGUuZ2V0VGltZSgpKS50b0ZpeGVkKDApKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtc1RvVGltZShkdXJhdGlvbilcclxuICAgIHtcclxuICAgICAgICB2YXIgbWlsbGlzZWNvbmRzID0gcGFyc2VJbnQoKGR1cmF0aW9uICUgMTAwMCkgLyAxMDApXHJcbiAgICAgICAgdmFyIHNlY29uZHMgPSBwYXJzZUludCgoZHVyYXRpb24gLyAxMDAwKSAlIDYwKVxyXG4gICAgICAgIHZhciBtaW51dGVzID0gcGFyc2VJbnQoKGR1cmF0aW9uIC8gKDEwMDAgKiA2MCkpICUgNjApXHJcbiAgICAgICAgdmFyIGhvdXJzID0gcGFyc2VJbnQoKGR1cmF0aW9uIC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNClcclxuICAgICAgICB2YXIgZGF5cyA9IHBhcnNlSW50KChkdXJhdGlvbiAvICgxMDAwICogNjAgKiA2MCAqIDI0KSkpXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRheXMsXHJcbiAgICAgICAgICAgIGhvdXJzLFxyXG4gICAgICAgICAgICBtaW51dGVzLFxyXG4gICAgICAgICAgICBzZWNvbmRzLFxyXG4gICAgICAgICAgICBtaWxsaXNlY29uZHNcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdGljayh0aW1lb3V0KVxyXG4gICAge1xyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGxldCBkaWZmID0gY29tcGFyZShzdHJpbmdUb1VuaXgodG9kYXkpLCBzdHJpbmdUb1VuaXgodGltZW91dCkpO1xyXG4gICAgICAgICAgICBsZXQgdGljayA9IHJlbmRlcihtc1RvVGltZShkaWZmKSk7XHJcbiAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IHRpY2s7XHJcbiAgICAgICAgfSwgMTAwMCwgdGltZW91dClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXIocGF5bG9hZClcclxuICAgIHtcclxuICAgICAgICBsZXQgbWludXRlcyA9IChwYXlsb2FkLm1pbnV0ZXMgPCAxMCkgPyBcIjBcIiArIHBheWxvYWQubWludXRlcyA6IHBheWxvYWQubWludXRlcztcclxuICAgICAgICBsZXQgc2Vjb25kcyA9IChwYXlsb2FkLnNlY29uZHMgPCAxMCkgPyBcIjBcIiArIHBheWxvYWQuc2Vjb25kcyA6IHBheWxvYWQuc2Vjb25kcztcclxuICAgICAgICBsZXQgdGltZVNwYW1zID0gW1xyXG4gICAgICAgICAgICB7IGxhYmVsOiAnZGF5cycsIHZhbHVlOiBwYXlsb2FkLmRheXMgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogJ2hvdXJzJywgdmFsdWU6IHBheWxvYWQuaG91cnMgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogJ21pbnV0ZXMnLCB2YWx1ZTogbWludXRlcyB9LFxyXG4gICAgICAgICAgICB7IGxhYmVsOiAnc2Vjb25kcycsIHZhbHVlOiBzZWNvbmRzIH1dO1xyXG5cclxuICAgICAgICBsZXQgb3V0ID0gYDxkaXYgY2xhc3M9XCJub3RlIGZvcm0tc3VjY2Vzc1wiIHN0eWxlPVwid2lkdGg6MTAwJTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjt0ZXh0LWFsaWduOiBjZW50ZXI7XCI+YDtcclxuXHJcbiAgICAgICAgaWYocGF5bG9hZC5kYXlzICE9PSAwICYmIHBheWxvYWQuaG91cnMgIT09IDAgJiYgcGF5bG9hZC5taW51dGVzICE9PSAwICYmIHBheWxvYWQuc2Vjb25kcyAhPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aW1lU3BhbXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG91dCArPSBgPGRpdiAkeyhpID09ICh0aW1lU3BhbXMubGVuZ3RoIC0gMSkpID8gJycgOiAnc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHg7XCInfT4ke3RpbWVTcGFtc1tpXS52YWx1ZX0gJHt0aW1lU3BhbXNbaV0ubGFiZWx9PC9kaXY+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG91dCArPSBgVGhpcyBvZmZlciBoYXMgZXhwaXJlZC4gU3RheSBjbG9zZSBmb3IgbW9yZSBzcGVjaWFsIG9mZmVycyFgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXQgKz0gYDwvZGl2PmA7XHJcblxyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29uZmlnKHVybCwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICAgICAgaGVhZGVyczogeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmZXRjaCh1cmwsIG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpPT4ge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQpXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3RpbWVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);