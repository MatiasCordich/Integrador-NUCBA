import { useSelector } from 'react-redux'

const NewsCards = () => {

    const {news} = useSelector((state)=> state.news)
  return (
    <div>
        <div className='news__container'>
            
        </div>
    </div>
  )
}

export default NewsCards