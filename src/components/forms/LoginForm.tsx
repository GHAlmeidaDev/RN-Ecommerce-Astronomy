import React, { useState } from "react";
import { TouchableOpacity, Alert, Text } from 'react-native'
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../utils/theme";
import { Box } from "../../utils/restyle";
import Input from "./form_elements/Input";
import Button from "./form_elements/Button";
import axios from 'axios';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoginFormProps {
    onSubmit(): void;
}


const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }, { navigation }) => {

    const [email, setEmail] = useState('eve.holt@reqres.in')
    const [password, setPassword] = useState('cityslicka')
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);
    const [secure, setSecure] = useState(true);

    const theme = useTheme<Theme>();
    
    const handleSubmit = async () => {
        setLoading(true);
        setIsError(false);
        
        const data = {
            email: email,
            password: password
        }

        axios.post('https://reqres.in/api/login', data).then(res => {
            setData(res.data);
            onSubmit();
            setEmail('eve.holt@reqres.in');
            setPassword('cityslicka');
            setLoading(false);
            /* console.log('correto') */
        }).catch(err => {
            setLoading(false);
            setIsError(true);
            /* console.log('erro') */
            AsyncStorage.setItem("@Mykey", email)
            AsyncStorage.setItem("@Mypass", password)
            Alert.alert('Email ou senha incorretos')
        });
    }


   
    return (
        <Box>
            <Input
                textInputProps={{
                    onChangeText: (text) => setEmail(text)
                }
                }
                value={email}
                placeholder="E-mail"
                icon={
                    email ? (
                        <FontAwesome5 name="shopping-bag" size={24} color={theme.colors.primary} />
                    ) : (
                        <MaterialIcons name="error" size={24} color={theme.colors.error} />
                    )
                }
                secureTextEntry={false}
            />
            <Input
                password
                textInputProps={{
                    onChangeText: (text) => setPassword(text)
                }
                }
                value={password}
                placeholder="Password"
                secureTextEntry={secure}
                icon={
                    
                    <TouchableOpacity onPress={() => {setSecure((prev) => !prev)}}>
                        <Text>{secure ? <FontAwesome5 name="eye-slash" size={24} color={theme.colors.primary} /> : <FontAwesome5 name="eye" size={24} color={theme.colors.primary} />}</Text>
                    </TouchableOpacity>
                }
            />

            <Button
                variant="PRIMARY"
                title={"Entrar"}
                onPress={handleSubmit}
                disabled={!email || !password}
            />
        </Box>
    );
};

export default LoginForm;
