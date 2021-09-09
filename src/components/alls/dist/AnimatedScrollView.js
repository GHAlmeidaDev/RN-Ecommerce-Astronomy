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
var react_native_reanimated_2 = require("react-native-reanimated");
var react_native_1 = require("react-native");
var react_navigation_shared_element_1 = require("react-navigation-shared-element");
var react_native_2 = require("react-native");
var vector_icons_1 = require("@expo/vector-icons");
var AnimatedBox = react_native_reanimated_2["default"].createAnimatedComponent(restyle_2.Box);
var AnimatedScrollView = function (_a) {
    var data = _a.data, itemHeight = _a.itemHeight, itemWidth = _a.itemWidth, navigation = _a.navigation, products_in_bag = _a.products_in_bag, products_in_favourite = _a.products_in_favourite, rest = __rest(_a, ["data", "itemHeight", "itemWidth", "navigation", "products_in_bag", "products_in_favourite"]);
    var theme = restyle_1.useTheme();
    var translationX = react_native_reanimated_1.useSharedValue(0);
    var scrollHandler = react_native_reanimated_1.useAnimatedScrollHandler(function (event) {
        translationX.value = event.contentOffset.x;
    });
    return (react_1["default"].createElement(restyle_2.Box, __assign({}, rest),
        react_1["default"].createElement(react_native_reanimated_2["default"].ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, onScroll: scrollHandler, scrollEventThrottle: 16, snapToInterval: itemWidth + theme.spacing.m * 2, decelerationRate: "fast" },
            data.map(function (item, index) {
                var inputRange = [
                    (itemWidth + theme.spacing.m * 2) * (index - 2),
                    (itemWidth + theme.spacing.m * 2) * index,
                    (itemWidth + theme.spacing.m * 2) * (index + 2),
                ];
                var rotateZ = react_native_reanimated_1.useDerivedValue(function () {
                    return react_native_reanimated_1.withSpring(react_native_reanimated_1.interpolate(translationX.value, inputRange, [-45, 0, 45], react_native_reanimated_1.Extrapolate.CLAMP));
                });
                var animatedStyles = react_native_reanimated_1.useAnimatedStyle(function () { return ({
                    zIndex: -index,
                    transform: [
                        {
                            scale: react_native_reanimated_1.withSpring(react_native_reanimated_1.interpolate(translationX.value, inputRange, [0.5, 1, 0.5], react_native_reanimated_1.Extrapolate.CLAMP))
                        },
                        {
                            rotate: rotateZ.value + "deg"
                        },
                        {
                            translateX: react_native_reanimated_1.interpolate(translationX.value, inputRange, [0, 0, -100], react_native_reanimated_1.Extrapolate.CLAMP)
                        },
                    ]
                }); });
                return (react_1["default"].createElement(AnimatedBox, { bg: "gray4", width: itemWidth, borderRadius: "m", key: item.id, margin: 'm', style: animatedStyles },
                    react_1["default"].createElement(restyle_2.Box, { elevation: 10, width: itemWidth, marginHorizontal: "s", bg: "white", borderRadius: "m", overflow: "hidden", marginBottom: "m", style: { marginTop: -10 } },
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.6, onPress: function () {
                                return navigation.navigate("Shop_Product_Detail", { item: item });
                            } },
                            react_1["default"].createElement(react_navigation_shared_element_1.SharedElement, { id: "image-" + item.id },
                                react_1["default"].createElement(react_native_2.Image, { style: {
                                        width: itemWidth,
                                        height: 200,
                                        overflow: "hidden"
                                    }, resizeMode: "cover", source: { uri: item.thumbnail } }))),
                        react_1["default"].createElement(restyle_2.Box, { p: "m" },
                            react_1["default"].createElement(restyle_2.Text, { variant: "small", fontWeight: "bold", color: 'black' }, item.name))),
                    react_1["default"].createElement(restyle_2.Box, { paddingHorizontal: 'm', pb: 's', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
                        react_1["default"].createElement(restyle_2.Box, null,
                            react_1["default"].createElement(restyle_2.Text, { variant: 'body', color: 'white' }, "R$" + item.price)),
                        react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", alignItems: "center" },
                            products_in_favourite.includes(item.id) && (react_1["default"].createElement(vector_icons_1.Entypo, { name: "heart", size: 20, color: "white" })),
                            products_in_bag.includes(item.id) && (react_1["default"].createElement(vector_icons_1.Entypo, { style: { marginLeft: 10 }, name: "shopping-bag", size: 18, color: "white" }))))));
            }),
            react_1["default"].createElement(restyle_2.Box, { m: "s", width: itemWidth }))));
};
exports["default"] = AnimatedScrollView;
