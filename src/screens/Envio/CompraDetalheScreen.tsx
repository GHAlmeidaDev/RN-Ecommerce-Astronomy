import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { Dimensions, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";
import Layout from "../../components/alls/Layout";
import BottomTab from "../../components/navigation/BottomTab";
import Header from "../../components/navigation/Header";
import {
    CompraDetalheScreenNavigationProps,
    CompraDetalheScreenRouteProps,
} from "../../navigation/ScreensNavigationRouteProps";
import { OrderStatus } from "../../redux/data_types";
import { useAppSelector } from "../../redux/hooks";
import { Box, Text } from "../../utils/restyle";
import { Theme } from "../../utils/theme";

interface CompraDetalheScreenProps {
    navigation: CompraDetalheScreenNavigationProps;
    route: CompraDetalheScreenRouteProps;
}
const { width, height } = Dimensions.get("screen");
const HEADER_HEIGHT = height * 0.12;

const CompraDetalheScreen: React.FC<CompraDetalheScreenProps> = ({
    navigation,
    route,
}) => {
    const theme = useTheme<Theme>();
    const defaultShippingAddress = useAppSelector(
        (state) => state.user.current_user?.shipping_addresses
    )?.find((s) => s.is_default);

    return (
        <Layout>
            <Header
                height={HEADER_HEIGHT}
                title="Detalhes do pedido"
                position="absolute"
                paddingHorizontal='m'
                elevation={1}
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
            <BottomTab route_name={route.name} position="absolute" bottom={0} />
            <ScrollView
                style={{
                    flex: 1,
                    marginBottom: height * 0.1,
                    marginTop: HEADER_HEIGHT - theme.spacing.l,
                }}
            >
                <Box marginTop="m" marginBottom='s' marginHorizontal='m' bg='white' p='m' borderRadius='m'>
                    <Box
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        marginBottom="s"
                    >
                        <Box flexDirection="row" alignItems="center">
                            <Text variant="body" opacity={0.5}>
                                {`C??digo de Rastreamento: `}
                            </Text>
                            <Text variant="body">
                                {route.params.order.tracking_number}
                            </Text>
                        </Box>
                        <Text variant="body2" opacity={0.7}>
                            {route.params.order.date}
                        </Text>
                    </Box>
                    <Box
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        
                        marginBottom="s"
                    >
                        <Text variant="body" opacity={0.5}>
                            Status:
                        </Text>
                        <Text
                            variant="body2"
                            color={
                                route.params.order.status ===
                                OrderStatus.SUCESSO
                                    ? "success"
                                    : route.params.order.status ===
                                      OrderStatus.PENDENTE
                                    ? "darkColor"
                                    : "error"
                            }
                        >
                            {route.params.order.status}
                        </Text>
                    </Box>
                </Box>
                <Box marginVertical="s">
                    <Text
                        marginHorizontal="m"
                        marginVertical="s"
                        variant="headline3"
                        opacity={0.7}
                    >
                        Items
                    </Text>
                    {route.params.order.order_items.map((o) => (
                        <Box
                            key={o.product.id}
                            marginHorizontal="m"
                            borderRadius="m"
                            overflow="hidden"
                            flexDirection="row"
                            marginVertical="s"
                            bg='white'
                        >
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("Shop_Product_Detail", {
                                        item: o.product,
                                    })
                                }
                            >
                                <SharedElement id={`image-${o.product.id}`}>
                                    <Image
                                        style={{ width: 80, height: 80 }}
                                        resizeMode="cover"
                                        source={{
                                            uri: o.product.thumbnail!,
                                        }}
                                    />
                                </SharedElement>
                            </TouchableOpacity>
                            <Box paddingHorizontal="m" width={width * 0.7} paddingVertical='s'>
                                <Text marginBottom="s" variant="body2">
                                    {o.product.display_name}
                                </Text>
                                <Box
                                    flexDirection="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Box
                                        flexDirection="row"
                                        alignItems="center"
                                    >
                                        <Text opacity={0.5}>{`Cor: `}</Text>
                                        <Text>{o.color}</Text>
                                    </Box>
                                    <Box
                                        flexDirection="row"
                                        alignItems="center"
                                    >
                                        <Text opacity={0.5}>{`Tamanho: `}</Text>
                                        <Text>{o.size}</Text>
                                    </Box>
                                    <Box
                                        flexDirection="row"
                                        alignItems="center"
                                    >
                                        <Text opacity={0.5}>{`Qtd: `}</Text>
                                        <Text>{o.quantity}</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box marginVertical="s">
                    <Text
                        marginHorizontal="m"
                        marginVertical="s"
                        variant="headline3"
                        opacity={0.7}
                    >
                       Informa????es do pedido
                    </Text>
                    <Box margin='m' paddingHorizontal="m" padding='m' bg='white' borderRadius='m'>
                        <Box
                            flexDirection="row"
                            alignItems="flex-start"
                            justifyContent="space-between"
                            marginBottom="s"
                        >
                            <Box flex={1}>
                                <Text opacity={0.5}>Endere??o enviado: </Text>
                            </Box>
                            <Box flex={1}>
                                <Text>{`${defaultShippingAddress?.endereco}, ${defaultShippingAddress?.cidade}, ${defaultShippingAddress?.estado} ${defaultShippingAddress?.cep}, ${defaultShippingAddress?.pais}`}</Text>
                            </Box>
                        </Box>
                        <Box
                            flexDirection="row"
                            alignItems="flex-start"
                            justifyContent="space-between"
                            marginBottom="s"
                        >
                            <Box flex={1}>
                                <Text opacity={0.5}>Total: </Text>
                            </Box>
                            <Box flex={1}>
                                <Text>{`R$${route.params.order.total_amount}`}</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </ScrollView>
        </Layout>
    );
};

export default CompraDetalheScreen;
