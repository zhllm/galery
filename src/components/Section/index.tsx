import { Component, PropsWithChildren } from 'react'
import Taro from '@tarojs/taro';
import { View, Swiper, Image, CoverImage, Text } from '@tarojs/components'
import NavCustomBar from '../../components/NavCustomBar';
import Title from '../../components/Title';
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
  const { list = [1, 2, 3, 4], columnCount = 2, title, subTitle, mainTitle, subMainTitle, length } = props;
  return (
    <View>
      <Title mainTitle={mainTitle} subMainTitle={subMainTitle} />
      <View>
        <View className='gridContainer'>
          {
            (length ? new Array(length).fill(1) : list).map((i, index) => {
              return (
                <View className={`gridItem ${getClassname(columnCount, index)}`} >
                  <View className='gridItemContainer'>
                    <Image
                      className={`gridItemImg ${columnCount === 3 ? 'height156' : ''}`}
                      src='https://cdn.pixabay.com/photo/2022/07/21/12/37/fashion-7336161_1280.jpg'
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
