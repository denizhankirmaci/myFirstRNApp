import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Button, Text} from 'react-native';

export default HooksScreen = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(500);

  //Her değişimde çalışacak first load dahil
  useEffect(() => {
    console.log('useEffect Update', count);
  });

  //ilk render - first load da çalışacak.
  useEffect(() => {
    console.log('ilk render useEffecti');
  }, []);

  //aşağıda yazan değer değiştiğinde bu fonksiyon çalışır.
  useEffect(() => {
    console.log('count her değiştiğinde çalışacak');
  }, [count]);

    //aşağıda yazan değer değiştiğinde bu fonksiyon çalışır.
    useEffect(() => {
        console.log('count ve count2 her değiştiğinde çalışacak');
      }, [count,count2]);

  return (
    <SafeAreaView style={styles.background}>
      <Text style={{color: 'white'}}>Count : {count}</Text>
      <Button title="Up" onPress={() => setCount(count + 1)} />

      <Text style={{color: 'black'}}>Count2 : {count2}</Text>
      <Button title="Up" onPress={() => setCount2(count2 + 2)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'brown',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'gray',
    fontSize: 22,
  },
  title: {
    fontWeight: '800',
  },
});
