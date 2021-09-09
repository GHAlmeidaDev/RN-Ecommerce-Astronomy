import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";
import CompraCard from "../../components/cards/CompraCard";
import Status from "../../components/alls/Status";

import Layout from "../../components/alls/Layout";
import BottomTab from "../../components/navigation/BottomTab";
import Header from "../../components/navigation/Header";
import {
    ComprasScreenNavigationProps,
    ComprasScreenRouteProps,
} from "../../navigation/ScreensNavigationRouteProps";
import { OrderStatus } from "../../redux/data_types";
import { useAppSelector } from "../../redux/hooks";
import { Box } from "../../utils/restyle";
import { Theme } from "../../utils/theme";

interface ComprasScreenProps {
    navigation: ComprasScreenNavigationProps;
    route: ComprasScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const HEADER_HEIGHT = height * 0.12;

const AnimatedBox = Animated.createAnimatedComponent(Box);

const ComprasScreen: React.FC<ComprasScreenProps> = ({ route, navigation }) => {
    const theme = useTheme<Theme>();
    const orders = useAppSelector((state) => state.orders.orderItems);

    const [display, setDisplay] = useState(false);

    const [selectedStatus, setSelectedStatus] =
        useState<"Pendente" | "Enviado" | "Cancelado">("Pendente");

    const translateX = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: withTiming(translateX.value) }],
    }));

    useEffect(() => {
        setDisplay(true);
    }, []);

    return (
        <Layout>
            <Header
                height={HEADER_HEIGHT}
                elevation={2}
                title="Pedidos"
                position="absolute"
                paddingHorizontal='m'
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
                
                    <Box
                        
                        flexDirection='row'
                        justifyContent='space-between'
                    >

                    <Status
                        textProps={{
                            color:
                                selectedStatus === "Pendente"
                                    ? "darkColor"
                                    : "white",
                        }}
                        margin="m"
                        bg={
                            selectedStatus === "Pendente"
                                ? "white"
                                : "darkColor"
                        }
                        name="Pendente"
                        borderWidth={selectedStatus === "Pendente" ? 1 : 0}
                        onPress={() => {
                            setSelectedStatus("Pendente");
                            translateX.value = 0;
                        }}
                    />
                    <Status
                        textProps={{
                            color:
                                selectedStatus === "Enviado"
                                    ? "darkColor"
                                    : "white",
                        }}
                        margin="m"
                        bg={
                            selectedStatus === "Enviado"
                                ? "white"
                                : "darkColor"
                        }
                        borderWidth={selectedStatus === "Enviado" ? 1 : 0}
                        name="Enviado"
                        onPress={() => {
                            setSelectedStatus("Enviado");
                            translateX.value = -width;
                        }}
                    />
                    <Status
                        textProps={{
                            color:
                                selectedStatus === "Cancelado"
                                    ? "darkColor"
                                    : "white",
                        }}
                        margin="m"
                        bg={
                            selectedStatus === "Cancelado"
                                ? "white"
                                : "darkColor"
                        }
                        borderWidth={selectedStatus === "Cancelado" ? 1 : 0}
                        name="Cancelado"
                        onPress={() => {
                            setSelectedStatus("Cancelado");
                            translateX.value = 2 * -width;
                        }}
                    />
                    </Box>
                {/* </ScrollView> */}
                {display ? (
                    <AnimatedBox
                        flex={1}
                        width={width * 3}
                        flexDirection="row"
                        style={animatedStyles}
                    >
                        <Box width={width}>
                            <ScrollView style={{}}>
                                {orders
                                    .filter(
                                        (o) => o.status === OrderStatus.PENDENTE
                                    )
                                    .map((o) => (
                                        <CompraCard
                                            key={o.id}
                                            order={o}
                                            marginHorizontal="s"
                                            onDetailPress={() =>
                                                navigation.navigate(
                                                    "Profile_Order_Detail",
                                                    { order: o }
                                                )
                                            }
                                            elevation={1}
                                        />
                                    ))}
                            </ScrollView>
                        </Box>
                        <Box width={width}>
                            <ScrollView style={{}}>
                                {orders
                                    .filter(
                                        (o) => o.status === OrderStatus.SUCESSO
                                    )
                                    .map((o) => (
                                        <CompraCard
                                            key={o.id}
                                            order={o}
                                            marginHorizontal="s"
                                            onDetailPress={() =>
                                                navigation.navigate(
                                                    "Profile_Order_Detail",
                                                    { order: o }
                                                )
                                            }
                                            elevation={1}
                                        />
                                    ))}
                            </ScrollView>
                        </Box>
                        <Box width={width}>
                            <ScrollView style={{}}>
                                {orders
                                    .filter(
                                        (o) =>
                                            o.status === OrderStatus.CANCELADA
                                    )
                                    .map((o) => (
                                        <CompraCard
                                            key={o.id}
                                            order={o}
                                            marginHorizontal="s"
                                            onDetailPress={() =>
                                                navigation.navigate(
                                                    "Profile_Order_Detail",
                                                    { order: o }
                                                )
                                            }
                                            elevation={1}
                                        />
                                    ))}
                            </ScrollView>
                        </Box>
                    </AnimatedBox>
                ) : (
                    <Box flex={1} justifyContent="center" alignItems="center">
                        <ActivityIndicator
                            size="large"
                            color={theme.colors.primary}
                        />
                    </Box>
                )}
            </ScrollView>
        </Layout>
    );
};

export default ComprasScreen;
