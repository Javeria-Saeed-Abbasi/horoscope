import AppCss from "../App.css";
import React from "react";
import api from "../api/aztroApi";
import "bootstrap/dist/css/bootstrap.css";
import mainCss from './main_card.css';
import main_card_css from '../components/main_card.css';
import plus_img from '../images/icon-plus.png';
import { FaPlus } from 'react-icons/fa';
import horoscope from '../images/horoscope.jpg';
import ReactDOM  from "react";

const Main_card = () => {
  return (
    <div className="wrapper">
      <div className="wrap1 position-relative">
      <div className="row">
        <div className="col-lg-12">
        <div class="card card1">
            <div class="card-body">
          <div className="row">
          <div class="col-lg-5">
            {/* <div className="img-horo-1">
              <img src= {horoscope}/>
            </div> */}
              <select className="form-select form-select-lg mb-3" id="validationCustom04" aria-label=".form-select-lg example" required>
                <option selected disabled value="">Your Horoscope</option>
                <option value="sagittarius">Sagittarius</option>
                <option value="capricorn">Capricorn</option>
                <option value="aquarius">Aquarius</option>
                <option value="pisces">Pisces</option>
                <option value="aries">Aries</option>
                <option value="taurus">Taurus</option>
                <option value="gemini">Gemini</option>
                <option value="cancer">Cancer</option>
                <option value="leo">Leo</option>
                <option value="virgo">Virgo</option>
                <option value="libra">Libra</option>
                <option value="scorpio">Scorpio</option>
              </select>
          

            </div>
            <div className="col-lg-2 plus-icon d-flex justify-content-center my-3">
              <FaPlus />
              </div>
            <div class="col-lg-5">
              <select className="form-select form-select-lg mb-3" id="validationCustom04" aria-label=".form-select-lg example" required>
                <option selected disabled value="">Your Partner's Horoscope</option>
                <option value="sagittarius">Sagittarius</option>
                <option value="capricorn">Capricorn</option>
                <option value="aquarius">Aquarius</option>
                <option value="pisces">Pisces</option>
                <option value="aries">Aries</option>
                <option value="taurus">Taurus</option>
                <option value="gemini">Gemini</option>
                <option value="cancer">Cancer</option>
                <option value="leo">Leo</option>
                <option value="virgo">Virgo</option>
                <option value="libra">Libra</option>
                <option value="scorpio">Scorpio</option>
              </select>
         
            </div>
          <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-outline-secondary">Submit</button>
          </div>

        <div>

        </div>
          </div>
      
            </div>
        </div>
        </div>
       
      </div>
      </div>
   
       


    </div>
  );
};
export default Main_card;
