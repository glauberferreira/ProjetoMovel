import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const getNomeCompleto = (nome, sobrenome) => {
  return nome + ' ' + sobrenome;
}

const Cat = ({nome, sobrenome, idade}) => {
  const texto = (idade <= 1) ? "ano" : "anos";

  return <Text>Oi, eu sou {getNomeCompleto(nome, sobrenome).toUpperCase()}! E eu tenho {idade} {texto}.</Text>
}

function IFAL() {
  return (
    <View style={styles.container}>
      <Cat nome="Black" sobrenome="Friday" idade={3}/>
      <Cat nome="Garfield" sobrenome="Lasanha" idade={45}/>
      <Cat nome="Apolo" sobrenome="11" idade={1}/>
      <Link href="/calculadora">Abrir Calculadora</Link>
      <Link href="/calculadora" asChild>
        <Pressable>
          <Text>Abrir Calculadora com o Pressable</Text>
        </Pressable>
      </Link>
      <Link href="/calculadora" asChild>
        <Button title="Abrir Calculadora com Button"/>
      </Link>
      <Link href="/cliques" asChild>
        <Button title="Abrir Contador de Cliques"/>
      </Link>
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

export default IFAL;