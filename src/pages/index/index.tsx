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
      <PageContainer
        needBackIcon={false}
      >
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
          <Section
            mainTitle="LOVESHOW"
            subMainTitle="客片展示"
            list={[
              { url: 'https://cdn.pixabay.com/photo/2022/05/31/15/30/woman-7233762_1280.jpg' },
              { url: 'https://cdn.pixabay.com/photo/2016/12/27/16/01/romantic-1934223_1280.jpg' },
              { url: 'https://cdn.pixabay.com/photo/2016/11/23/17/56/couple-1854081_1280.jpg' },
              { url: 'https://cdn.pixabay.com/photo/2021/01/05/23/20/couple-5892661_1280.jpg' },
            ]}
          />
          <Section
            mainTitle="THEME"
            subMainTitle="新品发布"
            columnCount={1}
            length={2}
            list={[
              { url: 'https://cdn.pixabay.com/photo/2018/01/15/19/45/sunset-3084651_1280.jpg' },
              { url: 'https://cdn.pixabay.com/photo/2017/12/23/19/00/autumn-3035783_1280.jpg' },
            ]}
          />
          <Section
            mainTitle="SAMPLESS SHOW"
            subMainTitle="样片展示"
            columnCount={2}
            list={[
              { url: 'https://cdn.pixabay.com/photo/2015/09/08/11/47/latin-929819_1280.jpg' },
              { url: 'https://cdn.pixabay.com/photo/2016/09/27/04/22/casal-1697571_1280.jpg' },
              { url: 'https://cdn.pixabay.com/photo/2016/03/01/14/51/couple-1230519_1280.jpg' },
              { url: 'https://cdn.pixabay.com/photo/2015/11/30/23/10/wedding-1071321_1280.jpg' },
            ]}
          />
          <Section
            mainTitle="HOT START"
            subMainTitle="明星网红"
            columnCount={3}
            list={[
              { url: 'https://cdn.pixabay.com/photo/2016/06/16/02/26/character-1460508_1280.jpg' },
              { url: 'https://cdn.pixabay.com/photo/2016/07/08/23/17/girl-1505407_1280.jpg' },
              { url: 'https://cdn.pixabay.com/photo/2016/11/14/03/11/geisha-1822467_1280.jpg' },
              { url: 'https://cdn.pixabay.com/photo/2018/04/01/19/00/fantasy-3281795_1280.jpg' },
              { url: 'https://cdn.pixabay.com/photo/2020/03/23/05/51/photo-4959472_1280.jpg' },
              { url: 'https://cdn.pixabay.com/photo/2020/03/23/05/49/art-4959467_1280.jpg' },
            ]}
          />
          <Section mainTitle="FAN PRAISE" subMainTitle="品牌口碑" type="cardScroll" />
          <Section
            mainTitle="BRANCH"
            subMainTitle="全球旅拍"
            type="tagScroll"
            list={[
              { name: '三亚店', url: 'https://cdn.pixabay.com/photo/2019/06/29/04/01/kids-4305374_1280.jpg' },
              { name: '丽江店', url: 'https://cdn.pixabay.com/photo/2016/11/08/04/43/bali-1807464_1280.jpg' },
              { name: '青海店', url: 'https://cdn.pixabay.com/photo/2016/11/14/02/47/the-village-1822441_1280.jpg' },
              { name: '大理店', url: 'https://cdn.pixabay.com/photo/2014/12/16/19/59/indonesia-570661_1280.jpg' },
              { name: '巴厘岛店', url: 'https://cdn.pixabay.com/photo/2020/01/27/20/16/thailand-4798252_1280.jpg' },
              { name: '日本岛国', url: 'https://cdn.pixabay.com/photo/2020/06/20/02/08/bali-5319396_1280.jpg' },
            ]}
          />
        </View>
      </PageContainer>

    )
  }
}
