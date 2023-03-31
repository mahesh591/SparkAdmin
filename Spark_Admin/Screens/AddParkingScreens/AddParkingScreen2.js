import React from "react";
import { View , Text} from "react-native";
import StepperComponent from '../Components/StepperComponent';
import CheckBoxComponent from '../Components/CheckBoxComponent';

const AddParkingScreen2 = ({label, setValue}) => {
    
  
    return(
        <View>
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

        </View>
    );
}

export default AddParkingScreen2;