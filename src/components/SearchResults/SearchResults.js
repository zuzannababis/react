import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import styles from './SearchResults.scss';
import Container from '../Container/Container.js';

class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
  }

  render() {
    const {cards}=this.props;

    return (
      <Container>
        <main className={styles.component}>
          <div className={styles.card}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </main>
      </Container>
    );
  }

}

export default SearchResults;
