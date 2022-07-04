import {StyleSheet} from 'react-native';
import {hp, wp} from '../../constant/utils';
import {COLORS} from '../../constant';

export const NewsDetailsStyles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.linear,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  author: {
    fontWeight: '500',
    fontSize: hp(12),
    marginBottom: hp(10),
  },
  summary: {
    fontWeight: '500',
    fontSize: hp(12),
    marginBottom: hp(10),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: hp(18),
    alignItems: 'center',
    marginTop: hp(15),
  },
  details: {
    fontWeight: '500',
    fontSize: hp(14),
  },
  container: {
    marginTop: hp(50),
    paddingHorizontal: wp(10),
    flex: 1,
  },
  indicator: {
    marginTop: hp(20),
  },
});

// const FetchData = useCallback(() => {
//   limit > 1 ? setLoadingMore(true) : setLoading(true);
//   fetch(
//     `https://www.breakingbadapi.com/api/characters?limit=${
//       limit * 12
//     }&offset=0`,
//   )
//     .then(response => response.json())
//     .then(res => {
//       setData(res);
//       console.log(res);
//     })
//     .catch(err => err)
//     .finally(() => (limit > 1 ? setLoadingMore(false) : setLoading(false)));
// }, [limit]);

// console.log(limit);
// const onReachEnd = () => {
//   setLimit(prev => prev + 1);
// };
