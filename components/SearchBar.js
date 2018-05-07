import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create( {
  searchBar: {
    height: 40,
    fontSize: 20,
    padding: 10,
  },
});

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.setSearchText = this.setSearchText.bind(this);
  }

  setSearchText(text) {
    this.setState({
      searchText: text,
    });
    console.log(this.state.searchText);
  }

  render() {
    // const screenProps = this.props.screenProps;
    // const navigate = this.props.navigation.navigate;
    return (
      <View>
       <TextInput
          style={styles.searchBar}
          value={this.state.searchText}
          onChangeText={(text) => this.setSearchText({text})}
          placeholder="Search..." />
      </View>
    );
  }
}

export default SearchBar;

// Add Proptypes...
