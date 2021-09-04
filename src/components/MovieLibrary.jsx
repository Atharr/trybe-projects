// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';

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

  // event handler para o evento onChange
  handleChange = ({ target }) => this.setState({
    [target.name]: (target.type === 'checkbox' ? target.checked : target.value),
  });

  // moviesFilter(state): método para realizar a filtragem de filmes
  moviesFilter = ({ searchText, selectedGenre, bookmarkedOnly, movies }) => movies
    .filter((movie) => (movie.title.includes(searchText)
      || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText)))
    .filter((movie) => (bookmarkedOnly ? movie.bookmarked : true))
    .filter((movie) => (selectedGenre ? movie.genre === selectedGenre : true));

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.moviesFilter(this.state) } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
