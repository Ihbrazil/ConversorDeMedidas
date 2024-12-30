import { StyleSheet } from "react-native";

const estiloInput = StyleSheet.create({
    label: {
      flex: 0,
      width: "35%",
      
      color: '#343434',
      backgroundColor: 'lightgreen',
      
      textAlign: "center",

      paddingVertical: 10,
      paddingHorizontal: 8,
      marginRight: 8,
      
      borderRadius: 8,
    },

    input: {
      flex: 1,
      width: '65%',
      height: 45,

        
      borderWidth: 1,
      borderColor: '#a2a2a2',
      borderRadius: 8,

      paddingLeft: 8,
      
      color: "#333333",
      backgroundColor: "white",
    },

    inputContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",

      marginVertical: 10,
      marginHorizontal: 25,
    }
});

export default estiloInput;