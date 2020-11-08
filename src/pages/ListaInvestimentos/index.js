import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import {ListaInvestimentosService} from '../../services/ListaInvestimentos/index';
import ListaInvestimentosComponente from '../../components/listaInvestimentos/ListaInvestimentosComponente';

const ListaInvestimentos = () => {
    const [listaInvestimentos, setListaInvestimentos] = useState([]);


    useEffect( () => {
          async function getData(){
             await ListaInvestimentosService()
             .then(({  response  }) =>{
              // console.log(response.data.listaInvestimentos);
              setListaInvestimentos(response.data.listaInvestimentos);
             });
          }
          getData();
     });
   
    return (       
            <SafeAreaView style={styles.container}>
                <View style={{backgroundColor: '#f4f4f4', padding: 15}}>
                  <View style={{marginLeft: 20}}>
                    <Text >INVESTIMENTO</Text>
                    <Text style={{marginLeft: 210, marginTop: -19}}>R$</Text>
                  </View>                  
                </View>
                {/* <FlatList               
                data={listaInvestimentos} 
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => 
                <TouchableOpacity style={item.indicadorCarencia === 'S' ? styles.disabled : styles.item} disabled={item.indicadorCarencia === 'S'} onPress={ () => 
                    navigate('ResgatePersonalizado', {itemSelecionado : item})
                  }>
                    <View style= {{padding: 10}}>
                        <Text style={styles.textTitle}>{item.nome}</Text>     
                        <Text style={styles.text}>{item.objetivo}</Text>
                        <Text style={styles.textValor}>{Utils.formataValor(item.saldoTotalDisponivel)}</Text>
                    </View>
                    <View style={styles.border}></View>
                </TouchableOpacity>                
                }
                /> */}
                {listaInvestimentos ?
                  <ListaInvestimentosComponente lista={listaInvestimentos}/> :
                  <Text>Carregando Investimentos...</Text>
                  
                }
            </SafeAreaView>
    )
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

export default ListaInvestimentos;