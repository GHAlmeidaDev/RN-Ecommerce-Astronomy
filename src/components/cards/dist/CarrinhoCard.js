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
var restyle_1 = require("@shopify/restyle");
var restyle_2 = require("../../utils/restyle");
var carrinhoSlice_1 = require("../../redux/carrinho/carrinhoSlice");
var vector_icons_1 = require("@expo/vector-icons");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_navigation_shared_element_1 = require("react-navigation-shared-element");
var hooks_1 = require("../../redux/hooks");
var width = react_native_1.Dimensions.get("screen").width;
var CarrinhoCard = function (_a) {
    var bagItem = _a.bagItem, onDeletePress = _a.onDeletePress, onImagePress = _a.onImagePress, rest = __rest(_a, ["bagItem", "onDeletePress", "onImagePress"]);
    var theme = restyle_1.useTheme();
    var dispatch = hooks_1.useAppDispatch();
    return (react_1["default"].createElement(restyle_2.Box, __assign({ borderRadius: 's', overflow: 'hidden', marginVertical: "s", flexDirection: "row", bg: "white" }, rest),
        react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: onImagePress },
            react_1["default"].createElement(react_navigation_shared_element_1.SharedElement, { id: "image-" + bagItem.product.id },
                react_1["default"].createElement(react_native_1.Image, { style: { width: width * 0.3, height: 150 }, width: width * 0.3, height: 150, resizeMode: "cover", source: { uri: bagItem.product.thumbnail } }))),
        react_1["default"].createElement(restyle_2.Box, { flex: 1, width: width * 0.7, justifyContent: "space-between" },
            react_1["default"].createElement(restyle_2.Box, null,
                react_1["default"].createElement(restyle_2.Box, { flex: 1, paddingHorizontal: 'm', flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
                    react_1["default"].createElement(restyle_2.Box, { flex: 10 },
                        react_1["default"].createElement(restyle_2.Text, { paddingVertical: "s", variant: "body2" }, bagItem.product.display_name)),
                    react_1["default"].createElement(restyle_2.Box, { flex: 1, marginHorizontal: 'm' },
                        react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: onDeletePress },
                            react_1["default"].createElement(vector_icons_1.Entypo, { name: "cross", size: 24, color: theme.colors.primary })))),
                react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", paddingHorizontal: "m" },
                    react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", alignItems: "center" },
                        react_1["default"].createElement(restyle_2.Text, { variant: "description", opacity: 0.5 }, "Color: "),
                        react_1["default"].createElement(restyle_2.Text, { variant: "body" }, bagItem.color)),
                    react_1["default"].createElement(restyle_2.Box, { marginLeft: "s", flexDirection: "row", alignItems: "center" },
                        react_1["default"].createElement(restyle_2.Text, { variant: "description", opacity: 0.5 }, "Tamanho: "),
                        react_1["default"].createElement(restyle_2.Text, { variant: "body" }, bagItem.size)))),
            react_1["default"].createElement(restyle_2.Box, { paddingBottom: "s", flexDirection: "row", paddingHorizontal: "s", justifyContent: "space-between", alignItems: "center" },
                react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", alignItems: "center" },
                    react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () {
                            return dispatch(carrinhoSlice_1.decrementQuantity(bagItem.product.id));
                        } },
                        react_1["default"].createElement(vector_icons_1.MaterialIcons, { name: "arrow-left", size: 30, color: "black" })),
                    react_1["default"].createElement(restyle_2.Text, { variant: "body" }, bagItem.quantity),
                    react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () {
                            return dispatch(carrinhoSlice_1.incrementQuantity(bagItem.product.id));
                        } },
                        react_1["default"].createElement(vector_icons_1.MaterialIcons, { name: "arrow-right", size: 30, color: "black" }))),
                react_1["default"].createElement(restyle_2.Text, { variant: "body" }, "R$" + bagItem.product.price)))));
};
exports["default"] = react_1["default"].memo(CarrinhoCard);
