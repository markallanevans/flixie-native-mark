import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';

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
    padding: 2,
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
    alignSelf: 'flex-end',
    height: 200,
  },
  gridView: {
    display: 'none',
  }
});

const MovieCard = props => (
  <TouchableHighlight onPress={() => props.loadDetails()}>
    <View style={styles.listitem}>
      <Text style={props.gridView ? styles.gridView : styles.title} >{props.item.title}</Text>
      <View style={styles.innercontainer}>
        <ImageBackground style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + props.item.poster_path }} >
          <Text style={styles.release_date} >{props.item.release_date}</Text>
          <Text style={styles.vote_average} >{props.item.vote_average.toFixed(1)}</Text>
        </ImageBackground>
        <Text
          style={props.gridView ? styles.gridView : styles.caption}
          numberOfLines={10}
        >
          {props.item.overview}
        </Text>
      </View>
    </View>
  </TouchableHighlight>
);

export default MovieCard;

MovieCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.string,
  }),
  gridView: PropTypes.bool,
  loadDetails: PropTypes.func,
};
