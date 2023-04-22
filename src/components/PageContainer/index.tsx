import { View, } from '@tarojs/components'
import NavCustomBar from '../../components/NavCustomBar';
import './index.scss'


export default (props) => {
  return (
    <View className='page'>
      <NavCustomBar mainTitle='刘梓琳的婚礼纪' needBackIcon={false} />
      <View style={{ height: 84 }} />

      {props.children}
    </View>
  )
}
