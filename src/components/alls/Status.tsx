import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { BoxProps, TextProps } from "@shopify/restyle";
import { Box, Text } from "../../utils/restyle";
import { Theme } from "../../utils/theme";

interface CategoryStatusProps extends BoxProps<Theme> {
    name: string;
    onPress(): void;
    textProps?: TextProps<Theme>
}

const Status: React.FC<CategoryStatusProps> = ({ name, onPress, textProps,...rest }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Box
                paddingHorizontal="m"
                paddingVertical="s"
                borderRadius="m"
                marginRight="s"
                alignItems='center'
                justifyContent='center'
                maxWidth={100}
                {...rest}
            >
                <Text variant="body" color="white"  {...textProps}>
                    {name}
                </Text>
            </Box>
        </TouchableOpacity>
    );
};

export default Status;
