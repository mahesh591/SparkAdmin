
import  React, { useState,useEffect, useContext } from 'react';
import AppContext from '../Components/src/store/auth-context';

function Signout({ navigation }) {
    const {LoggedOut} = useContext(AppContext);
    // constructor(props) {
    //     super(props);
    //     const {LoggedOut} = useContext(AppContext);
    //  }

    // componentWillMount() {
    //    this.signOutUser()
    // }
    useEffect(() => { 
    this.signOutUser()
   }, [])
   

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
}
export default Signout;