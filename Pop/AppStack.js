import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import LanguageScreen from './Pages/LanguageScreen'
import RegistrationScreen from './Pages/RegistrationScreen'
import SigninScreen from './Pages/SigninScreen'
import DashBoardScreen from './Pages/DashBoardScreen'
import NotificationsScreen from './Pages/NotificationsScreen'
import NotificationDetailsScreen from './Pages/NotificationDetailsScreen'
import KnowledgeCenterScreen from './Pages/KnowledgeCenterScreen'
import CropsScreen from './Pages/CropsScreen'
import LandTypeScreen from './Pages/LandTypeScreen'

const Stack = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LanguageScreen" component={LanguageScreen}/>
                <Stack.Screen name="RegistrationScreen" component={RegistrationScreen}/>
                <Stack.Screen name="SigninScreen" component={SigninScreen}/>
                <Stack.Screen name="DashBoardScreen" component={DashBoardScreen}/>
                <Stack.Screen name="NotificationsScreen" component={NotificationsScreen}/>
                <Stack.Screen name="NotificationDetailsScreen" component={NotificationDetailsScreen}/>
                <Stack.Screen name="KnowledgeCenterScreen" component={KnowledgeCenterScreen}/>
                <Stack.Screen name="CropsScreen" component={CropsScreen}/>
                <Stack.Screen name="LandTypeScreen" component={LandTypeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppStack;