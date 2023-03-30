import {StyleSheet} from 'react-native';
import {RootState} from 'app/store/slice';
import {useTheme} from 'react-native-paper';
import React from 'react';
import {useSelector} from 'react-redux';

export const useStyle = () => {
  const {colors} = useTheme();
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  const styles = () =>
    StyleSheet.create({
      container: {
        flex: 1,

        backgroundColor: isDark ? 'black' : 'white',
      },
      topContainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
      },
      dp: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'blue',
      },
      name: {
        fontSize: 24,
        fontWeight: '500',
        color: 'white',
      },
      profile: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white',
      },
      subContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
        marginTop: 15,
      },
      topTxt: {
        color: 'white',
        fontSize: 8,
        fontWeight: '400',
      },
      midTxt: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
      },
      endTxt: {
        color: 'white',
        fontSize: 10,
        fontWeight: '400',
        textAlign: 'center',
      },
      centerContainer: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 20,
        borderStyle: 'dashed',
      },
      bottomContainer: {
        flex: 0.6,
        backgroundColor: 'white',
        borderRadius: 25,
        paddingVertical: 25,
        paddingHorizontal: 35,
      },
      heading: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
      },
      itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      item: {
        minWidth: 75,
        minHeight: 75,
        backgroundColor: '#0349B1',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 9,
      },
      itemTxt: {
        color: 'white',
        fontSize: 8,
      },
    });
  return React.useMemo(() => styles(), [isDark]);
};
