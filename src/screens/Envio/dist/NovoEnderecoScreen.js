"use strict";
exports.__esModule = true;
var vector_icons_1 = require("@expo/vector-icons");
var restyle_1 = require("@shopify/restyle");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var Button_1 = require("../../components/forms/form_elements/Button");
var Input_1 = require("../../components/forms/form_elements/Input");
var Layout_1 = require("../../components/alls/Layout");
var Header_1 = require("../../components/navigation/Header");
var hooks_1 = require("../../redux/hooks");
var userSlice_1 = require("../../redux/user/userSlice");
var restyle_2 = require("../../utils/restyle");
var _a = react_native_1.Dimensions.get("screen"), width = _a.width, height = _a.height;
var HEADER_HEIGHT = height * 0.12;
var NovoEnderecoScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var shipping_address = route.params.shipping_address;
    var theme = restyle_1.useTheme();
    var dispatch = hooks_1.useAppDispatch();
    var _b = react_1.useState(shipping_address ? shipping_address.nome : ""), nome = _b[0], setNome = _b[1];
    var _c = react_1.useState(shipping_address ? shipping_address.endereco : ""), endereco = _c[0], setEndereco = _c[1];
    var _d = react_1.useState(shipping_address ? shipping_address.cidade : ""), cidade = _d[0], setCidade = _d[1];
    var _e = react_1.useState(shipping_address ? shipping_address.estado : ""), estado = _e[0], setEstado = _e[1];
    var _f = react_1.useState(shipping_address ? shipping_address.cep : ""), cep = _f[0], setCep = _f[1];
    var _g = react_1.useState(shipping_address ? shipping_address.pais : ""), pais = _g[0], setPais = _g[1];
    var handleSubmit = function () {
        if (shipping_address) {
            dispatch(userSlice_1.editEnderecoEnvio({
                id: shipping_address.id,
                endereco: endereco,
                cidade: cidade,
                pais: pais,
                estado: estado,
                nome: nome,
                cep: +cep,
                is_default: shipping_address.is_default
            }));
            navigation.navigate('Profile_ShippingAddresses');
        }
        else {
            dispatch(userSlice_1.addEnderecoEnvio({
                id: Math.floor(Math.random() * 100),
                endereco: endereco,
                cidade: cidade,
                pais: pais,
                estado: estado,
                nome: nome,
                cep: +cep,
                is_default: false
            }));
            navigation.navigate('Profile_ShippingAddresses');
        }
    };
    return (react_1["default"].createElement(Layout_1["default"], null,
        react_1["default"].createElement(Header_1["default"], { height: HEADER_HEIGHT, elevation: 2, paddingHorizontal: 'm', title: shipping_address ? 'Editar Endereço' : "Novo Endereço", position: "absolute", top: 0, left_icon: react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () {
                    return navigation.navigate("Profile_ShippingAddresses");
                } },
                react_1["default"].createElement(vector_icons_1.Ionicons, { name: "arrow-back", size: 30, color: theme.colors.darkColor })) }),
        react_1["default"].createElement(react_native_1.ScrollView, { style: {
                flex: 1,
                marginTop: HEADER_HEIGHT + theme.spacing.s
            } },
            react_1["default"].createElement(restyle_2.Box, { marginHorizontal: "m" },
                react_1["default"].createElement(Input_1["default"], { placeholder: "Nome Completo", textInputProps: {
                        value: nome,
                        onChangeText: function (v) { return setNome(v); }
                    } })),
            react_1["default"].createElement(restyle_2.Box, { marginHorizontal: "m" },
                react_1["default"].createElement(Input_1["default"], { placeholder: "Endere\u00E7o", textInputProps: {
                        value: endereco,
                        onChangeText: function (v) { return setEndereco(v); }
                    } })),
            react_1["default"].createElement(restyle_2.Box, { marginHorizontal: "m" },
                react_1["default"].createElement(Input_1["default"], { placeholder: "Cidade", textInputProps: {
                        value: cidade,
                        onChangeText: function (v) { return setCidade(v); }
                    } })),
            react_1["default"].createElement(restyle_2.Box, { marginHorizontal: "m" },
                react_1["default"].createElement(Input_1["default"], { placeholder: "Estado", textInputProps: {
                        value: estado,
                        onChangeText: function (v) { return setEstado(v); }
                    } })),
            react_1["default"].createElement(restyle_2.Box, { marginHorizontal: "m" },
                react_1["default"].createElement(Input_1["default"], { placeholder: "CEP", textInputProps: {
                        value: cep.toString(),
                        keyboardType: 'numeric',
                        onChangeText: function (v) { return setCep(v); }
                    } })),
            react_1["default"].createElement(restyle_2.Box, { marginHorizontal: "m" },
                react_1["default"].createElement(Input_1["default"], { placeholder: "Pa\u00EDs", textInputProps: {
                        value: pais,
                        onChangeText: function (v) { return setPais(v); }
                    } })),
            react_1["default"].createElement(restyle_2.Box, { marginHorizontal: "m" },
                react_1["default"].createElement(Button_1["default"], { variant: "PRIMARY", title: "Salvar", onPress: handleSubmit })))));
};
exports["default"] = NovoEnderecoScreen;
