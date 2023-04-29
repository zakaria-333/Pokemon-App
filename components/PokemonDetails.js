import { Card, ListItem, Button, Overlay } from 'react-native-elements';
import { ScrollView, StyleSheet } from 'react-native';


const PokemonDetails = ({ isVisible, pokemon, onClose }) => {
  return (
    <Overlay isVisible={isVisible} onBackdropPress={onClose} overlayStyle={styles.overlay}>
      <Card>
        <ScrollView>
          <Card.Title style={styles.cardTitle}>{pokemon.name}</Card.Title>
          <Card.Image source={{ uri: pokemon.img }} style={styles.cardImage}/>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>Type:</ListItem.Title>
              <ListItem.Subtitle>{pokemon.type.join(', ')}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>Height:</ListItem.Title>
              <ListItem.Subtitle>{pokemon.height}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>Weight:</ListItem.Title>
              <ListItem.Subtitle>{pokemon.weight}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <Button
            title="Close"
            onPress={onClose}
          />
        </ScrollView>
      </Card>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    padding: 20,
    width: '80%',
  },
  cardTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  cardImage: {
    width: 80,
    height: 80,
    resizeMode: 'center',
    paddingLeft:200
  },
});

export default PokemonDetails;

