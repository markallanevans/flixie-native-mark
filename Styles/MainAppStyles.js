import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../Themes'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: Metrics.mainScreenPadding,
    justifyContent: 'center',
    backgroundColor: Colors.backgroundColor
  }
})

export default styles
