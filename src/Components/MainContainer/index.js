import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Album from '../Album';
import AlbumDetail from '../AlbumDetail';

const MainContainer = () => {
  let albumS = null;
  const [albums, setAlbums] = useState([]);
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const album = await axios.get(
        'https://jsonplaceholder.typicode.com/albums',
      );

      const albumPhotos = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
      );

      await getDataOfAlbumPhotos(album.data, albumPhotos.data);
    } catch (error) {
      console.log(error);
    }
  };

  function getDataOfAlbumPhotos(albumS, albumPhotos) {
    try {
      for (albumP of albumS) {
        const albumN = albumPhotos.filter(
          (albumPhoto) => albumPhoto.albumId === albumP.id,
        );
        albumP['thumbnailUrl'] = albumN[0].thumbnailUrl;
        albumP['url'] = albumN[0].url;
      }

      setAlbums(albumS);
      setLoaded(true);
    } catch (error) {
      setLoaded(true);
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      {loaded ? (
        <>
          {currentAlbum ? (
            <>
              <AlbumDetail
                album={currentAlbum}
                setCurrentAlbum={setCurrentAlbum}
              />
            </>
          ) : (
            <>
              <Text style={styles.listTitle}>Lista de Albums</Text>
              <ScrollView>
                {albums.map((album) => (
                  <Album
                    setCurrentAlbum={setCurrentAlbum}
                    key={album.id}
                    album={album}
                  />
                ))}
              </ScrollView>
            </>
          )}
        </>
      ) : (
        <ActivityIndicator
          color="#bc2b78"
          size="large"
          style={styles.activityIndicator}
        />
      )}
    </View>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  listTitle: {
    fontWeight: 'bold',
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },

  detailTitle: {
    fontWeight: 'bold',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 10,
    fontSize: 20,
    color: 'black',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
});
