import React, { useState } from 'react';
import { Alert, Button, TextInput, View } from 'react-native';
import axios from 'axios';
import { useStateValue } from '../state';


const WriteToTagScreen = () => {

  const [{ hostName }, ] = useStateValue();

  const [text, setText] = useState('');

  const readTag = async () => {

    const response = await axios.get(`${hostName}/read_tag`);
      
    const tag = response.data;

    setText(tag.text);
  };

  const writeToTag = async () => {

    const response = await axios.post(
      `${hostName}/write_tag`,
      { text }
    );
      
    const tag = response.data;
    
    if(tag.status) {
      Alert.alert('Olá!', 'A tag foi redefinida com sucesso.');
      setText(tag.text);
    }    
  };

  return (
    <View >
      <Button 
        style={{ marginBottom: '5px'}} 
        onPress={writeToTag}
        title="Escrever na Tag"
      />
      <Button
        style={{ marginBottom: '5px'}} 
        onPress={readTag}
        title="Ler Tag"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setText}
        value={text}
      />
    </View>
  );
}

WriteToTagScreen.navigationOptions = {
  title: 'Escrever na Tag',
};

export default WriteToTagScreen;