import AppCss from "../App.css";
import React from "react";
import api from "../api/aztroApi";
import "bootstrap/dist/css/bootstrap.css";
import mainCss from './main_card.css';
import main_card_css from '../components/main_card.css';
import plus_img from '../images/icon-plus.png';
import { FaPlus } from 'react-icons/fa';

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
              <select className="form-select form-select-lg mb-3" id="validationCustom04" aria-label=".form-select-lg example" required>
                <option selected disabled value="">Choose Your Horoscope</option>
                <option>...</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>

            </div>
            <div className="col-lg-3 plus-icon">
              <FaPlus />
              </div>
            <div class="col-lg-5">
              <select className="form-select form-select-lg mb-3" id="validationCustom04" aria-label=".form-select-lg example" required>
                <option selected disabled value="">Your Partner's Horoscope</option>
                <option>...</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
          <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-outline-primary">Submit</button>
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
