import { StyleSheet } from 'react-native';
import { Colors } from '../Themes';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.transparent,
  },
  navBar: {
    flexDirection: 'row',
  },
  navBarRight: {
    flex: 1,
    backgroundColor: Colors.listGridIconBackgroundColor,
  },
  gridToggleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    backgroundColor: Colors.transparent,
  },
});

export default styles;