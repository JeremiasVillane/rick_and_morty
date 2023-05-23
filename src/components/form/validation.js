export default function validation(input) {  // validation(name, value)
    let errors = {};

    const regexEmail = /\S+@\S+\.\S+/;
    const regexPassword = new RegExp('[0-9]');
    
    if(!regexEmail.test(input.email)) {
        errors.email = 'Debe ingresar un email válido';
    }
    if(!input.email) {
        errors.email ='Debe ingresar un nombre';
    }
    if(input.email.length > 35) {
        errors.email = 'No mayor a 35 caracteres';
    }

    if(!regexPassword.test(input.password)) {
        errors.password = 'Al menos un número';
    }
    if(input.password.length < 6 || input.password.length > 10) {
        errors.password = 'Entre 6 y 10 caracteres';
    }

    // if (name === 'email') {
    //     if(!regexEmail.test(value)) {
    //         errors = { ...errors, email: 'Debe ingresar un email válido' };
    //     } else {
    //         errors.email = "";
    //     }
        
    // }
  
    // if (name === 'password') {
    //     if(value.length < 6) {
    //         errors = { ...errors, password: 'Debe tener al menos 6 caracteres' };
    //     } else {
    //         errors.password = "";
    //     }
    // }
    return errors;
}
