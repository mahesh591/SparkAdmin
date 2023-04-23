import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,Image,TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

export default function OTP(props) {
  const [code, setCode] = useState('');

  return (
    <>
    <KeyboardAvoidingScrollView>
      <ScrollView>
    <View style={styles.screen}>
        <Image source={require('../Images/parkingLogo1.png')} 
           style={{width: 350, height: 350,flex:0.5, marginBottom: 30}} />
      <Text style={styles.text}>Enter OTP</Text>
      <TextInput
        autoFocus
        value={code}
        onChangeText={setCode}
        keyboardType="numeric"
        style={styles.input}
      />
    {/* <Text>Did not receve OTP ? </Text> */}
    {/* <Button title="Resend OTP" onPress={() => props.onSubmit(global.phoneNumber)} /> */}

      <Button title="Confirm OTP" onPress={() => props.onSubmit(code)} />
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
    width: 300,
    marginVertical: 30,
    fontSize: 18,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 25,
  },
});
