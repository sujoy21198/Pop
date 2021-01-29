import React, { Component } from 'react'
import { View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Text } from 'native-base'
import BaseColor from '../Core/BaseTheme'
import { heightToDp, widthToDp } from '../Responsive'
import TopLogo from '../assets/TopLogo'
import Income from '../assets/Income'


export default class IncomeScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: BaseColor.BackgroundColor, flex: 1 }}>
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
                            <Text style={{ color: '#fff', marginTop: heightToDp("1%"), alignSelf: 'center', fontFamily: 'Oswald-Medium' }}>ENGLISH</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: BaseColor.Hindi, width: widthToDp("15%"), height: heightToDp("5%"), marginLeft: widthToDp("4%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1%"), alignSelf: 'center', fontFamily: 'Oswald-Medium' }}>हिन्दी</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: BaseColor.Ho, width: widthToDp("15%"), height: heightToDp("5%"), marginLeft: widthToDp("4%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("0.5%"), alignSelf: 'center', fontFamily: 'Oswald-Medium' }}>ʤʌgʌr</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: BaseColor.Uridia, width: widthToDp("15%"), height: heightToDp("5%"), marginLeft: widthToDp("4%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1%"), alignSelf: 'center', fontFamily: 'Oswald-Medium' }}>ଓଡ଼ିଆ</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: BaseColor.Santhali, width: widthToDp("17%"), height: heightToDp("5%"), marginLeft: widthToDp("4%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1%"), alignSelf: 'center', fontFamily: 'Oswald-Medium' }}>ᱥᱟᱱᱛᱟᱲᱤ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomColor: BaseColor.Stroke, borderBottomWidth: 1, marginTop: heightToDp('1.5%'), width: widthToDp("100%") }}></View>
                <Text style={{ marginLeft: widthToDp("3%"), marginTop: heightToDp("2%"), fontSize: widthToDp("7%"), fontFamily: 'Oswald-Medium' }}>LIVESTOCK</Text>
                <View style={{ backgroundColor: BaseColor.Red, height: heightToDp("6%"), width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("1%"), borderRadius: 10 }}>
                    <View style={{ marginLeft: widthToDp("3%"), marginTop: heightToDp("0.7%"), flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', width: widthToDp("20%") }}>
                            <Income />
                            <Text style={{ marginLeft: widthToDp("3%"), fontSize: widthToDp("5%"), fontFamily: 'Oswald-Medium', color: 'white' }}>INCOME</Text>
                        </View>
                        <Text style={{ marginLeft: widthToDp("45%"), fontSize: widthToDp("5%"), fontFamily: 'Oswald-Medium', color: 'white' }}>60000</Text>
                        <Text style={{ marginLeft: widthToDp("3%"), fontSize: widthToDp("5%"), fontFamily: 'Oswald-Medium', color: 'white' }}>₹</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', marginTop: heightToDp("2%"), marginLeft: widthToDp("3%"), backgroundColor: 'white', borderRadius: 10, width: widthToDp("40%"), height: heightToDp("8%") }}>
                        <View style={{ width: widthToDp("19%"), height: heightToDp("9%") }}>
                            <Text style={{ marginLeft: widthToDp("3%"), fontSize: widthToDp("7%"), fontFamily: 'Oswald-Medium', color: 'black', marginTop: heightToDp("1.3%") }}>23100</Text>
                        </View>
                        <Text style={{ marginLeft: widthToDp("13%"), fontSize: widthToDp("8%"), fontFamily: 'Oswald-Medium', color: 'black', marginTop: heightToDp("1%") }}>₹</Text>
                    </View>

                    <TouchableOpacity>
                        <View style={{ backgroundColor: "#fff", height: heightToDp("6%"), width: widthToDp("25%"), borderRadius: 100, marginTop: heightToDp("3.5%"), marginLeft: widthToDp("24%") }}>
                            <Text style={{ fontSize: widthToDp("4%"), color: "#000", marginTop: heightToDp("1.5%"), alignSelf: 'center', fontFamily: 'Oswald-Medium' }}>CLEAR</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={{ flexDirection: 'row', marginTop: heightToDp("3%"), marginLeft: widthToDp("3%") }}>
                        <Image
                            source={require('../assets/2000-Note.png')}
                            style={{ height: heightToDp("9%"), width: widthToDp("45%"), borderRadius: 10 }}
                        />

                        <Image
                            source={require('../assets/500-Note.jpg')}
                            style={{ height: heightToDp("9%"), width: widthToDp("40%"), borderRadius: 10, marginLeft: widthToDp("3.5%") }}
                        />

                    </View>

                    <View style={{ flexDirection: 'row', marginTop: heightToDp("3%"), marginLeft: widthToDp("3%") }}>
                        <Image
                            source={require('../assets/200-Note.jpg')}
                            style={{ height: heightToDp("9%"), width: widthToDp("45%"), borderRadius: 10 }}
                        />

                        <Image
                            source={require('../assets/100-Note.png')}
                            style={{ height: heightToDp("9%"), width: widthToDp("40%"), borderRadius: 10, marginLeft: widthToDp("3.5%") }}
                        />

                    </View>

                    <View style={{ flexDirection: 'row', marginTop: heightToDp("3%"), marginLeft: widthToDp("3%") }}>
                        <Image
                            source={require('../assets/50-Note.jpg')}
                            style={{ height: heightToDp("9%"), width: widthToDp("45%"), borderRadius: 10 }}
                        />

                        <Image
                            source={require('../assets/20-Note.png')}
                            style={{ height: heightToDp("9%"), width: widthToDp("40%"), borderRadius: 10, marginLeft: widthToDp("3.5%") }}
                        />

                    </View>

                    <View style={{ flexDirection: 'row', marginTop: heightToDp("3%"), marginLeft: widthToDp("3%") }}>
                        <Image
                            source={require('../assets/10-Note.png')}
                            style={{ height: heightToDp("9%"), width: widthToDp("45%"), borderRadius: 10 }}
                        />
                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ActualCultivationCostScreen')}>
                        <View style={{ backgroundColor: "#fff", height: heightToDp("6%"), width: widthToDp("30%"), borderRadius: 100, alignSelf: 'center', marginTop: heightToDp("2%") }}>
                            <Text style={{ fontSize: widthToDp("4%"), color: "#000", marginTop: heightToDp("1.7%"), alignSelf: 'center', fontFamily: 'Oswald-Medium' }}>NEXT</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{marginBottom:heightToDp("3%")}}></View>
                </ScrollView>
            </View>
        );
    }
}