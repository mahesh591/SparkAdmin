import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Screens/Login';
import SignupScreen from './Screens/Signup';
import HomeScreen from './Screens/Home';
import DetailScreen from './Screens/Detail';
import CreateParkingLotScren from './Screens/CreateParkingLot';
import CreateParkinLotDetailScreen from './Screens/CreateParkingLotDetails';
import MapScreen from './Screens/MapScreen';
import auth from '@react-native-firebase/auth';
import {AppProvider} from './Components/src/store/auth-context';
import AppContext from './Components/src/store/auth-context';
import DrawerNavigator from './Components/DrawerNavigator';
const Stack = createNativeStackNavigator();

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //     <Stack.Screen name="Signup" component={SignupScreen} options={{ headerBackVisible:false }}/>
    //     <Stack.Screen name="Home" component={HomeScreen}  options={{ headerBackVisible:false , headerRight: () => (
    //         <Button
    //           onPress={ this.signOutUser}
    //           title="SignOut"
    //         />
    //       ),}}/>
    //   <Stack.Screen name='CreateParkingLot' component={CreateParkingLotScren}/>
    //   <Stack.Screen name='CreateParkinLotDetail' component={CreateParkinLotDetailScreen}/>
    //     <Stack.Screen name="Detail" component={DetailScreen} />
    //     <Stack.Screen name="MapScreen" component={MapScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <PaperProvider>
      <AppProvider>
        <Navigation />
      </AppProvider>
    </PaperProvider>
  );
}

// signOutUser = async () => {
//   // Alert.alert('signout successfully')
//   // navigation.popToTop()
//   try {
//       await firebase.auth().signOut();
//     console.log('signned out successfully');
//   } catch (e) {
//       console.log('error',e);
//   }
// }

export default App;

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Logindd" component={LoginScreen} />
      {/* <Stack.Screen name="Signup" component={SignupScreen} options={{ headerBackVisible:false }}/> */}
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const {LoggedOut} = useContext(AppContext);

  signOutUser = async () => {
    // Alert.alert('signout successfully')
    // navigation.popToTop()
    try {
      await firebase.auth().signOut();
      console.log('signned out successfully');
      LoggedOut();
    } catch (e) {
      console.log('error', e);
      LoggedOut();
    }
  };

  return (
    // <DrawerNavigator />
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          headerBackVisible: false,
          headerRight: () => (
            <Button onPress={this.signOutUser} title="SignOut" />
          ),
          headerShown: false
        }}
      />
      <Stack.Screen name="CreateParkingLot" component={CreateParkingLotScren} />
      <Stack.Screen
        name="CreateParkinLotDetail"
        component={CreateParkinLotDetailScreen}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const {isAuthenticated, updateValue} = useContext(AppContext);
  useEffect(() => {
    updateValue();
  }, []);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
