import React, { useState, useEffect } from 'react';
import { SectionList, StyleSheet } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import axios from 'axios';
import PokemonDetails from './PokemonDetails';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  }

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  }

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then(response => {
        // Group Pokemon by type
        const groupedPokemon = response.data.pokemon.reduce((acc, pokemon) => {
          const type = pokemon.type[0];
          if (!acc[type]) {
            acc[type] = [];
          }
          acc[type].push(pokemon);
          return acc;
        }, {});

        // Convert grouped Pokemon to array of section objects
        const sections = Object.keys(groupedPokemon).map(type => ({
          title: type,
          data: groupedPokemon[type]
        }));

        setPokemonList(sections);
      })
      .catch(error => console.error(error))
  }, []);

  return (
    <>
      <SectionList
        sections={pokemonList}
        renderItem={({ item }) => (
          <Card style={styles.cardContainer}>
            <Card.Title style={styles.cardTitle}>{item.name}</Card.Title>
            <Card.Image source={{ uri: item.img }} style={styles.cardImage} />
            <Button
              icon={<Icon name='touch-app' color='#ffffff' />}
              buttonStyle={{ borderRadius: 100, marginLeft: 0, marginRight: 0, marginBottom: 0 ,color:'black'}}
              title='VIEW DETAILS'
              onPress={() => handleSelectPokemon(item)} />
          </Card>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Card.Title style={styles.sectionTitle}>{title}</Card.Title>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {selectedPokemon && (
        <PokemonDetails isVisible={true} pokemon={selectedPokemon} onClose={handleCloseModal} />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardImage: {
    width: 80,
    height: 80,
    resizeMode: 'center',
    paddingLeft: 300
  },
  cardContainer: {
    borderWidth: 4,
    borderColor: 'blue',
    margin: 10,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color:'#e04834',
    backgroundColor: '#fccd03',
    padding: 0,
    borderWidth: 4,
    marginTop:20,
    borderColor: '#1a2fa4',
    borderRadius:20,
    margin:10
  },
});

export default PokemonList;
