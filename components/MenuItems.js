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
import { Input } from 'react-native-elements';
import Colors from '../assets/Colors';
import { calcRatio, calcWidth, calcHeight } from '../Dimension';

export default class MenuItems extends React.Component{
    render(){
        return(
<View style={styles.menuItems}> 
    <ImageBackground source={this.props.itemImage}
    style={styles.image} >
    {/* <Text>hellllloooo</Text> */}
    </ImageBackground>
</View>
        );
    }
}
const styles = StyleSheet.create({
menuItems:{
    width:'29.333333%',
    height:'133%',
    padding:5,
    marginLeft:10,
    marginBottom:7,
    // backgroundColor:'#000',
    borderColor:'#000',
    borderWidth:1,
    borderRadius: 10,
    backgroundColor: '#F5FCFF',
justifyContent:'center',
paddingLeft:7
   },
image:{
    width: '95%',
    height: '82%',
    borderColor:'#000',
    // borderWidth:1,
    // borderRadius: 10,
    backgroundColor: '#F5FCFF',
}
});