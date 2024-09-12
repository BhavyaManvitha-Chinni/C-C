import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/constitution');
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

          .welcome-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #6e8efb, #a777e3);
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
            overflow: hidden;
          }

          .welcome-title {
            font-size: 3rem;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
          }

          .welcome-message {
            font-size: 1.5rem;
            margin-bottom: 40px;
            text-align: center;
            max-width: 600px;
          }

          .button {
            padding: 15px 30px;
            font-size: 1.2rem;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            background-color: #28a745;
            color: white;
          }

          .button:hover {
            background-color: #218838;
          }
        `}
      </style>

      {/* Page Content */}
      <div className="welcome-container">
        <h1 className="welcome-title">Welcome to Nagrik Aur Samvidhan</h1>
        <p className="welcome-message">
          Dive into a gamified learning experience and understand the Constitution of India in a fun and engaging way!
        </p>
        <button className="button" onClick={handleStartClick}>
          Let's Start
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
