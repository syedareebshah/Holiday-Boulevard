import Button from 'components/Button';
import InputBar from 'components/InputBar';
import React from 'react';
import {View, Text} from 'react-native';
import {useStyle} from './styles';

const Home: React.FC = () => {
  const styles = useStyle();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Hello! Imm Home screen'}</Text>
      <InputBar />
      <Button />
    </View>
  );
};

export default Home;
