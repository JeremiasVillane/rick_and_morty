import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';

export default function App() {
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'unaPassword';
   
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
      
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   const onClose = id => {
      setCharacters(characters.filter(character => character.id !== Number(id)))
   }

   const location = useLocation();

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route exact path='/' element={<Form login={login} />} />
            <Route 
               path='/home' 
               element={<Cards characters={characters} 
               onClose={onClose} />}
            />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>
      </div>
   );
}
