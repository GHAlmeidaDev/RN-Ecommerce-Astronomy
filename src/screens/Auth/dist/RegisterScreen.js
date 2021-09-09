"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_2 = require("react-native");
var react_native_3 = require("react-native");
var RegisterForm_1 = require("../../components/forms/RegisterForm");
var Layout_1 = require("../../components/alls/Layout");
var restyle_1 = require("../../utils/restyle");
var _a = react_native_2.Dimensions.get("screen"), width = _a.width, height = _a.height;
var RegisterScreen = function (_a) {
    var navigation = _a.navigation;
    return (react_1["default"].createElement(Layout_1["default"], { no_padding: true },
        react_1["default"].createElement(restyle_1.Box, { padding: "m", bg: "primary", borderBottomLeftRadius: "l", borderBottomRightRadius: "l", elevation: 10, flexDirection: "row", justifyContent: "center", alignItems: "center" },
            react_1["default"].createElement(restyle_1.Box, null,
                react_1["default"].createElement(restyle_1.Text, { variant: "headline", mt: "xl", color: "white", textAlign: 'center' }, "Cadastre-se"))),
        react_1["default"].createElement(react_native_2.KeyboardAvoidingView, { behavior: react_native_1.Platform.OS === "ios" ? "padding" : "height", style: { flex: 1 } },
            react_1["default"].createElement(react_native_1.ScrollView, null,
                react_1["default"].createElement(restyle_1.Box, { padding: "m" },
                    react_1["default"].createElement(RegisterForm_1["default"], { onSubmit: function () { return navigation.navigate("Login"); } }),
                    react_1["default"].createElement(restyle_1.Box, { flexDirection: "row", justifyContent: "center", alignItems: "center" },
                        react_1["default"].createElement(restyle_1.Text, { variant: "body" }, "Voc\u00EA tem uma conta ?"),
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate("Login"); } },
                            react_1["default"].createElement(restyle_1.Text, { marginLeft: "m", variant: "body2", color: "primary" }, "Entrar"))))))));
};
var styles = react_native_3.StyleSheet.create({
    container: {
        flex: 1
    }
});
exports["default"] = RegisterScreen;
