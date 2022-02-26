import React from 'react';
import './about.css'


const About = () => {
  return(
      <section className='about'>
        <div className='about__content'>
          <h2 className='about__content-title'>Todos los medios, en una sola página.</h2>
          <div className='about__content-files'>
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_mp6wwkvx.json"  background="transparent"  speed="1"  style={{width: 300, height: 300}} autoplay loop></lottie-player>
            <p className='about__content-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vero nam cum suscipit deleniti facilis sit quaerat quibusdam facere, sunt consequatur sequi voluptates, deserunt debitis ea similique nemo, non voluptatem.</p>
          </div>

        </div>
        <div className='about__content'>
          <h2 className='about__content-title'>Descargá nuestra app.</h2>
          
          <div className='about__content-files'>
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_6KbrZ6.json"  background="transparent"  speed="1"   style={{width: 300, height: 300}}  loop  autoplay></lottie-player>
            <div className='about__content-description'>
              <p className='about__content-text widther'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
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
