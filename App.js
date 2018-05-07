import React from 'react';
import { StyleSheet, FlatList, ActivityIndicator, Text, View, ImageBackground  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';

const Routes = StackNavigator(
  {
    MovieList: { screen: MovieList,
    navigationOptions: {
      title: 'Welcome to Flixie',
      } 
    },
    MovieDetails: { screen: MovieDetails,
      navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params.title}`,
      }),
    }
  },
  { 
      initialRouteName: 'MovieList'
  }
);

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
      const mSet = new Set([...this.state.movieDBList.map((m) => m.id)]);
      const plusSet = responseJson.results.filter((m) => !mSet.has(m.id));
      const newResults = this.state.movieDBList.concat(plusSet);
      
      this.setState({
        isLoading: false,
        movieDBList: newResults,
        page: this.state.page + 1
      });
    } catch(error) {
      alert('Your network has more bugs than a geckos dinner!');
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
          isLoading: this.state.isLoading,
          fetchNextPage: this.fetchNextPage,
          refreshing: this.state.isLoading,
         }} />
    );
  }
}


