import { CompositeNavigationProp, RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"

import { AppStackParamList, AuthStackParamList, MainStackParamList } from "./ParmListTypes"


export type LandingScreenNavigationProps = StackNavigationProp<AppStackParamList, 'Landing'>
export type LandingScreenRouteProps = RouteProp<AppStackParamList, 'Landing'>

// Auth Stack Navigation Props


export type LoginScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<AuthStackParamList, 'Login'>,
    StackNavigationProp<AppStackParamList>
>
export type RegisterScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<AuthStackParamList, 'Register'>,
    StackNavigationProp<AppStackParamList>
>


// Main Stack Navigation Props
export type ComponentsScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Components'>,
    StackNavigationProp<AppStackParamList>
>
export type HomeScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Home'>,
    StackNavigationProp<AppStackParamList>
>

export type CarrinhoScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Bag_Main'>,
    StackNavigationProp<AppStackParamList>
>
export type FavouriteScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Favourite_Main'>,
    StackNavigationProp<AppStackParamList>
>



//----

export type ShopScreenScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Shop_Main'>,
    StackNavigationProp<AppStackParamList>
>

export type ProductDetailScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Shop_Product_Detail'>,
    StackNavigationProp<AppStackParamList>
>
export type SearchScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Shop_Search'>,
    StackNavigationProp<AppStackParamList>
>
export type CategoryScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Shop_Category'>,
    StackNavigationProp<AppStackParamList>
>


// ----

export type ProfileScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Profile_Main'>,
    StackNavigationProp<AppStackParamList>
>


export type EnderecoScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Profile_ShippingAddresses'>,
    StackNavigationProp<AppStackParamList>
>

export type ComprasScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Profile_Orders'>,
    StackNavigationProp<AppStackParamList>
>
export type CompraDetalheScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Profile_Order_Detail'>,
    StackNavigationProp<AppStackParamList>
>

export type UserReviewsScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Profile_Reviews'>,
    StackNavigationProp<AppStackParamList>
>

export type ConfigScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Profile_Settings'>,
    StackNavigationProp<AppStackParamList>
>

export type NovoEnderecoScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Profile_New_Address'>,
    StackNavigationProp<AppStackParamList>
>



// Auth Stack route Props

export type LoginScreenRouteProps = RouteProp<AuthStackParamList, 'Login'>
export type RegisterScreenRouteProps = RouteProp<AuthStackParamList, 'Register'>


// Main Stack route props

export type ComponentsScreenRouteProps = RouteProp<MainStackParamList, 'Home'>
export type HomeScreenRouteProps = RouteProp<MainStackParamList, 'Home'>
export type CarrinhoScreenRouteProps = RouteProp<MainStackParamList, 'Bag_Main'>
export type FavouriteScreenRouteProps = RouteProp<MainStackParamList, 'Favourite_Main'>

// ----

export type ProfileScreenRouteProps = RouteProp<MainStackParamList, 'Profile_Main'>
export type EnderecoScreenRouteProps = RouteProp<MainStackParamList, 'Profile_ShippingAddresses'>
export type ComprasScreenRouteProps = RouteProp<MainStackParamList, 'Profile_Orders'>
export type CompraDetalheScreenRouteProps = RouteProp<MainStackParamList, 'Profile_Order_Detail'>
export type UserReviewsScreenRouteProps = RouteProp<MainStackParamList, 'Profile_Reviews'>
export type ConfigScreenRouteProps = RouteProp<MainStackParamList, 'Profile_Settings'>
export type NovoEnderecoScreenRouteProps = RouteProp<MainStackParamList, 'Profile_New_Address'>

// ----

export type ShopScreenRouteProps = RouteProp<MainStackParamList, 'Shop_Main'>
export type ProductDetailScreenRouteProps = RouteProp<MainStackParamList, 'Shop_Product_Detail'>
export type SearchScreenRouteProps = RouteProp<MainStackParamList, 'Shop_Search'>
export type CategoryScreenRouteProps = RouteProp<MainStackParamList, 'Shop_Category'>
