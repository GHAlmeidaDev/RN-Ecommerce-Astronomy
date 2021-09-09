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
var expo_constants_1 = require("expo-constants");
var restyle_1 = require("../../utils/restyle");
var Layout = function (_a) {
    var no_padding = _a.no_padding, children = _a.children, rest = __rest(_a, ["no_padding", "children"]);
    return (react_1["default"].createElement(restyle_1.Box, __assign({ bg: 'background', style: [styles.container, no_padding && { paddingTop: 0 }] }, rest), children));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: expo_constants_1["default"].statusBarHeight
    }
});
exports["default"] = Layout;
