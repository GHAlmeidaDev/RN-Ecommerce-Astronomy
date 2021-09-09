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
var restyle_1 = require("../../utils/restyle");
var data_types_1 = require("../../redux/data_types");
var Button_1 = require("../forms/form_elements/Button");
var CompraCard = function (_a) {
    var order = _a.order, onDetailPress = _a.onDetailPress, rest = __rest(_a, ["order", "onDetailPress"]);
    return (react_1["default"].createElement(restyle_1.Box, __assign({ p: "m", bg: "white", borderRadius: "m", marginVertical: "s" }, rest),
        react_1["default"].createElement(restyle_1.Box, { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: "m" },
            react_1["default"].createElement(restyle_1.Text, { variant: "body2" }, "C\u00F3digo de Rastreamento: " + order.tracking_number)),
        react_1["default"].createElement(restyle_1.Box, { flexDirection: 'row', alignItems: 'center' },
            react_1["default"].createElement(restyle_1.Text, { variant: 'description' }, "Data:"),
            react_1["default"].createElement(restyle_1.Text, { ml: 's', variant: "body" }, order.date)),
        react_1["default"].createElement(restyle_1.Box, { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
            react_1["default"].createElement(restyle_1.Text, { variant: "body", opacity: 0.6 },
                "Items:",
                " ",
                react_1["default"].createElement(restyle_1.Text, { variant: "body", fontWeight: "bold" }, order.order_items.length)),
            react_1["default"].createElement(restyle_1.Text, { variant: "body", opacity: 0.6 },
                "Total:",
                " ",
                react_1["default"].createElement(restyle_1.Text, { variant: "body", fontWeight: "bold" }, "R$" + order.total_amount))),
        react_1["default"].createElement(restyle_1.Box, { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "m" },
            react_1["default"].createElement(Button_1["default"], { title: "DETALHES", variant: "DEFAULT", onPress: onDetailPress, marginVertical: 's' }),
            react_1["default"].createElement(restyle_1.Text, { variant: "body", color: order.status === data_types_1.OrderStatus.SUCESSO
                    ? "success"
                    : order.status === data_types_1.OrderStatus.PENDENTE
                        ? "darkColor"
                        : "error" }, order.status))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    }
});
exports["default"] = CompraCard;
