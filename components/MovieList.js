import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, ActivityIndicator, TouchableHighlight } from 'react-native';
import MovieDetails from './MovieDetails';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      search: false,
      allMovies: this.props.screenProps.movieDBList,
      movieList: this.props.screenProps.movieDBList,
    }
    this.setSearchText = this.setSearchText.bind(this);
  }

  setSearchText(text) {
    this.props.screenProps.filterMovies(text);
    this.setState({
      searchText: text,
      search: text.length > 0 ? true : false,
    });
  }


  render() {
    const screenProps = this.props.screenProps;
    const navigate = this.props.navigation.navigate;
    return (
      <View>
        <SearchBar 
          data={screenProps.movieDBList}
          searchText={screenProps.searchText}
          setSearchText={this.setSearchText}
        />
        <FlatList
          data={screenProps.filteredMovies}
          renderItem={({item}) =>
          <MovieCard 
            item={item} 
            navigation={screenProps.navigation}
            loadDetails={() => navigate('MovieDetails', item)}
          />
          }
          keyExtractor={(item) => `${item.id}`}
          refreshing={screenProps.isLoading}
          onRefresh={screenProps.fetchNextPage}
          onEndReachedThreshold={0.05}
          onEndReached={!this.state.search && screenProps.fetchNextPage}
          ListFooterComponent={() => this.state.searchText === '' && 
            <View>
              <ActivityIndicator size="large" />
            </View>}
        />
      </View>
    );
  }
}

export default MovieList;