// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import Shop from '../screen/shop';
import Cart from '../screen/cart';
import History from '../screen/history';
import Wishlist from '../screen/wishlist';
import Account from "../screen/account"

const Tab = createBottomTabNavigator();
 
export default function BottomTabNavigator() {
  return (
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
        <Tab.Screen name="Shop" component={Shop}
        options={{
            tabBarLabel: 'Shop',
            tabBarIcon: ({ color, size }) => (
                <Entypo name="shop" size={24} color="#ff8c00" />
            ),
          }}/>
        <Tab.Screen name="Cart" component={Cart}
         options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color, size }) => (
                <Entypo name="shopping-cart" size={24} color="#ff8c00" />
            ),
          }}/>
        <Tab.Screen name="History" component={History}
         options={{
            tabBarLabel: 'History',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="history" size={24} color="#ff8c00" />
            ),
          }}/>
        <Tab.Screen name="Wishlist" component={Wishlist}
         options={{
            tabBarLabel: 'Wishlist',
            tabBarIcon: ({ color, size }) => (
                <Entypo name="heart" size={24} color="#ff8c00" />
            ),
          }}/>
        <Tab.Screen name="Profile" component={Account}
         options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" size={24} color="#ff8c00" />
            ),
          }}/>
      </Tab.Navigator>
  );
}

