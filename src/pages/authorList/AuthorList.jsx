import React, { useState } from 'react';
import styles from './AuthorList.module.css'
import AuthorItem from '../../components/authorItem/AuthorItem';
import AddAuthorModal from '../../modals/AddAuthorModal';
import MyButton from '../../components/UI/MyButton/MyButton';
import { useAuth } from '../../AuthContext/AuthContext';

function AuthorList({authors, setAuthors}) {
  const [openModal, setOpenModal] = useState(false);
  const { isAdmin } = useAuth();
  return (
    <div>
      <AddAuthorModal 
        visible={openModal} 
        setVisible={setOpenModal} 
        setAuthors={setAuthors}
      />
      <div className={styles.addButton}>
        {isAdmin && <MyButton onClick={() => setOpenModal(true)} title="Добавить автора">+</MyButton>}
      </div>
      {authors.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Авторы не найдены</p>
      ) : (
        <div className={styles.authorList}>
          {authors.map((author) => {
            return (
              <AuthorItem author={author} />
            );
          })}
        </div>
      )}
    </div>
    );
}

export default AuthorList;