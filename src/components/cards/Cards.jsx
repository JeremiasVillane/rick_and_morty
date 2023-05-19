import Card from '../card/Card';

export default function Cards({ characters, onClose }) {
  const cardContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: '3rem'
  }
  return (
    <div style={cardContainer}>
      { characters.map(character => (
        <Card
        id = {character.id}
        key = {character.id}
        name = {character.name}
        status = {character.status}
        species = {character.species}
        gender = {character.gender}
        origin = {character.origin.name}
        image = {character.image}
        onClose = {onClose}
        />
        )) }
    </div>
  );
}
