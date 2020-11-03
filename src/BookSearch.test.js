import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import BookSearch from './BookSearch';
import React from 'react';

describe('<BookSearch />', () => {
  test('it should mount', () => {
    render(<BookSearch addToBookmark={()=>{}}/>);
    
    const bookSearch = screen.getByTestId('BookSearch');

    expect(bookSearch).toBeInTheDocument();
  });
});