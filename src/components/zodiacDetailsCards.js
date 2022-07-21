import React, { useState } from 'react';
import { useEffect } from 'react'
import { FaPlus } from 'react-icons/fa';
import mainCard from './mainCard.css';
import plus_img from '../images/icon-plus.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import aztroApi from '../api/aztroApi';
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

   
 const ZodiacDetailsCards = () => {


    const  handleInput = async (e) => {
        const value1 = e.target.value;
        console.log(e.target.value);
        const resp = await axios.post(`https://aztro.sameerkumar.website/?sign=${value1}&day=today`);
        console.log(resp);
        console.log(resp.data.compatibility);
        const color = resp.data.color;
        console.log(resp.data.color);
        const compat = resp.data.compatibility;
        console.log(resp.data.compatibility);
        const dateRange = resp.data.date_range;
        console.log(resp.data.date_range);
      }
  return (
    <div className='wrapper2'>
    <div className='container'>
   
            <div className='bg2'>
              
                <div className='card card3'>
                <h3 className='text-center'>
                    YOUR HOROSCOPE   | {} 
                </h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ZodiacDetailsCards;