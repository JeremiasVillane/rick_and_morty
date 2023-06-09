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

   // const login = (userData) => {
   //    setAccess(true);
   //    navigate('/home');
   // if (userData.password === PASSWORD && userData.email === EMAIL) {
   //    setAccess(true);
   //    navigate('/home');
   // } else {
   //    alert(`Wrong email or password!`)
   // }
   // }

   // * ASYNC-AWAIT VERSION
   const login = async userData => {
      try {
         // QUICK ACCESS:
         setAccess(true);
         navigate('/home');
         // const { email, password } = userData;
         // const URL = 'http://localhost:3001/rickandmorty/login/';
         // const { access } = (await axios(URL + `?email=${email}&password=${password}`)).data;
         // setAccess(access);
         // access && navigate('/home');
      } catch (error) {
         console.log(error.message);
      }
   };

   // * PROMISE VERSION
   // const login = userData => {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`)
   //    .then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // };

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   const onSearch = async id => {
      try {
         const characterId = characters.filter(character => character.id === id); // ? +id
         if (characterId.length) return alert('The character already exists!');
         if (id < 1 || id > 826) return alert('There is no character with that id!');
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         data.name
            ? setCharacters((oldChars) => [...oldChars, data])
            : window.alert('There is no character with that id!');
      } catch (error) {
         console.log(error.message);
      }
   };

   // * PROMISE VERSION
   // const onSearch = (id) => {
   //    const characterId = characters.filter(character => character.id === +id);
   //    if(characterId.length) return alert('The character already exists!');
   //    if(id < 1 || id > 826) return alert('There is no character with that id!');
   //    axios(`http://localhost:3001/rickandmorty/character/${id}`)    // https://rickandmortyapi.com/api/character/${id}
   //    .then(({ data }) => {
   //       if (data.name) {
   //          setCharacters((oldChars) => [...oldChars, data]);
   //       } else {
   //          window.alert('There is no character with that id!');
   //       }
   //    });
   // }

   const onClose = id => {
      setCharacters(characters.filter(character => character.id !== id))
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
};
