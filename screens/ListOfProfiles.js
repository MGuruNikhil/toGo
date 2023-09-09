import React from 'react';
import {SafeAreaView,Text,Image,Button,View,StyleSheet,ScrollView} from 'react-native';
const App=()=>{
 
    const contactList=[
        {
            id:1,
            name:'Idiot',
            status:'single',
            age:18,
            profile:'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fHww&w=1000&q=80',
        },
        {
            id:2,
            name:'Alien',
            age:18,
            status:'in-relation',
            profile:'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fHww&w=1000&q=80',
        },
          {
            id:3,
            name:'Nik',
            age:18,
            status:'unknown',
            profile:'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fHww&w=1000&q=80',
        },
        {
            id:4,
            name:'cc',
            age:18,
            status:'unknown',
            profile:'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fHww&w=1000&q=80',
        },

    ];
    return(
        <SafeAreaView style={styles.con}>
               <Text style={styles.htext}>LIST OF PROFILES</Text>
            <ScrollView style={styles.conatiner}>
           {contactList.map(({id,name,status,profile,age})=>(
           <SafeAreaView key={id} style={styles.card}>
            <Image source={{
               uri: profile
            }}
            style={styles.imagecard}/>
            <SafeAreaView style={{padding:10 }}>
            <Text style={styles.text1} >{name}</Text>
            <Text style={styles.text2}>Status:{status}</Text>
            <Text style={styles.age1}>Age:{age}</Text>
            </SafeAreaView>
            </SafeAreaView>
           ))}
           </ScrollView>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
con:{

},
    htext:{
      margin:50,
        fontsize:10,
        color:'black',
        textAlign:'center',
        fontStyle:'italic',
    },
    conatiner:{
      borderStyle:'solid',
        borderwidth:2,
        borderColor:'black',
        
      
   },
   card:{
    flex:1,
    borderRadius:10,
    paddingBottom:10,
    paddingTop:10,
    paddingLeft:10,
    margin:10,
    backgroundColor:'lightblue',
   alignItems:'center', 
   flexDirection:'row',
   gap:10,
   },
   imagecard:{
    height:100,
    
    width:100,
    borderRadius:100,
    paddingBottom:10,
      
   },
   text1:{
    color:'black',
    textAlign:'left',
    fontSize:18,
   },
text2:{
    color:'black',
    textAlign:'left',
    fontSize:18,
   
   },
   age1:{
 paddingBottom:30,
 fontSize:18,
 textAlign:'left',
   }
})
export default App;
