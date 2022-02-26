import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return(
    <main className='main'>
      <h1 className='main__title'>
        Noticas las 24 horas del día, los 365 dias del año.
      </h1>
        <div className='main__content'>
            <lottie-player className='lottie' src="https://assets5.lottiefiles.com/packages/lf20_rqxo1mki.json"  background="transparent"  speed="1"  style={{width: 300, height: 300}} loop autoplay>
            </lottie-player>
              <div className='main__content-text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus perspiciatis commodi harum eum soluta dolores fugiat odit laborum iusto quam quasi quaerat dolorem aut accusantium, nam, placeat fugit est.</p>
                <Link className='register__btn' to='/register'>Suscribe</Link>
              </div>
        </div>  
    </main>
  );
};

export default Home;