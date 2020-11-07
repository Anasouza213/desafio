import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Header from './src/components/header/Header'
import Routes from './src/routes';

const App = () => {
  return (
   <NavigationContainer >
     <View style={styles.container}>
            <Header>RESGATE</Header>
            <Routes />  
      </View>        
            
   </NavigationContainer>
  );
  
}
const styles = StyleSheet.create({
  container:{
    //marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    flex: 1
  }
})

export default App


