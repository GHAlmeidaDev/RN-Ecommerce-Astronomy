"use strict";
exports.__esModule = true;
exports.addCompra = exports.orderSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var data_1 = require("../data");
var data_types_1 = require("../data_types");
// Define the initial state using that type
var initialState = {
    loading: false,
    orderItems: [
        {
            id: 0,
            status: data_types_1.OrderStatus.PENDENTE,
            user: 1,
            order_items: [
                {
                    product: data_1.PRODUCTS[0],
                    quantity: 2,
                    color: 'Preto',
                    size: 'G'
                },
            ],
            total_amount: +(data_1.PRODUCTS[0].price * 2 + 7).toFixed(2),
            tracking_number: "AB123456789BR",
            date: "22-08-2021"
        },
        {
            id: 1,
            status: data_types_1.OrderStatus.SUCESSO,
            user: 1,
            order_items: [
                {
                    product: data_1.PRODUCTS[1],
                    quantity: 1,
                    color: 'Preto',
                    size: 'M'
                },
                {
                    product: data_1.PRODUCTS[6],
                    quantity: 2,
                    color: 'Preto',
                    size: 'GG'
                },
            ],
            total_amount: +(data_1.PRODUCTS[1].price + data_1.PRODUCTS[6].price * 2 + 7).toFixed(2),
            tracking_number: "AB123456789BR",
            date: "22-08-2021"
        },
        {
            id: 2,
            status: data_types_1.OrderStatus.CANCELADA,
            user: 1,
            order_items: [
                {
                    product: data_1.PRODUCTS[3],
                    quantity: 1,
                    color: 'Preto',
                    size: 'M'
                },
                {
                    product: data_1.PRODUCTS[4],
                    quantity: 1,
                    color: 'Preto',
                    size: 'M'
                },
                {
                    product: data_1.PRODUCTS[8],
                    quantity: 1,
                    color: 'Preto',
                    size: 'P'
                },
            ],
            total_amount: +(data_1.PRODUCTS[3].price + data_1.PRODUCTS[4].price + data_1.PRODUCTS[8].price + 7).toFixed(2),
            tracking_number: "AB123456789BR",
            date: "22-08-2021"
        },
    ],
    error: null
};
exports.orderSlice = toolkit_1.createSlice({
    name: "order",
    initialState: initialState,
    reducers: {
        addCompra: function (state, action) {
            state.orderItems.push(action.payload);
        }
    }
});
exports.addCompra = exports.orderSlice.actions.addCompra;
exports["default"] = exports.orderSlice.reducer;
