import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import axios from 'axios';
import { Alert } from 'react-native';



const AlteracaoCadastroScreen = ({navigation, route}) => {
  const [getNome, setNome] = useState('');
  const [getEmail, setEmail] = useState('');
  const [getTelefone, setTelefone] = useState(''); 
  const [getCpf, setCpf] = useState('');
  const [getId, setId] = useState(''); [
  ]

  const handleSignup = () => {
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
    console.log('Cpf:', cpf);
    console.log('Id:', id);
  };
  useEffect(()=>{
    if(route.params){
        const { nome } =  route.params 
        const { email } =  route.params 
        const { telefone } =  route.params 
        const { cpf} =  route.params
        const { id} =  route.params

        setNome(nome)
        setEmail(email)
        setTelefone(telefone)
        setCpf(cpf)
        setId(id)
        
    }

},[]) 

function alterarDados(){
  axios.put('http://professornilson.com/testeservico/clientes/'+getId, {
      nome: getNome,
      telefone: getTelefone,
      email: getEmail,
      cpf: getCpf,
      
    })
    .then(function (response) {
      setNome('');
      setCpf('');
      setEmail('');
      setTelefone(''); 
      
      console.log(response);
      navigation.navigate('Lista');
    })
    .catch(function (error) {
      console.log(error);
    });    
}

function excluirDados(){

    
  Alert.alert(
      "Atenção",
      "Deseja excluir o registro?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => (
          axios.delete('http://professornilson.com/testeservico/clientes/'+getId)
          .then(function (response) {
            setNome('');
            setCpf('');
            setEmail('');
            setTelefone(''); 
            showMessage({
              message: "Registro Excluido com sucesso",
              type: "danger",
            });
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          }) 
        ) }
      ],
      { cancelable: false }
    );


  
}

  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>
        CADASTRO
      </Text>
      <Input
        placeholder="Nome"
        onChangeText= {setNome}
        value={getNome}
        autoCapitalize="words"
      />
      <Input
        placeholder="Email"
        onChangeText= {setEmail}
        value={getEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        placeholder="Telefone"
        onChangeText=  {setTelefone}
        value={getTelefone}
        />
      <Input
        placeholder="Cpf"
        onChangeText= {setCpf}
        value={getCpf}
       />
      <View style={styles.buttonContainer}>
      
        <Button
          title="Alterar"
          buttonStyle={styles.button}
          onPress={alterarDados}
        />
        <Button
          title="Excluir"
          buttonStyle={styles.button}
          onPress={excluirDados}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 50,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    paddingHorizontal: 30,
    borderRadius: 20,
  },
});

export default AlteracaoCadastroScreen;