import React from 'react';

const expensetrans = [
  {
    name: 'groceries',
    price: 500,
    type: 'debit',
    date: '22-06-2023',
  },
  {
    name: 'medical',
    price: 10000,
    type: 'debit',
    date: '15-06-2023',
  },
  {
    name: 'mobile recharge',
    price: 2000,
    type: 'debit',
    date: '10-05-2023',
  },
  {
    name: 'mobile recharge',
    price: 500,
    type: 'debit',
    date: '08-04-2023',
  },
  {
    name: 'electricity bill',
    price: 5000,
    type: 'debit',
    date: '25-05-2023',
  },
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
        <h1>Expenses Details</h1>

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
                  Price
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
    </div>
  );
}
