import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import React from 'react';
import {useSelector} from 'react-redux';

export const useStyle = () => {
  const {colors} = useTheme();
  const isDark = useSelector((state: any) => state.theme.isDark);

  const styles = () =>
    StyleSheet.create({
      container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        marginTop: 25,
        paddingVertical: 7,
        width: '80%',
      },
      input: {
        color: '#000000',
        fontSize: 20,
      },
    });
  return React.useMemo(() => styles(), [isDark]);
};
