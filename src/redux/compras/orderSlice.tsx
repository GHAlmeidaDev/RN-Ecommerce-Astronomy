import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PRODUCTS } from "../data";
import { Order, OrderStatus } from "../data_types";

// Define a type for the slice state
interface UserState {
    loading: boolean;
    orderItems: Order[];
    error: string | null;
}

// Define the initial state using that type
const initialState: UserState = {
    loading: false,
    orderItems: [
        {
            id: 0,
            status: OrderStatus.PENDENTE,
            user: 1,
            order_items: [
                {
                    product: PRODUCTS[0],
                    quantity: 2,
                    color: 'Preto',
                    size: 'G'
                },
            ],
            total_amount: +(PRODUCTS[0].price * 2 + 7).toFixed(2),
            tracking_number: "AB123456789BR",
            date: "22-08-2021",
        },
        {
            id: 1,
            status: OrderStatus.SUCESSO,
            user: 1,
            order_items: [
                {
                    product: PRODUCTS[1],
                    quantity: 1,
                    color: 'Preto',
                    size: 'M'
                },
                {
                    product: PRODUCTS[6],
                    quantity: 2,
                    color: 'Preto',
                    size: 'GG'
                },
            ],
            total_amount: +(PRODUCTS[1].price + PRODUCTS[6].price * 2 + 7).toFixed(2),
            tracking_number: "AB123456789BR",
            date: "22-08-2021",
        },
        {
            id: 2,
            status: OrderStatus.CANCELADA,
            user: 1,
            order_items: [
                {
                    product: PRODUCTS[3],
                    quantity: 1,
                    color: 'Preto',
                    size: 'M'
                },
                {
                    product: PRODUCTS[4],
                    quantity: 1,
                    color: 'Preto',
                    size: 'M'
                },
                {
                    product: PRODUCTS[8],
                    quantity: 1,
                    color: 'Preto',
                    size: 'P'
                },
            ],
            total_amount:
                +(PRODUCTS[3].price + PRODUCTS[4].price + PRODUCTS[8].price + 7).toFixed(2),
            tracking_number: "AB123456789BR",
            date: "22-08-2021",
        },
    ],
    error: null,
};

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addCompra(state, action: PayloadAction<Order>) {
            state.orderItems.push(action.payload)
        }
    },
});

export const { addCompra } = orderSlice.actions;

export default orderSlice.reducer;
