import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Button } from 'react-native-paper';

const getNomeCompleto = (nome, sobrenome) => {
  return nome + ' ' + sobrenome;
}

const Cat = ({id, nome, sobrenome, idade}) => {
  const texto = (idade <= 1) ? "ano" : "anos";

  return (
    <Link href={{
      pathname: "/gatos/[id]",
      params: {id: id}
    }}>Oi, eu sou {getNomeCompleto(nome, sobrenome).toUpperCase()}! E eu tenho {idade} {texto} e meu id é {id}.</Link>
  );
}

function IFAL() {
  return (
    <View style={styles.container}>
      <Cat id={1} nome="Black" sobrenome="Friday" idade={3}/>
      <Cat id={2} nome="Garfield" sobrenome="Lasanha" idade={45}/>
      <Cat id={3} nome="Apolo" sobrenome="11" idade={1}/>
      <Link href="/calculadora">Abrir Calculadora</Link>
      <Link href="/calculadora" asChild>
        <Pressable>
          <Text>Abrir Calculadora com o Pressable</Text>
        </Pressable>
      </Link>
      <Link href="/calculadora" asChild>
        <Button mode='contained'>Abrir Calculadora com Button</Button>
      </Link>
      <Link href="/cliques" asChild>
        <Button mode='contained'>Abrir Contador de Cliques</Button>
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