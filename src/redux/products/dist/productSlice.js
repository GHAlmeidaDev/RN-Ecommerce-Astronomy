"use strict";
var _a;
exports.__esModule = true;
exports.productSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var data_1 = require("../data");
// Define the initial state using that type
var initialState = {
    loading: false,
    products: data_1.PRODUCTS,
    error: null
};
exports.productSlice = toolkit_1.createSlice({
    name: "products",
    initialState: initialState,
    reducers: {}
});
exports._b = _a = exports.productSlice.actions;
exports["default"] = exports.productSlice.reducer;
