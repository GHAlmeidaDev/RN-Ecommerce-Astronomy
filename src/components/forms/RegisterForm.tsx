import React, { useState, useEffect} from "react";
import { Alert , TouchableOpacity, Text} from "react-native";
import axios from 'axios'
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../utils/theme";
import { Box } from "../../utils/restyle";
import Input from "./form_elements/Input";
import Button from "./form_elements/Button";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 


interface RegisterFormProps {
    onSubmit(): void;
}


const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }, {navigation}) => {

    const [email, setEmail] = useState('eve.holt@reqres.in')
    const [password, setPassword] = useState('pistol')
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);
    const [secure, setSecure] = useState(true);

    const theme = useTheme<Theme>();

    const handleSubmit = () => {
        setLoading(true);
        setIsError(false);
        const data = {
          email: email,
          password: password
        }
        axios.post('https://reqres.in/api/register', data).then(res => {
          setData(res.data);
          onSubmit();
          setEmail('eve.holt@reqres.in');
          setPassword('pistol');
          setLoading(false);
          console.log('correto')
          
        }).catch(err => {
          setLoading(false);
          setIsError(true);
          console.log('erro')
          Alert.alert(`Email inválido`)
        });
      }
     

    return (
        <Box>
            <Box>
              
                <Input
                    value={email}
                    placeholder="E-mail"
                    textInputProps={{
                        
                        onChangeText: text => setEmail(text),
                    }}
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
                            {secure ? <FontAwesome5 name="eye-slash" size={24} color={theme.colors.primary} /> : <FontAwesome5 name="eye" size={24} color={theme.colors.primary} />}
                        </TouchableOpacity>
                    }
                />
               
            </Box>
            <Button
                variant="PRIMARY"
                title={"Cadastrar"}
                onPress={handleSubmit}
                disabled={(!email || !password)}
            />
        </Box>
    );
};

export default RegisterForm;
