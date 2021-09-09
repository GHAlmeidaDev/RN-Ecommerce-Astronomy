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
var restyle_1 = require("@shopify/restyle");
var restyle_2 = require("../../utils/restyle");
var react_native_reanimated_1 = require("react-native-reanimated");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var ExitIcon_1 = require("../forms/form_elements/ExitIcon");
var AnimatedBox = react_native_reanimated_1["default"].createAnimatedComponent(restyle_2.Box);
var FilterView = function (_a) {
    var width = _a.width, height = _a.height, onClose = _a.onClose, translateY = _a.translateY, onLow = _a.onLow, onHigh = _a.onHigh, menor = _a.menor, maior = _a.maior, rest = __rest(_a, ["width", "height", "onClose", "translateY", "onLow", "onHigh", "menor", "maior"]);
    var theme = restyle_1.useTheme();
    var _b = react_1.useState("Relevance"), selected = _b[0], setSelected = _b[1];
    var styles = react_native_reanimated_1.useAnimatedStyle(function () { return ({
        transform: [{ translateY: react_native_reanimated_1.withTiming(translateY.value) }]
    }); });
    return (react_1["default"].createElement(AnimatedBox, __assign({ width: width, height: height, borderTopLeftRadius: "xl", borderTopRightRadius: "xl", bg: "white", elevation: 20, position: "absolute", bottom: 0, zIndex: 7777777, style: styles }, rest),
        react_1["default"].createElement(restyle_2.Box, { position: "absolute", top: -15, left: width / 2 - 15 },
            react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, null,
                react_1["default"].createElement(ExitIcon_1["default"], { onPress: onClose }))),
        react_1["default"].createElement(react_native_gesture_handler_1.ScrollView, { showsVerticalScrollIndicator: false, style: { flex: 1, marginTop: theme.spacing.xl } },
            react_1["default"].createElement(restyle_2.Box, null,
                react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: onLow },
                    react_1["default"].createElement(restyle_2.Box, { bg: selected === 'Lowest' ? "primary" : 'white', padding: "m" },
                        react_1["default"].createElement(restyle_2.Text, { paddingHorizontal: "m", variant: "body2", color: selected === 'Lowest' ? "white" : 'black' }, menor))),
                react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: onHigh },
                    react_1["default"].createElement(restyle_2.Box, { bg: selected === 'Heighest' ? "primary" : 'white', padding: "m" },
                        react_1["default"].createElement(restyle_2.Text, { paddingHorizontal: "m", variant: "body2", color: selected === 'Heighest' ? "white" : 'black' }, maior)))))));
};
exports["default"] = FilterView;
