"use strict";
var _a;
exports.__esModule = true;
exports.emptyBag = exports.removeFromBag = exports.incrementQuantity = exports.decrementQuantity = exports.addToBag = exports.bagSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var data_1 = require("../data");
var data_types_1 = require("../data_types");
// Define the initial state using that type
var initialState = {
    loading: false,
    carrinhoItems: [
        {
            product: data_1.PRODUCTS[0],
            quantity: 1,
            size: data_types_1.SIZES.M,
            color: "Preto"
        },
        {
            product: data_1.PRODUCTS[5],
            quantity: 1,
            size: data_types_1.SIZES.M,
            color: "Preto"
        },
    ],
    products_in_bag: [data_1.PRODUCTS[0].id, data_1.PRODUCTS[5].id],
    total: data_1.PRODUCTS[0].price + data_1.PRODUCTS[5].price,
    error: null
};
exports.bagSlice = toolkit_1.createSlice({
    name: "bag",
    initialState: initialState,
    reducers: {
        addToBag: function (state, action) {
            var _a, _b;
            var p = (_a = state.carrinhoItems) === null || _a === void 0 ? void 0 : _a.find(function (p) { return p.product.id === action.payload.product.id; });
            if (!p) {
                (_b = state.carrinhoItems) === null || _b === void 0 ? void 0 : _b.push({
                    product: action.payload.product,
                    quantity: 1,
                    size: action.payload.size,
                    color: action.payload.color
                });
                state.total = +(state.total + action.payload.product.price).toFixed(2);
                state.products_in_bag.push(action.payload.product.id);
            }
        },
        removeFromBag: function (state, action) {
            var _a;
            var item = (_a = state.carrinhoItems) === null || _a === void 0 ? void 0 : _a.find(function (p) { return p.product.id === action.payload; });
            if (item) {
                state.total = +(state.total -
                    item.product.price * item.quantity).toFixed(2);
                state.carrinhoItems = state.carrinhoItems.filter(function (s) { return s.product.id !== action.payload; });
                state.products_in_bag = state.products_in_bag.filter(function (p) { return p !== action.payload; });
            }
        },
        incrementQuantity: function (state, action) {
            var _a;
            var item = (_a = state.carrinhoItems) === null || _a === void 0 ? void 0 : _a.find(function (s) { return s.product.id === action.payload; });
            if (item) {
                item.quantity = item.quantity + 1;
                state.total = +(state.total + item.product.price).toFixed(2);
            }
        },
        decrementQuantity: function (state, action) {
            var _a;
            var item = (_a = state.carrinhoItems) === null || _a === void 0 ? void 0 : _a.find(function (s) { return s.product.id === action.payload; });
            if (item && item.quantity > 1) {
                item.quantity = item.quantity - 1;
                state.total = +(state.total - item.product.price).toFixed(2);
            }
        },
        emptyBag: function (state) {
            state.carrinhoItems = [];
            state.products_in_bag = [];
            state.total = 0;
        }
    }
});
exports.addToBag = (_a = exports.bagSlice.actions, _a.addToBag), exports.decrementQuantity = _a.decrementQuantity, exports.incrementQuantity = _a.incrementQuantity, exports.removeFromBag = _a.removeFromBag, exports.emptyBag = _a.emptyBag;
exports["default"] = exports.bagSlice.reducer;
