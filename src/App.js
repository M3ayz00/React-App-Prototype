import Nav from "./components/Nav";
import Promo from './components/Promo';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';
import ReactPlayer from 'react-player';

function App() {
  const vidUrl = "https://www.youtube.com/watch?v=ihZDdExto_I";
  return ( 
    <div className="App" > 
      <Nav/>
      <Promo/>
      <ReactPlayer
        url={vidUrl}
        playing={false}
        controls
        volume={0.5} />
      <Intro1 />
      <Intro2/>
      <Intro3/>
      <Footer/>
    </div> 
  ); 
} 
 
export default App;