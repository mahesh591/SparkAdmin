



import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import {Picker} from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function SignupScreen({ navigation }) {
 
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [selectedValue, setSelectedValue] = useState("java");
  // const [selectedLanguage, setSelectedLanguage] = useState("java");


  saveUserDetails=() => {
    AsyncStorage.setItem('userName', userName);
    AsyncStorage.setItem('email', email);
    AsyncStorage.setItem('mobileNumber', mobileNumber);
    navigation.navigate('Home')

  }

  


  return (
    
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("./assets/log2.png")} /> */}
 
      {/* <StatusBar style="auto" /> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="User Name."
          placeholderTextColor="#003f5c"
          onChangeText={(userName) => setUserName(userName)}
        />
      </View>
    

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      {/* <View style={styles.inputView}>
     <Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
    </View> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Mobile number."
          value={auth().currentUser.phoneNumber}
          placeholderTextColor="#003f5c"
          onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
        />
      </View>
 
      <TouchableOpacity onPress={this.saveUserDetails} style={styles.loginBtn}>
        <Text style={styles.loginText}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}


 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    backgroundColor: "#FF1493",
  },
});