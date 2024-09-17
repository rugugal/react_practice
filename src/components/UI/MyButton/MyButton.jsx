import React, { Children } from 'react';
import styles from './MyButton.module.css'

function MyButton({title, onClick, children}) {
  return (  
    <button title={title} onClick={onClick} className={styles.myButton}>{children}</button>
  );
}

export default MyButton;