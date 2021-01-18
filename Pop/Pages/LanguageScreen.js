import React, { Component } from 'react'
import {View} from 'react-native'
import {Button,Text} from 'native-base'

export default class LanguageScreen extends Component{
    render(){
        return(
            <View>
                <Button onPress={() => this.props.navigation.navigate("RegistrationScreen")}>
                    <Text>press me</Text>
                </Button>
            </View>
        );
    }
}