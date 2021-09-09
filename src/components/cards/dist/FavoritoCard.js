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
var vector_icons_1 = require("@expo/vector-icons");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_navigation_shared_element_1 = require("react-navigation-shared-element");
var hooks_1 = require("../../redux/hooks");
var IconButton_1 = require("../forms/form_elements/IconButton");
var _a = react_native_1.Dimensions.get("screen"), width = _a.width, height = _a.height;
var FavoritoCard = function (_a) {
    var favouriteItem = _a.favouriteItem, onDeletePress = _a.onDeletePress, onImagePress = _a.onImagePress, onAddToBagPress = _a.onAddToBagPress, is_in_bag = _a.is_in_bag, rest = __rest(_a, ["favouriteItem", "onDeletePress", "onImagePress", "onAddToBagPress", "is_in_bag"]);
    var theme = restyle_1.useTheme();
    var dispatch = hooks_1.useAppDispatch();
    return (react_1["default"].createElement(restyle_2.Box, __assign({ borderRadius: "s", overflow: "hidden", marginVertical: "s", flexDirection: "row", bg: "white" }, rest),
        react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: onImagePress },
            react_1["default"].createElement(react_navigation_shared_element_1.SharedElement, { id: "image-" + favouriteItem.product.id },
                react_1["default"].createElement(react_native_1.Image, { style: { width: width * 0.3, height: 150 }, width: width * 0.3, height: 150, resizeMode: "cover", source: { uri: favouriteItem.product.thumbnail } }))),
        react_1["default"].createElement(restyle_2.Box, { flex: 1, width: width * 0.7, justifyContent: "space-between" },
            react_1["default"].createElement(restyle_2.Box, null,
                react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
                    react_1["default"].createElement(restyle_2.Box, { flex: 10 },
                        react_1["default"].createElement(restyle_2.Text, { paddingHorizontal: "m", paddingVertical: "s", variant: "body2" }, favouriteItem.product.display_name)),
                    react_1["default"].createElement(restyle_2.Box, { flex: 1, marginHorizontal: "m" },
                        react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: onDeletePress },
                            react_1["default"].createElement(vector_icons_1.Entypo, { name: "cross", size: 24, color: theme.colors.primary })))),
                react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", paddingHorizontal: "m" },
                    react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", alignItems: "center" },
                        react_1["default"].createElement(restyle_2.Text, { variant: "description", opacity: 0.5 }, "Cor: "),
                        react_1["default"].createElement(restyle_2.Text, { variant: "body" }, favouriteItem.color)),
                    react_1["default"].createElement(restyle_2.Box, { marginLeft: "s", flexDirection: "row", alignItems: "center" },
                        react_1["default"].createElement(restyle_2.Text, { variant: "description", opacity: 0.5 }, "Tamanho: "),
                        react_1["default"].createElement(restyle_2.Text, { variant: "body" }, favouriteItem.size)))),
            react_1["default"].createElement(restyle_2.Box, { paddingBottom: "s", flexDirection: "row", paddingHorizontal: "m", justifyContent: "space-between" },
                react_1["default"].createElement(restyle_2.Text, { marginBottom: 'm', variant: "body" }, "R$" + favouriteItem.product.price),
                !is_in_bag && (react_1["default"].createElement(restyle_2.Box, { position: "absolute", bottom: theme.spacing.m, right: theme.spacing.m, flexDirection: "row", alignItems: "center" },
                    react_1["default"].createElement(IconButton_1["default"], { elevation: 10, width: 30, height: 30, bg: "primary", icon: react_1["default"].createElement(vector_icons_1.Entypo, { name: "shopping-bag", size: 20, color: "#ffffff" }), onPress: onAddToBagPress })))))));
};
exports["default"] = FavoritoCard;
