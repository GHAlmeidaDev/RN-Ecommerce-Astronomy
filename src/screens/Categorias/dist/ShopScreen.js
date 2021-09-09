"use strict";
exports.__esModule = true;
var vector_icons_1 = require("@expo/vector-icons");
var restyle_1 = require("@shopify/restyle");
var react_1 = require("react");
var react_native_1 = require("react-native");
var CategoriaCard_1 = require("../../components/cards/CategoriaCard");
var Layout_1 = require("../../components/alls/Layout");
var BottomTab_1 = require("../../components/navigation/BottomTab");
var Header_1 = require("../../components/navigation/Header");
var data_1 = require("../../redux/data");
var restyle_2 = require("../../utils/restyle");
var _a = react_native_1.Dimensions.get("screen"), width = _a.width, height = _a.height;
var HEADER_HEIGHT = height * .12;
var ShopScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var theme = restyle_1.useTheme();
    return (react_1["default"].createElement(Layout_1["default"], null,
        react_1["default"].createElement(Header_1["default"], { height: HEADER_HEIGHT, elevation: 2, title: "Categorias", paddingHorizontal: 'm', position: "absolute", top: 0, left_icon: react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate("Main", { screen: "Home" }); } },
                react_1["default"].createElement(vector_icons_1.Ionicons, { name: "arrow-back", size: 30, color: theme.colors.darkColor })) }),
        react_1["default"].createElement(BottomTab_1["default"], { elevation: 2, route_name: route.name, position: "absolute", bottom: 0 }),
        react_1["default"].createElement(react_native_1.ScrollView, { style: {
                flex: 1,
                marginBottom: height * 0.1,
                marginTop: HEADER_HEIGHT - theme.spacing.l
            } }, data_1.CATEGORIES.map(function (c) { return (react_1["default"].createElement(restyle_2.Box, { key: c.id, justifyContent: "center", alignItems: "center", marginVertical: "s" },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                    return navigation.navigate("Shop_Category", {
                        category: c
                    });
                } },
                react_1["default"].createElement(CategoriaCard_1["default"], { width: width - theme.spacing.m * 2, image: { uri: c.image }, title: c.display_name, height: 200 })))); }))));
};
exports["default"] = ShopScreen;
