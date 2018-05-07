import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';
import MovieDetails from './MovieDetails';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  listitem: {
    backgroundColor: '#111133',
  },
  main_view: {
    flex: 1,
    paddingTop: 20,
  },
  innercontainer: {
    flex: 1,
    backgroundColor: '#111133',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    alignSelf: 'flex-start',
    width: 120,
    height: 200,
  },
  title: {
    flex: 1,
    fontSize: 30,
    color: '#fff',
    backgroundColor: 'rgba(50,50,100,0.2)',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
    width: '90%',
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
  },
  caption: {
    flex: 2,
    backgroundColor: '#000',
    color: '#fff',
    opacity: 0.9,
    padding: 20,
    textAlign: 'justify',
    justifyContent: 'flex-end',
    color: '#fff',
    alignSelf: 'flex-end',
    height: 200,
  }
});

class MovieCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight onPress={() => this.props.loadDetails()}>
      <View style={styles.listitem}>
          <Text style={styles.title} >{this.props.item.title}</Text>
        <View style={styles.innercontainer}>
          <ImageBackground style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + this.props.item.poster_path }} >
          <Text style={styles.release_date} >{this.props.item.release_date}</Text>
          <Text style={styles.vote_average} >{this.props.item.vote_average.toFixed(1)}</Text>
          </ImageBackground>
          <Text style={styles.caption}>{this.props.item.overview}</Text>
      </View>
      </View>
     </TouchableHighlight>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  item: PropTypes.object,
}