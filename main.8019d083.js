parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".field"),n=document.querySelector(".append-row"),t=document.querySelector(".remove-row"),o=document.querySelector(".append-column"),r=document.querySelector(".remove-column"),d=e.rows.length,c=e.rows[0].cells.length;function l(){n.disabled=d>=10,t.disabled=d<=2,o.disabled=c>=10,r.disabled=c<=2}l(),n.addEventListener("click",function(){for(var n=e.insertRow(),t=0;t<c;t++)n.insertCell().style.background="#0093eb";d++,l()}),t.addEventListener("click",function(){d>1&&(e.deleteRow(-1),d--);l()}),o.addEventListener("click",function(){for(var n=0;n<d;n++)e.rows[n].insertCell().style.background="#0093eb";c++,l()}),r.addEventListener("click",function(){if(c>1){for(var n=0;n<d;n++)e.rows[n].deleteCell(-1);c--}l()})});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.8019d083.js.map