import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import Shop from './components/shop';
import Cart from './components/cart';
import History from './components/history';
import Wishlist from './components/wishlist';
import Account from './components/account';


const Tab = createBottomTabNavigator();
 
export default function Layout() {
  return (
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
        <Tab.Screen name="Shop" component={Shop}
        options={{
            tabBarLabel: 'Shop',
            tabBarIcon: ({ color, size }) => (
                <Entypo name="shop" size={24} color="orange" />
            ),
          }}/>

        <Tab.Screen name="Cart" component={Cart}
         options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color, size }) => (
                <Entypo name="shopping-cart" size={24} color="orange" />
            ),
          }}/>

        <Tab.Screen name="History" component={History}
         options={{
            tabBarLabel: 'History',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="history" size={24} color="orange" />
            ),
          }}/>

        <Tab.Screen name="Wishlist" component={Wishlist}
         options={{
            tabBarLabel: 'Wishlist',
            tabBarIcon: ({ color, size }) => (
                <Entypo name="heart" size={24} color="orange" />
            ),
          }}/>

        <Tab.Screen name="Account" component={Account}
         options={{
            tabBarLabel: 'Shop',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" size={24} color="orange" />
            ),
          }}/>
      </Tab.Navigator>
  );
}

