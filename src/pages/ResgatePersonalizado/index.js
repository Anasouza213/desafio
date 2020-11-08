import React, { useState } from 'react'
import { ScrollView, View, StyleSheet, Text,  Alert, Modal, } from 'react-native';
import Utils from '../../utils/utils';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import ModalResgate from '../../components/modal/modalResgate'
import ListaResgateComponente from '../../components/listaResgate/listaResgate'


const ResgatePersonalizado = ({ navigation: { navigate }, route }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const { itemSelecionado } = route.params;
  
  

  const fecharModal = () => {
    alert('fecha modal')
    // setModalVisible(!modalVisible);
    //  navigate('ListaInvestimentos')
  }

  // setValidacaoFinal(() =>{
  //   if(totalResgate !== 0.00){
  //     if(totalResgate <= itemSelecionado.saldoTotalDisponivel){
  //       return true;
  //     }else{
  //       //Alert.alert("Valor total a resgatar não pode ser maior que valor total disponível.")
  //       return false;
  //     }
  //   }else{
  //     //Alert.alert("Atenção! Preencher os valores da forma que deseja resgatar.")
  //     return false;
  //   }
  // });

   function validBtnModal() {
    if(totalResgate !== 0.00){
      if(totalResgate <= itemSelecionado.saldoTotalDisponivel){
        setModalVisible(true)
        return true;
      }else{
        Alert.alert("Valor total a resgatar não pode ser maior que valor total disponível.")
        return false;
      }
    }else{
      Alert.alert("Atenção! Preencher os valores da forma que deseja resgatar.")
      return false;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.resumoTitle}>
      <Text style={{ color: "#868686" }}>DADOS DO INVESTIMENTO </Text>
      </View>
      <View style={{ backgroundColor: "#ffffff", padding: 15 }}>
        <View>
          <Text>Nome</Text>
          <Text style={styles.textNome}>{itemSelecionado.nome}</Text>
        </View>
        <View style={styles.border}></View>
        <View>
          <Text>Saldo total disponivel</Text>
          <Text style={styles.textSaldo}>{Utils.formataValor(itemSelecionado.saldoTotalDisponivel)}</Text>
        </View>
      </View>
      <View style={styles.resumoTitle}>
        <Text style={{ color: "#868686" }}>RESGATE DO SEU JEITO</Text>
      </View>

     <ListaResgateComponente itemSelecionado = {itemSelecionado}/>

      <View> 
          <TouchableOpacity
              style={{ ...styles.abrirModal, backgroundColor: "#fae128", padding:15 }}
              onPress={() => { 
                validBtnModal();
                
              }}
            >
              <Text style={styles.textStyleModal}>CONFIRMAR RESGATE</Text>
            
            </TouchableOpacity>
          </View> 
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
           <ModalResgate />
        </Modal>
        
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4"
  },
  resumoTitle: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16
  },
  textNome: { 
    color: "#868686",
    marginLeft: 190,
    marginTop: -15 
  },
  border:  { 
     borderBottomWidth: 1,
     borderColor: '#f4f4f4', 
     marginBottom: 10, 
     marginTop: 10 
  },
  textSaldo: { 
    color: "#968686",
    marginLeft: 190,
    marginTop: -15
  },
  //modal 
  textStyle: {
    color: "#005aa5",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15
  },
  textStyleModal: {
    color: "#005aa5",
    fontWeight: "bold",
    textAlign: "center"   
  },
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

export default ResgatePersonalizado