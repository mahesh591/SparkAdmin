import * as React from 'react';
import { View, Text , StyleSheet,TouchableOpacity,FlatList, Button, Alert, Image} from 'react-native';


function DetailScreen({ navigation }) {
  return (

    <View style={[styles.containerObject, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin', HouseName:'House one',Address:'H.No - 2-3-55/128, New Vijaypuri colony, Uppal,Hyderabd, Ranga Reddy',srcImage:'../Images/home2.png'},
          {key: 'Dan', HouseName:'House Two',Address:'H.No - 2-3-55/128, New Vijaypuri colony, Uppal,Hyderabd, Ranga Reddy',srcImage:'../Images/home2.png'},
          {key: 'Dominic', HouseName:'House three',Address:'H.No - 2-3-55/128, New Vijaypuri colony, Uppal,Hyderabd, Ranga Reddy',srcImage:'../Images/home2.png'},
          {key: 'Jackson', HouseName:'House four',Address:'H.No - 2-3-55/128, New Vijaypuri colony, Uppal,Hyderabd, Ranga Reddy',srcImage:'../Images/home2.png'},
          {key: 'James', HouseName:'House five',Address:'H.No - 2-3-55/128, New Vijaypuri colony, Uppal,Hyderabd, Ranga Reddy',srcImage:'../Images/home2.png'},
          {key: 'Joel', HouseName:'House six',Address:'H.No - 2-3-55/128, New Vijaypuri colony, Uppal,Hyderabd, Ranga Reddy',srcImage:'../Images/home2.png'},
          {key: 'John', HouseName:'House seven',Address:'H.No - 2-3-55/128, New Vijaypuri colony, Uppal,Hyderabd, Ranga Reddy',srcImage:'../Images/home2.png'},
          {key: 'Jillian', HouseName:'House eight',Address:'H.No - 2-3-55/128, New Vijaypuri colony, Uppal,Hyderabd, Ranga Reddy',srcImage:'../Images/home2.png'},
          {key: 'Julie', HouseName:'House ten',Address:'H.No - 2-3-55/128, New Vijaypuri colony, Uppal,Hyderabd, Ranga Reddy',srcImage:'../Images/home2.png'}
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.Address}</Text>}
      />
      
    </View>
    <View style={styles.container1}>
      <TouchableOpacity onPress={() => Alert.alert('Plzz dont touch')} style={styles.imageSize}>
        <Image style={styles.image1} source={require('../Images/home2.png')}/>
    </TouchableOpacity>

    </View>
    </View>
  );
}


 
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
    containerObject:{
        flex:1,
        padding:20,
    },
    container: {
      flex: 0.8,
      paddingTop: 22
     },
     item: {
       padding: 10,
       fontSize: 18,
       height: 44,
     },
     imageSize:{
        height: 50,
        width:50,
     },
     image1: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'contain'
  },
     container1: {
       flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
     
     },
  });

export default DetailScreen;