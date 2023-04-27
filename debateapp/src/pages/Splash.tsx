import { View, Text, StatusBar, Image, Alert } from 'react-native'
import React from 'react'
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../utils/Diimensions'
import { useGlobal } from '../Hooks/GloblaContext'


export default function Splash() {
    const {colors, theme} = useGlobal();
Alert.alert(theme)
  return (
    <View style={{width: DEVICE_WIDTH, height: DEVICE_HEIGHT, alignItems:'center', justifyContent: 'center', backgroundColor: colors?.AppThemeColor}}>
         <StatusBar backgroundColor={colors?.AppThemeColor} barStyle={'light-content'} />
    <Image 
     source={require('../assets/debatewhitesplash.png')}
     style={{width: 150, height: 150}}
    />
    <Text style={{fontSize: 28, margin: 10,fontWeight: 'bold', color: colors?.textColor}}>Debate App</Text>
  </View>
  )
}