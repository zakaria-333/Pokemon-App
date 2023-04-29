import React from 'react';
import { SafeAreaView } from 'react-native';
import PokemonList from './components/PokemonList';
import PokemonHeader from './components/PokemonHeader';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonHeader/>
      <PokemonList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#68c0f2',
  }
});

export default App;