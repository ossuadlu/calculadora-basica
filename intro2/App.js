import { Text, View } from 'react-native';
import{styles,stylesInputs} from './assets/styles/mystyles.js'
import HolaMundo from './components/HolaMundo.jsx';
export default function App() {
 let mysalary= 3000000;
  return (
    <View style={[{borderWidth:5,borderColor:'red'},styles.container]}>
     <HolaMundo subtitle="Bienvenid@ al sistema de introduccion" name="Adny Osorio" gender="1" salary={mysalary}></HolaMundo>
     <Text>estamos trabajando jsx desde  react native</Text> 
    </View>
  );
}




  
