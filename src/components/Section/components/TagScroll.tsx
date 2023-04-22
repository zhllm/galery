import { Component, PropsWithChildren, useState } from 'react'
import { AtAvatar, AtRate } from 'taro-ui'
import Taro from '@tarojs/taro';
import { View, Swiper, Image, SwiperItem, Text } from '@tarojs/components';
import NavCustomBar from '../../../components/NavCustomBar';
import Title from '../../../components/Title';
import '../index.scss';


export default (props) => {
  const { mainTitle, subMainTitle, list } = props;
  const [active, setActive] = useState(0);
  return <View className='Section Section_tagScroll'>
    <Title mainTitle={mainTitle} subMainTitle={subMainTitle} />
    <View className='tag_branch_container'>
      {
        list.map((i, index) => {
          return (
            <View key={i.name} className={`tag_branch ${active === index ? 'tag_branch_active' : ''}`}>
              <Text className='tagname'> {i.name} </Text>
            </View>
          )
        })
      }
    </View>
    <Swiper
      className='Swiper'
      indicatorColor='#999'
      indicatorActiveColor='#333'
      circular
      indicatorDots={false}
      autoplay
      // duration={1500}
      onChange={(e) => {
        setActive(e.detail.current);
      }}
    >
      {
        list.map(i => {
          return (
            <SwiperItem key={i.name}>
              <View className='SwiperItem'>
                <View className='content'>
                  <Image className='image' mode="scaleToFill" src={i.url} />
                </View>
              </View>
            </SwiperItem>
          )
        })
      }
    </Swiper>
  </View>
}