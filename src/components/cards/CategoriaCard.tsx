import React, { ReactNode } from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";

import { BoxProps } from "@shopify/restyle";
import { Box, Text } from "../../utils/restyle";
import { Theme } from "../../utils/theme";
import { SharedElement } from "react-navigation-shared-element";

interface CategoriaCardProps extends BoxProps<Theme> {
    width: number;
    height: number;
    image: ImageSourcePropType;
    title: string;
}

const CategoriaCard: React.FC<CategoriaCardProps> = ({
    width,
    height,
    image,
    title,
    ...rest
}) => {
    return (
        <Box
            width={width}
            height={height}
            borderRadius="s"
            overflow="hidden"
            {...rest}
        >
            <SharedElement id={`category-${title}`}>
            <Image
                style={{height, width}}
                width={width}
                height={height}
                resizeMode="cover"
                source={image}
            />
            </SharedElement>
            <Box position="absolute" bottom={10} left={10}>
                <Text variant="headline" color="white">
                    {title}
                </Text>
            </Box>
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CategoriaCard;
