import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {  View, FlatList, StyleSheet, Text  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Utils from '../../utils/utils'

const ListaInvestimentosComponente = (props) => {   

    const navegation = useNavigation();
    return (       
        
        <View>    
            <FlatList               
                data={props.lista} 
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => 
                <TouchableOpacity 
                    style={item.indicadorCarencia === 'S' ? styles.disabled : styles.item} 
                    disabled={item.indicadorCarencia === 'S'} onPress={ () => 
                    navegation.navigate('ResgatePersonalizado', {itemSelecionado : item})
                  }>
                    <View style= {{padding: 10}}>
                        <Text style={styles.textTitle}>{item.nome}</Text>     
                        <Text style={styles.text}>{item.objetivo}</Text>
                        <Text style={styles.textValor}>{Utils.formataValor(item.saldoTotalDisponivel)}</Text>
                    </View>
                    <View style={styles.border}></View>
                </TouchableOpacity>                
                }
                />
        </View>
    );
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

export default ListaInvestimentosComponente;