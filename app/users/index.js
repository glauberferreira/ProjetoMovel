// GET /users
import {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import { Avatar, List } from 'react-native-paper';
import { useRouter } from 'expo-router';

const ListUsers = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [usuarios, setUsuarios] = useState([]);

  const getUsuarios = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await response.json();

      setUsuarios(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={usuarios}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <List.Item
              title={item.name}
              description={item.email}
              left={props => <Avatar.Image size={48} source={{uri: `https://i.pravatar.cc/150?img=${item.id}`}}/>}
              onPress={() => router.navigate({pathname: '/users/[id]', params: {id: item.id}})}/>
          )}
        />
      )}
    </View>
  );
};

export default ListUsers;