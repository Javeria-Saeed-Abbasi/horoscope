import React, { useState } from 'react';
import { useEffect } from 'react'
import {BrowserRouter as Router,Switch,Routes,Route,Link} from "react-router-dom";
import { FaPlus } from 'react-icons/fa';
import mainCard from './mainCard.css';
import plus_img from '../images/icon-plus.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import aztroApi from '../../src/api/aztroApi';
import axios from 'axios';
import aquarius from '../images/aquarius.png';
import pisces from '../images/pisces.png';
import cancer from '../images/cancer.png';
import capricorn from '../images/capricorn.png';
import gemini from '../images/gemini.png';
import leo from '../images/leo.png';
import libra from '../images/libra.png';
import sagittarius from '../images/sagittarius.png';
import scorpio from '../images/scorpio.png';
import taurus from '../images/taurus.png';
import virgo from '../images/virgo.png';
import aries from '../images/aries.png';

const MainCard = () => {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const day = weekday[current.getDay()];

  // const [select1, setSelect1] = useState(null);
  // const [select2, setSelect2] = useState(null);

  // const handleChange = (e) => {
  //   console.log(e.value);
  //   setSelect1(e.value)
  // }
  // const handleChange1 = (e) => {
  //   console.log(e.value);
  //   setSelect2(e.value)
  // }
  const  handleInput = async (e) => {
    const value1 = e.target.value;
    console.log(e.target.value);
    const resp = await axios.post(`https://aztro.sameerkumar.website/?sign=${value1}&day=today`);
    console.log(resp);
    // color
    const color = resp.data.color;
    console.log(resp.data.color);
    // compatibility
    const compat = resp.data.compatibility;
    console.log(resp.data.compatibility);
    // date-range
    const dateRange = resp.data.date_range;
    console.log(resp.data.date_range);
    // description
    const desc = resp.data.description;
    console.log(resp.data.description);
    // lucky-number
    const lucky_numb = resp.data.lucky_number;
    console.log(resp.data.lucky_number);
    // lucky-time
    const time = resp.data.lucky_time;
    console.log(resp.data.lucky_time);
    // mood
    const mood = resp.data.mood;
    console.log(resp.data.mood);




  }
  // const handleSubmit = async () => {
  //   const resp = await axios.post(`https://aztro.sameerkumar.website/?sign=${select1}&day=today`);
  //   console.log(resp);
  //   console.log(resp.data.compatibility);
  // }


  // const options = [
  //   { value: 'capricorn', label: 'Capricorn' },
  //   { value: 'cancer', label: 'Cancer' },
  //   { value: 'sagittarius', label: 'Sagittarius' },
  //   { value: 'pisces', label: 'Pisces' },
  //   { value: 'aries', label: 'Aries' },
  //   { value: 'gemini', label: 'Gemini' },
  //   { value: 'taurus', label: 'Taurus' },
  //   { value: 'virgo', label: 'Virgo' },
  //   { value: 'leo', label: 'Leo' },
  //   { value: 'scorpio', label: 'Scorpio' },
  //   { value: 'aquarius', label: 'Aquarius' },
  //   { value: 'libra', label: 'Libra' },
  // ]
  // const options2 = [
  //   { value: 'today', label: 'Today' },
  //   { value: 'tomorrow', label: 'Tomorrow' },
  //   { value: 'yesterday', label: 'Yesterday' }
  // ]
  return (
    <div className='wrapper'>
    <div className='container'>
    <h1 className='text-center pt-5 bangerFont'>DAILY HOROSCOPE</h1>
    <h5 className='text-center date-day pb-5'>Today: {date} | Day: {day}</h5>
    <div className='d-flex justify-content-center card card2 mb-3'>
        <div className='row w-100 mb-5 mx-auto'>
          <div className='col-lg-2'>
            <div className='aquar  mb-3'>
              <img src={aquarius} alt="" />
            </div>
            <div className='horo-name text-center'>
              <Router>
              <Link to= "./zodiacDetails.js" className='text-decoration-none'>
              <button type= "submit" value={"aquarius"} onClick={((e)=>{handleInput(e)})}>
            Aquarius
            </button>
              </Link> 
              </Router>
              
  
            </div>
          </div>
          <div className='col-lg-2'>
            <div className='aquar mb-3'>
              <img src={aries} alt="" />
            </div>
            <div className='horo-name text-center'>
            <button type= "submit" value={"aries"} onClick={((e)=>{handleInput(e)})}>
            Aries
            </button>
            </div>
          </div>
          <div className='col-lg-2'>
            <div className='aquar mb-3'>
              <img src={capricorn} alt="" />
            </div>
            <div className='horo-name text-center'>
            <button type= "submit" value={"capricorn"} onClick={((e)=>{handleInput(e)})}>
            Capricorn
            </button>
     
            </div>
          </div>
          <div className='col-lg-2'>
            <div className='aquar mb-3'>
              <img src={pisces} alt="" />
            </div>
            <div className='horo-name text-center'>
            <button type= "submit" value={"pisces"} onClick={((e)=>{handleInput(e)})}>
            Pisces
            </button>
         
            </div>
          </div>
          <div className='col-lg-2'>
            <div className='aquar mb-3'>
              <img src={cancer} alt="" />
            </div>
            <div className='horo-name text-center'>
            <button type= "submit" value={"cancer"} onClick={((e)=>{handleInput(e)})}>
            Cancer
            </button>
           
            </div>
          </div>
          <div className='col-lg-2'>
            <div className='aquar mb-3'>
              <img src={libra} alt="" />
            </div>
            <div className='horo-name text-center'>
           
            <button type= "submit" value={"libra"} onClick={((e)=>{handleInput(e)})}>
            Libra
            </button>
            </div>
          </div>
        </div>
        <div className='row w-100 mx-auto'>
          <div className='col-lg-2'>
            <div className='aquar mb-3'>
              <img src={sagittarius} alt="" />
            </div>
            <div className='horo-name text-center'>
            <button type= "submit" value={"sagittarius"} onClick={((e)=>{handleInput(e)})}>
            Sagittarius
            </button>
            
            </div>
          </div>
          <div className='col-lg-2'>
            <div className='aquar mb-3'>
              <img src={gemini} alt="" />
            </div>
            <div className='horo-name text-center'>
            <button type= "submit" value={"gemini"} onClick={((e)=>{handleInput(e)})}>
            Gemini
            </button>
            </div>
          </div>
          <div className='col-lg-2'>
            <div className='aquar mb-3'>
              <img src={scorpio} alt="" />
            </div>
            <div className='horo-name text-center'>
            <button type= "submit" value={"scorpio"} onClick={((e)=>{handleInput(e)})}>
            Scorpio
            </button>
           
            </div>
          </div>
          <div className='col-lg-2'>
            <div className='aquar mb-3'>
              <img src={taurus} alt="" />
            </div>
            <div className='horo-name text-center'>
            <button type= "submit" value={"taurus"} onClick={((e)=>{handleInput(e)})}>
            Taurus
            </button>
        
            </div>
          </div>
          <div className='col-lg-2'>
            <div className='aquar mb-3'>
              <img src={virgo} alt="" />
            </div>
            <div className='horo-name text-center'>\
            <button type= "submit" value={"virgo"} onClick={((e)=>{handleInput(e)})}>
            Virgo
            </button>
           
            </div>
          </div>
          <div className='col-lg-2'>
            <div className='aquar mb-3'>
              <img src={leo} alt="" />
            </div>
            <div className='horo-name text-center'>
            <button type= "submit" value={"leo"} onClick={((e)=>{handleInput(e)})}>
            Leo
            </button>
     
            </div>
          </div>
        </div>
      </div>
    </div>
 
      
      {/* <div className='d-flex justify-content-center card card1'>
        <div className='row w-100'>
          <div className='col-lg-4 mx-auto'>
            <Select options={options} onChange={(e) => handleChange(e)} />
          </div>
          <div className='col-lg-2 mx-auto text-center'>
            <img src={plus_img} alt="plus" />
          </div>
          <div className='col-lg-4 mx-auto'>
            <Select options={options2} onChange={(e) => handleChange1(e)} />
          </div>
          <div className='sbmt-btn my-3 d-flex justify-content-center'>
            <button type='submit' onClick={() => handleSubmit()}>Check Compatibility</button>
          </div>
        </div>
      </div> */}

    </div>



  )
}
export default MainCard