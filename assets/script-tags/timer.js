!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=0)}([function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function t(t,e){return e-t}function e(t){var e=new Date(t);if("object"==(void 0===e?"undefined":o(e)))return parseInt(e.getTime().toFixed(0))}function n(t){var e=parseInt(t%1e3/100),n=parseInt(t/1e3%60),o=parseInt(t/6e4%60),r=parseInt(t/36e5%24);return{days:parseInt(t/864e5),hours:r,minutes:o,seconds:n,milliseconds:e}}function r(o){setInterval(function(){var r=(new Date).toString(),c=t(e(r),e(o)),u=i(n(c));s.innerHTML=u},1e3,o)}function i(t){var e=t.minutes<10?"0"+t.minutes:t.minutes,n=t.seconds<10?"0"+t.seconds:t.seconds,o='<div class="note form-success" style="width:100%;display:flex;justify-content:center;">\n                        <div style="margin-right: 10px;">'+t.days+' days</div>\n                        <div style="margin-right: 10px;">'+t.hours+' hours</div>\n                        <div style="margin-right: 10px;">'+e+" minutes</div>\n                        <div>"+n+" seconds</div>\n                    </div>";return 0==t.days&&0==t.hours&&0==t.minutes&&0==t.seconds?'<div class="note form-success" style="width:100%;text-align:center;">\n                            This offer has expired. Stay close for more special offers!\n                        </div>':o}console.log("Script tag is mounted and activated");var s=document.getElementById("discount-timeout");null!==s&&function(t,e){var n={method:"GET",mode:"cors",headers:{Accept:"application/json"}};fetch(t,n).then(function(t){return t.json()}).then(function(t){e(t)}).catch(function(t){console.log(t)})}("https://discount-timeout.herokuapp.com/get/config",function(t){var e=new Date,n=(new Date).setDate(e.getDate()+3);null!==t.timeout&&(n=t.timeout),r(n)})}()}]);