import React, { useEffect, useState, useCallback} from 'react';
import { Pressable, StyleSheet, Text, View,
     ScrollView,TextInput, Button} from 'react-native';
import { Entypo,Ionicons} from '@expo/vector-icons';
import { useNavigation,Link} from '@react-navigation/native';

export default function SignUp(){
    const [eye, setEye] = useState(true)
    const handleEyeToggle = ()=>{
        setEye(!eye)
    }
    // const nav = useNavigation();
    return(
        <View style={{backgroundColor:"#fff",padding:10}}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.createAccountHeader}>Create a Free Account</Text>
                </View>
                <View style={styles.header}>
                    <Text>Fill the form below to open your own account 
                        and start payment plans for your need</Text>
                </View>
                <View style={{width:"100%",borderColor:"transparent",borderWidth:1,marginBottom:"5%",flexDirection:"row"}}>
                    <Text style={{fontSize:20}}>Already have an Account?</Text>
                    <Link to={{screen:"login"}} style={{paddingLeft:5,}}>
                        <Text style={{fontSize:20,color:"orange"}}>Login</Text>
                    </Link>
                </View>
                <View>
                    <View  style={{borderWidth:1,width:"100%",marginTop:"3%",borderColor:"transparent",}}>
                        <TextInput style={styles.input}
                        placeholder='first name'/>
                    </View>
                    <View style={{borderWidth:1,width:"100%",marginTop:"3%",borderColor:"transparent",}}>
                        <TextInput style={styles.input}
                        placeholder='last name'/>
                    </View>
                    <View style={{borderWidth:1,width:"100%",marginTop:"3%",borderColor:"transparent",}}>
                        <TextInput style={styles.input}
                        placeholder='Phone number'/>
                    </View>
                    <View style={{borderWidth:1,width:"100%",marginTop:"3%",borderColor:"transparent",}}>
                        <TextInput style={styles.input}
                        inputMode='email'
                        placeholder='email'/>
                    </View>
                    <View style={{borderWidth:1,width:"100%",marginTop:"3%",borderColor:"transparent",flexDirection:"row", alignItems:"center"}}>
                        <TextInput style={{width:"95%", borderWidth:1,margin:12,height:40,fontSize:16,
                        paddingBottom:10,paddingLeft:10,paddingRight:45,paddingTop:10}}
                        secureTextEntry={eye}
                        placeholder='password'/>
                        <Pressable style={{position:"absolute",left:"90%"}} onPress={handleEyeToggle}>
                        <Entypo name={eye?"eye-with-line":"eye"} color={"orange"} size={25} />
                        </Pressable>
                        </View>
                    <View style={{margin:"5%", borderWidth:1,borderColor:"transparent"}}>
                    <Button
                        // onPress={onPressLearnMore}
                        title="Sign Up"
                        // color="#841584"
                        color="orange"
                        accessibilityLabel="Learn more about this button"
                        />
                    </View>
                    <View style={{marginTop:"3%", width:"100%", alignItems:"center"}}>
                        <Pressable style={{marginTop:"3%", marginBottom:"3%",flexDirection:"row", alignItems:"center"}}>
                            <Ionicons name='logo-google'size={25} color={"red"}/>
                            <Text style={{marginLeft:5}}>SIGN UP WITH GOOGLE</Text>
                        </Pressable>
                        <View style={{ marginTop:"3%", marginBottom:"3%",flexDirection:"row"}}>
                            <Text style={{fontSize:15}}>Have an Account?</Text>
                            <Link to={{screen:"login"}} style={{paddingLeft:5,}}>
                            <Text style={{color:"orange",fontSize:15}}>Login</Text>
                            </Link>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        width:'100%',
        borderWidth:1,
        borderColor:"transparent",
        marginTop:"5%",
        marginBottom:"5%",
        alignItems:"flex-start"
    },
    
    createAccountHeader:{
        fontSize:30,
        color:"orange",
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width:"95%",
      fontSize:16
    },
  });