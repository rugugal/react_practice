import React, { useState, useEffect } from 'react';
import styles from './EditModal.module.css';
import MyInput from '../components/UI/input/MyInput';
import MyModal from '../components/UI/myModal/MyModal';
import MyButton from '../components/UI/MyButton/MyButton';
import MyTextarea from '../components/UI/textarea/MyTextarea';
import AddAuthorModal from './AddAuthorModal';
import AuthorSelect from '../components/authorSelect/AuthorSelect';

function AddBookModal({ visible, setVisible, setAuthors, editedBook, authors, setBooks }) {
  const [localEditedBook, setLocalEditedBook] = useState(editedBook || {
    title: '',
    genre: '',
    description: '',
    availableCopies: 0,
    authorID: null,
    img: '',
  });
  const [imagePreview, setImagePreview] = useState(localEditedBook.img || '');
  const [addAuthorModalVisible, setAddAuthorModalVisible] = useState(false); // State for adding author modal
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalEditedBook({
      ...localEditedBook,
      [name]: value,
    });
  };
  // Handle author selection
  const handleSelectAuthor = (author) => {
    setLocalEditedBook({
      ...localEditedBook,
      authorID: author.id,
    });
  };
  

  // Open modal for adding a new author
  const handleAddAuthorClick = () => {
    setAddAuthorModalVisible(true);
  };

  // Handle image upload
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

  // Save book
  const handleSave = () => {
    if (!localEditedBook.authorID) {
      alert('Выберите автора!');
      return;
    }
  
    // Add book to the list
    setBooks((prevBooks) => [
      ...prevBooks,
      { ...localEditedBook, id: Date.now() }
    ]);
  
    // Close modal after saving
    setVisible(false);
  };
  
  useEffect(() => {
    setLocalEditedBook(editedBook || {
      title: '',
      genre: '',
      description: '',
      availableCopies: 0,
      authorID: null,
      img: '',
    });
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

      {/* Use AuthorSelect component for author selection */}
      <AuthorSelect
        authors={authors}
        onSelectAuthor={handleSelectAuthor}
        onAddAuthor={handleAddAuthorClick} // Pass the handler for opening the add author modal
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
        setAuthors={setAuthors}
      />
    </MyModal>
  );
}

export default AddBookModal;
