import React, { Children } from 'react';
import styles from './MyButtonInv.module.css'

function MyButtonInv({children,title, onClick}) {
  return (  
    <button title={title} onClick={onClick} className={styles.myButton}>{children}</button>
  );
}

export default MyButtonInv;