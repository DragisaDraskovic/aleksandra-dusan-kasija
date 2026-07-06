import React from 'react';
import './WeddingDetails.css';
// Uvoz ikonica sa react-icons
import { FaChurch } from 'react-icons/fa';
import { IoIosRestaurant } from "react-icons/io";
import CalendarButton from '../CalendarButton/CalendarButton';

const WeddingDetails = () => {
  return (
    <div className="wedding-details-container">
      {/* Glavni datum */}
      <div className="main-date-row">
        <h2>5. | SEPTEMBAR | 2026.</h2>
      </div>

      {/* Satnice i lokacije podeljene u dve kolone */}
      <div className="details-grid">
        {/* Leva kolona - Crkva */}
        <div className="details-column">
            <FaChurch className="react-icon-style" />
            <div className="time">15.00</div>
            <div className="location-name-official">
                CRKVA SVETOG <br /> MARKA, <br /> KULA
            </div>
        </div>

        {/* Desna kolona - Restoran */}
        <div className="details-column">
            <IoIosRestaurant className="react-icon-style" />
            <div className="time">16.30</div>
            <div className="location-name-official">
                RESTORAN <br /> BAROK, <br /> VRBAS
            </div>
        </div>
        </div>
            <CalendarButton />
    </div>
  );
};

export default WeddingDetails;