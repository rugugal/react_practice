import React, { useState, useEffect } from 'react';
import BookList from '../../components/bookList/BookList';
import BookFilter from '../../components/bookFilter/BookFilter';

function BooksPage({ books, setBooks, authors, setAuthors }) {
  const [filteredBooks, setFilteredBooks] = useState(books); // Управление состоянием отфильтрованных книг

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  return (
    <div>
      {/* Фильтры */}
      <BookFilter 
        books={books} 
        authors={authors} 
        setFilteredBooks={setFilteredBooks} 
      />

      {/* Список книг */}
      <BookList 
        books={filteredBooks} 
        setBooks={setBooks}
        authors={authors} 
        setAuthors={setAuthors}
      />
    </div>
  );
}

export default BooksPage;
