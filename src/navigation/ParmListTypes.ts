import { NavigatorScreenParams } from "@react-navigation/core" 
import { Category, Order, Product, EnderecoEnvio } from "../redux/data_types"

export type AppStackParamList = {
    Landing: undefined
    Auth: NavigatorScreenParams<AuthStackParamList>
    Main: NavigatorScreenParams<MainStackParamList>
}

export type AuthStackParamList = {
    Login: undefined
    Register: undefined
    ResetPassword: undefined
}

export type MainStackParamList = {
    Components: undefined
    Home: undefined
    Bag_Main: undefined
    Favourite_Main: undefined
    
    Profile_Main: undefined
    Profile_Orders: undefined
    Profile_Order_Detail: {
        order: Order
    }
    Profile_ShippingAddresses: undefined
    Profile_Reviews: undefined
    Profile_Settings: undefined
    Profile_New_Address: {
        shipping_address: EnderecoEnvio | null
    }
    
    Shop_Main: undefined
    Shop_Category: {
        category: Category & {image: string}
    }
    Shop_Search: {
        search_term: string | null
    }
    Shop_Product_Detail: {
        item: Product
    } 
}

