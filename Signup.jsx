import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = ({ users, setUsers }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (users.find((user) => user.email === email)) {
      setError('Email already exists!');
      return;
    }

    const newUser = { name, email, password, age: parseInt(age, 10), progress: {} };
    setUsers((prevUsers) => [...prevUsers, newUser]);

    if (newUser.age >= 13 && newUser.age <= 18) {
      navigate('/preamble-children');
    } else if (newUser.age > 18 && newUser.age <= 25) {
      navigate('/preamble-youth');
    } else {
      navigate('/preamble-citizens');
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

          h2 {
            font-family: 'Roboto', sans-serif;
            color: #ff7e5f;
          }
        `}
      </style>
      <div style={styles.formContainer}>
        <h2>Signup</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button
          onClick={handleSignup}
          style={styles.button}
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
    color: 'white',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    width: '300px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    color: '#333',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '20px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#32c5ff',
    color: '#fff',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#00aaff',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default SignupPage;
