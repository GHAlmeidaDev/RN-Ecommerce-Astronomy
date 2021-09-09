"use strict";
var _a;
exports.__esModule = true;
exports.removeFromFavourite = exports.addToFavourite = exports.favouriteSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var data_1 = require("../data");
var data_types_1 = require("../data_types");
// Define the initial state using that type
var initialState = {
    loading: false,
    favourites: [
        {
            product: data_1.PRODUCTS[0],
            size: data_types_1.SIZES.G,
            color: 'Preto'
        },
        {
            product: data_1.PRODUCTS[9],
            size: data_types_1.SIZES.G,
            color: 'Verde'
        },
    ],
    products_in_favourite: [data_1.PRODUCTS[0].id, data_1.PRODUCTS[9].id],
    error: null
};
exports.favouriteSlice = toolkit_1.createSlice({
    name: "favourite",
    initialState: initialState,
    reducers: {
        addToFavourite: function (state, action) {
            var favourite = state.favourites.find(function (f) { return f.product.id === action.payload.product.id; });
            if (!favourite) {
                state.favourites.push(action.payload);
                state.products_in_favourite.push(action.payload.product.id);
            }
        },
        removeFromFavourite: function (state, action) {
            state.favourites = state.favourites.filter(function (f) { return f.product.id !== action.payload; });
            state.products_in_favourite = state.products_in_favourite.filter(function (f) { return f !== action.payload; });
        }
    }
});
exports.addToFavourite = (_a = exports.favouriteSlice.actions, _a.addToFavourite), exports.removeFromFavourite = _a.removeFromFavourite;
exports["default"] = exports.favouriteSlice.reducer;
