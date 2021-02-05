import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from 'native-base'
import { heightToDp, widthToDp } from '../Responsive'
import BaseColor from '../Core/BaseTheme'
import Logo from '../assets/Logo'
import Icon from 'react-native-vector-icons/AntDesign'
import FloatingLabel from 'react-native-floating-labels'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import RBSheet from "react-native-raw-bottom-sheet"

export default class SigninScreen extends Component {
    render() {
        return (
            <KeyboardAwareScrollView style={{backgroundColor:BaseColor.BackgroundColor,flex:1}}>
            <View >
                <View style={{ marginTop: heightToDp("3%"), alignSelf: "center" }}>
                    <Logo />
                </View>
                <View style={{ marginTop: heightToDp("5%") }}>
                    <Text style={{ fontSize: widthToDp("7%"), alignSelf: 'center',fontFamily:'Oswald-SemiBold' }}>SIGN IN</Text>
                </View>
                <View style={{ marginTop: heightToDp("2%"), marginLeft: widthToDp("10%") }}>
                    <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={styles.formInput}
                        // onBlur={this.onBlur}
                    >CONTACT NUMBER</FloatingLabel>
                </View>
                {/* <View style={{ marginTop: heightToDp("5%"), marginLeft: widthToDp("10%") }}>
                    <Text style={{ fontSize: widthToDp("5%") }}>CONTACT NUMBER</Text>
                </View>
                <View style={{ marginTop: heightToDp("1%"), marginLeft: widthToDp("10%") }}>
                    <Text style={{ fontSize: widthToDp("6%") }}>1234567890</Text>
                </View>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: heightToDp('1.5%'), width: widthToDp("80%"), alignSelf: 'center' }}></View> */}
                <View style={{ marginTop: heightToDp("2%"), marginLeft: widthToDp("10%") }}>
                <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={styles.formInput}
                        // onBlur={this.onBlur}
                    >USERNAME</FloatingLabel>
                </View>
                {/* <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: heightToDp('1.5%'), width: widthToDp("80%"), alignSelf: 'center' }}></View> */}
                <View style={{ marginTop: heightToDp("2%"), marginLeft: widthToDp("10%"), flexDirection: 'row' }}>
                    <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={styles.formInput}
                        // onBlur={this.onBlur}
                    >PASSWORD</FloatingLabel>
                </View>
                {/* <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: heightToDp('1.5%'), width: widthToDp("80%"), alignSelf: 'center' }}></View> */}
                <View style={{ marginLeft: widthToDp("60.5%"), marginTop: heightToDp("0.5%") }}>
                    <Text style={{fontFamily:'Oswald-Medium'}}>FORGOT PASSWORD</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DashBoardScreen')}>
                    <View style={{ backgroundColor: BaseColor.SecondaryColor, marginTop: heightToDp("5%"), width: widthToDp("37%"), alignSelf: 'center', height: heightToDp("5%"), borderRadius: 100 }}>
                        <Text style={{ alignSelf: 'center', marginTop: heightToDp("0.5%"), fontWeight: '500', fontSize: widthToDp("5%"),fontFamily:'Oswald-Medium' }}>SIGN IN</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection:'row',alignSelf:'center',marginTop:heightToDp('1.5%')}}>
                    <Text style={{fontFamily:'Oswald-Medium'}}>You don't have an account?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('RegistrationScreen')}>
                    <Text style={{color:BaseColor.Red,fontFamily:'Oswald-Medium'}}> Please Sign up</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ borderBottomColor: BaseColor.Stroke, borderBottomWidth: 1, marginTop: heightToDp('1.5%'), width: widthToDp("100%")}}></View>

                <TouchableOpacity>
                    <View style={{ backgroundColor: BaseColor.SecondaryColor, marginTop: heightToDp("3%"), width: widthToDp("37%"), alignSelf: 'center', height: heightToDp("5%"), borderRadius: 100 }}>
                        <Text style={{ alignSelf: 'center', marginTop: heightToDp("0.4%"), fontWeight: '500', fontSize: widthToDp("5%"),fontFamily:'Oswald-Medium' }}>GUEST SIGN IN</Text>
                    </View>
                    {/* <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                      }}
                      height={300}
                      openDuration={250}
                      customStyles={{
                        container: {
                          justifyContent: "center",
                          alignItems: "center"
                        }
                      }}
                    >
                        <Text>hi</Text>
                    </RBSheet> */}
                </TouchableOpacity>
            </View>
            </KeyboardAwareScrollView>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 65,
        backgroundColor: 'white',
    },
    labelInput: {
        color: '#000',
        fontSize:widthToDp("4.6%"),
        fontFamily:'Oswald-Medium'
    },
    formInput: {
        borderBottomWidth: 1.5,
        borderColor: '#333',
        width:widthToDp("80%")
    },
    input: {
        borderWidth: 0
    }
});