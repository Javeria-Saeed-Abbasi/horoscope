import React, { useState } from 'react'
import { useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import mainCard from './mainCard.css'
import plus_img from '../images/icon-plus.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Select from 'react-select'
import aztroApi from '../api/aztroApi'
import axios from 'axios';
import aquarius from '../images/aquarius.png'
import pisces from '../images/pisces.png'
import cancer from '../images/cancer.png'
import capricorn from '../images/capricorn.png'
import gemini from '../images/gemini.png'
import leo from '../images/leo.png'
import libra from '../images/libra.png'
import sagittarius from '../images/sagittarius.png'
import scorpio from '../images/scorpio.png'
import taurus from '../images/taurus.png'
import virgo from '../images/virgo.png'
import aries from '../images/aries.png'

const ZodiacDetailsCards = ({e , data}) => {
  console.log(e, data)
  const handleInput = async (e) => {
    const value1 = e.target.value
    console.log(e.target.value)
    const resp = await axios.post(
      `https://aztro.sameerkumar.website/?sign=${value1}&day=today`,
    )
    console.log(resp)
    console.log(resp.data.compatibility)
    const color = resp.data.color
    console.log(resp.data.color)
    const compat = resp.data.compatibility
    console.log(resp.data.compatibility)
    const dateRange = resp.data.date_range
    console.log(resp.data.date_range)
  }
  return (
    <div className='wrapper2'>
    <div className='container'>
   
            <div className='bg2 py-5'>
              
                <div className='card card3'>
                <h3 className='text-center text-white'>
                    YOUR DAILY HOROSCOPE
                </h3>
                <div className='zodiac-img'>
                  <img src={data.i} alt=""/>
                  <span className='h-3'>
                    {}
                  </span>
                  </div>
               
                  <div className='details mx-auto text-left py-5'>
                  <div>
                    <h4 className='yellow text-center'>
                      Lucky Color: <span className=''>{data.color}</span>
                    </h4>
                  </div>
                  <div>
                    <h4 className='purple text-center'>
                    Compatibility: <span className=''>{data.compatibility}</span>
                    </h4>
                  </div>
                  <div>
                    <h4 className='descrp'>
                    Description: <span className='descrp-det'>{data.description}</span>
                    </h4>
                  </div>
                  <div>
                    <h4 className='lucky-numb text-center'>
                      Lucky Number: <span className=''>{data.lucky_number}</span>
                    </h4>
                  </div>
                  <div>
                    <h4 className='lucky-time text-center'>
                      Lucky Time: <span className=''>{data.lucky_time}</span>
                    </h4>
                  </div>       
                  <div>
                    <h4 className='mood text-center'>
                    Mood: <span className=''>{data.mood}</span>
                    </h4>
                  </div>        

                  </div>
                 
                 </div>
            </div>
        </div>
      </div>
  )
}

export default ZodiacDetailsCards
