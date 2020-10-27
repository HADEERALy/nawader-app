// Home screen
import React, { Component } from 'react';
//import react in our code.
import { Text, View ,StyleSheet,ImageBackground,Image,TextInput} from 'react-native';
//import all the components we are going to use.
import MenuItems from "../components/MenuItems";
import { calcWidth, calcHeight } from '../Dimension';
import Colors from '../assets/Colors';

export default class Massages extends React.Component {
  render() {
    return (
    //   <View
    //     style={{
    //       flex: 1,
    //       justifyContent: 'center',
    //       alignItems: 'center'
    //    }}>
    <View style={styles.container}>
    <ImageBackground source={require('../assets/imgs/camel.jpg')} 
    imageStyle={{ borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,}}
    style={{width:'100%',height:200}}
    >
<View style={{ flexDirection: 'row',justifyContent: 'space-between', alignItems: "center" ,marginTop:20}}>


<Image
source={require('../assets/imgs/bell.png')}
style={{ height: calcHeight(23.5), width: calcWidth(25.5) ,marginLeft:30}}
                />
{/* <Icon
name='menu'
size={27}
style={styles.icons}
color={Colors.Whitebackground}

/> */}
<Image
source={require('../assets/imgs/menu2.png')}
style={{ height: calcHeight(30.5), width: calcWidth(45.5),marginRight:30}}
                />
</View>    
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
<View style={{flexDirection:'row',justifyContent:'center',}}>
<View style={styles.imageContainer}>
<ImageBackground style={styles.image} source={require('../assets/imgs/horse.png')}>
<Text style={{marginTop:55}}>الخيل</Text>

</ImageBackground>
</View>
<View style={styles.imageContainer}>
<ImageBackground style={styles.image2} source={require('../assets/imgs/camel2.png')}>
<Text style={{marginTop:55,marginRight:10}}>الابل</Text>

</ImageBackground>

</View>

<View style={styles.imageContainer}>
<ImageBackground style={styles.image3} source={require('../assets/imgs/sheep.png')}>
<Text style={{marginTop:55,marginRight:15}}>الاغنام</Text>

</ImageBackground>

</View>
</View> 
<View style={{flexDirection:'row',justifyContent:'center',marginTop:5}}>
<View style={styles.imageContainer}>
<ImageBackground style={styles.image4} source={require('../assets/imgs/car.png')}>
<Text style={{marginTop:55,fontSize:calcWidth(10),marginTop:60}}>سيارات كلاسيكية</Text>

</ImageBackground>
</View>
<View style={styles.imageContainer}>
<ImageBackground style={styles.image5} source={require('../assets/imgs/eagle.png')}>
<Text style={{marginTop:55}}>الصقور</Text>

</ImageBackground>

</View>
<View style={styles.imageContainer}>
<ImageBackground style={styles.image6} source={require('../assets/imgs/tree.png')}>
<Text style={{fontSize:calcWidth(10),marginTop:65}}>مزارع و منتجاتها</Text>

</ImageBackground>

</View>
</View> 
<View style={{flexDirection:'row',justifyContent:'center',marginTop:5}}>
<View style={styles.imageContainer}>
<ImageBackground style={styles.image7} source={require('../assets/imgs/mic.png')}>
<Text style={{marginTop:55}}>اعلانات اخرى</Text>

</ImageBackground>
</View>
<View style={styles.imageContainer}>
<ImageBackground style={styles.image8} source={require('../assets/imgs/truck.png')}>
<Text style={{marginTop:55,fontSize:calcWidth(10)}}>المعدات و الكرفانات</Text>

</ImageBackground>

</View>
<View style={styles.imageContainer}>
<ImageBackground style={styles.image9} source={require('../assets/imgs/comment.png')}>
<Text style={{marginTop:55,marginRight:10}}>مناقشات</Text>

</ImageBackground>

</View>
</View> 
{/* <View style={styles.menuContainer}>
<MenuItems itemImage={require('../assets/imgs/horse.png')}/>
<MenuItems itemImage={require('../assets/imgs/camel2.png')}/>
<MenuItems itemImage={require('../assets/imgs/sheep.png')}/>
<MenuItems itemImage={require('../assets/imgs/car.png')}/>
<MenuItems itemImage={require('../assets/imgs/eagle.png')}/> 
<MenuItems itemImage={require('../assets/imgs/tree.png')}/> 
<MenuItems itemImage={require('../assets/imgs/mic.png')}/> 
<MenuItems itemImage={require('../assets/imgs/truck.png')}/> 
<MenuItems itemImage={require('../assets/imgs/comment.png')}/> 

</View> */}
</ImageBackground>   
      </View>
    );
  }
}
const styles = StyleSheet.create({
    menuContainer:{
        height:'40%',
        flexDirection:'row',
        flexWrap:'wrap',
        // backgroundColor:'green',
    },
    container: {
        flex: 1,
        // backgroundColor: "red"
        // backgroundColor: 'red',
        // position: "absolute",
        // bottom: 0
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
    imageContainer:{
        borderColor:'#000',
        borderWidth:1,
        borderRadius: 10,
        backgroundColor: '#F5FCFF',
        width:100,
        height:100,
        marginRight:10
    },
    image:{
        width: '85%',
        height: '70%',
        borderColor:'#000',
        // borderWidth:1,
        alignItems:'center',
        // borderRadius: 10,
        marginLeft:10,

        marginTop:15,
        backgroundColor: '#F5FCFF',
    },
    image2:{
        width: '80%',
        height: '70%',
        borderColor:'#000',
        // borderWidth:1,
        alignItems:'center',
        // borderRadius: 10,
        marginTop:15,
        marginLeft:20,
        backgroundColor: '#F5FCFF',
    },
    image3:{
        width: '74%',
        height: '70%',
        borderColor:'#000',
        // borderWidth:1,
        alignItems:'center',
        // borderRadius: 10,
        marginTop:15,
        marginLeft:25,
        backgroundColor: '#F5FCFF',
    },
    image4:{
        width: '100%',
        height: '65%',
        borderColor:'#000',
        // borderWidth:1,
        alignItems:'center',
        // borderRadius: 10,
        marginTop:20,
        backgroundColor: '#F5FCFF',
    },
    image5:{
        width: '100%',
        height: '65%',
        borderColor:'#000',
        // borderWidth:1,
        alignItems:'center',
        // borderRadius: 10,
        marginTop:20,
        backgroundColor: '#F5FCFF',
    },
    image6:{
        width: '79%',
        height: '77%',
        borderColor:'#000',
        // borderWidth:1,
        alignItems:'center',
        // borderRadius: 10,
        marginLeft:15,

        marginTop:15,
        backgroundColor: '#F5FCFF',
    },
    image7:{
        width: '70%',
        height: '70%',
        borderColor:'#000',
        // borderWidth:1,
        alignItems:'center',
        // borderRadius: 10,
        marginLeft:17,

        marginTop:15,
        backgroundColor: '#F5FCFF',
    },
    image8:{
        width: '80%',
        height: '70%',
        borderColor:'#000',
        // borderWidth:1,
        alignItems:'center',
        // borderRadius: 10,
        marginTop:20,
        marginLeft:15,
        backgroundColor: '#F5FCFF',
    },
    image9:{
        width: '77%',
        height: '72%',
        borderColor:'#000',
        // borderWidth:1,
        alignItems:'center',
        // borderRadius: 10,
        marginLeft:20,

        marginTop:15,
        backgroundColor: '#F5FCFF',
    },

});

