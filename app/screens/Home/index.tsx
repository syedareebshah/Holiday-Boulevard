import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useStyle} from './styles';
import Background from '../../assets/Background.png';
const {width, height} = Dimensions.get('window');

const Home: React.FC = () => {
  const styles = useStyle();
  return (
    // <ScrollView
    //   scrollEnabled={width < height}
    //   contentContainerStyle={{flexGrow: 1, backgroundColor: 'red'}}>
    <ImageBackground
      style={styles.container}
      source={Background}
      resizeMode="cover">
      <StatusBar hidden={true} />

      <View style={styles.topContainer}>
        <Image
          style={styles.dp}
          resizeMode="cover"
          source={{uri: 'https://i.dawn.com/large/2022/03/622af3dc3fe4f.png'}}
        />
        <Text style={styles.name}>Sana Javed</Text>
        <Text style={styles.profile}>Landlord</Text>
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.topTxt}>AED</Text>
            <Text style={styles.midTxt}>5000</Text>
            <Text style={styles.endTxt}>Commision</Text>
          </View>
          <View style={styles.centerContainer}>
            <Text style={styles.topTxt}>AED</Text>
            <Text style={styles.midTxt}>5000</Text>
            <Text style={styles.endTxt}>Commision</Text>
          </View>
          <View>
            <Text style={styles.topTxt}>AED</Text>
            <Text style={styles.midTxt}>5000</Text>
            <Text style={styles.endTxt}>Commision</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <ScrollView style={{flex: 1}}>
          <Text style={styles.heading}>Dashboard</Text>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/icons/Vector.png')} />
              <Text style={styles.itemTxt}>My Bookings</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
    // </ScrollView>
  );
};

export default Home;
