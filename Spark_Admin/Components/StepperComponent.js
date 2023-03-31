import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';



const StepperComponent = ({setValue,label,topAlign}) => {

const [incremnetStepperValue, setData] = useState(0);
const maxValue = 10;
const bgColorForElements = 'rgba(97,81,146,1)'

const incrementValue = () => {
    if (maxValue > incremnetStepperValue) {
        setData(incremnetStepperValue + 1)
        setValue(incremnetStepperValue + 1)
        
  }
}

const  decrementValue = () => {
  if(incremnetStepperValue > 0 ){
            setData(incremnetStepperValue - 1)
            setValue(incremnetStepperValue - 1)
         }
  }


  
  return (
     <View >
        <View style={{flex: 1,flexDirection:'row',justifyContent:'space-between',marginTop:topAlign}}>
            <Text style={{alignItems:'flex-start', width:'80%'}}> {label} </Text>
              <View style={{flexDirection:'row', alignItems:'flex-end'}}> 
                    <TouchableOpacity style={{width: 20, height: 20, borderRadius: 10, backgroundColor: incremnetStepperValue == 0 ? 'lightgray':'white',borderWidth:1,marginLeft:10,borderColor:'rgba(97,81,146,0.4)'}}
                     onPress={decrementValue}>
                      <View style={{height: 1, width:'40%',backgroundColor:bgColorForElements,marginTop:9,marginLeft:5}}></View>
                        <Text style={{color:'rgba(97,81,146,1)', textAlign:'center', fontSize: 15, marginTop:-2}}></Text>
                    </TouchableOpacity>
                    <Text style={{marginLeft: 5}}>{incremnetStepperValue}</Text>
                    <TouchableOpacity style={{width: 20, height: 20, borderRadius: 10, backgroundColor: bgColorForElements,marginLeft:10}}
                     onPress={incrementValue} >
                        <Text style={{color:'white', textAlign:'center', fontSize: 15, marginTop: -1}}>+</Text>
                    </TouchableOpacity>
              </View>
        </View>

</View> 
  
  );
};

const styles = StyleSheet.create({
  image1: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    aspectRatio: 1 // You
    
},
textStyling: {
    fontSize: 30
}, cartStyles:{
    width:'40%',
    padding:20, marginLeft: 20,

    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#84A4FF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 3,
    backfaceVisibility: 'hidden'
}
});

export default StepperComponent;
