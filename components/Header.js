import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Image,
    TextInput ,
} from 'react-native';
import { calcWidth, calcHeight } from '../Dimension';
import Colors from '../assets/Colors';
export default class Header extends React.Component{
    render(){
    return (
    <View style={styles.containerHeader}>
      <View style={styles.searchBar}>
<TextInput
placeholder="ابحث ..."
placeholderTextColor={Colors.theme}
style={styles.searchText} 
/> 
<Image
    source={require('../assets/imgs/search2.png')}
    style={{ height: calcHeight(25.7), width: calcWidth(25.5),marginRight:30}}/>


</View>  
    </View>
  );
}
}
const styles = StyleSheet.create({
    containerHeader: {
      flex: 1,
    },
    searchBar:{
        marginTop:30,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: Colors.Graybackground,
        height: 40,
        borderRadius: 10,
        margin: 30,
        elevation: 5,
        justifyContent:'flex-end',
        padding:0
    },
    searchText:{
       fontSize:calcWidth(14)
    },
  });
