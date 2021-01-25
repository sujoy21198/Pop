import React, { Component, useEffect, useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Button, Text } from 'native-base'
import Logo from '../assets/Logo'
import { heightToDp, widthToDp } from '../Responsive'
import FloatingLabel from 'react-native-floating-labels'
import BaseColor from '../Core/BaseTheme'
const Sound = require('react-native-sound')


export default class LanguageScreen extends Component {

    sound = new Sound('http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg')
    // play = () => {
    //     SoundPlayer.playUrl('http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg')

    // }
    platsound = () => {
        this.sound.play()
    }
    render() {
        return (
            <View style={{ backgroundColor: BaseColor.BackgroundColor, flex: 1 }}>
                {/* <Button onPress={()=> this.platsound()}>
                    <Text>play</Text>
                </Button> */}
                <View style={{ marginTop: heightToDp("3%"), alignSelf: "center" }}>
                    <Logo />
                </View>
                <View style={{ backgroundColor: '#fff', height: heightToDp("43%"), width: widthToDp("90%"), marginLeft: widthToDp("5%"), marginTop: heightToDp("5%"), borderRadius: 20,elevation:10 }}>
                    <Text style={{ marginTop: heightToDp("4%"), alignSelf: 'center', fontSize: widthToDp("6%"),fontFamily:'Oswald-Medium' }}>SELECT LANGUAGE</Text>
                    <View style={{ flexDirection: 'row', marginTop: heightToDp("5%") }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: 'blue', width: widthToDp("30%"), height: heightToDp("6%"), marginLeft: widthToDp("10%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1.5%"), alignSelf: 'center',fontFamily:'Oswald-Medium' }}>ENGLISH</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={{ backgroundColor: 'blue', width: widthToDp("30%"), height: heightToDp("6%"), marginLeft: widthToDp("10%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1.7%"), alignSelf: 'center',fontWeight:'bold',fontSize:widthToDp("4.3%") }}>हिन्दी</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: heightToDp("4%") }}>
                        <TouchableOpacity>
                        <View style={{ backgroundColor: 'blue', width: widthToDp("30%"), height: heightToDp("6%"), marginLeft: widthToDp("10%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1.5%"), alignSelf: 'center',fontWeight:'bold',fontSize:widthToDp("4.3%") }}>ʤʌgʌr</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <View style={{ backgroundColor: 'blue', width: widthToDp("30%"), height: heightToDp("6%"), marginLeft: widthToDp("10%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1.7%"), alignSelf: 'center',fontWeight:'bold',fontSize:widthToDp("4.3%") }}>ଓଡ଼ିଆ</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                    <View style={{ marginTop: heightToDp("4%"),backgroundColor: 'blue', width: widthToDp("30%"), height: heightToDp("6%"),  borderRadius: 100,alignSelf:'center' }}>
                        <Text style={{ color: '#fff', marginTop: heightToDp("1.7%"), alignSelf: 'center',fontWeight:'bold',fontSize:widthToDp("4.3%") }}>ᱥᱟᱱᱛᱟᱲᱤ</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                {/* <View style={{marginTop: heightToDp("5%")}}>
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
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1, marginTop:heightToDp('2.5%'),width:widthToDp("80%"),alignSelf:'center'}}></View> */}

            </View>
        );
    }
}
