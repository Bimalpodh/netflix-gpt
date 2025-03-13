import Header2 from './Header2'
import useNowPlaying from '../hooks/useNowPlaying'
import MainContainer from './BrowseComponent/MainContainer';
import SecondaryContainer from './BrowseComponent/SecondaryContainer';

const Browse = () => {
  useNowPlaying();

  return (
    <div>
      <Header2/>
      <MainContainer/>
      <SecondaryContainer/>



      {/* 
        - Main Section
            - video Background
            - video title

        - secondary Conatiner
            - nmoviesLis * n (rows)
            - cards * n
      
      */}
    </div>
  )
}

export default Browse