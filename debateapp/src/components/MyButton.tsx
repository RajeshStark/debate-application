import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {DEVICE_WIDTH} from '../utils/Diimensions';
import {useGlobal} from '../Hooks/GloblaContext';

type Props = {
  title: string;
  onPress: () => void;
  size?: number;
  isDisabled?: boolean;
};
export default function MyButton({title, onPress, size, isDisabled}: Props) {
  const {colors} = useGlobal();

  return (
    <>
    {
      isDisabled ?
      <View
      style={[styles.container, {backgroundColor: '#bcb8b8',width: size ? DEVICE_WIDTH * size : DEVICE_WIDTH * 0.8}]}>
      <Text style={[styles.txt, {color: colors?.BackgroundColor}]}>
        {title}
      </Text>
      
    </View>
    :
    <TouchableOpacity
    style={[styles.container, {backgroundColor: colors?.AppThemeColor,width: size ? DEVICE_WIDTH * size : DEVICE_WIDTH * 0.8}]}
    onPress={onPress}>

    <Text style={[styles.txt, {color: colors?.BackgroundColor}]}>
      {title}
    </Text>
    
  </TouchableOpacity>
    }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  txt: {fontSize: 18},
});
