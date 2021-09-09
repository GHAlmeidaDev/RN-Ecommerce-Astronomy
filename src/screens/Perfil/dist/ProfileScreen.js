"use strict";
exports.__esModule = true;
var vector_icons_1 = require("@expo/vector-icons");
var restyle_1 = require("@shopify/restyle");
var react_1 = require("react");
var react_native_1 = require("react-native");
var Layout_1 = require("../../components/alls/Layout");
var ListItem_1 = require("../../components/alls/ListItem");
var BottomTab_1 = require("../../components/navigation/BottomTab");
var restyle_2 = require("../../utils/restyle");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var ProfileHeader_1 = require("../../components/navigation/ProfileHeader");
var hooks_1 = require("../../redux/hooks");
var _a = react_native_1.Dimensions.get("screen"), width = _a.width, height = _a.height;
var HEADER_HEIGHT = height * 0.15;
var AVATAR_SIZE = 80;
var ProfileScreen = function (_a) {
    var _b;
    var navigation = _a.navigation, route = _a.route;
    var theme = restyle_1.useTheme();
    var shippingAddressCount = (_b = hooks_1.useAppSelector(function (state) { var _a; return (_a = state.user.current_user) === null || _a === void 0 ? void 0 : _a.shipping_addresses; })) === null || _b === void 0 ? void 0 : _b.length;
    var ordersCount = hooks_1.useAppSelector(function (state) { return state.orders.orderItems; }).length;
    return (react_1["default"].createElement(Layout_1["default"], { no_padding: true },
        react_1["default"].createElement(ProfileHeader_1["default"], { zIndex: 555555, header_width: width, header_height: HEADER_HEIGHT, avatar_size: AVATAR_SIZE, avatar_source: require('../../../assets/avatar.png'), right_icon: react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () { return navigation.navigate('Auth', { screen: 'Login' }); } },
                react_1["default"].createElement(vector_icons_1.Ionicons, { name: "exit-outline", size: 30, color: theme.colors.white })) }),
        react_1["default"].createElement(BottomTab_1["default"], { elevation: 5, route_name: route.name, position: "absolute", bottom: 0 }),
        react_1["default"].createElement(react_native_1.ScrollView, { style: {
                flex: 1,
                marginBottom: height * 0.1,
                paddingHorizontal: theme.spacing.m
            } },
            react_1["default"].createElement(restyle_2.Box, { style: {
                    paddingTop: HEADER_HEIGHT + AVATAR_SIZE / 2 + theme.spacing.m,
                    marginBottom: theme.spacing.m
                } },
                react_1["default"].createElement(restyle_2.Box, { alignItems: "center", justifyContent: "center", marginBottom: 'm' },
                    react_1["default"].createElement(restyle_2.Box, { width: width * 0.8, borderRadius: "m", padding: "m", bg: "white", flexDirection: "row", justifyContent: "space-between" },
                        react_1["default"].createElement(restyle_2.Box, null,
                            react_1["default"].createElement(restyle_2.Text, { variant: "body2" }, "Nome"),
                            react_1["default"].createElement(restyle_2.Text, { variant: "description", opacity: 0.4 }, "Gabriel")),
                        react_1["default"].createElement(restyle_2.Box, null,
                            react_1["default"].createElement(restyle_2.Text, { variant: "body2" }, "Email"),
                            react_1["default"].createElement(restyle_2.Text, { variant: "description", opacity: 0.4 }, "gaabriel.hudson11@gmail.com")))),
                react_1["default"].createElement(ListItem_1["default"], { title: "Minhas compras", description: ordersCount === 0 ? "Nenhuma compra feita" : "Voc\u00EA tem " + ordersCount + " compras", left_icon: react_1["default"].createElement(vector_icons_1.Fontisto, { name: "shopping-bag", size: 30, color: theme.colors.primary }), right_icon: react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () { return navigation.navigate('Profile_Orders'); } },
                        react_1["default"].createElement(vector_icons_1.MaterialIcons, { name: "keyboard-arrow-right", size: 30, color: theme.colors.primary })) }),
                react_1["default"].createElement(ListItem_1["default"], { title: "Endere\u00E7os de envio", description: shippingAddressCount === 0 ? "Don't have any" : "Voc\u00EA tem " + shippingAddressCount + " endere\u00E7os", left_icon: react_1["default"].createElement(vector_icons_1.FontAwesome5, { name: "address-card", size: 30, color: theme.colors.primary }), right_icon: react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () { return navigation.navigate('Profile_ShippingAddresses'); } },
                        react_1["default"].createElement(vector_icons_1.MaterialIcons, { name: "keyboard-arrow-right", size: 30, color: theme.colors.primary })) }),
                react_1["default"].createElement(ListItem_1["default"], { title: "Configura\u00E7\u00F5es", description: "Senha, Notifica\u00E7\u00F5es ...", left_icon: react_1["default"].createElement(vector_icons_1.MaterialCommunityIcons, { name: "robot-industrial", size: 30, color: theme.colors.primary }), right_icon: react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () { return navigation.navigate('Profile_Settings'); } },
                        react_1["default"].createElement(vector_icons_1.MaterialIcons, { name: "keyboard-arrow-right", size: 30, color: theme.colors.primary })) })))));
};
exports["default"] = ProfileScreen;
