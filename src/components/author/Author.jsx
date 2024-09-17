// components/Author/Author.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Author.module.css'
function Author({ author }) {
  return (
    <Link to={`/author/${author.id}`}>
      <div  className={styles.author}>{author.firstName} {author.lastName}</div>
    </Link>
  );
}

export default Author;
