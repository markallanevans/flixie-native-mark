import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, ActivityIndicator, TouchableHighlight } from 'react-native';
import MovieDetails from './MovieDetails';
import MovieCard from './MovieCard';

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingTop: 20,
  },
});

class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.main_view}>
        <FlatList
          data={this.props.screenProps.movieDBList}
          renderItem={({item}) =>
          <MovieCard 
            item={item} 
            navigation={this.props.navigation}
          />
          }
          keyExtractor={(item) => `${item.id}`}
          refreshing={this.props.screenProps.isLoading}
          onRefresh={this.props.screenProps.fetchNextPage}
          onEndReachedThreshold={0.05}
          onEndReached={this.props.screenProps.fetchNextPage}
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

// Add Proptypes...
