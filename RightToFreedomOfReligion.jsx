import React from 'react';
import { useNavigate } from 'react-router-dom';

const RightToFreedomOfReligion = () => {
  const navigate = useNavigate();

  // Navigate to the next game or content after learning about the Right to Freedom of Religion
  const handleNavigateToNext = () => {
    navigate('/right-to-freedom-memory-match'); // Replace '/next-topic' with the actual path to the next content or game
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Right to Freedom of Religion</h1>
      <p style={styles.description}>
        In India, everyone has the right to choose and practice their own religion. This means you can believe in any god, pray the way you like, and celebrate your religious festivals freely!
      </p>

      {/* Explanation of Articles */}
      <div style={styles.articleSection}>
        <h2 style={styles.articleHeading}>Article 25: Freedom of Conscience and Free Profession, Practice, and Propagation of Religion</h2>
        <p style={styles.articleText}>
          <strong>Original Text:</strong> All persons are equally entitled to freedom of conscience and the right to freely profess, practice, and propagate religion.
        </p>
        <p style={styles.articleText}>
          <strong>Explanation for Kids:</strong> This means that everyone has the right to believe in any religion they want, pray in their way, and even tell others about their religion.
        </p>
        <p style={styles.articleExample}>
          <strong>Example:</strong> You can choose to go to a temple, church, mosque, or gurudwara, or even choose not to go anywhere. It’s your choice!
        </p>
      </div>

      <div style={styles.articleSection}>
        <h2 style={styles.articleHeading}>Article 26: Freedom to Manage Religious Affairs</h2>
        <p style={styles.articleText}>
          <strong>Original Text:</strong> Subject to public order, morality, and health, every religious denomination or any section thereof shall have the right to establish and maintain institutions for religious and charitable purposes.
        </p>
        <p style={styles.articleText}>
          <strong>Explanation for Kids:</strong> This means religious groups can set up their own places like temples, churches, mosques, etc., and run them according to their rules.
        </p>
        <p style={styles.articleExample}>
          <strong>Example:</strong> A church can have its own way of conducting prayers and managing its activities.
        </p>
      </div>

      {/* More Articles can be added here in a similar format */}

      <button style={styles.nextButton} onClick={handleNavigateToNext}>
        Proceed to the Next Topic
      </button>
    </div>
  );
};

// CSS-in-JS for styling
const styles = {
  container: {
    backgroundColor: '#FFF8DC', // Light beige background
    padding: '20px',
    fontFamily: 'Comic Sans MS, sans-serif',
    color: '#333',
    minHeight: '100vh',
    width: '100%', // Make it take the full width of the screen
    overflowY: 'auto', // Enable vertical scrolling
    boxSizing: 'border-box', // Include padding in width and height calculations
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem', // Adjusted font size for better visibility
    color: '#4B0082', // Indigo color
    marginBottom: '15px',
  },
  description: {
    textAlign: 'center',
    fontSize: '1.2rem', // Adjusted font size
    color: '#2F4F4F', // Dark Slate Gray
    marginBottom: '30px',
  },
  articleSection: {
    backgroundColor: '#FAFAD2', // Light golden background
    padding: '15px', // Padding around the text
    margin: '20px 0', // Margin between sections
    borderRadius: '10px',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
  },
  articleHeading: {
    fontSize: '1.5rem', // Adjusted font size
    color: '#8B0000', // Dark red color
    marginBottom: '8px',
  },
  articleText: {
    fontSize: '1rem', // Adjusted font size
    color: '#333',
    marginBottom: '8px',
  },
  articleExample: {
    fontSize: '1rem', // Adjusted font size
    fontStyle: 'italic',
    color: '#006400', // Dark green color
  },
  nextButton: {
    display: 'block',
    margin: '20px auto',
    padding: '10px 30px', // Adjusted padding
    fontSize: '1.2rem', // Adjusted font size
    color: '#FFFFFF',
    backgroundColor: '#FF6347', // Tomato color
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default RightToFreedomOfReligion;
