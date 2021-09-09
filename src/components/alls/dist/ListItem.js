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
var ListItem = function (_a) {
    var title = _a.title, description = _a.description, left_icon = _a.left_icon, right_icon = _a.right_icon, rest = __rest(_a, ["title", "description", "left_icon", "right_icon"]);
    return (react_1["default"].createElement(restyle_1.Box, __assign({ bg: "white", padding: "m", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 's', borderRadius: 'm' }, rest),
        react_1["default"].createElement(restyle_1.Box, { flexDirection: "row", alignItems: "center" },
            left_icon && left_icon,
            react_1["default"].createElement(restyle_1.Box, { justifyContent: "center", marginHorizontal: 'm' },
                react_1["default"].createElement(restyle_1.Text, { variant: "body2" },
                    " ",
                    title,
                    " "),
                react_1["default"].createElement(restyle_1.Text, { variant: "description", opacity: .7 },
                    " ",
                    description,
                    " "))),
        right_icon && right_icon));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    }
});
exports["default"] = ListItem;
