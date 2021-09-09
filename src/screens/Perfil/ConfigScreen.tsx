import React, { useState } from "react";
import { Dimensions, ScrollView, Switch } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Layout from "../../components/alls/Layout";
import BottomTab from "../../components/navigation/BottomTab";
import Header from "../../components/navigation/Header";

import {
    ConfigScreenNavigationProps,
    ConfigScreenRouteProps,
} from "../../navigation/ScreensNavigationRouteProps";

import { Theme } from "../../utils/theme";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { Box, Text } from "../../utils/restyle";
import Input from "../../components/forms/form_elements/Input";

interface ConfigScreenProps {
    navigation: ConfigScreenNavigationProps;
    route: ConfigScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");
const HEADER_HEIGHT = height * .12

const ConfigScreen: React.FC<ConfigScreenProps> = ({ route, navigation }) => {
    const theme = useTheme<Theme>();

    const [notification, setNotification] = useState(false);
    const [deliveryStatus, setDeliveryStatus] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    
    return (
        <Layout>
            <Header
                height={HEADER_HEIGHT}
                elevation={2}
                paddingHorizontal='m'
                title="Configurações"
                position="absolute"
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
                <Box margin="m">
                    <Text mb="s" variant="body2">
                        Informações pessoais
                    </Text>
                    <Input marginVertical="s" placeholder="Primeiro Nome" />
                    <Input placeholder="Último Nome" />
                </Box>
                <Box margin="m">
                    <Text mb="s" variant="body2">
                        Notificações
                    </Text>
                    <Box
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        marginVertical="s"
                    >
                        <Text variant="body">Ofertas</Text>
                        <Switch
                            onValueChange={(value) =>
                                setNotification(value)
                            }
                            value={notification}
                            thumbColor={theme.colors.black}
                            trackColor={{
                                true: theme.colors.darkColor,
                                false: theme.colors.gray,
                            }}
                        />
                    </Box>
                    <Box
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        marginVertical="s"
                    >
                        <Text variant="body">Status de envio</Text>
                        <Switch
                            onValueChange={(value) => setDeliveryStatus(value)}
                            value={deliveryStatus}
                            thumbColor={theme.colors.black}
                            trackColor={{
                                true: theme.colors.darkColor,
                                false: theme.colors.gray,
                            }}
                        />
                    </Box>
                </Box>
                <Box margin="m">
                    <Text mb="s" variant="body2">
                        Outros
                    </Text>
                    <Box
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        marginVertical="s"
                    >
                        <Text variant="body">Modo Escuro</Text>
                        <Switch
                            onValueChange={(value) => setDarkMode(value)}
                            value={darkMode}
                            thumbColor={theme.colors.black}
                            trackColor={{
                                true: theme.colors.darkColor,
                                false: theme.colors.gray,
                            }}
                        />
                    </Box>
                </Box>
            </ScrollView>
        </Layout>
    );
};

export default ConfigScreen;
