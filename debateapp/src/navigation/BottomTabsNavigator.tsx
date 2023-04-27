import React, { useState } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home/Home';
import {useGlobal} from '../Hooks/GloblaContext';
import Profile from '../pages/Profile/Profile';
import Explore from '../pages/Explore/Explore';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Alert, View,TouchableOpacity } from 'react-native';
import Notifications from '../pages/Notifications/Notifications';
import AddPost from '../pages/AddPost/AddPost';
import MyModal from '../components/MyModal';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const {colors} = useGlobal();
  const [visible, setVisible] = useState(false)

  return (
    <>
    <Tab.Navigator screenOptions={{headerShown :false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: colors?.AppThemeColor,
          tabBarIcon: ({color, size, focused}) => (
            <AntDesign
              name="home"
              color={focused ? colors?.AppThemeColor : 'grey'}
              size={30}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarActiveTintColor: colors?.AppThemeColor,
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name="earth"
              color={focused ? colors?.AppThemeColor : 'grey'}
              size={30}
            />
          ),
        }}
      />


<Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{
          tabBarLabel: 'AddPost',
          tabBarActiveTintColor: colors?.AppThemeColor,
          tabBarButton: () => (
            <TouchableOpacity style={{
              borderColor: '#ededed',
              // borderWidth: 10,
              backgroundColor: colors?.AppThemeColor, width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center', marginTop: -20
              }}
              onPress={() => setVisible(!visible)}
              >
              <Entypo
              name="plus"
              color={'#fff'}
              size={30}
            />
            </TouchableOpacity>
          ),
        }}
      />


      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarActiveTintColor: colors?.AppThemeColor,
          tabBarIcon: ({color, size, focused}) => (
            <Octicons
              name="bell-fill"
              color={focused ? colors?.AppThemeColor : 'grey'}
              size={25}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: colors?.AppThemeColor,
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name="account"
              color={focused ? colors?.AppThemeColor : 'grey'}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
    <MyModal visible={visible} onDismiss={() => setVisible(false)} children={<AddPost cancel={() => setVisible(false)}/>}/>
    </>
  );
}


