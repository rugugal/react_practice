import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <header className={styles.header}>
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        <li className={styles.navigation__listItem}><Link to="books">Все книги</Link></li>
        <li className={styles.navigation__listItem}><Link to="authors">Все авторы</Link></li>
        <li className={styles.navigation__listItem}><Link to="registration">Выйти</Link></li>
      </ul>
    </nav>
  </header>
  )
  
}
export default Header;