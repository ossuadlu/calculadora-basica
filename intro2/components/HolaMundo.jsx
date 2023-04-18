import { Text, View } from 'react-native';
import{styles,stylesInputs} from '../assets/styles/mystyles.js'

export default function HolaMundo(props){
    const {subtitle, name, gender}= props //desestructurar al objeto props
    return(
      <View>
        <Text style={styles.texts}> Hola mundo</Text> 
        <Text>{subtitle}:{name}</Text>
        <Text>sexo:{gender == "1"? "femenino" : "Masculino"}</Text>
        <Text>salario:{props.salary * 2}</Text>
      </View>
    );
}