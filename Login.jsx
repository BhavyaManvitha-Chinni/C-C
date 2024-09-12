import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ users }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      if (user.age >= 13 && user.age <= 18) {
        navigate('/preamble-children');
      } else if (user.age > 18 && user.age <= 25) {
        navigate('/preamble-youth');
      } else {
        navigate('/preamble-citizens');
      }
    } else {
      setError('Invalid email or password');
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
        <h2>Login</h2>
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
        {error && <p style={styles.error}>{error}</p>}
        <button
          onClick={handleLogin}
          style={styles.button}
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        >
          Login
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

export default LoginPage;
