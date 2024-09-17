import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookItem from '../../components/bookItem/BookItem'; // Компонент для отображения книги
import styles from './BookList.module.css';
import { useAuth } from '../../AuthContext/AuthContext';
import MyButton from '../../components/UI/MyButton/MyButton';
import MyModal from '../UI/myModal/MyModal';
import AddBookModal from '../../modals/AddBookModal';

function BookList({ books, setBooks, authors, setAuthors }) {
  const [openModal, setOpenModal] = useState(false); // Состояние для управления видимостью модального окна
  const { isAdmin } = useAuth(); // Проверка прав администратора

  // Функция поиска автора по его ID
  const findAuthorById = (authorID) => {
    if (!authors) {
      return null;
    }
    return authors.find(author => author.id === authorID);
  };
  
  return (
    <div className={styles.container}>
      {/* Модальное окно для добавления книги */}
      <AddBookModal visible={openModal} setVisible={setOpenModal} books={books} authors={authors} setBooks={setBooks} setAuthors={setAuthors}/>

      {/* Кнопка добавления книги для администратора */}
      <div className={styles.addButton}>
        {isAdmin && <MyButton onClick={() => setOpenModal(true)} title="Добавить книгу">+</MyButton>}
      </div>
      
      {/* Отображение списка книг */}
      {books.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Книги не найдены</p>
      ) : (
        <div className={styles.bookList}>
          {books.map((book, index) => {
            const author = findAuthorById(book.authorID); // Находим автора по его ID
            return (
              <Link to={`/book/${book.id}`} key={index} className={styles.bookLink}>
                <BookItem book={book} author={author} /> {/* Передаем автора в BookItem */}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default BookList;
