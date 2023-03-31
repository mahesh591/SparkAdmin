import React, { useState } from "react";
import { View,  TouchableOpacity, Image, Text } from "react-native";



const CheckBoxComponent = ({label, setValue}) => {
    
    const [isChecked, setChecked] = useState(false);
    const checkBoxTapped = () => {
        if(isChecked == true ) {
                    setValue(false)
                    setChecked(false)
        } else {
                    setValue(true)
                    setChecked(true)
        }
    }
    return(
        <View style={{flexDirection:"row"}}> 
        <Text style= {{marginTop:5}}>{label}</Text>
            <TouchableOpacity onPress={checkBoxTapped}>

                   <Image style={{height: 25, width: 25, padding: 10, marginLeft:5 }} source={ isChecked === true ?                  
                          require('../Images/checkedbox.png') : 
                          require('../images/../Images/unCheckedbox.png')} />
                  
            </TouchableOpacity>
        </View>
       
    );
}

export default CheckBoxComponent;