import './App.css';
import Main_card from './components/Main_card';
import api from '../src/api/aztroApi';
import "bootstrap/dist/css/bootstrap.css";
import main_card_css from './components/main_card.css';

const App = () => {
  const handleSubmit = async (searchTerm) => {
    console.log(searchTerm)

    try {
      const res = await api.get('search', {
        params: {
          sign: 'capricorn',
          day: 'today',
          key: '97a2369ee1msh0bdb988aa9cec57p10b049jsnca3a82146c45',
          host: 'sameer-kumar-aztro-v1.p.rapidapi.com'
        },
      })
      
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='bg-1'>
      <Main_card/>
    </div>
  );
}

export default App;
