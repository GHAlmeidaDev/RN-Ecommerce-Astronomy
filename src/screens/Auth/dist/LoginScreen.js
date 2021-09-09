"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var restyle_1 = require("../../utils/restyle");
var LoginForm_1 = require("../../components/forms/LoginForm");
var Layout_1 = require("../../components/alls/Layout");
var Modal_1 = require("../../components/cards/Modal");
var LoginScreen = function (_a) {
    var navigation = _a.navigation;
    return (react_1["default"].createElement(Layout_1["default"], { no_padding: true },
        react_1["default"].createElement(restyle_1.Box, { padding: "m", bg: "primary", borderBottomLeftRadius: "l", borderBottomRightRadius: "l", elevation: 10, flexDirection: "row", justifyContent: "center", alignItems: "center" },
            react_1["default"].createElement(restyle_1.Box, null,
                react_1["default"].createElement(restyle_1.Text, { variant: "headline", mt: "xl", color: "white", textAlign: 'center' }, "Bem Vindo"),
                react_1["default"].createElement(restyle_1.Text, { variant: "description", mb: "xl", color: "white" }, "Fa\u00E7a seu login ou se cadastre"))),
        react_1["default"].createElement(restyle_1.Box, { paddingHorizontal: "m", paddingTop: "l" },
            react_1["default"].createElement(LoginForm_1["default"], { onSubmit: function () { return navigation.replace("Main", { screen: "Home" }); } }),
            react_1["default"].createElement(restyle_1.Box, { flexDirection: "row", justifyContent: "center", alignItems: "center" },
                react_1["default"].createElement(restyle_1.Text, { variant: "body" }, "Voc\u00EA ainda n\u00E3o tem conta ?"),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate("Register"); } },
                    react_1["default"].createElement(restyle_1.Text, { marginLeft: 'm', variant: "body2", color: 'primary', testID: "cadastro" }, "Cadastre-se")),
                react_1["default"].createElement(Modal_1["default"], null)))));
};
exports["default"] = LoginScreen;
