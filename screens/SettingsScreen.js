import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useStateValue } from '../state';
import { UPDATE_HOST } from '../constants/types';


const SettingsScreen = () => {

  const [{ hostName }, dispatch] = useStateValue();
  const [stateHostName, setStateHostName] = useState(hostName);

  const changeHostName = (text) => {

    dispatch({
      type: UPDATE_HOST,
      hostName: stateHostName
    });
  };

  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Trocar host"
        onChangeText={(text) => setStateHostName(text)}
        value={stateHostName}
      />      
      <Button
        onPress={changeHostName}
        title="Alterar Host"
      />
      <Text style={{padding: 10, fontSize: 42}}>
        Host atual: {hostName}
      </Text>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  title: 'Configurações',
};

export default SettingsScreen;