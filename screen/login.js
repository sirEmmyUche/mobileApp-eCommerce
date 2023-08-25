import React, { useEffect, useState, useCallback } from 'react';
import { Pressable, StyleSheet, Text, View,
     ScrollView,TextInput, Button,} from 'react-native';
import { useNavigation,Link} from '@react-navigation/native';
import { Entypo,Ionicons} from '@expo/vector-icons';
import { useAuthContext } from '../context/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logInUser } from '../api';


export default function Login(){
    const {auth, setAuth} = useAuthContext();
    const [userInputs, setUserInputs]=useState({username:"",password:""})  //email:""
    const [eye, setEye] = useState(true);

    const [formValid, setFormValid] = useState(false);
    const [submitting, setSubmitting] = useState(false); // Track submission status

    const handleUserInputs = (text,fieldName)=>{
        setUserInputs((prevState)=>{
            // return { ...prevState, [fieldName]:text };
            const newState = { ...prevState, [fieldName]: text };
            // Check if all fields are filled to determine form validity
            const allFieldsFilled = Object.values(newState).every(value => value !== "");
            setFormValid(allFieldsFilled);
            return newState;
        })
    }

    const handleEyeToggle = ()=>{
        setEye(!eye)
    }
    const submitUserInputs=async()=>{
        try{
            let data = await logInUser(userInputs);
            let token = data.token;
            let saveToken = await AsyncStorage.setItem('token', token);
            setAuth({token})
            setSubmitting(false);
            // const nav = useNavigation();
        }catch(err){console.log(err)}
    }

    const handleSubmit = () => {
        if (formValid && !submitting) {
          setSubmitting(true); // Set submitting status to true
         submitUserInputs(); // ... Perform form submission logic ...
        }
      };

    return(
        <View style={{backgroundColor:"#fff",height:"100%",}}> 
            <ScrollView>
            <View style={{width:"100%", borderWidth:1,borderColor:"transparent",height:100,justifyContent:"center"}}>
                    <Text style={styles.signInHeader}>Sign in to continue</Text>
                </View>
                <View style={{borderWidth:1,width:"100%",marginTop:"3%",borderColor:"transparent",}}>
                        <TextInput style={styles.input}
                        inputMode='email'
                        name="username" //email
                         value={userInputs.username} //email
                         onChangeText={(text) => handleUserInputs(text, "username")} //email
                        placeholder='email'/>
                </View>
                <View style={{borderWidth:1,width:"100%",marginTop:"3%",borderColor:"transparent",flexDirection:"row", alignItems:"center"}}>
                    <TextInput style={{width:"95%", borderWidth:1,margin:12,height:40,fontSize:16,
                    paddingBottom:10,paddingLeft:10,paddingRight:45,paddingTop:10}}
                    secureTextEntry={eye}
                    name="password"
                        value={userInputs.password}
                        onChangeText={(text) => handleUserInputs(text, "password")}
                    placeholder='password'/>
                    <Pressable style={{position:"absolute",left:"90%"}} onPress={handleEyeToggle}>
                    <Entypo name={eye?"eye-with-line":"eye"} color={"orange"} size={25} />
                    </Pressable>
                </View>
                <View style={{margin:"5%", borderWidth:1,borderColor:"transparent"}}>
                    <Button
                        disabled={!formValid || submitting} // Disable the button if the form is not valid or submitting
                        onPress={handleSubmit} 
                        title={submitting?"Submitting...":"log in"} //if not false = sign up : submit
                        color="orange"
                        accessibilityLabel="Learn more about this button"
                        />
                    </View>
                    <View style={{marginTop:"3%", width:"100%", alignItems:"center"}}>
                        <Pressable style={{marginTop:"3%", marginBottom:"3%",flexDirection:"row", alignItems:"center"}}>
                            <Ionicons name='logo-google'size={25} color={"red"}/>
                            <Text style={{marginLeft:5}}>SIGN IN USING GOOGLE</Text>
                        </Pressable>
                        <View style={{ marginTop:"3%", marginBottom:"3%",flexDirection:"row"}}>
                            <Text style={{fontSize:15}}>New here?</Text>
                            <Link to={{screen:"Sign Up"}} style={{paddingLeft:5,}}>
                            <Text style={{color:"orange",fontSize:15}}>Create an Account</Text>
                            </Link>
                        </View>
                    </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width:"95%",
    },
    
    signInHeader:{
        fontSize:30,
        color:"orange",
    },
  });