import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../Themes'

const styles = StyleSheet.create({
  searchBar: {
    flex: 7
  },
  searchBarText: {
    ...Fonts.style.h6,
    backgroundColor: Colors.searchBarBackgroundColor,
    color: Colors.searchBarFontColor,
    height: Fonts.size.h6 * 2.5,
    padding: Fonts.size.h6 / 2
  }
})

export default styles
