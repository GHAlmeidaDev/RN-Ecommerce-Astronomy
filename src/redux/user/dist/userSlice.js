"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
exports.__esModule = true;
exports.removeEnderecoEnvio = exports.editEnderecoEnvio = exports.addEnderecoEnvio = exports.addCompra = exports.userSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var data_1 = require("../data");
// Define the initial state using that type
var initialState = {
    loading: false,
    current_user: data_1.CURRENT_USER,
    error: null
};
exports.userSlice = toolkit_1.createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        addCompra: function (state, action) {
            state.current_user.orders = __spreadArrays([
                action.payload
            ], state.current_user.orders);
        },
        addEnderecoEnvio: function (state, action) {
            state.current_user.shipping_addresses = __spreadArrays([
                action.payload
            ], state.current_user.shipping_addresses);
        },
        removeEnderecoEnvio: function (state, action) {
            state.current_user.shipping_addresses =
                state.current_user.shipping_addresses.filter(function (s) { return s.id !== action.payload; });
        },
        editEnderecoEnvio: function (state, action) {
            var shipp = state.current_user.shipping_addresses.find(function (s) { return s.id === action.payload.id; });
            if (shipp) {
                shipp.endereco = action.payload.endereco;
                shipp.cidade = action.payload.cidade;
                shipp.pais = action.payload.pais;
                shipp.nome = action.payload.nome;
                shipp.estado = action.payload.estado;
            }
        }
    }
});
exports.addCompra = (_a = exports.userSlice.actions, _a.addCompra), exports.addEnderecoEnvio = _a.addEnderecoEnvio, exports.editEnderecoEnvio = _a.editEnderecoEnvio, exports.removeEnderecoEnvio = _a.removeEnderecoEnvio;
exports["default"] = exports.userSlice.reducer;
