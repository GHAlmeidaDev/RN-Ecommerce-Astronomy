"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var restyle_1 = require("@shopify/restyle");
var restyle_2 = require("../../utils/restyle");
var react_native_reanimated_1 = require("react-native-reanimated");
var Layout_1 = require("../../components/alls/Layout");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var vector_icons_1 = require("@expo/vector-icons");
var _a = react_native_1.Dimensions.get("screen"), width = _a.width, height = _a.height;
var AnimatedBox = react_native_reanimated_1["default"].createAnimatedComponent(restyle_2.Box);
var DATA = [
    {
        id: 0,
        title: "title",
        subtitle: "subtitle",
        image: require("../../../assets/screen1.png")
    },
    {
        id: 1,
        title: "title",
        subtitle: "subtitle",
        image: require("../../../assets/screen2.png")
    },
    {
        id: 2,
        title: "title",
        subtitle: "subtitle",
        image: require("../../../assets/screen3.png")
    },
    {
        id: 3,
        title: "title",
        subtitle: "subtitle",
        image: require("../../../assets/screen4.png")
    },
];
var LandingScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var theme = restyle_1.useTheme();
    var translationX = react_native_reanimated_1.useSharedValue(0);
    var scrollHandler = react_native_reanimated_1.useAnimatedScrollHandler({
        onScroll: function (event) {
            translationX.value = event.contentOffset.x;
        },
        onBeginDrag: function (e) { },
        onEndDrag: function (e) { }
    });
    return (react_1["default"].createElement(Layout_1["default"], { no_padding: true },
        react_1["default"].createElement(restyle_2.Box, { position: "absolute", width: 40, height: 40, bottom: theme.spacing.m, right: theme.spacing.m, zIndex: 1000, bg: "white", style: { borderRadius: 20 }, justifyContent: "center", alignItems: "center" },
            react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () {
                    return navigation.navigate("Auth", { screen: "Login" });
                } },
                react_1["default"].createElement(vector_icons_1.AntDesign, { name: "right", size: 30, color: theme.colors.primary }))),
        react_1["default"].createElement(react_native_reanimated_1["default"].ScrollView, { style: [{ flex: 1, backgroundColor: theme.colors.white }], scrollEventThrottle: 16, onScroll: scrollHandler, horizontal: true, decelerationRate: "fast", snapToInterval: width, showsHorizontalScrollIndicator: false }, DATA.map(function (page, index) {
            var scale = react_native_reanimated_1.useDerivedValue(function () {
                return react_native_reanimated_1.interpolate(translationX.value, [
                    width * (index - 1),
                    width * index,
                    width * (index + 1),
                ], [0.3, 1, 0.3], react_native_reanimated_1.Extrapolate.CLAMP);
            });
            var imageTranslateX = react_native_reanimated_1.useDerivedValue(function () {
                return react_native_reanimated_1.interpolate(translationX.value, [
                    width * (index - 1),
                    width * index,
                    width * (index + 1),
                ], [-width, 0, width], react_native_reanimated_1.Extrapolate.CLAMP);
            });
            var imageTranslateY = react_native_reanimated_1.useDerivedValue(function () {
                return react_native_reanimated_1.interpolate(translationX.value, [
                    width * (index - 1),
                    width * index,
                    width * (index + 1),
                ], [10, 0, 10], react_native_reanimated_1.Extrapolate.CLAMP);
            });
            var styles = react_native_reanimated_1.useAnimatedStyle(function () {
                return {
                    transform: [
                        {
                            scale: scale.value
                        },
                        {
                            translateX: imageTranslateX.value
                        },
                        {
                            translateY: imageTranslateY.value
                        },
                    ]
                };
            });
            return (react_1["default"].createElement(AnimatedBox, { key: page.id, width: width, height: height, justifyContent: "center", alignItems: "center" },
                react_1["default"].createElement(react_native_reanimated_1["default"].Image, { style: [
                        { width: width * 0.8, height: width * 0.8 },
                        styles,
                    ], source: page.image })));
        })),
        react_1["default"].createElement(restyle_2.Box, { position: "absolute", bottom: 0, width: width, padding: "l", flexDirection: "row", justifyContent: "center" }, DATA.map(function (page, i) {
            var widthstyle = react_native_reanimated_1.useDerivedValue(function () {
                return react_native_reanimated_1.interpolate(translationX.value, [width * (i - 1), width * i, width * (i + 1)], [10, 30, 10], react_native_reanimated_1.Extrapolate.CLAMP);
            });
            var colorStyle = react_native_reanimated_1.useDerivedValue(function () {
                return react_native_reanimated_1.interpolateColor(translationX.value, [width * (i - 1), width * i, width * (i + 1)], [
                    theme.colors.primary,
                    theme.colors.primary,
                    theme.colors.primary,
                ]);
            });
            var dotStyles = react_native_reanimated_1.useAnimatedStyle(function () { return ({
                height: 10,
                borderRadius: 5,
                backgroundColor: react_native_reanimated_1.withSpring(colorStyle.value),
                marginHorizontal: 5,
                width: react_native_reanimated_1.withSpring(widthstyle.value)
            }); });
            return (react_1["default"].createElement(restyle_2.Box, { key: page.id },
                react_1["default"].createElement(AnimatedBox, { style: dotStyles })));
        }))));
};
exports["default"] = LandingScreen;
