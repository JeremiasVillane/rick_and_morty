import styles from './Form.module.css';
import { useState } from 'react';
import validation from './validation';


export default function Form(props) {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    
    const [errors, setErrors] = useState({});

    const handleChange = event => {
        const { name, value } = event.target;
        setUserData({
          ...userData,
          [name]: value  // ES6: propiedades dinámicas
        });
        setErrors(validation({
          ...userData,
          [name]: value
        }))
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
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            {/* <label htmlFor='email'>EMAIL</label> */}
            <input className={styles.loginInput} name='email' value={userData.email} type='text' onChange={handleChange} placeholder='EMAIL' />
            <br/>
            {errors.email && <p>{errors.email}</p>}
            <br/>
            {/* <label htmlFor='password'>PASSWORD</label> */}
            <input className={styles.loginInput} name='password' value={userData.password} type='password' onChange={handleChange} placeholder='PASSWORD' />
            <br/>
            {errors.password && <p>{errors.password}</p>}
            <br/>
            <button className={styles.loginButton} type='submit'>
              <span className={styles.loginButtonTransition}></span>
              <span className={styles.loginButtonLabel}>Submit</span>
            </button>
        </form>
      </div>
    )
}