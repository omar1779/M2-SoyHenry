import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className={'container-nav'}>
      <div className={'container-title'}>
        <img src={Logo} alt="img not found" />
        <h1>Henry - Weather App</h1>
      </div>
      <div>
        <SearchBar onSearch={onSearch}/>
      </div>
    </nav>
  );
};

export default Nav;
