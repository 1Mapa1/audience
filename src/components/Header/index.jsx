import React from "react";
import { Link } from "react-router-dom"; 
import { Img, Text} from "components";
import { useUser } from "hooks/UserContext";

const Header = (shadow) => {
    const {user, setUser } = useUser();
    function handleLogout() {
        setUser(null)
        localStorage.clear()
    }
    return (
        <>
            <header className={"absolute flex inset-x-[0] items-center justify-center mx-auto top-[0]"}>
                <div className={"bg-white-A700 flex flex-row sm:gap-10 items-center p-5 rounded-bl-[20px] rounded-br-[20px] header-block" + (shadow ? " shadow-md": "")}>
                    <Img
                        className="mb-[9px] ml-1.5 sm:ml-[0] object-cover img-logo"
                        src="images/img_image1.png"
                        alt="imageOne"
                    />
                    <div className="flex gap-[10px]">
                        <Link to="/page">
                            <Text
                                className="text-light_blue-800 text-logo"
                                size="txtInterSemiBold20"
                            >
                                Бронирование
                            </Text>
                        </Link>
                        { user ? (<Link to="" onClick={handleLogout}>
                                <Text
                                    className="text-light_blue-800 text-logo"
                                    size="txtInterSemiBold20"
                                >
                                    Выйти
                                </Text>
                            </Link>): (
                            <Link to="/login" >
                                <Text
                                    className="text-light_blue-800 text-logo"
                                    size="txtInterSemiBold20"
                                >
                                    Войти
                                </Text>
                            </Link>
                        )
                        }
                       
                    </div>
                </div>
          </header>
        </>
    )
}

export { Header };