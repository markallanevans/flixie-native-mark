import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import MovieDetails from '../components/MovieDetails'
import MoviePage from '../components/MoviePage'
import { Colors, Fonts, Metrics } from '../Themes/index'

const headerStyle = {
  backgroundColor: Colors.headerBackgroundColor,
  borderBottomColor: Colors.headerFontColor,
  borderBottomWidth: 0
}

const Routes = createStackNavigator(
  {
    MoviePage: {
      screen: MoviePage,
      navigationOptions: {
        title: 'Time to get your Flixie on!',
        headerStyle,
        headerTitleStyle: {
          ...Fonts.style.h4,
          backgroundColor: Colors.transparentBlack,
          width: Metrics.screenWidth,
          marginLeft: Platform.OS !== 'ios' ? 0 : null,
          textAlign: 'center'
        },
        headerTintColor: Colors.headerFontColor
      }
    },
    MovieDetails: {
      screen: MovieDetails,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerStyle,
        headerTintColor: Colors.headerFontColor
      })
    }
  },
  {
    initialRouteName: 'MoviePage'
  },
  {
    headerMode: 'none'
  }
)

export default Routes
