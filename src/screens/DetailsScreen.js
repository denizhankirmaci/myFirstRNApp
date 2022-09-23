import React,{useState} from "react";
import {View,Text,Button,TextInput,Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default DetailsScreen = ()=>{
    const [text, setText] = useState('');
    
    const navigation = useNavigation()
    return(
        <View style={{flex:1, backgroundColor:"yellow", alignItems:'center', justifyContent:'center'}}>
            <Text>Welcome Details Screen</Text>
            <Button title="Go Back" onPress={()=> navigation.goBack()}></Button>
                     <TextInput
                     style={{width: 200, height: 50, borderWidth: 1, padding: 7}}
           placeholder="Deneme Sayı"
           //keyboardType="numeric"
           value={text}
           onChangeText={setText}
           //Password
           // secureTextEntry={true}
         />
         <Text>Text : {text}</Text>
         <Button
           title="Press Me2!"
           onPress={() =>
             Alert.alert('Hello ' + text, 'Eğitimden memnunmusun ?', [
               {text: 'Yes', onPress: () => console.log('evet')},
               {text: 'No', onPress: () => console.log('hayır')},
             ])
           }
         />
         <Button
           title="Soru için (IOS)"
           onPress={() =>
             //prompt sadece ios
             Alert.prompt('Hello ' + text, 'Soru eğitim ?', val =>
               console.log(val),
             )
           }
         />
         <Text
           onPress={() => console.log('Denizhan console')}
           style={{color: 'red', fontWeight: 'bold'}}>
           Örnek
           {'\n'}
           <Text style={{color: 'green'}}>Denizhan123</Text>
           {'\n'}
           Uygulama!
         </Text>
        </View>
    )
}