import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConstitutionPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div>
      {/* Internal CSS */}
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
          }

          .constitution-container {
            width: 100vw;
            height: 100vh;
            padding: 20px;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
          }

          .content {
            text-align: center;
          }

          .section-title {
            font-size: 2rem;
            margin-bottom: 10px;
            color: #333;
          }

          .section-description {
            font-size: 1.2rem;
            margin-bottom: 40px;
            color: #555;
            max-width: 800px;
            margin: 0 auto;
          }

          .levels-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-bottom: 40px;
          }

          .level-card {
            background-color: #ffffff;
            width: 300px;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
          }

          .level-title {
            font-size: 1.5rem;
            margin-bottom: 10px;
            color: #333;
          }

          .level-description {
            font-size: 1rem;
            color: #666;
          }

          .bottom-buttons {
            display: flex;
            gap: 10px;
            margin-top: 20px;
          }

          .button {
            padding: 10px 20px;
            font-size: 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            color: white;
          }

          .button-login {
            background-color: #ff7e5f;
          }

          .button-signup {
            background-color: #32c5ff;
          }

          .button-login:hover {
            background-color: #ff5733;
          }

          .button-signup:hover {
            background-color: #00aaff;
          }
        `}
      </style>

      {/* Page Content */}
      <div className="constitution-container">
        <div className="content">
          <h1 className="section-title">About the Constitution</h1>
          <p className="section-description">
            The Constitution of India is the supreme law of the land. Dive deep into its sections and articles to understand its significance.
          </p>

          {/* Levels Section in 2x2 Matrix */}
          <div className="levels-container">
            <div className="level-card">
              <h2 className="level-title">Preamble</h2>
              <p className="level-description">
                Learn about the introduction to the Constitution of India, which outlines the guiding principles and philosophy.
              </p>
            </div>

            <div className="level-card">
              <h2 className="level-title">Fundamental Rights</h2>
              <p className="level-description">
                Explore the 23 Articles that guarantee civil liberties to all citizens, protecting their freedom and rights.
              </p>
            </div>

            <div className="level-card">
              <h2 className="level-title">Fundamental Duties</h2>
              <p className="level-description">
                Understand the 11 Fundamental Duties that highlight the moral obligations of all citizens.
              </p>
            </div>

            <div className="level-card">
              <h2 className="level-title">Directive Principles of State Policy</h2>
              <p className="level-description">
                Discover the 25 Articles that aim to create social and economic conditions for a better society.
              </p>
            </div>
          </div>

          {/* Login and Signup Buttons Below Levels */}
          <div className="bottom-buttons">
            <button className="button button-login" onClick={handleLoginClick}>
              Login
            </button>
            <button className="button button-signup" onClick={handleSignupClick}>
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstitutionPage;
