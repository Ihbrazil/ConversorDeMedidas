import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Km_mi from './componentes/Km_mi';
import Mi_km from './componentes/Mi_km';

import {Entypo, FontAwesome5} from '@expo/vector-icons';

const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
        <Abas.Navigator>
            
            <Abas.Screen
              name= "Quilômetros para Milhas"
              component= {Km_mi}
              options={{
                headerShown: false,
                tabBarIcon: () => (
                  <Entypo name="ruler" size={24} color="black" />
                )
              }}
            />

            <Abas.Screen
              name= "Milhas para Quilômetros"
              component= {Mi_km}
              options={{
                headerShown: false,
                tabBarIcon: () => (
                  <FontAwesome5 name="ruler-combined" size={24} color="black" />  
                )
              }}
            />
        
        </Abas.Navigator>
    </NavigationContainer>
  );
}