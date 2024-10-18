import { View, Text, TextInput, StyleSheet, Button, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
 
 
function LoginScreen(){
 
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    function emailKeyHandler(text){
        setEmail(text)
    }
 
    function passKeyHandler(text){
        setPassword(text)
        
    }
    function loginHandler(){
        
    }
    function redirectRegisterScreen(){
        navigation.navigate('Register')
    }
 
    return(
        <View style={styles.container}>
            <Text>Sign In</Text>
 
            <TextInput onChangeText={emailKeyHandler}style={styles.input} placeholder="Email" />
            <TextInput onChangeText={passKeyHandler} style={styles.input} placeholder="Password" />
            
            <Button title="Sign In" onPress={loginHandler}/>
 
            <Pressable onPress={redirectRegisterScreen}>
                <View>
                    <Text style={styles.link}>Create Account</Text>
                </View>
            </Pressable>
 
        </View>
    )
}
 
export default LoginScreen;
 
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
    }
})