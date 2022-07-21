import './App.css';
import MainCard from './components/MainCard';
import ZodiacDetailsCards from './components/zodiacDetailsCards';
import api from '../src/api/aztroApi';
import "bootstrap/dist/css/bootstrap.css";
import mainCardCss from './components/mainCard.css';

const App = () => {

  return (
    <div>
      <div className='bg-1'>
      <MainCard/>
      </div>
     
      <ZodiacDetailsCards/>
    </div>
  );
}

export default App;
