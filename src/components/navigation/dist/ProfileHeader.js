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
var expo_constants_1 = require("expo-constants");
var restyle_1 = require("@shopify/restyle");
var restyle_2 = require("../../utils/restyle");
var Avatar_1 = require("../alls/Avatar");
var ProfileHeader = function (_a) {
    var header_width = _a.header_width, header_height = _a.header_height, avatar_size = _a.avatar_size, avatar_source = _a.avatar_source, right_icon = _a.right_icon, rest = __rest(_a, ["header_width", "header_height", "avatar_size", "avatar_source", "right_icon"]);
    var theme = restyle_1.useTheme();
    return (react_1["default"].createElement(restyle_2.Box, __assign({ width: header_width, position: "absolute", elevation: 10, bg: "primary", height: header_height, borderBottomLeftRadius: "xl", borderBottomRightRadius: "xl" }, rest),
        react_1["default"].createElement(restyle_2.Box, { position: "absolute", top: expo_constants_1["default"].statusBarHeight + theme.spacing.m, right: theme.spacing.m }, right_icon && right_icon),
        react_1["default"].createElement(restyle_2.Box, { marginHorizontal: "m", flexDirection: "row", justifyContent: "space-between", alignItems: "center", style: {
                marginTop: expo_constants_1["default"].statusBarHeight + theme.spacing.m
            } },
            react_1["default"].createElement(restyle_2.Text, { variant: "headline2", color: "white" }, "Perfil")),
        react_1["default"].createElement(restyle_2.Box, { zIndex: 50, position: "absolute", top: header_height - 40, left: header_width / 2 - 40, elevation: 15 },
            react_1["default"].createElement(Avatar_1["default"], { size: avatar_size, source: avatar_source }))));
};
exports["default"] = ProfileHeader;
