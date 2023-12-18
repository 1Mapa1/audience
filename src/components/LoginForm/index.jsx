import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from 'components';
// import { isUserConfirm } from 'repo/IsUserConfirm';
// import useAuth from 'hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';




const LoginForm = () => {
  // const { setAuth } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/login-table'
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function saveCredentials(login, password, director_id) {
    localStorage.setItem('login', login);
    localStorage.setItem('password', password);
    localStorage.setItem('director_id', director_id);
  }

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const isConfirmed = await isUserConfirm(login, password);
    // if (isConfirmed) {
    //   console.log(isConfirmed);
    //   saveCredentials(login, password, isConfirmed);
    //   // setAuth(true);
    //   navigate(from, { replace: true });
    //   console.log('Успешный вход');
    // } else {
    //   console.log('Неправильное имя пользователя или пароль');
    // }
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