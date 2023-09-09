import { StyleSheet, Text ,SafeAreaView} from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper'
import { auth } from "../firebase"

const Loginscreen = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  function login () {
    
  }
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>login toGo</Text>
  
      <TextInput
        style={styles.input}
        label="email"
        value={email}
        onChangeText={text => setEmail(text)}
      />    
      <TextInput
        style={styles.input}
        label="password"
        value={password}
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <Button style={styles.button} mode="contained">
        login
      </Button>      
      <Button style={styles.button} onPress={()=>{navigation.navigate("signup")}} mode="outlined">
        signup
      </Button>
  </SafeAreaView>
)}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:40,
    margin:10,
  },
  input:{
    width:300,
    margin:10,
  },
  button:{
    width: 200,
    marginTop: 10,
    marginBottom: 2,
  }
})


export default Loginscreen
