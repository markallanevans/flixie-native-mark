import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from '../Styles/MovieDetailsStyles';

class MovieDetails extends PureComponent {
  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    const img = { uri: `https://image.tmdb.org/t/p/w500/${params.poster_path}` };
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={img} />
        <ScrollView
          style={styles.details}
          alwaysBounceVertical={false}
        >
          <Text style={styles.title}>
            {params.title}
          </Text>
          <Text style={styles.overview}>
            {params.overview}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  navigation: PropTypes.object.isRequired,
};
