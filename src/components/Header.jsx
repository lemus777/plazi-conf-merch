import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to='/'>
          PlatziConf Merch
        </Link>
      </h1>
      <div className="Header-checkout">
        <Link to='/checkout'>
          <i className='fa-solid fa-basket-shopping' />
        </Link>
      </div>
    </div>
  );
}

export { Header };