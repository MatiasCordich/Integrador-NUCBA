import './about.css'
import newsReporter from './clip-942.png'
import phone from './clip-chatting.png'
import computer from './clip-1059.png'


const About = () => {
  return(
      <section className='about'>
        <div className='about__content'>
          <h2 className='about__content-title'>Las notcias más importantes, en una sola página</h2>
          <div className='about__content-files'>
            <div className='about__image'>
              <img className='image-ab'src={newsReporter} alt="reporter" />
            </div>
            <p className='about__content-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vero nam cum suscipit deleniti facilis sit quaerat quibusdam facere, sunt consequatur sequi voluptates, deserunt debitis ea similique nemo, non voluptatem.</p>
          </div>

        </div>

        <div className='about__content'>
          <h2 className='about__content-title'>Conocé nuestra API.</h2>
          <div className='about__content-files-2'>
            <div className='about__image'>
              <img className='image-ab' src={computer} alt="computer" />
            </div>
            <p className='about__content-text'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum beatae unde commodi vel dolorem harum tempora labore, earum saepe reprehenderit eos error quo, deserunt officiis! Reprehenderit dolor commodi fugit aliquam.
            </p>
          </div>  
        </div>



        <div className='about__content'>
          <h2 className='about__content-title'>Descargá nuestra app.</h2>
          <div className='about__content-files'>
            <div className='about__image'>
            <img className='image-ab'src={phone} alt="phone-app" />
            </div>
            <div className='about__content-description'>
              <p className='about__content-text widther'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className='about__content-btnApp'>
                <div className='apple-btn'></div>
                <div className='android-btn'></div>
              </div>
            </div>

          </div>

        </div>
      </section>
  );
};

export default About;
