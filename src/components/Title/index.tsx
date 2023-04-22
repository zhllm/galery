import Taro from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { AtIcon } from 'taro-ui'
import { Component } from 'react'
import './index.scss'


const Title = (props) => {
    const { mainTitle, subMainTitle } = props;
    return (
        <View className='titleContainer'>
            <View className='titleLeft'>
                <View className='specialTitle'><Text className='titleText'>{mainTitle || "LOVESHOW"}</Text></View>
                <View><Text className='subTitle'>{subMainTitle || "客片展示"}</Text></View>
            </View>
            <View className='titleRight'>
                <AtIcon value='chevron-right' size='20'></AtIcon>
            </View>
        </View>
    )
}


export default Title;
