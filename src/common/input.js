import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {COLORS} from '../constant';
import {hp, wp} from '../constant/utils';

export const Input = ({
  placeholder,
  onchange,
  value,
  label,
  style,
  inputStyle,
  placeholderTextColor,
  secure,
  placeholderStyle,
}) => {
  return (
    <>
      <View style={{paddingHorizontal: 25}}>
        <Text style={styles.label}>{label}</Text>
        <View style={[styles.inputContainer, style]}>
          <TextInput
            style={[styles.input, inputStyle]}
            placeholder={placeholder}
            placeholderStyle={placeholderStyle}
            placeholderTextColor={placeholderTextColor}
            onChangeText={onchange}
            value={value}
            keyboardType="default"
            secureTextEntry={secure}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: COLORS.neutral,
    borderWidth: hp(0.5),
    height: hp(50),
    borderRadius: hp(10),
    paddingHorizontal: wp(7),
    marginBottom: hp(20),
    justifyContent: 'center',
  },

  input: {
    fontSize: hp(12),
    fontWeight: '600',
    color: COLORS.brown,
  },
  label: {
    marginBottom: hp(8),
    fontSize: hp(14),
    color: COLORS.Charcoal,
    fontWeight: '600',
  },
});
