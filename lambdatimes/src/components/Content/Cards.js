import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import * as styles from '../styleComponents.js';

const Cards = props => {
  return (
    <styles.CardsContainer>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {
        props.cards.map(cardData => (
          <Card
            key={cardData.headline}
            card={cardData}
          />
        ))
      }
    </styles.CardsContainer>
  )
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Cards;