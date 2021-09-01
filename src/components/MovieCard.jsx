// implement MovieCard component here
import React from 'react';
import PropType from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    // desestrutura this.props e em seguida movie
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropType.arrayOf(PropType.object).isRequired,
};

export default MovieCard;
