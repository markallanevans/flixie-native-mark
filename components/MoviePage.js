import React, { Component } from 'react'
import { View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'
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
    const { gridView } = this.state
    const { screenProps, navigation } = this.props
    const buttonTxt = gridView ? listIcon : gridIcon
    const { popular, now_playing, top_rated, fetchNextPage } = screenProps
    const categories = [popular, now_playing, top_rated]

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
          {categories.map(category => (
            <MovieList
              key={category.title}
              data={category.filteredMovies}
              searchString={category.searchString}
              title={category.title}
              gridView={gridView}
              navigation={navigation}
              search={this.state.search}
              nextPage={c => fetchNextPage(c)}
            />
          ))}
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
