import { View, Button,Alert, TextInput, Text } from "react-native";
import { useState } from "react";

function Login(){
    var [passwordprotected, setPasswordprotected] =  useState(true)
    function showPassword(){
        setPasswordprotected(false)
    }
    function login(){
        Alert.alert("Login button clicked")
    }
    function getEmail(e){
        console.log("e.targte value" , e.target.value)
    }
    function getPassword(e){
        console.log("e.targte value" , e.target.value)
    }
    return (
      <View>
          <TextInput placeholder="Email" onChange={getEmail}></TextInput>
          <TextInput placeholder="Password" secureTextEntry={passwordprotected} onChange={getPassword}></TextInput>
          <Text onClick={showPassword}>Show Password</Text>
          <Button title="Login" onPress={login}></Button>
      </View>
    )
}

export default Login