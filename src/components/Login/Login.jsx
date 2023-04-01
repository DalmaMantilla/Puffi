import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../Login/Login.module.scss'
import { IoIosArrowRoundForward } from "react-icons/io";


export const Login = () => {
  const [email, setEmail] = useState('');
 
  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!email) {
       alert("Este campo es requerido");
    } else if (!email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
      alert('Ingresa una dirección de correo electrónico válida.');
    } else {
        alert('Usted se registro exitosamente')  
        setEmail('')
    }
  };


  const dispatch = useDispatch()

  const register = () => {
      dispatch({
          type : 'REGISTER',
          payload: {
              id: (new Date).getTime(),
              email
          }
      })
  }
   

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        id="email"
        type="text"
        placeholder='Ingresa tu email'
        value={email}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={register}><IoIosArrowRoundForward/></button>
    </form>
  );
};




