// Home screen
import React, { Component } from 'react';
//import react in our code.
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
  TextInput,

} from 'react-native';//import all the components we are going to use.
import { calcWidth, calcHeight } from '../Dimension';
import Colors from '../assets/Colors';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { Badge, CheckBox ,ListItem, Avatar} from 'react-native-elements';
import {
  configureFonts,
  DefaultTheme,
  DarkTheme,
} from 'react-native-paper';
// class Background extends Component {

//   render() {
//       return (
//           <ImageBackground source={require('../assets/imgs/fullGoldenRec.png')}
//           imageStyle={{ borderBottomLeftRadius: 10,
//             borderBottomRightRadius: 10,}}
//         style={{width:'100%',height:50}}>
//               <View>
//                   {this.props.children}
//               </View>

//           </ImageBackground>
//       )
//   }
// }
export default class FirstPage extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
    country: 'اغنام / ابل',
    city:'جده/مكة',
    radioButton:'value1',
    checked1:false,
    checked2:false,
}
  }
  render() {
    
    return (
      <SafeAreaView style={{ flex: 1 ,backgroundColor:Colors.Whitebackground}}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ScrollView}>
        <View style={{width:'100%',height:50,backgroundColor:Colors.theme,borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,}}>
 <View style={styles.header}>
        <Text style={styles.textStyle}>اضافة اعلان</Text>
                </View>
        </View>
        <View style={styles.WhiteStarContainer}>
        <Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.gray,marginTop:2}}> اضف اعلان</Text>
        <Image
    source={require('../assets/imgs/add.png')}
    style={{ marginLeft:5,height: calcHeight(20.7), width: calcWidth(20.5),marginRight:10,alignItems:'center'}}/>
    </View>
    <View
  style={{
      marginTop:20,
      marginLeft:30,
      marginRight:30,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
  }}
/>
<View style={styles.cardComm}>
    <View style={{flex:1}}>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.editCommStyle}> تعديل</Text>   
    <Text style={styles.nameCommStyle}> ايمن محمود</Text>   
    </View> 
    <View style={styles.info}>
    <Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.gray}}> 0096588962145-</Text>
    <Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.gray}}> 0096588962145</Text>
    </View>
    <Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.gray, 
}}> اعلاناتك المنشورة حاليا(1)</Text>
    </View>

<View >
<Image
    source={require('../assets/imgs/offline.png')}
    style={styles.topDot}
/>
<Image
    source={require('../assets/imgs/charachter.jpg')}
    style={{width: 59, height: 59, borderRadius: 59/2,borderWidth:1,borderColor:'#000' }}
/>

</View>
</View>
<View
  style={{
      marginLeft:30,
      marginRight:30,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
  }}
/>
<Text style={{color:Colors.DarkGray,marginRight:30,fontSize:calcWidth(17),marginBottom:5}}>الصور</Text>
  <View style={{flex:1,flexDirection:'row'}}>
<View>
<Image
    source={require('../assets/imgs/1.png')}
    style={{width: calcWidth(90.5),left:220,zIndex:99.9}}
    />
      </View>
  <View >
  <Image
    source={require('../assets/imgs/33.png')}
    style={{ width: calcWidth(130.5),left:115}}
    />
      </View>
      <View>
      <Image
    source={require('../assets/imgs/22.png')}
    style={{width: calcWidth(110.5)}}
    />
    
      </View>


</View >
<View style={{marginRight:150,marginBottom:10}}>
<Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.DarkGray,fontSize:calcWidth(17)}}> يمكنك رفع 8 صور</Text>
<Text style={{ fontSize: calcWidth(12), fontFamily: 'Montserrat-Bold', color: Colors.lightGray}}> علي ان لا يزيد حجم الصورة 3 م .ب</Text>
</View>
<View
  style={{
      marginLeft:30,
      marginRight:30,
      marginBottom:20,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
  }}
/>
<View >
  <Text style={styles.topText}>القسم</Text>
<DropDownPicker
    items={[
        {label: 'اغنام / ابل', value: 'اغنام / ابل', icon: () => <Icon name="caretdown" size={18} color="#000" />},
        {label: 'France', value: 'france', icon: () => <Icon name="caretdown" size={18} color="#000" />},
    ]}
    defaultValue={this.state.country}
    containerStyle={{height: 40}}
    style={{backgroundColor: '#fafafa', marginLeft:20,
    marginRight:20,}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa', }}
    onChangeItem={item => this.setState({
        country: item.value
    })}
/>
</View>
<View
  style={{
marginTop:10
  }}
/>
<View>
<Icon2 style={styles.topIcon} name="location-sharp" size={18} color="#000" />

<View >
  <Text style={styles.topText}>المكان</Text>
<DropDownPicker
    items={[
        {label: 'جده/مكة', value: 'جده/مكة', icon: () => <Icon name="caretdown" size={18} color="#000" />},
        {label: 'France', value: 'france', icon: () => <Icon name="caretdown" size={18} color="#000" />},
    ]}
    defaultValue={this.state.city}
    containerStyle={{height: 40}}
    style={{backgroundColor: '#fafafa',  marginLeft:20,
    marginRight:20,}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => this.setState({
        country: item.value
    })}
/>
</View>
</View>
<View style={{marginTop:15}}>

  <Text style={styles.topText}>الاعلان</Text>
<View style={styles.textInputContainer}>
      <View style={styles.InputContain}>
<TextInput
placeholder="اضف عنوان لاعلانك "
placeholderTextColor={Colors.lightGray}
style={styles.inputText} 
/> 
</View>  
    </View>
    </View>

<View>
<Text style={styles.topTextArea}>التفاصيل</Text> 
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
  </View>
<Text style={{fontSize:calcWidth(17),marginRight:20,marginTop:10,color:Colors.lightGray}}>السعر:</Text>
   {/* <View style={{justifyContent:'flex-end'}}>
            <CheckBox 
                title='value1'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor={Colors.DarkGray}
                checked={this.state.radioButton === 'value1'}
                onPress={() => this.setState({radioButton: 'value1'})}
                ></CheckBox>
            <CheckBox 
                title='value2'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor={Colors.DarkGray}
                checked={this.state.radioButton === 'value2'}
                onPress={() => this.setState({radioButton: 'value2'})}
                ></CheckBox> 
            <CheckBox 
                title='value3'
                checkedIcon='dot-circle-o'
                checkedColor={Colors.DarkGray}
                uncheckedIcon='circle-o'
                checked={this.state.radioButton === 'value3'}
                onPress={() => this.setState({radioButton: 'value3'})}
                ></CheckBox> 
           

        </View> */}

           <View style={{flexDirection:'row',flex:1,marginLeft:70}}>
             <View style={{flex:1}}>
<ListItem
title='قابل للتفاوض'
titleStyle={styles.checkText1}
checkBox={{ checked: this.state.checked1 }}
onPress={() => this.setState({ checked1: !this.state.checked1 })}
/>
</View>
    <Text style={{marginTop:15,marginRight:10,color:Colors.gray}}>ريال</Text>
    <View style={{marginRight:5,marginTop:10,width:70,height:30,borderWidth:1,borderColor:Colors.lightGray,borderRadius:5,justifyContent:'flex-end'}}>
      
      <TextInput  />
      </View>
                    <View style={{marginTop:5,marginRight:20,marginTop:15,width:20,height:20,borderWidth:1,borderColor:Colors.lightGray,borderRadius:10,justifyContent:'flex-end'}}>
                    <TextInput  />
                    </View>
                 
                    </View>

        <View style={{flexDirection:'row',flex:1,marginLeft:262}}>
    <Text style={{marginRight:5,color:Colors.gray}}>على السوم</Text>

                    <View style={{width:20,height:20,borderWidth:1,borderColor:Colors.lightGray,borderRadius:10,justifyContent:'flex-end'}}>
      
                    <TextInput  />
                    </View>
                    </View>
                    <View style={{flexDirection:'row',flex:1,marginTop:20,marginLeft:265}}>
    <Text style={{marginRight:5,color:Colors.gray}}>غير محدد</Text>

                    <View style={{width:20,height:20,borderColor:Colors.lightGray,borderWidth:1,borderRadius:10,justifyContent:'flex-end'}}>
      
                    <TextInput  />
                    </View>
                    </View>
<ListItem
title='تفعيل'
titleStyle={styles.checkText2}
checkBox={{ checked: this.state.checked2 }}
onPress={() => this.setState({ checked2: !this.state.checked2 })}
/>
        <TouchableOpacity style={styles.TouchableEdit}  >
  <Text style={{ fontSize: calcWidth(20), color: "#fff", fontFamily: 'Montserrat-Medium' }}>اضف اعلانك</Text>
   </TouchableOpacity>
</ScrollView>
</SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  ScrollView:{

  },
  textStyle:{
    color:Colors.Whitebackground,
     },
    header:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        padding:0
    },
  backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    WhiteStarContainer:{
      justifyContent:'flex-end',
      // backgroundColor:'red',
      flexDirection:'row',
      marginTop:15,
      marginLeft:10,
      marginRight:15
  },
  cardComm:{
    flexDirection: 'row',
    padding:0,
    marginBottom: calcHeight(8),
    width: calcWidth(325),
    height: calcHeight(105),
    // backgroundColor: "yellow",
    justifyContent:'flex-end',
    // borderRadius: 10,
    // marginTop:20,
    marginLeft:20
},
nameCommStyle:{
  fontSize: calcWidth(12), 
  fontFamily: 'Montserrat-Bold', 
  color: Colors.theme ,
  // backgroundColor:'pink',
  marginLeft:70,
  marginTop:25,
  // marginRight:15
},
editCommStyle:{
fontSize: calcWidth(12), 
  fontFamily: 'Montserrat-Bold', 
  color: Colors.gray ,
  // backgroundColor:'blue',
  marginRight:70,
  marginTop:25,
  marginRight:15,
  flex:1,
  paddingRight:70
  
},
info:{
  justifyContent:'flex-end',
  // backgroundColor:'red',
  flexDirection:'row',
  // marginTop:15,
  marginRight:3

},
checkText1: {
  fontSize: calcWidth(14),
  color: Colors.gray,
  fontFamily: 'Montserrat-Medium',
 
},
checkText2: {
  fontSize: calcWidth(14),
  color: Colors.gray,
  fontFamily: 'Montserrat-Medium',
  justifyContent:'flex-end',
  position:'relative',
  left:255,
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
  backgroundColor: Colors.theme,
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
},
grayRecText:{
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 5,
  justifyContent:'space-between',
  padding:0,
},
grayRectextStyle:{
  color:Colors.theme,
  paddingLeft:30,
  paddingRight:30,

},
topText:{
  backgroundColor:'white',
  marginLeft:250,
  marginRight:30,
  textAlign:'center',
  position:'relative',
  top:9,
  zIndex:99.9
},
topDot:{  
  textAlign:'center',
  position:'relative',
  top:59,
  left:40,
  zIndex:99.9,
  width: 20, 
  height:20 
},
topTextArea:{
  backgroundColor:'white',
  marginLeft:250,
  marginRight:30,
  textAlign:'center',
  position:'relative',
  top:20,
  zIndex:99.9
},
topIcon:{
  backgroundColor:'#fafafa',
  marginLeft:50,
  marginRight:270,
  textAlign:'center',
  position:'relative',
  top:50,
  zIndex:99.9
},
textInputContainer: {
  flex: 1,
},
InputContain:{
  // marginTop:30,
  // flexDirection: 'row',
  // alignItems: 'center',
  backgroundColor: '#fff',
  borderWidth: 0.5,
  borderColor: Colors.lightGray,
  height: 40,
  borderRadius: 5,
  marginLeft: 20,
  marginRight:20,
  // elevation: 5,
  justifyContent:'flex-end',
  padding:0
},
inputText:{
  fontSize:calcWidth(14),
  marginRight:20
},
});
