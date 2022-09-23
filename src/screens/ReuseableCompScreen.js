import React from 'react';
import {SafeAreaView,StyleSheet,View,Text} from 'react-native'

const ColoredView = (props)=>{
    return(
        <View style={{flex:1, backgroundColor:props.backgroundColor}}>
            <Text style={{color:'black', fontSize:22}}>{props.text}</Text>
        </View>
    )
}

export default ReuseableCompScreen = () => {
   
    return (
      <SafeAreaView style={styles.background}>
        <ColoredView backgroundColor={'purple'} text={'Hello'}/>
        <ColoredView backgroundColor={'yellow'} text={'Denizhan'}/>
        <ColoredView backgroundColor={'blue'}/>

      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
      background: {
        flex: 1,
        backgroundColor: 'brown'
      },
      text:{
        color:'gray',
        fontSize:22
      },
      title:{
        fontWeight:'800'
      }
    });