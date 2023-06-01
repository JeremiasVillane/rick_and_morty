import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';

export default function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '1Password';
   
   const login = (userData) => {
      setAccess(true);
      navigate('/home');
      // if (userData.password === PASSWORD && userData.email === EMAIL) {
      //    setAccess(true);
      //    navigate('/home');
      // } else {
      //    alert(`Wrong email or password!`)
      // }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
      

   const onSearch = (id) => {
      const characterId = characters.filter(character => character.id === +id);
      //! Cambiar alerts por modals (¿usando un portal?)
      if(characterId.length) return alert('The character already exists!');
      if(id < 1 || id > 826) return alert('There is no character with that id!');
      axios(`http://localhost:3001/rickandmorty/character/${id}`)    // https://rickandmortyapi.com/api/character/${id}
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('There is no character with that id!');
         }
      });
   }
   
   const onClose = id => {
      setCharacters(characters.filter(character => character.id !== +id))
   }


   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess} />}
         <Routes>
            <Route exact path='/' element={<Form login={login} />} />
            <Route 
               path='/home' 
               element={<Cards characters={characters} 
               onClose={onClose} />}
            />
            <Route path='/favorites' element={<Favorites characters={characters} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>
      </div>
   );
}
