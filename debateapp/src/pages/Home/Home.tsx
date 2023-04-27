import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import {useGlobal} from '../../Hooks/GloblaContext';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../utils/Diimensions';

export default function Home() {
  const {colors} = useGlobal();
  return (
    <SafeAreaView>
      {/* <View style={[styles.header, {backgroundColor: colors?.textColor}]}>
        <Text style={{fontSize: 26,fontWeight:'700', fontFamily: 'roboto', color: colors?.AppThemeColor, fontStyle:'italic', }}>Debate app</Text>
        <Octicons name='bell-fill' size={25} color={colors?.AppThemeColor} />
      </View> */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
   width: DEVICE_WIDTH,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
   padding: 10,

  }
})