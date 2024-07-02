import { useState } from 'react';
import { Text, View } from "react-native";
import { Button } from 'react-native-paper';

const Cliques = () => {
    const [getCliques, setCliques] = useState(0);

    return(
        <View>
            <Button icon="send" mode="contained" onPress={() => {
                setCliques(getCliques + 1)
            }}>OK</Button>
            <Text>Quantidade de cliques: {getCliques}</Text>    
        </View>
    )
}

export default Cliques;