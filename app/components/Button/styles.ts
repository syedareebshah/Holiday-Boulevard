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
        backgroundColor: '#0349B1',
        width: 150,
        borderRadius: 10,
        paddingHorizontal: 40,
        paddingVertical: 7,
        textAlign: 'center',
      },
      text: {
        color: 'white',
        textAlign: 'center',
      },
    });
  return React.useMemo(() => styles(), [isDark]);
};
