import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import BookList from './BookList';
import React from 'react';

describe('<BookList />', () => {
  test('it should mount', () => {
    const listBook = [{id: "", title: "", author: "", description: "", thumbnail: ""}];
    
    render(<BookList books={listBook} bookAction={()=>{}} favouriteMode={true} />);
    
    const bookList = screen.getByTestId('BookList');

    expect(bookList).toBeInTheDocument();
  });
});