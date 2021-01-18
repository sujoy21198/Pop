import React from 'react'
import { Image } from 'react-native'
import {heightToDp,widthToDp} from '../Responsive'


const Logo = () =>(
    <Image
    source={require('../assets/logo.png')}
    style={{height:heightToDp("30%"),width:widthToDp("60%")}}
    />
)

export default Logo