import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DragAndDropGame.css'; // Import the CSS file

const DragAndDropGame = () => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [categories, setCategories] = useState({
    fairness: '',
    freedom: '',
    parity: '',
  });

  const navigate = useNavigate();

  const handleDragStart = (event, item) => {
    setDraggedItem(item);
  };

  const handleDrop = (event, category) => {
    event.preventDefault();
    setCategories((prevState) => ({ ...prevState, [category]: draggedItem }));
    setDraggedItem(null);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleNext = () => {
    if (categories.fairness && categories.freedom && categories.parity) {
      navigate('/FundamentalRightsChildren'); // Navigate to the next section after successful completion
    } else {
      alert('Please drag and drop all items into the correct categories!');
    }
  };

  return (
    <div className="drag-drop-container">
      <h1 className="title">Drag and Drop Game</h1>
      <p className="instruction">Drag each word to know its synonym.</p>
      
      <div className="items">
        <div 
          className="item" 
          draggable 
          onDragStart={(event) => handleDragStart(event, 'Justice')}
        >
          Fairness
        </div>
        <div 
          className="item" 
          draggable 
          onDragStart={(event) => handleDragStart(event, 'Liberty')}
        >
          Freedom
        </div>
        <div 
          className="item" 
          draggable 
          onDragStart={(event) => handleDragStart(event, 'Equality')}
        >
          Parity
        </div>
      </div>

      <div className="dropzones">
        <div 
          className="dropzone" 
          onDragOver={handleDragOver} 
          onDrop={(event) => handleDrop(event, 'fairness')}
        >
          {categories.fairness || 'Drop Fairness Here'}
        </div>
        <div 
          className="dropzone" 
          onDragOver={handleDragOver} 
          onDrop={(event) => handleDrop(event, 'freedom')}
        >
          {categories.freedom || 'Drop Freedom Here'}
        </div>
        <div 
          className="dropzone" 
          onDragOver={handleDragOver} 
          onDrop={(event) => handleDrop(event, 'parity')}
        >
          {categories.parity || 'Drop Parity Here'}
        </div>
      </div>

      <button className="next-button" onClick={handleNext}>
        Next: Fundamental Rights
      </button>
    </div>
  );
};

export default DragAndDropGame;
