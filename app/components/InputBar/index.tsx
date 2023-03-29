import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {useStyle} from './styles';

const InputBar = ({
  value = '',
  onChangeText = (text: any) => {},
  ...props
}: any) => {
  const styles = useStyle();
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        // value={value}
        // onChangeText={text => {
        //   onChangeText(text);
        // }}
        placeholderTextColor={'black'}
        style={styles.input}
      />
    </View>
  );
};

export default InputBar;
