import React from 'react';
import { View, Text } from '@tarojs/components';
import { AtIcon } from 'taro-ui'
import './index.scss'
import Taro from '@tarojs/taro';

export default (props) => {
  let { needBackIcon = true, mainTitle = '', navBarHeight } = props;
  console.log('navBarHeightnavBarHeight', props);
  return (
    <View className='nav_custom_bar' style={{ height: ` ${navBarHeight}px` }}>
      <AtIcon
        className={`nav_custom_bar_back ${needBackIcon ? '' : 'hidden'}`}
        value='chevron-left'
        size='22'
        color='#000'
        onClick={() => {
          if (needBackIcon) {
            Taro.navigateBack();
          }
        }}
      >

      </AtIcon>
      <Text className='nav_custom_bar_title'>{mainTitle}</Text>
      <View></View>
    </View>
  )
}
