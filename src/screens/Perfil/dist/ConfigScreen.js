"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var Layout_1 = require("../../components/alls/Layout");
var BottomTab_1 = require("../../components/navigation/BottomTab");
var Header_1 = require("../../components/navigation/Header");
var vector_icons_1 = require("@expo/vector-icons");
var restyle_1 = require("@shopify/restyle");
var restyle_2 = require("../../utils/restyle");
var Input_1 = require("../../components/forms/form_elements/Input");
var _a = react_native_1.Dimensions.get("screen"), width = _a.width, height = _a.height;
var HEADER_HEIGHT = height * .12;
var ConfigScreen = function (_a) {
    var route = _a.route, navigation = _a.navigation;
    var theme = restyle_1.useTheme();
    var _b = react_1.useState(false), notification = _b[0], setNotification = _b[1];
    var _c = react_1.useState(true), deliveryStatus = _c[0], setDeliveryStatus = _c[1];
    var _d = react_1.useState(false), darkMode = _d[0], setDarkMode = _d[1];
    return (react_1["default"].createElement(Layout_1["default"], null,
        react_1["default"].createElement(Header_1["default"], { height: HEADER_HEIGHT, elevation: 2, paddingHorizontal: 'm', title: "Configura\u00E7\u00F5es", position: "absolute", top: 0, left_icon: react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () { return navigation.navigate("Profile_Main"); } },
                react_1["default"].createElement(vector_icons_1.Ionicons, { name: "arrow-back", size: 30, color: theme.colors.darkColor })) }),
        react_1["default"].createElement(BottomTab_1["default"], { elevation: 5, route_name: route.name, position: "absolute", bottom: 0 }),
        react_1["default"].createElement(react_native_1.ScrollView, { style: {
                flex: 1,
                marginBottom: height * 0.1,
                marginTop: HEADER_HEIGHT - theme.spacing.l
            } },
            react_1["default"].createElement(restyle_2.Box, { margin: "m" },
                react_1["default"].createElement(restyle_2.Text, { mb: "s", variant: "body2" }, "Informa\u00E7\u00F5es pessoais"),
                react_1["default"].createElement(Input_1["default"], { marginVertical: "s", placeholder: "Primeiro Nome" }),
                react_1["default"].createElement(Input_1["default"], { placeholder: "\u00DAltimo Nome" })),
            react_1["default"].createElement(restyle_2.Box, { margin: "m" },
                react_1["default"].createElement(restyle_2.Text, { mb: "s", variant: "body2" }, "Notifica\u00E7\u00F5es"),
                react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: "s" },
                    react_1["default"].createElement(restyle_2.Text, { variant: "body" }, "Ofertas"),
                    react_1["default"].createElement(react_native_1.Switch, { onValueChange: function (value) {
                            return setNotification(value);
                        }, value: notification, thumbColor: theme.colors.black, trackColor: {
                            "true": theme.colors.darkColor,
                            "false": theme.colors.gray
                        } })),
                react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: "s" },
                    react_1["default"].createElement(restyle_2.Text, { variant: "body" }, "Status de envio"),
                    react_1["default"].createElement(react_native_1.Switch, { onValueChange: function (value) { return setDeliveryStatus(value); }, value: deliveryStatus, thumbColor: theme.colors.black, trackColor: {
                            "true": theme.colors.darkColor,
                            "false": theme.colors.gray
                        } }))),
            react_1["default"].createElement(restyle_2.Box, { margin: "m" },
                react_1["default"].createElement(restyle_2.Text, { mb: "s", variant: "body2" }, "Outros"),
                react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: "s" },
                    react_1["default"].createElement(restyle_2.Text, { variant: "body" }, "Modo Escuro"),
                    react_1["default"].createElement(react_native_1.Switch, { onValueChange: function (value) { return setDarkMode(value); }, value: darkMode, thumbColor: theme.colors.black, trackColor: {
                            "true": theme.colors.darkColor,
                            "false": theme.colors.gray
                        } }))))));
};
exports["default"] = ConfigScreen;
