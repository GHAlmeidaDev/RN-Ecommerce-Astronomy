"use strict";
exports.__esModule = true;
var vector_icons_1 = require("@expo/vector-icons");
var restyle_1 = require("@shopify/restyle");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_navigation_shared_element_1 = require("react-navigation-shared-element");
var Layout_1 = require("../../components/alls/Layout");
var BottomTab_1 = require("../../components/navigation/BottomTab");
var Header_1 = require("../../components/navigation/Header");
var data_types_1 = require("../../redux/data_types");
var hooks_1 = require("../../redux/hooks");
var restyle_2 = require("../../utils/restyle");
var _a = react_native_1.Dimensions.get("screen"), width = _a.width, height = _a.height;
var HEADER_HEIGHT = height * 0.12;
var CompraDetalheScreen = function (_a) {
    var _b;
    var navigation = _a.navigation, route = _a.route;
    var theme = restyle_1.useTheme();
    var defaultShippingAddress = (_b = hooks_1.useAppSelector(function (state) { var _a; return (_a = state.user.current_user) === null || _a === void 0 ? void 0 : _a.shipping_addresses; })) === null || _b === void 0 ? void 0 : _b.find(function (s) { return s.is_default; });
    return (react_1["default"].createElement(Layout_1["default"], null,
        react_1["default"].createElement(Header_1["default"], { height: HEADER_HEIGHT, title: "Detalhes do pedido", position: "absolute", paddingHorizontal: 'm', elevation: 1, top: 0, left_icon: react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () { return navigation.navigate("Profile_Main"); } },
                react_1["default"].createElement(vector_icons_1.Ionicons, { name: "arrow-back", size: 30, color: theme.colors.darkColor })) }),
        react_1["default"].createElement(BottomTab_1["default"], { route_name: route.name, position: "absolute", bottom: 0 }),
        react_1["default"].createElement(react_native_gesture_handler_1.ScrollView, { style: {
                flex: 1,
                marginBottom: height * 0.1,
                marginTop: HEADER_HEIGHT - theme.spacing.l
            } },
            react_1["default"].createElement(restyle_2.Box, { marginTop: "m", marginBottom: 's', marginHorizontal: 'm', bg: 'white', p: 'm', borderRadius: 'm' },
                react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: "s" },
                    react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", alignItems: "center" },
                        react_1["default"].createElement(restyle_2.Text, { variant: "body", opacity: 0.5 }, "C\u00F3digo de Rastreamento: "),
                        react_1["default"].createElement(restyle_2.Text, { variant: "body" }, route.params.order.tracking_number)),
                    react_1["default"].createElement(restyle_2.Text, { variant: "body2", opacity: 0.7 }, route.params.order.date)),
                react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: "s" },
                    react_1["default"].createElement(restyle_2.Text, { variant: "body", opacity: 0.5 }, "Status:"),
                    react_1["default"].createElement(restyle_2.Text, { variant: "body2", color: route.params.order.status ===
                            data_types_1.OrderStatus.SUCESSO
                            ? "success"
                            : route.params.order.status ===
                                data_types_1.OrderStatus.PENDENTE
                                ? "darkColor"
                                : "error" }, route.params.order.status))),
            react_1["default"].createElement(restyle_2.Box, { marginVertical: "s" },
                react_1["default"].createElement(restyle_2.Text, { marginHorizontal: "m", marginVertical: "s", variant: "headline3", opacity: 0.7 }, "Items"),
                route.params.order.order_items.map(function (o) { return (react_1["default"].createElement(restyle_2.Box, { key: o.product.id, marginHorizontal: "m", borderRadius: "m", overflow: "hidden", flexDirection: "row", marginVertical: "s", bg: 'white' },
                    react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () {
                            return navigation.navigate("Shop_Product_Detail", {
                                item: o.product
                            });
                        } },
                        react_1["default"].createElement(react_navigation_shared_element_1.SharedElement, { id: "image-" + o.product.id },
                            react_1["default"].createElement(react_native_1.Image, { style: { width: 80, height: 80 }, resizeMode: "cover", source: {
                                    uri: o.product.thumbnail
                                } }))),
                    react_1["default"].createElement(restyle_2.Box, { paddingHorizontal: "m", width: width * 0.7, paddingVertical: 's' },
                        react_1["default"].createElement(restyle_2.Text, { marginBottom: "s", variant: "body2" }, o.product.display_name),
                        react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
                            react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", alignItems: "center" },
                                react_1["default"].createElement(restyle_2.Text, { opacity: 0.5 }, "Cor: "),
                                react_1["default"].createElement(restyle_2.Text, null, o.color)),
                            react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", alignItems: "center" },
                                react_1["default"].createElement(restyle_2.Text, { opacity: 0.5 }, "Tamanho: "),
                                react_1["default"].createElement(restyle_2.Text, null, o.size)),
                            react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", alignItems: "center" },
                                react_1["default"].createElement(restyle_2.Text, { opacity: 0.5 }, "Qtd: "),
                                react_1["default"].createElement(restyle_2.Text, null, o.quantity)))))); })),
            react_1["default"].createElement(restyle_2.Box, { marginVertical: "s" },
                react_1["default"].createElement(restyle_2.Text, { marginHorizontal: "m", marginVertical: "s", variant: "headline3", opacity: 0.7 }, "Informa\u00E7\u00F5es do pedido"),
                react_1["default"].createElement(restyle_2.Box, { margin: 'm', paddingHorizontal: "m", padding: 'm', bg: 'white', borderRadius: 'm' },
                    react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "s" },
                        react_1["default"].createElement(restyle_2.Box, { flex: 1 },
                            react_1["default"].createElement(restyle_2.Text, { opacity: 0.5 }, "Endere\u00E7o enviado: ")),
                        react_1["default"].createElement(restyle_2.Box, { flex: 1 },
                            react_1["default"].createElement(restyle_2.Text, null, (defaultShippingAddress === null || defaultShippingAddress === void 0 ? void 0 : defaultShippingAddress.endereco) + ", " + (defaultShippingAddress === null || defaultShippingAddress === void 0 ? void 0 : defaultShippingAddress.cidade) + ", " + (defaultShippingAddress === null || defaultShippingAddress === void 0 ? void 0 : defaultShippingAddress.estado) + " " + (defaultShippingAddress === null || defaultShippingAddress === void 0 ? void 0 : defaultShippingAddress.cep) + ", " + (defaultShippingAddress === null || defaultShippingAddress === void 0 ? void 0 : defaultShippingAddress.pais)))),
                    react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "s" },
                        react_1["default"].createElement(restyle_2.Box, { flex: 1 },
                            react_1["default"].createElement(restyle_2.Text, { opacity: 0.5 }, "Total: ")),
                        react_1["default"].createElement(restyle_2.Box, { flex: 1 },
                            react_1["default"].createElement(restyle_2.Text, null, "R$" + route.params.order.total_amount))))))));
};
exports["default"] = CompraDetalheScreen;
