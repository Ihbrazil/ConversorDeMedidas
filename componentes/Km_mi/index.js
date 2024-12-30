import React, { useState } from 'react';
import { SafeAreaView, ImageBackground } from 'react-native';

import estilos from "../estilos/estilos";

import background from '../../assets/images/background.jpg';

import InputConversao from '../InputConversao';
import ResultadoConversao from '../ResultadoConversao';

export default function Km_mi() {
    
    const [ milhas, setMilhas ] = useState(0);
    
    function converteKmParaMi(quilometros) {
        const valorConvertido = quilometros/1.60;
        setMilhas(valorConvertido.toFixed(2));
    }
    
return (
    <SafeAreaView>
        <ImageBackground source={background} blurRadius={150} style={estilos.fundo}>
            <InputConversao
                titulo="Conversor de quilômetros para milhas"
                medida="Quilômetros"
                funcaoTextoAlterado={valorInput => converteKmParaMi(valorInput)}
            />
            <ResultadoConversao medidaResultado="Milhas" resultado={ milhas }/>
        </ImageBackground>    
    </SafeAreaView>
);
}