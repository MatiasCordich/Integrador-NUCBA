import './home.css'
import { Link } from 'react-router-dom'
import mainImage  from './clip-1064.png'
import secondaryImage from './clip-online-education-2.png'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  return(
    <main className='main'>
      <h1 className='main__title'>
        Noticas las 24 horas del día, los 365 dias del año.
      </h1>
        <section className='main__content'>
              <div className='main__image'>
                <img  className='image-gl' src={mainImage} alt="girl-computer" />
              </div>
              
              <div className='main__content-text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus perspiciatis commodi harum eum soluta dolores fugiat odit laborum iusto quam quasi quaerat dolorem aut accusantium, nam, placeat fugit est.</p>
                <Link className='register__btn' to='/register'>Suscribe</Link>
              </div>
        </section>

        <h2 className='main__subtitle'>Nuevas noticias a cada hora.</h2>

        <section className='main__content-2'>

          

          <div className='main__image'>
            <img className='image-gl' src={secondaryImage} alt="girl-news" />
          </div>

          <div className='main__content-text'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde harum dolorum perspiciatis dicta ratione magni doloremque, quibusdam odio sunt voluptates fugit, asperiores dolorem recusandae repudiandae sit officia debitis delectus? Inventore?</p>
          </div>
          
        </section>

        <ToastContainer/>
          
    </main>
  );
};

export default Home;