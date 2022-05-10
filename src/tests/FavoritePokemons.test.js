import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';

describe('Requisito 2 - Testa o componente About.js', () => {
  test('Testa se é exibida na tela a mensagem No favorite pokemon found,', () => {
    renderWithRouter(<FavoritePokemons />);

    const textFavorite = screen.getByText(/No favorite pokemon found/i);
    expect(textFavorite).toBeInTheDocument();
  });

  // Tive dificuldade... userEvent não funcionou, usei novamente o fireEvent, não sei se é uma boa prática, eu iria usar apenas no App.test.js, mas aqui tive que usar também.
  test('Testa se são exibidos todos os cards de pokémons favoritados', () => {
    renderWithRouter(<App />);

    // Dentro do Home
    const linkDetails = screen.getByRole('link', {
      name: 'More details',
    });
    fireEvent.click(linkDetails);

    // Dentro do moreDetails do pokémon selecionado
    const inputCheck = screen.getByRole('checkbox', {
      name: 'Pokémon favoritado?',
    });
    fireEvent.click(inputCheck);

    // Entrando no link Favorites
    const linkFavorites = screen.getByRole('link', {
      name: 'Favorite Pokémons',
    });
    fireEvent.click(linkFavorites);

    // Verificando a existência do pokemon
    const favoritesPoke = screen.getByText(/Pikachu/i);
    expect(favoritesPoke).toBeInTheDocument();
  });
});
