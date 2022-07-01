import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {NewsDetailsStyles as styles} from './styles';
import {store} from '../../store';
import {Text} from 'react-native';
import {DetailsList} from '../../common/detailsCard';
import {Button} from '../../common/button';
import {COLORS} from '../../constant';

const {dispatch} = store;

export default function NewsListing({navigation}) {
  const {data, loading} = useSelector(state => state.fPNews);

  useEffect(() => {
    dispatch.fPNews.loadData();
  }, []);

  const _renderItem = ({item}) => {
    return <DetailsList summary={item.summary} author={item.author} />;
  };

  if (loading) {
    return <LoadingView />;
  }

  return (
    <>
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <Text style={styles.details}>News Details</Text>
            <Button
              title="SignOut"
              onPress={() => navigation.navigate('signup')}
              Style={styles.button}
            />
          </View>

          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={_renderItem}
          />
        </View>
      </View>
    </>
  );
}

const LoadingView = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={COLORS.linear} absoluteFill />
    </View>
  );
};
