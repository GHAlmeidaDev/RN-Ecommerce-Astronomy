import React from "react";
import { Dimensions, ScrollView } from "react-native";

import Layout from "../../components/alls/Layout";
import BottomTab from "../../components/navigation/BottomTab";
import {
    EnderecoScreenNavigationProps,
    EnderecoScreenRouteProps,
} from "../../navigation/ScreensNavigationRouteProps";

import { useTheme } from "@shopify/restyle";
import { Theme } from "../../utils/theme";
import Header from "../../components/navigation/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Box } from "../../utils/restyle";

import EnderecoEnvioCard from "../../components/cards/EnderecoEnvioCard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { EnderecoEnvio } from "../../redux/data_types";
import { removeEnderecoEnvio } from "../../redux/user/userSlice";
import { AnimatePresence } from "framer-motion";
import { MotiView } from "@motify/components";
import { Image } from "react-native";

interface EnderecoScreenProps {
    navigation: EnderecoScreenNavigationProps;
    route: EnderecoScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");
const HEADER_HEIGHT = height * 0.12;

const EnderecoScreen: React.FC<EnderecoScreenProps> = ({
    route,
    navigation,
}) => {
    const theme = useTheme<Theme>();
    const dispatch = useAppDispatch();
    const enderecoEnvio = useAppSelector(
        (state) => state.user.current_user?.shipping_addresses
    );
    return (
        <Layout bg={enderecoEnvio!.length > 0 ? 'background' : 'white'}>
            <Header
                height={HEADER_HEIGHT}
                elevation={2}
                title="Endereços para envio"
                position="absolute"
                paddingHorizontal="m"
                top={0}
                left_icon={
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Profile_Main")}
                    >
                        <Ionicons
                            name="arrow-back"
                            size={30}
                            color={theme.colors.darkColor}
                        />
                    </TouchableOpacity>
                }
                right_icon={
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Profile_New_Address", {
                                shipping_address: null,
                            })
                        }
                    >
                        <Entypo
                            name="plus"
                            size={30}
                            color={theme.colors.darkColor}
                        />
                    </TouchableOpacity>
                }
            />
            <BottomTab
                elevation={5}
                route_name={route.name}
                position="absolute"
                bottom={0}
            />
            <ScrollView
                style={{
                    flex: 1,
                    marginBottom: height * 0.1,
                    marginTop: HEADER_HEIGHT - theme.spacing.l,
                }}
            >
                <Box marginHorizontal="s">
                    <AnimatePresence>
                        {enderecoEnvio && enderecoEnvio.length > 0 ? (
                            enderecoEnvio.map(
                                (sh: EnderecoEnvio, i: number) => (
                                    <MotiView
                                        key={sh.id}
                                        from={{
                                            opacity: 0,
                                            translateX: -width,
                                        }}
                                        animate={{ opacity: 1, translateX: 0 }}
                                        exit={{
                                            opacity: 0,
                                            translateX: -width,
                                        }}
                                        transition={{
                                            type: "timing",
                                            duration: 300,
                                            delay: i * 10,
                                        }}
                                        exitTransition={{
                                            type: "timing",
                                            duration: 300,
                                        }}
                                    >
                                        <EnderecoEnvioCard
                                            elevation={1}
                                            endereco={sh}
                                            onCheckBoxChange={(v) => {}}
                                            onEditPress={() =>
                                                navigation.navigate(
                                                    "Profile_New_Address",
                                                    { shipping_address: sh }
                                                )
                                            }
                                            onDeletePress={() =>
                                                dispatch(
                                                    removeEnderecoEnvio(sh.id)
                                                )
                                            }
                                        />
                                    </MotiView>
                                )
                            )
                        ) : (
                            <MotiView
                                from={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                delay={300}
                            >
                            <Box
                                flex={1}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Image
                                    source={require("../../../assets/empty.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: width * 0.6,
                                        height: height * 0.6,
                                    }}
                                />
                            </Box>
                            </MotiView>
                        )}
                    </AnimatePresence>
                </Box>
            </ScrollView>
        </Layout>
    );
};

export default EnderecoScreen;
