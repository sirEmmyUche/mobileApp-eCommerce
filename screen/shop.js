import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Entypo} from '@expo/vector-icons';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        let data = await fetch('https://fakestoreapi.com/products');
        let res = await data.json();
        setProducts(res);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchProduct();
  }, []);

  const displayProducts = products.map((item) => (
    <View
      key={item.id}
      style={[
        styles.productContainer,
        styles.boxShadow,
      ]}
    >
      <View style={styles.productImageContainer}>
        <Image style={styles.productImage} source={{ uri: item.image }} />
      </View>
      <Text style={styles.productTitle}>{item.title}</Text>
      <View style={styles.productPriceContainer}>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Entypo name="heart" size={24} color="orange"/>
      </View>
    </View>
  ));

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {displayProducts}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  boxShadow:{
    shadowColor:"#52006a",
    shadowOffset:{width:200, height:200},
    shadowOpacity:1,
    shadowRadius:1,
    elevation:5,
  },

  productContainer: {
    width: '50%',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor:"#fff",
    padding: 5,
    alignItems:"center",
    rowGap:10,
    columnGap:10,
  },
  productImageContainer: {
    height: 100, //you can change to bigger height 200
    width: '100%',
    padding:5,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  productImage: {
    maxWidth: '100%',
    height: '100%',
    resizeMode:'center'
  },
  productTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  productPriceContainer:{
    borderWidth:1,
    borderColor:"transparent",
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
  },
});



