import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../components/NotFound';

describe('Requisito 4 - Testa o componente NotFound.js', () => {
  test('Testa se contém um heading h2 com o texto Page requested not found 😭', () => {
    renderWithRouter(<NotFound />);

    const text = screen.getByRole('heading', {
      level: 2,
      name: /Page requested not found/i,
    });
    expect(text).toBeInTheDocument();
  });

  test('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<NotFound />);

    const image = screen.getByAltText(
      'Pikachu crying because the page requested was not found',
    );
    expect(image).toBeInTheDocument();
    expect(image.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
