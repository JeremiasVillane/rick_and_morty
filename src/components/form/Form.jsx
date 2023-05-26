import styles from './Form.module.css';
import { useState } from 'react';
import validation from './validation';
import logo from '../../assets/logo.png';


export default function Form(props) {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = event => {
        const { name, value } = event.target;
        setUserData({
          ...userData,
          [name]: value
        });
        setErrors(validation({
          ...userData,
          [name]: value
        }))
        //* Versión anterior:
        // const updatedErrors = validation(name, value);
        // setErrors({
        //   ...errors,
        //   ...updatedErrors
        // });
      };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
    }

    return(
      <div className={styles.divLoginForm}>
        <img src={logo} alt='Rick and Morty' />
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div style={{ position: 'relative', marginTop: '1.5em' }}>
              <input 
                className={styles.loginInput} 
                name='email' 
                value={userData.email} 
                type='text' 
                onChange={handleChange}
                placeholder='EMAIL' />
            <br/>
            <br/>
              <input
                className={styles.loginInput}
                name='password'
                value={userData.password}
                type={showPassword ? 'text' : 'password'}
                onChange={handleChange}
                placeholder='PASSWORD'
              />
              <span 
                style={showPassword ? {color: '#ff5900'} : {color: '#855b2f'} } 
                className={styles.passwordIcon} 
                onClick={() => setShowPassword(!showPassword)}>
                  &#128065;     {/* 👁 //! Cambiar por imagen */}
              </span>
              </div>

              <div>
              {errors.email && (
                <span className= {errors.email 
                  ? (`${styles.error} ${styles.errorPopUp}`)
                  : (`${styles.error}`)
                }>
                {errors.email}
                </span>              
              )}
            {errors.password && (
                <span className= {errors.password 
                  ? (`${styles.error} ${styles.errorPopUp}`)
                  : (`${styles.error}`)
                }>
                {errors.password}
                </span>              
              )}
              </div>
    
            <button className={styles.loginButton} type='submit'>
              <span className={styles.loginButtonTransition}></span>
              <span className={styles.loginButtonLabel}>Submit</span>
            </button>
        </form>
      </div>
    )
}