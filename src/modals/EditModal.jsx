import React, { useState, useEffect } from 'react';
import styles from './EditModal.module.css';
import MyInput from '../components/UI/input/MyInput';
import MyModal from '../components/UI/myModal/MyModal';
import MyButton from '../components/UI/MyButton/MyButton';
import MyTextarea from '../components/UI/textarea/MyTextarea';
import AddAuthorModal from './AddAuthorModal';
import AuthorSelect from '../components/authorSelect/AuthorSelect';

function EditModal({ visible, setVisible, editedBook, authors, setBooks, setAuthors }) {
  const [localEditedBook, setLocalEditedBook] = useState(editedBook);
  const [imagePreview, setImagePreview] = useState(editedBook.img || '');
  const [addAuthorModalVisible, setAddAuthorModalVisible] = useState(false); // Добавляем состояние для модального окна
  const currentAuthor = authors.find(author => author.id === localEditedBook.authorID);
  // Обработка изменения текстовых полей
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalEditedBook({
      ...localEditedBook,
      [name]: value,
    });
  };
  const addAuthor = (newAuthor) => {
    setAuthors((prevAuthors) => [...prevAuthors, newAuthor]);
  };
  // Обработка загрузки изображения
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLocalEditedBook((prevBook) => ({
          ...prevBook,
          img: reader.result,
        }));
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Обработка выбора автора из списка
  const handleSelectAuthor = (author) => {
    setLocalEditedBook({
      ...localEditedBook,
      authorID: author.id,
    });
  };
  const handleAddAuthor = () => {
    setAddAuthorModalVisible(true);
  };

  // Сохранение изменений
  const handleSave = () => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === localEditedBook.id ? localEditedBook : book
      )
    );
    setVisible(false);
  };

  useEffect(() => {
    setLocalEditedBook(editedBook);
  }, [editedBook]);

  return (
    <MyModal visible={visible} setVisible={setVisible}>
      <div className={styles.closeButton}>
        <MyButton onClick={() => setVisible(false)}>X</MyButton>
      </div>

      <div className={styles.imagePreview}>
        {imagePreview ? (
          <img src={imagePreview} alt="Обложка книги" width="200px" height="300px" />
        ) : (
          <p>Нет обложки</p>
        )}
      </div>

      <MyInput type="file" name="img" accept="image/*" onChange={handleImageChange} />

      <MyInput
        type="text"
        name="title"
        value={localEditedBook.title}
        onChange={handleInputChange}
        placeholder="Название книги"
      />

      {/* Используем компонент выбора автора */}
      <AuthorSelect
        authors={authors}
        onSelectAuthor={(author) => console.log('Selected Author:', author)}
        onAddAuthor={handleAddAuthor} // Передаем обработчик открытия модального окна
      />

      <MyInput
        type="number"
        name="availableCopies"
        value={localEditedBook.availableCopies}
        min="0"
        onChange={handleInputChange}
        placeholder="Количество оставшихся книг"
      />

      <MyInput
        type="text"
        name="genre"
        value={localEditedBook.genre}
        onChange={handleInputChange}
        placeholder="Жанр"
      />

      <MyTextarea
        style={{ width: '100%' }}
        name="description"
        value={localEditedBook.description}
        onChange={handleInputChange}
      />

      <MyButton onClick={handleSave}>Сохранить</MyButton>

      <AddAuthorModal
        visible={addAuthorModalVisible}
        setVisible={setAddAuthorModalVisible}
        addAuthor={addAuthor}
      />
    </MyModal>
  );
}

export default EditModal;
