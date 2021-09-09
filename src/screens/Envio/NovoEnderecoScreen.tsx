import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "../../components/forms/form_elements/Button";
import Input from "../../components/forms/form_elements/Input";
import Layout from "../../components/alls/Layout";

import Header from "../../components/navigation/Header";
import {
    NovoEnderecoScreenRouteProps,
    NovoEnderecoScreenNavigationProps,
} from "../../navigation/ScreensNavigationRouteProps";
import { useAppDispatch } from "../../redux/hooks";
import { addEnderecoEnvio, editEnderecoEnvio } from "../../redux/user/userSlice";
import { Box } from "../../utils/restyle";
import { Theme } from "../../utils/theme";

interface NovoEnderecoScreenProps {
    navigation: NovoEnderecoScreenNavigationProps;
    route: NovoEnderecoScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");
const HEADER_HEIGHT = height * 0.12;

const NovoEnderecoScreen: React.FC<NovoEnderecoScreenProps> = ({
    navigation,
    route,
}) => {
    const { shipping_address } = route.params
    const theme = useTheme<Theme>();
    const dispatch = useAppDispatch()

    const [nome, setNome] = useState(shipping_address ? shipping_address.nome :"");
    const [endereco, setEndereco] = useState(shipping_address ? shipping_address.endereco : "");
    const [cidade, setCidade] = useState( shipping_address ? shipping_address.cidade :"");
    const [estado, setEstado] = useState(shipping_address ? shipping_address.estado : "");
    const [cep, setCep] = useState(shipping_address ? shipping_address.cep : "");
    const [pais, setPais] = useState(shipping_address ? shipping_address.pais : "");
   
    const handleSubmit = () => {
        if(shipping_address) {
            dispatch(editEnderecoEnvio({
                id: shipping_address.id,
                endereco,
                cidade,
                pais,
                estado,
                nome: nome,
                cep: +cep,
                is_default: shipping_address.is_default
            }))
            navigation.navigate('Profile_ShippingAddresses')
        }else {
            dispatch(addEnderecoEnvio({
                id: Math.floor(Math.random() * 100) ,
                endereco,
                cidade,
                pais,
                estado,
                nome: nome,
                cep: +cep,
                is_default: false
            }))
            navigation.navigate('Profile_ShippingAddresses')
        }
    }
    return (
        <Layout>
            <Header
                height={HEADER_HEIGHT}
                elevation={2}
                paddingHorizontal='m'
                title={shipping_address ? 'Editar Endereço' : "Novo Endereço"}
                position="absolute"
                top={0}
                left_icon={
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Profile_ShippingAddresses")
                        }
                    >
                        <Ionicons
                            name="arrow-back"
                            size={30}
                            color={theme.colors.darkColor}
                        />
                    </TouchableOpacity>
                }
            />
           
            <ScrollView
                style={{
                    flex: 1,
                    marginTop: HEADER_HEIGHT + theme.spacing.s,
                }}
            >
                <Box marginHorizontal="m">
                    <Input
                        placeholder="Nome Completo"
                        textInputProps={{
                            value: nome,
                            onChangeText: (v) => setNome(v),
                        }}
                    />
                </Box>
                <Box marginHorizontal="m">
                    <Input placeholder="Endereço" textInputProps={{
                            value: endereco,
                            onChangeText: (v) => setEndereco(v),
                        }} />
                </Box>
                <Box marginHorizontal="m">
                    <Input placeholder="Cidade" textInputProps={{
                            value: cidade,
                            onChangeText: (v) => setCidade(v),
                        }}/>
                </Box>
                <Box marginHorizontal="m">
                    <Input placeholder="Estado" textInputProps={{
                            value: estado,
                            onChangeText: (v) => setEstado(v),
                        }}/>
                </Box>
                <Box marginHorizontal="m">
                    <Input placeholder="CEP" textInputProps={{
                            value: cep.toString(),
                            keyboardType: 'numeric',
                            onChangeText: (v) => setCep(v),
                        }}/>
                </Box>
                <Box marginHorizontal="m">
                    <Input placeholder="País"  textInputProps={{
                            value: pais,
                            onChangeText: (v) => setPais(v),
                        }}/>
                </Box>
                <Box marginHorizontal="m">
                    <Button
                        variant="PRIMARY"
                        title={"Salvar"}
                        onPress={handleSubmit}
                    />
                </Box>
            </ScrollView>
        </Layout>
    );
};

export default NovoEnderecoScreen;
