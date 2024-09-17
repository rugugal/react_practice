import React, { useState } from 'react';
import MyModal from '../components/UI/myModal/MyModal';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/MyButton/MyButton';

function AddAuthorModal({ visible, setVisible, setAuthors }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateofBirth, setDateofBirth] = useState('');
  const [country, setCountry] = useState('');

  const addAuthor = (newAuthor) => {
    setAuthors((prevAuthors) => [...prevAuthors, newAuthor]);
  };

  const handleAddAuthor = () => {
    if (firstName && lastName && dateofBirth && country) {
      const newAuthor = {
        id: Date.now(),
        firstName,
        lastName,
        dateofBirth,
        country,
      };
      addAuthor(newAuthor);
      setVisible(false); // Закрываем модальное окно
      setFirstName(''); // Сбрасываем поля
      setLastName('');
      setDateofBirth('');
      setCountry('');
    }
  };

  return (
    <MyModal visible={visible} setVisible={setVisible}>
      <h2>Добавить нового автора</h2>
      
      <MyInput
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Имя"
      />
      
      <MyInput
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Фамилия"
      />
      
      <MyInput
        type="date"
        value={dateofBirth}
        onChange={(e) => setDateofBirth(e.target.value)}
        placeholder="Дата рождения"
      />
      
      <MyInput
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Страна"
      />
      
      <MyButton onClick={handleAddAuthor}>Добавить автора</MyButton>
    </MyModal>
  );
}

export default AddAuthorModal;
