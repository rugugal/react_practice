import React from 'react';
import { useParams } from 'react-router-dom';
import BookList from '../../components/bookList/BookList'


function AuthorDetail({ authors, books }) {
  const { id } = useParams();
  const author = authors.find(author => author.id === parseInt(id));

  if (!author) {
    return <div>Автор не найден</div>;
  }

  // Фильтруем книги по authorID
  const authorBooks = books.filter(book => book.authorID === author.id);

  return (
    <div>
      <h1>{author.firstName} {author.lastName}</h1>
      <p>Дата рождения: {author.dateofBirth}</p>
      <p>Страна: {author.country}</p>
      
      {/* Отображаем книги автора */}
      <h2>Книги автора:</h2>
      <BookList books={authorBooks} authors={authors} /> {/* Передаем книги автора в BookList */}
    </div>
  );
}

export default AuthorDetail;
