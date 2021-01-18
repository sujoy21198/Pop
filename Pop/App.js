import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Text, Item, ListItem, Radio, Right, Left } from 'native-base'
import { heightToDp, widthToDp } from './Responsive';
import BaseColor from './Core/BaseTheme';
import Logo from './assets/Logo';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign'
import Calendar from 'react-native-vector-icons/AntDesign'

export default class App extends Component {
    
  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignSelf: 'center', marginTop: heightToDp("2%") }}>
          <Logo />
        </View>
        <View style={{ alignSelf: 'center' }}>
          <Text style={{ color: BaseColor.SecondaryColor, fontSize: widthToDp("8%") }}>REGISTRATION</Text>
        </View>
        <ScrollView>
          <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%") }}>
            <Input
              placeholder="Full name"
              label="FULL NAME"
              labelStyle={{ fontSize: widthToDp("2.7%"), color: "#fff" }}
              style={{ width: widthToDp("10%"), color: BaseColor.SecondaryColor }}
            />
          </View>
          <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%") }}>
            <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
              <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>GENDER</Text>
              <Icon
                name="down"
                style={{ color: "#fff", marginLeft: widthToDp("62%") }}
                size={25}
              />
            </View>
            <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
          </View>
          <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("2%") }}>
            <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
              <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>AGE</Text>
              <Calendar
                name="calendar"
                style={{ color: "#fff", marginLeft: widthToDp("70%") }}
                size={25}
              />
            </View>
            <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
          </View>
          <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("2%") }}>
            <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
              <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>CONTACT NUMBER</Text>
            </View>
            <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
          </View>
          <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("2%") }}>
            <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
              <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>USERNAME</Text>
            </View>
            <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
          </View>
          <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("2%") }}>
            <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
              <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>PASSWORD</Text>
              <Calendar
                name="eye"
                style={{ color: "#fff", marginLeft: widthToDp("55%") }}
                size={25}
              />
            </View>
            <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
          </View>
          <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("2%") }}>
            <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
              <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>CONFIRM PASSWORD</Text>
              <Calendar
                name="eye"
                style={{ color: "#fff", marginLeft: widthToDp("35%") }}
                size={25}
              />
            </View>
            <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
          </View>
          <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("2%") }}>
            <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
              <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>STATE</Text>
              <Icon
                name="down"
                style={{ color: "#fff", marginLeft: widthToDp("66%") }}
                size={25}
              />
            </View>
            <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
          </View>
          <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("2%") }}>
            <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
              <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>DISTRICT</Text>
              <Icon
                name="down"
                style={{ color: "#fff", marginLeft: widthToDp("60%") }}
                size={25}
              />
            </View>
            <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
          </View>
          <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("2%") }}>
            <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
              <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>GRAMPANCHAYAT</Text>
              <Icon
                name="down"
                style={{ color: "#fff", marginLeft: widthToDp("41%") }}
                size={25}
              />
            </View>
            <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
          </View>
          <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("2%") }}>
            <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
              <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>VILLAGE</Text>
              <Icon
                name="down"
                style={{ color: "#fff", marginLeft: widthToDp("61%") }}
                size={25}
              />
            </View>
            <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
          </View>
          <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("2%") }}>
            <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
              <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>AADHAR NUMBER</Text>
            </View>
            <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
          </View>
          <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("2%") }}>
            <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
              <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>IMEI NUMBER-1</Text>
            </View>
            <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
          </View>
          <View style={{flexDirection:'row'}}>
            <Radio 
            selected={true}
            style={{marginLeft:widthToDp("3%"),marginTop:heightToDp("1%")}}
            />
            <Text style={{color:"#fff",marginTop:heightToDp("1%"),marginLeft:widthToDp("2%")}}>OTP</Text>

            <Radio 
            selected={false}
            style={{marginLeft:widthToDp("20%"),marginTop:heightToDp("1%")}}
            />
            <Text style={{color:"#fff",marginTop:heightToDp("1%"),marginLeft:widthToDp("1%")}}>FIELD OFFICER PASSWORD</Text>
          </View>

          <View style={{backgroundColor:BaseColor.SecondaryColor,marginTop:heightToDp("2%"),width:widthToDp("37%"),alignSelf:'center',height:heightToDp("5%"),borderRadius:100}}>
            <Text style={{alignSelf:'center',marginTop:heightToDp("1.2%"),fontWeight:'500',fontSize:widthToDp("5%")}}>SIGN UP</Text>
          </View>

          <View style={{flexDirection:'row',marginTop:heightToDp("1%"),alignSelf:'center'}}>
          <Text style={{color:"#fff"}}>You have an account?</Text>
          <Text style={{color:BaseColor.SecondaryColor}}>Sign in</Text>
          </View>

          <View style={{marginTop:heightToDp("10%")}}></View>
          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: heightToDp("100%"),
    backgroundColor: BaseColor.BackgroundColor
  }
})