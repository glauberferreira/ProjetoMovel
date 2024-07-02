import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import Estilos from '../Estilos';
import { IconButton, MD3Colors, PaperProvider, TextInput } from 'react-native-paper';

const Calculadora = () => {
    const [parcela1, setParcela1] = useState(0);
    const [parcela2, setParcela2] = useState(0);
    const [soma, setSoma] = useState(0);
    const [login, setLogin] = useState("login");

    return (
        <PaperProvider>
            <View>
                <Text style={Estilos.container}>Calculadora</Text>
                <TextInput left={<TextInput.Icon icon="eye" onPress={() => console.log('Pressed olho')} color={login === "email" ? MD3Colors.error50 : MD3Colors.error100}/>} right={<TextInput.Icon icon="eye"/>} maxLength={3} defaultValue={parcela1.toString()} onChangeText={(texto) => setParcela1(Number(texto))}/>
                <TextInput defaultValue={parcela2.toString()} onChangeText={(texto) => setParcela2(Number(texto))}/>
                <Button title="Somar" onPress={() => setSoma(parcela1 + parcela2)}/>
                <Text>Soma: {soma}</Text>
                <TextInput returnKeyType='send'/>
                <IconButton
    icon="camera"
    iconColor={MD3Colors.error50}
    size={20}
    disabled={false}
    
  />
            </View>
        </PaperProvider>
    );
}

export default Calculadora;