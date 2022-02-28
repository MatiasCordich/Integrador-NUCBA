import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useDispatch} from 'react-redux'
import './login.css'
import { loginAction } from '../../redux/auth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {

  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')

  const dispatch = useDispatch()



  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const onLogin = () => {
    dispatch(loginAction( {email, password}))
       
  }



  return(
      <div className='login__container'>
        <form className='login'>
          <div className='login__content-1'>
            <div className='login__img'>
             <img className='image' src="https://img.icons8.com/dotty/80/FFFFFF/login-rounded-right.png" alt='login-img'/>
            </div>
            <h2 className='login__title'>Log In</h2>
          </div>
          <div className='login__content-2'>
            <label htmlFor="email">
              <p className='input-title'>Email</p>
              <input 
              type="email" 
              name='email' 
              value={email} 
              placeholder='Email' 
              onChange={handleEmailChange} 
              />
            </label>
            <label htmlFor="password">
              <p className='input-title'>Password</p>
              <input 
              type="password" 
              name='password' 
              value={password} 
              placeholder='Password' 
              onChange={handlePasswordChange} 
              />
            </label>
            <button onClick={onLogin} className='btn-login-2' type='button'>Log In</button>   
          </div>
          <div className='login__content-3'>
            <p>Log in with</p>
            <div className='btn__content '>
              <a href="https://www.facebook.com/" target='__blank'>
                <img src="https://img.icons8.com/dotty/30/FFFFFF/facebook-new.png" alt='btn-facebook'/>
              </a>
              <a href="https://www.google.com/intl/es-419/gmail/about/" target='__blank'>
                <img src="https://img.icons8.com/dotty/30/FFFFFF/gmail-login.png" alt='btn-gmail'/>
              </a>
            </div>
          </div>
          <p>Nuevo? <Link className='btn__register' to='/register'>Registrarse</Link></p>
          
        </form>

        <div className='login__content-4'></div>

        <ToastContainer />

      </div>
  );
};

export default Login;