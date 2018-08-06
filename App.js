import React from 'react'
import { ActivityIndicator, View, Platform } from 'react-native'
import Routes from './navigation/Routes'
import styles from './Styles/MainAppStyles'

const movieDBSource = 'https://api.themoviedb.org/'
const movies = '3/movie/'
const type = 'popular?' // top_rated, upcoming, popular, now_playing
const apiKey = 'api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&page='
const pageCall = '&page='

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      popular: {
        searchString: 'popular',
        title: 'Popular',
        movieDBList: [],
        filteredMovies: [],
        page: 1
      },
      top_rated: {
        searchString: 'top_rated',
        title: 'Top Rated',
        movieDBList: [],
        filteredMovies: [],
        page: 1
      },
      now_playing: {
        searchString: 'now_playing',
        title: 'Now Playing',
        movieDBList: [],
        filteredMovies: [],
        page: 1
      }
    }

    // this.fetchNextPage = this.fetchNextPage.bind(this)
    this.filterMovies = this.filterMovies.bind(this)
  }

  componentDidMount() {
    this.fetchNextPage('popular')
    this.fetchNextPage('top_rated')
    this.fetchNextPage('now_playing')
  }

  fetchNextPage = async category => {
    const { page, movieDBList, searchString, title } = this.state[category]
    const newMovieCollectionRequest =
      movieDBSource + movies + category + '?' + apiKey + pageCall
    const query = newMovieCollectionRequest + page
    const response = await fetch(query)
    const responseJson = await response.json()
    const mSet = new Set([...movieDBList.map(m => m.id)])
    const plusSet = responseJson.results.filter(m => !mSet.has(m.id))
    const newResults = movieDBList.concat(plusSet)
    this.setState({
      isLoading: false,
      [category]: {
        searchString,
        title,
        movieDBList: newResults,
        filteredMovies: newResults,
        page: page + 1
      }
    })
  }

  filterMovies(text) {
    const filterText = text
    const { movieDBList } = this.state
    const allMovies = movieDBList
    const filteredMovies = allMovies.filter(
      m => m.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
    )
    this.setState({
      filteredMovies,
      searchText: text
    })
  }

  render() {
    const { isLoading, searchText } = this.state
    const { filteredMovies, movieDBList, page } = this.state.popular
    const { popular } = this.state
    const { now_playing } = this.state
    const { top_rated } = this.state
    if (isLoading) {
      return (
        <View style={styles.screen}>
          <ActivityIndicator size="large" color="#888899" />
        </View>
      )
    }

    return (
      <Routes
        screenProps={{
          screenProps: searchText,
          movieDBList,
          popular,
          now_playing,
          top_rated,
          filteredMovies,
          filterMovies: this.filterMovies,
          page,
          isLoading,
          fetchNextPage: category => this.fetchNextPage(category),
          refreshing: isLoading
        }}
      />
    )
  }
}
