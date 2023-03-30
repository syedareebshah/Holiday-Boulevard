import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useStyle} from './styles';

const Button = ({title, onPress}: any) => {
  const styles = useStyle();
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
