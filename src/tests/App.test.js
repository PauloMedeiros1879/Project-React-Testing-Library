import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Requisito 1 - Testando o componente App.js', () => {
  test('Testa se o topo da aplicação contém um conjunto fixo de links', () => {
    renderWithRouter(<App />);

    const firstLink = screen.getByText(/Home/i);
    expect(firstLink).toBeInTheDocument();

    const secondLink = screen.getByText(/About/i);
    expect(secondLink).toBeInTheDocument();

    const thirdLink = screen.getByText(/Favorite Pokémons/i);
    expect(thirdLink).toBeInTheDocument();
  });

  test('Testa se a aplicação é redirecionada para a página inicial', () => {
    const { history } = renderWithRouter(<App />);

    const home = screen.getByText(/Home/i);

    fireEvent.click(home);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('Testa se a aplicação é redirecionada para a página de About', () => {
    const { history } = renderWithRouter(<App />);

    const about = screen.getByText(/About/i);

    fireEvent.click(about);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('Testa se é redirecionada para a página de Pokémons Favoritados', () => {
    const { history } = renderWithRouter(<App />);

    const favoritePokemons = screen.getByText(/Favorite Pokémons/i);

    fireEvent.click(favoritePokemons);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  test('Testa se é redirecionada para a página NotFound', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/xablau');
  });
});
