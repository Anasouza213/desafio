import React, { useState, setState, useEffect } from 'react'
import {  View, StyleSheet, Text, Modal, } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const ModalResgate = () => {
    return (
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <View>
            <Text style={styles.modalTextTitle}>REGATE EFETUADO!</Text>
            </View>
            <View>
            <Text style={styles.modalText}> O valor solicitado estará em sua conta em ate 5 dias úteis! </Text>
            </View>

            <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#fae128" }}
                onPress={() => alert("oi")}
            >
                <Text style={styles.textStyle}>NOVO RESGATE</Text>
            </TouchableHighlight>
            </View>
            </View> 
    )
} 

const styles = StyleSheet.create({
centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#005aa5",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  abrirModal:{
    backgroundColor: "#005aa5",
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "#005aa5",
    fontWeight: "bold",
    textAlign: "center"   
  },
  modalTextTitle:{
    color: "#00375f",
    fontWeight: "bold",
     marginBottom: 17,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    color: "#89a2b5",
  }

});

export default ModalResgate;