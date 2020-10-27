// Home screen
import React, { Component } from 'react';
//import react in our code.
import { Text, View ,StyleSheet,ImageBackground,Image,TextInput} from 'react-native';
import { colors } from 'react-native-elements';
//import all the components we are going to use.
import Header from "../components/Header";
import { calcWidth, calcHeight } from '../Dimension';
import Colors from '../assets/Colors';
export default class Posts extends React.Component {
  render() {
    return (
      <View style={styles.container}>
<ImageBackground source={require('../assets/imgs/rectangle.png')} 
    imageStyle={{ borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,}}
    style={{width:'100%',height:87}}
    >
        <View style={styles.header}>
        <Text style={styles.textStyle}>الاغنام</Text>
        <Image
source={require('../assets/imgs/menu2.png')}
style={{ height: calcHeight(30.5), width: calcWidth(45.5),marginRight:30}}
                />
                </View>
                <Header />
        </ImageBackground>

        <ImageBackground source={require('../assets/imgs/grayRec.png')} 
    style={{width:'100%',height:30,marginTop:30}}
    >
        <View style={styles.grayRecText}>
        <Text style={styles.grayRectextStyle}>الاقل سعرا</Text>
        <Text style={styles.grayRectextStyle}>تصفية حسب</Text>

                </View>
        </ImageBackground>

<View style={{  alignItems: 'center',
        marginTop: calcHeight(15),}}>
<View style={styles.card}>
<View style={{flex:1}}>
    <View style={styles.mainRow}>
        <View style={styles.startItem}>
    <Text style={{marginLeft:5,justifyContent:'flex-start',color:Colors.greenText,  fontSize: calcWidth(15), fontFamily: 'Montserrat-Regular', color: Colors.textCard ,marginRight:10}}>800</Text>
    <Text style={{justifyContent:'flex-start',color:Colors.greenText,  fontSize: calcWidth(15), fontFamily: 'Montserrat-Regular', color: Colors.textCard }}>S.R</Text>

    </View>
    <View style={styles.startItem}>
    <Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.DarkGray ,marginLeft:70}}> قونية تركية</Text>
    <Image
    source={require('../assets/imgs/smallSheep.png')}
    style={{ height: calcHeight(25.7), width: calcWidth(25.5),marginRight:30}}/>
    </View>
    </View>

    


    <View style={styles.mainRow}>
    <View style={styles.startItemLocation}>
    
    </View>
    <View style={styles.startItem}>
    <Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.DarkGray ,marginLeft:5}}> جدة</Text>
    <Image
    source={require('../assets/imgs/smallSheep.png')}
    style={{ height: calcHeight(25.7), width: calcWidth(25.5),marginRight:30}}/>
    </View>
    </View>



    <View style={styles.mainRow}>
        <View style={styles.startItem}>
        <Image
    source={require('../assets/imgs/littleStar.png')}
    style={{ marginLeft:5,height: calcHeight(20.7), width: calcWidth(20.5),marginRight:10,alignItems:'center'}}/>
        <Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.DarkGray}}> اضف للمفضلة</Text>
    </View>
    
    <View style={styles.startItem}>
    <Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.DarkGray ,marginLeft:32}}> قونية تركية</Text>
    <Image
    source={require('../assets/imgs/smallSheep.png')}
    style={{ height: calcHeight(25.7), width: calcWidth(25.5),marginRight:30}}/>
    </View>
    </View>

</View>
<Image
    source={require('../assets/imgs/goat2.jpg')}
    style={{ height: calcHeight(102.5), width: calcWidth(100.5) ,borderTopRightRadius: 10,
        borderBottomRightRadius: 10,}}
/>

</View>


<View style={styles.card}>
<View style={{flex:1}}>
    <View style={styles.mainRow}>
        <View style={styles.startItem}>
    <Text style={{marginLeft:5,justifyContent:'flex-start',color:Colors.greenText,  fontSize: calcWidth(15), fontFamily: 'Montserrat-Regular', color: Colors.textCard ,marginRight:10}}>800</Text>
    <Text style={{justifyContent:'flex-start',color:Colors.greenText,  fontSize: calcWidth(15), fontFamily: 'Montserrat-Regular', color: Colors.textCard }}>S.R</Text>

    </View>
    <View style={styles.startItem}>
    <Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.DarkGray ,marginLeft:70}}> قونية تركية</Text>
    <Image
    source={require('../assets/imgs/smallSheep.png')}
    style={{ height: calcHeight(25.7), width: calcWidth(25.5),marginRight:30}}/>
    </View>
    </View>

    


    <View style={styles.mainRow}>
    <View style={styles.startItemLocation}>
    
    </View>
    <View style={styles.startItem}>
    <Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.DarkGray ,marginLeft:5}}> جدة</Text>
    <Image
    source={require('../assets/imgs/smallSheep.png')}
    style={{ height: calcHeight(25.7), width: calcWidth(25.5),marginRight:30}}/>
    </View>
    </View>



    <View style={styles.mainRow}>
        <View style={styles.startItem}>
        <Image
    source={require('../assets/imgs/littleStar.png')}
    style={{ marginLeft:5,height: calcHeight(20.7), width: calcWidth(20.5),marginRight:10,alignItems:'center'}}/>
        <Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.DarkGray}}> اضف للمفضلة</Text>
    </View>
    
    <View style={styles.startItem}>
    <Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.DarkGray ,marginLeft:32}}> قونية تركية</Text>
    <Image
    source={require('../assets/imgs/smallSheep.png')}
    style={{ height: calcHeight(25.7), width: calcWidth(25.5),marginRight:30}}/>
    </View>
    </View>

</View>
<Image
    source={require('../assets/imgs/goat2.jpg')}
    style={{ height: calcHeight(102.5), width: calcWidth(100.5) ,borderTopRightRadius: 10,
        borderBottomRightRadius: 10,}}
/>

</View>




<View style={styles.card}>
<View style={{flex:1}}>
    <View style={styles.mainRow}>
        <View style={styles.startItem}>
    <Text style={{marginLeft:5,justifyContent:'flex-start',color:Colors.greenText,  fontSize: calcWidth(15), fontFamily: 'Montserrat-Regular', color: Colors.textCard ,marginRight:10}}>800</Text>
    <Text style={{justifyContent:'flex-start',color:Colors.greenText,  fontSize: calcWidth(15), fontFamily: 'Montserrat-Regular', color: Colors.textCard }}>S.R</Text>

    </View>
    <View style={styles.startItem}>
    <Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.DarkGray ,marginLeft:70}}> قونية تركية</Text>
    <Image
    source={require('../assets/imgs/smallSheep.png')}
    style={{ height: calcHeight(25.7), width: calcWidth(25.5),marginRight:30}}/>
    </View>
    </View>

    


    <View style={styles.mainRow}>
    <View style={styles.startItemLocation}>
    
    </View>
    <View style={styles.startItem}>
    <Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.DarkGray ,marginLeft:5}}> جدة</Text>
    <Image
    source={require('../assets/imgs/smallSheep.png')}
    style={{ height: calcHeight(25.7), width: calcWidth(25.5),marginRight:30}}/>
    </View>
    </View>



    <View style={styles.mainRow}>
        <View style={styles.startItem}>
        <Image
    source={require('../assets/imgs/littleStar.png')}
    style={{ marginLeft:5,height: calcHeight(20.7), width: calcWidth(20.5),marginRight:10,alignItems:'center'}}/>
        <Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.DarkGray}}> اضف للمفضلة</Text>
    </View>
    
    <View style={styles.startItem}>
    <Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.DarkGray ,marginLeft:32}}> قونية تركية</Text>
    <Image
    source={require('../assets/imgs/smallSheep.png')}
    style={{ height: calcHeight(25.7), width: calcWidth(25.5),marginRight:30}}/>
    </View>
    </View>

</View>
<Image
    source={require('../assets/imgs/goat2.jpg')}
    style={{ height: calcHeight(102.5), width: calcWidth(100.5) ,borderTopRightRadius: 10,
        borderBottomRightRadius: 10,}}
/>

</View>


</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
flex:1,
    },
 textStyle:{
color:Colors.Whitebackground,
marginRight:100
 },
header:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent:'flex-end',
    padding:0
},
grayRecText:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    justifyContent:'space-between',
    padding:0,
},
grayRectextStyle:{
    color:Colors.DarkGray,
    paddingLeft:30,
    paddingRight:30,

},
card: {
    // justifyContent: 'space-around',
    flexDirection: 'row',
    padding:0,
    // paddingVertical: calcHeight(20),
    // paddingHorizontal: calcWidth(20),
    marginBottom: calcHeight(8),
    width: calcWidth(325),
    height: calcHeight(103),
    // backgroundColor: "#f0f1f5",
    backgroundColor: Colors.Whitebackground,
    elevation: 5,
    justifyContent:'flex-end',
    borderRadius: 10
},
mainRow:{
    // backgroundColor:"yellow",
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:10
},
startItem:{
    justifyContent:'flex-end',
    // backgroundColor:'red',
    flexDirection:'row'
},
startItemLocation:{
    justifyContent:'flex-end',
    // backgroundColor:'red',
    flexDirection:'row',
    marginRight:155
}
});
