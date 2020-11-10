import React, { useState, setState, useEffect } from 'react'
import { ScrollView, View, FlatList, StyleSheet, Text, TextInput, Alert,Modal, TouchableHighlight } from 'react-native';
import Utils from '../../utils/utils';
import ModalResgate from '../../components/modal/modalResgateSucesso';
import Yup from 'yup';
import Input from '../../components/input/input';


const ResgatePersonalizado = ({ navigation: { navigate }, route }) => {

  const { itemSelecionado } = route.params;

  const [inputValue, setInputValue] = useState(new Map());

  const [listaResgate, setListaResgate] = useState(itemSelecionado);

  const [totalResgate, setTotalResgate] = useState(0);

  let saldoAcumulado = 0.00;

  const [isValid, setIsvalid] = useState({valid: false, i: null});

  const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    itemSelecionado.totalResgate = 0.00;
    //itemSelecionado.acoes.map((item) => {
     // setSaldoAcumulado(calculoResgate(itemSelecionado.saldoTotalDisponivel, item.percentual))
     
   // });
    setListaResgate(itemSelecionado);
  },[]);


  const formatPrice = (value, quantity = 1, n = 2, x = 3, s = '.', c = ',') => {
    let re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
      totalValue = value * quantity,
      num = totalValue.toFixed(Math.max(0, n));
  
    return ( num
      // 'R$ ' +
      // (c ? num.replace('.', c) : num).replace(
      //   new RegExp(re, 'g'),
      //   '$&' + (s || ','),
      // )
    );
  };
  

  const  calculoResgate = (valorT, porcentagem) =>{
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
      setInputValue(prevState => prevState.set(index, formatPrice(text)));
      inputValue.forEach((itemInput, i) => { 
        setIsvalid(itemInput <= saldoAcumulado ? 
          {valid : false, 
          i : i } :
          {valid : true,
          i: i} );
        });
    });

    console.log(inputValue)
    calculaTotalResgate();
    setListaResgate(listaResgate);   
  }

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

      <FlatList
        data={itemSelecionado.acoes}
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
              <Text style={{ color: "#868686", marginLeft: 190, marginTop: -15 }}>{calculoResgate(itemSelecionado.saldoTotalDisponivel, item.percentual)}</Text>
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: '#f4f4f4', marginBottom: 8, marginTop: 8 }}></View>
            <View>
              <Text>Valor a resgatar</Text>
              {/* <Input onChangeText={onChangeText(index,)} valorResgate={valorResgate}/>              */}
              <TextInput
                style={styles.textInput}
                keyboardType='numeric'
                onChangeText={(text) => onChangeText(text, index, item)}
                value={inputValue}
              />
               {isValid.valid && isValid.i === index ?
                <Text style={{fontSize: 12, color:'#ff8b8b'}}>Valor não pode ser maior que {calculoResgate(itemSelecionado.saldoTotalDisponivel, item.percentual)}.</Text>
                : <Text></Text>}

            </View>
          </View>
        }
      />
      <View style={styles.item}>
        <Text>Valor total a resgatar</Text>
        <Text style={styles.text}>{Utils.formataValor(totalResgate)}</Text>
      </View>

      {/* <ModalResgate navegar={navigate} /> */}
      <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
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
              onPress={() => {
                setModalVisible(false);
                navigate('ListaInvestimentos')
              }}
            >
              <Text style={styles.textStyle}>NOVO RESGATE</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <TouchableHighlight
              style={{ ...styles.abrirModal, backgroundColor: "#fae128", padding:15 }}
              onPress={() => { 
                validBtnModal();
              }}
            >
              <Text style={styles.textStyle}>CONFIRMAR RESGATE</Text>
             
            </TouchableHighlight>
    </View>
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
  textNome: {
    color: "#868686",
    marginLeft: 190,
    marginTop: -15
  },
  border: {
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