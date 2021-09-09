"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var restyle_1 = require("@shopify/restyle");
var restyle_2 = require("../../utils/restyle");
var Input_1 = require("./form_elements/Input");
var Button_1 = require("./form_elements/Button");
var axios_1 = require("axios");
var vector_icons_1 = require("@expo/vector-icons");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var LoginForm = function (_a, _b) {
    var onSubmit = _a.onSubmit;
    var navigation = _b.navigation;
    var _c = react_1.useState('eve.holt@reqres.in'), email = _c[0], setEmail = _c[1];
    var _d = react_1.useState('cityslicka'), password = _d[0], setPassword = _d[1];
    var _e = react_1.useState(false), loading = _e[0], setLoading = _e[1];
    var _f = react_1.useState(false), isError = _f[0], setIsError = _f[1];
    var _g = react_1.useState(null), data = _g[0], setData = _g[1];
    var _h = react_1.useState(true), secure = _h[0], setSecure = _h[1];
    var theme = restyle_1.useTheme();
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            setLoading(true);
            setIsError(false);
            data = {
                email: email,
                password: password
            };
            axios_1["default"].post('https://reqres.in/api/login', data).then(function (res) {
                setData(res.data);
                onSubmit();
                setEmail('eve.holt@reqres.in');
                setPassword('cityslicka');
                setLoading(false);
                /* console.log('correto') */
            })["catch"](function (err) {
                setLoading(false);
                setIsError(true);
                /* console.log('erro') */
                async_storage_1["default"].setItem("@Mykey", email);
                async_storage_1["default"].setItem("@Mypass", password);
                react_native_1.Alert.alert('Email ou senha incorretos');
            });
            return [2 /*return*/];
        });
    }); };
    return (react_1["default"].createElement(restyle_2.Box, null,
        react_1["default"].createElement(Input_1["default"], { textInputProps: {
                onChangeText: function (text) { return setEmail(text); }
            }, value: email, placeholder: "E-mail", icon: email ? (react_1["default"].createElement(vector_icons_1.FontAwesome5, { name: "shopping-bag", size: 24, color: theme.colors.primary })) : (react_1["default"].createElement(vector_icons_1.MaterialIcons, { name: "error", size: 24, color: theme.colors.error })), secureTextEntry: false }),
        react_1["default"].createElement(Input_1["default"], { password: true, textInputProps: {
                onChangeText: function (text) { return setPassword(text); }
            }, value: password, placeholder: "Password", secureTextEntry: secure, icon: react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { setSecure(function (prev) { return !prev; }); } },
                react_1["default"].createElement(react_native_1.Text, null, secure ? react_1["default"].createElement(vector_icons_1.FontAwesome5, { name: "eye-slash", size: 24, color: theme.colors.primary }) : react_1["default"].createElement(vector_icons_1.FontAwesome5, { name: "eye", size: 24, color: theme.colors.primary }))) }),
        react_1["default"].createElement(Button_1["default"], { variant: "PRIMARY", title: "Entrar", onPress: handleSubmit, disabled: !email || !password })));
};
exports["default"] = LoginForm;
