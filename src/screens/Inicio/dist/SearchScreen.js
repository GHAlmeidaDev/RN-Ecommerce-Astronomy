"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var vector_icons_1 = require("@expo/vector-icons");
var restyle_1 = require("@shopify/restyle");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_native_reanimated_1 = require("react-native-reanimated");
var ProductCard_1 = require("../../components/cards/ProductCard");
var FilterView_1 = require("../../components/alls/FilterView");
var Input_1 = require("../../components/forms/form_elements/Input");
var Layout_1 = require("../../components/alls/Layout");
var BottomTab_1 = require("../../components/navigation/BottomTab");
var hooks_1 = require("../../redux/hooks");
var restyle_2 = require("../../utils/restyle");
var useKeyboardHeight_1 = require("../../utils/useKeyboardHeight");
var react_navigation_shared_element_1 = require("react-navigation-shared-element");
var _a = react_native_1.Dimensions.get("screen"), width = _a.width, height = _a.height;
var PRODUCT_WIDTH = width / 2;
var FILTER_VIEW_HEIGHT = height * 0.5;
var SearchScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var theme = restyle_1.useTheme();
    var filterTranslateY = react_native_reanimated_1.useSharedValue(FILTER_VIEW_HEIGHT + 15);
    var _b = useKeyboardHeight_1.useKeyboard(), keyboardHeight = _b[0], keyboardVisible = _b[1];
    var inputRef = react_1.createRef();
    var searchButtonRef = react_1.createRef();
    var storedProducts = hooks_1.useAppSelector(function (state) { return state.products.products; });
    var products_in_bag = hooks_1.useAppSelector(function (state) { return state.bag.products_in_bag; });
    var _c = react_1.useState([]), products = _c[0], setProducts = _c[1];
    var _d = react_1.useState(route.params.search_term ? route.params.search_term : ""), searchTerm = _d[0], setSearchTerm = _d[1];
    var _e = react_1.useState(products), list = _e[0], setList = _e[1];
    //Função organizar A-Z
    var handleOrderClick = function () {
        var newList = __spreadArrays(products);
        newList.sort(function (a, b) { return (a.display_name > b.display_name ? 1 : b.display_name > a.display_name ? -1 : 0); });
        setList(newList);
    };
    //Função organizar do menor para o maior
    var onLow = function () {
        var newList = __spreadArrays(products);
        newList.sort(function (a, b) { return (a.price > b.price ? 1 : b.price > a.price ? -1 : 0); });
        setList(newList);
        filterTranslateY.value = FILTER_VIEW_HEIGHT + 15;
    };
    //Função organizar do maior para o menor
    var onHigh = function () {
        var newList = __spreadArrays(products);
        newList.sort(function (a, b) { return (a.price < b.price ? 1 : b.price < a.price ? -1 : 0); });
        setList(newList);
        filterTranslateY.value = FILTER_VIEW_HEIGHT + 15;
    };
    react_1.useEffect(function () {
        if (route.params.search_term) {
            setProducts(function (prev) {
                return storedProducts.filter(function (p) {
                    return p.sub_category.name
                        .toLowerCase()
                        .includes(route.params.search_term.toLowerCase());
                });
            });
        }
    }, [route.params.search_term]);
    return (react_1["default"].createElement(Layout_1["default"], null,
        react_1["default"].createElement(FilterView_1["default"], { height: FILTER_VIEW_HEIGHT, width: width, translateY: filterTranslateY, onClose: function () {
                return (filterTranslateY.value = FILTER_VIEW_HEIGHT + 15);
            }, onHigh: onHigh, onLow: onLow, menor: 'Preço menor para o maior', maior: 'Preço maior para o menor' }),
        !keyboardVisible && (react_1["default"].createElement(BottomTab_1["default"], { elevation: 5, route_name: route.name, position: "absolute", bottom: 0, zIndex: 5555 })),
        react_1["default"].createElement(react_native_gesture_handler_1.FlatList, { contentContainerStyle: { marginBottom: height * 0.1, paddingHorizontal: theme.spacing.m }, ListHeaderComponent: react_1["default"].createElement(restyle_2.Box, { marginVertical: 'm', padding: 'm', borderRadius: 'm', bg: 'primary', elevation: 10 },
                react_1["default"].createElement(react_navigation_shared_element_1.SharedElement, { id: 'search-input' },
                    react_1["default"].createElement(Input_1["default"], { inputRef: inputRef, placeholder: "Procurar", textInputProps: {
                            value: searchTerm,
                            onChangeText: function (v) { return setSearchTerm(v); }
                        }, icon: react_1["default"].createElement(react_native_1.TouchableOpacity, { ref: searchButtonRef, onPress: function () {
                                return setProducts(function (prev) {
                                    return storedProducts.filter(function (p) {
                                        return p.sub_category.name.toLowerCase() ===
                                            searchTerm.toLowerCase();
                                    });
                                });
                            } },
                            react_1["default"].createElement(vector_icons_1.Ionicons, { name: "search", size: 25, color: theme.colors.primary })) })),
                products.length !== 0 && (react_1["default"].createElement(restyle_2.Box, { paddingHorizontal: "m", paddingVertical: 's', flexDirection: "row", justifyContent: "space-between", bg: "white", borderRadius: "s" },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return (filterTranslateY.value = 0); } },
                        react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", alignItems: "center" },
                            react_1["default"].createElement(vector_icons_1.Ionicons, { name: "filter-sharp", size: 24, color: theme.colors.darkColor }))),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleOrderClick },
                        react_1["default"].createElement(restyle_2.Box, { flexDirection: "row", alignItems: "center" },
                            react_1["default"].createElement(vector_icons_1.MaterialCommunityIcons, { name: "sort", size: 24, color: theme.colors.darkColor }),
                            react_1["default"].createElement(restyle_2.Text, { marginLeft: "s", variant: "body2", opacity: 0.7 }, "A-Z")))))), data: list, keyExtractor: function (p, i) { return p.id.toString(); }, numColumns: 2, scrollEventThrottle: 16, renderItem: function (_a) {
                var item = _a.item;
                return (react_1["default"].createElement(ProductCard_1["default"], { width: PRODUCT_WIDTH - theme.spacing.m * 2, is_in_bag: products_in_bag.includes(item.id), product: item, onAddToBagPress: function () { }, onImagePress: function () {
                        return navigation.navigate("Shop_Product_Detail", {
                            item: item
                        });
                    } }));
            } })));
};
exports["default"] = SearchScreen;
