import React, {useEffect} from "react";
import { TouchableOpacity, Alert } from "react-native";

import {
    LoginScreenNavigationProps,
    LoginScreenRouteProps,
} from "../../navigation/ScreensNavigationRouteProps";
import { Box, Text } from "../../utils/restyle";
import LoginForm from "../../components/forms/LoginForm";
import Layout from "../../components/alls/Layout";
import Modal from "../../components/cards/Modal"

interface LoginScreenProps {
    navigation: LoginScreenNavigationProps;
    route: LoginScreenRouteProps;
}



const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    return (
        <Layout no_padding>
            <Box
                padding="m"
                bg="primary"
                borderBottomLeftRadius="l"
                borderBottomRightRadius="l"
                elevation={10}
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
            >
                <Box>
                    <Text variant="headline" mt="xl" color="white" textAlign='center'>
                        Bem Vindo
                    </Text>
                    <Text variant="description" mb="xl" color="white">
                        Faça seu login ou se cadastre
                    </Text>
                </Box>
               
            </Box>
            <Box paddingHorizontal="m" paddingTop="l">

                <LoginForm
                    onSubmit={() => navigation.replace("Main", { screen: "Home" })}   
                />

                <Box
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text variant="body">Você ainda não tem conta ?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Register")}
                        testID={'Press me'}
                    >
                        <Text marginLeft='m' variant="body2" color='primary' testID="loginButton">Cadastre-se</Text>
                    </TouchableOpacity>
                    <Modal/>
                </Box>
            </Box>
        </Layout>
    );
};

export default LoginScreen;
