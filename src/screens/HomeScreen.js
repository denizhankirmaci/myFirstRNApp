import React from "react";
import {View,Text,Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default HomeScreen = ()=>{
    const navigation = useNavigation()
    return(
        <View style={{flex:1, backgroundColor:"cyan", alignItems:'center', justifyContent:'center'}}>
            <Text>Welcome Home Screen</Text>
            <Button title="Go to Details Screen" onPress={()=> navigation.navigate("Details")}></Button>
            <Button title="Go to SafeArea Screen" onPress={()=> navigation.navigate("SafeArea")}></Button>
            <Button title="Go to ScrollView Screen" onPress={()=> navigation.navigate("ScrollView")}></Button>
            <Button title="Go to Image Screen" onPress={()=> navigation.navigate("ImageScreen")}></Button>
            <Button title="Go to Styles Screen" onPress={()=> navigation.navigate("StyleScreen")}></Button>
            <Button title="Go to Reuseable Component Screen" onPress={()=> navigation.navigate("ReuseableCompScreen")}></Button>
            <Button title="Hooks Screen'e git" onPress={()=> navigation.navigate("HooksScreen")}></Button>
            <Button title="Api Screen'e git" onPress={()=> navigation.navigate("ApiScreen")}></Button>
        </View>
    )
}