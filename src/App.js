import React, { useState } from 'react';
import './styles/reset.css';
import './styles/common.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthForm from './pages/authForm/AuthForm';
import BookDetail from './pages/bookDetail/bookDetail';
import Header from './components/header/Header';
import AuthorDetail from './pages/authorDetail/AuthorDetail';
import BooksPage from './pages/booksPage/BooksPage';
import AuthorList from './pages/authorList/AuthorList';

function App() {
  const booksArr = [
    { id: 1,
      img:"https://yandex-images.clstorage.net/bN5FK0232/336a7cn-C9-g/vtoYiOahDMby6Bq1v9jqSZnufvY3Ji0_A8qHCZ97-W5S1Tb5jxIaGAZcYngZzEZTcMO80B83Sg1AaGvtX95LoMq-3OzXVMkCk11aNY-Iy5xN328zl2P8myYPM1kq-2l-IXbU_hgU-K5BSxDffcxzkxX3CGVrsfms1508X2m7vYE9aCt7sAEOpNaJKJYf2-n_2Xxu48UjLgwWX4BseYwd-DKkFl5IBCkN8VhDLz_e0QP3BHxEC7OaOYcMvK8ZqF3STDk7GcFCrcbWuhrGHovr7VhfDaFW4R3vhS5jHDkOP0oQ1GWM-OX7zkCpkp_ePVDwZZRsN8tgKRjHH67sOamckrzpidtwg3z21OvqFjyKK0zrvm4SVeLsvMSc8i5qbn1rMwYnf3jGWg_RWZPu_1xyE3cEThQbURqpt-4MjEv7TqKf2PqIg0Lt5dUJCvUsOGv-We7vo9UArw4XTSINyj0c2IDVZ097ZypsIRhwrK9-MEJHRH4H-4LoSIfsnm8YO_2B7fqJC3ETDuRU-bk3H1gL3NpOPyBU410dl78BfFuM3evCRbee2tWqPeJZc21PDLJh1IRcJ9jxOtukHG-9yXlPYP96iMkiIt7llssalczK6l75PW0gpQK-vQVfom67Di85YMWG30mlK_2BKjAcvH9AESQGD6QIcQtp5K38rcto3bOPuukZ8MHONEU6qMTdelrMai6OkCfSjy-3nsLfCbwMCHCl5k0qRll9sLuSrVwMovO2B-52y6No66VsPy_quzzRjLqLSRABb-ZlKIo0fJhpnTguXyDn8swNZk-AzLuPnCmi5qfNKTUZPAOLI04MnkDSZwf8x1ryagvWrC4ea8hOgG_LmNvAoW_n5Uqp5mwJq5-rfs4RxBNsngZN8N467Y0aE-QXzojGak_BaEIfPu_xYDamfaZIABqYp11O7knbbfGvqZjLwjNNFEVbGaefaNjfOc0_8IYwjX92vqNcY",
      title:"Грозовой перевал",
      genre: 'Классика',
      authorID: 1,
      description: "lakdf asfdlasfd asslfdka fgaslkflasgf asldfkassgf asdlfaslgka dsdlfkslgas dglasskgasg galddf",
      availableCopies: 0,
    },
    {id: 2,
      img:"",
      title:"Грозовой перевал",
      genre: 'Классика',
      authorID: 1,
      availableCopies: 34,
    },
    {
      id: 3,
      img:"https://avatars.mds.yandex.net/get-mpic/7467475/img_id7349918516664898557.jpeg/orig",
      title:"Идеальная работа. Программирование без прикрас",
      authorID: 2,
      genre: 'Фэнтэзи',
      availableCopies: 0,
    },
  ]
  const authorsArr = [
    {
      id: 1,
      firstName: 'Эмили',
      lastName: 'Бронте',
      dateofBirth: '20.06.2023',
      country: 'Англия'
    },
    {
      id: 2,
      firstName: 'Роберт',
      lastName: 'Мартинс',
      dateofBirth: '24.06.2023',
      country: 'Беларусь'
    },
    {
      id: 3,
      firstName: 'Эмили',
      lastName: 'Бронте',
      dateofBirth: '20.06.2023',
      country: 'Англия'
    },
    {
      id: 4,
      firstName: 'Эмили',
      lastName: 'Бронте',
      dateofBirth: '20.06.2023',
      country: 'Англия'
    },
    {
      id: 5,
      firstName: 'Эмили',
      lastName: 'Бронте',
      dateofBirth: '20.06.2023',
      country: 'Англия'
    },
  ];

  const [books, setBooks] = useState(booksArr);
  const [authors, setAuthors] = useState(authorsArr);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="registration" element={<AuthForm />} />
          <Route path="books" element={<BooksPage books={books} authors={authors} setBooks={setBooks} setAuthors={setAuthors}/>} />
          <Route path="authors" element={<AuthorList authors={authors} setAuthors={setAuthors}/>} />
          <Route path="book/:id" element={<BookDetail books={books} setBooks={setBooks} authors={authors} setAuthors={setAuthors}/>} />
          <Route path="author/:id" element={<AuthorDetail authors={authors} books={books} />} /> {/* Новый маршрут для автора */}
          <Route path="*" element={<Navigate to="books" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
