import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const getNomeCompleto = (nome, sobrenome) => {
  return nome + ' ' + sobrenome;
}

const Cat = ({nome, sobrenome}) => {
  return <Text>Hello, I am {getNomeCompleto(nome, sobrenome).toUpperCase()}!</Text>
}

export default IFAL;

function IFAL() {
  return (
    <View style={styles.container}>
      <Cat nome="Black" sobrenome="Friday"/>
      <Cat nome="Garfield" sobrenome="Lasanha"/>
      <Cat nome="Apolo" sobrenome="11"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
