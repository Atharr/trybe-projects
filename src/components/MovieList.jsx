// implement MovieList component here
import React from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropType.arrayOf(PropType.object).isRequired,
};

export default MovieList;
