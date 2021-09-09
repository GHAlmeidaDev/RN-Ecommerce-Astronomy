import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PRODUCTS } from "../data";
import { Product, SIZES } from "../data_types";
export interface BagItem {
    product: Product;
    quantity: number;
    size: string;
    color: string;
}

// Define a type for the slice state
interface UserState {
    loading: boolean;
    carrinhoItems: BagItem[] | null;
    error: string | null;
    total: number;
    products_in_bag: number[];
}

// Define the initial state using that type
const initialState: UserState = {
    loading: false,
    carrinhoItems: [
        {
            product: PRODUCTS[0],
            quantity: 1,
            size: SIZES.M,
            color: "Preto",
        },
        {
            product: PRODUCTS[5],
            quantity: 1,
            size: SIZES.M,
            color: "Preto",
        },
    ],
    products_in_bag: [PRODUCTS[0].id, PRODUCTS[5].id],
    total: PRODUCTS[0].price + PRODUCTS[5].price,
    error: null,
};

export const bagSlice = createSlice({
    name: "bag",
    initialState,
    reducers: {
        addToBag(state, action: PayloadAction<BagItem>) {
            const p = state.carrinhoItems?.find(
                (p) => p.product.id === action.payload.product.id
            );
            if (!p) {
                state.carrinhoItems?.push({
                    product: action.payload.product,
                    quantity: 1,
                    size: action.payload.size,
                    color: action.payload.color,
                });
                state.total = +(
                    state.total + action.payload.product.price
                ).toFixed(2);
                state.products_in_bag.push(action.payload.product.id);
            }
        },
        removeFromBag(state, action: PayloadAction<number>) {
            const item = state.carrinhoItems?.find(
                (p) => p.product.id === action.payload
                
            );
            if (item) {
                state.total = +(
                    state.total -
                    item.product.price * item.quantity
                ).toFixed(2);
                state.carrinhoItems = state.carrinhoItems!.filter(
                    (s) => s.product.id !== action.payload
                );
                state.products_in_bag = state.products_in_bag.filter(
                    (p) => p !== action.payload
                );
            }
        },
        incrementQuantity(state, action: PayloadAction<number>) {
            let item = state.carrinhoItems?.find(
                (s) => s.product.id === action.payload
            );
            if (item) {
                item.quantity = item.quantity + 1;
                state.total = +(state.total + item.product.price).toFixed(2);
            }
        },
        decrementQuantity(state, action: PayloadAction<number>) {
            let item = state.carrinhoItems?.find(
                (s) => s.product.id === action.payload
            );
            if (item && item.quantity > 1) {
                item.quantity = item.quantity - 1;
                state.total = +(state.total - item.product.price).toFixed(2);
            }
        },
        emptyBag(state) {
            state.carrinhoItems = [];
            state.products_in_bag = [];
            state.total = 0
        },
    },
});

export const {
    addToBag,
    decrementQuantity,
    incrementQuantity,
    removeFromBag,
    emptyBag,
} = bagSlice.actions;

export default bagSlice.reducer;
