import React, { useState, setState, useEffect } from 'react'
import { ScrollView, View, FlatList, StyleSheet, Text, TextInput, Alert, Modal, } from 'react-native';
import Utils from '../../utils/utils';
import Yup from 'yup';
import Input from '../../components/input/input';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';


const ListaResgateComponente = (props) => {

  const [modalVisible, setModalVisible] = useState(false);

  //const { itemSelecionado } = route.params;
  
  const [valorResgate, setValorResgate] = useState({});

  const [inputValue, setInputValue] = useState(new Map());

  const [listaResgate, setListaResgate] = useState(props.itemSelecionado);

  const [totalResgate, setTotalResgate] = useState(0);

  let saldoAcumulado = 0.00;

  const [isValid, setIsvalid] = useState({valid: false, i: null});

  //const [validacaoFinal, setValidacaoFinal] = useState(false);

  useEffect(() => {
    props.itemSelecionado.totalResgate = 0.00;
    //itemSelecionado.acoes.map((item) => {
     // setSaldoAcumulado(calculoResgate(itemSelecionado.saldoTotalDisponivel, item.percentual))
     
   // });
    setListaResgate(props.itemSelecionado);
  },[]);


  function calculoResgate (valorT, porcentagem){
    const valorR = (valorT * porcentagem)/100;
    saldoAcumulado = valorR;
    return Utils.formataValor(valorR);
    }

  const calculaTotalResgate = () =>{
    let total = 0;
    inputValue.forEach((item, value) => {
      total += parseFloat(item);
    })
     setTotalResgate(parseFloat(total));
  }

  const onChangeText =  (text, index, item) => {

    setInputValue(prevState => {
      setInputValue(prevState => prevState.set(index, text));
      inputValue.forEach((itemInput, i) => {
        setIsvalid(itemInput <= saldoAcumulado? 
          {valid : false, 
          i : i } :
          {valid : true,
          i: i} );
      })
    });
    calculaTotalResgate();
    setListaResgate(listaResgate);   
  }

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

  return (
    <View>
      <FlatList nestedScrollEnabled      
        data={listaResgate.acoes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) =>

          <View style={styles.item}>
            <View>
              <Text>Ação</Text>
              <Text style={{ color: "#868686", marginLeft: 190, marginTop: -15 }}>{item.nome}</Text>
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: '#f4f4f4', marginBottom: 8, marginTop: 8 }}></View>
            <View>
              <Text>Saldo Acumulado</Text>
              <Text style={{ color: "#868686", marginLeft: 190, marginTop: -15 }}>{calculoResgate(listaResgate.saldoTotalDisponivel, item.percentual)}</Text>
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: '#f4f4f4', marginBottom: 8, marginTop: 8 }}></View>
            <View>
              <Text>Valor a resgatar</Text>
              {/* <Input onChangeText={onChangeText(index,)} valorResgate={valorResgate}/>              */}
              <TextInput
                style={styles.textInput}
                keyboardType='numeric'
                onChangeText={(text) => onChangeText(text, index, item)}
                value={inputValue.text}
              />
              {isValid.valid && isValid.i === index ?
              <Text style={{fontSize: 12, color:'#ff8b8b'}}>Valor não pode ser maior que {calculoResgate(listaResgate.saldoTotalDisponivel, item.percentual)}.</Text>
              : <Text></Text>}
            </View>
          </View>
        }
        
      />
      <ScrollView>
      <View style={styles.item}>
        <Text>Valor total a resgatar</Text>
        <Text style={styles.text}>{Utils.formataValor(totalResgate)}</Text>
      </View>
      </ScrollView>
      </View>
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
  item: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8
  },
  text: {
    color: "#868686",
    marginLeft: 190,
    marginTop: -15
  },
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

export default ListaResgateComponente