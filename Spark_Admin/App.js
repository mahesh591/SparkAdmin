import * as React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/Login'
import SignupScreen from './Screens/Signup'
import HomeScreen from './Screens/Home'
import DetailScreen from './Screens/Detail'
import CreateParkingLotScren from './Screens/CreateParkingLot'
import CreateParkinLotDetailScreen from './Screens/CreateParkingLotDetails';
import MapScreen from './Screens/MapScreen';
import auth from '@react-native-firebase/auth';

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerBackVisible:false }}/>
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerBackVisible:false , headerRight: () => (
            <Button
              onPress={ this.signOutUser}
              title="SignOut"
            />
          ),}}/>
        {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
             <Stack.Screen name="CreateParkingLot" component={CreateParkingLotScren} />
      </Stack.Group> */}
      <Stack.Screen name='CreateParkingLot' component={CreateParkingLotScren}/>
      <Stack.Screen name='CreateParkinLotDetail' component={CreateParkinLotDetailScreen}/>
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

signOutUser = async () => {
  // Alert.alert('signout successfully')
  navigation.popToTop()
  // try {
  //     await firebase.auth().signOut();
  //     navigate('Auth');
  // } catch (e) {
  //     console.log(e);
  // }
}

export default App;


// import React, { useState } from 'react';
// import { Button, TextInput } from 'react-native';
// import auth from '@react-native-firebase/auth';

// const App=()=> {
//   // If null, no SMS has been sent
//   const [confirm, setConfirm] = useState(null);

//   const [code, setCode] = useState('');

//   // Handle the button press
//   async function signInWithPhoneNumber(phoneNumber) {
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//   }

//   async function confirmCode() {
//     try {
//       await confirm.confirm(code);
//     } catch (error) {
//       console.log('Invalid code.');
//     }
//   }

//   if (!confirm) {
//     return (
//       <Button
//         title="Phone Number Sign In"
//         onPress={() => signInWithPhoneNumber('+918885124727')}
//       />
//     );
//   }

//   return (
//     <>
//       <TextInput value={code} onChangeText={text => setCode(text)} />
//       <Button title="Confirm Code" onPress={() => confirmCode()} />
//     </>
//   );
// }

// export default App;