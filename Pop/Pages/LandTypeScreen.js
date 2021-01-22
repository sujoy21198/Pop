import React, { Component } from 'react'
import { View, Image, TouchableOpacity, FlatList } from 'react-native'
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
            <View style={{ backgroundColor: BaseColor.BackgroundColor }}>
                <View style={{ backgroundColor: 'white', width: widthToDp("100%"), height: heightToDp("13%") }}>
                    <View style={{ marginTop: heightToDp("4%"), marginLeft: widthToDp("3%") }}>
                        <TopLogo />
                    </View>
                </View>

                <View style={{ alignSelf: 'center', marginTop: heightToDp("2%") }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('NotificationsScreen')}>
                        <View style={{ backgroundColor: "#000", height: heightToDp("6%"), width: widthToDp("30%"), borderRadius: 100 }}>

                            <Text style={{ fontSize: widthToDp("4%"), color: "#fff", marginTop: heightToDp("1.7%"), marginLeft: widthToDp("2%") }}>NOTIFICATIONS</Text>

                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomColor: 'white', borderBottomWidth: 1, marginTop: heightToDp('1.5%'), width: widthToDp("100%") }}></View>
                <View style={{ flexDirection: 'row', marginTop: heightToDp("1%"), alignSelf: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: 'blue', width: widthToDp("15%"), height: heightToDp("5%"), marginLeft: widthToDp("2%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1%"), alignSelf: 'center' }}>ENGLISH</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: 'blue', width: widthToDp("15%"), height: heightToDp("5%"), marginLeft: widthToDp("2%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1%"), alignSelf: 'center' }}>हिन्दी</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: 'blue', width: widthToDp("15%"), height: heightToDp("5%"), marginLeft: widthToDp("2%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1%"), alignSelf: 'center' }}>ʤʌgʌr</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: 'blue', width: widthToDp("15%"), height: heightToDp("5%"), marginLeft: widthToDp("2%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1%"), alignSelf: 'center' }}>ଓଡ଼ିଆ</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <View style={{ backgroundColor: 'blue', width: widthToDp("17%"), height: heightToDp("5%"), marginLeft: widthToDp("2%"), borderRadius: 100 }}>
                            <Text style={{ color: '#fff', marginTop: heightToDp("1%"), alignSelf: 'center' }}>ᱥᱟᱱᱛᱟᱲᱤ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomColor: 'white', borderBottomWidth: 1, marginTop: heightToDp('1.5%'), width: widthToDp("100%") }}></View>
                <Text style={{ marginLeft: widthToDp("3%"), marginTop: heightToDp("2%"), fontSize: widthToDp("7%"), fontWeight: 'bold' }}>LAND TYPE</Text>
                {/* <View style={{ flexDirection: 'row', marginTop: heightToDp("5%") }}>
                    
                    <Text style={{ marginTop: heightToDp("2%"), marginLeft: widthToDp("5%") }}>ENGLISH</Text>
                    <View style={{ height: heightToDp("5%"), width: 1, backgroundColor: '#909090', marginTop: heightToDp("1%"), marginLeft: widthToDp("1%") }}></View>
                    <Text style={{ marginTop: heightToDp("2%"), marginLeft: widthToDp("1%") }}>हिन्दी</Text>
                    <View style={{ height: heightToDp("5%"), width: 1, backgroundColor: '#909090', marginTop: heightToDp("1%"), marginLeft: widthToDp("1%") }}></View>
                    <Text style={{ marginTop: heightToDp("2%"), marginLeft: widthToDp("1%") }}>ʤʌgʌr</Text>
                    <View style={{ height: heightToDp("5%"), width: 1, backgroundColor: '#909090', marginTop: heightToDp("1%"), marginLeft: widthToDp("1%") }}></View>
                    <Text style={{ marginTop: heightToDp("2%"), marginLeft: widthToDp("1%") }}>ଓଡ଼ିଆ</Text>
                    <View style={{ height: heightToDp("5%"), width: 1, backgroundColor: '#909090', marginTop: heightToDp("1%"), marginLeft: widthToDp("1%") }}></View>
                    <Text style={{ marginTop: heightToDp("2%"), marginLeft: widthToDp("1%") }}>ᱥᱟᱱᱛᱟᱲᱤ</Text>
                </View> */}
                {/* <Image
                style={{width:30,height:30}}
                source={{uri:'https://upload.wikimedia.org/wikipedia/commons/4/48/Basketball.jpeg'}}
                /> */}
                <View>
                    {/* <FlatGrid
                        style={{ marginTop: heightToDp("1%"), marginBottom: heightToDp("74%") }}
                        bounces={true}
                        itemDimension={130}
                        data={data}
                        bouncesZoom={true}
                        renderItem={({ item }) => (
                            <TouchableOpacity>
                                <View style={{ backgroundColor: 'white', width: widthToDp("46%"), height: heightToDp("30%"), elevation: 10, borderRadius: 10 }}>
                                    <View style={{ backgroundColor: "#000", height: heightToDp("7%"), borderRadius: 10 }}>
                                        <Text style={{ color: "#fff", fontSize: widthToDp("5%"), marginLeft: widthToDp("5%"), marginTop: heightToDp("1.8%") }}>{item.name}</Text>
                                    </View>
                                    <Image
                                        style={{ width: widthToDp("46%"), height: heightToDp("22.5%") }}
                                        source={{ uri: item.code }}
                                    />
                                </View>
                            </TouchableOpacity>
                        )}
                    /> */}
                    <FlatList
                        data={data}
                        style={{marginBottom:heightToDp("74%")}}
                        renderItem={({ item }) => 
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AnalysisScreen')}>
                            <Card style={{width:widthToDp("90%"),alignSelf:'center',height:heightToDp("30%"),marginBottom:heightToDp("1%"),borderRadius:20,backgroundColor:BaseColor.Red}}>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{width:widthToDp("45%")}}>
                                    <Text style={{color:'white',marginLeft:widthToDp("6%"),marginTop:heightToDp("1%"),fontSize:widthToDp("7%")}}>{item.name}</Text>
                                    </View>
                                <Icon
                                name="microphone"
                                size={23}
                                style={{color:'white',marginTop:heightToDp("2%"),marginLeft:widthToDp("36%")}}
                                />
                                </View>
                                
                                <Image
                                style={{ width: widthToDp("89%"), height: heightToDp("22.5%"),marginLeft:widthToDp("0.4%"),borderRadius:2,marginTop:heightToDp("2%") }}
                                source={{ uri: item.code }}
                                />
                            </Card>
                        </TouchableOpacity>
                }
                    />
                </View>
            </View>
        );
    }
}