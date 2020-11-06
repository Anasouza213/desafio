import React, { useState } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text,TextInput, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Utils from '../../utils/utils'


const ResgatePersonalizado = ({navigation: {navigate}}) => {

    const [value, onChangeText] = React.useState();

    function calculoResgate (valorT, porcentagem){
        const valorResgate = (valorT * porcentagem)/100;
        return Utils.formataValor(valorResgate);
        }
    
        

          const itemSelecionado = {
            "nome": "INVESTIMENTO IV",
            "objetivo": "Investimento em carencia",
            "saldoTotalDisponivel": 44000,
            "indicadorCarencia": "S",
            "acoes": [
              {
                "id": "1",
                "nome": "BBAS3",
                "percentual": 41.1
              },
              {
                "id": "2",
                "nome": "VALE3",
                "percentual": 22.43
              },
              {
                "id": "3",
                "nome": "PETR4",
                "percentual": 26.12
              },
              {
                "id": "5",
                "nome": "OIBR3",
                "percentual": 10.35
              }
            ]
          }

    return (
        
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={ () => navigate('ListaInvestimentos')}>
                <Text>Clique para ir para o lista investimentos</Text>
            </TouchableOpacity>
        <View style={styles.resumoTitle}>
          <Text style={{color: "#868686"}}>DADOS DO IVESTIMENTO</Text>
        </View>
        <View style={{backgroundColor:"#ffffff", padding:15}}>
          <View>
            <Text>Nome</Text>
            <Text style={{color: "#868686", marginLeft:160, marginTop: -15}}>{itemSelecionado.nome}</Text>
          </View>
          <View  style={{borderBottomWidth: 1, borderColor: '#f4f4f4', marginBottom: 10, marginTop: 10}}></View>
          <View>
            <Text>Saldo total disponivel</Text>
            <Text style={{color: "#868686", marginLeft:175, marginTop: -15}}>{Utils.formataValor(itemSelecionado.saldoTotalDisponivel)}</Text>
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
               <Text style={{color: "#868686", marginLeft:160, marginTop: -15}}>{item.nome}</Text>           
            </View>
            <View  style={{borderBottomWidth: 1, borderColor: '#f4f4f4', marginBottom: 8, marginTop: 8}}></View>
            <View>
              <Text>Saldo total disponivel</Text>
              <Text style={{color: "#868686", marginLeft:175, marginTop: -15}}>{calculoResgate(itemSelecionado.saldoTotalDisponivel,item.percentual)}</Text>
            </View>
             <View  style={{borderBottomWidth: 1, borderColor: '#f4f4f4', marginBottom: 8, marginTop: 8}}></View>
             <View>
              <Text>Valor a resgatar</Text>
              <TextInput style={{ height: 40,  }}
                  onChangeText={text => onChangeText(text)}
                  value={value}
                />
            </View>
  
           </View>
          }
         
        />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: "#f4f4f4"
    },
    resumoTitle: {     
      backgroundColor: '#f4f4f4',
      padding: 10,
      //marginVertical: 8,
      marginHorizontal: 16
    },
    item: {
      backgroundColor: '#ffffff',
      padding: 15,
      marginVertical: 8    
    },
   
  });

export default ResgatePersonalizado