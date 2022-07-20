import React ,{useState} from 'react';
import {useEffect} from 'react'
import mainCard from './mainCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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

const zodiacImage = ()=>{
    return (
        <div>
              panelOne = {{ image: {aquarius}, name: "First" }}
              panelTwo = {{ image: {pisces}, content: "Second" }}
              panelThree = {{ image: {cancer}, content: "Third" }}
              
        </div>
      )
}
export default zodiacImage;