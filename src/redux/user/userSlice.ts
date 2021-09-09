import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CURRENT_USER } from "../data";
import { Order, EnderecoEnvio, User } from "../data_types";

// Define a type for the slice state
interface UserState {
    loading: boolean;
    current_user: User | null;
    error: string | null;
}

// Define the initial state using that type
const initialState: UserState = {
    loading: false,
    current_user: CURRENT_USER,
    error: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addCompra(state, action: PayloadAction<Order>) {
            state.current_user!.orders = [
                action.payload,
                ...state.current_user!.orders,
            ];
        },
        addEnderecoEnvio(state, action: PayloadAction<EnderecoEnvio>) {
            state.current_user!.shipping_addresses = [
                action.payload,
                ...state.current_user!.shipping_addresses,
            ];
        },
        removeEnderecoEnvio(state, action: PayloadAction<number>) {
            state.current_user!.shipping_addresses =
                state.current_user!.shipping_addresses.filter(
                    (s) => s.id !== action.payload
                );
        },
        editEnderecoEnvio(state, action: PayloadAction<EnderecoEnvio>) {
          let shipp = state.current_user!.shipping_addresses.find(s => s.id === action.payload.id)
          if(shipp) {
            shipp.endereco = action.payload.endereco
            shipp.cidade = action.payload.cidade
            shipp.pais = action.payload.pais
            shipp.nome = action.payload.nome
            shipp.estado = action.payload.estado
          }
        },
    },
});

export const {
  addCompra,
  addEnderecoEnvio,
  editEnderecoEnvio, 
  removeEnderecoEnvio
} = userSlice.actions;

export default userSlice.reducer;
