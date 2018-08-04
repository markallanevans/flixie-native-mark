import React, { Component } from 'react';
import {
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

import { Colors } from '../Themes';
import styles from '../Styles/MovieListStyles';

const gridIcon = (<Icon name="grid-on" size={30} color={Colors.listGridIconColor} />);
const listIcon = (<Icon name="view-list" size={30} color={Colors.listGridIconColor} />);

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      search: false,
      gridView: true,
    };
    this.setSearchText = this.setSearchText.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  setSearchText(text) {
    const { screenProps } = this.props;
    screenProps.filterMovies(text);
    this.setState({
      searchText: text,
      search: text.length > 0,
    });
  }

  changeView() {
    const { gridView } = this.state;
    this.setState({
      gridView: !gridView,
    });
  }

  render() {
    const { gridView, search, searchText } = this.state;
    const { screenProps, navigation } = this.props;
    const { navigate } = navigation;
    const numColums = gridView ? 4 : 1;
    const buttonTxt = gridView ? listIcon : gridIcon;

    return (
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar barStyle="light-content" />
        <View>
          <View style={styles.navBar}>
            <SearchBar
              data={screenProps.movieDBList}
              searchText={screenProps.searchText}
              setSearchText={this.setSearchText}
            />
            <View style={styles.navBarRight}>
              <TouchableOpacity
                style={styles.gridToggleButton}
                onPress={this.changeView}
              >
                {buttonTxt}
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            style={styles.list}
            data={screenProps.filteredMovies}
            renderItem={({ item }) => (
              <MovieCard
                item={item}
                gridView={gridView}
                navigation={screenProps.navigation}
                loadDetails={() => navigate('MovieDetails', item)}
              />)
            }
            numColumns={numColums}
            keyExtractor={item => `${item.id}`}
            key={gridView ? 1 : 0}
            refreshing={screenProps.isLoading}
            onRefresh={screenProps.fetchNextPage}
            onEndReachedThreshold={0.05}
            onEndReached={!search && screenProps.fetchNextPage}
            ListFooterComponent={() => searchText === ''
              && (
              <View>
                <ActivityIndicator size="large" />
              </View>
              )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

MovieList.propTypes = {
  screenProps: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default MovieList;
