import React, { useState } from 'react';
import './style/dropdown.scss';
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
          <SlArrowUp className='arrow' />
        </div>
        {showDropdown && (
          <div className="dropdown-content">
            {/* Contenu du dropdown */}
            <p>{props.content}</p>
          </div>
        )}
      </div>
    );
  };

  export default Dropdown