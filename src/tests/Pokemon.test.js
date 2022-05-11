import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Requisito 6 - Testa o componente Pokemon.js', () => {
  test('Testa se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);

    const namePokemon = screen.getByTestId('pokemon-name');
    expect(namePokemon).not.toHaveTextContent('');

    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon).not.toHaveTextContent('');

    const weightPokemon = screen.getByTestId('pokemon-weight');
    expect(weightPokemon).toHaveTextContent(/weight/);
    expect(weightPokemon).toHaveTextContent(/[0-9]/);
    expect(weightPokemon).toHaveTextContent(/kg/);

    const imgPokemon = screen.getByAltText(/sprite/i);
    expect(imgPokemon.src).not.toBe('');
  });

  // Teste se o card do pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste pokémon. O link deve possuir a URL /pokemons/<id>, onde <id> é o id do pokémon exibido;
  test('Testa o card do pokémon indicado na Pokédex contém um link de navegação', () => {
    renderWithRouter(<App />);

    const linkNavigator = screen.getByRole('link', {
      name: /More Details/i,
    });
    // aninhando o matcher assimétrico com expect.stringMatching (Documentação)
    expect(linkNavigator).toHaveAttribute('href', expect.stringMatching(/pokemons/));
  });

  // Teste se ao clicar no link de navegação do pokémon, é feito o redirecionamento da aplicação para a página de detalhes de pokémon.
  test('Testa ao clicar no link navegação do pokémon, redireciona a aplicação', () => {
    renderWithRouter(<App />);

    const navigator = screen.getByText(/More Details/i);
    fireEvent.click(navigator);

    const pokemon = screen.getByRole('heading', {
      level: 2,
      name: 'Pikachu Details',
    });
    expect(pokemon).toBeInTheDocument();
  });

  // Teste também se a URL exibida no navegador muda para /pokemon/<id>, onde <id> é o id do pokémon cujos detalhes se deseja ver;
  test('Testa também se a URL exibida no navegador muda para /pokemon/<id>', () => {
    const { history } = renderWithRouter(<App />);

    const linkDetails = screen.getByText(/More details/i);
    fireEvent.click(linkDetails);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  test('Testa se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);

    // Passo 1: Simula o click no More details
    fireEvent.click(screen.getByText(/More details/));

    // Passo 2: Simula o acesso ao checkbox para favoritar
    const favoriteCheckin = screen.getByRole('checkbox');
    expect(favoriteCheckin).toBeInTheDocument();

    // Passo 3: Simula o click no Checkbox
    fireEvent.click(favoriteCheckin);

    // Passo 4: Simula se o pokemon foi favoritado
    const favoritePoke = screen.getByAltText(/is marked as favorite/);
    expect(favoritePoke).toBeInTheDocument();

    // Passo 5: Testa se tem o icon star
    fireEvent.click(favoriteCheckin);
    expect(favoritePoke).toHaveProperty('src', 'http://localhost/star-icon.svg');
  });
});
