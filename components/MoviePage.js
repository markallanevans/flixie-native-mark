import React, { Component } from 'react'
import {
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MovieCard from './MovieCard'
import MovieList from './MovieList'
import SearchBar from './SearchBar'

import { Colors, Metrics } from '../Themes'
import styles from '../Styles/MoviePageStyles'

const gridIcon = (
  <Icon name="grid-on" size={30} color={Colors.listGridIconColor} />
)
const listIcon = (
  <Icon name="view-list" size={30} color={Colors.listGridIconColor} />
)

class MoviePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      search: false,
      gridView: true
    }
    this.setSearchText = this.setSearchText.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  setSearchText(text) {
    const { screenProps } = this.props
    screenProps.filterMovies(text)
    this.setState({
      searchText: text,
      search: text.length > 0
    })
  }

  changeView() {
    const { gridView } = this.state
    this.setState({
      gridView: !gridView
    })
  }

  render() {
    const { gridView, search, searchText } = this.state
    const { screenProps, navigation } = this.props
    const { navigate } = navigation
    const numColums = gridView ? 4 : 1
    const buttonTxt = gridView ? listIcon : gridIcon
    return (
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar barStyle="light-content" />
        <View>
          <View style={styles.navBar}>
            <SearchBar
              data={screenProps.popular.movieDBList}
              searchText={screenProps.searchText}
              setSearchText={this.setSearchText}
            />
            <View style={styles.navBarRight}>
              <TouchableOpacity
                style={styles.gridToggleButton}
                onPress={this.changeView}>
                {buttonTxt}
              </TouchableOpacity>
            </View>
          </View>
          <MovieList
            data={screenProps.popular.filteredMovies}
            searchString={screenProps.popular.searchString}
            title={screenProps.popular.title}
            gridView={gridView}
            navigation={navigation}
            nextPage={category => screenProps.fetchNextPage(category)}
          />
          <MovieList
            data={screenProps.now_playing.filteredMovies}
            searchString={screenProps.now_playing.searchString}
            title={screenProps.now_playing.title}
            gridView={gridView}
            navigation={navigation}
            nextPage={category => screenProps.fetchNextPage(category)}
          />
          <MovieList
            data={screenProps.top_rated.filteredMovies}
            searchString={screenProps.top_rated.searchString}
            title={screenProps.top_rated.title}
            gridView={gridView}
            navigation={navigation}
            nextPage={category => screenProps.fetchNextPage(category)}
          />
        </View>
      </SafeAreaView>
    )
  }
}

MoviePage.propTypes = {
  screenProps: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}

export default MoviePage
