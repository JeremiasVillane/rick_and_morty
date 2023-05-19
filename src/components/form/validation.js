export default function validation(name, value) {
    let errors = {};
    
    if (name === 'email') {
        if(!/\S+@\S+\.\S+/.test(value)) {
            errors = { ...errors, email: 'Se requiere un mail' };
        } else {
            errors.email = "";
        }
    }
  
    if (name === 'password') {
        if(value.length < 6) {
            errors = { ...errors, password: 'Debe tener al menos 6 caracteres' };
        } else {
            errors.password = "";
        }
    }
    return errors;
}
