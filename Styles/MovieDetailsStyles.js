import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../Themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: Colors.movieDetailsBackgroundColor,
  },
  details: {
    position: 'absolute',
    bottom: 0,
    height: Metrics.sectionLarge,
    backgroundColor: Colors.primaryBackgroundTransparent,
  },
  overview: {
    marginBottom: Metrics.marginVertical * 2,
    padding: Metrics.baseMargin * 2,
    color: Colors.primaryWhite,
    textAlign: 'justify',
  },
  title: {
    fontWeight: 'bold',
    marginVertical: Metrics.marginVertical,
    color: Colors.primaryWhite,
    textAlign: 'center',
  },
  image: {
    position: 'absolute',
    marginLeft: Metrics.baseMargin,
    marginRight: Metrics.baseMargin,
    top: 0,
    right: 20,
    bottom: 120,
    left: 20,
  },
  detailBars: {
    alignSelf: 'flex-start',
    marginLeft: 27,
  },
});

export default styles;
