import React, { useState, useEffect } from 'react';
import MySelect from '../UI/select/MySelect';
import MyButton from '../UI/MyButton/MyButton';

function BookFilter({ books, setFilteredBooks, authors }) {
  const [selectedSort, setSelectedSort] = useState(''); // Состояние для выбранной сортировки
  const [selectedGenre, setSelectedGenre] = useState(''); // Состояние для выбранного жанра
  const [selectedAuthor, setSelectedAuthor] = useState(''); // Состояние для выбранного автора

  // Получение списка уникальных жанров
  const genres = Array.from(new Set(books.map(book => book.genre))).filter(Boolean); // Убираем пустые значения

  // Получение списка уникальных авторов (полное имя)
  const authorsList = authors.map(author => `${author.firstName} ${author.lastName}`);

  useEffect(() => {
    filterAndSortBooks();
  }, [selectedSort, selectedGenre, selectedAuthor]);

  const handleSortChange = (sort) => {
    setSelectedSort(sort);
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const handleAuthorChange = (author) => {
    setSelectedAuthor(author);
  };

  // Функция для фильтрации и сортировки книг
  const filterAndSortBooks = () => {
    let filtered = [...books];

    // Фильтрация по жанру
    if (selectedGenre) {
      filtered = filtered.filter(book => book.genre === selectedGenre);
    }

    // Фильтрация по автору (сравниваем с полным именем автора)
    if (selectedAuthor) {
      filtered = filtered.filter(book => {
        const bookAuthor = `${authors.find(author => author.id === book.authorID)?.firstName} ${authors.find(author => author.id === book.authorID)?.lastName}`;
        return bookAuthor === selectedAuthor;
      });
    }

    // Сортировка
    if (selectedSort) {
      filtered = filtered.sort((a, b) => {
        if (selectedSort === 'title') {
          return a.title.localeCompare(b.title);
        } else {
          return a.id - b.id; // Сортировка по id
        }
      });
    }

    // Обновляем отфильтрованные и отсортированные книги
    setFilteredBooks(filtered);
  };

  // Функция для сброса фильтров
  const resetFilters = () => {
    setSelectedSort('');      // Сбрасываем сортировку
    setSelectedGenre('');     // Сбрасываем выбранный жанр
    setSelectedAuthor('');    // Сбрасываем выбранного автора
    setFilteredBooks(books);  // Возвращаем оригинальный список книг
  };

  return (
    <div>
      <MySelect
        defaultValue='Сортировать по'
        value={selectedSort}
        onChange={handleSortChange}
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'id', name: 'По умолчанию' }
        ]}
      />
      <MySelect
        defaultValue='Выбрать жанр'
        value={selectedGenre}
        onChange={handleGenreChange}
        options={[
          { value: '', name: 'Все жанры' },
          ...genres.map(genre => ({ value: genre, name: genre }))
        ]}
      />
      <MySelect
        defaultValue='Выбрать автора'
        value={selectedAuthor}
        onChange={handleAuthorChange}
        options={[
          { value: '', name: 'Все авторы' },
          ...authorsList.map(author => ({
            value: author,
            name: author
          }))
        ]}
      />

      {/* Кнопка сброса фильтров */}
      <MyButton onClick={resetFilters} title='Сбросить фильтры'>
        Х
      </MyButton>
    </div>
  );
}

export default BookFilter;
