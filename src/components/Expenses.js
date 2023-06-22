import React from 'react';
import Cards from './Cards';
import './expenses.css';

export default function Expenses() {
  const keyProducts = [
    {
      name: 'expses1',
      description:
        'Our Tax-Saving Fixed Deposit gives you the dual benefit of tax exemption u/s 80c of the Income Tax Act and higher interest rates on your deposits.',
    },
    {
      name: 'exp2',
      description:
        'Get hassle-free instant personal loans online. Apply now to experience quick approval, low interest rates, and flexible repayment options',
    },
    { name: 'exp5', description: 'Apply our debit card online' },
    {
      name: 'exp3',
      description:
        'We offers you a range of savings account that suits your personal needs for banking. Open your savings account online in India now',
    },
    { name: 'exp4', description: 'Apply for mobile banking' },
  ];

  return (
    <>
      <div className='expensesPage'>
        {keyProducts.map((product) => (
          <Cards
            header={product.name}
            text1={product.description}
            page={true}
          />
        ))}
      </div>
    </>
  );
}
