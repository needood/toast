(function (doc, cssText) {
    var styleEl = doc.createElement("style");
    doc.getElementsByTagName("head")[0].appendChild(styleEl);
    if (styleEl.styleSheet) {
        if (!styleEl.styleSheet.disabled) {
            styleEl.styleSheet.cssText = cssText;
        }
    } else {
        try {
            styleEl.innerHTML = cssText;
        } catch (ignore) {
            styleEl.innerText = cssText;
        }
    }
}(document, "\n#_android_toast_container_i7hiw_1{\n	width: 100%;\n	position: fixed;\n	bottom: 12%;\n	left: 0;\n    z-index:99999;\n    pointer-events:none;\n}\n\n#_android_toast_i7hiw_33{\n	width: 80%;\n	margin-left: auto;\n	margin-right: auto;\n	background-color: rgb(48, 52, 55);\n	color: rgb(245, 245, 245);\n	font-size: 13px;\n	padding: 5px;\n	border-radius: 2px;\n	-webkit-border-radius: 2px;\n	opacity: 0.95;\n	box-shadow:  1px 2px 2px 1px rgba(34, 34, 34, .8);\n	text-align: center;\n	font-family: Roboto, sans-serif;\n}\n\n#_android_toast_i7hiw_33 em{\n	color: rgb(81, 180, 210);\n	font-weight: bold;\n	font-style: normal;\n}\n\n._android_toast_top_i7hiw_33{\n	top: 12%;\n	bottom: auto !important;\n}\n\n\n._android_toast_fadein_i7hiw_39{\n	animation: _android_toast_fadein_i7hiw_39 .3s ease;\n	-webkit-animation: _android_toast_fadein_i7hiw_39 .3s ease;\n}\n\n._android_toast_fadeout_i7hiw_44{\n	animation: _android_toast_fadeout_i7hiw_44 .3s ease;\n	-webkit-animation: _android_toast_fadeout_i7hiw_44 .3s ease;\n	animation-fill-mode: forwards;\n	-webkit-animation-fill-mode: forwards;\n}\n\n@keyframes _android_toast_fadein_i7hiw_39{\n	from {\n		opacity: 0;\n		-webkit-opacity: 0;\n	}\n	to {\n		opacity: 0.95;\n		-webkit-opacity: 0.95;\n	}\n}\n\n@-webkit-keyframes _android_toast_fadein_i7hiw_39{\n	from {\n		opacity: 0;\n		-webkit-opacity: 0;\n	}\n	to {\n		opacity: 0.95;\n		-webkit-opacity: 0.95;\n	}\n}\n\n@keyframes _android_toast_fadeout_i7hiw_44{\n	from {\n		opacity: 0.95;\n		-webkit-opacity: 0.95;\n	}\n	to {\n		opacity: 0;\n		-webkit-opacity: 0;\n	}\n}\n\n@-webkit-keyframes _android_toast_fadeout_i7hiw_44{\n	from {\n		opacity: 0.95;\n		-webkit-opacity: 0.95;\n	}\n	to {\n		opacity: 0;\n		-webkit-opacity: 0;\n	}\n}\n\n/*# sourceMappingURL=toast.css.map */"));
