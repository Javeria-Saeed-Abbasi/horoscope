import React ,{useState} from 'react';
import {useEffect} from 'react'
import { FaPlus } from 'react-icons/fa';
import mainCard from './mainCard.css';
import plus_img from '../images/icon-plus.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import aztroApi from '../../src/api/aztroApi';
import axios from 'axios';
import zodiacImage from './zodiacImages';
import aquarius from '../images/aquarius.png';
import pisces from '../images/pisces.png';
import cancer from '../images/cancer.png';
import capricorn  from '../images/capricorn.png';
import gemini from '../images/gemini.png';
import leo from '../images/leo.png';
import libra from '../images/libra.png';
import sagittarius from '../images/sagittarius.png';
import scorpio from '../images/scorpio.png';
import taurus from '../images/taurus.png';
import virgo from '../images/virgo.png';
import aries from '../images/aries.png';

 const MainCard = () => {


  const [select1, setSelect1] = useState(null);
  const [select2, setSelect2] = useState(null);

  const handleChange = (e) =>{
    console.log(e.value);
    setSelect1(e.value)
  }
  const handleChange1 = (e) =>{
    console.log(e.value);
    setSelect2(e.value)
  }

  const handleSubmit = async () =>{
    const resp = await axios.post (`https://aztro.sameerkumar.website/?sign=${select1}&day=${select2}`);
    console.log(resp);
    console.log(resp.data.compatibility);
  }

    const options = [
        { value: 'capricorn', label: 'Capricorn' },
        { value: 'cancer', label: 'Cancer' },
        { value: 'sagittarius', label: 'Sagittarius' },
        { value: 'pisces', label: 'Pisces' },
        { value: 'aries', label: 'Aries' },
        { value: 'gemini', label: 'Gemini' },
        { value: 'taurus', label: 'Taurus' },
        { value: 'virgo', label: 'Virgo' },
        { value: 'leo', label: 'Leo' },
        { value: 'scorpio', label: 'Scorpio' },
        { value: 'aquarius', label: 'Aquarius' },
        { value: 'libra', label: 'Libra' },
      ]
    const options2 = [
        { value: 'today', label: 'Today' },
        { value: 'tomorrow', label: 'Tomorrow' },
        { value: 'yesterday', label: 'Yesterday' }
      ]
  return (
    <div className='wrapper'>
      <div className='d-flex justify-content-center card card2 mb-3'>
          <div className='row w-100'>
            <div className='col-lg-2'>
              <div className='aquar'>
              <img src={aquarius} alt=""/>
              </div>
            </div>
            <div className='col-lg-2'>
              <div className='aquar'>
              <img src={aries} alt=""/>
              </div>
            </div>
            <div className='col-lg-2'>
              <div className='aquar'>
              <img src={capricorn} alt=""/>
              </div>
            </div>
            <div className='col-lg-2'>
              <div className='aquar'>
              <img src={pisces} alt=""/>
              </div>
            </div>
            <div className='col-lg-2'>
              <div className='aquar'>
              <img src={cancer} alt=""/>
              </div>
            </div>
            <div className='col-lg-2'>
              <div className='aquar'>
              <img src={libra} alt=""/>
              </div>
            </div>
          </div>
      </div>
    <div className='d-flex justify-content-center card card1'> 
        <div className='row w-100'>
        <div className='col-lg-4 mx-auto'>
          <Select options={options} onChange={(e) => handleChange(e)}/>
          </div>
          <div className='col-lg-2 mx-auto text-center'>
              <img src={plus_img} alt="plus"/>
          </div>
          <div className='col-lg-4 mx-auto'>
          <Select options={options2} onChange={(e) => handleChange1(e)}/>
          </div>
            <div className='sbmt-btn my-3 d-flex justify-content-center'>
              <button type='submit' onClick={() => handleSubmit()}>Check Compatibility</button>
            </div>
        </div>
    </div> 

    </div>


    
  )
}
 export default MainCard