import React, { createContext, useContext, useState } from 'react';

// Создаем контекст
const AuthContext = createContext();

// Создаем провайдер
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Булевая переменная для авторизации
  const [isAdmin, setIsAdmin] = useState(true); // Булевая переменная для проверки админа

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, isAdmin, setIsAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

// Создаем хук для использования контекста
export const useAuth = () => {
  return useContext(AuthContext);
};
