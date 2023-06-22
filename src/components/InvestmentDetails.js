import React from 'react';
import { Link } from 'react-router-dom';

const expensetrans = [
  {
    name: 'FD matured',
    price: 5000,
    type: 'Credit',
    date: '18-04-2023',
  },
  {
    name: 'Tata India SIP',
    price: 1000,
    type: 'Debit',
    date: '19-06-2023',
  },
  {
    name: 'Tata India SIP',
    price: 1000,
    type: 'Debit',
    date: '19-05-2023',
  },
  {
    name: 'Tata India SIP',
    price: 1000,
    type: 'Debit',
    date: '19-04-2023',
  }
];

export default function ExpenseDetails() {
  const onOptionChangeHandler = (event) => {
    console.log('User Selected Value - ', event.target.value);
  };

  return (
    <div>
      <div
        style={{
          marginTop: '40px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Invesment Details</h1>

        <label for='cars'>Select months:</label>

        <div style={{ margin: '20px' }}>
          <select onChange={onOptionChangeHandler} name='months' id='months'>
            <option value='1month'>1 Month</option>
            <option value='3month'>3 Month</option>
          </select>
        </div>

        <table>
          <>
            <thead>
              <tr>
                <td
                  style={{
                    border: '1px solid black',
                    padding: '10px',
                    background: 'lightgray',
                  }}
                >
                  Name
                </td>
                <td
                  style={{
                    border: '1px solid black',
                    padding: '10px',
                    background: 'lightgray',
                  }}
                >
                  Amount
                </td>
                <td
                  style={{
                    border: '1px solid black',
                    padding: '10px',
                    background: 'lightgray',
                  }}
                >
                  Type
                </td>
                <td
                  style={{
                    border: '1px solid black',
                    padding: '10px',
                    background: 'lightgray',
                  }}
                >
                  Date
                </td>
              </tr>
            </thead>
            <tbody>
              {expensetrans.map((expense) => {
                return (
                  <>
                    <tr>
                      <td
                        style={{ border: '1px solid black', padding: '10px' }}
                      >
                        {expense.name}
                      </td>
                      <td
                        style={{ border: '1px solid black', padding: '10px' }}
                      >
                        {expense.price}
                      </td>
                      <td
                        style={{ border: '1px solid black', padding: '10px' }}
                      >
                        {expense.type}
                      </td>
                      <td
                        style={{ border: '1px solid black', padding: '10px' }}
                      >
                        {expense.date}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </>
        </table>
      </div>
      <div
        className='expenses'
        style={{
          margin: '10px',
          position: 'absolute',
          left: '44%',
        }}
      >
        <Link style={{ textDecoration: 'none', color: 'white' }} to='/expenses'>
          To spend analysis
        </Link>
      </div>
    </div>
  );
}
