import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

class MovieDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.overview} >{this.props.movie.overview}</Text>
      </View>
    );
  }
}

export default MovieDetails;

// Add Proptypes...