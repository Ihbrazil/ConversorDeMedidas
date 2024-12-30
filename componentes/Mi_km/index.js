import React, { useState} from 'react';
import { SafeAreaView, ImageBackground } from 'react-native';

import estilos from "../estilos/estilos";

import background_b from '../../assets/images/background_b.jpeg';

import InputConversao from '../InputConversao';
import ResultadoConversao from '../ResultadoConversao';

export default function Mi_km() {
    
    const [ quilometros, setQuilometros ] = useState(0);
        
    function converteMiParaKm(milhas) {
        const valorConvertido = milhas*1.60;
        setQuilometros(valorConvertido.toFixed(2));   
    }

return (
    <SafeAreaView>
        <ImageBackground source={background_b} blurRadius={150} style={estilos.fundo}>
            <InputConversao
                titulo="Conversor de milhas para quilômetros"
                medida="Milhas"
                funcaoTextoAlterado={valorInput => converteMiParaKm(valorInput)}
            />
            <ResultadoConversao medidaResultado="Quilômetros" resultado={ quilometros }/>
        </ImageBackground>    
    </SafeAreaView>
);
}