import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Detail(props) {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
    
  
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)    // https://rickandmortyapi.com/api/character/${id}
    .then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('There is no character with that id!');
      }
    });
    return setCharacter({});
  }, [id]);
  
  return (
    <div>
      <h1>{character?.name}</h1>
      <h2>{character?.status}</h2>
      <h2>{character?.species}</h2>
      <h2>{character?.gender}</h2>
      <h2>{character?.origin?.name}</h2>
      <img src={character?.image} alt={character?.name} />
    </div>
  )
}