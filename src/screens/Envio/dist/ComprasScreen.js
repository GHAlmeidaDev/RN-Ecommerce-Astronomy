"use strict";
exports.__esModule = true;
var vector_icons_1 = require("@expo/vector-icons");
var restyle_1 = require("@shopify/restyle");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_native_reanimated_1 = require("react-native-reanimated");
var CompraCard_1 = require("../../components/cards/CompraCard");
var Status_1 = require("../../components/alls/Status");
var Layout_1 = require("../../components/alls/Layout");
var BottomTab_1 = require("../../components/navigation/BottomTab");
var Header_1 = require("../../components/navigation/Header");
var data_types_1 = require("../../redux/data_types");
var hooks_1 = require("../../redux/hooks");
var restyle_2 = require("../../utils/restyle");
var _a = react_native_1.Dimensions.get("screen"), width = _a.width, height = _a.height;
var HEADER_HEIGHT = height * 0.12;
var AnimatedBox = react_native_reanimated_1["default"].createAnimatedComponent(restyle_2.Box);
var ComprasScreen = function (_a) {
    var route = _a.route, navigation = _a.navigation;
    var theme = restyle_1.useTheme();
    var orders = hooks_1.useAppSelector(function (state) { return state.orders.orderItems; });
    var _b = react_1.useState(false), display = _b[0], setDisplay = _b[1];
    var _c = react_1.useState("Pendente"), selectedStatus = _c[0], setSelectedStatus = _c[1];
    var translateX = react_native_reanimated_1.useSharedValue(0);
    var animatedStyles = react_native_reanimated_1.useAnimatedStyle(function () { return ({
        transform: [{ translateX: react_native_reanimated_1.withTiming(translateX.value) }]
    }); });
    react_1.useEffect(function () {
        setDisplay(true);
    }, []);
    return (react_1["default"].createElement(Layout_1["default"], null,
        react_1["default"].createElement(Header_1["default"], { height: HEADER_HEIGHT, elevation: 2, title: "Pedidos", position: "absolute", paddingHorizontal: 'm', top: 0, left_icon: react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () { return navigation.navigate("Profile_Main"); } },
                react_1["default"].createElement(vector_icons_1.Ionicons, { name: "arrow-back", size: 30, color: theme.colors.darkColor })) }),
        react_1["default"].createElement(BottomTab_1["default"], { elevation: 5, route_name: route.name, position: "absolute", bottom: 0 }),
        react_1["default"].createElement(react_native_1.ScrollView, { style: {
                flex: 1,
                marginBottom: height * 0.1,
                marginTop: HEADER_HEIGHT - theme.spacing.l
            } },
            react_1["default"].createElement(restyle_2.Box, { flexDirection: 'row', justifyContent: 'space-between' },
                react_1["default"].createElement(Status_1["default"], { textProps: {
                        color: selectedStatus === "Pendente"
                            ? "darkColor"
                            : "white"
                    }, margin: "m", bg: selectedStatus === "Pendente"
                        ? "white"
                        : "darkColor", name: "Pendente", borderWidth: selectedStatus === "Pendente" ? 1 : 0, onPress: function () {
                        setSelectedStatus("Pendente");
                        translateX.value = 0;
                    } }),
                react_1["default"].createElement(Status_1["default"], { textProps: {
                        color: selectedStatus === "Enviado"
                            ? "darkColor"
                            : "white"
                    }, margin: "m", bg: selectedStatus === "Enviado"
                        ? "white"
                        : "darkColor", borderWidth: selectedStatus === "Enviado" ? 1 : 0, name: "Enviado", onPress: function () {
                        setSelectedStatus("Enviado");
                        translateX.value = -width;
                    } }),
                react_1["default"].createElement(Status_1["default"], { textProps: {
                        color: selectedStatus === "Cancelado"
                            ? "darkColor"
                            : "white"
                    }, margin: "m", bg: selectedStatus === "Cancelado"
                        ? "white"
                        : "darkColor", borderWidth: selectedStatus === "Cancelado" ? 1 : 0, name: "Cancelado", onPress: function () {
                        setSelectedStatus("Cancelado");
                        translateX.value = 2 * -width;
                    } })),
            display ? (react_1["default"].createElement(AnimatedBox, { flex: 1, width: width * 3, flexDirection: "row", style: animatedStyles },
                react_1["default"].createElement(restyle_2.Box, { width: width },
                    react_1["default"].createElement(react_native_1.ScrollView, { style: {} }, orders
                        .filter(function (o) { return o.status === data_types_1.OrderStatus.PENDENTE; })
                        .map(function (o) { return (react_1["default"].createElement(CompraCard_1["default"], { key: o.id, order: o, marginHorizontal: "s", onDetailPress: function () {
                            return navigation.navigate("Profile_Order_Detail", { order: o });
                        }, elevation: 1 })); }))),
                react_1["default"].createElement(restyle_2.Box, { width: width },
                    react_1["default"].createElement(react_native_1.ScrollView, { style: {} }, orders
                        .filter(function (o) { return o.status === data_types_1.OrderStatus.SUCESSO; })
                        .map(function (o) { return (react_1["default"].createElement(CompraCard_1["default"], { key: o.id, order: o, marginHorizontal: "s", onDetailPress: function () {
                            return navigation.navigate("Profile_Order_Detail", { order: o });
                        }, elevation: 1 })); }))),
                react_1["default"].createElement(restyle_2.Box, { width: width },
                    react_1["default"].createElement(react_native_1.ScrollView, { style: {} }, orders
                        .filter(function (o) {
                        return o.status === data_types_1.OrderStatus.CANCELADA;
                    })
                        .map(function (o) { return (react_1["default"].createElement(CompraCard_1["default"], { key: o.id, order: o, marginHorizontal: "s", onDetailPress: function () {
                            return navigation.navigate("Profile_Order_Detail", { order: o });
                        }, elevation: 1 })); }))))) : (react_1["default"].createElement(restyle_2.Box, { flex: 1, justifyContent: "center", alignItems: "center" },
                react_1["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: theme.colors.primary }))))));
};
exports["default"] = ComprasScreen;
