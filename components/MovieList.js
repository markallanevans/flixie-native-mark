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
      allMovies: this.props.screenProps.movieDBList,
      movieList: this.props.screenProps.movieDBList,
    }
    this.setSearchText = this.setSearchText.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }
  
  filterMovies(text) {
      let filterText = text;
      const allMovies = this.state.allMovies;
      const filteredMovies = allMovies.filter(
          m => m.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
    )
    this.setState({
      movieList: filteredMovies
    })
  }
  
  setSearchText(text) {
    this.filterMovies(text);
  }


  render() {
    const screenProps = this.props.screenProps;
    const navigate = this.props.navigation.navigate;
    return (
      <View>
        <SearchBar 
          data={screenProps.movieDBList}
          setSearchText={this.setSearchText}
        />
        <FlatList
          data={this.state.movieList}
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
          onEndReached={screenProps.fetchNextPage}
          ListFooterComponent={() =>
            <View>
              <ActivityIndicator size="large" />
            </View>}
        />
      </View>
    );
  }
}

export default MovieList;

// Add Proptypes...
