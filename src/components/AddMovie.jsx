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

  // event handler para o evento onChange
  handleChange = ({ target }) => this.setState({
    [target.name]: (target.type === 'checkbox' ? target.checked : target.value),
  });

  // createInput: cria um elemento input customizado e seu label associado
  createInput(type, name, value, dataTestid) {
    return (
      <input
        type={ type }
        name={ name }
        value={ value }
        onChange={ this.handleChange }
        data-testid={ dataTestid }
      />
    );
  }

  render() {
    // desestrutura this.state
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          { this.createInput('text', 'title', title, 'title-input') }
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          { this.createInput('text', 'subtitle', subtitle, 'subtitle-input') }
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          { this.createInput('text', 'imagePath', imagePath, 'image-input') }
        </label>
        <label htmlFor="movie-storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          { this.createInput('number', 'rating', rating, 'rating-input') }
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
