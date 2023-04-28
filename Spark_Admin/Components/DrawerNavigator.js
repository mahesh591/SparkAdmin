import { View, Text } from "react-native";
import React from "react";

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../Screens/Home";
import DetailScreen from "../Screens/Detail";
import ProfileScreen from "../Screens/ProfileScreen";
import Signout from "../Screens/Signout";
// import CartScreen from "../../Screens/CartScreen";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return(
        <Drawer.Navigator >
            <Drawer.Screen name="Home" component={HomeScreen}  />
            <Drawer.Screen name = "Profile" component={ProfileScreen}/>
            <Drawer.Screen name="Detail" component={DetailScreen} />
            <Drawer.Screen name="Signout" component={Signout} />
        </Drawer.Navigator>
    );
};
export default DrawerNavigator;

// drawerContent={(props)=> {
//     return(
//         <View style={{flex:1}}>
//             <DrawerContentScrollView {...props}>
//                 <ImageBackground source={require("../Assets/Vrda1img2.jpg")} style={{justifyContent:"space-between",alignItems:"center",padding:20,marginBottom:20,backgroundColor:"rgb(0,0,0)",borderBottomWidth:2,borderColor:Colors.secondary}} imageStyle=
//                     {{opacity:0.4}}>
//                     <Image source={require("../Assets/vector.png")} style={{width:70,height:70,borderRadius:35,borderWidth:2,borderColor:Colors.white}}/>
//                     <Text style={{fontSize:20,fontWeight:"bold",color:Colors.white}}>{userDetail?userDetail.name:"Not Available"}</Text>
//                     <Text style={{color:Colors.light}}>{userDetail?userDetail.email:"Not Available"}</Text>
//                 </ImageBackground>
//                 <DrawerItemList {...props}/>
//             </DrawerContentScrollView>
//             <TouchableOpacity onPress={()=>{logout()}} style={{position:"relative",right:0,left:0,bottom:5,backgroundColor:"rgb(231,230,230)"}}>
//                 <Text style={{backgroundColor:"rgba(162,160,160,0.29)",width:"100%",height:40,textAlign:"center",paddingTop:8}}><SimpleLineIcons name={"logout"} size={15} color={Colors.primary}/> LogOut</Text>
//             </TouchableOpacity>
//         </View>
//     )
// } 
// }