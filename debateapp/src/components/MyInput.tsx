import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useGlobal } from '../Hooks/GloblaContext';
import { DEVICE_WIDTH } from '../utils/Diimensions';

type Props = {
    value: string;
    onChangeText : (txt: string) => void;
    placeholder: string;
}
export default function MyInput({value, onChangeText, placeholder}: Props) {
     const { colors } = useGlobal()
  return (
    <TextInput 
     value={value}
     onChangeText={onChangeText}
     placeholder={placeholder}
     style={{
        backgroundColor:'#f2f2f2',
        borderTopLeftRadius: 10,
        borderTopRightRadius:10,
        borderBottomColor: colors?.AppThemeColor,
        borderBottomWidth: 2,
        marginBottom: 10,
        width: DEVICE_WIDTH *0.8,
        height: 50
     }}
    />
  )
}