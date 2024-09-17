import React, { useState } from 'react';

import styles from './AuthorSelect.module.css';
import MyInput from '../UI/input/MyInput';

const AuthorSelect = ({ authors, onSelectAuthor, currentAuthor, onAddAuthor }) => {
  const [searchQuery, setSearchQuery] = useState(
    currentAuthor ? `${currentAuthor.firstName} ${currentAuthor.lastName}` : ''
  );
  const [filteredAuthors, setFilteredAuthors] = useState([]);
  const [isFocused, setIsFocused] = useState(false); // Для отслеживания фокуса

  // Обрабатываем ввод текста и фильтруем авторов
  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);

    // Фильтруем авторов по введённому значению
    const filtered = authors.filter((author) =>
      `${author.firstName} ${author.lastName}`.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredAuthors(filtered);
  };

  // Обрабатываем выбор автора
  const handleSelectAuthor = (author) => {
    setSearchQuery(`${author.firstName} ${author.lastName}`);
    setFilteredAuthors([]);
    onSelectAuthor(author); // Вызываем функцию для сохранения выбранного автора
    setIsFocused(false); // Закрываем выпадающий список при выборе
  };

  // Обработчики фокуса и потери фокуса
  const handleFocus = () => {
    setIsFocused(true); // Показываем список при фокусе
  };

  const handleBlur = () => {
    setTimeout(() => setIsFocused(false), 200); // Скрываем список с задержкой, чтобы успеть выбрать автора
  };

  return (
    <div className={styles.authorSelect}>
      {/* Поле ввода для поиска авторов */}
      <MyInput
        type="text"
        value={searchQuery} 
        onChange={handleInputChange}
        onFocus={handleFocus} // Обрабатываем фокус
        onBlur={handleBlur} // Обрабатываем потерю фокуса
        placeholder="Введите имя автора"
      />

      {/* Выпадающий список автоподсказок, который появляется при фокусе */}
      {isFocused && (
        <ul className={styles.suggestions}>
          {filteredAuthors.length > 0 ? (
            filteredAuthors.map((author) => (
              <li
                key={author.id}
                className={styles.suggestionItem}
                onClick={() => handleSelectAuthor(author)}
              >
                {author.firstName} {author.lastName}
              </li>
            ))
          ) : (
            <li
              className={styles.suggestionItem}
              onClick={onAddAuthor} // Открываем модальное окно добавления автора
            >
              Добавить автора "{searchQuery}"
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default AuthorSelect;
