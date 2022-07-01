import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {hp, wp} from '../constant/utils';
import {Button} from './button';
import {COLORS} from '../constant';

export const DetailsList = ({summary, author}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.author}> {summary}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: wp(30),
    height: hp(30),
    borderRadius: hp(30),
  },
  author: {
    fontSize: hp(12),
    fontWeight: '400',
    color: COLORS.linear,
  },

  // container: {
  //   borderRadius: hp(10),
  //   marginBottom: hp(20),
  //   borderWidth: 1,
  //   borderColor: COLORS.magenta,
  //   padding: hp(10),
  // },
});
