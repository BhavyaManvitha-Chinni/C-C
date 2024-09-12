import React from 'react';
import { useNavigate } from 'react-router-dom';

const PreambleChildren = () => {
  const navigate = useNavigate();

  const handleProceedToGame = () => {
    navigate('/draganddropgame'); // Navigate to the drag and drop game
  };

  return (
    <div style={styles.outerContainer}>
      {/* Importing fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap');

          .heading {
            font-family: 'Roboto', sans-serif;
            color: #ff7e5f;
            font-size: 2.5rem;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
            text-align: center;
          }

          .subheading {
            font-family: 'Roboto', sans-serif;
            color: #ffffff;
            font-size: 2rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
            margin: 30px 0 15px;
            text-align: center;
          }

          .preamble-container, .explanation-container {
            font-family: 'Open Sans', sans-serif;
            background: #ffffff;
            color: #333;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            max-width: 800px;
            margin: 0 auto 20px;
            text-align: left;
            line-height: 1.6;
          }

          .preamble-container p, .explanation-container p {
            margin-bottom: 15px;
          }

          .preamble-container {
            font-style: italic;
            border-left: 6px solid #ff7e5f;
            padding-left: 20px;
          }
        `}
      </style>

      <div style={styles.innerContainer}>
        {/* Heading */}
        <h1 className="heading">Preamble of the Constitution</h1>
        
        {/* Preamble Text Container */}
        <div className="preamble-container">
          <p>
            "We, the people of India, having solemnly resolved to constitute India into a Sovereign Socialist Secular Democratic Republic and to secure to all its citizens:
          </p>
          <p>Justice, social, economic and political;</p>
          <p>Liberty of thought, expression, belief, faith and worship;</p>
          <p>Equality of status and of opportunity;</p>
          <p>And to promote among them all</p>
          <p>
            Fraternity assuring the dignity of the individual and the unity and integrity of the Nation;
          </p>
          <p>
            In our Constituent Assembly this 26th day of November 1949, do hereby adopt, enact and give to ourselves this Constitution."
          </p>
        </div>

        {/* Explanation Section */}
        <h2 className="subheading">Explanation</h2>
        <div className="explanation-container">
          <p>
            Imagine you and your classmates are starting a new student council. You all gather to decide how your student council will work. You write down some important promises to make sure everyone in the school is happy and treated fairly. This is similar to what the Preamble does for India.
          </p>
          <p><strong>Here’s a simple way to explain it:</strong></p>
          <p>
            <b>"We, the students of our school"</b> - This is like saying everyone in the school is coming together to agree on the student council rules.
          </p>
          <p>
            <b>"Having solemnly resolved"</b> - This means you’ve all seriously decided on these rules.
          </p>
          <p>
            <b>"To constitute our school into a place where everyone is heard, treated fairly, and respected, regardless of their background or beliefs"</b> - This reflects "To constitute India into a Sovereign Socialist Secular Democratic Republic," meaning creating a school environment where every student has a voice and is treated equally.
          </p>
          <p>
            <b>"To secure to all its students: Justice, social, economic and political;"</b> - Like ensuring every student is treated fairly and has a chance to succeed, similar to how the Preamble promises "Justice, social, economic and political" for all citizens.
          </p>
          <p>
            <b>"Liberty of thought, expression, belief, faith and worship;"</b> - This means allowing everyone to share their thoughts and beliefs freely, just as the Preamble guarantees "Liberty of thought, expression, belief, faith and worship."
          </p>
          <p>
            <b>"Equality of status and of opportunity;"</b> - Ensuring every student has equal chances to participate and excel, similar to the Preamble’s commitment to "Equality of status and of opportunity."
          </p>
          <p>
            <b>"And to promote among them all Fraternity assuring the dignity of the individual and the unity and integrity of the Nation;"</b> - Encouraging friendship, respect, and unity among all students, just as the Preamble aims to "promote among them all Fraternity assuring the dignity of the individual and the unity and integrity of the Nation."
          </p>
          <p>
            <b>"In our student council meeting this day, we do hereby adopt, enact and give to ourselves these rules."</b> - This means that on the day of the meeting, everyone agreed to these rules and made them official for the entire school, similar to "In our Constituent Assembly this 26th day of November 1949, do hereby adopt, enact and give to ourselves this Constitution."
          </p>
          <p>
            So, the Preamble is like the list of promises you and your classmates make to ensure your school is a great place where everyone is treated fairly and can succeed.
          </p>
        </div>

        {/* Proceed to Game Button */}
        <button style={styles.gameButton} onClick={handleProceedToGame}>
          Proceed to Drag and Drop Game
        </button>
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
    padding: 0,
    margin: 0,
  },
  innerContainer: {
    height: '90vh',
    width: '90vw',
    overflowY: 'auto',
    padding: '20px',
  },
  gameButton: {
    marginTop: '30px',
    padding: '10px 20px',
    fontSize: '1.2rem',
    backgroundColor: '#34a853',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default PreambleChildren;
