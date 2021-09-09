import React, { useState } from "react";
import {} from "react-native";

import { BoxProps, useTheme } from "@shopify/restyle";
import { Box, Text } from "../../utils/restyle";
import { Theme } from "../../utils/theme";

import Animated, {
    useAnimatedStyle,
    withTiming,
} from "react-native-reanimated";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ExitIcon from "../forms/form_elements/ExitIcon";

interface FilterViewProps extends BoxProps<Theme> {
    width: number;
    height: number;
    onClose(): void;
    translateY: Animated.SharedValue<number>;
    onLow?(): void;
    onHigh?(): void;
    menor: string;
    maior: string;
}

const AnimatedBox = Animated.createAnimatedComponent(Box);

const FilterView: React.FC<FilterViewProps> = ({
    width,
    height,
    onClose,
    translateY,
    onLow,
    onHigh,
    menor,
    maior,
    ...rest
}) => {
    const theme = useTheme<Theme>();

    const [selected, setSelected] = useState<'Heighest' | 'Lowest' | 'Relevance'>("Relevance");

    const styles = useAnimatedStyle(() => ({
        transform: [{ translateY: withTiming(translateY.value) }],
    }));
    return (
        <AnimatedBox
            width={width}
            height={height}
            borderTopLeftRadius="xl"
            borderTopRightRadius="xl"
            bg="white"
            elevation={20}
            position={"absolute"}
            bottom={0}
            zIndex={7777777}
            style={styles}
            {...rest}
        >
            <Box position="absolute" top={-15} left={width / 2 - 15}>
                <TouchableOpacity>
                    <ExitIcon onPress={onClose} />
                </TouchableOpacity>
            </Box>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, marginTop: theme.spacing.xl }}
            >
                <Box>
                   
                    <TouchableOpacity  onPress={onLow}>
                        <Box bg={selected === 'Lowest' ?  "primary" : 'white'} padding="m">
                            <Text
                                paddingHorizontal="m"
                                variant="body2"
                                color={selected === 'Lowest' ? "white" : 'black'}
                            >
                                
                                {menor}
                            </Text>
                        </Box>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onHigh}>
                        <Box bg={selected === 'Heighest' ?  "primary" : 'white'} padding="m">
                            <Text
                                paddingHorizontal="m"
                                variant="body2"
                                color={selected === 'Heighest' ?  "white": 'black'}
                            >
                                {maior}
                            </Text>
                        </Box>
                    </TouchableOpacity>

                </Box>
            </ScrollView>
        </AnimatedBox>
    );
};

export default FilterView;
