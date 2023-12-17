import React, { useState } from 'react';
import './style.css';

const Carousel = () => {
  const [activeItem, setActiveItem] = useState(1);
  const [navOffsetX, setNavOffsetX] = useState(0);

  // Define your card data with titles
  const cards = [
    { imgSrc: 'images/Rectangle 5.jpg', title: 'Pot' },
    { imgSrc: 'images/Rectangle 3.jpg', title: 'Abstract art' },
    
    { imgSrc: 'images/Rectangle 1.jpg', title: 'Modern kitchen utensils' },
    { imgSrc: 'images/Rectangle 2.jpg', title: 'Painting' },
    { imgSrc: 'images/Rectangle 4.jpg', title: 'Flower' },
    { imgSrc: 'images/Rectangle 6.jpg', title: 'Vector Art' },
    { imgSrc: 'images/Rectangle 7.jpg', title: 'Stars' },
    { imgSrc: 'images/Rectangle 8.jpg', title: 'Mandala' },

  ];
  const updateActiveItem = (index) => {
    setActiveItem(index);
  
    // Assuming each button (including margins) takes up 20px of space
    const buttonWidth = 20; // Adjust this based on your actual button size
    const middlePositionIndex = Math.floor(cards.length / 2); // Middle index in your array
    const offset = (index - 1 - middlePositionIndex) * buttonWidth;
  
    setNavOffsetX(-offset); // Move the nav bar in the opposite direction
  };
  const handleLeftArrowClick = () => {
    const newIndex = activeItem > 1 ? activeItem - 1 : cards.length;
    updateActiveItem(newIndex);
  };
  const handleRightArrowClick = () => {
    const newIndex = activeItem < cards.length ? activeItem + 1 : 1;
    updateActiveItem(newIndex);
  };

  
  const getButtonOrder = (index) => {
    const totalCards = cards.length;
    const middleIndex = Math.floor(totalCards / 2);
    const distanceFromActive = index - activeItem;

    if (distanceFromActive > middleIndex) return distanceFromActive - totalCards;
    if (distanceFromActive < -middleIndex) return distanceFromActive + totalCards;
    return distanceFromActive;
  };

  const getCardClassName = (index) => {
    const position = index - activeItem;
    if (position === 0) return 'card active';
    if (position === 1 || position === -cards.length + 1) return 'card right';
    if (position === -1 || position === cards.length - 1) return 'card left';
    if (position === 2 || position === -cards.length + 2) return 'card far-right';
    if (position === -2 || position === cards.length - 2) return 'card far-left';
    return 'card';
  };
  const navStyle = {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '475px',
    transition: 'transform 0.7s ease',
    
  };
  
  const arrowButtonStyle = {
    cursor: 'pointer',
    backgroundSize: 'cover',
    border: 'none',
    width: '25px',
    height: '25px', 
    margin: '0 5px',
   
  };
  const buttonStyle = {
    background: `url('images/Dotindictaor.jpg') no-repeat center center`,
    border: 'none',
    cursor: 'pointer',
    borderRadius: '50%', 
    width: '10px',
    height: '10px',
    margin: '0 5px',
    transition: 'background-color 0.3s',

  };

  const activeButtonStyle = {
    cursor: 'pointer',
    background: `url(/images/_Dotindictaor.jpg) no-repeat center center`,
    backgroundSize: 'cover',
    border: 'none',
    width: '25px',
    height: '10px',
    margin: '0 5px',
    borderRadius:'5px'
    
  };

  return (
    <div className="container">
      <div className="cards">
        {cards.map((card, i) => (
          <div
            key={i}
            className={getCardClassName(i + 1)}
            onClick={() => updateActiveItem(i + 1)}
            id={`card-${i + 1}`}
          >
            <img src={card.imgSrc} alt={`Card ${i + 1}`} />
            <div className="card-title">{card.title}</div>
          </div>
        ))}
      </div>
     
      <div className="carousel-nav" style={navStyle}>
        <button
          style={{...arrowButtonStyle, backgroundImage: `url('images/Arrow Left.jpg')`}}
          onClick={handleLeftArrowClick}
        ></button>

        {cards.map((card, index) => (
          <button
            key={index}
            style={activeItem === index + 1 ? activeButtonStyle : buttonStyle}
            onClick={() => updateActiveItem(index + 1)}
          ></button>
        ))}

        <button
          style={{...arrowButtonStyle, backgroundImage: `url('images/Arrow Right.jpg')`}}
          onClick={handleRightArrowClick}
        ></button>
      </div>
    </div>
  );
};

export default Carousel;