import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import BookForm from './BookForm';
import React from 'react';

describe('<BookForm />', () => {
  test('it should mount', () => {
    render(<BookForm searchBooks={()=>{}} cancelSearch={()=>{}}/>);
    
    const bookForm = screen.getByTestId('BookForm');

    expect(bookForm).toBeInTheDocument();
  });
});