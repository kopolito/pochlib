import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import Book from './Book';
import React from 'react';

describe('<Book />', () => {
  test('it should mount', () => {
    const bookObject = {id: "", title: "", author: "", description: "", thumbnail: ""}
    
    render(<Book book={bookObject} key={0} index={0} bookAction={()=>{}} favouriteMode={false} />);
    
    const book = screen.getByTestId('Book');

    expect(book).toBeInTheDocument();
  });
});