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
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var restyle_1 = require("../../utils/restyle");
var SelectableColors = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, value = _a.value, onChange = _a.onChange, rest = __rest(_a, ["items", "value", "onChange"]);
    var _c = react_1.useState(value), selected = _c[0], setSelected = _c[1];
    return (react_1["default"].createElement(restyle_1.Box, __assign({}, rest),
        react_1["default"].createElement(react_native_1.ScrollView, { style: { flex: 1 }, horizontal: true, showsHorizontalScrollIndicator: false }, items.length > 0 &&
            items.map(function (it, index) { return (react_1["default"].createElement(restyle_1.Box, { key: index, marginHorizontal: "s", justifyContent: "center", alignItems: "center", width: 30, height: 30, borderWidth: selected === it ? 1 : 0, style: { borderRadius: selected === it ? 15 : 0 } },
                react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () {
                        setSelected(it);
                        onChange(it);
                    } },
                    react_1["default"].createElement(restyle_1.Box, { width: 25, height: 25, style: {
                            borderRadius: 12,
                            backgroundColor: it.toLowerCase()
                        } })))); }))));
};
exports["default"] = SelectableColors;
