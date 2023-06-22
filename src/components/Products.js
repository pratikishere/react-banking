import React from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import './products.css';

export default function Products() {
  const keyProducts = [
    {
      name: 'Tax',
      description:
        'Our Tax-Saving Fixed Deposit gives you the dual benefit of tax exemption u/s 80c of the Income Tax Act and higher interest rates on your deposits.',
    },
    {
      name: 'Loan',
      description:
        'Get hassle-free instant personal loans online. Apply now to experience quick approval, low interest rates, and flexible repayment options',
    },
    { name: 'Debit Card', description: 'Apply our debit card online' },
    {
      name: 'Saving Account',
      description:
        'We offers you a range of savings account that suits your personal needs for banking. Open your savings account online in India now',
    },
    { name: 'Mobile Banking', description: 'Apply for mobile banking' },
  ];

  return (
    <>
      <div className='products'>
        {keyProducts.map((product) => (
          <Cards
            header={product.name}
            text1={product.description}
            page={false}
          />
        ))}
      </div>
      <div className='expenses'  style={{ display: 'inline-block', position: 'absolute', left: '44%'}}>
        <Link style={{ textDecoration: 'none', color: 'white' }} to='/expenses'>
          Spend Analysis
        </Link>
      </div>
    </>
  );
}
