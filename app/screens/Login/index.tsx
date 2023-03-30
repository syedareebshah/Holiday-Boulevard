import {useNavigation} from '@react-navigation/native';
import Button from 'components/Button';
import InputBar from 'components/InputBar';
import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Background from '../../assets/Background.png';
import Logo from '../../assets/logo.png';
import {useStyle} from './styles';

const Login = () => {
  const styles = useStyle();
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.container}
      source={Background}
      resizeMode="cover">
      <StatusBar backgroundColor="#000000" />
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.card}>
          <Image style={styles.logo} resizeMode="contain" source={Logo} />
          <Text style={styles.text}>Welcome to Holiday Boulevard</Text>
          <View style={styles.innerContainer}>
            <InputBar keyboardType="email-address" placeholder="Your Email" />
            <InputBar placeholder="Password" />
          </View>
          <Button title="Login" />
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgot}>Click here to Forget Password</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default Login;
