import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StatusBar, Text } from 'react-native'
import ModalResgate from '../components/modal/modalResgateSucesso'
import ListaInvestimentos from '../pages/ListaInvestimentos'
import ResgatePersonalizado from '../pages/ResgatePersonalizado'
const App = createStackNavigator()

const AppRoutes = () => (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#23569C" />
        <App.Navigator initialRouteName="ListaInvestimentos" screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#fdfdfd' } }} >
            <App.Screen name="ListaInvestimentos" component={ListaInvestimentos} />
            <App.Screen name="ResgatePersonalizado" component={ResgatePersonalizado} />
            <App.Screen name="ModalResgate" component={ModalResgate} />
            
        </App.Navigator>
    </>
)

const screenOptions ={
    
}
export default AppRoutes