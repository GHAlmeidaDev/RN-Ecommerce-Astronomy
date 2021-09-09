import { BoxProps } from "@shopify/restyle";
import React, {ReactNode} from "react";
import { TouchableOpacity } from "react-native";
import { Box, Text } from "../../../utils/restyle";
import { Theme } from "../../../utils/theme";


interface ButtonProps  extends BoxProps<Theme>{
    variant: 'PRIMARY' | "DEFAULT"
    title: string;
    onPress(): void;
    disabled?: any;
    icon?: ReactNode
}

const Button: React.FC<ButtonProps> = ({ title, onPress, icon, variant,disabled, ...rest }) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <Box
                backgroundColor={variant === 'PRIMARY' ? "primary" : 'white'}
                justifyContent="center"
                alignItems="center"
                borderRadius="l"
                paddingVertical="m"
                paddingHorizontal='m'
                marginVertical='m'
                borderWidth={variant === 'PRIMARY'?  0 : 1}
                
                {...rest}
            >
                <Text variant="body2" color={variant === 'PRIMARY' ? 'white' : undefined}>
                    {title}
                </Text>
                {icon}
            </Box>
        </TouchableOpacity>
    );
};

export default Button;
