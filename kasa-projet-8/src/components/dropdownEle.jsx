import React, { useState } from 'react';
import './style/componentsSCSS/dropdown.scss';
import { SlArrowUp } from "react-icons/sl";


const Dropdown = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
    return (
      <div className="dropdown">
        <div className="dropdown-toggle" onClick={toggleDropdown}>
            <span>{props.label}</span>
          <SlArrowUp className={`arrow ${showDropdown ? 'rotated' : ''}`} />
        </div>
        {showDropdown && (
          <div className={`dropdown-content ${showDropdown ? 'show' : ''}`} >
            {/* Contenu du dropdown */}
            <p>{props.content} <br/></p>
          </div>
        )}
      </div>
    );
  };

  export default Dropdown