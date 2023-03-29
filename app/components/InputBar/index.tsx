import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {useStyle} from './styles';

const InputBar = () => {
  const styles = useStyle();
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={'black'}
        style={styles.input}
        placeholder="some placeholder"
      />
    </View>
  );
};

export default InputBar;
