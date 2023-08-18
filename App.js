import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Layout from './layout';

export default function App() {
  return (
    <NavigationContainer>
       <Layout/>
    </NavigationContainer>
  );
}

