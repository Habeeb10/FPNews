import React from 'react';
import {Button as RNButton} from 'react-native-elements';
import {hp, wp} from '../constant/utils';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {Text} from 'react-native';
import {COLORS} from '../constant';

export const Button = ({title, Style, loading, onPress}) => {
  return (
    <RNButton
      onPress={onPress}
      title={
        loading ? (
          <ActivityIndicator
            size="small"
            color="orange"
            style={styles.button}
          />
        ) : (
          <Text style={styles.title}>{title}</Text>
        )
      }
      buttonStyle={[styles.buttonStyle, Style]}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: hp(14),
    fontWeight: '400',
    color: COLORS.white,
  },
  button: {
    marginTop: 10,
  },
  buttonStyle: {
    backgroundColor: COLORS.purple,
    borderRadius: 3,
    width: wp(80.5),
    height: hp(32.5),
  },
});
