import  React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, Button } from "react-native";

const AddParkingScreen1 = ({props}) => {
    
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
        <View>
        <Text>Parking Name</Text>
        <TextInput style={{paddingLeft:15,paddingRight:15, borderWidth: 0.5, borderColor:'gray',borderRadius: 15,marginLeft:20,marginRight:20,marginTop:5,height:40}} placeholder='Enter location Name' onChangeText={newText => setParkingSlotName(newText)}
        defaultValue={parkingSlotName} ></TextInput>

    <Text style={styles.TextStyling}>Parking Location</Text>
        <View style = {{flex: 1,flexDirection:'row',justifyContent:'space-between', marginLeft: 20, marginRight: 20, marginTop: 5,maxHeight: 50, borderWidth: 0.5, 
    borderColor: 'gray',borderRadius: 15}}>
          <TextInput  placeholder='Enter Parking location' style={{paddingLeft:15,paddingRight:15}} onChangeText={newText => setParkingSlotLocation(newText)} defaultValue={parkingSlotLocation}/>
        <TouchableOpacity
            activeOpacity={0.5} onPress={() => {
              navigation.navigate('MapScreen')
            }}>
           <Image style={{height: 30, width: 30, padding: 10, marginTop:10,marginRight:10,alignItems: 'flex-end'}} source={require('../../Images/currentLocation.png')}/>
    
        </TouchableOpacity>

        <Text style= {styles.TextStyling}> Documents picker </Text>
        <View style={{marginHorizontal: 40 }}>
          <Button title="Select Document" onPress={selectDoc} />
        </View>

         <Text style= {styles.TextStyling}> Images </Text>

         <View style={{marginHorizontal: 40 }}>
         <FlatList
        data={DATA}
        renderItem={({item}) => <Item title='abcd' />}
        keyExtractor={item => item.id}
        horizontal={true}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
      />
          <Button title="Add Image" onPress={this.selectFile} />
        </View>
        </View>
</View>
    );
}

export default AddParkingScreen1;