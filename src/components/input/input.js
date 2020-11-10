import React, { useState } from 'react'
import { TextInput, View,Text, StyleSheet  } from 'react-native';

class Input extends React.Component {

    constructor(props) {
      super(props);
      let textArray = Array(6).fill('');
      this.state = {
        textArray: textArray,
        focusedIndex: null
      }
    }
  
    // this function will handle setting of the state when each TextInput changes
    onChangeText = (text, index) => {
      this.setState(prevState => {
        prevState.textArray[index] = text
        return {
          textArray: prevState.textArray
        }
      }, () => console.log(this.state.textArray))
    }
  
    // handle the border color
    handleBorderColor = (index) => {
      return index === this.state.focusedIndex ? 'red' : 'grey'
    }
  
    render() {
      return (
        <View style={styles.container}>
          {this.state.textArray.map((text, index) => {
            return <TextInput
              style={{height: 40, marginVertical: 10, borderColor: this.handleBorderColor(index), borderWidth: 1}}
              onChangeText={text => this.onChangeText(text, index)} 
              value={this.state.textArray[index]}
              placeholder={`placeholder for ${index}`}
              onFocus={() => this.setState({focusedIndex: index})}
              onBlur={() => this.setState({focusedIndex: null})}
            />
          })}
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },
    disabled:{
      padding: 5,      
      marginVertical: 0,    
      backgroundColor : '#fcfcfc',
    },
    item: {
      padding: 5,      
      marginVertical: 0,      
      backgroundColor: '#ffffff'     
    },
    border: {
      padding: 5,      
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
      marginTop: 20
    },
    textTitle: {
      fontSize: 15,
      color: "#34495e",
      maxWidth: 170
    },
    text: {
      fontSize: 13,
      color: "#34495e",
      maxWidth: 170
    },
    textValor: {
      fontSize: 15,
      color: "#34495e",
      marginLeft: 200,
      marginTop: -35
    },
    
  });
  export default Input;