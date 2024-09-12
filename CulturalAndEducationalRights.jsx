import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const CulturalAndEducationalRights = () => {
  // Internal CSS styles
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
    },
    title: {
      fontSize: '2.5rem', // Larger title for better visibility
      color: '#374785',
      marginBottom: '20px',
      textAlign: 'center',
    },
    description: {
      fontSize: '1.3rem',
      color: '#555',
      marginBottom: '40px',
      textAlign: 'center',
      maxWidth: '1200px', // Take more width
      lineHeight: '1.5',
      margin: '0 auto', // Center content horizontally
    },
    contentSection: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around', // Spread sections across the width
      flexWrap: 'wrap',
    },
    articleSection: {
      backgroundColor: '#e8eaf6',
      padding: '20px',
      margin: '10px',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '45%', // Use a larger percentage of the screen
      maxWidth: '600px',
      boxSizing: 'border-box',
      minWidth: '300px',
    },
    articleHeading: {
      fontSize: '1.8rem',
      color: '#374785',
      marginBottom: '10px',
    },
    articleText: {
      fontSize: '1.2rem',
      color: '#444',
      marginBottom: '10px',
      lineHeight: '1.5',
    },
    articleExample: {
      fontSize: '1.1rem',
      fontStyle: 'italic',
      color: '#00796b',
    },
    link: {
      marginTop: '30px',
      textAlign: 'center',
      fontSize: '1.2rem',
      color: '#1e90ff',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Cultural and Educational Rights</h1>
      <p style={styles.description}>
        Cultural and Educational Rights in the Constitution of India ensure every citizen can preserve their culture, language, and script. These rights protect the interests of minorities by allowing them to establish and administer their own educational institutions.
      </p>

      <div style={styles.contentSection}>
        {/* Explanation of Articles */}
        <div style={styles.articleSection}>
          <h2 style={styles.articleHeading}>Article 29: Protection of Interests of Minorities</h2>
          <p style={styles.articleText}>
            <strong>Original Text:</strong> Any section of the citizens residing in the territory of India or any part thereof having a distinct language, script, or culture of its own shall have the right to conserve the same.
          </p>
          <p style={styles.articleText}>
            <strong>Explanation for Kids:</strong> This means that people who speak different languages or have different cultural practices have the right to keep and celebrate them.
          </p>
          <p style={styles.articleExample}>
            <strong>Example:</strong> If a group of people speaks Tamil or Punjabi, they can continue to use and teach their language and celebrate their festivals.
          </p>
        </div>

        <div style={styles.articleSection}>
          <h2 style={styles.articleHeading}>Article 30: Right of Minorities to Establish and Administer Educational Institutions</h2>
          <p style={styles.articleText}>
            <strong>Original Text:</strong> All minorities, whether based on religion or language, shall have the right to establish and administer educational institutions of their choice.
          </p>
          <p style={styles.articleText}>
            <strong>Explanation for Kids:</strong> This means that groups who speak different languages or have different religions can start their own schools or colleges to teach their children according to their traditions.
          </p>
          <p style={styles.articleExample}>
            <strong>Example:</strong> A Muslim or a Sikh community can establish its own schools and teach in Urdu or Punjabi, as well as include their religious teachings.
          </p>
        </div>
      </div>

      {/* Navigation link to Constitutional Remedies */}
      <div style={styles.link}>
        <Link to="/constitutional-remedies">Go to Constitutional Remedies</Link>
      </div>
    </div>
  );
};

export default CulturalAndEducationalRights;
