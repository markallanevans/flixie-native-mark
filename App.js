import React from 'react';
import { StyleSheet, FlatList, ActivityIndicator, Text, View, ImageBackground  } from 'react-native';
import MovieDetails from './components/MovieDetails';
import { StackNavigator } from 'react-navigation';
import MovieList from './components/MovieList';

const Routes = StackNavigator({
  MovieList: { screen: MovieList }
})

const movieDBSource = "https://api.themoviedb.org/";
const movieCollectionCall = "3/movie/popular?";
const apiKey = "api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&page=";
const pageCall = "&page=";

const newMovieCollectionRequest = movieDBSource + movieCollectionCall + apiKey + pageCall;

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
    isLoading: true,
    movieDBList: [],
    page: 1,
    }

    this.fetchNextPage = this.fetchNextPage.bind(this);
  }


  componentDidMount(){
    this.fetchNextPage();
  }

  async fetchNextPage() {
    try {
      const query = newMovieCollectionRequest + this.state.page;
      const response = await fetch(query);
      const responseJson = await response.json();
      
      this.setState({
        isLoading: false,
        movieDBList: this.state.movieDBList.concat(responseJson.results),
        page: this.state.page + 1
      });
    } catch(error) {
      console.error(error);
    }
  }


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#888899"/>
        </View>
      )
    }
    
    return(
      <Routes 
        screenProps={{
          movieDBList: this.state.movieDBList,
          page: this.state.page,
          isLoading: this.state.isLoading
         }} />
    );
  }
}


