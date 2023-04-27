import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../../utils/Diimensions';
import {useGlobal} from '../../Hooks/GloblaContext';
import MyButton from '../../components/MyButton';
import MyInput from '../../components/MyInput';

export default function Siginin() {
  const {colors, signIn} = useGlobal();

  const [logindata, setloginData] = useState({
    email: '',
    password: '',
  });

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors?.AppThemeColor}]}>
      <View style={[styles.box, {backgroundColor: colors?.BackgroundColor}]}>

          <Text style={{color: colors?.AppThemeColor, fontSize: 26}}>Sign in</Text>
          <MyInput
            value={logindata.email}
            onChangeText={txt => setloginData({...logindata, email: txt})}
            placeholder="please enter your email"
          />

          <MyInput
            value={logindata.password}
            onChangeText={txt => setloginData({...logindata, password: txt})}
            placeholder="please enter your password"
            
          />

          <MyButton title="submit" onPress={() => signIn({
    email: 'sangapogurajesh@gmail.com',
    password: '',
  })} />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: DEVICE_WIDTH * 0.9,
    height: DEVICE_HEIGHT * 0.6,
    borderRadius: 30,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    overflow: 'hidden',
    alignItems:'center',
    justifyContent:'center',


    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
