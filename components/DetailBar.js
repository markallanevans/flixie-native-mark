import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { Metrics } from '../Themes'

import styles from '../Styles/DetailBarStyles'

const DetailBar = ({ detail, title, widthIndex }) => (
  <View
    style={[
      styles.detailBar,
      { width: Metrics.screenWidth / 2 - widthIndex * 20 }
    ]}>
    <Text style={styles.detailBarText}>{title}</Text>
    <Text style={styles.detailBarText}>{detail}</Text>
  </View>
)

DetailBar.propTypes = {
  detail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  widthIndex: PropTypes.number.isRequired
}

export default DetailBar
