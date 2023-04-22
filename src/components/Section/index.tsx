import { Component, PropsWithChildren } from 'react'
import { AtAvatar, AtRate } from 'taro-ui'
import Taro from '@tarojs/taro';
import { View, Swiper, Image, SwiperItem, Text } from '@tarojs/components';
import NavCustomBar from '../../components/NavCustomBar';
import Title from '../../components/Title';
import TagScroll from './components/TagScroll';
import './index.scss'

const getClassname = (columnCount, index) => {
  if (columnCount === 1) {
    return 'fullWidth';
  } else if (columnCount === 2 && index % 2 === 0) {
    return 'margright16';
  } else if (columnCount === 3) {
    if (index % 3 === 2) {
      return 'thridColumns';
    }
    return 'thridColumns margright16';
  }
  return '';
}

export default (props) => {
  const { list, columnCount = 2, title, subTitle, mainTitle, subMainTitle, length, type } = props;
  console.log('propsprops', props);
  if (type === 'tagScroll') {
    return <TagScroll {...props} />
  }
  if (type === 'cardScroll') {
    return <View className='Section'>
      <Title mainTitle={mainTitle} subMainTitle={subMainTitle} />
      <Swiper
        className='Swiper'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots={false}
        // autoplay
        nextMargin="50px"
      >
        <SwiperItem>
          <View className='SwiperItem'>
            <View className='content'>
              <View className='header'>
                <View className='left'>
                  <AtAvatar
                    size="small"
                    circle
                    image='https://cdn.pixabay.com/photo/2017/10/01/21/15/adult-2807096_1280.jpg'
                  />
                  <View className='title'>
                    <Text className='titleText'>清浅</Text>
                    <Text className='subTitleText'>2020-6-14</Text>
                  </View>
                </View>
                <View className='right'>
                  <AtRate
                    value={5}
                    size={12}
                  // onChange={this.handleChange.bind(this)}
                  />
                </View>
              </View>
              <View>
                <Text className='contentText'>
                  输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，但不填写 onChange 函数时，该组件只读
                </Text>
                <View className='iamges'>
                  <Image className='image' mode="scaleToFill" src='https://cdn.pixabay.com/photo/2017/05/22/07/09/fashion-2333269_1280.jpg' />
                  <Image className='image' mode="scaleToFill" src='https://cdn.pixabay.com/photo/2017/05/22/07/09/fashion-2333269_1280.jpg' />
                  <Image className='image' mode="scaleToFill" src='https://cdn.pixabay.com/photo/2017/05/22/07/09/fashion-2333269_1280.jpg' />
                </View>
              </View>
            </View>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className='SwiperItem'>
            <View className='content'>
              <View className='header'>
                <View className='left'>
                  <AtAvatar
                    size="small"
                    circle
                    image='https://cdn.pixabay.com/photo/2017/10/01/21/15/adult-2807096_1280.jpg'
                  />
                  <View className='title'>
                    <Text className='titleText'>清浅</Text>
                    <Text className='subTitleText'>2020-6-14</Text>
                  </View>
                </View>
                <View className='right'>
                  <AtRate
                    value={5}
                    size={12}
                  // onChange={this.handleChange.bind(this)}
                  />
                </View>
              </View>
              <View>
                <Text className='contentText'>
                  输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，但不填写 onChange 函数时，该组件只读
                </Text>
                <View className='iamges'>
                  <Image className='image' mode="scaleToFill" src='https://cdn.pixabay.com/photo/2017/05/22/07/09/fashion-2333269_1280.jpg' />
                  <Image className='image' mode="scaleToFill" src='https://cdn.pixabay.com/photo/2017/05/22/07/09/fashion-2333269_1280.jpg' />
                  <Image className='image' mode="scaleToFill" src='https://cdn.pixabay.com/photo/2017/05/22/07/09/fashion-2333269_1280.jpg' />
                </View>
              </View>
            </View>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className='SwiperItem'>
            <View className='content'>
              <View className='header'>
                <View className='left'>
                  <AtAvatar
                    size="small"
                    circle
                    image='https://cdn.pixabay.com/photo/2017/10/01/21/15/adult-2807096_1280.jpg'
                  />
                  <View className='title'>
                    <Text className='titleText'>清浅</Text>
                    <Text className='subTitleText'>2020-6-14</Text>
                  </View>
                </View>
                <View className='right'>
                  <AtRate
                    value={5}
                    size={12}
                  // onChange={this.handleChange.bind(this)}
                  />
                </View>
              </View>
              <View>
                <Text className='contentText'>
                  输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，但不填写 onChange 函数时，该组件只读
                </Text>
                <View className='iamges'>
                  <Image className='image' mode="scaleToFill" src='https://cdn.pixabay.com/photo/2017/05/22/07/09/fashion-2333269_1280.jpg' />
                  <Image className='image' mode="scaleToFill" src='https://cdn.pixabay.com/photo/2017/05/22/07/09/fashion-2333269_1280.jpg' />
                  <Image className='image' mode="scaleToFill" src='https://cdn.pixabay.com/photo/2017/05/22/07/09/fashion-2333269_1280.jpg' />
                </View>
              </View>
            </View>
          </View>
        </SwiperItem>
      </Swiper>
    </View>
  }
  return (
    <View className='Section'>
      <Title mainTitle={mainTitle} subMainTitle={subMainTitle} />
      <View>
        <View className='gridContainer'>
          {
            (list ? list : new Array(length).fill(length || 4)).map((i, index) => {
              return (
                <View className={`gridItem ${getClassname(columnCount, index)}`} >
                  <View className='gridItemContainer'>
                    <Image
                      className={`gridItemImg ${columnCount === 3 ? 'height156' : ''}`}
                      src={i?.url || 'https://cdn.pixabay.com/photo/2022/07/21/12/37/fashion-7336161_1280.jpg'}
                      onClick={() => {
                        Taro.navigateTo({
                          url: '/pages/photo-detail/photo-detail',
                        });
                      }}
                    />
                  </View>
                  <View>
                    <View className='Title'>
                      <Text>{title || "明先生&诗女士"}</Text>
                    </View>
                    <View>
                      <Text className='subTitle'>{subTitle || '三亚'}</Text>
                    </View>
                  </View>
                </View>
              )
            })
          }
        </View>
      </View>
    </View>
  )
}
