import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/Auth/LoginScreen'
import RegisterScreen from '../screens/Auth/RegisterScreen'
import { AuthStackParamList } from './ParmListTypes'

const Stack = createStackNavigator<AuthStackParamList>()

const AuthStack = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack