import React, { Component } from 'react'
import { View ,TouchableOpacity} from 'react-native'
import { Button, Text } from 'native-base'
import Logo from '../assets/Logo'
import { heightToDp, widthToDp } from '../Responsive'


export default class LanguageScreen extends Component {
    render() {
        return (
            <View>
                <View style={{ marginTop: heightToDp("3%"), alignSelf: "center" }}>
                    <Logo />
                </View>
                <View style={{marginTop: heightToDp("5%")}}>
                    <Text style={{ fontSize: widthToDp("7%"), alignSelf: 'center' }}>SELECT LANGUAGE</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('RegistrationScreen')}>
                <View style={{marginTop: heightToDp("5%")}}>
                    <Text style={{ fontSize: widthToDp("6%"), alignSelf: 'center' }}>ENGLISH</Text>
                </View>
                </TouchableOpacity>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1, marginTop:heightToDp('2.5%'),width:widthToDp("80%"),alignSelf:'center'}}></View>
                <View style={{marginTop: heightToDp("2.5%")}}>
                    <Text style={{ fontSize: widthToDp("6%"), alignSelf: 'center' }}>हिन्दी</Text>
                </View>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1, marginTop:heightToDp('2.5%'),width:widthToDp("80%"),alignSelf:'center'}}></View>
                <View style={{marginTop: heightToDp("2.5%")}}>
                    <Text style={{ fontSize: widthToDp("6%"), alignSelf: 'center' }}>ʤʌgʌr</Text>
                </View>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1, marginTop:heightToDp('2.5%'),width:widthToDp("80%"),alignSelf:'center'}}></View>
                <View style={{marginTop: heightToDp("2.5%")}}>
                    <Text style={{ fontSize: widthToDp("6%"), alignSelf: 'center' }}>ଓଡ଼ିଆ</Text>
                </View>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1, marginTop:heightToDp('2.5%'),width:widthToDp("80%"),alignSelf:'center'}}></View>
                <View style={{marginTop: heightToDp("2.5%")}}>
                    <Text style={{ fontSize: widthToDp("6%"), alignSelf: 'center' }}>ᱥᱟᱱᱛᱟᱲᱤ</Text>
                </View>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1, marginTop:heightToDp('2.5%'),width:widthToDp("80%"),alignSelf:'center'}}></View>

            </View>
        );
    }
}