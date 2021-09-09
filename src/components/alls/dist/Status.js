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
var Status = function (_a) {
    var name = _a.name, onPress = _a.onPress, textProps = _a.textProps, rest = __rest(_a, ["name", "onPress", "textProps"]);
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onPress },
        react_1["default"].createElement(restyle_1.Box, __assign({ paddingHorizontal: "m", paddingVertical: "s", borderRadius: "m", marginRight: "s", alignItems: 'center', justifyContent: 'center', maxWidth: 100 }, rest),
            react_1["default"].createElement(restyle_1.Text, __assign({ variant: "body", color: "white" }, textProps), name))));
};
exports["default"] = Status;
