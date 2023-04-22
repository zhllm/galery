import { Component, PropsWithChildren } from 'react'
import Taro from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components'
import { AtIcon, AtGrid } from 'taro-ui';
import NavCustomBar from '../../components/NavCustomBar';
import PageContainer from '../../components/PageContainer';
import Section from '../../components/Section';
import './index.scss'


export default class Index extends Component<PropsWithChildren, any> {

  goBackPage() {
    Taro.navigateBack();
  }

  render() {
    return (
      <PageContainer>
        <View className='swiperContaier'>
          <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay
          >
            <SwiperItem>
              <View className='swiperItem'>
                <Image className='swiperImage' src='https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644_1280.jpg' />
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='swiperItem'>
                <Image className='swiperImage' src='https://cdn.pixabay.com/photo/2015/06/12/22/03/model-807555_1280.jpg' />
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='swiperItem'>
                <Image className='swiperImage' src='https://cdn.pixabay.com/photo/2023/04/06/01/26/heart-7902540_960_720.jpg' />
              </View>
            </SwiperItem>
          </Swiper>
        </View>

        <View className='pageContent'>
          <Section />
          <Section mainTitle="LOVESHOW" subMainTitle="客片展示" length={4} />
          <Section mainTitle="THEME" subMainTitle="新品发布" columnCount={1} length={2} />
          <Section mainTitle="SAMPLESS SHOW" subMainTitle="样片展示" columnCount={2} length={4} />
          <Section mainTitle="HOT START" subMainTitle="明星网红" columnCount={3} length={6} />
        </View>
      </PageContainer>

    )
  }
}
