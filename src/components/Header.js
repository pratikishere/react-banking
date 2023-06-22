import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../images/hsbc.svg';
import './header.css';

export default function Header() {
  const location = useLocation();

  return (
    <div className='header'>
      <img
        style={{
          height: '9%',
          width: '9%',
          float: 'left',
        }}
        src={Logo}
        alt='Logo'
      />
      <a href='#' className='logo'>
        Premier League
      </a>
      {location.pathname !== '/' ? (
        <div className='header-right'>
          <a href='#contact'>
            Account Holder: <span style={{ color: 'darkred' }}>Rahul</span>
          </a>
          <a href='#about'>
            Account Balance:{' '}
            <span style={{ color: 'darkred' }}>1,00,000 RS</span>
          </a>
        </div>
      ) : null}
    </div>
  );
}
