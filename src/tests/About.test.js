import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../components/About';

describe('Requisito 2 - Testa o componente About.js', () => {
  test('Teste se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const pageInfo = screen.getByRole('heading', {
      level: 2,
    });
    expect(pageInfo).toBeInTheDocument();
  });

  test('Testa se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);

    const heading = screen.getByRole('heading', {
      level: 2,
      name: /About Pokédex/,
    });
    expect(heading).toBeInTheDocument();
  });

  test('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const informations1 = screen.getByText(/This application simulates a Pokédex/i);
    expect(informations1).toBeInTheDocument();

    const informations2 = screen.getByText(/One can filter Pokémons by type/i);
    expect(informations2).toBeInTheDocument();
  });

  test('Teste se a página contém a imagem de uma Pokédex', () => {
    renderWithRouter(<About />);

    const image = screen.getByAltText('Pokédex');
    expect(image).toBeInTheDocument();
    expect(image.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
