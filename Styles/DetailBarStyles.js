import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../Themes'

const styles = StyleSheet.create({
  detailBar: {
    flexDirection: 'row',
    backgroundColor: Colors.primaryBackgroundTransparent,
    borderLeftWidth: 3,
    borderBottomWidth: 3,
    borderLeftColor: Colors.transparentWhite,
    borderBottomColor: Colors.transparentWhite,
    marginBottom: Metrics.marginHorizontal,
    paddingLeft: Metrics.marginVertical,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 30
  },
  detailBarText: {
    ...Fonts.style.h6,
    color: Colors.primaryWhite
  }
})

export default styles
