import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Wishlist() {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>Reminder:This is a dummy e-commerce mobile app and as such, nothing is real. 
          Contact the developer for a real time functional mobile app.
          To contact the developer, go to account and click the @ icon or any of the 
          social media icon.
    </Text>
    <StatusBar style="auto" />
  </View>
  );
}