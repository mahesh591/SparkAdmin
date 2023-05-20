import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,Image,KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

export default function PhoneNumber(props) {
  const [phoneNumber, setPhoneNumber] = useState(null);

  return (
<>
<KeyboardAvoidingScrollView>
<ScrollView>
    <View style={styles.screen}>
       <Image source={require('../Images/parkingLogoo.png')} 
           style={{width: 350, height: 350,flex:0.5, marginBottom: 30}} />

      <Text style={styles.text}>Enter Phone Number</Text>
      <TextInput
        autoFocus
        style={styles.input}
       
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Get OTP" onPress={() => props.onSubmit(phoneNumber)} />
    </View>
    </ScrollView>
    </KeyboardAvoidingScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 2,
    borderColor: 'lightblue',
    keyboardType:'phone-pad',
    width: 300,
    marginVertical: 30,
    fontSize: 20,
    padding: 10,
    borderRadius: 8,
    color: 'black',
  },
  text: {
    fontSize: 25,
  },
});
