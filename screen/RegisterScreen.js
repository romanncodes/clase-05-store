import { View, Text, TextInput, StyleSheet, Pressable, Button } from "react-native";
 
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
 
function RegisterScreen(){
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    
    
 
    function emailKeyHandler(text){
        setEmail(text)
    }
    function confirmEmailKeyHandler(text){
        setEmailConfirm(text)
    }
    function passKeyHandler(text){
        setPassword(text)
    }
    function passConfirmKeyHandler(text){
        setPasswordConfirm(text)
    }
 
 
    function registerHandler(){
       
    }

    function redirectLoginScreen(){
        navigation.navigate('Login')
    }
 
    return(
        <View style={styles.container}>
            <Text>Create Account</Text>
            <TextInput style={styles.input} placeholder="Email" onChangeText={emailKeyHandler} />
            <TextInput style={styles.input} placeholder="Confirm Email" onChangeText={confirmEmailKeyHandler}/>
            <TextInput style={styles.input} placeholder="Password" onChangeText={passKeyHandler}/>
            <TextInput style={styles.input} placeholder="Confirm Password" onChangeText={passConfirmKeyHandler} />
            
            <Button title="Create Account" onPress={registerHandler}/>
 
 
            <Pressable onPress={redirectLoginScreen}>
                <View>
                    <Text style={styles.link}>Sign In</Text>
                </View>
            </Pressable>
 
        </View>
    )
}
 
export default RegisterScreen;
 
const styles = StyleSheet.create({
    container:{
        padding:16,
        gap:8
    },
    input:{
        borderWidth:1,
        borderColor:'#cccccc',
        padding:8
    },
    link:{
        textAlign: 'center',
        marginVertical:16,
        color:'#7b80da'
    },
    
})