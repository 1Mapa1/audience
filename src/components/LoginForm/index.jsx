import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Text } from 'components';
// import { isUserConfirm } from 'repo/IsUserConfirm';
// import useAuth from 'hooks/useAuth';
import { useUser } from 'hooks/UserContext';
import { isUserConfirm } from 'repo/IsUserConfirm';
import { useNavigate } from 'react-router-dom';




const LoginForm = () => {
  const { setUserData } = useUser();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
      navigate('/');
    } else {
      document.getElementById("error-text").style.display = "block"
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
      <div className='w-[423px] my-[10px] h-[24px]'><Text className='w-full text-center hidden text-red-500' id="error-text">Вы ввели не правильный логин или пароль</Text></div>
      <Button type="submit" className="cursor-pointer mt-[20px] font-semibold leading-[normal] mb-1 min-w-[200px] text-center text-l">
        Вход
      </Button>
    </form>
  );
}

export { LoginForm };