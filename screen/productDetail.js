import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import  { getProducts } from '../api';

export default function ProductDetail({ route }){
  const { productId } = route.params;
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    const getProductById = async () => {
      try {
        let data = await getProducts(productId) //fetch(`https://fakestoreapi.com/products/${productId}`);
        // let res = await data.json();
        setProductDetail(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProductById();
  }, [productId]);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView>
        {productDetail ? (
        <View style={{ borderWidth: 1,borderColor:"transparent",margin: 5,padding:5, }}>
            <Image source={{ uri: productDetail.image }} style={{ width: "100%",height: 300,resizeMode:"contain"}}/>
            <View style={{marginTop:20,borderBottomWidth:1,borderColor:"red",flexDirection:"row", 
            justifyContent:"space-between", alignItems:"center"}}>
              <Text style={{ fontSize:15}}>{productDetail.category}</Text>
              <View style={{flexDirection:"row",}}>
                <Pressable onPress={()=>{console.log("hello")}}>
                    <MaterialIcons name="add-shopping-cart"size={28}color="#ff8c00"/>
                </Pressable>
                <Pressable onPress={()=>{console.log("hello")}}
                style={{marginLeft:20}}>
                    <Entypo name="heart" size={28} color="orange"/>
                </Pressable>
              </View>
            </View>
            <Text style={{marginTop:20}}>{productDetail.title}</Text>
            <Text style={{marginTop:20, color:"green"}}>${productDetail.price}</Text>
            <Text style={{marginTop:20, color:"orange"}}>More Product Description</Text>
            <Text style={{marginTop:20, color:"orange"}}>{productDetail.description}</Text>
          </View>
        ) : (
          <View style={{flex: 1,justifyContent:"center",alignItems: "center",}}>
            <Text style={{color: "orange", fontSize: 15 }}>Fetching Product...</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}





