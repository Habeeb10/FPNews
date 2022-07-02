import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {hp, wp} from '../constant/utils';
import {format} from 'date-fns';
import {Button} from './button';
import {COLORS} from '../constant';

export const NewsList = ({title, published_date, topic, media}) => {
  // const dateFormatter = format(new Date(published_date), 'pppp');
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Titlte:{title}</Text>
        <Text style={styles.topic}>Topic:{topic}</Text>
        <Text style={styles.date}>Date:{published_date}</Text>
      </View>
      <Image source={{uri: media}} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: wp(20),
    height: hp(20),
    borderRadius: hp(30),
  },
  date: {
    fontSize: hp(10),
    fontWeight: '500',
    color: COLORS.black,
  },
  title: {
    fontSize: hp(10),
    fontWeight: '500',
    color: COLORS.black,
    width: hp(200),
    marginBottom: hp(5),
  },
  topic: {
    fontSize: hp(10),
    fontWeight: '500',
    color: COLORS.black,
    marginBottom: hp(5),
  },

  container: {
    marginBottom: hp(20),
    borderWidth: 1,
    borderColor: COLORS.magenta,
    padding: hp(10),
    width: '95%',
    marginHorizontal: hp(10),
    marginTop: hp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: hp(10),
    paddingHorizontal: hp(10),
  },
});
