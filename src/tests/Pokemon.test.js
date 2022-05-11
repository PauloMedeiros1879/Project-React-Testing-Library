import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Requisito 6 - Testa o componente Pokemon.js', () => {
  test('Testa se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);

    const namePokemon = screen.getByTestId('pokemon-name');
    expect(namePokemon).not.toHaveTextContent('');

    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon).not.toHaveTextContent('');

    const weigthPokemon = screen.getByTestId('pokemon-weight');
    expect(weigthPokemon).toHaveTextContent(/weigth/);
    expect(weigthPokemon).toHaveTextContent(/[0,9]/);
    expect(weigthPokemon).toHaveTextContent(/kg/);

    const imgPokemon = screen.getByAltText(/sprite/i);
    expect(imgPokemon.src).not.toBe('');
  });

  // Teste se o card do pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste pokémon. O link deve possuir a URL /pokemons/<id>, onde <id> é o id do pokémon exibido;
  test('Testa o card do pokémon indicado na Pokédex contém um link de navegação', () => {
    renderWithRouter(<App />);
  });

  // Teste se ao clicar no link de navegação do pokémon, é feito o redirecionamento da aplicação para a página de detalhes de pokémon.
  test('Testa ao clicar no link navegação do pokémon, redireciona a aplicação', () => {
    renderWithRouter(<App />);
  });

  // Teste também se a URL exibida no navegador muda para /pokemon/<id>, onde <id> é o id do pokémon cujos detalhes se deseja ver;
  test('Testa também se a URL exibida no navegador muda para /pokemon/<id>', () => {
    renderWithRouter(<App />);
  });

  test('Testa se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);
  });
});
