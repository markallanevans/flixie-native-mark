import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';
import MovieDetails from './MovieDetails';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  overview: {
    backgroundColor: '#000',
    color: '#fff',
    opacity: 0.9,
    padding: 20,
    textAlign: 'justify',
    justifyContent: 'flex-end',
  },
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

class MovieCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <TouchableHighlight onPress={() => this.props.navigation.navigate('MovieDetails')}>
        <View style={styles.container}>
          <Text style={styles.text} >{this.props.item.title}</Text>
          <ImageBackground style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + this.props.item.poster_path }} >
          <Text style={styles.release_date} >{this.props.item.release_date}</Text>
          <Text style={styles.vote_average} >{this.props.item.vote_average.toFixed(1)}</Text>
          <MovieDetails item={this.props.item}/>
          </ImageBackground>
      </View>
     </TouchableHighlight>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  item: PropTypes.object,
}