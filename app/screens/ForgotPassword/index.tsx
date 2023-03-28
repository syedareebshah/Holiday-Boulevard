import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useStyle} from './styles';

const ForgotPassword: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = useStyle();
  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
