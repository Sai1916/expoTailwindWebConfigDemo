import { StyleSheet, Image, View, Text } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
// import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View className='flex-1 w-screen h-screen items-center justify-center bg-blue-600'>
      <Text className='text-3xl text-red-600'>Welcome to React Renderer !!!!!!!</Text>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <Image source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.ly97Gx2DaiGrPJXmBEBmPwHaGU&pid=Api&P=0&h=180'}} 
        className='w-44 h-44 rounded-full'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
