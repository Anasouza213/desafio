import React, { useState } from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import { Container } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'


const ResgatePersonalizado = ({navigation: {navigate}}) => {
    return (
        <Container>
            <Text>Resgate Personalizado</Text>
            <TouchableOpacity onPress={ () => navigate('ListaInvestimentos')}>
                <Text>Clique para ir para o lista investimentos</Text>
            </TouchableOpacity>
        </Container>
    )
}

export default ResgatePersonalizado