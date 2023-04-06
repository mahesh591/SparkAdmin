
// import * as React  from 'react';
import  React, { useState,useEffect } from 'react';
import { View, Text ,StyleSheet,TouchableOpacity,Image, Alert,Button, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore, { firebase } from '@react-native-firebase/firestore';

function HomeScreen({ navigation }) {
  const [parkingData, setParkingdata ]= useState([]);
  const [modalisVisibale, setModalIsVisibale] = useState(false);
  SampleFunction = () => {
      //Alert.alert('This is floating button')
      navigation.navigate('CreateParkingLot')
}
useEffect(() =>
{
   getUser();
  
}, [])

getUser = () => {
  setParkingdata([])
  firestore()
.collection('ParkingDetails')
.where('mobileNumber','==',""+auth().currentUser.phoneNumber)
.get()
.then(querySnapshot => {
  // console.log('Total users: ', querySnapshot.size);

  querySnapshot.forEach(documentSnapshot => {
   
    setParkingdata(oldArray => [...oldArray,documentSnapshot.data()] );
  //  console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
 
  });
});
};

  return (

    
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

//         <Text style={styles.loginText}>Welcome to Home Screen</Text>
//     {/* <TouchableOpacity onPress={() => navigation.navigate('Detail')} style={styles.loginBtn}>
//              <Text style={styles.loginText}>Tenent</Text>
//       </TouchableOpacity>
      
//       <TouchableOpacity onPress={() => navigation.navigate('Detail')} style={styles.loginBtn}>
//              <Text style={styles.loginText}>Owner</Text>
//       </TouchableOpacity> */}



//      <TouchableOpacity activeOpacity={0.5} onPress={this.SampleFunction} style={styles.TouchableOpacityStyle} >

// <Image source={{uri : 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png'}} 

// style={styles.FloatingButtonStyle} />

// </TouchableOpacity>
//     </View>

<View style={{ flex: 1}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
        <FlatList data={parkingData}
        numColumns={1}
        renderItem={({item}) => 
        <TouchableOpacity onPress={ () => navigation.navigate('CreateParkinLotDetail',{item:item})}>
        <View style = {{flex:1,padding: 10, borderWidth: 1,borderColor: 'lightgray', borderRadius: 15, 
        marginTop: 20, marginLeft:10, alignItems:'center',backgroundColor:'rgba(244,238,252,1)'}}>
        <Image source={{uri: item.srcImage}} style={{width: 360, height: 60}} />  
     <Image style={{width:150, height:150, aspectRatio: 1}} source={item.srcImage}/>
      <View style={{height:1,width:'100%', backgroundColor: 'lightgray',marginTop:5}}></View>
          <Text style={{fontSize:15,fontWeight:'500',color:'rgba(110,80,159,1)'}}>{item.parkingName}</Text> 
          <Text style={{fontSize:11,fontWeight:'500',color:'rgba(110,80,159,1)'}}>{item.parkingLocation}</Text> 
          <Text style={{fontSize:11,fontWeight:'500',color:'rgba(110,80,159,1)'}}>{item.noOfBikeParkingSlots}</Text> 
      </View>
      </TouchableOpacity>
       } />
   </View>
<View style={{flex: 0.15,alignItems:'center',justifyContent:'flex-end'}}>
  <TouchableOpacity activeOpacity={0.5} onPress={this.SampleFunction} style={styles.TouchableOpacityStyle} >
        <Image style={styles.FloatingButtonStyle} source={require("../Images/Floating_Button.png")} 
 />
  </TouchableOpacity>
</View>
</View>
  );
}



// function ModalScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ fontSize: 30 }}>This is a modal!</Text>
//       <Button onPress={() => navigation.goBack()} title="Dismiss" />
//     </View>
//   );
// }

 
const styles = StyleSheet.create({
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      backgroundColor: "#FF1493",
    },
    FloatingButtonStyle: {
   
      marginBottom: 40,
      right: 0,
      bottom: 0,
      // resizeMode: 'contain',
      width: 50,
      height: 50,
      // marginBottom: 10,
    }
  });
export default HomeScreen;



