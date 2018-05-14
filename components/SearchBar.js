import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    fontSize: 20,
    padding: 10,
  },
});

const SearchBar = props => (
  <View>
    <TextInput
      style={styles.searchBar}
      value={props.searchText}
      onChangeText={text => props.setSearchText(text)}
      placeholder="Search..."
    />
  </View>
);

SearchBar.propTypes = {
  searchText: PropTypes.string,
  setSearchText: PropTypes.func,
};

export default SearchBar;
