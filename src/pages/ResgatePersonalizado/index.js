import React, { useState, setState, useEffect } from 'react'
import { ScrollView, View, FlatList, StyleSheet, Text, TextInput, Alert } from 'react-native';
import Utils from '../../utils/utils';
import ModalResgate from '../../components/modal/modalResgateSucesso';
import Yup from 'yup';
import Input from '../../components/input/input';


const ResgatePersonalizado = ({ navigation: { navigate }, route }) => {

  const { itemSelecionado } = route.params;
  
  const [valorResgate, setValorResgate] = useState({});

  const [inputValue, setInputValue] = useState(new Map());

  const [listaResgate, setListaResgate] = useState(itemSelecionado);

  const [totalResgate, setTotalResgate] = useState(0);

  let saldoAcumulado = 0.00;

  const [isValid, setIsvalid] = useState({valid: false, i: null});

  //const [validacaoFinal, setValidacaoFinal] = useState(false);

  useEffect(() => {
    itemSelecionado.totalResgate = 0.00;
    //itemSelecionado.acoes.map((item) => {
     // setSaldoAcumulado(calculoResgate(itemSelecionado.saldoTotalDisponivel, item.percentual))
     
   // });
    setListaResgate(itemSelecionado);
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
        console.log(item);
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
    <ScrollView style={styles.container}>
      <View style={styles.resumoTitle}>
      <Text style={{ color: "#868686" }}>DADOS DO INVESTIMENTO </Text>
      </View>
      <View style={{ backgroundColor: "#ffffff", padding: 15 }}>
        <View>
          <Text>Nome</Text>
          <Text style={{ color: "#868686", marginLeft: 190, marginTop: -15 }}>{listaResgate.nome}</Text>
        </View>
        <View style={{ borderBottomWidth: 1, borderColor: '#f4f4f4', marginBottom: 10, marginTop: 10 }}></View>
        <View>
          <Text>Saldo total disponivel</Text>
          <Text style={{ color: "#968686", marginLeft: 190, marginTop: -15 }}>{Utils.formataValor(listaResgate.saldoTotalDisponivel)}</Text>
        </View>
      </View>
      <View style={styles.resumoTitle}>
        <Text style={{ color: "#868686" }}>RESGATE DO SEU JEITO</Text>
      </View>

      <FlatList
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

      <ModalResgate navegar={navigate} />
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

});

export default ResgatePersonalizado