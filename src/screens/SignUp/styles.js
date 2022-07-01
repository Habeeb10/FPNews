import {StyleSheet} from 'react-native';
import {COLORS} from '../../constant';
import {hp, wp} from '../../constant/utils';

export const SignUpStyles = StyleSheet.create({
  createAccount: {
    fontSize: hp(17),
    fontWeight: '600',
    color: COLORS.ash,
    marginTop: hp(5),
    textAlign: 'center',
  },
  welcomeContainer: {
    marginBottom: hp(20),
  },
  welcome: {
    fontSize: hp(24),
    fontWeight: '600',
    color: COLORS.Charcoal,
    textAlign: 'center',
  },
  container: {
    marginTop: hp(50),
    paddingHorizontal: hp(15),
  },
  termsText: {
    lineHeight: hp(22),
    fontSize: hp(14),
    fontWeight: '500',
    color: COLORS.neutral,
    width: wp(265),
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: hp(24),
  },

  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconContainer: {
    width: wp(48),
    height: hp(48),
    borderRadius: hp(24),
    backgroundColor: COLORS.neutralBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(25),
    alignSelf: 'center',
  },
  alternativeContainer: {
    flexDirection: 'row',
    marginTop: hp(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  altSign: {
    lineHeight: hp(22),
    fontSize: hp(14),
    fontWeight: '500',
    color: COLORS.neutral,
  },
  button: {
    marginTop: hp(25),
    width: wp(315),
    height: hp(48),
    backgroundColor: COLORS.linear,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
