import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {hp, wp} from '../constant/utils';
import {COLORS} from '../constant';

export const DetailsList = ({summary, author}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.author}>Author : {author}</Text>
        <Text style={styles.summary}>Summary : {summary}</Text>
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
  summary: {
    fontSize: hp(10),
    color: COLORS.darkPurple,
    marginTop: hp(10),
    fontWeight: '400',
  },
  author: {
    fontSize: hp(12),
    fontWeight: '400',
    color: COLORS.black,
  },
  container: {
    borderRadius: hp(10),
    marginBottom: hp(20),
    borderWidth: hp(0.5),
    borderColor: COLORS.linear,
    padding: hp(10),
    width: '90%',
    marginHorizontal: hp(20),
    marginTop: hp(10),
  },
});
