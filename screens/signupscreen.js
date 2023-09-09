import { StyleSheet, Text ,SafeAreaView} from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper'
import { auth } from "../firebase"

const Signupscreen = ({navigation}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function signup(){
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const user = userCredential.user
            const userId = user.uid
        })
        .catch((error)=>{
            const errCode = error.code
            const errMsg = error.message
            alert("eroor")
        })
  }
    
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign up for toGo</Text>
      <TextInput
        style={styles.input}
        label="full name"
        value={name}
        onChangeText={text => setName(text)}
      />    
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
        Press me
      </Button>      
      <Button style={styles.button} mode="outlined">
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


export default Signupscreen
