import React, { Component } from 'react'
import { View,TouchableOpacity } from 'react-native'
import { Text } from 'native-base'
import { heightToDp, widthToDp } from '../Responsive'
import BaseColor from '../Core/BaseTheme'
import Logo from '../assets/Logo'
import Icon from 'react-native-vector-icons/AntDesign'


export default class SigninScreen extends Component {
    render() {
        return (
            <View>
                <View style={{ marginTop: heightToDp("3%"), alignSelf: "center" }}>
                    <Logo />
                </View>
                <View style={{ marginTop: heightToDp("5%") }}>
                    <Text style={{ fontSize: widthToDp("7%"), alignSelf: 'center' }}>SIGN IN</Text>
                </View>
                <View style={{ marginTop: heightToDp("5%"), marginLeft: widthToDp("10%") }}>
                    <Text style={{ fontSize: widthToDp("5%") }}>CONTACT NUMBER</Text>
                </View>
                <View style={{ marginTop: heightToDp("1%"), marginLeft: widthToDp("10%") }}>
                    <Text style={{ fontSize: widthToDp("6%") }}>1234567890</Text>
                </View>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: heightToDp('1.5%'), width: widthToDp("80%"), alignSelf: 'center' }}></View>
                <View style={{ marginTop: heightToDp("5%"), marginLeft: widthToDp("10%") }}>
                    <Text style={{ fontSize: widthToDp("5%") }}>USERNAME</Text>
                </View>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: heightToDp('1.5%'), width: widthToDp("80%"), alignSelf: 'center' }}></View>
                <View style={{ marginTop: heightToDp("5%"), marginLeft: widthToDp("10%"), flexDirection: 'row' }}>
                    <Text style={{ fontSize: widthToDp("5%") }}>PASSWORD</Text>
                    <Icon
                        name="eye"
                        style={{ color: "#000", marginLeft: widthToDp("45%") }}
                        size={25}
                    />
                </View>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: heightToDp('1.5%'), width: widthToDp("80%"), alignSelf: 'center' }}></View>
                <View style={{ marginLeft: widthToDp("56%"), marginTop: heightToDp("2%") }}>
                    <Text>FORGOT PASSWORD</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                    <View style={{ backgroundColor: BaseColor.SecondaryColor, marginTop: heightToDp("5%"), width: widthToDp("37%"), alignSelf: 'center', height: heightToDp("5%"), borderRadius: 100 }}>
                        <Text style={{ alignSelf: 'center', marginTop: heightToDp("1%"), fontWeight: '500', fontSize: widthToDp("5%") }}>SIGN IN</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}