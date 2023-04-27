import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useGlobal } from '../Hooks/GloblaContext';
import { DEVICE_WIDTH } from '../utils/Diimensions';

type Props = {
    value: string;
    onChangeText : (txt: string) => void;
    placeholder: string;
    size?: number;
    multiline?:boolean;
    label?: string;
    isRequired?: boolean
}
export default function MyInput({value, onChangeText, placeholder, size, multiline, label, isRequired}: Props) {
     const { colors } = useGlobal()
  return (
    <View>
    <Text style={{alignSelf: 'flex-start', marginBottom: 10, fontSize: 18}}>{label ? label : placeholder} {isRequired ? '*' : ''}</Text>
    <TextInput 
     value={value}
     onChangeText={onChangeText}
     placeholder={placeholder}
     multiline={multiline}
     style={{
        backgroundColor:'#f2f2f2',
        borderTopLeftRadius: 10,
        borderTopRightRadius:10,
        borderBottomColor: colors?.AppThemeColor,
        borderBottomWidth: 1,
        marginBottom: 10,
        width: size ? DEVICE_WIDTH * size : DEVICE_WIDTH *0.8,
        maxHeight: multiline ? 300 : 50,
        minHeight :  multiline ? 100 : 50,
        textAlignVertical: multiline ? 'top' : 'auto'
     }}
    />
    </View>
  )
}