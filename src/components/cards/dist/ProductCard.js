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
var restyle_1 = require("@shopify/restyle");
var restyle_2 = require("../../utils/restyle");
var Badge_1 = require("../alls/Badge");
var react_native_ratings_1 = require("react-native-ratings");
var react_navigation_shared_element_1 = require("react-navigation-shared-element");
var _a = react_native_1.Dimensions.get("screen"), SWitch = _a.width, height = _a.height;
var ProductCard = function (_a) {
    var width = _a.width, product = _a.product, is_new = _a.is_new, onImagePress = _a.onImagePress, onAddToBagPress = _a.onAddToBagPress, is_in_bag = _a.is_in_bag, show_icon = _a.show_icon, rest = __rest(_a, ["width", "product", "is_new", "onImagePress", "onAddToBagPress", "is_in_bag", "show_icon"]);
    var theme = restyle_1.useTheme();
    return (react_1["default"].createElement(restyle_2.Box, __assign({ width: width, borderRadius: "m", bg: "white", margin: "s" }, rest),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return onImagePress(product); } },
            react_1["default"].createElement(restyle_2.Box, { borderRadius: "m", overflow: "hidden", height: 150, bg: "white", width: width },
                product.is_discount && (react_1["default"].createElement(Badge_1["default"], { title: "-" + product.discount.percentage + "%", bg: "primaryDarker", position: "absolute", top: 5, right: 5, zIndex: 2 })),
                product.is_new && (react_1["default"].createElement(Badge_1["default"], { title: "Novo", bg: "darkColor", position: "absolute", top: 5, left: 5, zIndex: 2 })),
                react_1["default"].createElement(react_navigation_shared_element_1.SharedElement, { id: "image-" + product.id },
                    react_1["default"].createElement(react_native_1.Image, { style: { width: width, height: 150 }, width: width, height: 150, resizeMode: "cover", source: { uri: product.thumbnail } })))),
        react_1["default"].createElement(restyle_2.Box, { marginTop: "s", paddingHorizontal: "m", flexDirection: "row", alignItems: "center" },
            react_1["default"].createElement(react_native_ratings_1.AirbnbRating, { defaultRating: product.avg_rating, isDisabled: true, size: 10, showRating: false }),
            react_1["default"].createElement(restyle_2.Text, { variant: "description", opacity: 0.5 }, "(" + product.number_reviews + ")")),
        react_1["default"].createElement(restyle_2.Text, { paddingHorizontal: "m", variant: "description", opacity: 0.5 }, "" + product.brand.display_name),
        react_1["default"].createElement(restyle_2.Text, { paddingHorizontal: "m", variant: "body2" }, "" + product.display_name),
        react_1["default"].createElement(restyle_2.Text, { paddingHorizontal: "m", variant: "body2", marginVertical: "s" }, "R$" + product.price)));
    // }
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    }
});
exports["default"] = ProductCard;
