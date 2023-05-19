import { useState } from 'react';
import validation from './validation';


export default function Form(props) {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({
          ...userData,
          [name]: value
        });
        const updatedErrors = validation(name, value);
        setErrors({
          ...errors,
          ...updatedErrors
        });
      };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
    }

    return(
        <form>
            <label htmlFor='email'>EMAIL</label>
            <input name='email' value={userData.email} type='text' onChange={handleChange} />
            <br/>
            {errors.email && <p>{errors.email}</p>}
            <br/>
            <label htmlFor='password'>PASSWORD</label>
            <input name='password' value={userData.password} type='password' onChange={handleChange} />
            <br/>
            {errors.password && <p>{errors.password}</p>}
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}