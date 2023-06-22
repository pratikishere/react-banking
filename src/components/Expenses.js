import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from './Cards';
import './expenses.css';

export default function Expenses() {
  const navigate = useNavigate();

  const keyProducts = [
    {
      name: 'Expense',
      description: 'Track your all expenses.',
    },
    {
      name: 'Income',
      description: 'Check the details of your income',
    },
    {
      name: 'Investment',
      description: 'Explore investment option for better future',
    },
  ];

  const handleClick = (item) => {
    console.log(item);
    if (item === 'Expense') {
      navigate('/expenses-details');
    } else if (item === 'Income') {
      navigate('/income-details');
    } else if (item === 'Investment') {
      navigate('/investment-details');
    }
  };

  return (
    <>
      <div className='expensesPage'>
        {keyProducts.map((product) => (
          <Cards
            handleClick={handleClick}
            header={product.name}
            text1={product.description}
            page={true}
          />
        ))}
      </div>
    </>
  );
}
