"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var restyle_1 = require("../../utils/restyle");
var react_navigation_shared_element_1 = require("react-navigation-shared-element");
var CategoriaCard = function (_a) {
    var width = _a.width, height = _a.height, image = _a.image, title = _a.title, rest = __rest(_a, ["width", "height", "image", "title"]);
    return (react_1["default"].createElement(restyle_1.Box, __assign({ width: width, height: height, borderRadius: "s", overflow: "hidden" }, rest),
        react_1["default"].createElement(react_navigation_shared_element_1.SharedElement, { id: "category-" + title },
            react_1["default"].createElement(react_native_1.Image, { style: { height: height, width: width }, width: width, height: height, resizeMode: "cover", source: image })),
        react_1["default"].createElement(restyle_1.Box, { position: "absolute", bottom: 10, left: 10 },
            react_1["default"].createElement(restyle_1.Text, { variant: "headline", color: "white" }, title))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    }
});
exports["default"] = CategoriaCard;
