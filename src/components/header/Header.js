import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


const Header = (props) =>{
    return (
      <View>
        <View style={styles.headerContainer}>
            <Text style={styles.texto}>{props.children}</Text>
        </View>
        <View style={{padding: 3, backgroundColor: '#fae128'}}></View> 
      </View>
       
    );
};
const styles = StyleSheet.create({
    
    headerContainer:{
      alignItems: 'center',
      backgroundColor: '#005aa5',
      padding: 20,
      alignContent: 'space-around',
     // flex: 1
    },
    texto:{
      fontWeight: 'bold',
      fontSize: 25,
      color: '#ffffff',
      textAlignVertical: 'top',
        }
     
  });

export default Header;