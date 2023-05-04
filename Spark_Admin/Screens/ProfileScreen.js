import * as React from 'react';
import { View, Text , StyleSheet,TouchableOpacity,FlatList, Button, Alert, Image} from 'react-native';


function ProfileScreen({ navigation }) {
  return (

   <View>
    <View style={{marginLeft:20,marginRight:20,marginTop:30}}>
        <Text style={{padding:10}}>
                Name : 
        </Text>
        <Text style={{padding:10, color:"black"}}>
                MobileNumber : 
        </Text>
        <Text style={{padding:10, color:"black"}}>
                Email : 
        </Text>
        <Text style={{padding:10, color:"black"}}>
                Parking slots available : 
        </Text>
    </View>
   </View>
  );
}


 
const styles = StyleSheet.create({
   
  
  });

export default ProfileScreen;