import { TransitionPresets } from "@react-navigation/stack";
import { TransitionSpec } from "@react-navigation/stack/lib/typescript/src/types";
import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import CarrinhoScreen from "../screens/Carrinho/CarrinhoScreen";
import CategoryScreen from "../screens/Categorias/CategoryScreen";

import FavouriteScreen from "../screens/Diversos/FavouriteScreen";
import HomeScreen from "../screens/Inicio/HomeScreen";
import NovoEnderecoScreen from "../screens/Envio/NovoEnderecoScreen";
import CompraDetalheScreen from "../screens/Envio/CompraDetalheScreen";
import ComprasScreen from "../screens/Envio/ComprasScreen";
import ProductDetail from "../screens/Diversos/ProductDetail";
import ProfileScreen from "../screens/Perfil/ProfileScreen";
import SearchScreen from "../screens/Inicio/SearchScreen";
import ConfigScreen from "../screens/Perfil/ConfigScreen";
import EnderecoScreen from "../screens/Envio/EnderecoScreen";
import ShopScreen from "../screens/Categorias/ShopScreen";
import UserReviewsScreen from "../screens/Review/UserReviewsScreen";
import { MainStackParamList } from "./ParmListTypes";

const Stack = createSharedElementStackNavigator<MainStackParamList>();

export const iosTransitionSpec: TransitionSpec = {
    animation: "spring",
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 10,
        restSpeedThreshold: 10,
    },
};

const MainStack = () => {
    return (
        <Stack.Navigator
            mode="modal"
            screenOptions={{
                // Enable gestures if you want. I disabled them because of my card style interpolator opacity animation
                gestureEnabled: false,
                // gestureResponseDistance: {
                // 	vertical: 100,
                // },
                // gestureDirection: 'vertical',
                ...TransitionPresets.ModalSlideFromBottomIOS,
                transitionSpec: {
                    open: iosTransitionSpec,
                    close: iosTransitionSpec,
                },
                // Opacity animation, you can also adjust this by playing with transform properties.
                cardStyleInterpolator: ({ current: { progress } }) => ({
                    cardStyle: {
                        opacity: progress,
                    },
                }),
            }}
            headerMode="none"
        >

            <Stack.Screen name="Home" component={HomeScreen} />

            <Stack.Screen name="Bag_Main" component={CarrinhoScreen} />
            <Stack.Screen name="Favourite_Main" component={FavouriteScreen} />

            <Stack.Screen name="Profile_Main" component={ProfileScreen} />
            <Stack.Screen
                name="Profile_ShippingAddresses"
                component={EnderecoScreen}
            />
            <Stack.Screen name="Profile_Orders" component={ComprasScreen} />
            <Stack.Screen
                name="Profile_Order_Detail"
                component={CompraDetalheScreen}
            />
            <Stack.Screen
                name="Profile_Reviews"
                component={UserReviewsScreen}
            />
            <Stack.Screen name="Profile_Settings" component={ConfigScreen} />
            <Stack.Screen
                name="Profile_New_Address"
                component={NovoEnderecoScreen}
            />

            <Stack.Screen name="Shop_Main" component={ShopScreen} />
            <Stack.Screen
                name="Shop_Search"
                component={SearchScreen}
                sharedElementsConfig={(route, otherRoute, showing) => {
                    if (route.name === "Shop_Search" && showing) {
                        // Open animation fades in image, title and description
                        return [
                            {
                                id: `search-input`,
                                animation: "fade",
                            },
                        ];
                    } else {
                        // Close animation only fades out image
                        return [
                            {
                                id: `search-input`,
                                animation: "fade",
                            },
                        ];
                    }
                }}
            />
            <Stack.Screen
                name="Shop_Category"
                component={CategoryScreen}
                sharedElementsConfig={(route, otherRoute, showing) => {
                    const { category } = route.params;
                    if (route.name === "Shop_Category" && showing) {
                        // Open animation fades in image, title and description
                        return [
                            {
                                id: `category-${category.display_name}`,
                            },
                        ];
                    } else {
                        // Close animation only fades out image
                        return [
                            {
                                id: `category-${category.display_name}`,
                            },
                        ];
                    }
                }}
            />
            <Stack.Screen
                name="Shop_Product_Detail"
                component={ProductDetail}
                sharedElementsConfig={(route, otherRoute, showing) => {
                    const { item } = route.params;
                    if (route.name === "Shop_Product_Detail" && showing) {
                        // Open animation fades in image, title and description
                        return [
                            {
                                id: `image-${item.id}`,
                            },
                        ];
                    } else {
                        // Close animation only fades out image
                        return [
                            {
                                id: `image-${item.id}`,
                            },
                        ];
                    }
                }}
            />
        </Stack.Navigator>
    );
};
export default MainStack;
