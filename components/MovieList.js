import React, { Component } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'

import { Metrics } from '../Themes'
import styles from '../Styles/MoviePageStyles'

class MovieList extends Component {
  render() {
    const {
      data,
      navigation,
      gridView,
      search,
      searchString,
      title,
      searchText,
      nextPage
    } = this.props
    return (
      <View>
        <Text style={styles.listTitle}>{title}</Text>
        <FlatList
          style={styles.list}
          data={data}
          renderItem={({ item }) => (
            <MovieCard
              item={item}
              gridView={gridView}
              loadDetails={() => navigation.navigate('MovieDetails', item)}
            />
          )}
          horizontal={gridView && true}
          keyExtractor={item => `${item.id}`}
          key={gridView ? 1 : 0}
          contentContainerStyle={
            gridView && {
              height: Metrics.image.height + 4
            }
          }
          refreshing={data.isLoading}
          onEndReachedThreshold={0.05}
          onEndReached={() => !search && nextPage(searchString)}
          ListFooterComponent={() =>
            searchText === '' && (
              <View>
                <ActivityIndicator size="large" />
              </View>
            )
          }
        />
      </View>
    )
  }
}

MovieList.propTypes = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  gridView: PropTypes.bool.isRequired,
  search: PropTypes.bool.isRequired,
  searchString: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  searchText: PropTypes.string,
  nextPage: PropTypes.func.isRequired
}

export default MovieList
