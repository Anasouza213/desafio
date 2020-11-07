import React, { useState, setState } from 'react'
import { ScrollView, View, FlatList, StyleSheet, Text,TextInput } from 'react-native';
import Utils from '../../utils/utils';
import ModalResgate from '../../components/modal/modalResgateSucesso';
import Yup from 'yup';


const ResgatePersonalizado = ({navigation: {navigate}, route}) => {

  const {itemSelecionado} = route.params;
  const [valorResgate, setValorResgate] = useState({});  

  

    function calculoResgate (valorT, porcentagem){
        const valorResgate = (valorT * porcentagem)/100;
        return Utils.formataValor(valorResgate);
        }
       

    function handleChange(valorR, index, percetual){
      const saldoAcumulado = ((itemSelecionado.saldoTotalDisponivel * percetual)/100).toFixed(2);
      setValorResgate(valorR);
    }

   

    return (
        
        <ScrollView style={styles.container}>           
        <View style={styles.resumoTitle}>
          <Text style={{color: "#868686"}}>DADOS DO IVESTIMENTO</Text>
        </View>
        <View style={{backgroundColor:"#ffffff", padding:15}}>
          <View>
            <Text>Nome</Text>
            <Text style={{color: "#868686", marginLeft:190, marginTop: -15}}>{itemSelecionado.nome}</Text>
          </View>
          <View  style={{borderBottomWidth: 1, borderColor: '#f4f4f4', marginBottom: 10, marginTop: 10}}></View>
          <View>
            <Text>Saldo total disponivel</Text>
            <Text style={{color: "#968686", marginLeft:190, marginTop: -15}}>{Utils.formataValor(itemSelecionado.saldoTotalDisponivel)}</Text>
          </View>
        </View>
         <View style={styles.resumoTitle}>
          <Text style={{color: "#868686"}}>RESGATE DO SEU JEITO</Text>
        </View>
  
        <FlatList
          data={itemSelecionado.acoes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) =>
        
          <View style={styles.item}>
            <View>
              <Text>Ação</Text>            
               <Text style={{color: "#868686", marginLeft:190, marginTop: -15}}>{item.nome}</Text>           
            </View>
            <View  style={{borderBottomWidth: 1, borderColor: '#f4f4f4', marginBottom: 8, marginTop: 8}}></View>
            <View>
              <Text>Saldo Acumulado</Text>
              <Text style={{color: "#868686", marginLeft:190, marginTop: -15}}>{calculoResgate(itemSelecionado.saldoTotalDisponivel,item.percentual)}</Text>
            </View>
             <View  style={{borderBottomWidth: 1, borderColor: '#f4f4f4', marginBottom: 8, marginTop: 8}}></View>
             <View>
              <Text>Valor a resgatar</Text>
              <TextInput style={{ height: 40,  }}  key={index}
                 onChangeText ={(text) => handleChange(text, index, item.percentual)}
                 value={valorResgate}
                />                
            </View>
              
           </View>
          }
        />
         <View style={styles.item}>
              <Text>Valor total a resgatar</Text>
              <Text style={styles.text}>{Utils.formataValor(itemSelecionado.saldoTotalDisponivel)}</Text>  
          </View>
           
            <ModalResgate navegar={navigate}/>
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
        marginLeft:190,
        marginTop: -15
    },
    textStyle: {
        color: "#005aa5",
        fontWeight: "bold",
        textAlign: "center",
        marginVertical:15  
      },
   
  });

export default ResgatePersonalizado