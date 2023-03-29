import Button from 'components/Button';
import InputBar from 'components/InputBar';
import {
  Image,
  ImageBackground,
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
  return (
    <ImageBackground
      style={styles.container}
      source={Background}
      resizeMode="cover">
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.card}>
          <Image style={styles.logo} resizeMode="contain" source={Logo} />
          <Text style={styles.text}>Welcome to Holiday Boulevard</Text>
          <View style={styles.innerContainer}>
            <InputBar keyboardType="email-address" placeholder="Your Email" />
            <InputBar placeholder="Password" />
          </View>
          <Button />
          <TouchableOpacity>
            <Text style={styles.forgot}>Click here to Forget Password</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default Login;
