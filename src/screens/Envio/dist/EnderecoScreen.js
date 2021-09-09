"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Layout_1 = require("../../components/alls/Layout");
var BottomTab_1 = require("../../components/navigation/BottomTab");
var restyle_1 = require("@shopify/restyle");
var Header_1 = require("../../components/navigation/Header");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var vector_icons_1 = require("@expo/vector-icons");
var restyle_2 = require("../../utils/restyle");
var EnderecoEnvioCard_1 = require("../../components/cards/EnderecoEnvioCard");
var hooks_1 = require("../../redux/hooks");
var userSlice_1 = require("../../redux/user/userSlice");
var framer_motion_1 = require("framer-motion");
var components_1 = require("@motify/components");
var react_native_2 = require("react-native");
var _a = react_native_1.Dimensions.get("screen"), width = _a.width, height = _a.height;
var HEADER_HEIGHT = height * 0.12;
var EnderecoScreen = function (_a) {
    var route = _a.route, navigation = _a.navigation;
    var theme = restyle_1.useTheme();
    var dispatch = hooks_1.useAppDispatch();
    var enderecoEnvio = hooks_1.useAppSelector(function (state) { var _a; return (_a = state.user.current_user) === null || _a === void 0 ? void 0 : _a.shipping_addresses; });
    return (react_1["default"].createElement(Layout_1["default"], { bg: enderecoEnvio.length > 0 ? 'background' : 'white' },
        react_1["default"].createElement(Header_1["default"], { height: HEADER_HEIGHT, elevation: 2, title: "Endere\u00E7os para envio", position: "absolute", paddingHorizontal: "m", top: 0, left_icon: react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () { return navigation.navigate("Profile_Main"); } },
                react_1["default"].createElement(vector_icons_1.Ionicons, { name: "arrow-back", size: 30, color: theme.colors.darkColor })), right_icon: react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () {
                    return navigation.navigate("Profile_New_Address", {
                        shipping_address: null
                    });
                } },
                react_1["default"].createElement(vector_icons_1.Entypo, { name: "plus", size: 30, color: theme.colors.darkColor })) }),
        react_1["default"].createElement(BottomTab_1["default"], { elevation: 5, route_name: route.name, position: "absolute", bottom: 0 }),
        react_1["default"].createElement(react_native_1.ScrollView, { style: {
                flex: 1,
                marginBottom: height * 0.1,
                marginTop: HEADER_HEIGHT - theme.spacing.l
            } },
            react_1["default"].createElement(restyle_2.Box, { marginHorizontal: "s" },
                react_1["default"].createElement(framer_motion_1.AnimatePresence, null, enderecoEnvio && enderecoEnvio.length > 0 ? (enderecoEnvio.map(function (sh, i) { return (react_1["default"].createElement(components_1.MotiView, { key: sh.id, from: {
                        opacity: 0,
                        translateX: -width
                    }, animate: { opacity: 1, translateX: 0 }, exit: {
                        opacity: 0,
                        translateX: -width
                    }, transition: {
                        type: "timing",
                        duration: 300,
                        delay: i * 10
                    }, exitTransition: {
                        type: "timing",
                        duration: 300
                    } },
                    react_1["default"].createElement(EnderecoEnvioCard_1["default"], { elevation: 1, endereco: sh, onCheckBoxChange: function (v) { }, onEditPress: function () {
                            return navigation.navigate("Profile_New_Address", { shipping_address: sh });
                        }, onDeletePress: function () {
                            return dispatch(userSlice_1.removeEnderecoEnvio(sh.id));
                        } }))); })) : (react_1["default"].createElement(components_1.MotiView, { from: {
                        opacity: 0
                    }, animate: {
                        opacity: 1
                    }, delay: 300 },
                    react_1["default"].createElement(restyle_2.Box, { flex: 1, justifyContent: "center", alignItems: "center" },
                        react_1["default"].createElement(react_native_2.Image, { source: require("../../../assets/empty.png"), resizeMode: "contain", style: {
                                width: width * 0.6,
                                height: height * 0.6
                            } })))))))));
};
exports["default"] = EnderecoScreen;
