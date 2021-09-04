// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    // sempre devemos invocar o constructor da classe pai primeiro
    super(props);

    // recebe as props
    const { movies } = this.props;

    // configura o estado inicial do componente
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    return (
      <main>
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
