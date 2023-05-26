import { useState, useRef } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');
   const inputRef = useRef(null);

   const handleChange = event => {
      const { value } = event.target;
      setId(value);
   };

   const handleSearch = (event) => {
      event.preventDefault();
      onSearch(id);
      setId('');                       //* Luego de buscar un personaje el campo de búsqueda se borra...
      inputRef.current.focus();        //* ...y el cursor se mantiene en el campo de búsqueda
   };

   const handleKeypress = event => {   //* Busca al presionar la tecla Enter
      if (event.key === 'Enter') {
        handleSearch(event);
      }
    };

   return (
      <div className={styles.divSearch}>
         <input 
            ref={inputRef}
            className={styles.inputSearch} 
            type='text' 
            name='search'
            id='search'
            value={id}
            onChange={handleChange}
            onKeyPress={handleKeypress} />
         <button 
            className={styles.buttonAdd} 
            onClick={handleSearch}>Agregar</button>
      </div>
   );
}
