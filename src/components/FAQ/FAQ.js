import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';


const FAQ = ({title, image, content}) => (
  <Container>
    <Hero titleText={title} image={image} />
    <p>{ReactHtmlParser(content)}</p>
  </Container>
);

FAQ.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string,
  content: PropTypes.node,
};

FAQ.defaultProps = {
  title: settings.faq.title,
  image: settings.faq.image,
  content: settings.faq.content,
};

export default FAQ;