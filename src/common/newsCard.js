import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {hp, wp} from '../constant/utils';
import {format} from 'date-fns';
import {Button} from './button';
import {COLORS} from '../constant';

export const NewsList = ({title, published_date, topic, image}) => {
  const dateFormatter = format(new Date(published_date), 'pppp');
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}> {title}</Text>
        <Text>{dateFormatter}</Text>
        <Text style={styles.title}>{topic}</Text>
      </View>
      {/* <Image source={{uri: image}} style={styles.image} /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: wp(30),
    height: hp(30),
    borderRadius: hp(30),
  },
  title: {
    fontSize: hp(10),
    fontWeight: '500',
    color: COLORS.black,
  },

  container: {
    borderRadius: hp(10),
    marginBottom: hp(20),
    borderWidth: 1,
    borderColor: COLORS.magenta,
    padding: hp(10),
  },
});
