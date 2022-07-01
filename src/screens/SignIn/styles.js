import {StyleSheet} from 'react-native';
import {COLORS} from '../../constant';
import {hp, wp} from '../../constant/utils';

export const SignInStyles = StyleSheet.create({
  // socialContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  // },
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
    marginTop: hp(34),
    alignItems: 'center',
    justifyContent: 'center',
  },
  altSign: {
    fontSize: hp(14),
    fontWeight: '500',
    color: COLORS.neutral,
  },
  line: {
    width: wp(62),
    borderColor: COLORS.neutralBlue,
    borderWidth: hp(0.5),
    height: hp(0),
    marginLeft: hp(10),
    marginRight: hp(10),
  },
  signup: {
    lineHeight: hp(24),
    fontSize: hp(14),
    fontWeight: '500',
    color: COLORS.primaryGreen,
    marginLeft: hp(5),
  },
  account: {
    lineHeight: hp(24),
    fontSize: hp(14),
    fontWeight: '500',
    color: COLORS.black,
  },
  accountContainer: {
    flexDirection: 'row',
    marginTop: hp(20),
    alignSelf: 'center',
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

  welcomeBack: {
    fontSize: hp(24),
    fontWeight: '600',
    color: COLORS.Charcoal,
    marginBottom: hp(20),
    paddingHorizontal: hp(25),
  },
  container: {
    marginTop: hp(50),
    paddingHorizontal: hp(15),
  },
});
