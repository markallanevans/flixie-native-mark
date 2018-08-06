import React, { PureComponent } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import DetailBar from './DetailBar'

import styles from '../Styles/MovieDetailsStyles'

class MovieDetails extends PureComponent {
  render() {
    const { navigation } = this.props
    const { params } = navigation.state
    const img = {
      uri: `https://image.tmdb.org/t/p/w500/${params.poster_path}`
    }
    const contents = [
      {
        title: 'Released: ',
        detail: params.release_date
      },
      {
        title: 'Popularity: ',
        detail: params.popularity.toFixed(0).toString()
      },
      {
        title: 'Score: ',
        detail: params.vote_average.toFixed(1).toString()
      }
    ]
    const details = contents.map((item, index) => (
      <DetailBar
        title={item.title}
        detail={item.detail}
        key={index.toString()}
        widthIndex={index}
      />
    ))
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={img} />{' '}
        <View style={styles.detailBars}> {details} </View>{' '}
        <ScrollView style={styles.details} alwaysBounceVertical={false}>
          <Text style={styles.title}> {params.title} </Text>{' '}
          <Text style={styles.description}> {params.overview} </Text>{' '}
        </ScrollView>{' '}
      </View>
    )
  }
}

export default MovieDetails

MovieDetails.propTypes = {
  navigation: PropTypes.object.isRequired
}
