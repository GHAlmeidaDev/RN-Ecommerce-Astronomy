import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import Layout from "../../components/alls/Layout";
import {
    CategoryScreenNavigationProps,
    CategoryScreenRouteProps,
} from "../../navigation/ScreensNavigationRouteProps";
import { Box, Text } from "../../utils/restyle";

import Constants from "expo-constants";
import ExitIcon from "../../components/forms/form_elements/ExitIcon";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../utils/theme";
import { SharedElement } from "react-navigation-shared-element";

import Animated, {
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ProductCard from "../../components/cards/ProductCard";

import { Product } from "../../redux/data_types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import FilterView from "../../components/alls/FilterView";
import ProductListing from "../../components/alls/ProductListing";

interface CategoryScreenProps {
    navigation: CategoryScreenNavigationProps;
    route: CategoryScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const IMAGE_HEIGHT = height * 0.6;
const PRODUCT_WIDTH = width / 2;
const HIDDEN_VIEW_HEIGHT = height * 0.4;
const FILTER_VIEW_HEIGHT = height * 0.5;

const AnimatedBox = Animated.createAnimatedComponent(Box);

const CategoryScreen: React.FC<CategoryScreenProps> = ({
    route,
    navigation,
}) => {
    const dispatch = useAppDispatch();
    const theme = useTheme<Theme>();

    const filterTranslateY = useSharedValue(FILTER_VIEW_HEIGHT + 15);
    const sortTranslateY = useSharedValue(FILTER_VIEW_HEIGHT + 15);

    const products_in_bag = useAppSelector(
        (state) => state.bag.products_in_bag
    );
    const products = useAppSelector((state) => state.products.products).filter(
        (p) => p.category.name === route.params.category.name
    );

    const [list, setList] = useState(products);

//Função organizar A-Z
    const handleOrderClick = () => {
        let newList = [...products]
        newList.sort((a, b) => (a.display_name > b.display_name ? 1 : b.display_name > a.display_name ? -1 : 0));
        setList(newList) 
    };

    const onLow = () => {
        let newList = [...products]
        newList.sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0));
        setList(newList)
        filterTranslateY.value = FILTER_VIEW_HEIGHT + 15
    };

    const onHigh = () => {
        let newList = [...products]
        newList.sort((a, b) => (a.price < b.price ? 1 : b.price < a.price ? -1 : 0));
        setList(newList)
        filterTranslateY.value = FILTER_VIEW_HEIGHT + 15
    };

    return (
        <Layout no_padding>
            <FilterView
                height={FILTER_VIEW_HEIGHT}
                width={width}
                translateY={filterTranslateY}
                onClose={() =>
                    (filterTranslateY.value = FILTER_VIEW_HEIGHT + 15)
                }
                onHigh={onHigh}
                onLow={onLow}
                menor={'Preço menor para o maior'}
                maior={'Preço maior para o menor'}
            />

            <AnimatedBox
                width={width}
                borderBottomRightRadius="l"
                borderBottomLeftRadius="l"
                overflow="hidden"
                
            >
                <SharedElement
                    id={`category-${route.params.category.display_name}`}
                >
                    <Image
                        style={[
                            {
                                width,
                                height: IMAGE_HEIGHT / 3,
                                borderBottomLeftRadius: theme.borderRadii.l,
                                borderBottomRightRadius: theme.borderRadii.l,
                            },
                        ]}
                        source={{ uri: route.params.category.image }}
                        resizeMode="cover"
                    />
                </SharedElement>
                <Box position="absolute" bottom={20} left={20}>
                    <Text variant="headline" color="white">
                        {route.params.category.display_name}
                    </Text>
                </Box>
                <Box
                    position="absolute"
                    top={Constants.statusBarHeight + theme.spacing.m}
                    right={theme.spacing.m}
                >
                    <ExitIcon
                        onPress={() => navigation.navigate("Shop_Main")}
                    />
                </Box>
            </AnimatedBox>
            <Box flex={1}>
                <Box    
                    bg='white'
                    padding="m"
                    flexDirection="row"
                    justifyContent="space-between"
                    borderRadius="m"
                    elevation={1}
                >
                    <TouchableOpacity
                        onPress={() => (filterTranslateY.value = 0)}
                    >
                        <Box flexDirection="row" alignItems="center">
                            <Ionicons
                                name="filter-sharp"
                                size={24}
                                color={theme.colors.darkColor}
                            />
                            <Text marginLeft="s" variant="body2" opacity={0.7}>
                                Filtro Preço
                            </Text>
                        </Box>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleOrderClick}
                    >
                        <Box flexDirection="row" alignItems="center">
                            <MaterialCommunityIcons
                                name="sort"
                                size={24}
                                color={theme.colors.darkColor}
                            />
                            <Text marginLeft="s" variant="body2" opacity={0.7}>
                                A-Z
                            </Text>
                        </Box>
                    </TouchableOpacity>
                </Box>
            
                <ProductListing
                    flex={1}
                    product_width={width / 2 - theme.spacing.s * 2}
                    products={list}
                    products_in_bag={products_in_bag}
                />
            
            </Box>
        </Layout>
    );
};

export default CategoryScreen;
