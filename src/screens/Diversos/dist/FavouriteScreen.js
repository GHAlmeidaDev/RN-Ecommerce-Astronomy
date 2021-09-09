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
exports.__esModule = true;
var vector_icons_1 = require("@expo/vector-icons");
var restyle_1 = require("@shopify/restyle");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var Layout_1 = require("../../components/Layout");
var BottomTab_1 = require("../../components/navigation/BottomTab");
var Header_1 = require("../../components/navigation/Header");
var hooks_1 = require("../../redux/hooks");
var restyle_2 = require("../../utils/restyle");
var framer_motion_1 = require("framer-motion");
var components_1 = require("@motify/components");
var FavoritoCard_1 = require("../../components/cards/FavoritoCard");
var bagSlice_1 = require("../../redux/carrinho/bagSlice");
var favouriteSlice_1 = require("../../redux/favourite/favouriteSlice");
var react_native_2 = require("react-native");
var _a = react_native_1.Dimensions.get("screen"), width = _a.width, height = _a.height;
var HEADER_HEIGHT = height * 0.12;
var FavouriteScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var theme = restyle_1.useTheme();
    var _b = react_1.useState(false), display = _b[0], setDisplay = _b[1];
    var dispatch = hooks_1.useAppDispatch();
    var favoritos = hooks_1.useAppSelector(function (state) { return state.favourite.favourites; });
    var products_in_bag = hooks_1.useAppSelector(function (state) { return state.bag.products_in_bag; });
    react_1.useEffect(function () {
        setDisplay(true);
    }, []);
    return (react_1["default"].createElement(Layout_1["default"], { bg: favoritos.length > 0 ? "background" : "white" },
        react_1["default"].createElement(Header_1["default"], { height: HEADER_HEIGHT, elevation: 2, title: "Favoritados", position: "absolute", paddingHorizontal: "m", top: 0, left_icon: react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () { return navigation.navigate("Main", { screen: "Home" }); } },
                react_1["default"].createElement(vector_icons_1.Ionicons, { name: "arrow-back", size: 30, color: theme.colors.darkColor })) }),
        react_1["default"].createElement(BottomTab_1["default"], { route_name: route.name, position: "absolute", bottom: 0 }),
        display ? (react_1["default"].createElement(react_native_1.ScrollView, { style: {
                flex: 1,
                marginBottom: height * 0.1,
                marginTop: HEADER_HEIGHT - theme.spacing.l
            } },
            react_1["default"].createElement(restyle_2.Box, { marginVertical: "m" },
                react_1["default"].createElement(framer_motion_1.AnimatePresence, null, favoritos && favoritos.length > 0 ? (favoritos.map(function (f, i) { return (react_1["default"].createElement(components_1.MotiView, { key: f.product.id, from: {
                        opacity: 0,
                        translateX: -width
                    }, animate: { opacity: 1, translateX: 0 }, exit: {
                        opacity: 0,
                        translateX: -width
                    }, transition: {
                        type: "timing",
                        duration: 300,
                        delay: i * 10
                    }, exitTransition: {
                        type: "timing",
                        duration: 300
                    } },
                    react_1["default"].createElement(FavoritoCard_1["default"], { is_in_bag: products_in_bag.includes(f.product.id), favouriteItem: f, onDeletePress: function () {
                            return dispatch(favouriteSlice_1.removeFromFavourite(f.product.id));
                        }, onImagePress: function () {
                            return navigation.navigate("Shop_Product_Detail", { item: f.product });
                        }, onAddToBagPress: function () {
                            return dispatch(bagSlice_1.addToBag(__assign(__assign({}, f), { quantity: 1 })));
                        } }))); })) : (react_1["default"].createElement(components_1.MotiView, { from: {
                        opacity: 0
                    }, animate: {
                        opacity: 1
                    }, delay: 300 },
                    react_1["default"].createElement(restyle_2.Box, { flex: 1, justifyContent: "center", alignItems: "center" },
                        react_1["default"].createElement(react_native_2.Image, { source: require("../../../assets/empty.png"), resizeMode: "contain", style: {
                                width: width * 0.6,
                                height: height * 0.6
                            } })))))))) : (react_1["default"].createElement(restyle_2.Box, { flex: 1, justifyContent: "center", alignItems: "center" },
            react_1["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: theme.colors.primary })))));
};
exports["default"] = FavouriteScreen;
