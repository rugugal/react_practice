import React, { useState } from 'react';
import styles from './bookDetail.module.css';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../AuthContext/AuthContext';
import MyButton from '../../components/UI/MyButton/MyButton';
import MyButtonInv from '../../components/UI/MyButtonInv/MyButtonInv';
import EditModal from '../../modals/EditModal';
import DeleteBookModal from '../../modals/DeleteBookModal';
import Author from '../../components/author/Author';

function BookDetail({ books, authors, setBooks, setAuthors }) {
  const { id } = useParams();
  const book = books.find((book) => book.id === Number(id));
  const { isAdmin } = useAuth();

  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [editedBook, setEditedBook] = useState(book);

  if (!book) {
    return <h2>Книга не найдена!</h2>;
  }

  const author = authors.find((author) => author.id === book.authorID);
  
  return (
    <div className={styles.bookDetail}>
      <EditModal
        visible={modalVisible}
        setVisible={setModalVisible}
        editedBook={editedBook}
        setBooks={setBooks}
        authors={authors}
        setAuthors={setAuthors}
      />

      <DeleteBookModal
        visible={deleteModalVisible}
        setVisible={setDeleteModalVisible}
        setBooks={setBooks}
      />

      <div className={styles.bookDetail__img}>
        {book.img ? (
          <img src={book.img} alt={book.title} width="200px" height="300px" />
        ) : (
          <p>{book.title}<br />{author ? <Author author={author} /> : 'Автор не найден'}</p>
        )}
      </div>

      <div className={styles.bookDetail__info}>
        <h2>{book.title}</h2>
        <p>{author ? <Author author={author} /> : 'Автор не найден'}</p>
        <p>{book.availableCopies === 0 ? 'Нет в наличии' : 'В наличии'}</p>
        <p>Жанр: {book.genre}</p>
        <p>{book.description}</p>

        {isAdmin 
          ? <div className={styles.buttons}>
            <MyButton onClick={() => setModalVisible(true)}>Редактировать</MyButton>
            <MyButtonInv onClick={() => setDeleteModalVisible(true)}>Удалить</MyButtonInv>
          </div>
          : <MyButton>Взять</MyButton>
        }
      </div>
    </div>
  );
}

export default BookDetail;
