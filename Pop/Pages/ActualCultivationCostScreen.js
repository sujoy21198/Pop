import React, { Component } from 'react'
import { View ,StyleSheet,TouchableOpacity} from 'react-native'
import BaseColor from '../Core/BaseTheme'
import { Card, Text } from 'native-base'
import TopLogo from '../assets/TopLogo'
import { widthToDp, heightToDp } from '../Responsive'
import FloatingLabel from 'react-native-floating-labels'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


export default class ActualCultivationCost extends Component {
    render() {
        return (
            <KeyboardAwareScrollView style={{ backgroundColor: BaseColor.BackgroundColor, flex: 1 }}>
            <View >
                <View style={{ backgroundColor: 'white', width: widthToDp("100%"), height: heightToDp("13%") }}>
                    <View style={{ marginTop: heightToDp("4%"), marginLeft: widthToDp("3%") }}>
                        <TopLogo />
                    </View>
                </View>

                <View style={{ alignSelf: 'center', marginTop: heightToDp("2%") }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('NotificationsScreen')}>
                        <View style={{ backgroundColor: "#000", height: heightToDp("6%"), width: widthToDp("30%"), borderRadius: 100 }}>
                            <Text style={{ fontSize: widthToDp("4%"), color: "#fff", marginTop: heightToDp("1.4%"), alignSelf: 'center', fontFamily: 'Oswald-Medium' }}>NOTIFICATIONS</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomColor: BaseColor.Stroke, borderBottomWidth: 1, marginTop: heightToDp('1.5%'), width: widthToDp("100%") }}></View>
                <View style={{ flexDirection: 'row', marginTop: heightToDp("1%"), marginLeft: widthToDp("1%") }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: BaseColor.English, width: widthToDp("15%"), height: heightToDp("5%"), marginLeft: widthToDp("2%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1%"), alignSelf: 'center',fontFamily:'Oswald-Medium' }}>ENGLISH</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: BaseColor.Hindi, width: widthToDp("15%"), height: heightToDp("5%"), marginLeft: widthToDp("4%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1%"), alignSelf: 'center',fontFamily:'Oswald-Medium' }}>हिन्दी</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: BaseColor.Ho, width: widthToDp("15%"), height: heightToDp("5%"), marginLeft: widthToDp("4%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("0.5%"), alignSelf: 'center',fontFamily:'Oswald-Medium' }}>ʤʌgʌr</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: BaseColor.Uridia, width: widthToDp("15%"), height: heightToDp("5%"), marginLeft: widthToDp("4%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1%"), alignSelf: 'center',fontFamily:'Oswald-Medium' }}>ଓଡ଼ିଆ</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: BaseColor.Santhali, width: widthToDp("17%"), height: heightToDp("5%"), marginLeft: widthToDp("4%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1%"), alignSelf: 'center',fontFamily:'Oswald-Medium' }}>ᱥᱟᱱᱛᱟᱲᱤ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomColor: BaseColor.Stroke, borderBottomWidth: 1, marginTop: heightToDp('1.5%'), width: widthToDp("100%") }}></View>
                <Text style={{ fontSize: widthToDp("6%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("1%"), fontFamily: 'Oswald-Medium' }}>ACTUAL CULTIVATION COST</Text>
                
                <View style={{ backgroundColor: 'white',height:heightToDp("24%"),width:widthToDp("95%"),alignSelf:'center',marginTop:heightToDp("3%"),borderRadius:10 }}>
                    <Text style={{ fontFamily: 'Oswald-Light',marginLeft:widthToDp("2%"),marginTop:heightToDp("1%") }}>PRODUCTION IN KGs</Text>
                    <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={styles.formInput}
                    // onBlur={this.onBlur}
                    >KG</FloatingLabel>
                    <Text style={{ fontFamily: 'Oswald-Light' ,marginLeft:widthToDp("2%"),marginTop:heightToDp("1%")}}>COST PER KG</Text>
                    <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={styles.formInput}
                    // onBlur={this.onBlur}
                    >₹</FloatingLabel>
                </View>

                <View style={{ height: heightToDp("10%") }}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('CostBenifitAnalysisScreen')}>
                            <View style={{ backgroundColor: "#fff", height: heightToDp("6%"), width: widthToDp("30%"), borderRadius: 100, alignSelf:'center', marginTop: heightToDp("2%") }}>
                                <Text style={{ fontSize: widthToDp("4%"), color: "#000", marginTop: heightToDp("1.4%"), alignSelf: 'center',fontFamily:'Oswald-Medium' }}>SUBMIT</Text>
                            </View>
                        </TouchableOpacity>
                </View>
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
        width:widthToDp("90%"),
        alignSelf:'center'
    },
    input: {
        borderWidth: 0
    }
});
