import { Link } from 'react-router-dom';
import { useState } from 'react'
import './register.css'
import { useDispatch } from 'react-redux';
import { registerAction } from '../../redux/register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const onRegister = () => {
    dispatch(registerAction( {name, lastName, email, password}))    
  }

  return(
      <div className='register-container'>
        <div className='register__section-1'></div>
        <form className='register'>
          <div className='register__section-2'>
            <div className='register__image'>
              <img src="https://img.icons8.com/external-ddara-lineal-ddara/50/FFFFFF/external-registration-medical-ddara-lineal-ddara.png" alt='register-img'/>
            </div>
            <h2 className='register__title'>Registrate</h2>
          </div>
          <div className='register__section-3'>
            <label htmlFor="nombre">
              <p className='input__name'>Nombre</p>
              <input 
                type="text" 
                name='nombre'
                placeholder='Nombre' 
                value={name}
                onChange={handleNameChange}/>
            </label>
            <label htmlFor="apellido">
            <p className='input__name'>Apellido</p>
              <input
                type="text"
                name='apellido'
                placeholder='Apellido'
                value={lastName}
                onChange={handleLastNameChange}
                />
            </label>
            <label htmlFor="email">
            <p className='input__name'>Email</p>
              <input
                type="email" 
                name='email' 
                placeholder='Email'
                value={email}
                onChange={handleEmailChange}
                />
            </label>
            <label htmlFor="contraseña">
            <p className='input__name'>Contraseña</p>
              <input 
                type="password" 
                name='contraseña' 
                placeholder='Contraseña'
                value={password}
                onChange={handlePasswordChange}
                />
            </label>
          </div>
          <div className='register__section-4'>
            <button onClick={onRegister} className='btn-register-2' type='button'>Registrarse</button>
          </div>
          <div className='register__section-5'>
            <p>Ya tenes una cuenta? <Link className='btn__register' to='/login'>Log In</Link> </p>
          </div>
        </form>

        <ToastContainer/>
    
      </div>
  );
};

export default Register;