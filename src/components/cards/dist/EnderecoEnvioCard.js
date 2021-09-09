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
var react_native_bouncy_checkbox_1 = require("react-native-bouncy-checkbox");
var restyle_1 = require("@shopify/restyle");
var restyle_2 = require("../../utils/restyle");
var vector_icons_1 = require("@expo/vector-icons");
var EnderecoEnvioCard = function (_a) {
    var endereco = _a.endereco, onEditPress = _a.onEditPress, in_checkout = _a.in_checkout, onCheckBoxChange = _a.onCheckBoxChange, onDeletePress = _a.onDeletePress, rest = __rest(_a, ["endereco", "onEditPress", "in_checkout", "onCheckBoxChange", "onDeletePress"]);
    var theme = restyle_1.useTheme();
    return (react_1["default"].createElement(restyle_2.Box, __assign({ p: "m", bg: "white", borderRadius: "m", marginVertical: "s" }, rest),
        react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 's' },
            react_1["default"].createElement(restyle_2.Text, { variant: "body2" }, endereco.nome),
            in_checkout ? react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onEditPress },
                react_1["default"].createElement(restyle_2.Text, { variant: 'body', color: 'primary' }, "Modificar")) : react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onDeletePress },
                react_1["default"].createElement(vector_icons_1.Entypo, { name: 'cross', size: 25, color: theme.colors.primary }))),
        react_1["default"].createElement(restyle_2.Box, { marginBottom: 'm' },
            react_1["default"].createElement(restyle_2.Text, { variant: 'body' },
                " ", endereco.endereco + ", " + endereco.cidade + ", " + endereco.estado + " " + endereco.cep + ", " + endereco.pais)),
        !in_checkout && react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", alignItems: "center", justifyContent: 'space-between' },
            react_1["default"].createElement(restyle_2.Box, { flexDirection: 'row', alignItems: 'center' },
                react_1["default"].createElement(react_native_bouncy_checkbox_1["default"], { fillColor: theme.colors.primary, unfillColor: theme.colors.background, onPress: onCheckBoxChange, useNativeDriver: true, iconStyle: { borderColor: theme.colors.gray }, isChecked: endereco.is_default }),
                react_1["default"].createElement(restyle_2.Text, { variant: 'smallGray' }, "Endere\u00E7o Padr\u00E3o")),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onEditPress },
                react_1["default"].createElement(restyle_2.Text, { variant: "body", color: "primary" }, in_checkout ? 'Mudar' : 'Editar')))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 2
    }
});
exports["default"] = EnderecoEnvioCard;
