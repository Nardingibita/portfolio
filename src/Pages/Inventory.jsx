import React from 'react';
import { Link } from 'react-router-dom';
import InventoryImg from '../Assets/Inventory .png';
import '../style.css/Inventory.css';

function Inventory() {
  return (
    <div className="Inventory">
      <h2>Inventory Management</h2>
      <p>This Java desktop app manages customer data using Java + MySQL.</p>

      <div className="image-gallery">
        <img src={InventoryImg} alt="Inventory Management Dashboard" />
      </div>

      <div className="back-button-container">
        <Link to="/project" className="back-button">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}

export default Inventory;
