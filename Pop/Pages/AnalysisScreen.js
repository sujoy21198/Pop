import React, { Component } from 'react'
import { View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import BaseColor from '../Core/BaseTheme'
import { Card, Text } from 'native-base'
import TopLogo from '../assets/TopLogo'
import { widthToDp, heightToDp } from '../Responsive'
import { FlatGrid, SectionGrid } from 'react-native-super-grid'
import Icon from 'react-native-vector-icons/FontAwesome'



const data = [
    { name: 'HIGH LAND', code: 'https://shramajeewiki.com/images/English/00214136.jpg' },
    { name: 'MEDIUM LAND', code: 'https://timesofindia.indiatimes.com/thumb/msid-60012970,imgsize-2640154,width-400,resizemode-4/60012970.jpg' },
    { name: 'LOW LAND', code: 'https://www.biggovernment.news/wp-content/uploads/sites/59/2017/06/farmer-plow-field.jpg' }
]

export default class LandTypeScreen extends Component {
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

                            <Text style={{ fontSize: widthToDp("4%"), color: "#fff", marginTop: heightToDp("1.4%"),alignSelf:'center' ,fontFamily:'Oswald-Medium'}}>NOTIFICATIONS</Text>

                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomColor: 'white', borderBottomWidth: 1, marginTop: heightToDp('1.5%'), width: widthToDp("100%") }}></View>
                <View style={{ flexDirection: 'row', marginTop: heightToDp("1%"), alignSelf: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: 'blue', width: widthToDp("15%"), height: heightToDp("5%"), marginLeft: widthToDp("2%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1%"), alignSelf: 'center',fontFamily:'Oswald-Medium' }}>ENGLISH</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: 'blue', width: widthToDp("15%"), height: heightToDp("5%"), marginLeft: widthToDp("2%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1%"), alignSelf: 'center',fontFamily:'Oswald-Medium' }}>हिन्दी</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: 'blue', width: widthToDp("15%"), height: heightToDp("5%"), marginLeft: widthToDp("2%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("0.6%"), alignSelf: 'center',fontFamily:'Oswald-Medium' }}>ʤʌgʌr</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: 'blue', width: widthToDp("15%"), height: heightToDp("5%"), marginLeft: widthToDp("2%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1%"), alignSelf: 'center',fontFamily:'Oswald-Medium' }}>ଓଡ଼ିଆ</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: 'blue', width: widthToDp("17%"), height: heightToDp("5%"), marginLeft: widthToDp("2%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1%"), alignSelf: 'center',fontFamily:'Oswald-Medium' }}>ᱥᱟᱱᱛᱟᱲᱤ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomColor: 'white', borderBottomWidth: 1, marginTop: heightToDp('1.5%'), width: widthToDp("100%") }}></View>
                
                <ScrollView>
                    <View style={{ backgroundColor: BaseColor.Red, width: widthToDp("90%"), height: heightToDp("30%"), alignSelf: 'center', marginTop: heightToDp("2%"), borderRadius: 10 }}>
                        <Text style={{ color: 'white', marginLeft: widthToDp("4%"), marginTop: heightToDp('1.5%'), fontSize: widthToDp("5%"),fontFamily:'Oswald-Medium' }}>COST BENEFIT ANALYSIS</Text>
                        <View style={{ backgroundColor: 'white', width: widthToDp("90%"), height: heightToDp("23.5%"), borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginTop: heightToDp("2%") }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginTop: heightToDp("4%"), marginLeft: widthToDp("2%") }}>
                                    <Text style={{fontFamily:'Oswald-Medium'}}>LAND TYPE</Text>
                                    <Text style={{fontFamily:'Oswald-Light'}}>Low Land</Text>

                                    <Text style={{ marginTop: heightToDp("3%"),fontFamily:'Oswald-Medium' }}>AREA</Text>
                                    <Text style={{fontFamily:'Oswald-Light'}}>Area 0.92 Decimal</Text>
                                </View>
                                <Image
                                    style={{ height: heightToDp("20%"), width: widthToDp("50%"), marginTop: heightToDp("2%"), marginLeft: widthToDp("7%"), borderRadius: 10 }}
                                    source={{ uri: 'https://static.toiimg.com/photo/77876184.cms' }}
                                />
                            </View>
                        </View>
                    </View>


                    <View style={{ backgroundColor: BaseColor.Red, width: widthToDp("90%"), height: heightToDp("30%"), alignSelf: 'center', marginTop: heightToDp("2%"), borderRadius: 10 }}>
                        <Text style={{ color: 'white', marginLeft: widthToDp("4%"), marginTop: heightToDp('1.5%'), fontSize: widthToDp("5%"),fontFamily:'Oswald-Medium' }}>COST BENEFIT ANALYSIS</Text>
                        <View style={{ backgroundColor: 'white', width: widthToDp("90%"), height: heightToDp("32%"), borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginTop: heightToDp("2%") }}>
                            <View style={{ flexDirection: 'row', marginLeft: widthToDp("4%"), marginTop: heightToDp('1%') }}>
                                <Text style={{fontFamily:'Oswald-Medium'}}>Description</Text>
                                <Text style={{ marginLeft: widthToDp("52%"),fontFamily:'Oswald-Medium' }}>Amount</Text>
                            </View>
                            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: heightToDp('1.5%'), width: widthToDp("90%") }}></View>
                            <View style={{ flexDirection: 'row', marginLeft: widthToDp("4%"), marginTop: heightToDp('2%') }}>
                                <Text style={{fontFamily:'Oswald-Medium'}}>Total cost of cultivation</Text>
                                <Text style={{ marginLeft: widthToDp("35%"),fontFamily:'Oswald-Medium' }}>Amount</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: widthToDp("4%"), marginTop: heightToDp('2%') }}>
                                <Text style={{fontFamily:'Oswald-Medium'}}>Total income from crop</Text>
                                <Text style={{ marginLeft: widthToDp("36%"),fontFamily:'Oswald-Medium' }}>Amount</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: widthToDp("4%"), marginTop: heightToDp('2%') }}>
                                <Text style={{fontFamily:'Oswald-Medium'}}>Production</Text>
                                <Text style={{ marginLeft: widthToDp("52%"),fontFamily:'Oswald-Medium' }}>Amount</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: widthToDp("4%"), marginTop: heightToDp('2%') }}>
                                <Text style={{fontFamily:'Oswald-Medium'}}>Cost Per kg</Text>
                                <Text style={{ marginLeft: widthToDp("51%"),fontFamily:'Oswald-Medium' }}>Amount</Text>
                            </View>
                            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: heightToDp('1.5%'), width: widthToDp("90%") }}></View>
                            <View style={{ flexDirection: 'row', marginLeft: widthToDp("4%"), marginTop: heightToDp('2%') }}>
                                <Text style={{fontSize: widthToDp("6%"),fontFamily:'Oswald-Bold' }}>Net Profit</Text>
                                <Text style={{ marginLeft: widthToDp("40%"), fontWeight: 'bold', fontSize: widthToDp("6%"),fontFamily:'Oswald-Bold' }}>Amount</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginBottom: heightToDp("10%") }}></View>
                </ScrollView>
                <View style={{ height: heightToDp("10%") }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <View style={{ backgroundColor: "#fff", height: heightToDp("6%"), width: widthToDp("30%"), borderRadius: 100, marginLeft: widthToDp("20%"), marginTop: heightToDp("2%") }}>
                                <Text style={{ fontSize: widthToDp("4%"), color: "#000", marginTop: heightToDp("1.4%"), alignSelf: 'center',fontFamily:'Oswald-Medium' }}>CANCEL</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('StepOneScreen')}>
                            <View style={{ backgroundColor: "#fff", height: heightToDp("6%"), width: widthToDp("30%"), borderRadius: 100, marginLeft: widthToDp("2%"), marginTop: heightToDp("2%") }}>
                                <Text style={{ fontSize: widthToDp("4%"), color: "#000", marginTop: heightToDp("1.4%"), alignSelf: 'center' ,fontFamily:'Oswald-Medium'}}>DONE</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        );
    }
}