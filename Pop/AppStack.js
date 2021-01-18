import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import LanguageScreen from './Pages/LanguageScreen'
import RegistrationScreen from './Pages/RegistrationScreen'

const Stack = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LanguageScreen" component={LanguageScreen}/>
                <Stack.Screen name="RegistrationScreen" component={RegistrationScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppStack;