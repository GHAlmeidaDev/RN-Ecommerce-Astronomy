import { combineReducers } from "redux";
import bagSlice from "./carrinho/bagSlice";
import favouriteSlice from "./favourite/favouriteSlice";
import orderSlice  from "./compras/orderSlice";
import  productSlice from "./products/productSlice";
import userSlice  from "./user/userSlice";

const rootReducer = combineReducers({
    user: userSlice,
    products: productSlice,
    bag: bagSlice,
    favourite: favouriteSlice,
    orders: orderSlice
})

export default rootReducer