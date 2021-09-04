// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends React.Component {
  constructor(props) {
    // sempre devemos invocar o constructor da classe pai primeiro
    super(props);

    // configura o estado inicial do componente
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    // desestrutura this.state
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
