// Setting screen
import React, { Component } from 'react';
//import react in our code.
//import all the components we are going to use.
import { calcWidth, calcHeight } from '../Dimension';
import Colors from '../assets/Colors';
import { 
      SafeAreaView,
    StyleSheet,
    ScrollView,
    Dimensions,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    TextInput} from 'react-native';
    import DropDownPicker from 'react-native-dropdown-picker';
    import Icon from 'react-native-vector-icons/AntDesign';
    import { Badge, CheckBox } from 'react-native-elements';
export default class SecondPage extends React.Component {
  render() {
    return (

<SafeAreaView style={{ flex: 1 ,backgroundColor:'#000'}}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ScrollView}>
        <View style={{width:'100%',height:50,backgroundColor:Colors.theme,borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,}}>
 <View style={styles.header}>
        <Text style={styles.textStyle}>اضافة اعلان</Text>
                </View>
        </View>
      <View style={{flex: 1,}}>
           <ImageBackground source={require('../assets/imgs/mainSheep.png')} 
            // imageStyle={{ borderBottomLeftRadius: 10,
            //     borderBottomRightRadius: 10,}}
            style={{width:'100%',height:200}}
            >
{/* <ImageBackground source={require('../assets/imgs/rectangle.png')} 
    imageStyle={{ borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,}}
    style={{width:'100%',height:50}}
    >
        <View style={styles.header}>
        <Text style={styles.textStyle}>الاغنام</Text>
                </View>
        </ImageBackground> */}

        <View style={styles.WhiteStarContainer}>
        <Image
    source={require('../assets/imgs/whiteStar.png')}
    style={{ marginLeft:5,height: calcHeight(20.7), width: calcWidth(20.5),marginRight:10,alignItems:'center'}}/>
        <Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.Whitebackground}}> اضف للمفضلة</Text>
    </View>

    <View style={styles.ArrowStyle}>
        <Image
    source={require('../assets/imgs/leftArr.png')}
    style={{ marginLeft:5,height: calcHeight(20.7), width: calcWidth(20.5),marginRight:10,alignItems:'center'}}/>
<Image
    source={require('../assets/imgs/rightArr.png')}
    style={{ marginLeft:5,height: calcHeight(20.7), width: calcWidth(20.5),marginRight:10,alignItems:'center'}}/> 
    </View>


    <View style={styles.card}>
    <View style={{flex:1}}>
    {/* <View style={styles.mainRow}> */}
      
    <Text style={styles.nameStyle}> ايمن محمود</Text>

    
    <View style={styles.mainRow}>
        <View style={styles.startItem}>
       
        <Text style={styles.favStyle}> مند 3 ايام</Text>
        <Image
    source={require('../assets/imgs/history.png')}
    style={{ marginLeft:5,height: calcHeight(17.255), width: calcWidth(19.1),marginRight:10,alignItems:'center'}}/>
    </View>
    
    <View style={styles.startItem}>
    <Text style={styles.addressStyle}> جدة - المملكة العربية السعودية</Text>
    
    </View>
    </View>
</View>
<Image
    source={require('../assets/imgs/charachter.jpg')}
    style={{width: 50, height: 50, borderRadius: 50/2,borderWidth:1,borderColor:'#000' }}
/>
</View>
</ImageBackground>
<ImageBackground source={require('../assets/imgs/whiteRec.png')} 
            imageStyle={{ borderTopLeftRadius: 20,
                borderTopRightRadius: 10,}}
            style={{width:'100%',height:670}}
            >

        <View style={styles.secRow}>
        <View style={styles.startItem}>
    <Text style={{marginLeft:20,color:Colors.greenText,  fontSize: calcWidth(15), fontFamily: 'Montserrat-Regular', color: Colors.textCard ,marginRight:10}}>800</Text>
    <Text style={{color:Colors.greenText,  fontSize: calcWidth(15), fontFamily: 'Montserrat-Regular', color: Colors.textCard }}>S.R</Text>
    <Text style={{marginLeft:5,marginTop:2,color:Colors.lightGray,  fontSize: calcWidth(12), fontFamily: 'Montserrat-Regular',  }}>قابل للنقاش</Text>

    </View>
    <View style={styles.secondScreen}>
    <Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.theme ,marginTop:5,marginRight:2}}> قونية تركية</Text>
    <Image
    source={require('../assets/imgs/smallSheep.png')}
    style={{ height: calcHeight(25.7), width: calcWidth(25.5),marginRight:30}}/>
    </View>
    </View>
    <View style={styles.startItem}>
       
       <Text style={styles.darkFavStyle}> اضف للمفضلة</Text>
       <Image
   source={require('../assets/imgs/view.png')}
   style={{ marginLeft:5,marginTop:3,height: calcHeight(13.7), width: calcWidth(17.5),marginRight:10,alignItems:'center'}}/>
   </View>
   <View
  style={{
      marginTop:10,
      marginLeft:30,
      marginRight:30,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
  }}
/>
<Text style={{color:Colors.theme,marginRight:40}}>الوصف</Text>
<Text style={{color:Colors.DarkGray,marginRight:30,marginLeft:30}}>الغنم هي من الثدييات المدجنة ونباتية من عائلة البقاريات والعائلة الفرعية الماعز. ويربي الإنسان الغنم من أجل لحومها، وحليبها، صوفها وجلدها الذي يصنع منه نوعية تدعى باسان.
</Text>
<View
  style={{
      marginTop:15,
      marginLeft:30,
      marginRight:30,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
  }}
/>
<Text style={{color:Colors.theme,marginRight:30}}>النوع</Text>
<Text style={{color:Colors.DarkGray,marginRight:30}}>اغنام</Text>
<View
  style={{
      marginTop:15,
      marginLeft:30,
      marginRight:30,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
  }}
/>
<Text style={{color:Colors.theme,marginRight:30}}>التعليقات</Text>
<View style={styles.cardComm}>
    <View style={{flex:1}}>

    <Text style={styles.nameCommStyle}> ايمن محمود</Text>    
    <Text style={{color:Colors.DarkGray,marginRight:15}}> الله يعطيك العافية</Text>
</View>
<Image
    source={require('../assets/imgs/charachter.jpg')}
    style={{width: 50, height: 50, borderRadius: 50/2,borderWidth:1,borderColor:'#000' }}
/>

</View>
<View
  style={{
      marginTop:10,
      marginLeft:30,
      marginRight:30,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
  }}
/>
<View style={styles.grayRecText}>
        <Text style={styles.grayRectextStyle}>كل الردود : 1</Text>
        <Text style={styles.grayRectextStyle}>اضف تعليق</Text>

                </View>
                <View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="تفاصيل الاعلان..."
      placeholderTextColor="grey"
      numberOfLines={10}
      multiline={true}
    />
  </View>
  <TouchableOpacity style={styles.TouchableEdit}  >
  <Text style={{ fontSize: calcWidth(20), color: "#fff", fontFamily: 'Montserrat-Medium' }}>اتصل الان</Text>
   </TouchableOpacity>
   <View style={{flexDirection:'row',justifyContent:'center'}}>
   <TouchableOpacity style={styles.TouchableEdit1}  >
  <Text style={{ fontSize: calcWidth(15), color: Colors.greenText, fontFamily: 'Montserrat-Medium' }}>تواصل عبر الواتس اب</Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.TouchableEdit2}  >
  <Text style={{ fontSize: calcWidth(20), color: "#fff", fontFamily: 'Montserrat-Medium' }}>ارسال رسالة</Text>
  <Icon name="mail" size={18} color={Colors.Whitebackground} style={{marginLeft:5}}/>
 
   </TouchableOpacity>
   </View>
                {/* </ImageBackground> */}
            </ImageBackground>
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
   
    textStyle:{
        color:Colors.Whitebackground,
         },
        header:{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
            padding:0
        },
        WhiteStarContainer:{
            justifyContent:'flex-start',
            // backgroundColor:'red',
            flexDirection:'row',
            marginTop:15,
            marginLeft:10
        },
        ArrowStyle:{
            justifyContent:'space-between',
            flexDirection:'row',
            marginTop:70
        },
        card: {
            // justifyContent: 'space-around',
            flexDirection: 'row',
            padding:0,
            // paddingVertical: calcHeight(20),
            // paddingHorizontal: calcWidth(20),
            marginBottom: calcHeight(8),
            width: calcWidth(325),
            height: calcHeight(55),
            // backgroundColor: "#f0f1f5",
            // backgroundColor: Colors.Whitebackground,
            elevation: 5,
            justifyContent:'flex-end',
            borderRadius: 10,
            marginTop:20,
            marginLeft:20
        },
        cardComm:{
            flexDirection: 'row',
            padding:0,
            // paddingVertical: calcHeight(20),
            // paddingHorizontal: calcWidth(20),
            marginBottom: calcHeight(8),
            width: calcWidth(325),
            height: calcHeight(55),
            // backgroundColor: "#f0f1f5",
            // backgroundColor: Colors.Whitebackground,
            // elevation: 5,
            justifyContent:'flex-end',
            // borderRadius: 10,
            marginTop:20,
            marginLeft:20
        },
        mainRow:{
            // backgroundColor:"yellow",
            flexDirection:'row',
            justifyContent:'space-between',
            marginBottom:10
        },
        startItem:{
            justifyContent:'flex-start',
            // backgroundColor:'red',
            flexDirection:'row'
        },
        startItemLocation:{
            justifyContent:'flex-end',
            // backgroundColor:'blue',
            flexDirection:'row',
            marginRight:155
        },
        nameStyle:{
        fontSize: calcWidth(12), 
        fontFamily: 'Montserrat-Bold', 
        color: Colors.Whitebackground ,
        // backgroundColor:'blue',
        marginLeft:70,
        marginTop:15

        },
        nameCommStyle:{
            fontSize: calcWidth(12), 
            fontFamily: 'Montserrat-Bold', 
            color: Colors.greenText ,
            // backgroundColor:'blue',
            marginLeft:70,
            marginTop:15,
            marginRight:15
        },
        favStyle:{
            fontSize: calcWidth(12), 
            fontFamily: 'Montserrat-Bold',
             color: Colors.Whitebackground,
             
        },
        darkFavStyle:{
            fontSize: calcWidth(12), 
            fontFamily: 'Montserrat-Bold',
             color: Colors.lightGray,
             marginTop:2,
             marginLeft:20
        },
        addressStyle:{
            fontSize: calcWidth(12),
             fontFamily: 'Montserrat-Bold',
              color: Colors.Whitebackground ,
              marginLeft:25
        },
        secondScreen:{
            justifyContent:'flex-start',
            // backgroundColor:'red',
            flexDirection:'row',
        },
        secRow:{
            // backgroundColor:"yellow",
            flexDirection:'row',
            justifyContent:'space-between',
            // marginBottom:10,
            marginTop:10
            
        },
        textAreaContainer: {
            marginTop:10,
            borderColor: Colors.lightGray,
            borderWidth: 1,
            padding: 5,
            borderRadius:10,
            marginLeft:20,
            marginRight:20,
            backgroundColor: '#fafafa'},
          textArea: {
            height:100,
            justifyContent: "flex-start"
          },
          TouchableEdit: {
            width: calcWidth(320),
            height: calcHeight(49),
            marginTop: calcHeight(40),
            borderRadius: 30,
            backgroundColor: Colors.greenText,
            justifyContent: "center",
            alignItems: "center",
            elevation: 5,
            alignSelf: "center",
            marginBottom:20
          },
          TouchableEdit1: {
            
            width: calcWidth(160),
            height: calcHeight(49),
            marginTop: calcHeight(40),
            borderRadius: 30,
            backgroundColor: Colors.Whitebackground,
            justifyContent: "center",
            alignItems: "center",
            elevation: 5,
            marginRight:10,
            alignSelf: "center",
            marginBottom:20
          },
          TouchableEdit2: {
            width: calcWidth(160),
            height: calcHeight(49),
            marginTop: calcHeight(40),
            borderRadius: 30,
            backgroundColor: Colors.theme,
            justifyContent: "center",
            alignItems: "center",
            elevation: 5,
            alignSelf: "center",
            marginBottom:20,
            flexDirection:'row',
          },
          grayRecText:{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            justifyContent:'space-between',
            padding:0,
          },
          grayRectextStyle:{
            color:Colors.theme,
            paddingLeft:30,
            paddingRight:30,
          
          },
});


