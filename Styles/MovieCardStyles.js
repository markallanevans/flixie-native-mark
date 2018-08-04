import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../Themes';

const styles = StyleSheet.create({
  listitem: {
    backgroundColor: Colors.primaryBackgroundColor,
  },
  innercontainerGrid: {
    flex: 1,
    backgroundColor: Colors.primaryBackgroundColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Metrics.gridGap,
  },
  innercontainerList: {
    flex: 1,
    backgroundColor: Colors.primaryBackgroundColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Metrics.marginHorizontal,
    padding: 2,
  },
  image: {
    alignSelf: 'flex-start',
    width: Metrics.image.width,
    height: Metrics.image.height,
  },
  title: {
    flex: 1,
    fontSize: 30,
    color: Colors.primaryWhite,
    backgroundColor: Colors.titleBackgroundColor,
    textAlign: 'left',
    marginVertical: Metrics.baseMargin,
    width: '90%',
  },
  vote_average_container: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    height: Metrics.vote.diameter,
    width: Metrics.vote.diameter,
    marginTop: Metrics.vote.margin,
    marginRight: Metrics.vote.margin,
    backgroundColor: Colors.primaryStrong,
    borderRadius: Metrics.vote.diameter,
    opacity: 0.9,
    borderColor: Colors.primaryWhite,
    borderWidth: 1,
  },
  vote_average_content: {
    color: Colors.primaryWhite,
  },
  caption: {
    flex: 2,
    backgroundColor: Colors.primaryBlack,
    color: Colors.primaryWhite,
    opacity: 0.9,
    padding: Metrics.baseMargin * 2,
    textAlign: 'justify',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    height: Metrics.image.height * 0.9,
  },
  gridView: {
    display: 'none',
  },
});

export default styles;
