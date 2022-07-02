import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {NewsListingStyles as styles} from './styles';
import {store} from '../../store';
import {Text} from 'react-native';
import {Button} from '../../common/button';
import {NewsList} from '../../common/newsCard';
import {COLORS} from '../../constant';
import {Container} from '../../common/container';

const {dispatch} = store;

export default function NewsListing({navigation}) {
  const {title, loading} = useSelector(state => state.fPNews);

  useEffect(() => {
    dispatch.fPNews.loadData();
  }, []);

  const _renderItem = ({item}) => {
    console.log(item);
    return (
      <NewsList
        title={item.title}
        topic={item.topic}
        published_date={item.published_date}
        media={item.media}
      />
    );
  };

  if (loading) {
    return <LoadingView />;
  }

  return (
    <>
      <Container>
        <View>
          <View style={styles.header}>
            <Text style={styles.news}>All News</Text>
            <Button
              title="Show Details"
              onPress={() => navigation.navigate('details')}
              Style={styles.button}
            />
          </View>

          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={title}
            renderItem={_renderItem}
          />
        </View>
      </Container>
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
