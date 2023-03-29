import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

export const useStyle = () => {
  const isDark = useSelector((state: any) => state.theme.isDark);
  const styles = () =>
    StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      },
      card: {
        backgroundColor: 'black',
        opacity: 0.8,
        width: '80%',
        borderRadius: 25,
        textAlign: 'center',
        padding: 26,
        alignItems: 'center',
      },
      logo: {
        width: 250,
      },
      text: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        color: 'white',
        paddingTop: 33,
      },
      innerContainer: {
        paddingVertical: 30,
        width: '100%',
        alignItems: 'center',
      },
      forgot: {
        color: 'white',
        paddingVertical: 17,
      },
    });
  return React.useMemo(() => styles(), [isDark]);
};
