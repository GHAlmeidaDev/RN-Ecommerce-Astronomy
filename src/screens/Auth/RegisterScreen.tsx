import React from "react";
import { Platform, ScrollView, TouchableOpacity } from "react-native";
import { Dimensions, Image, KeyboardAvoidingView } from "react-native";
import { StyleSheet } from "react-native";
import RegisterForm from "../../components/forms/RegisterForm";

import Layout from "../../components/alls/Layout";

import {
    RegisterScreenNavigationProps,
    RegisterScreenRouteProps,
} from "../../navigation/ScreensNavigationRouteProps";
import { Box, Text } from "../../utils/restyle";

interface RegisterScreenProps {
    navigation: RegisterScreenNavigationProps;
    route: RegisterScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
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
                        Cadastre-se
                    </Text>
        
                </Box>
            </Box>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1}}

            >
                <ScrollView>
                    <Box padding="m">
                        <RegisterForm
                            onSubmit={() =>  navigation.navigate("Login")}
                        />

                        <Box
                            flexDirection="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Text variant="body">Você tem uma conta ?</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Login")}
                            >
                                <Text
                                    marginLeft="m"
                                    variant="body2"
                                    color="primary"
                                >
                                    Entrar
                                </Text>
                            </TouchableOpacity>
                        </Box>
                    </Box>
                </ScrollView>
            </KeyboardAvoidingView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default RegisterScreen;
