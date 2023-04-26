import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';



function CadastroScreen({ navigation,}) {
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  
  function cadastrar() {
    
    async function inserirDados(){
        
      axios.post('http://professornilson.com/testeservico/clientes', {
          nome: getNome,
          telefone: getEmail,
        })
        .then(function (response) {
          setNome('');
          setEmail('');
           
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });     
      
  }
  
      navigation.navigate('Lista');
    
  }
  



  return (
    <View >
      <Header
          leftComponent={ <Button
            icon={
              <Icon
                name="arrow-left"
                size={25}
                color="white"
              />
            }
            title=""
            onPress={()=>navigation.navigate('Lista')}            
          /> }
          centerComponent={{ text: 'Usuário', style: { color: '#fff', fontSize: 25 } }}
      />
      <View style={styles2.container}>    
      
      <TextInput
        style={styles2.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
    
      <TextInput
        style={styles2.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
    
      <TouchableOpacity style={styles2.button} onPress={cadastrar}>
        <Text style={styles2.buttonText}>Salvar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    paddingTop: 40
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 14,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CadastroScreen;

