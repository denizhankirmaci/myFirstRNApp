import React from 'react';
import {View, Text, Button, Image, TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default ImageScreen = () => {

  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize:22, fontWeight:'bold', color:'white'}}>Welcome Image Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()}></Button>
      <Image
        style={{height: 100, width: 100, alignContent: 'center'}}
        resizeMethod="resize"
        source={require('../../ssl_logo.png')}
      />
      <Image
        source={{
          uri: 'https://i.pinimg.com/564x/bc/4e/70/bc4e70052f88ee1634d7e2f5968a11a6.jpg',
          width: 300,
          height: 200,
        }}
        resizeMode="contain"
        blurRadius={3}
      />
      <TouchableOpacity onPress={() => console.log('Touch DK')}>
        <View
          style={{
            width: '100%',
            height: 75,
            backgroundColor: 'green',
          }}></View>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => console.log('Touch without DK')}>
        <View
          style={{
            width: '100%',
            height: 75,
            backgroundColor: 'green',
          }}></View>
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={() => console.log('Image Touch DK')}>
        <Image
          style={{height: 100, width: 100, alignContent: 'center'}}
          resizeMethod="resize"
          source={require('../../ssl_logo.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
