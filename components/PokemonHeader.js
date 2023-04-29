import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

const PokemonHeader = () => {
  return (
    <Header
      containerStyle={styles.headerContainer}
      centerComponent={<Image source={require('../assets/pokemon-logo.jpg')} style={styles.logo} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 5,
    borderBottomColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 60,
    resizeMode: 'contain',
  },
});

export default PokemonHeader;