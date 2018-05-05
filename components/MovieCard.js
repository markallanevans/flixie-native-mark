import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import MovieDetails from './MovieDetails';

const styles = StyleSheet.create({
  overview: {
    backgroundColor: '#000',
    color: '#fff',
    opacity: 0.9,
    padding: 20,
    textAlign: 'justify',
    justifyContent: 'flex-end',
  }
});

class MovieCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const item = this.props.Screenprops;
    return (
      <View style={styles.container}>
        <Text style={styles.text} >{item.title}</Text>
        <ImageBackground style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path }} >
        <Text style={styles.release_date} >{item.release_date}</Text>
        <Text style={styles.vote_average} >{item.vote_average.toFixed(1)}</Text>
        </ImageBackground>
        <MovieDetails movie={item}/>
      </View>
    );
  }
}

export default MovieCard;

// Add Proptypes...