import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {getAllCartItem} from "../api"


export default function Cart() {
  const [cart, setCar] = useState({});

  useEffect(()=>{
    const fetchCart = async()=>{
      try{
        data = await getAllCartItem(1);
        console.log(data)
      }catch(err){console.log(err)}
    };
    fetchCart();
  },[])

  // const displayCart = cart.map
  return (
    <View>
      <ScrollView>
      <View>

      </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}