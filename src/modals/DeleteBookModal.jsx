import React from 'react';
import styles from './DeleteBookModal.module.css'
import MyButton from '../components/UI/MyButton/MyButton';
import MyModal from '../components/UI/myModal/MyModal';
import MyButtonInv from '../components/UI/MyButtonInv/MyButtonInv';

function DeleteBookModal({visible, setVisible, setBooks}) {
  return (
    <MyModal visible={visible} setVisible={setVisible}>
        <div className={styles.closeButton}>
          <MyButton onClick={()=>setVisible(false)}>X</MyButton>
        </div>
        <div>Вы уверены, что хотите удалить всю информацию об этой книге?</div>
        <div className={styles.deleteButtons}>
          <MyButton>Да</MyButton>
          <MyButtonInv onClick={() => setVisible(false)}>Отмена</MyButtonInv>
        </div>
      </MyModal>
    );
}

export default DeleteBookModal;