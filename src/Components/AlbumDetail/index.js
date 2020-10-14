import React from 'react';
import {SafeAreaView, Button, View} from 'react-native';
import flex from '../../styles';

import styled from '@emotion/native';

const Title = styled.Text`
  font-size: 20;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.blue};
`;

const Image = styled.Image`
  padding: 4px;
  height: 150;
  width: 150;
`;

const AlbumDetail = ({album, setCurrentAlbum}) => {
  return (
    <SafeAreaView>
      <View style={flex.toolbar}>
        <Button onPress={() => setCurrentAlbum(null)} title="Atras" />
        <Title>Detalle del álbum</Title>
      </View>
      <View style={flex.container}>
        <Title>{album.title}</Title>
        <Image source={{uri: album.url}}></Image>
      </View>
    </SafeAreaView>
  );
};

export default AlbumDetail;
