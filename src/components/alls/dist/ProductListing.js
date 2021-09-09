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
var restyle_2 = require("@shopify/restyle");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var ProductCard_1 = require("../cards/ProductCard");
var native_1 = require("@react-navigation/native");
var width = react_native_1.Dimensions.get("screen").width;
var ProductListing = function (_a) {
    var product_width = _a.product_width, products_in_bag = _a.products_in_bag, products = _a.products, rest = __rest(_a, ["product_width", "products_in_bag", "products"]);
    var theme = restyle_2.useTheme();
    var navigation = native_1.useNavigation();
    var _b = react_1.useState(false), display = _b[0], setDisplay = _b[1];
    react_1.useEffect(function () {
        setDisplay(true);
    }, []);
    var left_products = products.filter(function (p, i) { return i % 2 !== 0; });
    var right_products = products.filter(function (p, i) { return i % 2 === 0; });
    return (react_1["default"].createElement(restyle_1.Box, __assign({}, rest),
        react_1["default"].createElement(react_native_gesture_handler_1.ScrollView, { contentContainerStyle: { paddingTop: theme.spacing.l } }, display ? (react_1["default"].createElement(restyle_1.Box, { flexDirection: "row", justifyContent: "center" },
            react_1["default"].createElement(restyle_1.Box, null, left_products.length > 0 &&
                left_products.map(function (p) { return (react_1["default"].createElement(ProductCard_1["default"], { key: p.id, width: product_width - theme.spacing.s * 2, is_in_bag: products_in_bag.includes(p.id), product: p, onAddToBagPress: function () { }, onImagePress: function () {
                        return navigation.navigate("Shop_Product_Detail", {
                            item: p
                        });
                    } })); })),
            react_1["default"].createElement(restyle_1.Box, null, right_products.length > 0 &&
                right_products.map(function (p) { return (react_1["default"].createElement(ProductCard_1["default"], { key: p.id, width: product_width - theme.spacing.s * 2, is_in_bag: products_in_bag.includes(p.id), product: p, onAddToBagPress: function () { }, onImagePress: function () {
                        return navigation.navigate("Shop_Product_Detail", {
                            item: p
                        });
                    } })); })))) : (react_1["default"].createElement(restyle_1.Box, { flex: 1, justifyContent: "center", alignItems: "center" },
            react_1["default"].createElement(react_native_1.ActivityIndicator, { color: theme.colors.primary, size: "large" }))))));
};
exports["default"] = ProductListing;
