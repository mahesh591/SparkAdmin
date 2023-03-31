import  React, { useState,useEffect } from 'react';
import { View, Text,TextInput,FlatList ,StyleSheet,TouchableOpacity,Image, ScrollView,
    StatusBar,
    Button,
    Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { doc, GeoPoint, setDoc } from "firebase/firestore"; 
// import { FlatList, TextInput } from 'react-native-gesture-handler';

import StepperComponent from '../Components/StepperComponent';
import CheckBoxComponent from '../Components/CheckBoxComponent';
import { async } from '@firebase/util';
import DocumentPicker from 'react-native-document-picker';
import firestore, { firebase } from '@react-native-firebase/firestore';
import { getStorage, ref } from "firebase/storage";
import { db } from '../Components/config';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';


function CreateParkinLotDetail({ navigation, route }) {
    bookParkingSpace=() => {
    Alert.alert('Booked parking space');
}

markLocationOnMapView = () => {

}

const geoPointVal = route.params.item.parkingPoint;

    return(
        <View style={{flex:1,margin:20}}>
            <View style={{alignItems:'center'}}>
             {/* <Image style={{height: 230, width: '90%', padding: 10, marginTop:10,marginRight:10,alignItems: 'flex-end', borderRadius:10}} source={require('../Images/parkingSpace.jpeg')}/> */}
   
         <MapView style={{width:'100%',height:300,borderRadius:20}}
          initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0,
              longitudeDelta: 0.0,
          }}
        >
             <Marker coordinate={{ latitude:geoPointVal.latitude, longitude: geoPointVal.longitude }}   />
        </MapView>
           </View>
       
            <View style={{borderWidth:0.2,borderColor:'lightGray',marginLeft:30,marginRight:30,top:-50, height: 200, backgroundColor:'white'}}>
            <Text style={{fontWeight:'600', marginLeft:20,marginTop:10}}>{route.params.item.parkingName}</Text>
          
            <Text style={{fontWeight:'200',fontSize:10, marginLeft:20,color:'lightGray'}}>Parking Location</Text>
            <Text style={{fontWeight:'200',fontSize:10, marginLeft:20,color:'lightGray'}}>24/7</Text>
            <Text style={{fontWeight:'500',fontSize:10, marginLeft:20,color:'lightGray'}}>Aminities</Text>
                     <Text style={{fontWeight:'200',fontSize:10, marginLeft:20,color:'lightGray'}}>* ccTV</Text>
                     <Text style={{fontWeight:'200',fontSize:10, marginLeft:20,color:'lightGray'}}>* Cleaning Service</Text>
                     <Text style={{fontWeight:'200',fontSize:10, marginLeft:20,color:'lightGray'}}>* Mechanic Service</Text>
            <View style= {{flex:1,alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity style={{height:40,width:100, backgroundColor:'green',alignItems:'center',justifyContent:'center',marginTop:10}} onPress={this.bookParkingSpace}>
                    <Text style={{color:'white'}}>Book</Text>
                 </TouchableOpacity>
                 </View>
            </View>
        
           
        </View>
    )
}
export default CreateParkinLotDetail;



  