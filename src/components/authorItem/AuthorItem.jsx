import React from 'react';
import styles from './AuthorItem.module.css';
import Author from '../author/Author';

function AuthorItem({ author }) {
  return ( 
    <div className={styles.author}>
      <Author author={author} />
    </div>
  );
}

export default AuthorItem;
