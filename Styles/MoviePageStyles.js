import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../Themes'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primaryBackgroundColor
  },
  navBar: {
    flexDirection: 'row'
  },
  navBarRight: {
    flex: 1,
    backgroundColor: Colors.listGridIconBackgroundColor
  },
  gridToggleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    backgroundColor: Colors.transparent
  },
  listTitle: {
    ...Fonts.style.h5,
    color: Colors.primaryWhite,
    backgroundColor: Colors.transparent,
    marginLeft: Metrics.marginHorizontal,
    marginVertical: Metrics.marginVertical
  }
})

export default styles
