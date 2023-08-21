import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, PixelRatio,TouchableOpacity } from 'react-native';
import { Entypo,Octicons,Feather,
  MaterialCommunityIcons,AntDesign,MaterialIcons } from '@expo/vector-icons';
  import { useNavigation, Link } from '@react-navigation/native';
  // import Login from "./login";


export default function Account() {
  const nav = useNavigation()
    //making text responsive in their box
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;

  return (
    <View style={styles.mainAccountContainerWrapper}>
      <ScrollView>
        <TouchableOpacity style={styles.profilePic} onPress={()=>{nav.navigate("login")}}>
          <Text>Please Sign In</Text>
        </TouchableOpacity>
        <View style={styles.askForProductWrapper}>
          <TouchableOpacity style={styles.headerBox}>
            <AntDesign name="pluscircle" size={40} color="#ff8c00" />
            <Text style={{fontSize: getFontSize(12)}}>Ask for a{"\n"}Product</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerBox}>
          <Entypo name="heart" size={40} color="#ff8c00" />
            <Text style={{fontSize: getFontSize(12)}}>WishList</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerBox}>
          <MaterialIcons name="money" size={40} color="#ff8c00" />
            <Text style={{fontSize: getFontSize(12)}}>Money{"\n"}Box</Text>
          </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={styles.accountButtonLayout}>
              <View style={styles.symbolAndTextWarpper}>
                <MaterialCommunityIcons name="account" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>Edit Profile</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.accountButtonLayout}>
              <View style={styles.symbolAndTextWarpper}>
                <Octicons name="verified" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>Verification Status</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.accountButtonLayout}>
              <View style={styles.symbolAndTextWarpper}>
                <Feather name="list" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>Order History</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.accountButtonLayout}>
              <View style={styles.symbolAndTextWarpper}>
                <MaterialIcons name="money" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>Money Box</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.accountButtonLayout}>
              <View style={styles.symbolAndTextWarpper}>
                <MaterialIcons name="payment" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>Payment Cards</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.accountButtonLayout}>
              <View style={styles.symbolAndTextWarpper}>
                <Octicons name="copy" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>Copy Referal Code</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.accountButtonLayout}>
              <View style={styles.symbolAndTextWarpper}>
                <Entypo name="document" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>Terms and Conditions</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountButtonLayout}>
              <View style={styles.symbolAndTextWarpper}>
                <MaterialIcons name="question-answer" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>FAQs</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.accountButtonLayout}>
              <View style={styles.symbolAndTextWarpper}>
                <MaterialIcons name="car-repair" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>Car Care</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.accountButtonLayout}>
              <View style={styles.symbolAndTextWarpper}>
                <MaterialCommunityIcons name="account-off" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>Delete Profile</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.accountButtonLayout}>
              <View style={styles.symbolAndTextWarpper}>
                <MaterialCommunityIcons name="account-circle-outline" size={24} color="#ff8c00" />
                <Text style={styles.textStyle}>Sign In</Text>
              </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="#ff8c00" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles=StyleSheet.create({
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
    borderColor:"red",
    width:"100%",
    marginTop:"5%",
    marginBottom:"5%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  symbolAndTextWarpper:{
    borderWidth:1,
    borderColor:"blue",
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