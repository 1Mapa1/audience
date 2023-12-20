import React, { createContext, useState, useEffect, useContext } from 'react';


// Создаем контекст для хранения информации о пользователе
const UserContext = createContext();


// Создаем компонент-провайдер для UserContext
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    // Здесь можно например проверить, сохранен ли пользователь в localStorage или сессионном хранилище,
    // и установить его состояние в зависимости от результата
    const savedUser = JSON.parse(localStorage.getItem('user'));
    
    if (savedUser) {
      setUser(savedUser);
    }
    setLoading(false);
  }, []);

  return (
    <UserContext.Provider value={{ user,isLoading, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Создаем хук, который можно использовать внутри компонентов для получения информации о пользователе
const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, useUser };