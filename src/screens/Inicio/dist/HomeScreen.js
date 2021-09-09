"use strict";
exports.__esModule = true;
var vector_icons_1 = require("@expo/vector-icons");
var restyle_1 = require("@shopify/restyle");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_navigation_shared_element_1 = require("react-navigation-shared-element");
var AnimatedScrollView_1 = require("../../components/alls/AnimatedScrollView");
var HomeProductCard_1 = require("../../components/cards/HomeProductCard");
var Layout_1 = require("../../components/alls/Layout");
var BottomTab_1 = require("../../components/navigation/BottomTab");
var data_1 = require("../../redux/data");
var hooks_1 = require("../../redux/hooks");
var restyle_2 = require("../../utils/restyle");
var _a = react_native_1.Dimensions.get("screen"), width = _a.width, height = _a.height;
var PRODUCT_WIDTH = width * 0.5;
var HomeScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var _b = react_1.useState(false), display = _b[0], setDisplay = _b[1];
    var products = hooks_1.useAppSelector(function (state) { return state.products.products; });
    var product_in_favourite = hooks_1.useAppSelector(function (state) { return state.favourite.products_in_favourite; });
    var products_in_bag = hooks_1.useAppSelector(function (state) { return state.bag.products_in_bag; });
    react_1.useEffect(function () {
        setDisplay(true);
    }, []);
    var theme = restyle_1.useTheme();
    return (react_1["default"].createElement(Layout_1["default"], null,
        react_1["default"].createElement(BottomTab_1["default"], { elevation: 5, position: "absolute", bottom: 0, zIndex: 10, route_name: route.name }),
        react_1["default"].createElement(react_native_1.ScrollView, { style: { flex: 1, marginBottom: height * 0.1 } },
            react_1["default"].createElement(restyle_2.Box, { p: "m", margin: "m", bg: "gray4", borderRadius: "m", elevation: 5 },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                        return navigation.navigate("Shop_Search", {
                            search_term: null
                        });
                    } },
                    react_1["default"].createElement(react_navigation_shared_element_1.SharedElement, { id: "search-input" },
                        react_1["default"].createElement(restyle_2.Box, { bg: "white", borderRadius: "s", paddingHorizontal: "m", paddingVertical: "s", flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
                            react_1["default"].createElement(restyle_2.Text, { variant: "description", opacity: 0.5 }, "Procurar"),
                            react_1["default"].createElement(vector_icons_1.Ionicons, { name: "search", size: 25, color: theme.colors.gray4 }))))),
            react_1["default"].createElement(restyle_2.Box, null,
                react_1["default"].createElement(react_native_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToInterval: width * 0.6 + theme.spacing.m * 2 }, data_1.EXPORLE_SETION.map(function (s) { return (react_1["default"].createElement(restyle_2.Box, { key: s.id, width: width * 0.6, height: 120, marginHorizontal: "m", elevation: 10 },
                    react_1["default"].createElement(react_native_1.Image, { style: {
                            width: width * 0.6,
                            height: 120,
                            borderRadius: 20,
                            overflow: "hidden"
                        }, resizeMode: "cover", source: {
                            uri: s.image_uri
                        } }),
                    react_1["default"].createElement(restyle_2.Box, { position: "absolute", bottom: 10, left: 10 }))); }))),
            react_1["default"].createElement(restyle_2.Box, null,
                react_1["default"].createElement(restyle_2.Text, { margin: "m", variant: "body2", opacity: 0.9 }, "POPULAR"),
                react_1["default"].createElement(react_native_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToInterval: PRODUCT_WIDTH + theme.spacing.m * 0.5 }, products.slice(0, 3).map(function (p) { return (react_1["default"].createElement(HomeProductCard_1["default"], { key: p.id, product: p, product_width: PRODUCT_WIDTH, in_favourite: product_in_favourite.includes(p.id), in_bag: products_in_bag.includes(p.id), product_height: 200, onImagePress: function () {
                        return navigation.navigate("Shop_Product_Detail", {
                            item: p
                        });
                    }, onAddToFavouritePress: function () { } })); }))),
            react_1["default"].createElement(restyle_2.Box, null,
                react_1["default"].createElement(restyle_2.Text, { margin: "m", variant: "body2", opacity: 0.9 }, "ACESS\u00D3RIOS"),
                react_1["default"].createElement(react_native_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToInterval: PRODUCT_WIDTH + theme.spacing.m * 2 }, products.slice(3, 8).map(function (p) { return (react_1["default"].createElement(HomeProductCard_1["default"], { key: p.id, product: p, product_width: PRODUCT_WIDTH, in_favourite: product_in_favourite.includes(p.id), in_bag: products_in_bag.includes(p.id), onImagePress: function () {
                        return navigation.navigate("Shop_Product_Detail", {
                            item: p
                        });
                    }, onAddToFavouritePress: function () { } })); }))),
            react_1["default"].createElement(restyle_2.Box, null,
                react_1["default"].createElement(restyle_2.Text, { margin: "m", variant: "body2", opacity: 0.9 }, "COLE\u00C7\u00C3O ANTIGA"),
                react_1["default"].createElement(react_native_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToInterval: PRODUCT_WIDTH + theme.spacing.m * 2 }, products.slice(3, 7).map(function (p) { return (react_1["default"].createElement(HomeProductCard_1["default"], { key: p.id, product: p, product_width: PRODUCT_WIDTH, in_favourite: product_in_favourite.includes(p.id), in_bag: products_in_bag.includes(p.id), onImagePress: function () {
                        return navigation.navigate("Shop_Product_Detail", {
                            item: p
                        });
                    }, onAddToFavouritePress: function () { } })); }))),
            react_1["default"].createElement(restyle_2.Box, null,
                react_1["default"].createElement(restyle_2.Text, { margin: "m", variant: "body2", opacity: 0.9 }, "RECOMENDADOS"),
                react_1["default"].createElement(AnimatedScrollView_1["default"], { navigation: navigation, data: products.slice(8, 12), itemWidth: width / 2, products_in_bag: products_in_bag, products_in_favourite: product_in_favourite })))));
};
exports["default"] = HomeScreen;
