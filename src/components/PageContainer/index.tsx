import { View, } from '@tarojs/components'
import NavCustomBar from '../../components/NavCustomBar';
import './index.scss'
import { useEffect, useState } from 'react';


export default (props) => {

  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    console.log('wx.getMenuButtonBoundingClientRect()', menuButtonObject)
    var sysinfo = wx.getSystemInfoSync();
    console.log('wx.getSystemInfoSync()', sysinfo)
    let statusBarHeight = sysinfo.statusBarHeight;
    let menuBottonHeight = menuButtonObject.height;
    let menuBottonTop = menuButtonObject.top;
    let navBarHeight = statusBarHeight + menuBottonHeight + (menuBottonTop - statusBarHeight) * 2;
    console.log('navBarHeight', navBarHeight);
    setNavHeight(navBarHeight);
  }, []);

  return (
    <View className='page'>
      <NavCustomBar mainTitle={props.mainTitle || '刘梓琳的婚礼纪'} needBackIcon={props.needBackIcon} navBarHeight={navHeight} />
      <View style={{ height: navHeight }} />
      {props.children}
    </View>
  )
}
