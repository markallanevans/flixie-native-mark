import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  details: {
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
    this.overview = this.props.overview;
  }


  render() {
    const props = this.props.navigation.state.params;
    console.log(props);
    return (
      <View style={styles.details}>
        <Text style={styles.details}>{props.overview}</Text>
      </View>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  item: PropTypes.object,
  overview: PropTypes.string,
}