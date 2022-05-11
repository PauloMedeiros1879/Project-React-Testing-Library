import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Requisito 5 - Testa o componente Pokedex.js', () => {
  test('Testa se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);

    const heading = screen.getByRole('heading', {
      level: 2,
      name: /Encountered pokémons/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test('Testa se é exibido o próximo pokémon da lista quando o botão Próximo', () => {
    renderWithRouter(<App />);
    const btn = screen.getByRole('button', {
      name: /Próximo pokémon/i,
    });
    expect(btn).toBeInTheDocument();

    const firstNextPoke = screen.getByText('Pikachu');
    expect(firstNextPoke).toBeInTheDocument();

    const location = 8;
    for (let i = 0; i < location; i += 1) {
      fireEvent.click(btn);
    }
    expect(firstNextPoke).toBeInTheDocument();
  });

  test('Testa se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<App />);
    const display = screen.getAllByTestId('pokemon-name');
    expect(display.length).toBe(1);
  });

  test('Testa se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const allButtons = screen.getByRole('button', {
      name: /All/i,
    });
    expect(allButtons).toBeInTheDocument();

    const typeButtons = screen.getAllByTestId('pokemon-type-button');
    expect(typeButtons[6].innerHTML).toBe('Dragon');

    const filterButtons = 7;
    expect(typeButtons.length).toBe(filterButtons);
  });

  test('Testa se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const allButtons = screen.getByRole('button', {
      name: /All/i,
    });
    expect(allButtons).toBeInTheDocument();
    fireEvent.click(allButtons);

    const locationPoke = screen.getByText(/Pikachu/i);
    expect(locationPoke).toBeInTheDocument();
  });
});
