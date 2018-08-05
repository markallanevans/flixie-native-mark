import React from 'react';
import { ActivityIndicator, View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import { Colors, Fonts, Metrics } from './Themes/index';
import styles from './Styles/MainAppStyles';

const Routes = createStackNavigator(
  {
    MovieList: {
      screen: MovieList,
      navigationOptions: {
        title: 'Time to get your Flixie on!',
        headerStyle: {
          backgroundColor: Colors.headerBackgroundColor,
          borderBottomColor: Colors.headerFontColor,
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          ...Fonts.style.h4,
          backgroundColor: Colors.transparentBlack,
          width: Metrics.screenWidth,
          marginLeft: Platform.OS !== 'ios' ? 0 : null,
          textAlign: 'center',
        },
        headerTintColor: Colors.headerFontColor,
      },
    },
    MovieDetails: {
      screen: MovieDetails,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerStyle: {
          backgroundColor: Colors.headerBackgroundColor,
          borderBottomColor: Colors.headerFontColor,
          borderBottomWidth: 0,
        },
        headerTintColor: Colors.headerFontColor,
      }),
    },
  },
  {
    initialRouteName: 'MovieList',
  },
  {
    headerMode: 'none',
  },
);

const movieDBSource = 'https://api.themoviedb.org/';
const movies = '3/movie/';
const type = 'popular?';
const movieCollectionCall = movies + type;
const apiKey = 'api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&page=';
const pageCall = '&page=';

const newMovieCollectionRequest = movieDBSource + movieCollectionCall + apiKey + pageCall;

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movieDBList: [],
      filteredMovies: [],
      page: 1,
    };

    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  componentDidMount() {
    this.fetchNextPage();
  }

  async fetchNextPage() {
    const { page, movieDBList } = this.state;
    const query = newMovieCollectionRequest + page;
    const response = await fetch(query);
    const responseJson = await response.json();
    const mSet = new Set([...movieDBList.map(m => m.id)]);
    const plusSet = responseJson.results.filter(m => !mSet.has(m.id));
    const newResults = movieDBList.concat(plusSet);

    this.setState({
      isLoading: false,
      movieDBList: newResults,
      filteredMovies: newResults,
      page: page + 1,
    });
  }

  filterMovies(text) {
    const filterText = text;
    const { movieDBList } = this.state;
    const allMovies = movieDBList;
    const filteredMovies = allMovies
      .filter(m => m.title
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1);
    this.setState({
      filteredMovies,
      searchText: text,
    });
  }

  render() {
    const {
      isLoading,
      searchText,
      movieDBList,
      page,
      filteredMovies,
    } = this.state;
    if (isLoading) {
      return (
        <View style={styles.screen}>
          <ActivityIndicator size="large" color="#888899" />
        </View>
      );
    }

    return (
      <Routes
        screenProps={{
          screenProps: searchText,
          movieDBList,
          filteredMovies,
          filterMovies: this.filterMovies,
          page,
          isLoading,
          fetchNextPage: this.fetchNextPage,
          refreshing: isLoading,
        }}
      />
    );
  }
}
