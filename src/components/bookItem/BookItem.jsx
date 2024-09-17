import React from 'react';
import styles from './BookItem.module.css';
import Author from '../author/Author';

function BookItem({ book, author }) { // Получаем объект автора
  return ( 
    <div className={styles.bookItem}>
      <div className={styles.bookItem__img}>
        {book.img ? (
          <img src={book.img} loading="lazy" alt={book.title} width="150px" height="220px" />
        ) : (
          <p className={styles.bookItem__noImg}>{book.title}<br />{author ? `${author.firstName} ${author.lastName}` : 'Автор не найден'}</p>
        )}
      </div>
      <h3 className={styles.bookItem__title}>
        {book.title.length > 34 ? `${book.title.slice(0, 30)}...` : book.title}
      </h3>
      <p className={styles.bookItem__author}>
        {author ? <Author author={author} /> : 'Автор не найден'}
      </p>
      <p className={styles.bookItem__outOfStock}>
        {book.availableCopies === 0 ? 'Нет в наличии' : ''}
      </p>
    </div>
  );
}

export default BookItem;
