import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

function renderWithRouter(
    ui,
    { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
  ) {
    return {
      ...render(<Router history={ history }>{ui}</Router>),
      history,
    };
  }

  describe('Requisito 1 - Testando o componente App.js', () => {
test('Testa se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);

    const firstLink = screen.getByText(/Home/i);
    expect(firstLink).toBeInTheDocument();

    const secondLink = screen.getByText(/About/i);
    expect(secondLink).toBeInTheDocument();

    const thirdLink = screen.getByText(/Favorite Pokémons/i);
    expect(thirdLink).toBeInTheDocument();
});
test('Testa se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação.', () => {

})
  });
