import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
      const {title}=this.props;
    return (
      <main className={styles.component}>
        <h3>{title}</h3>
      </main>
    )
  }
}

export default Card;
