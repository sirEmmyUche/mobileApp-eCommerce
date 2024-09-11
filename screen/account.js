import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { ScrollView, StyleSheet,
   Text, View, PixelRatio,Linking,Pressable } from 'react-native';
import { Entypo,Octicons,Feather,
  MaterialCommunityIcons,AntDesign,MaterialIcons } from '@expo/vector-icons';
  import { useNavigation,Link} from '@react-navigation/native';
 

export default function Account() {
  const nav = useNavigation()
    //making text responsive in their box
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;

  const openEmail = useCallback(async() => {
    await Linking.openURL('mailto:emmyosuchukwu@gmail.com');
  });
  const openTwitter = useCallback(async() => {
    await Linking.openURL('https://twitter.com/sir_emmy_uche');
  });

  const linkedIn = useCallback(async() => {
    await Linking.openURL('https://www.linkedin.com/in/ucheosuchukwu');
  });

  return (
    <View style={styles.mainAccountContainerWrapper}>
      <ScrollView>
        <Pressable style={styles.profilePic} onPress={()=>{nav.navigate("Sign Up")}}>
          <Text>Please Sign In</Text>
        </Pressable>
        <View style={styles.askForProductWrapper}>
          <Pressable style={styles.headerBox}>
            <AntDesign name="pluscircle" size={40} color="#ff8c00" />
            <Text style={{fontSize: getFontSize(12)}}>Ask for a{"\n"}Product</Text>
          </Pressable>
          <Pressable style={styles.headerBox} onPress={()=>{nav.navigate("Wishlist")}}>
          <Entypo name="heart" size={40} color="#ff8c00" />
            <Text style={{fontSize: getFontSize(12)}}>WishList</Text>
          </Pressable>
          <Pressable style={styles.headerBox} >
          <MaterialIcons name="money" size={40} color="#ff8c00" />
            <Text style={{fontSize: getFontSize(12)}}>Money{"\n"}Box</Text>
          </Pressable>
        </View>
        <View>
            <Pressable style={styles.accountButtonLayout}>
              <View style={styles.symbolAndTextWarpper}>
                <MaterialCommunityIcons name="account" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>Edit Profile</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </Pressable>

          <Pressable style={styles.accountButtonLayout} >
              <View style={styles.symbolAndTextWarpper}>
                <Octicons name="verified" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>Verification Status</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </Pressable>

          <Pressable style={styles.accountButtonLayout} onPress={()=>{nav.navigate("History")}}>
              <View style={styles.symbolAndTextWarpper}>
                <Feather name="list" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>Order History</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </Pressable>

          <Pressable style={styles.accountButtonLayout} >
              <View style={styles.symbolAndTextWarpper}>
                <MaterialIcons name="money" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>Money Box</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </Pressable>

          <Pressable style={styles.accountButtonLayout} >
              <View style={styles.symbolAndTextWarpper}>
                <MaterialIcons name="payment" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>Payment Cards</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </Pressable>

          <Pressable style={styles.accountButtonLayout} >
              <View style={styles.symbolAndTextWarpper}>
                <Entypo name="document" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>Terms and Conditions</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </Pressable>
          <Pressable style={styles.accountButtonLayout} >
              <View style={styles.symbolAndTextWarpper}>
                <MaterialIcons name="question-answer" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>FAQs</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </Pressable>

          <Pressable style={styles.accountButtonLayout} >
              <View style={styles.symbolAndTextWarpper}>
                <MaterialIcons name="car-repair" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>Car Care</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </Pressable>

          <Pressable style={styles.accountButtonLayout}>
              <View style={styles.symbolAndTextWarpper}>
                <MaterialCommunityIcons name="account-off" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>Delete Profile</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </Pressable>

          <Pressable style={styles.accountButtonLayout}>
              <View style={styles.symbolAndTextWarpper}>
                <MaterialCommunityIcons name="account-circle-outline" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>Sign In</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </Pressable>
        </View>

        <View style={styles.contactWrapper}>
          <Text style={{fontSize: getFontSize(25)}}>Contact for Support</Text>
          <View style={styles.contactIconWrapper}>
            <View style={styles.contactIconBox}>
              <Pressable onPress={openEmail}>
                <Entypo name="email" size={30} color="red"/>
              </Pressable>
            </View>
            <View style={styles.contactIconBox}>
              <Pressable onPress={openTwitter}>
                <AntDesign name="twitter" size={30} color="blue"/>
              </Pressable>
            </View>
            <View style={styles.contactIconBox}>
              <Pressable onPress={linkedIn}>
                <AntDesign name="linkedin-square" size={30} color="blue"/>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles=StyleSheet.create({
  contactIconWrapper:{
    width:"100%",
    marginTop:"3%",
    marginBottom:"3%",
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  contactWrapper:{
    borderWidth:1,
    borderColor:"yellow",
    marginTop:"5%",
    width:"100%",
    backgroundColor:"yellow",
    alignItems:"center"
  },
  mainAccountContainerWrapper:{
    backgroundColor:"#fff",
    padding:5,
  },
  profilePic:{
    width:150,
    height:150,
    padding:5,
    borderWidth:1,
    borderColor:"transparent",
    borderRadius:1000,
    backgroundColor:"#fff",
    shadowColor:"green",
    shadowOnset:{width:200, height:200},
    shadowOpacity:1,
    shadowRadius:1,
    elevation:5,
    justifyContent:"center",
    alignItems:"center"
  },
  askForProductWrapper:{
    width:"100%",
    padding:5,
    marginTop:"10%",
    marginBottom:"10%",
    borderWidth:1,
    borderColor:"transparent",
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  headerBox:{
    width:100,
    borderWidth:1,
    borderColor:"transparent",
    alignItems:"center",
    justifyContent:"center"
  },
  accountButtonLayout:{
    borderWidth:1,
    borderColor:"transparent",
    width:"100%",
    marginTop:"5%",
    marginBottom:"5%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  symbolAndTextWarpper:{
    borderWidth:1,
    borderColor:"transparent",
    flexDirection:"row",
    alignItems:"center",
  },
  textStyle:{
    marginLeft:20,
  },
  // textFont:{
  //   fontSize:getFontSize(12),
  // }
})