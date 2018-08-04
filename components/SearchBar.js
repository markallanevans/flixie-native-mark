import React, { PureComponent } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '../Themes';
import styles from '../Styles/SearchBarStyles';

class SearchBar extends PureComponent {
  render() {
    const { setSearchText } = this.props;
    return (
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchBarText}
          autoCapitalize="none"
          placeholderTextColor={Colors.searchBarBackgroundColor}
          onChangeText={text => setSearchText(text)}
          placeholder="Search..."
        />
      </View>
    );
  }
}

SearchBar.propTypes = {
  setSearchText: PropTypes.func.isRequired,
};

export default SearchBar;
