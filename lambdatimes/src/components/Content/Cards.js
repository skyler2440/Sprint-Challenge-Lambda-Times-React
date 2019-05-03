import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => (
        <Card
          key={card.headline}
          card={card}
        />
      ))}
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    headline:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    tab:PropTypes.string.isRequired,
  })).isRequired
}
export default Cards;