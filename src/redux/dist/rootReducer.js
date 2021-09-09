"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var bagSlice_1 = require("./carrinho/bagSlice");
var favouriteSlice_1 = require("./favourite/favouriteSlice");
var orderSlice_1 = require("./compras/orderSlice");
var productSlice_1 = require("./products/productSlice");
var userSlice_1 = require("./user/userSlice");
var rootReducer = redux_1.combineReducers({
    user: userSlice_1["default"],
    products: productSlice_1["default"],
    bag: bagSlice_1["default"],
    favourite: favouriteSlice_1["default"],
    orders: orderSlice_1["default"]
});
exports["default"] = rootReducer;
