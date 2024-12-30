import React from "react";
import { View, Text, TextInput } from "react-native";

import estilos from "../estilos/estilos";
import estiloInput from "./estilo";

export default function InputConversao(props) {
    return (
        <View style={ estilos.textoContainer }>
            <Text style={ estilos.titulo }>{ props.titulo }</Text>
            <View style={ estiloInput.inputContainer }>
                <Text style={ estiloInput.label }>{ props.medida }</Text>
                <TextInput
                    style={ estiloInput.input }
                    keyboardType="decimal-pad"
                    defaultValue="0"
                    onChangeText={ props.funcaoTextoAlterado }
                />
            </View>
        </View>
    )
}