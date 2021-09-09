"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var axios_1 = require("axios");
var restyle_1 = require("@shopify/restyle");
var restyle_2 = require("../../utils/restyle");
var Input_1 = require("./form_elements/Input");
var Button_1 = require("./form_elements/Button");
var vector_icons_1 = require("@expo/vector-icons");
var RegisterForm = function (_a, _b) {
    var onSubmit = _a.onSubmit;
    var navigation = _b.navigation;
    var _c = react_1.useState('eve.holt@reqres.in'), email = _c[0], setEmail = _c[1];
    var _d = react_1.useState('pistol'), password = _d[0], setPassword = _d[1];
    var _e = react_1.useState(false), loading = _e[0], setLoading = _e[1];
    var _f = react_1.useState(false), isError = _f[0], setIsError = _f[1];
    var _g = react_1.useState(null), data = _g[0], setData = _g[1];
    var _h = react_1.useState(true), secure = _h[0], setSecure = _h[1];
    var theme = restyle_1.useTheme();
    var handleSubmit = function () {
        setLoading(true);
        setIsError(false);
        var data = {
            email: email,
            password: password
        };
        axios_1["default"].post('https://reqres.in/api/register', data).then(function (res) {
            setData(res.data);
            onSubmit();
            setEmail('eve.holt@reqres.in');
            setPassword('pistol');
            setLoading(false);
            console.log('correto');
        })["catch"](function (err) {
            setLoading(false);
            setIsError(true);
            console.log('erro');
            react_native_1.Alert.alert("Email inv\u00E1lido");
        });
    };
    return (react_1["default"].createElement(restyle_2.Box, null,
        react_1["default"].createElement(restyle_2.Box, null,
            react_1["default"].createElement(Input_1["default"], { value: email, placeholder: "E-mail", textInputProps: {
                    onChangeText: function (text) { return setEmail(text); }
                }, icon: email ? (react_1["default"].createElement(vector_icons_1.FontAwesome5, { name: "shopping-bag", size: 24, color: theme.colors.primary })) : (react_1["default"].createElement(vector_icons_1.MaterialIcons, { name: "error", size: 24, color: theme.colors.error })), secureTextEntry: false }),
            react_1["default"].createElement(Input_1["default"], { password: true, textInputProps: {
                    onChangeText: function (text) { return setPassword(text); }
                }, value: password, placeholder: "Password", secureTextEntry: secure, icon: react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { setSecure(function (prev) { return !prev; }); } }, secure ? react_1["default"].createElement(vector_icons_1.FontAwesome5, { name: "eye-slash", size: 24, color: theme.colors.primary }) : react_1["default"].createElement(vector_icons_1.FontAwesome5, { name: "eye", size: 24, color: theme.colors.primary })) })),
        react_1["default"].createElement(Button_1["default"], { variant: "PRIMARY", title: "Cadastrar", onPress: handleSubmit, disabled: (!email || !password) })));
};
exports["default"] = RegisterForm;
