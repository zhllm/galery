import { Component, PropsWithChildren } from 'react'
import Taro from '@tarojs/taro';
import { Text } from '@tarojs/components'
import PageContainer from '../../components/PageContainer';
import './photo-detail.scss'


export default class Index extends Component<PropsWithChildren, any> {

  goBackPage() {
    Taro.navigateBack();
  }

  render() {
    return (
      <PageContainer>
        <Text>hee</Text>
      </PageContainer>

    )
  }
}
