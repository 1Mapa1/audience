import React from "react";
import { LoginForm, Header} from "components";

const Login = () => {
  return (
    <>
    <div className="bg-grey-bg font-sourcesanspromx-auto pb-[27px] px-[27px] md:px-[0px] relative w-full">
        <div className="font-inter flex items-center justify-center h-[100vh]  max-w-[1360px] mx-auto w-full z-[1] body-login">
          <Header>

          </Header>

          <main className="main-block mt-10">
            <div className="login-box w-[600px] sm:w-[100%] px-[40px] py-[20px] sm:px-[20px]">
                <p className="mb-10 text-xl">Вход</p>
                <LoginForm></LoginForm>
                <p className="mt-10 text-center">Пароль и логин выдает администарция</p>
            </div>
          </main>
        </div>
    </div>
    </>);
  
}

export default Login;