import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

import flex from '../../styles';

export default class Album extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.setCurrentAlbum(this.props.album)}
        style={flex.container}>
        <SafeAreaView style={flex.list}>
          <Text style={styles.title}>{this.props.album.title}</Text>
          <Image
            style={styles.tinyLogo}
            source={{uri: this.props.album.thumbnailUrl}}></Image>
        </SafeAreaView>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 2,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  body: {
    color: '#333',
  },
  tinyLogo: {
    width: 200,
    height: 40,
  },
});
//export default Album;
