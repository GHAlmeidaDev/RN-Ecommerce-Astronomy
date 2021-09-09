"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Layout_1 = require("../../components/Layout");
var restyle_1 = require("../../utils/restyle");
var ExitIcon_1 = require("../../components/forms/form_elements/ExitIcon");
var expo_constants_1 = require("expo-constants");
var restyle_2 = require("@shopify/restyle");
var vector_icons_1 = require("@expo/vector-icons");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_native_reanimated_1 = require("react-native-reanimated");
var Selectables_1 = require("../../components/alls/Selectables");
var SelectableColors_1 = require("../../components/alls/SelectableColors");
var hooks_1 = require("../../redux/hooks");
var bagSlice_1 = require("../../redux/carrinho/bagSlice");
var favouriteSlice_1 = require("../../redux/favourite/favouriteSlice");
var ImageCarousel_1 = require("../../components/alls/ImageCarousel");
var AnimatedBox = react_native_reanimated_1["default"].createAnimatedComponent(restyle_1.Box);
var _a = react_native_1.Dimensions.get("screen"), width = _a.width, height = _a.height;
var IMAGE_HEIGHT = height * 0.6;
var HIDDEN_VIEW_HEIGHT = height * 0.4;
var ProductDetail = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var theme = restyle_2.useTheme();
    var dispatch = hooks_1.useAppDispatch();
    var _b = react_1.useState(null), actionType = _b[0], setActionType = _b[1];
    var _c = react_1.useState(route.params.item.has_size ? route.params.item.sizes[0] : "S"), selectedSize = _c[0], setSelectedSize = _c[1];
    var _d = react_1.useState(route.params.item.has_size ? route.params.item.color[0] : "Black"), selectedColor = _d[0], setSelectedColor = _d[1];
    var _e = react_1.useState(false), hiddenViewShow = _e[0], setHiddenViewShow = _e[1];
    var hiddenViewTranslateY = react_native_reanimated_1.useSharedValue(HIDDEN_VIEW_HEIGHT + 15);
    var hiddenViewStyles = react_native_reanimated_1.useAnimatedStyle(function () { return ({
        transform: [
            {
                translateY: react_native_reanimated_1.withTiming(hiddenViewTranslateY.value, {
                    easing: react_native_reanimated_1.Easing.inOut(react_native_reanimated_1.Easing.ease)
                })
            },
        ]
    }); });
    return (react_1["default"].createElement(Layout_1["default"], { no_padding: true },
        react_1["default"].createElement(AnimatedBox, { position: "absolute", bg: "background", zIndex: 555555, bottom: 0, width: width, height: HIDDEN_VIEW_HEIGHT, borderTopRightRadius: "xl", borderTopLeftRadius: "xl", elevation: 15, style: hiddenViewStyles },
            react_1["default"].createElement(restyle_1.Box, { position: "absolute", top: -15, left: width / 2 - 15, zIndex: 0 },
                react_1["default"].createElement(ExitIcon_1["default"], { onPress: function () {
                        setActionType(null);
                        setHiddenViewShow(false);
                        hiddenViewTranslateY.value =
                            HIDDEN_VIEW_HEIGHT + 15;
                    } })),
            react_1["default"].createElement(react_native_1.ScrollView, { style: { flex: 1 } },
                react_1["default"].createElement(restyle_1.Box, { paddingTop: "xl" },
                    hiddenViewShow && route.params.item.has_size && (react_1["default"].createElement(restyle_1.Box, { marginBottom: "m" },
                        react_1["default"].createElement(restyle_1.Text, { marginHorizontal: "s", marginBottom: "s", variant: "body2", opacity: 0.5 }, "SELECIONE O TAMANHO"),
                        react_1["default"].createElement(Selectables_1["default"], { value: selectedSize, items: route.params.item.sizes, onChange: function (v) { return setSelectedSize(v); } }))),
                    hiddenViewShow && route.params.item.has_color && (react_1["default"].createElement(restyle_1.Box, null,
                        react_1["default"].createElement(restyle_1.Text, { marginHorizontal: "s", marginBottom: "s", variant: "body2", opacity: 0.5 }, "SELECIONE A COR"),
                        react_1["default"].createElement(SelectableColors_1["default"], { value: selectedColor, items: route.params.item.color, onChange: function (v) { return setSelectedColor(v); } }))),
                    !route.params.item.has_color &&
                        !route.params.item.has_size && (react_1["default"].createElement(restyle_1.Box, { p: "m" },
                        react_1["default"].createElement(restyle_1.Text, { textAlign: "center", variant: "description" }, "Sem tamanhos ou cores para esse produto"))),
                    react_1["default"].createElement(restyle_1.Box, null,
                        react_1["default"].createElement(restyle_1.Box, { marginHorizontal: "s", marginTop: "m", flex: 1, bg: actionType === "BAG" ? "gray4" : "white", borderWidth: actionType === "BAG" ? 0 : 1, borderRadius: "m" },
                            react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () {
                                    if (actionType === "BAG") {
                                        dispatch(bagSlice_1.addToBag({
                                            product: route.params.item,
                                            color: selectedColor,
                                            size: selectedSize,
                                            quantity: 1
                                        }));
                                        hiddenViewTranslateY.value =
                                            HIDDEN_VIEW_HEIGHT + 15;
                                        navigation.goBack();
                                    }
                                    else {
                                        dispatch(favouriteSlice_1.addToFavourite({
                                            product: route.params.item,
                                            color: selectedColor,
                                            size: selectedSize
                                        }));
                                        hiddenViewTranslateY.value =
                                            HIDDEN_VIEW_HEIGHT + 15;
                                        navigation.goBack();
                                    }
                                } },
                                react_1["default"].createElement(restyle_1.Box, { paddingVertical: "s", justifyContent: "center", alignItems: "center" },
                                    react_1["default"].createElement(vector_icons_1.Entypo, { name: actionType === "BAG"
                                            ? "shopping-bag"
                                            : "heart-outlined", size: 20, color: actionType === "BAG"
                                            ? theme.colors.white
                                            : theme.colors.darkColor })))))))),
        react_1["default"].createElement(react_native_1.ScrollView, null,
            react_1["default"].createElement(restyle_1.Box, { width: width, height: IMAGE_HEIGHT, borderBottomLeftRadius: "l", borderBottomRightRadius: "l", overflow: "hidden" },
                react_1["default"].createElement(restyle_1.Box, { zIndex: 555, position: "absolute", top: expo_constants_1["default"].statusBarHeight + theme.spacing.m, right: theme.spacing.m },
                    react_1["default"].createElement(ExitIcon_1["default"], { onPress: function () { return navigation.goBack(); } })),
                react_1["default"].createElement(ImageCarousel_1["default"], { productId: route.params.item.id, thumbnail: route.params.item.thumbnail, images: route.params.item.images, imageHeight: IMAGE_HEIGHT })),
            react_1["default"].createElement(restyle_1.Box, { flexDirection: "row", justifyContent: "space-between", margin: "m" },
                react_1["default"].createElement(restyle_1.Box, { flex: 2 },
                    react_1["default"].createElement(restyle_1.Text, { variant: "description", opacity: 0.5 }, route.params.item.brand.display_name),
                    react_1["default"].createElement(restyle_1.Text, { variant: "headline3" }, route.params.item.display_name)),
                react_1["default"].createElement(restyle_1.Box, { flex: 1, alignItems: "flex-end" },
                    react_1["default"].createElement(restyle_1.Text, { variant: "body2" }, "R$" + route.params.item.price))),
            route.params.item.has_size && (react_1["default"].createElement(restyle_1.Box, null,
                react_1["default"].createElement(restyle_1.Text, { margin: "m", variant: "body2", opacity: 0.5 }, "TAMANHOS DISPON\u00CDVEIS"),
                react_1["default"].createElement(restyle_1.Box, { flexDirection: "row", flexWrap: "wrap", marginHorizontal: "m" }, route.params.item.sizes.map(function (s, i) { return (react_1["default"].createElement(restyle_1.Box, { key: i, marginRight: "s", marginBottom: "s", bg: "darkColor", borderRadius: "m", justifyContent: "center", alignItems: "center", width: 100, height: 40 },
                    react_1["default"].createElement(restyle_1.Text, { color: "white" }, s))); })))),
            route.params.item.has_color && (react_1["default"].createElement(restyle_1.Box, null,
                react_1["default"].createElement(restyle_1.Text, { margin: "m", variant: "body2", opacity: 0.5 }, "CORES DISPON\u00CDVEIS"),
                react_1["default"].createElement(restyle_1.Box, { flexDirection: "row", flexWrap: "wrap", marginHorizontal: "m" }, route.params.item.color.map(function (c, i) { return (react_1["default"].createElement(restyle_1.Box, { key: i, marginRight: "s", style: {
                        backgroundColor: c.toLowerCase(),
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        overflow: "hidden"
                    } })); })))),
            react_1["default"].createElement(restyle_1.Box, null,
                react_1["default"].createElement(restyle_1.Text, { margin: "m", variant: "body2", opacity: 0.5 }, "DETALHES DO PRODUTO"),
                react_1["default"].createElement(restyle_1.Box, null, route.params.item.details.detail_list.map(function (d, i) { return (react_1["default"].createElement(restyle_1.Box, { marginBottom: "s", key: i, marginHorizontal: "m" },
                    react_1["default"].createElement(restyle_1.Text, { variant: "body", opacity: 0.5 }, d))); }))),
            react_1["default"].createElement(restyle_1.Box, { marginVertical: "m", flexDirection: "row" },
                react_1["default"].createElement(restyle_1.Box, { marginHorizontal: "m", flex: 1 },
                    react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () {
                            setActionType("FAVOURITE");
                            hiddenViewTranslateY.value = 0;
                            setHiddenViewShow(true);
                        } },
                        react_1["default"].createElement(restyle_1.Box, { paddingVertical: "s", justifyContent: "center", alignItems: "center", borderWidth: 1, bg: "white", borderRadius: "m" },
                            react_1["default"].createElement(vector_icons_1.Entypo, { name: "heart-outlined", size: 20, color: theme.colors.darkColor })))),
                react_1["default"].createElement(restyle_1.Box, { marginHorizontal: "m", flex: 1, bg: "gray4", borderRadius: "m" },
                    react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () {
                            setActionType("BAG");
                            hiddenViewTranslateY.value = 0;
                            setHiddenViewShow(true);
                        } },
                        react_1["default"].createElement(restyle_1.Box, { paddingVertical: "s", justifyContent: "center", alignItems: "center" },
                            react_1["default"].createElement(vector_icons_1.Fontisto, { name: "shopping-bag", size: 20, color: theme.colors.white }))))))));
};
exports["default"] = ProductDetail;
