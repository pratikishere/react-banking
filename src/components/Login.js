import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === '' || password === '') {
      alert('please enter details');
      return;
    }
    const newUser = { username, password };
    console.log(newUser);
    //API CALL IF SuccessFUL Redirect USER to Product page
    navigate('/products');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <p>
        Welcome to HSBC premier league. Please enter your username and password and click Submit.
      </p>
      <form style={{ marginTop: '2%' }} onSubmit={handleSubmit}>
        <div style={{ margin: "10px" }}>
          <label htmlFor='username' style={{ width: '90px', paddingLeft: '20px', display: 'inline-block'}} >Username</label>
          <input
            id='username'
            type='text'
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />
        </div>
        <div>
          <label htmlFor='username' style={{ width: '90px', paddingLeft: '20px', display: 'inline-block'}}>Password</label>
          <input
            id='password'
            type='text'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button
          style={{
            display: 'block',
            position: 'absolute',
            left: '50%',
            marginTop: '20px',
          }}
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
