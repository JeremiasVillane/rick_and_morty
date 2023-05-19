import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleChange = event => {
      const { value } = event.target;
      setId(value);
   };

   const handleSearch = () => {
      onSearch(id);
      setId('');
   };

   return (
      <div className={styles.divSearch}>
         <input 
          className={styles.inputSearch} 
          type='text' 
          name='search'
          id='search'
          value={id}
          onChange={handleChange} />
         <button 
            className={styles.buttonAdd} 
            onClick={handleSearch}>Agregar</button>
      </div>
   );
}
