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
var restyle_1 = require("../utils/restyle");
var Avatar = function (_a) {
    var source = _a.source, size = _a.size, rest = __rest(_a, ["source", "size"]);
    return (react_1["default"].createElement(restyle_1.Box, __assign({}, rest, { style: { borderRadius: size / 2 } }),
        react_1["default"].createElement(react_native_1.Image, { width: size, height: size, style: { width: size, height: size, borderRadius: size / 2, borderWidth: 2, borderColor: 'white' }, resizeMode: 'cover', source: source })));
};
exports["default"] = Avatar;
