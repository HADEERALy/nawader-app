
import React from 'react';
import {StyleSheet , Text , View , ScrollView }  from 'react-native';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import Massages from './pages/Massages';
import Posts from './pages/Posts';

// import DailySales from '../app/components/DailySales';
// import AllStoreSales from '../app/components/AllStoreSales';
// import Logout from '../app/components/Logout';
import Ionicons from 'react-native-vector-icons/AntDesign';



const TabNavigator = createBottomTabNavigator(
  {
    
  "الرئيسية": FirstPage,
  "حسابي":SecondPage,
  "الرسائل": Massages,
  "منشوراتي":Posts,

  
},
//  {
//     initialRouteName : 'Home'
//   },
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'الرئيسية') {
        iconName = `home`;
      }
      else if(routeName === 'حسابي') {
        iconName = `user`;
      }
      else if(routeName === 'الرسائل') {
        iconName = `mail`;
      }
      else if(routeName === 'منشوراتي') {
        iconName = `copy1`;
      }
      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
    
  }),
  tabBarOptions: {

    activeTintColor: 'white',
    inactiveTintColor: '#000',
    activeBackgroundColor : '#7092be',
    inactiveBackgroundColor :'#ddd',

  },
}
);

export default createAppContainer(TabNavigator);




