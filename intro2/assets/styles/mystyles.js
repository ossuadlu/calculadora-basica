import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:40
    },
    texts:{
      color:'blue',
      fontWeight:'bold'
    }
});

const stylesInputs=StyleSheet.create({
    inputs:{
        color:'white'
    }
})

export{styles,stylesInputs}