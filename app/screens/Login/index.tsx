import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import * as loginActions from './../../store/slice/userSlice';
import {useStyle} from './styles';

const Login: React.FC = () => {
  // const id = useSelector((state: RootState) => state.user.id);
  const dispatch = useDispatch();
  const styles = useStyle();
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const onLogin = () => dispatch(loginActions.onLogin('test'));
  const onForgot = () => navigation.navigate('ForgotPassword');

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          backgroundColor: theme.colors.accent,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('./../../assets//react-native.png')} />
        <Text
          style={{
            fontSize: 20,
            color: 'teal',
            fontWeight: 'bold',
          }}>
          {'GSoft Boiler Plate'}
        </Text>
        <View style={styles.subContainer}>
          <Button title="Login" onPress={onLogin} />
          <TouchableOpacity style={styles.forgot} onPress={onForgot}>
            <Text style={styles.labelStyle}>{'Forgot Password'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
