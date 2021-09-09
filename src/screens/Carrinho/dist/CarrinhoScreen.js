"use strict";
exports.__esModule = true;
var vector_icons_1 = require("@expo/vector-icons");
var restyle_1 = require("@shopify/restyle");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var CarrinhoCard_1 = require("../../components/cards/CarrinhoCard");
var Layout_1 = require("../../components/alls/Layout");
var BottomTab_1 = require("../../components/navigation/BottomTab");
var Header_1 = require("../../components/navigation/Header");
var bagSlice_1 = require("../../redux/carrinho/bagSlice");
var hooks_1 = require("../../redux/hooks");
var moti_1 = require("moti");
var restyle_2 = require("../../utils/restyle");
var Button_1 = require("../../components/forms/form_elements/Button");
var react_native_reanimated_1 = require("react-native-reanimated");
var CheckoutView_1 = require("../../components/CheckoutView");
var react_native_2 = require("react-native");
var _a = react_native_1.Dimensions.get("screen"), width = _a.width, height = _a.height;
var HEADER_HEIGHT = height * 0.12;
var AnimatedBox = react_native_reanimated_1["default"].createAnimatedComponent(restyle_2.Box);
var CarrinhoScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var theme = restyle_1.useTheme();
    var _b = react_1.useState(false), display = _b[0], setDisplay = _b[1];
    var dispatch = hooks_1.useAppDispatch();
    var carrinhoItems = hooks_1.useAppSelector(function (state) { return state.bag.carrinhoItems; });
    var total = hooks_1.useAppSelector(function (state) { return state.bag.total; });
    var headerTranslateY = react_native_reanimated_1.useSharedValue(0);
    var checkoutTranslateY = react_native_reanimated_1.useSharedValue(height);
    var headerStyles = react_native_reanimated_1.useAnimatedStyle(function () { return ({
        transform: [{ translateY: react_native_reanimated_1.withSpring(headerTranslateY.value, { mass: 0.5 }) }]
    }); });
    react_1.useEffect(function () {
        setDisplay(true);
    }, []);
    return (react_1["default"].createElement(Layout_1["default"], { bg: carrinhoItems.length > 0 ? 'background' : 'white' },
        display && (react_1["default"].createElement(CheckoutView_1["default"], { navigation: navigation, carrinhoItems: carrinhoItems, total: total, headerHeight: HEADER_HEIGHT, headerTranslateY: headerTranslateY, zIndex: 999999, position: "absolute", width: width, height: height, translateY: checkoutTranslateY })),
        react_1["default"].createElement(AnimatedBox, { width: width, height: HEADER_HEIGHT, position: "absolute", top: 0, elevation: 2, style: headerStyles },
            react_1["default"].createElement(Header_1["default"], { height: HEADER_HEIGHT, elevation: 2, title: "Carrinho", position: "absolute", paddingHorizontal: "m", top: 0, left_icon: react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () { return navigation.navigate("Main", { screen: "Home" }); } },
                    react_1["default"].createElement(vector_icons_1.Ionicons, { name: "arrow-back", size: 30, color: theme.colors.darkColor })) })),
        react_1["default"].createElement(BottomTab_1["default"], { route_name: route.name, position: "absolute", bottom: 0 }),
        display ? (react_1["default"].createElement(react_native_1.ScrollView, { style: {
                flex: 1,
                marginBottom: height * 0.1,
                marginTop: HEADER_HEIGHT - theme.spacing.l
            } },
            react_1["default"].createElement(restyle_2.Box, { marginVertical: "m" },
                react_1["default"].createElement(moti_1.AnimatePresence, null, carrinhoItems && carrinhoItems.length > 0 ? (carrinhoItems.map(function (b, i) {
                    return (react_1["default"].createElement(moti_1.MotiView, { key: b.product.id, from: {
                            opacity: 0,
                            translateX: -width
                        }, animate: {
                            opacity: 1,
                            translateX: 0
                        }, exit: {
                            opacity: 0,
                            translateX: -width
                        }, transition: {
                            type: "timing",
                            duration: 300
                        }, exitTransition: {
                            type: "timing",
                            duration: 300
                        } },
                        react_1["default"].createElement(CarrinhoCard_1["default"], { bagItem: b, onImagePress: function () {
                                return navigation.navigate("Shop_Product_Detail", {
                                    item: b.product
                                });
                            }, onDeletePress: function () {
                                dispatch(bagSlice_1.removeFromBag(b.product.id));
                            } })));
                })) : (react_1["default"].createElement(moti_1.MotiView, { from: {
                        opacity: 0
                    }, animate: {
                        opacity: 1
                    }, delay: 300 },
                    react_1["default"].createElement(restyle_2.Box, { flex: 1, justifyContent: "center", alignItems: "center" },
                        react_1["default"].createElement(react_native_2.Image, { source: require("../../../assets/empty.png"), resizeMode: "contain", style: {
                                width: width * 0.6,
                                height: height * 0.6
                            } })))))),
            carrinhoItems && carrinhoItems.length > 0 && (react_1["default"].createElement(restyle_2.Box, null,
                react_1["default"].createElement(restyle_2.Box, { p: "m", bg: "white", flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
                    react_1["default"].createElement(restyle_2.Text, { variant: "body2" }, "Total"),
                    react_1["default"].createElement(restyle_2.Text, { variant: "body2" }, "R$" + total)),
                react_1["default"].createElement(restyle_2.Box, { marginHorizontal: "m" },
                    react_1["default"].createElement(Button_1["default"], { title: "Finalizar Compra", onPress: function () {
                            headerTranslateY.value = -HEADER_HEIGHT;
                            checkoutTranslateY.value = 0;
                        }, variant: "PRIMARY" })))))) : (react_1["default"].createElement(restyle_2.Box, { flex: 1, justifyContent: "center", alignItems: "center" },
            react_1["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: theme.colors.primary })))));
};
exports["default"] = CarrinhoScreen;
