import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../Themes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: Colors.movieDetailsBackgroundColor
  },
  details: {
    position: 'absolute',
    bottom: 0,
    top: Metrics.screenHeight - Metrics.screenHeight / 4,
    backgroundColor: Colors.primaryBackgroundTransparent
  },
  description: {
    ...Fonts.style.description,
    color: Colors.primaryWhite,
    marginBottom: Metrics.marginVertical * 2,
    paddingHorizontal: Metrics.baseMargin * 2,
    paddingVertical: Metrics.baseMargin,
    textAlign: 'justify'
  },
  title: {
    ...Fonts.style.h4,
    marginVertical: Metrics.marginVertical,
    color: Colors.primaryWhite,
    textAlign: 'center'
  },
  image: {
    position: 'absolute',
    marginLeft: Metrics.baseMargin,
    marginRight: Metrics.baseMargin,
    top: 0,
    right: 20,
    bottom: 120,
    left: 20
  },
  detailBars: {
    alignSelf: 'flex-start',
    marginLeft: 27
  }
})

export default styles
