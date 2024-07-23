import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Button, TextInput } from 'react-native-paper';
import { app } from '../firebaseConfig'
import { signInWithEmailAndPassword, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

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
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

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
      <Link href="/users">Listagem de Usuários</Link>
      <TextInput label="Email" value={email} onChangeText={(texto) => setEmail(texto)}/>
      <TextInput label="Senha" value={senha} onChangeText={(texto) => setSenha(texto)}/>
      <Button onPress={() => {
        fazerLogin(email, senha);
      }}>Fazer login via Firebase</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const fazerLogin = (email, senha) => {
  // Initialize Firebase Authentication and get a reference to the service
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('Login realizado com sucesso!');
      console.log(user.uid);
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });  
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