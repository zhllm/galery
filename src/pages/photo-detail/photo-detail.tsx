import { Component, PropsWithChildren } from 'react'
import Taro from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components'
import PageContainer from '../../components/PageContainer';
import { useDetail } from './useDetail';
import './photo-detail.scss'


const urls = [
  'https://cdn.pixabay.com/photo/2016/09/03/20/44/girl-1642695_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/03/31/08/32/beauty-2190682_1280.jpg',
  'https://cdn.pixabay.com/photo/2019/02/26/13/31/joan-of-arc-4022017_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/11/15/08/14/beauty-3816733_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/02/15/09/52/woman-2068125_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/03/02/13/55/beauty-655958_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/03/28/00/39/woman-695456_1280.jpg',
]

export default () => {
  const { index, setIndex } = useDetail();
  return (
    <PageContainer
      needBackIcon={true}
    >
      <View className='photo-derail-body'>
        <View className='photo-derail-wrapper-container'>
          <Swiper
            className='photo-derail-wrapper'
            indicatorColor='#999'
            indicatorActiveColor='#fff'
            circular
            indicatorDots={false}
            autoplay
            onChange={(v) => {
              console.log('indexindexindexindexindexindex', v);
              setIndex(Number(v.detail.current));
            }}
          >
            <SwiperItem itemId='0'>
              <View className='photo-derail-swiperItem'>
                <Image className='photo-derail-swiperImage' src='https://cdn.pixabay.com/photo/2018/03/16/21/24/fantasy-3232570_1280.jpg' />
              </View>
            </SwiperItem>
            <SwiperItem itemId='1'>
              <View className='photo-derail-swiperItem'>
                <Image className='photo-derail-swiperImage' src='https://cdn.pixabay.com/photo/2017/08/05/14/47/people-2584168_1280.jpg' />
              </View>
            </SwiperItem>
            <SwiperItem itemId='2'>
              <View className='photo-derail-swiperItem'>
                <Image className='photo-derail-swiperImage' src='https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644_1280.jpg' />
              </View>
            </SwiperItem>
            <SwiperItem itemId='3'>
              <View className='photo-derail-swiperItem'>
                <Image className='photo-derail-swiperImage' src='https://cdn.pixabay.com/photo/2018/04/09/10/07/woman-3303696_1280.jpg' />
              </View>
            </SwiperItem>
            <SwiperItem itemId='4'>
              <View className='photo-derail-swiperItem'>
                <Image className='photo-derail-swiperImage' src='https://cdn.pixabay.com/photo/2014/12/30/13/19/girls-583917_1280.jpg' />
              </View>
            </SwiperItem>
          </Swiper>
          <View className='photo-derail-indicatorDots'>
            {
              [0, 1, 2, 3, 4].map(i => {
                console.log('indexindexindex', index === i);
                return <View className={`photo-derail-indicator-item ${index === i ? 'photo-derail-indicator-item-active' : ''}`}></View>
              })
            }
          </View>
        </View>
        <View className='photo-derail-persion'>
          <View className='Title'>
            <Text>明先生&诗女士</Text>
          </View>
          <View className='photo-derail-description'>
            <Text className='subTitle'>Chlose · 三亚</Text>
            <Text className='time'> Jan 12, 2022 </Text>
          </View>
        </View>
        <View className='photo-derail-images'>
          {
            urls.map((url) => {
              return (
                <View className='item'>
                  <Image src={url} key={url} className='itemImage' mode="widthFix" />
                </View>
              )
            })
          }
        </View>
      </View>
    </PageContainer>
  )
}
