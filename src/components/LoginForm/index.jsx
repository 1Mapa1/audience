import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from 'components';
// import { isUserConfirm } from 'repo/IsUserConfirm';
// import useAuth from 'hooks/useAuth';
import { useUser } from 'hooks/UserContext';
import { isUserConfirm } from 'repo/IsUserConfirm';
import { Navigate } from 'react-router-dom';




const LoginForm = () => {
  const { setUserData } = useUser();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await isUserConfirm(login, password);
    if (userData) {
      setUserData(userData)
      console.log('Успешный вход');
      <Navigate to='/' replace />
    } else {
      console.log('Неправильное имя пользователя или пароль');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='text-center'>
      <div>
        <TextField
          label="Login"
          variant="outlined"
          margin="normal"
          type="text" 
          value={login} 
          onChange={handleLoginChange} 
          fullWidth
        />
      </div>
      <TextField        
        label="Пароль"
        variant="outlined"
        margin="normal"
        type="password" 
        value={password} 
        onChange={handlePasswordChange}
        fullWidth
      />
      <Button type="submit" className="cursor-pointer mt-10 font-semibold leading-[normal] mb-1 min-w-[200px] text-center text-l">
        Вход
      </Button>
    </form>
  );
}

export { LoginForm };