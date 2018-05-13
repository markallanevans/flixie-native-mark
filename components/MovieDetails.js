import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111133'
  },
  details: {
    backgroundColor: '#000',
    color: '#fff',
    opacity: 0.9,
    padding: 20,
    textAlign: 'justify',
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    padding: 10,
  },
  image: {
    height: 400,
    width: 250,
  }
});

const MovieDetails = () => {
    const props = this.props.navigation.state.params;
    const img = { uri: 'https://image.tmdb.org/t/p/w500/' + props.poster_path };
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={img} />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.details}>{props.overview}</Text>
      </View>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.object,
  }),
};