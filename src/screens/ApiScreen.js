import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  FlatList,
  NativeBaseProvider,
  Center,
  Box,
  View,
  RefreshControl
} from 'react-native';

export default ApiScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [refreshing, setRefresh] = useState(false);
  const _onRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      fetchData();
      setRefresh(false);
    }, 2000);
  };



  const fetchData = async () => {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(json => setData(json));
    //const data = await resp.json();
    //console.log(data);
    //setData(data);
    console.log('fetching data DK')
    setLoading(false);
  };

  // const renderItem = ({ item }) => {
  //   return (
  //     <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
  //       {item.title}
  //     </Box>
  //   );
  // };

  // const fetchData = () => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  //     .then(json => setData(json));
  // };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    // <Button title="CallAPI" onPress={fetchData} />
    // <NativeBaseProvider>
    //   <Center flex={1}>
    //     <Box> Fetch API</Box>
    //     {loading && <Box>Loading..</Box>}
    //     {data && (
    //       <FlatList
    //         data={data}
    //         renderItem={renderItem}
    //         keyExtractor={item => item.id.toString()}
    //       />
    //     )}
    //   </Center>
    // </NativeBaseProvider>
    <View style={styles.background}>
      {/* <Button title="CallAPI" onPress={fetchData} /> */}

      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={({item}) => (
          <>
            {/* <Text>{item.id}</Text>
            <Text>{item.title}</Text> */}
            <Text>
              <Text style={{color: 'black', fontSize:20}}>{item.id} </Text>{' '}
              <Text style={{color: 'red', fontSize:15}}>{item.title} </Text>
              <Text style={{color: 'green', fontSize:10}}>{item.description}</Text>
            </Text>
            {/* <View style={{flexDirection:'row-reverse'}}>
        <Text </Text>
        </View>
        <View style={{flexDirection:'row'}}>


        <Text style={{color:'white'}}>{item.id}</Text>
        </View> */}
          </>
        )
      }
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    color: 'gray',
    fontSize: 22,
  },
  title: {
    fontWeight: '800',
  },
});
