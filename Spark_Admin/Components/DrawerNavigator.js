import { View, Text } from "react-native";
import React from "react";

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../Screens/Home";
import DetailScreen from "../Screens/Detail";
import ProfileScreen from "../Screens/ProfileScreen";
// import CartScreen from "../../Screens/CartScreen";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return(
        <Drawer.Navigator >
            <Drawer.Screen name="Home" component={HomeScreen}  />
            <Drawer.Screen name = "Profile" component={ProfileScreen}/>
            <Drawer.Screen name="Detail" component={DetailScreen} />
          
            {/* <Drawer.Screen name="Order History" component={CartScreen} /> */}
        </Drawer.Navigator>
    );
};
export default DrawerNavigator;