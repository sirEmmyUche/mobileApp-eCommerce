import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View, Alert } from "react-native";
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { getProducts } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomAlert from "../components/customAlert";

export default function ProductDetail({ route }) {
  const { productId } = route.params;
  const [productDetail, setProductDetail] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertText, setAlertText] = useState('');

  useEffect(() => {
    const getProductById = async () => {
      try {
        let data = await getProducts(productId);
        setProductDetail(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProductById();
  }, [productId]);

  const addToCart = async () => {
    try {
      const existingCart = await AsyncStorage.getItem('cart');
      let cart = [];
      if (existingCart !== null) {
        cart = JSON.parse(existingCart);
        if (!Array.isArray(cart)) {
          cart = [];
        }
      }

      const newCartItem = {
        id: productDetail.id,
        image: productDetail.image,
        price: productDetail.price,
        title: productDetail.title,
      };

      const itemExists = cart.some(item => item.id === newCartItem.id);
      if (!itemExists) {
        cart.push(newCartItem);
        await AsyncStorage.setItem('cart', JSON.stringify(cart));
        setAlertText('Added to Cart');
      } else {
        setAlertText('Item is already in the cart');
      }

      setAlertVisible(true);  // Show the alert
    } catch (error) {
      console.log('add to cart error', error);
      // Alert.alert('Unable to add to cart');
      setAlertText('Something went wrong while adding item to cart');
      setAlertVisible(true);
    }
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView>
        {productDetail ? (
          <View style={{ borderWidth: 1, borderColor: "transparent", margin: 5, padding: 5 }}>
            <Image source={{ uri: productDetail.image }} style={{ width: "100%", height: 300, resizeMode: "contain" }} />
            <View style={{ marginTop: 20, borderBottomWidth: 1, borderColor: "red", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontSize: 15 }}>{productDetail.category}</Text>
              <View style={{ flexDirection: "row" }}>
                <Pressable onPress={addToCart}>
                  <MaterialIcons name="add-shopping-cart" size={28} color="#ff8c00" />
                </Pressable>
                <Pressable onPress={() => { console.log("hello") }} style={{ marginLeft: 20 }}>
                  <Entypo name="heart" size={28} color="orange" />
                </Pressable>
              </View>
            </View>
            <Text style={{ marginTop: 20 }}>{productDetail.title}</Text>
            <Text style={{ marginTop: 20, color: "green" }}>${productDetail.price}</Text>
            <Text style={{ marginTop: 20, color: "orange" }}>More Product Description</Text>
            <Text style={{ marginTop: 20, color: "orange" }}>{productDetail.description}</Text>
          </View>
        ) : (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "orange", fontSize: 15 }}>Fetching Product...</Text>
          </View>
        )}
      </ScrollView>
      <CustomAlert text={alertText} visible={alertVisible} onClose={() => setAlertVisible(false)} />
    </View>
  );
}


// import React, { useEffect, useState } from "react";
// import { Image, Pressable, ScrollView, Text, View, Alert } from "react-native";
// import { Entypo, MaterialIcons } from '@expo/vector-icons';
// import  { getProducts } from '../api';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import CustomAlert from "../components/customAlert";

// export default function ProductDetail({ route }){
//   const { productId } = route.params;
//   const [productDetail, setProductDetail] = useState(null);

//   useEffect(() => {
//     const getProductById = async () => {
//       try {
//         let data = await getProducts(productId)
//         // let res = await data.json();
//         setProductDetail(data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getProductById();
//   }, [productId]);

//   const addToCart = async () => {
//     try {
//       const existingCart = await AsyncStorage.getItem('cart');
//       let cart = [];
//       if (existingCart !== null){
//         cart = JSON.parse(existingCart);
//         // Ensure that the cart is always an array
//         if (!Array.isArray(cart)) {
//           cart = [];
//         }
//       }
  
//       // Add the new product to the cart array
//       const newCartItem = {
//         id: productDetail.id,
//         image: productDetail.image,
//         price: productDetail.price,
//         title: productDetail.title,
//       };
  
//       // Check if the item already exists in the cart
//       const itemExists = cart.some(item => item.id === newCartItem.id);
//       if (!itemExists) {
//         cart.push(newCartItem);
//       } else {
//         <CustomAlert text={'Item is already in the cart'}/>
//         Alert.alert('Item is already in the cart');
//         return;
//       }
//       // Save the updated cart back to AsyncStorage
//       await AsyncStorage.setItem('cart', JSON.stringify(cart));
//       <CustomAlert text={'Added to cart'}/>
//       Alert.alert('Added to Cart');
//     } catch (error) {
//       console.log('add to cart error', error);
//       Alert.alert('Unable to add to cart');
//     }
//   };
  

//   return (
//     <View style={{ backgroundColor: "#fff", flex: 1 }}>
//       <ScrollView>
//         {productDetail ? (
//         <View style={{ borderWidth: 1,borderColor:"transparent",margin: 5,padding:5, }}>
//             <Image source={{ uri: productDetail.image }} style={{ width: "100%",height: 300,resizeMode:"contain"}}/>
//             <View style={{marginTop:20,borderBottomWidth:1,borderColor:"red",flexDirection:"row", 
//             justifyContent:"space-between", alignItems:"center"}}>
//               <Text style={{ fontSize:15}}>{productDetail.category}</Text>
//               <View style={{flexDirection:"row",}}>
//                 <Pressable onPress={addToCart}>
//                     <MaterialIcons name="add-shopping-cart"size={28}color="#ff8c00"/>
//                 </Pressable>
//                 <Pressable onPress={()=>{console.log("hello")}}
//                 style={{marginLeft:20}}>
//                     <Entypo name="heart" size={28} color="orange"/>
//                 </Pressable>
//               </View>
//             </View>
//             <Text style={{marginTop:20}}>{productDetail.title}</Text>
//             <Text style={{marginTop:20, color:"green"}}>${productDetail.price}</Text>
//             <Text style={{marginTop:20, color:"orange"}}>More Product Description</Text>
//             <Text style={{marginTop:20, color:"orange"}}>{productDetail.description}</Text>
//           </View>
//         ) : (
//           <View style={{flex: 1,justifyContent:"center",alignItems: "center",}}>
//             <Text style={{color: "orange", fontSize: 15 }}>Fetching Product...</Text>
//           </View>
//         )}
//       </ScrollView>
//     </View>
//   );
// }





