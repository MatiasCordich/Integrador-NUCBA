import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../redux/api';
import { useEffect } from 'react'
import './news.css'

const News = () => {


    const dispatch = useDispatch()
    const {news}  = useSelector((state) => state.news)


    useEffect(() => {
        dispatch(getNews({news}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);



    return(
        <section>
            <h1 className='section__title'>News</h1>

            <div className='cards-container'>

                <div className='cards-flex'>
                    {news.news?.map( (n, index) => {
                        return <div className='cards' key={index}>
                            <h4 className='card__subtitle'>{n.source.name}</h4>
                            <h2 className='card__title'>{n.title}</h2>
                            <div className='card__image'>
                                <img  src={n.urlToImage} alt="news" style={{width:'100%', height:'100%', objectFit:'cover'}} />
                            </div>
                    
                        <p className='card__text'>{n.description}</p>
                        <a className='card__link' href={n.url} target='__blank'>
                            <img style={{objectFit:'scale-down'}} src="https://img.icons8.com/ios-filled/20/fafafa/link--v1.png" alt='link'/>
                            Link
                        </a>
                    
                </div>})}
                </div>



            </div>
        </section>
        
    );
}

export default News