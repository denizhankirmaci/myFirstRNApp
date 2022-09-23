import React from 'react';
import {Dimensions} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import SafeAreaScreen from './src/screens/SafeAreaScreen';
import ScrollViewScreen from './src/screens/ScrollViewScreen';
import ImageScreen from './src/screens/ImageScreen';
import StyleScreen from './src/screens/StyleScreen';
import ReuseableCompScreen from './src/screens/ReuseableCompScreen';
import HooksScreen from './src/screens/HooksScreen';
import ApiScreen from './src/screens/ApiScreen';


const Stack = createNativeStackNavigator()

const App = ()=>{
   //cihazın boyutları.
   console.log('Ekran boyutları : Height '+Dimensions.get("screen").height+ ' Width : '+Dimensions.get("screen").width)
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="SafeArea" component={SafeAreaScreen} />
      <Stack.Screen name="ScrollView" component={ScrollViewScreen} />
      <Stack.Screen name="ImageScreen" component={ImageScreen} />
      <Stack.Screen name="StyleScreen" component={StyleScreen} />
      <Stack.Screen name="ReuseableCompScreen" component={ReuseableCompScreen} />
      <Stack.Screen name="HooksScreen" component={HooksScreen} />
      <Stack.Screen name="ApiScreen" component={ApiScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}


// const App: () => Node = () => {

//   
//   const [refreshing, setRefresh] = useState(false);

//   const _onRefresh = () => {
//     setRefresh(true);
//     setTimeout(() => {
//       setRefresh(false);
//     }, 2000);
//   };

//   return (
//     
//       {/* Flex */}
//       {/* <View style={{flex:1, backgroundColor:'purple'}}/>
//       <View style={{flex:1, backgroundColor:'green'}}/> */}

//       <ScrollView>
//        
        



//         
//       </ScrollView>
//     </SafeAreaView>
//   );
// };



export default App;
