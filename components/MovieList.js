import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, ActivityIndicator, TouchableHighlight, Button } from 'react-native';
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
      gridView: true,
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

  changeView() {
    this.setState({
      gridView: !this.state.gridView
    });
  }
  
  
  render() {
    const numColums = this.state.gridView ? 3 : 1;
    const screenProps = this.props.screenProps;
    const navigate = this.props.navigation.navigate;
    const buttonTxt = this.state.gridView ? 'Show List' : 'Show Grid';
    const styles = StyleSheet.create({
      searchBar: {
        flex: 9,
      },
      button: {
        flex: 1,
      }
    })
    return (
      <View>
        <SearchBar 
          style={styles.searchBar}
          data={screenProps.movieDBList}
          searchText={screenProps.searchText}
          setSearchText={this.setSearchText}
        />
        <Button style={styles.button} title={buttonTxt} onPress={this.changeView.bind(this)}/>
        <FlatList
          data={screenProps.filteredMovies}
          renderItem={({item}) =>
          <MovieCard 
            item={item}
            gridView={this.state.gridView}
            navigation={screenProps.navigation}
            loadDetails={() => navigate('MovieDetails', item)}
          />
          }
          numColumns={numColums}
          keyExtractor={(item) => `${item.id}`}
          key= { (this.state.gridView) ? 1 : 0}
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