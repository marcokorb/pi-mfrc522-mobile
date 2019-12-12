import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import axios from 'axios';
import { useStateValue } from '../state';


const ReadTagScreen = () => {

  const [{ hostName }, ] = useStateValue();

  const [tag, setTag] = useState({
    id: null,
    text: 'Sem Tag'
  });

  const readTag = async () => {

    const response = await axios.get(`${hostName}/read_tag`);
      
    const tag = response.data;

    setTag(tag);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        onPress={readTag}
        title="Ler Tag"
      />
      <Text style={{textAlign: 'center'}}>{tag.id} - {tag.text}</Text>
    </View>
  );
}

ReadTagScreen.navigationOptions = {
  title: 'Ler Tag',
};

export default ReadTagScreen;