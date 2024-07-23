import { useState } from 'react';
import { Text, View } from "react-native";
import { Button } from 'react-native-paper';
import { app } from '../firebaseConfig';
import { getAuth } from 'firebase/auth';

const Cliques = () => {
    const [getCliques, setCliques] = useState(0);
    const auth = getAuth(app);
    const user = auth.currentUser;

    return(
        <View>
            <Button icon="send" mode="contained" onPress={() => {
                setCliques(getCliques + 1)
            }}>OK</Button>
            <Text>{user.uid}</Text>
            <Text>{user.email}</Text>
            <Text>{user.displayName}</Text>
            <Text>{user.phoneNumber}</Text>
            <Text>{user.photoURL}</Text>
            <Text>{user.emailVerified}</Text>
            <Text>Quantidade de cliques: {getCliques}</Text>    
        </View>
    )
}

export default Cliques;