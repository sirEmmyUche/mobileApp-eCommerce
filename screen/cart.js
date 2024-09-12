import { StatusBar } from 'expo-status-bar';
import React,{useState,useMemo } from 'react';
import { ScrollView, StyleSheet, Text, Alert, View, Image, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  // Fetch cart data whenever the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      const fetchCart = async () => {
        try {
          const data = await AsyncStorage.getItem('cart');
          if (data) {
            const cartItems = JSON.parse(data);
            setCart(cartItems);

            // Initialize quantities for each item in the cart
            const initialQuantities = {};
            cartItems.forEach(item => {
              initialQuantities[item.id] = 1; // Default quantity of 1 for each item
            });
            setQuantities(initialQuantities);
          }
        } catch (err) {
          console.error(err);
        }
      };

      fetchCart();
    }, []) // Empty dependency array to avoid rerunning unnecessarily
  );

  // Clear cart function
  const clearCart = async () => {
    await AsyncStorage.removeItem('cart');
    setCart([]);
    setQuantities({});
  };

  // Increment and decrement quantity functions
  const increment = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const decrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
    }));
  };

  // Remove item from cart function
  const removeFromCart = async (id) => {
    try {
      const updatedCart = cart.filter(item => item.id !== id);
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      setCart(updatedCart);

      // Also remove quantity for the removed item
      const updatedQuantities = { ...quantities };
      delete updatedQuantities[id];
      setQuantities(updatedQuantities);

      Alert.alert('Product removed from the cart');
    } catch (err) {
      console.log('Error removing item from cart:', err);
      Alert.alert('Unable to remove product from the cart');
    }
  };

  // Calculate total price based on items and their quantities
  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => {
      return total + item.price * (quantities[item.id] || 1);
    }, 0);
  }, [cart, quantities]);

  const openPaymentLink = async () => {
    let data = await AsyncStorage.getItem('user');
    let user = await JSON.parse(data);
    if(user == null){
      Alert.alert('Please logIn or Sign up to continue')
    }
    else{
      await WebBrowser.openBrowserAsync('https://buy.stripe.com/test_aEUeVf7w27dN5yMfYY');
    }
  };

  return (
    <ScrollView contentContainerStyle={[styles.scrollView]}>
      <View>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <View key={index} style={[styles.container]}>
              <View style={{ backgroundColor: '#fff' }}>
                <View style={[styles.cartItem]}>
                  <View style={[styles.imgHolder]}>
                    <Image
                      source={{ uri: item.image }}
                      resizeMode="contain"
                      style={[styles.img]}
                    />
                  </View>
                  <View style={{ width: '65%' }}>
                    <Text style={{ marginBottom: 15, fontSize: 16 }}>{item.title}</Text>
                    <Text style={{ color: 'green' }}>
                      ${item.price * (quantities[item.id] || 1)}
                    </Text>
                  </View>
                </View>
                <View style={[styles.wrapper]}>
                  <Pressable
                    style={[styles.deleteWrapper]}
                    onPress={() => removeFromCart(item.id)}
                  >
                    <MaterialCommunityIcons name="delete-outline" size={24} color="orange" />
                    <Text style={[styles.removeTxt]}>Remove</Text>
                  </Pressable>
                  <View style={[styles.countWrapper]}>
                    <Pressable onPress={() => increment(item.id)}>
                      <Ionicons name="add-circle-outline" size={24} color="orange" />
                    </Pressable>
                    <Text style={[styles.quantity]}>{quantities[item.id]}</Text>
                    <Pressable onPress={() => decrement(item.id)}>
                      <AntDesign name="minuscircleo" size={20} color="orange" />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          ))
        ) : (
          <View style={[styles.emptyCartView]}>
            <Text style={{ fontSize: 18 }}>Your cart is empty</Text>
          </View>
        )}
      </View>

      {cart.length > 0 && (
        <View style={[styles.footer]}>
          <Text style={[styles.totalPrice]}>Total: ${totalPrice.toFixed(2)}</Text>
          <Pressable style={[styles.btn]} onPress={openPaymentLink}>
            <Text style={[styles.btnText]}>Checkout</Text>
          </Pressable>
          <Pressable style={[styles.btn]} onPress={clearCart}>
            <Text style={[styles.btnText]}>Clear Cart</Text>
          </Pressable>
          <Text style={{marginTop:10}}>
            Reminder:This is a dummy e-commerce mobile app and as such, nothing is real. 
            Contact the developer for a real time functional mobile app.
            To contact the developer, go to account and click the @ icon or any of the 
            social media icon.
          </Text>
        </View>
      )}
      <StatusBar style="auto" />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollView:{
    minHeight:'100%',
  },
  container: {
    margin:20,
  },
  cartItem: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
  },
  img: {
    width: "100%",
    height: 100,
  },
  imgHolder: {
    borderWidth: 1,
    borderColor: 'transparent',
    height: 80,
    width: '30%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  deleteWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    width: '30%',
  },
  removeTxt: {
    color: 'orange',
    fontWeight: '500',
    marginLeft: 15,
  },
  countWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%',
    justifyContent: 'space-around',
  },
  quantity: {
    fontWeight: '600',
    fontSize: 18,
  },
  emptyCartView: {
    height:'100%',
    justifyContent: "center",
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  btn: {
    width:'100%',
    height: 40,
    borderRadius: 5,
    backgroundColor: 'orange',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    textAlign: 'center',
    fontWeight: '500',
    color: '#fff',
  },
});
