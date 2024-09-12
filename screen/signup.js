import React, { useEffect, useState, useCallback} from 'react';
import { Pressable, StyleSheet, Text, View,
     ScrollView,TextInput, Button} from 'react-native';
import { Entypo,Ionicons} from '@expo/vector-icons';
import { useNavigation,Link} from '@react-navigation/native';
import { useAuthContext } from '../context/AuthProvider';
import { signupUser } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUp(){
    const {auth, setAuth} = useAuthContext();
    const [userInputs, setUserInputs]=useState({fName:"",lName:"",phoneNumber:"",email:"",password:""})
    const [eye, setEye] = useState(true);

    const [formValid, setFormValid] = useState(false);
    const [submitting, setSubmitting] = useState(false); // Track submission status
    const nav = useNavigation();

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
            // let data = await signupUser(userInputs);
            await AsyncStorage.setItem('user', JSON.stringify(userInputs));
            setSubmitting(false);
            nav.navigate('Cart');
        }catch(err){console.log(err)}
    }

    const handleSubmit = () => {
        if (formValid && !submitting) {
          setSubmitting(true); // Set submitting status to true
         submitUserInputs(); // ... Perform form submission logic ...
        }
      };

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
                        name="fName"
                        value={userInputs.fName}
                        onChangeText={(text) => handleUserInputs(text, "fName")}
                        placeholder='first name'/>
                    </View>
                    <View style={{borderWidth:1,width:"100%",marginTop:"3%",borderColor:"transparent",}}>
                        <TextInput style={styles.input}
                         name="lName"
                         value={userInputs.lName}
                         onChangeText={(text) => handleUserInputs(text, "lName")}
                        placeholder='last name'/>
                    </View>
                    <View style={{borderWidth:1,width:"100%",marginTop:"3%",borderColor:"transparent",}}>
                        <TextInput style={styles.input}
                        inputMode='tel'
                         name="phoneNumber"
                         value={userInputs.phoneNumber}
                         onChangeText={(text) => handleUserInputs(text, "phoneNumber")}
                        placeholder='Phone number'/>
                    </View>
                    <View style={{borderWidth:1,width:"100%",marginTop:"3%",borderColor:"transparent",}}>
                        <TextInput style={styles.input}
                        inputMode='email'
                        name="email"
                         value={userInputs.email}
                         onChangeText={(text) => handleUserInputs(text, "email")}
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
                        title={submitting?"Submitting...":"Sign Up"} //if not false = sign up : submit
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