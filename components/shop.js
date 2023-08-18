import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native-stack";

export default function Shop() {
  return (
    <View>
      <Text>Shop</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//     container: {
//       backgroundColor:"red",
//       width:200,
//       flex: 2,
//       // backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });
