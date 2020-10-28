
import React from 'react';
import {StyleSheet , Text , View , ScrollView }  from 'react-native';
import 'react-native-gesture-handler';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Colors from './assets/Colors';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import Massages from './pages/Massages';
import Posts from './pages/Posts';
import splash from './pages/splash';

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
        // iconName = `home`;
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
      return <IconComponent name={iconName} size={25} color={Colors.lightGray} />;
    },
    
  }),
  tabBarOptions: {

    activeTintColor: Colors.theme,
    inactiveTintColor: Colors.lightGray,
    activeBackgroundColor : '#ddd',
    inactiveBackgroundColor :'white',
    
style:{
 
  // top:5,

}
  },
}
);
const SwitchNavigator = createSwitchNavigator({
  "before-login": TabNavigator,
  splash: splash,


},
  {
    initialRouteName: 'splash',
    headerMode: 'none'
  }
)
export default createAppContainer(SwitchNavigator);




