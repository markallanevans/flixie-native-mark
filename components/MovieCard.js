import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from '../Styles/MovieCardStyles';

const MovieCard = ({ gridView, item, loadDetails }) => (
  <TouchableHighlight onPress={() => loadDetails()}>
    <View style={styles.listitem}>
      <Text style={gridView ? styles.gridView : styles.title}>
        { item.title }
      </Text>
      <View style={gridView ? styles.innercontainerGrid : styles.innercontainerList}>
        <ImageBackground style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}>
          <View style={styles.vote_average_container}>
            <Text style={styles.vote_average_content}>
              {item.vote_average.toFixed(1)}
            </Text>
          </View>
        </ImageBackground>
        <Text
          style={gridView ? styles.gridView : styles.caption}
          numberOfLines={3}
        >
          {item.overview}
        </Text>
      </View>
    </View>
  </TouchableHighlight>
);

export default MovieCard;

MovieCard.propTypes = {
  item: PropTypes.object.isRequired,
  gridView: PropTypes.bool.isRequired,
  loadDetails: PropTypes.func.isRequired,
};
