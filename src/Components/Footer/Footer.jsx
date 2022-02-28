import './footer.css'

const Footer = () => {
    return(
        <footer className='footer'>
            <div className='footer__content'>
                <h3>Nuestras redes</h3>
                <div className='footer__content-redes'>
                    <a href="https://www.facebook.com/" target='__blank'>
                        <img src="https://img.icons8.com/wired/45/fafafa/facebook-new.png" alt='facebook-icon'/>
                    </a>
                    <a href="https://twitter.com/?lang=es" target='__blank'>
                        <img src="https://img.icons8.com/wired/45/fafafa/twitter-circled.png" alt='twitter-icon'/>
                    </a>
                    <a href="https://www.instagram.com/" target='__blank'>
                        <img src="https://img.icons8.com/wired/45/fafafa/instagram-new--v1.png" alt='instagram-icon'/>
                    </a>
                </div>
            </div>
            <div className='footer__content-2'>
                <p>News Api © 2022</p>
                <p>Made with ❤</p>
            </div>
            <div className='footer__content-3'>
                
                
                <div className='author'>
                   <p className='author__name'>Matias Sio Cordich</p>
                   <div className='author__links'>
                        <a href="https://portfoliov2-kohl.vercel.app/" target='__blank'>
                            <img src="https://img.icons8.com/wired/45/fafafa/briefcase.png" alt='briefcase-img'/>
                        </a>
                        <a href="https://github.com/MatiasCordich/Integrador-NUCBA" target='__blank'>
                            <img src="https://img.icons8.com/wired/45/fafafa/github.png" alt='github-img'/>
                        </a> 
                   </div>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer