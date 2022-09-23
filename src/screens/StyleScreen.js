import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default StyleScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <Text style={[styles.text, styles.title]}>Denizhan 1</Text>
      <Text style={styles.text}>Denizhan 2</Text>
      <Text style={styles.text}>Denizhan 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: Platform.OS==="android" ? 'yellow' : 'green',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text:{
      color:'gray',
      fontSize:22
    },
    title:{
      fontWeight:'800'
    }
  });