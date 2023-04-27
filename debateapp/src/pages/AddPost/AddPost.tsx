import { View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import React,{useState} from 'react'
import { DEVICE_WIDTH } from '../../utils/Diimensions'
import { useGlobal } from '../../Hooks/GloblaContext'
import Entypo from 'react-native-vector-icons/Entypo'
import MyButton from '../../components/MyButton'
import MyInput from '../../components/MyInput'

export default function AddPost({cancel}) {
    const {colors} = useGlobal();
    const [text, settext] = useState('')

  return (
    <SafeAreaView>
     <View style={[styles.header, {backgroundColor: colors?.BackgroundColor}]}>
        <Entypo name="cross" size={30} color={colors?.textColor} onPress={cancel}/>
        <MyButton 
         title='Submit'
         onPress={() => {}}
         size={0.3}
         isDisabled={true}
        />
     </View>

     <TextInput 
       value={text}
       onChangeText={(txt) => settext(txt)}
       placeholder='Create Topic'
     />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    header: {
     width: DEVICE_WIDTH,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     padding: 10,
     shadowColor: '#000',
     shadowOffset: {
       width: 0,
       height: 3,
     },
     shadowOpacity: 0.27,
     shadowRadius: 4.65,
 
     elevation: 6,
  
    }
  })