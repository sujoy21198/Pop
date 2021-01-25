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

export default class StepTwoScreen extends Component {
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

                            <Text style={{ fontSize: widthToDp("4%"), color: "#fff", marginTop: heightToDp("1.4%"), alignSelf:'center',fontFamily:'Oswald-Medium' }}>NOTIFICATIONS</Text>

                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomColor: BaseColor.Stroke, borderBottomWidth: 1, marginTop: heightToDp('1.5%'), width: widthToDp("100%") }}></View>
                <View style={{ flexDirection: 'row', marginTop: heightToDp("1%"), marginLeft:widthToDp("1%") }}>
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
                            <Text style={{ color: '#fff', marginTop: heightToDp("1%"), alignSelf: 'center' ,fontFamily:'Oswald-Medium'}}>ଓଡ଼ିଆ</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: 'blue', width: widthToDp("17%"), height: heightToDp("5%"), marginLeft: widthToDp("2%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1%"), alignSelf: 'center',fontFamily:'Oswald-Medium' }}>ᱥᱟᱱᱛᱟᱲᱤ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomColor: BaseColor.Stroke, borderBottomWidth: 1, marginTop: heightToDp('1.5%'), width: widthToDp("100%") }}></View>
                <Text style={{fontSize:widthToDp("6%"),marginLeft:widthToDp("3%"),marginTop:heightToDp("1%"),fontFamily:'Oswald-Medium'}}>STEP - 03/08</Text>
                <ScrollView>
                    <View style={{ backgroundColor: BaseColor.Red, width: widthToDp("90%"), height: heightToDp("26%"), alignSelf: 'center', marginTop: heightToDp("2%"), borderRadius: 10 }}>
                        <Text style={{ color: 'white', marginLeft: widthToDp("4%"), marginTop: heightToDp('1.5%'), fontSize: widthToDp("5%"),fontFamily:'Oswald-Medium' }}>PLOUGHING OF LAND</Text>
                        <View style={{ backgroundColor: 'white', width: widthToDp("90%"), height: heightToDp("20%"), borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginTop: heightToDp("1%") }}>
                            <View>
                                <Image
                                    style={{ height: heightToDp("20%"), width: widthToDp("90%"), borderBottomLeftRadius: 10, borderBottomRightRadius:10 }}
                                    source={{ uri: 'https://travel.paintedstork.com/blog/wp-content/uploads/2015/04/farmer-plough.jpg' }}
                                />
                            </View>
                        </View>
                    </View>


                    <View style={{ backgroundColor: BaseColor.Red, width: widthToDp("90%"), height: heightToDp("13%"), alignSelf: 'center', marginTop: heightToDp("2%"), borderRadius: 10 }}>
                        <Text style={{ color: 'white', marginLeft: widthToDp("4%"), marginTop: heightToDp('1.5%'), fontSize: widthToDp("5%"),fontFamily:'Oswald-Medium' }}>DESCRIPTION</Text>
                        <View style={{ backgroundColor: 'white', width: widthToDp("90%"), height: heightToDp("7%"), borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginTop: heightToDp("2%") }}>
                            <Text style={{marginLeft:widthToDp("2%"),marginTop:heightToDp("1%"),fontFamily:'Oswald-Light'}}>Plough land 2-3 times for main field preparation</Text>
                        </View>
                    </View>


                    <View style={{ backgroundColor: BaseColor.Red, width: widthToDp("90%"), height: heightToDp("30%"), alignSelf: 'center', marginTop: heightToDp("2%"), borderRadius: 10 }}>
                        <Text style={{ color: 'white', marginLeft: widthToDp("4%"), marginTop: heightToDp('1.5%'), fontSize: widthToDp("5%") ,fontFamily:'Oswald-Medium'}}>SELECTED ITEM</Text>
                        <View style={{ backgroundColor: 'white', width: widthToDp("90%"), height: heightToDp("23.5%"), borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginTop: heightToDp("2%") }}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{marginTop:heightToDp("1%"),marginLeft:widthToDp("2%")}}>
                                    <Text style={{fontSize:widthToDp("4%"),fontFamily:'Oswald-Medium'}}>Ploughing Type</Text>
                                    <Text style={{fontSize:widthToDp("5%"),fontFamily:'Oswald-Light'}}>Bitter Gourd</Text>
                                </View>
                                <Image
                                    style={{ height: heightToDp("20%"), width: widthToDp("50%"), marginTop: heightToDp("2%"), marginLeft: widthToDp("7%"), borderRadius: 10 }}
                                    source={{ uri: 'https://static.toiimg.com/photo/77876184.cms' }}
                                />
                            </View>
                        </View>
                    </View>


                    <View style={{ backgroundColor: BaseColor.Red, width: widthToDp("90%"), height: heightToDp("20%"), alignSelf: 'center', marginTop: heightToDp("2%"), borderRadius: 10 }}>
                        <Text style={{ color: 'white', marginLeft: widthToDp("4%"), marginTop: heightToDp('1.5%'), fontSize: widthToDp("5%"),fontFamily:'Oswald-Medium' }}>MATERIAL NEEDED</Text>
                        <View style={{ backgroundColor: 'white', width: widthToDp("90%"), height: heightToDp("17%"), borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginTop: heightToDp("2%") }}>
                            <View style={{flexDirection:'row',marginLeft:widthToDp("3%"),marginTop:heightToDp("2%")}}>
                                <Text style={{color:BaseColor.Red,fontFamily:'Oswald-Medium'}}>Description</Text>
                                <Text style={{color:BaseColor.Red,fontFamily:'Oswald-Medium',marginLeft:widthToDp("50%")}}>Amount</Text>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:widthToDp("3%"),marginTop:heightToDp("2%")}}>
                                <Text style={{fontFamily:'Oswald-Medium'}}>Ploughing with oxen</Text>
                                <Text style={{marginLeft:widthToDp("38%"),fontFamily:'Oswald-Medium'}}>Amount</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginBottom: heightToDp("10%") }}></View>
                </ScrollView>
                <View style={{ height: heightToDp("10%") }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('StepFourScreen')}>
                            <View style={{ backgroundColor: "#fff", height: heightToDp("6%"), width: widthToDp("30%"), borderRadius: 100, alignSelf:'center', marginTop: heightToDp("2%") }}>
                                <Text style={{ fontSize: widthToDp("4%"), color: "#000", marginTop: heightToDp("1.7%"), alignSelf: 'center',fontFamily:'Oswald-Medium' }}>NEXT</Text>
                            </View>
                        </TouchableOpacity>
                </View>

            </View>
        );
    }
}