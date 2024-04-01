import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import Estilos from './Estilos';

const Calculadora = () => {
    const [parcela1, setParcela1] = useState(0);
    const [parcela2, setParcela2] = useState(0);
    const [soma, setSoma] = useState(0);

    return (
        <View>
            <Text style={Estilos.container}>Calculadora</Text>
            <TextInput maxLength={3} defaultValue={parcela1.toString()} onChangeText={(texto) => setParcela1(Number(texto))}/>
            <TextInput defaultValue={parcela2.toString()} onChangeText={(texto) => setParcela2(Number(texto))}/>
            <Button title="Somar" onPress={() => setSoma(parcela1 + parcela2)}/>
            <Text>Soma: {soma}</Text>
            <TextInput returnKeyType='send'/>
        </View>
    );
}

export default Calculadora;