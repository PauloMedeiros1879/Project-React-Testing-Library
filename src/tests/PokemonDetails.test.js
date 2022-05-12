import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Requisito 7 - Testa o componente PokemonDetails.js', () => {
  test('Testa se as informações detalhadas do pokémon selecionado são mostradas', () => {
    renderWithRouter(<App />);

    const buttonDetails = screen.getByRole('link', {
      name: /More Details/i,
    });
    fireEvent.click(buttonDetails);

    const details = screen.getByRole('heading', {
      level: 2,
      name: /Pikachu Detail/i,
    });
    expect(details).toBeInTheDocument();
  });

  test('Testa se existe na página uma seção com os mapas contendo pokémons', () => {
    renderWithRouter(<App />);

    const buttonDetails = screen.getByRole('link', {
      name: /More Details/i,
    });
    fireEvent.click(buttonDetails);

    const imageMap = screen.getByAltText(/Pikachu Location/i);
    expect(imageMap.src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');

    const headingLocation = screen.getByRole('heading', {
      level: 2,
      name: /Game Locations/i,
    });
    expect(headingLocation).toBeInTheDocument();

    const headingGame = screen.getByRole('heading', {
      level: 2,
      name: 'Game Locations of Pikachu',
    });
    expect(headingGame).toBeInTheDocument();

    const summary = screen.getByRole('heading', {
      level: 2,
      name: /Summary/i,
    });
    expect(summary).toBeInTheDocument();

    const summaryParagraph = screen.getByText(/This intelligent Pokémon/i);
    expect(summaryParagraph).toBeInTheDocument();
  });

  test('Testa se usuário pode favoritar um pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);

    const buttonDetails = screen.getByRole('link', {
      name: /More Details/i,
    });
    fireEvent.click(buttonDetails);

    const favoriteCheckin = screen.getByRole('checkbox', {
      name: /Pokemon Favoritado?/i,
    });
    expect(favoriteCheckin).toBeInTheDocument();
  });
});
