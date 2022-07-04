import './App.css';
import MainCard from './components/MainCard';
import api from '../src/api/aztroApi';
import "bootstrap/dist/css/bootstrap.css";
import mainCardCss from './components/mainCard.css';

const App = () => {

  return (
    <div className='bg-1'>
      <MainCard/>
    </div>
  );
}

export default App;
