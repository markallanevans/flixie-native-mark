import { StyleSheet } from 'react-native';
import { Colors } from '../Themes';

const styles = StyleSheet.create({
  searchBar: {
    flex: 7,
  },
  searchBarText: {
    backgroundColor: Colors.searchBarBackgroundColor,
    color: Colors.searchBarFontColor,
    height: 40,
    fontSize: 20,
    padding: 10,
  },
});

export default styles;
