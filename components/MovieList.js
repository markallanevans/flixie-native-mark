import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, ActivityIndicator, TouchableHighlight } from 'react-native';
import MovieDetails from './MovieDetails'

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingTop: 20,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#111133'
  },
  image: {
    alignSelf: 'center',
    width: 300,
    height: 400,
  },
  text: {
    fontSize: 30,
    color: '#111133',
    backgroundColor: '#aac',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
  },
  release_date: {
    alignSelf: 'center',
    backgroundColor: '#888899'
  },
  vote_average: {
    alignSelf: 'flex-end',
    padding: 2,
    marginRight: 20,
    backgroundColor: '#ee0022',
    borderRadius: 4,
    opacity: 0.9,
    borderColor: '#fff',
    color: '#fff',
    borderWidth: 1,
  }
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
          <TouchableHighlight onPress={() => alert('Touched!')}>
            <View style={styles.container}>
              <Text style={styles.text} >{item.title}</Text>
              <ImageBackground style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path }} >
              <Text style={styles.release_date} >{item.release_date}</Text>
              <Text style={styles.vote_average} >{item.vote_average.toFixed(1)}</Text>
              </ImageBackground>
              <MovieDetails movie={item}/>
            </View>
          </TouchableHighlight>
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
