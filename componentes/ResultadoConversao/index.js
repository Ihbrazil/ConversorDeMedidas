import React from "react";
import { View, Text } from "react-native";

import estilos from "../estilos/estilos";
import estiloResultado from "./estilo";

export default function ResultadoConversao(props) {
return (
    <View style={ [estilos.textoContainer, estiloResultado.textoContainer] }>
        <Text style={estiloResultado.label}>{props.resultado}</Text>
        <Text style={ estilos.titulo}>{ props.medidaResultado }</Text>
    </View>
)
}