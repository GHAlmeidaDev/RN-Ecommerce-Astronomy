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
var react_native_reanimated_1 = require("react-native-reanimated");
var restyle_1 = require("../../utils/restyle");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var expo_constants_1 = require("expo-constants");
var react_native_redash_1 = require("react-native-redash");
var hooks_1 = require("../../redux/hooks");
var EnderecoEnvioCard_1 = require("../cards/EnderecoEnvioCard");
var Button_1 = require("../forms/form_elements/Button");
var bagSlice_1 = require("../../redux/carrinho/bagSlice");
var react_navigation_shared_element_1 = require("react-navigation-shared-element");
var orderSlice_1 = require("../../redux/compras/orderSlice");
var data_types_1 = require("../../redux/data_types");
var AnimatedBox = react_native_reanimated_1["default"].createAnimatedComponent(restyle_1.Box);
// const { width, height } = Dimensions.get('screen')
var CheckoutView = function (_a) {
    var _b;
    var translateY = _a.translateY, headerTranslateY = _a.headerTranslateY, headerHeight = _a.headerHeight, width = _a.width, height = _a.height, total = _a.total, carrinhoItems = _a.carrinhoItems, navigation = _a.navigation, rest = __rest(_a, ["translateY", "headerTranslateY", "headerHeight", "width", "height", "total", "carrinhoItems", "navigation"]);
    var dispatch = hooks_1.useAppDispatch();
    var defaultshippingAddress = (_b = hooks_1.useAppSelector(function (state) { var _a; return (_a = state.user.current_user) === null || _a === void 0 ? void 0 : _a.shipping_addresses; })) === null || _b === void 0 ? void 0 : _b.find(function (add) { return add.is_default; });
    var styles = react_native_reanimated_1.useAnimatedStyle(function () { return ({
        transform: [{ translateY: react_native_reanimated_1.withSpring(translateY.value) }]
    }); });
    var gestureHandler = react_native_reanimated_1.useAnimatedGestureHandler({
        onStart: function (_, ctx) {
            ctx.startY = translateY.value;
        },
        onActive: function (event, ctx) {
            translateY.value = ctx.startY + event.translationY;
            headerTranslateY.value = react_native_reanimated_1.interpolate(translateY.value, [0, headerHeight], [-headerHeight, 0], react_native_reanimated_1.Extrapolate.CLAMP);
        },
        onEnd: function (e) {
            translateY.value = react_native_redash_1.snapPoint(translateY.value, e.velocityY, [
                0,
                height,
            ]);
            headerTranslateY.value = react_native_reanimated_1.interpolate(translateY.value, [headerHeight, 0], [0, -headerHeight], react_native_reanimated_1.Extrapolate.CLAMP);
        }
    });
    return (react_1["default"].createElement(AnimatedBox, __assign({ position: "absolute", zIndex: 9999999999999, bg: "white", width: width, height: height, style: [styles] }, rest),
        react_1["default"].createElement(react_native_gesture_handler_1.PanGestureHandler, { onGestureEvent: gestureHandler },
            react_1["default"].createElement(AnimatedBox, { bg: "gray", width: 100, height: 10, borderRadius: "m", position: "absolute", top: expo_constants_1["default"].statusBarHeight + 10, left: width / 2 - 50 })),
        react_1["default"].createElement(react_native_gesture_handler_1.ScrollView, { style: { flex: 1, marginTop: expo_constants_1["default"].statusBarHeight + 30, marginBottom: expo_constants_1["default"].statusBarHeight } },
            react_1["default"].createElement(restyle_1.Box, { marginVertical: "m" },
                react_1["default"].createElement(restyle_1.Text, { paddingHorizontal: "m", variant: "body2", opacity: 0.5 }, "Endere\u00E7o de envio"),
                defaultshippingAddress && (react_1["default"].createElement(EnderecoEnvioCard_1["default"], { elevation: 1, marginHorizontal: "m", onCheckBoxChange: function () { }, in_checkout: true, endereco: defaultshippingAddress, onEditPress: function () { return navigation.navigate('Profile_ShippingAddresses'); } }))),
            react_1["default"].createElement(restyle_1.Box, { marginVertical: "m" },
                react_1["default"].createElement(restyle_1.Text, { paddingHorizontal: "m", variant: "body2", opacity: 0.5 }, "Items"),
                react_1["default"].createElement(restyle_1.Box, { marginVertical: "m" }, carrinhoItems.map(function (b) { return (react_1["default"].createElement(restyle_1.Box, { key: b.product.id, marginHorizontal: "m", borderRadius: "m", overflow: "hidden", flexDirection: "row", marginVertical: "s" },
                    react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () {
                            return navigation.navigate("Shop_Product_Detail", { item: b.product });
                        } },
                        react_1["default"].createElement(react_navigation_shared_element_1.SharedElement, { id: "image-" + b.product.id },
                            react_1["default"].createElement(react_native_1.Image, { style: { width: 80, height: 80 }, resizeMode: "cover", source: {
                                    uri: b.product.thumbnail
                                } }))),
                    react_1["default"].createElement(restyle_1.Box, { paddingHorizontal: "m", width: width * 0.7 },
                        react_1["default"].createElement(restyle_1.Text, { marginBottom: 's', variant: "body2" }, b.product.display_name),
                        react_1["default"].createElement(restyle_1.Box, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
                            react_1["default"].createElement(restyle_1.Box, { flexDirection: 'row', alignItems: 'center' },
                                react_1["default"].createElement(restyle_1.Text, { opacity: .5 }, "Color: "),
                                react_1["default"].createElement(restyle_1.Text, null, b.color)),
                            react_1["default"].createElement(restyle_1.Box, { flexDirection: 'row', alignItems: 'center' },
                                react_1["default"].createElement(restyle_1.Text, { opacity: .5 }, "Size: "),
                                react_1["default"].createElement(restyle_1.Text, null, b.size)),
                            react_1["default"].createElement(restyle_1.Box, { flexDirection: 'row', alignItems: 'center' },
                                react_1["default"].createElement(restyle_1.Text, { opacity: .5 }, "Qty: "),
                                react_1["default"].createElement(restyle_1.Text, null, b.quantity)))))); }))),
            react_1["default"].createElement(restyle_1.Box, { marginVertical: "m", bg: "white" },
                react_1["default"].createElement(restyle_1.Text, { marginBottom: "m", paddingHorizontal: "m", variant: "body2", opacity: 0.5 }, "Informa\u00E7\u00F5es da compra"),
                react_1["default"].createElement(restyle_1.Box, { marginHorizontal: "m", elevation: 2 },
                    react_1["default"].createElement(restyle_1.Box, { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: "m" },
                        react_1["default"].createElement(restyle_1.Text, { variant: "body", opacity: 0.7 }, "Produtos"),
                        react_1["default"].createElement(restyle_1.Text, { variant: "body" }, "R$" + total)),
                    react_1["default"].createElement(restyle_1.Box, { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: "m" },
                        react_1["default"].createElement(restyle_1.Text, { variant: "body", opacity: 0.7 }, "Frete"),
                        react_1["default"].createElement(restyle_1.Text, { variant: "body" }, "R$" + 7)),
                    react_1["default"].createElement(restyle_1.Box, { marginTop: "s", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: "m" },
                        react_1["default"].createElement(restyle_1.Text, { variant: "body", opacity: 0.7 }, "Total"),
                        react_1["default"].createElement(restyle_1.Text, { variant: "body" }, "R$" + +(7 + total).toFixed(2))))),
            react_1["default"].createElement(restyle_1.Box, { marginVertical: "m", paddingHorizontal: "m" },
                react_1["default"].createElement(Button_1["default"], { title: "Finalizar", variant: "PRIMARY", onPress: function () {
                        dispatch(bagSlice_1.emptyBag());
                        dispatch(orderSlice_1.addCompra({
                            id: Math.floor(Math.random() * 10),
                            date: setDate(new Date()),
                            status: data_types_1.OrderStatus.PENDENTE,
                            order_items: carrinhoItems,
                            tracking_number: "AB" + Math.floor(Math.random() * 100000) + "BR",
                            total_amount: total,
                            user: 1
                        }));
                        headerTranslateY.value = 0;
                        translateY.value = height;
                    } })))));
};
var setDate = function (date) {
    return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
};
exports["default"] = CheckoutView;
