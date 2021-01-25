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
import AnalysisScreen from './Pages/AnalysisScreen'
import StepOneScreen from './Pages/StepOneScreen'
import StepTwoScreen from './Pages/StepTwoScreen'
import StepThreeScreen from './Pages/StepThreeScreen'
import StepFourScreen from './Pages/StepFourScreen'
import StepFiveScreen from './Pages/StepFiveScreen'
import StepSixScreen from './Pages/StepSixScreen'
import StepSevenScreen from './Pages/StepSevenScreen'
import StepEightScreen from './Pages/StepEightScreen'

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
                <Stack.Screen name="AnalysisScreen" component={AnalysisScreen}/>
                <Stack.Screen name="StepOneScreen" component={StepOneScreen}/>
                <Stack.Screen name="StepTwoScreen" component={StepTwoScreen}/>
                <Stack.Screen name="StepThreeScreen" component={StepThreeScreen}/>
                <Stack.Screen name="StepFourScreen" component={StepFourScreen}/>
                <Stack.Screen name="StepFiveScreen" component={StepFiveScreen}/>
                <Stack.Screen name="StepSixScreen" component={StepSixScreen}/>
                <Stack.Screen name="StepSevenScreen" component={StepSevenScreen}/>
                <Stack.Screen name="StepEightScreen" component={StepEightScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppStack;