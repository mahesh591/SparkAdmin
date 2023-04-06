import React, { useState ,useContext} from 'react';
import auth from '@react-native-firebase/auth';
import PhoneNumber from './PhoneNumber';
import VerifyCode from './VerifyCode';
import Authenticated from './Authenticated';
import SignupScreen from './Signup';
import { Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AppContext from "../Components/src/store/auth-context";

export default function LoginScreen({navigation}) {
  const [confirm, setConfirm] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const { updateValue, LoggedIn } = useContext(AppContext);

  async function signIn(phoneNumber) {
    try {
      global.phoneNumber = phoneNumber
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      console.log("confirmation ");
      setConfirm(confirmation);
    } catch (error) {
      alert(error);
    }
  }

  async function confirmVerificationCode(code) {
    try {
      await confirm.confirm(code);
      setConfirm(null);
      LoggedIn();
    } catch (error) {
      alert('Invalid code');
    }
  }

  // auth().onAuthStateChanged((user) => {
  //   if(user) {
  //     setAuthenticated(true);
  //     const mobileNum = AsyncStorage.getItem('mobileNumber');
  //     console.log('mobilenumb is :'+ mobileNum);
  //     if (mobileNum !== null) {
  //       navigation.navigate('Signup')
  //     }
  //     // let userNameStr =  AsyncStorage.getItem('mobileNumber');
  //     // if (userNameStr) {
  //     //   console.log("navigating to home"+userNameStr);
  //     //   // navigation.navigate('Home')
  //     //   navigation.navigate('Signup')
  //     // } else {
  //     //   console.log("navigating to signup page");
  //     //   navigation.navigate('Signup')
  //     // }
  //   } else {
  //     setAuthenticated(false);
  //   }
  // })

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