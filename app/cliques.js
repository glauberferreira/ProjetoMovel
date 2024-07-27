import { useState } from 'react';
import { Text, View } from "react-native";
import { Button } from 'react-native-paper';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useRouter } from 'expo-router';

const Cliques = () => {
    const [getCliques, setCliques] = useState(0);
    const user = auth.currentUser;
    const router = useRouter();

    const fazerLogout = (auth, router) => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('Logout com sucesso');
            router.replace('/');
          }).catch((error) => {
            // An error happened.
            console.error(error);
          });
    }

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
            <Button icon="send" mode="contained" onPress={() => {
                fazerLogout(auth, router);
            }}>Sair</Button>
        </View>
    )
}

export default Cliques;