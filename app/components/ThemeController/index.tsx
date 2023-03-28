import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {Switch} from 'react-native-paper';
import * as themeActions from './../../store/slice/themeSlice';
import {RootState} from './../../store/slice';

const ThemeController: React.FC = () => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const dispatch = useDispatch();
  const onToggleTheme: any = () =>
    dispatch(themeActions.setIsDarkTheme(!isDark));
  const iconName = isDark ? 'weather-night' : 'white-balance-sunny';
  const iconColor = isDark ? 'gray' : 'black';

  return (
    <View style={styles.container}>
      <Switch value={isDark} onValueChange={onToggleTheme} color={'gray'} />
      <Icon name={iconName} size={20} style={styles.icon} color={iconColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {marginLeft: 4},
});

export default ThemeController;
