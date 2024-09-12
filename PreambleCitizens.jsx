import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

const PreambleCitizens = () => {
  const navigate = useNavigate();  // Initialize useNavigate

  // Function to handle navigation to QuizCitizen.jsx
  const handleStartQuiz = () => {
    navigate('/quiz-citizen');  // Navigate to the quiz route
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>The Preamble of India</h1>
      <div style={styles.preambleContainer}>
        <p style={styles.preambleText}>
          "We, the people of India, having solemnly resolved to constitute India into a Sovereign Socialist Secular Democratic Republic and to secure to all its citizens: Justice, social, economic and political; Liberty of thought, expression, belief, faith and worship; Equality of status and of opportunity; And to promote among them all Fraternity assuring the dignity of the individual and the unity and integrity of the Nation; In our Constituent Assembly this 26th day of November 1949, do hereby adopt, enact and give to ourselves this Constitution."
        </p>
      </div>

      <h2 style={styles.subtitle}>Explanation</h2>
      <div style={styles.explanationContainer}>
        <p style={styles.explanationText}>
          <strong>"We, the people of India"</strong><br />
          Example: Imagine a large company where all employees, from entry-level to executives, come together to draft a new set of company policies that ensure fairness and inclusivity. This phrase signifies that every Indian citizen, regardless of their background, has collectively agreed to the guiding principles of the Constitution.
        </p>
        <p style={styles.explanationText}>
          <strong>"Having solemnly resolved to constitute India into a Sovereign Socialist Secular Democratic Republic"</strong><br />
          Example: Consider a diverse neighborhood deciding on community rules that everyone must follow. The neighborhood chooses to govern itself independently (sovereign), share resources fairly (socialist), respect all cultural and religious practices equally (secular), and ensure that everyone has a voice in decision-making (democratic). Similarly, India chose to be a nation that is self-governing, fair, inclusive, and democratic.
        </p>
        <p style={styles.explanationText}>
          <strong>"To secure to all its citizens: Justice, social, economic and political;"</strong><br />
          Example: Think of a workplace that ensures fair treatment of all employees, offers opportunities for everyone to advance regardless of their background, and protects their rights to a safe and equitable environment. The Constitution promises to provide justice in all spheres of life—social, economic, and political—so that every citizen can live with fairness and dignity.
        </p>
        <p style={styles.explanationText}>
          <strong>"Liberty of thought, expression, belief, faith and worship;"</strong><br />
          Example: Imagine being able to voice your opinions freely in a company meeting, choose your preferred method of working, or follow your own lifestyle choices without fear of repercussions. The Constitution grants every citizen the freedom to think, speak, and practice their beliefs or religion freely, ensuring a society where diverse opinions and practices are respected.
        </p>
        <p style={styles.explanationText}>
          <strong>"Equality of status and of opportunity;"</strong><br />
          Example: Think of a company policy that ensures equal pay for equal work, transparent promotion criteria, and equal access to professional development programs for all employees, regardless of gender, race, or background. The Constitution aims to ensure that everyone in society has equal opportunities to succeed and is treated with equal respect.
        </p>
        <p style={styles.explanationText}>
          <strong>"And to promote among them all Fraternity assuring the dignity of the individual and the unity and integrity of the Nation;"</strong><br />
          Example: Imagine a group project at work where every team member’s contribution is valued, and everyone works towards a common goal, fostering a sense of camaraderie and mutual respect. Similarly, the Constitution encourages citizens to respect each other's dignity, work together harmoniously, and maintain the unity and strength of the nation.
        </p>
        <p style={styles.explanationText}>
          <strong>"In our Constituent Assembly this 26th day of November 1949, do hereby adopt, enact and give to ourselves this Constitution."</strong><br />
          Example: This is like a team of leaders at a new startup formally agreeing to a mission statement and core values that will guide the company’s growth and operations. On November 26, 1949, India’s leaders officially adopted and implemented these principles, setting the foundation for the country's governance and societal norms.
        </p>
      </div>

      {/* Button to navigate to the quiz */}
      <button onClick={handleStartQuiz} style={styles.startQuizButton}>
        Start Quiz
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    background: 'linear-gradient(to bottom right, #1e3c72, #2a5298)',  // New gradient background
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  },
  preambleContainer: {
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '10px',
    padding: '20px',
    width: '80%',
    maxWidth: '800px',
    marginBottom: '30px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  preambleText: {
    fontSize: '1.2rem',
    color: '#333',
  },
  subtitle: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#000',  // Black color for better contrast on new background
    textShadow: '2px 2px 4px rgba(255, 255, 255, 0.4)',
  },
  explanationContainer: {
    background: 'rgba(240, 240, 240, 0.6)',
    borderRadius: '10px',
    padding: '20px',
    width: '80%',
    maxWidth: '800px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxHeight: '50vh',
    overflowY: 'auto',
    marginBottom: '20px',
  },
  explanationText: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '15px',
  },
  startQuizButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
  },
};

export default PreambleCitizens;
