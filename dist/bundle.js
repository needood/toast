!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.Toast=n()}(this,function(){"use strict";function t(t){var n;return this.timeout_id=null,this.duration=3e3,this.content="",this.position="bottom",!(!t||"object"!=("undefined"==typeof t?"undefined":o(t)))&&(t.duration&&(this.duration=parseFloat(t.duration)),t.content&&(this.content=t.content),t.position&&(n=t.position.toLowerCase(),"top"===n||"bottom"===n?this.position=n:this.position="bottom"),void this.show())}var n={android_toast_container:"_android_toast_container_1fr8b_1",android_toast:"_android_toast_1fr8b_32",android_toast_top:"_android_toast_top_1fr8b_32",android_toast_fadein:"_android_toast_fadein_1fr8b_38",android_toast_fadeout:"_android_toast_fadeout_1fr8b_43"},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return t.prototype.show=function(){if(!this.content)return!1;clearTimeout(this.timeout_id);var t=document.getElementsByTagName("body")[0],o=document.getElementById(n.android_toast_container);o&&t.removeChild(o);var e=n.android_toast_fadein;"top"===this.position&&(e=n.android_toast_fadein+" "+n.android_toast_top);var i=document.createElement("div");i.setAttribute("id",n.android_toast_container),i.setAttribute("class",e),t.appendChild(i);var a=document.createElement("div");return a.setAttribute("id",n.android_toast),a.innerHTML=this.content,i.appendChild(a),this.timeout_id=setTimeout(this.hide,this.duration),!0},t.prototype.hide=function(){function t(){var t=document.getElementById(n.android_toast_container);return!!t&&void t.parentNode.removeChild(t)}var o=document.getElementById(n.android_toast_container);return!!o&&(clearTimeout(this.timeout_id),o.className+=" "+n.android_toast_fadeout,o.addEventListener("webkitAnimationEnd",t),o.addEventListener("animationEnd",t),o.addEventListener("msAnimationEnd",t),o.addEventListener("oAnimationEnd",t),!0)},function(t,n){var o=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(o),o.styleSheet)o.styleSheet.disabled||(o.styleSheet.cssText=n);else try{o.innerHTML=n}catch(e){o.innerText=n}}(document,"\n#_android_toast_container_1fr8b_1{\n\twidth: 100%;\n\tposition: fixed;\n\tbottom: 12%;\n\tleft: 0;\n        pointer-events:none;\n}\n\n#_android_toast_1fr8b_32{\n\twidth: 80%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tbackground-color: rgb(48, 52, 55);\n\tcolor: rgb(245, 245, 245);\n\tfont-size: 13px;\n\tpadding: 5px;\n\tborder-radius: 2px;\n\t-webkit-border-radius: 2px;\n\topacity: 0.95;\n\tbox-shadow:  1px 2px 2px 1px rgba(34, 34, 34, 1);\n\ttext-align: center;\n\tfont-family: Roboto, sans-serif;\n}\n\n#_android_toast_1fr8b_32 em{\n\tcolor: rgb(81, 180, 210);\n\tfont-weight: bold;\n\tfont-style: normal;\n}\n\n._android_toast_top_1fr8b_32{\n\ttop: 12%;\n\tbottom: auto !important;\n}\n\n\n._android_toast_fadein_1fr8b_38{\n\tanimation: _android_toast_fadein_1fr8b_38 1s ease;\n\t-webkit-animation: _android_toast_fadein_1fr8b_38 1s ease;\n}\n\n._android_toast_fadeout_1fr8b_43{\n\tanimation: _android_toast_fadeout_1fr8b_43 1s ease;\n\t-webkit-animation: _android_toast_fadeout_1fr8b_43 1s ease;\n\tanimation-fill-mode: forwards;\n\t-webkit-animation-fill-mode: forwards;\n}\n\n@keyframes _android_toast_fadein_1fr8b_38{\n\tfrom {\n\t\topacity: 0;\n\t\t-webkit-opacity: 0;\n\t}\n\tto {\n\t\topacity: 0.95;\n\t\t-webkit-opacity: 0.95;\n\t}\n}\n\n@-webkit-keyframes _android_toast_fadein_1fr8b_38{\n\tfrom {\n\t\topacity: 0;\n\t\t-webkit-opacity: 0;\n\t}\n\tto {\n\t\topacity: 0.95;\n\t\t-webkit-opacity: 0.95;\n\t}\n}\n\n@keyframes _android_toast_fadeout_1fr8b_43{\n\tfrom {\n\t\topacity: 0.95;\n\t\t-webkit-opacity: 0.95;\n\t}\n\tto {\n\t\topacity: 0;\n\t\t-webkit-opacity: 0;\n\t}\n}\n\n@-webkit-keyframes _android_toast_fadeout_1fr8b_43{\n\tfrom {\n\t\topacity: 0.95;\n\t\t-webkit-opacity: 0.95;\n\t}\n\tto {\n\t\topacity: 0;\n\t\t-webkit-opacity: 0;\n\t}\n}\n\n/*# sourceMappingURL=toast.css.map */"),t});