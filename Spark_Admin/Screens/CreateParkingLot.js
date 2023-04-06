
import  React, { useState,useEffect } from 'react';
import { View, Text,TextInput,FlatList ,StyleSheet,TouchableOpacity,Image, ScrollView,
    StatusBar,
    Button} from 'react-native';
import { doc, setDoc } from "firebase/firestore"; 
import StepperComponent from '../Components/StepperComponent';
import CheckBoxComponent from '../Components/CheckBoxComponent';
import { async } from '@firebase/util';
import DocumentPicker from 'react-native-document-picker';
import firestore, { firebase } from '@react-native-firebase/firestore';
import { getStorage, ref , uploadBytes, getDownloadURL } from "firebase/storage";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from '../Components/config';
import auth from '@react-native-firebase/auth';
// import ImagePicker from 'react-native-image-crop-picker';

// import AddParkingScreen1 from './AddParkingScreens/AddParkingScreen1';
// import AddParkingScreen2 from './AddParkingScreens/AddParkingScreen2';
// import AddParkingScreen3 from './AddParkingScreens/AddParkingScreen3';


function CreateParkingLot({ navigation, prop }) {
  const colorForBorder = 'green'
  const disabledColor = 'gray'
  const [noOfBikeParkingSlots, setBikeParkingSlots] = useState(0);
  const [noOfCarParkingSlots, setCarParkingSlots] = useState(0);
  const [noOfElectricCarParkingSlots, setElectricCarParkingSlots] = useState(0);
  const [noOfTruckParkingSlots, setTruckParkingSlots]  = useState(0);
  const [noOfElectricTruckParkingSlots, setElectricTruckParkingSlots] = useState(0);
  const [checkBoxCctvIsChecked, setCctvChecked] = useState(false);
  const [checkBoxCleaningService, setCleaningServiceChecked] = useState(false);
  const [checkBoxMechanicService, setMechanicServiceChecked] = useState(false);
  const maxValue = 10;
  const [parkingSlotName, setParkingSlotName] = useState('');
  const [parkingSlotLocation, setParkingSlotLocation] = useState('');
  const [parkingData, setParkingdata ]= useState([]);
  const [imagesToAdd, setImagesToAdd] = useState([]);
  const [valBool, setValBool] = useState(false);


  useEffect(() =>
  {
     getUser();
    
  }, [])

createParkingLot = () => {
  let mobileNumberStr = auth().currentUser.phoneNumber
  const yourGeoPoint = new firebase.firestore.GeoPoint(12.434, 78.983);

  firestore()
.collection('ParkingDetails')
.add({
  // let mobileNumberStr =  AsyncStorage.getItem('mobileNumber');
  
  mobileNumber: ''+mobileNumberStr,
  Accessories:{
    ccTV: checkBoxCctvIsChecked,
    cleaningService: checkBoxCleaningService,
    mechanicService: checkBoxMechanicService,
  },
  parkingSpaceAllotted:{
  noOfBikeParkingSlots: noOfBikeParkingSlots,
  noOfCarParkingSlots: noOfCarParkingSlots,
  noOfElectricCarParkingSlots: noOfElectricCarParkingSlots,
  noOfElectricTruckParkingSlots: noOfElectricTruckParkingSlots,
  noOfTruckParkingSlots: noOfTruckParkingSlots,
  },
  parkingName: parkingSlotName,
  parkingLocation: parkingSlotLocation,
  parkingPoint:yourGeoPoint

})
.then(() => {
  console.log('User added!');


});
};

getUser = () => {
  firestore()
.collection('ParkingDetails')
.get()
.then(querySnapshot => {

  querySnapshot.forEach(documentSnapshot => {
    setParkingdata(oldArray => [...oldArray,documentSnapshot.data()] );
  });
});
};


function selectImage() {

}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const selectDoc = async () => {
  try {
   const doc = await DocumentPicker.pickMultiple({
    type: [DocumentPicker.types.pdf,DocumentPicker.types.images]
   });
    console.log(doc)
  } catch(err) {
      if(DocumentPicker.isCancel(err))
      console.log("User cancelled the upload",err);
      else
      console.log(err);
  }
}

selectFile = () => {
  // ImagePicker.openPicker({
  //   width: 300,
  //   height: 400,
  //   cropping: true,
  //   multiple: true
  // }).then(image => {
  //   console.log(image);
  //    setImagesToAdd(...image);
  //    const imageRef = ref(storage, 'imageNameTest');
  //    var base64 = getBase64Image(image);
  //    console.log(base64);
  // //    uploadBytes(imageRef, base64).then(() => {
  // //     console.log("see that")
  // // });
  //    console.log('imgs to add',imagesToAdd);
  // });
};

function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/?[A-z]*;base64,/);
}

    return (
      <ScrollView style={styles.scrollView}>
      <View style={{ flex: 1, marginTop: 50 ,marginLeft: 20, marginRight: 20}}>
     {/* <AddParkingScreen1  setParkingSlotName parkingSlotName/> */}
     {/* <AddParkingScreen2 /> */}
     {/* <AddParkingScreen3 /> */}
        
    <Text>Parking Name</Text>
        <TextInput style={{paddingLeft:15,paddingRight:15, borderWidth: 0.5, borderColor:'gray',borderRadius: 15,marginLeft:20,marginRight:20,marginTop:5,height:40, color: 'black'}} placeholder='Enter location Name' onChangeText={newText => setParkingSlotName(newText)}
        defaultValue={parkingSlotName} ></TextInput>

    <Text style={styles.TextStyling}>Parking Location</Text>
        <View style = {{flex: 1,flexDirection:'row',justifyContent:'space-between', marginLeft: 20, marginRight: 20, marginTop: 5,maxHeight: 50, borderWidth: 0.5, 
    borderColor: 'gray',borderRadius: 15}}>
          <TextInput  placeholder='Enter Parking location' style={{paddingLeft:15,paddingRight:15}} onChangeText={newText => setParkingSlotLocation(newText)} defaultValue={parkingSlotLocation}/>
        <TouchableOpacity
            activeOpacity={0.5} onPress={() => {
              navigation.navigate('MapScreen')
            }}>
           <Image style={{height: 30, width: 30, padding: 10, marginTop:10,marginRight:10,alignItems: 'flex-end'}} source={require('../Images/currentLocation.png')}/>
    
        </TouchableOpacity>

        </View>

        
        <Text style= {styles.TextStyling}> Parking Space Available</Text>

<View style={{marginLeft: 20,marginRight:20}}>
  <StepperComponent setValue={setBikeParkingSlots} label={'No of Bike Parking Slots'} topAlign = {10} />
  <StepperComponent setValue={setCarParkingSlots} label={'No of Car Parking Slots'} topAlign = {10}/>
  <StepperComponent setValue={setElectricCarParkingSlots} label={'No of Electric Car Parking Slots'} topAlign = {10}/>
  <StepperComponent setValue={setTruckParkingSlots} label={'No of Truck Parking Slots'} topAlign = {10}/>
  <StepperComponent setValue={setElectricTruckParkingSlots} label={'No of Electric Truck Parking Slots'} topAlign = {10}/>
</View>


        <Text style= {styles.TextStyling}> Accessories </Text>
        <View style= {{flexDirection:'row',flexWrap:'wrap', justifyContent:'space-between',marginLeft:20}}>
           <CheckBoxComponent label={'CCTV'} setValue={setCctvChecked} />
           <CheckBoxComponent label={'Cleaning Service'} setValue={setCleaningServiceChecked} />
           <CheckBoxComponent label={'Mechanic Service'} setValue={setMechanicServiceChecked} />
        </View>

        <Text style= {styles.TextStyling}> Documents picker </Text>
        <View style={{marginHorizontal: 40 }}>
          <Button title="Select Document" onPress={selectDoc} />
        </View>

         <Text style= {styles.TextStyling}> Images </Text>

         <View style={{marginHorizontal: 40 }}>
    
          {/* <Button title="Add Image" onPress={this.selectFile} /> */}
        </View>
        <TouchableOpacity
            activeOpacity={0.5} onPress={createParkingLot}>
            <View style = {{justifyContent:'center',alignItems:'center'}}>
                   <Text style = {{fontSize:30}} >Save</Text>
            </View>
        </TouchableOpacity>
      </View>
      </ScrollView>

    );
  }

  

  const styles = StyleSheet.create({
    itemsCenter: {alignItems: 'center'},
    inputContainer: {
      gap: 4,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    previewContainer: {padding: 10, flex: 1},
    input: {
      borderBottomWidth: 1,
      paddingVertical: 3,
      width: 50,
      textAlign: 'center',
    },item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    container: {
      flex: 1,
      marginTop: 8,
      backgroundColor: 'aliceblue',
      maxHeight: 400,
      flexWrap: 'wrap',
      alignContent: 'flex-start',
    },
    box: {
      width: 50,
      height: 80,
    },
    box1: {
      backgroundColor: 'orangered',
    },
    box2: {
      backgroundColor: 'orange',
    },
    box3: {
      backgroundColor: 'mediumseagreen',
    },
    box4: {
      backgroundColor: 'deepskyblue',
    },
    box5: {
      backgroundColor: 'mediumturquoise',
    },
    textFieldStyles: {
      alignItems:'stretch',
        paddingLeft: 15
    },
    
    TextStyling:{
        marginTop:10
    },
    TextStylingInVehicleCheckBox:{
        
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },
  })


  export default CreateParkingLot;
