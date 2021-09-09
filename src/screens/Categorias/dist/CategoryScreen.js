"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Layout_1 = require("../../components/alls/Layout");
var restyle_1 = require("../../utils/restyle");
var expo_constants_1 = require("expo-constants");
var ExitIcon_1 = require("../../components/forms/form_elements/ExitIcon");
var restyle_2 = require("@shopify/restyle");
var react_navigation_shared_element_1 = require("react-navigation-shared-element");
var react_native_reanimated_1 = require("react-native-reanimated");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var hooks_1 = require("../../redux/hooks");
var vector_icons_1 = require("@expo/vector-icons");
var FilterView_1 = require("../../components/FilterView");
var ProductListing_1 = require("../../components/ProductListing");
var _a = react_native_1.Dimensions.get("screen"), width = _a.width, height = _a.height;
var IMAGE_HEIGHT = height * 0.6;
var PRODUCT_WIDTH = width / 2;
var HIDDEN_VIEW_HEIGHT = height * 0.4;
var FILTER_VIEW_HEIGHT = height * 0.5;
var AnimatedBox = react_native_reanimated_1["default"].createAnimatedComponent(restyle_1.Box);
var CategoryScreen = function (_a) {
    var route = _a.route, navigation = _a.navigation;
    var dispatch = hooks_1.useAppDispatch();
    var theme = restyle_2.useTheme();
    var filterTranslateY = react_native_reanimated_1.useSharedValue(FILTER_VIEW_HEIGHT + 15);
    var sortTranslateY = react_native_reanimated_1.useSharedValue(FILTER_VIEW_HEIGHT + 15);
    var products_in_bag = hooks_1.useAppSelector(function (state) { return state.bag.products_in_bag; });
    var products = hooks_1.useAppSelector(function (state) { return state.products.products; }).filter(function (p) { return p.category.name === route.params.category.name; });
    var _b = react_1.useState(products), list = _b[0], setList = _b[1];
    //Função organizar A-Z
    var handleOrderClick = function () {
        var newList = __spreadArrays(products);
        newList.sort(function (a, b) { return (a.display_name > b.display_name ? 1 : b.display_name > a.display_name ? -1 : 0); });
        setList(newList);
    };
    var onLow = function () {
        var newList = __spreadArrays(products);
        newList.sort(function (a, b) { return (a.price > b.price ? 1 : b.price > a.price ? -1 : 0); });
        setList(newList);
        filterTranslateY.value = FILTER_VIEW_HEIGHT + 15;
    };
    var onHigh = function () {
        var newList = __spreadArrays(products);
        newList.sort(function (a, b) { return (a.price < b.price ? 1 : b.price < a.price ? -1 : 0); });
        setList(newList);
        filterTranslateY.value = FILTER_VIEW_HEIGHT + 15;
    };
    return (react_1["default"].createElement(Layout_1["default"], { no_padding: true },
        react_1["default"].createElement(FilterView_1["default"], { height: FILTER_VIEW_HEIGHT, width: width, translateY: filterTranslateY, onClose: function () {
                return (filterTranslateY.value = FILTER_VIEW_HEIGHT + 15);
            }, onHigh: onHigh, onLow: onLow, menor: 'Preço menor para o maior', maior: 'Preço maior para o menor' }),
        react_1["default"].createElement(AnimatedBox, { width: width, borderBottomRightRadius: "l", borderBottomLeftRadius: "l", overflow: "hidden" },
            react_1["default"].createElement(react_navigation_shared_element_1.SharedElement, { id: "category-" + route.params.category.display_name },
                react_1["default"].createElement(react_native_1.Image, { style: [
                        {
                            width: width,
                            height: IMAGE_HEIGHT / 3,
                            borderBottomLeftRadius: theme.borderRadii.l,
                            borderBottomRightRadius: theme.borderRadii.l
                        },
                    ], source: { uri: route.params.category.image }, resizeMode: "cover" })),
            react_1["default"].createElement(restyle_1.Box, { position: "absolute", bottom: 20, left: 20 },
                react_1["default"].createElement(restyle_1.Text, { variant: "headline", color: "white" }, route.params.category.display_name)),
            react_1["default"].createElement(restyle_1.Box, { position: "absolute", top: expo_constants_1["default"].statusBarHeight + theme.spacing.m, right: theme.spacing.m },
                react_1["default"].createElement(ExitIcon_1["default"], { onPress: function () { return navigation.navigate("Shop_Main"); } }))),
        react_1["default"].createElement(restyle_1.Box, { flex: 1 },
            react_1["default"].createElement(restyle_1.Box, { bg: 'white', padding: "m", flexDirection: "row", justifyContent: "space-between", borderRadius: "m", elevation: 1 },
                react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () { return (filterTranslateY.value = 0); } },
                    react_1["default"].createElement(restyle_1.Box, { flexDirection: "row", alignItems: "center" },
                        react_1["default"].createElement(vector_icons_1.Ionicons, { name: "filter-sharp", size: 24, color: theme.colors.darkColor }),
                        react_1["default"].createElement(restyle_1.Text, { marginLeft: "s", variant: "body2", opacity: 0.7 }, "Filtro Pre\u00E7o"))),
                react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: handleOrderClick },
                    react_1["default"].createElement(restyle_1.Box, { flexDirection: "row", alignItems: "center" },
                        react_1["default"].createElement(vector_icons_1.MaterialCommunityIcons, { name: "sort", size: 24, color: theme.colors.darkColor }),
                        react_1["default"].createElement(restyle_1.Text, { marginLeft: "s", variant: "body2", opacity: 0.7 }, "A-Z")))),
            react_1["default"].createElement(ProductListing_1["default"], { flex: 1, product_width: width / 2 - theme.spacing.s * 2, products: list, products_in_bag: products_in_bag }))));
};
exports["default"] = CategoryScreen;
