import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, ActivityIndicator, TouchableHighlight } from 'react-native';
import MovieDetails from './MovieDetails';
import MovieCard from './MovieCard';

class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const screenProps = this.props.screenProps;
    const navigate = this.props.navigation.navigate;
    return (
      <View>
        <FlatList
          data={screenProps.movieDBList}
          renderItem={({item}) =>
          <MovieCard 
            item={item} 
            navigation={screenProps.navigation}
            loadDetails={() => navigate('MovieDetails', item)}
          />
          }
          keyExtractor={(item) => `${item.id}`}
          refreshing={screenProps.isLoading}
          onRefresh={screenProps.fetchNextPage}
          onEndReachedThreshold={0.05}
          onEndReached={screenProps.fetchNextPage}
          ListFooterComponent={() =>
            <View>
              <ActivityIndicator size="large" />
            </View>}
        />
      </View>
    );
  }
}

export default MovieList;

