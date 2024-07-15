// GET /users/#id
import { useState, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'
import { ActivityIndicator } from 'react-native-paper';

const Id = () => {
    const { id } = useLocalSearchParams();
    const [isLoading, setLoading] = useState(true);
    const [usuario, setUsuario] = useState({});

    const getUsuario = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const json = await response.json();

            setUsuario(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUsuario();
    }, []);      

    return (
        <View style={{flex: 1, padding: 24}}>
        {isLoading ? (
            <ActivityIndicator/>
        ): (
            <>
                <Text>Name: {usuario.name}</Text>
                <Text>Phone: {usuario.phone}</Text>
                <Text>Lat: {usuario.address.geo.lat}</Text>
            </>
        )}
        </View>
    )
}

export default Id