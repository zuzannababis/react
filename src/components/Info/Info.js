import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';


const Info = ({title, image, content}) => (
  <Container>
    <Hero titleText={title} image={image} />
    <p>{ReactHtmlParser(content)}</p>
  </Container>
);

Info.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string,
  content: PropTypes.node,
};

Info.defaultProps = {
  title: settings.info.title,
  image: settings.info.image,
  content: settings.info.content,
};

export default Info;