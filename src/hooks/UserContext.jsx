import React, { createContext, useState, useEffect, useContext } from 'react';


// Создаем контекст для хранения информации о пользователе
const UserContext = createContext();


// Создаем компонент-провайдер для UserContext
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ loading: true, data: null });

  const setUserData = (data) => {
    setUser({data: data});
  };

  useEffect(() => {
    setUser({ loading: false, data: JSON.parse(window.localStorage.getItem('user'))});
  }, []);
//2. if object with key 'authData' exists in localStorage, we are putting its value in auth.data and we set loading to false. 
//This function will be executed every time component is mounted (every time the user refresh the page);

  useEffect(() => {
    window.localStorage.setItem('user', JSON.stringify(user.data));
  }, [user.data]);
// 1. when **auth.data** changes we are setting **auth.data** in localStorage with the key 'authData'.




  return (
    <UserContext.Provider value={{ user, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// Создаем хук, который можно использовать внутри компонентов для получения информации о пользователе
const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, useUser };