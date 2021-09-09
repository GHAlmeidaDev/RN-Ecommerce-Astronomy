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
var restyle_1 = require("../../../utils/restyle");
var Button = function (_a) {
    var title = _a.title, onPress = _a.onPress, icon = _a.icon, variant = _a.variant, disabled = _a.disabled, rest = __rest(_a, ["title", "onPress", "icon", "variant", "disabled"]);
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onPress, disabled: disabled },
        react_1["default"].createElement(restyle_1.Box, __assign({ backgroundColor: variant === 'PRIMARY' ? "primary" : 'white', justifyContent: "center", alignItems: "center", borderRadius: "l", paddingVertical: "m", paddingHorizontal: 'm', marginVertical: 'm', borderWidth: variant === 'PRIMARY' ? 0 : 1 }, rest),
            react_1["default"].createElement(restyle_1.Text, { variant: "body2", color: variant === 'PRIMARY' ? 'white' : undefined }, title),
            icon)));
};
exports["default"] = Button;
