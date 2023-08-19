import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, useWindowDimensions } from 'react-native';

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
      ]}
    >
      <View style={styles.productImageContainer}>
        <Image style={styles.productImage} source={{ uri: item.image }} />
      </View>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
        {displayProducts}
        </View>
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
    padding: 10,
  },
  productContainer: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 5,
    width:"50%",
    alignItems:"center"
  },
  productImageContainer: {
    width: '100%',
    height: 100,
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
  productPrice: {
    fontSize: 15,
    color: 'green',
  },
});
