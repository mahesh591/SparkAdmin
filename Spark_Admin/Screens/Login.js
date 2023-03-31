// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
//   Button,
//   TouchableOpacity,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableWithoutFeedback,
//   Alert,
// } from "react-native";
// import auth from '@react-native-firebase/auth';

// export default function LoginScreen({ navigation }) {
//   const [mobileNumber, setMobileNumber] = useState("");
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.inner}>
//          <View style={styles.container}>
  
//      <Image source={require('../Images/parkingLogo1.png')} 
//            style={{width: 350, height: 350,flex:0.5, marginBottom: 30}} />
//      <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Enter Mobile number."
//           placeholderTextColor="#003f5c"
//           keyboardType="phone-pad"
//           onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
//       />
//      </View>
//     <TouchableOpacity onPress={() =>
//     handleClick()
//     //  Alert.alert({mobileNumber})
//      // auth().signInWithPhoneNumber(mobileNumber);
//        } style={styles.loginBtn}>
//       <Text style={styles.loginText}>Get OTP</Text>
//     </TouchableOpacity>
//   </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// }

// handleClick = () => {
//    // Alert.alert('Simple Button pressed')
//     auth().signInWithPhoneNumber('+918885124727');
//   // auth().signInWithPhoneNumber(mobileNumber);
// }
// // function getOtp(){
// //   Alert.alert('Simple Button pressed')
// // }
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
 
//   image: {
//     marginBottom: 40,
//   },
 
//   inputView: {
//     backgroundColor: "#FFC0CB",
//     borderRadius: 30,
//     width: "70%",
//     height: 45,
//     // marginBottom: 20,
 
//     alignItems: "center",
//   },
 
//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     marginLeft: 20,
//   },
 
//   forgot_button: {
//     height: 30,
//     marginBottom: 10,
//   },
 
//   loginBtn: {
//     width: "50%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 20,
//     backgroundColor: "#FF1493",
//   },
// });


// // import React, { useState } from 'react';
// // import { Button, TextInput } from 'react-native';
// // import auth from '@react-native-firebase/auth';

// // const App=()=> {
// //   // If null, no SMS has been sent
// //   const [confirm, setConfirm] = useState(null);

// //   const [code, setCode] = useState('');

// //   // Handle the button press
// //   async function signInWithPhoneNumber(phoneNumber) {
// //     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
// //     setConfirm(confirmation);
// //   }

// //   async function confirmCode() {
// //     try {
// //       await confirm.confirm(code);
// //     } catch (error) {
// //       console.log('Invalid code.');
// //     }
// //   }

// //   if (!confirm) {
// //     return (
// //       <Button
// //         title="Phone Number Sign In"
// //         onPress={() => signInWithPhoneNumber('+918885124727')}
// //       />
// //     );
// //   }

// //   return (
// //     <>
// //       <TextInput value={code} onChangeText={text => setCode(text)} />
// //       <Button title="Confirm Code" onPress={() => confirmCode()} />
// //     </>
// //   );
// // }

// // export default App;



// import React, {useState} from 'react';

// //import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   TextInput,
//   View,
//   Button
// } from 'react-native';

// const Login = () => {
//   const [textInputName, setTextInputName] = useState('');
//   const [textInputEmail, setTextInputEmail] = useState('');

//   const checkTextInput = () => {
//     //Check for the Name TextInput
//     if (!textInputName.trim()) {
//       alert('Please Enter Name');
//       return;
//     }
//     //Check for the Email TextInput
//     if (!textInputEmail.trim()) {
//       alert('Please Enter Email');
//       return;
//     }
//     //Checked Successfully
//     //Do whatever you want
//     alert({textInputName.get});
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <TextInput
//           placeholder="Enter Name"
//           onChangeText={
//             (value) => setTextInputName(value)
//           }
//           underlineColorAndroid="transparent"
//           style={styles.textInputStyle}
//         />
//         <TextInput
//           placeholder="Enter Email"
//           onChangeText={
//             (value) => setTextInputEmail(value)
//           }
//           underlineColorAndroid="transparent"
//           style={styles.textInputStyle}
//         />
//         <View style={{marginTop: 15}}>
//           <Button 
//             title="Submit"
//             onPress={checkTextInput}
//             color="#606070" 
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 35,
//   },
//   textInputStyle: {
//     width: '100%',
//     height: 40,
//     paddingHorizontal: 5,
//     borderWidth: 0.5,
//     marginTop: 15,
//   },
// });

// export default Login;



import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import PhoneNumber from './PhoneNumber';
import VerifyCode from './VerifyCode';
import Authenticated from './Authenticated';
import SignupScreen from './Signup';
import { Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({navigation}) {
  const [confirm, setConfirm] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  async function signIn(phoneNumber) {
    try {
      global.phoneNumber = phoneNumber
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      alert(error);
    }
  }

  async function confirmVerificationCode(code) {
    try {
      await confirm.confirm(code);
      setConfirm(null);
    } catch (error) {
      alert('Invalid code');
    }
  }

  auth().onAuthStateChanged((user) => {
    if(user) {
      setAuthenticated(true);
      let userNameStr =  AsyncStorage.getItem('userName');
      if (userNameStr) {
        navigation.navigate('Home')
      } else {
        navigation.navigate('Signup')
      }
     
     // Alert.alert('Navigating')
    } else {
      setAuthenticated(false);
    }
  })

  getSavedDetails= async () => {
    try {
        let userNameStr = await AsyncStorage.getItem('userName');
        let emailStr = await AsyncStorage.getItem('email');
        let mobileNumberStr = await AsyncStorage.getItem('mobileNumber');
        Alert.alert('Saved username is ',userNameStr);
    }
    catch(error) {
          alert(error);
    }
  }

  //if (authenticated) return <SignupScreen />;

  if (confirm) return <VerifyCode onSubmit={confirmVerificationCode} />;

  return <PhoneNumber onSubmit={signIn} />;
}







// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';


// import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps




// export default function LoginScreen () {
//   const styles = StyleSheet.create({
//     container: {
//       ...StyleSheet.absoluteFillObject,
//       height: 900,
//       width: 400,
//       justifyContent: 'flex-end',
//       alignItems: 'center',
//     },
//     map: {
//       ...StyleSheet.absoluteFillObject,
//     },
//    });
//     return (
//       // <View><Text>Map view</Text></View>
//       <SafeAreaView style={{flex:1}}>
//       <View style={styles.container}>
//         <Text> MapView</Text>
//      <MapView
//        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//        style={styles.map}
//        region={{
//          latitude: 17.398377,
//          longitude: 78.558265,
//          latitudeDelta: 0.015,
//          longitudeDelta: 0.0121,
//        }}
//      >
//      </MapView>
//    </View>
//     </SafeAreaView>
//    )
// }